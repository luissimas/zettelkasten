---
created-at: 2023-05-06
---

The book gives an overview of [[Elixir]] and the [[OTP]] ecosystem in the context of building concurrent and fault-tolerant systems. Besides being aimed at more experienced programmers, the book still gives an overview of the building blocks of Elixir before jumping into its application for building concurrent systems. For this reason the notes here contained begin on chapter 4, since the first three chapters focus on the syntax of the language and a broad overview of its practical applications and runtime characteristics.

# Chapter 4: Data abstractions

In Elixir, abstract data types are implemented with stateless modules, as groups of functions data manipulate a specific data structure.

## Todo list

The main application example used is a to-do list system with basic CRUD operations. The idea is to define a data structure and then encapsulate all its operations on a module that combines functions to perform these operations. The functions usually receive the data structure as a first argument and return the resulting data structure after the operation, making them usable with the pipe `|>` operator.

``` elixir
defmodule TodoList do
  defstruct auto_id: 1, entries: %{}

  def new(entries \\ []) do
    Enum.reduce(entries, %__MODULE__{}, &add_entry(&2, &1))
  end

  def add_entry(%__MODULE__{auto_id: auto_id, entries: entries}, entry) do
    new_entry = Map.put(entry, :id, auto_id)
    new_entries = Map.put(entries, auto_id, new_entry)
    %__MODULE__{entries: new_entries, auto_id: auto_id + 1}
  end

  def entries(%__MODULE__{entries: entries}, date) do
    entries
    |> Stream.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end

  def update_entry(%__MODULE__{} = todo_list, %{} = new_entry) do
    update_entry(todo_list, new_entry.id, fn _ -> new_entry end)
  end

  def update_entry(%__MODULE__{entries: entries} = todo_list, id, updater_fun) do
    case Map.fetch(entries, id) do
      :error ->
        todo_list

      {:ok, old_entry} ->
        old_entry_id = old_entry.id
        new_entry = %{id: ^old_entry_id} = updater_fun.(old_entry)
        new_entries = Map.put(entries, new_entry.id, new_entry)
        %__MODULE__{todo_list | entries: new_entries}
    end
  end

  def delete_entry(%__MODULE__{entries: entries} = todo_list, id) do
    %__MODULE__{todo_list | entries: Map.delete(entries, id)}
  end
end
```

An example usage of the `TodoList` module:

``` elixir
todo_list =
  TodoList.new([
    %{date: ~D[2018-12-19], title: "Dentist"},
    %{date: ~D[2018-12-20], title: "Shopping"}
  ])
  |> TodoList.add_entry(%{date: ~D[2018-12-19], title: "Movies"})
  |> TodoList.add_entry(%{date: ~D[2018-12-19], title: "Work"})
  |> TodoList.update_entry(1, &Map.put(&1, :title, "Updated dentist"))
  |> TodoList.delete_entry(3)

TodoList.entries(todo_list, ~D[2018-12-19])
```

## Importing from CSV

We can also implement an importer module that constructs a to-do list with the entries present in a file. This is an example of how we can extend de functionality of a system by using existing abstractions.

``` elixir
defmodule TodoList.CsvImporter do
  def import(file_path) do
    file_path
    |> File.stream!()
    |> Stream.map(&String.trim/1)
    |> Enum.map(&parse_entry/1)
    |> TodoList.new()
  end

  defp parse_entry(entry) do
    [date, title] = String.split(entry, ",")
    [year, month, day] = date |> String.split("/") |> Enum.map(&String.to_integer/1)
    %{title: title, date: Date.new(year, month, day)}
  end
end
```

``` elixir
todo_list = TodoList.CsvImporter.import("attachments/todos.csv")
```

## Protocols

The chapter also explores the concept of polymorphism through protocols.

``` elixir
defimpl Collectable, for: TodoList do
  def into(original) do
    {original, &into_callback/2}
  end

  defp into_callback(todo_list, {:cont, entry}) do
    TodoList.add_entry(todo_list, entry)
  end

  defp into_callback(todo_list, :done), do: todo_list
  defp into_callback(_todo_list, :halt), do: :ok
end
```

``` elixir
entries = [
          %{date: ~D[2018-12-19], title: "Dentist"},
          %{date: ~D[2018-12-20], title: "Shopping"},
          %{date: ~D[2018-12-19], title: "Movies"}
        ]

for entry <- entries, into: TodoList.new(), do: entry
```

``` elixir
entries |> TodoList.new() |> Enum.map(&IO.inspect/1)
```

# Chapter 5: Concurrency primitives

In order to achieve high availability, the BEAM uses internal light-weight processes that are independent of each other and can run concurrently. The BEAM process is a single OS process that by default has one scheduler per core available on the system. Processes can be created cheaply and are able to keep internal state completely isolated from other processes. Processes can communicate with each other using messages.

> Concurrency vs. parallelism: It's important to realize that concurrency doesn't necessarily imply parallelism. Two concurrent things have independent execution contexts, but this doesn't mean they will run in parallel. If you run two CPU-bound concurrent tasks and you only have one CPU core, parallel execution can't happen. You can achieve parallelism by adding more CPU cores and relying on an efficient concurrent framework. But you should be aware that concurrency itself doesn't necessarily speed things up.

## Server processes

We can create server processes to handle some operations without blocking the caller process. We typically implement server processes using an infinite tail-recursive loop that waits and handles a new message, calling itself with the new state at the end. Processes can also maintain their own state. In this sense we can think of these stateful server processes as pure objects that can be interacted with via a public interface of functions that can query or update its state. In the following example we simulate a database server process that executes a fake query and then return the result to the caller process.

``` elixir
defmodule DatabaseServer do
  def start do
    spawn(fn ->
      connection = :rand.uniform(1000)
      loop(connection)
    end)
  end

  def run_async(server_pid, query_def) do
    send(server_pid, {:run_query, self(), query_def})
  end

  def get_result do
    receive do
      {:query_result, result} -> result
    after
      5000 -> {:error, :timeout}
    end
  end

  defp loop(connection) do
    receive do
      {:run_query, caller, query_def} ->
        query_result = run_query(connection, query_def)
        send(caller, {:query_result, query_result})
    end

    loop(connection)
  end

  defp run_query(connection, query_def) do
    Process.sleep(2000)
    "Connection #{connection}: #{query_def} result"
  end
end
```

:

``` example
{:module, DatabaseServer,
 <<70, 79, 82, 49, 0, 0, 11, 100, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 1, 85,
   0, 0, 0, 35, 21, 69, 108, 105, 120, 105, 114, 46, 68, 97, 116, 97, 98, 97,
   115, 101, 83, 101, 114, 118, 101, 114, 8, ...>>, {:run_query, 2}}
```

``` elixir
server_pid = DatabaseServer.start()

DatabaseServer.run_async(server_pid, 'query 1')
DatabaseServer.get_result()

DatabaseServer.run_async(server_pid, 'query 2')
DatabaseServer.get_result()
```

## Stateful server process

The following example implements a stateful server process for a calculator, showing how we can mutate and query the state of a server process.

``` elixir
defmodule Calculator do
  def start, do: spawn(fn -> loop(0) end)

  def add(pid, value), do: send(pid, {:add, value})
  def sub(pid, value), do: send(pid, {:sub, value})
  def mul(pid, value), do: send(pid, {:mul, value})
  def div(pid, value), do: send(pid, {:div, value})

  def value(pid) do
    send(pid, {:value, self()})

    receive do
      {:response, value} -> {:ok, value}
    after
      2000 ->
        {:error, :timeout}
    end
  end

  defp loop(state) do
    new_state =
      receive do
        message -> handle_message(message, state)
      end

    loop(new_state)
  end

  defp handle_message({:value, caller}, state) do
    send(caller, {:response, state})
    state
  end

  defp handle_message({:add, value}, state) do
    state + value
  end

  defp handle_message({:sub, value}, state) do
    state - value
  end

  defp handle_message({:mul, value}, state) do
    state * value
  end

  defp handle_message({:div, value}, state) do
    state / value
  end

  defp handle_message(invalid_request, state) do
    IO.puts("invalid request #{inspect(invalid_request)}")
    state
  end
end
```

:

``` example
{:module, Calculator,
 <<70, 79, 82, 49, 0, 0, 13, 136, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 1, 65,
   0, 0, 0, 40, 17, 69, 108, 105, 120, 105, 114, 46, 67, 97, 108, 99, 117, 108,
   97, 116, 111, 114, 8, 95, 95, 105, 110, ...>>, {:handle_message, 2}}
```

``` elixir
pid = Calculator.start()

Calculator.value(pid)

Calculator.add(pid, 10)
Calculator.sub(pid, 5)
Calculator.mul(pid, 3)
Calculator.div(pid, 5)

Calculator.value(pid)
```

## Todo list server

In the following example we explore the same concepts, but extend them by using the more complex `TodoList` data structure.

``` elixir
defmodule TodoList do
  defstruct auto_id: 1, entries: %{}

  def new(entries \\ []) do
    Enum.reduce(entries, %__MODULE__{}, &add_entry(&2, &1))
  end

  def add_entry(%__MODULE__{auto_id: auto_id, entries: entries}, entry) do
    new_entry = Map.put(entry, :id, auto_id)
    new_entries = Map.put(entries, auto_id, new_entry)
    %__MODULE__{entries: new_entries, auto_id: auto_id + 1}
  end

  def entries(%__MODULE__{entries: entries}, date) do
    entries
    |> Stream.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end

  def update_entry(%__MODULE__{} = todo_list, %{} = new_entry) do
    update_entry(todo_list, new_entry.id, fn _ -> new_entry end)
  end

  def update_entry(%__MODULE__{entries: entries} = todo_list, id, updater_fun) do
    case Map.fetch(entries, id) do
      :error ->
        todo_list

      {:ok, old_entry} ->
        old_entry_id = old_entry.id
        new_entry = %{id: ^old_entry_id} = updater_fun.(old_entry)
        new_entries = Map.put(entries, new_entry.id, new_entry)
        %__MODULE__{todo_list | entries: new_entries}
    end
  end

  def delete_entry(%__MODULE__{entries: entries} = todo_list, id) do
    %__MODULE__{todo_list | entries: Map.delete(entries, id)}
  end
end

defmodule TodoServer do
  @process_name :todo_server

  def start do
    pid = spawn(fn -> loop(TodoList.new()) end)
    Process.register(pid, @process_name)
  end

  def add_entry(entry), do: send(@process_name, {:add_entry, entry})

  def entries(date) do
    send(@process_name, {:entries, date, self()})

    receive do
      {:entries, entries} -> entries
    after
      2000 -> {:error, :timeout}
    end
  end

  defp loop(state) do
    new_state =
      receive do
        message -> handle_message(message, state)
      end

    loop(new_state)
  end

  defp handle_message({:add_entry, entry}, state) do
    TodoList.add_entry(state, entry)
  end

  defp handle_message({:entries, date, caller}, state) do
    send(caller, {:entries, TodoList.entries(state, date)})
    state
  end
end
```

``` elixir
TodoServer.start()

TodoServer.add_entry(%{date: ~D[2018-12-19], title: "Dentist"})
TodoServer.add_entry(%{date: ~D[2018-12-20], title: "Shopping"})
TodoServer.add_entry(%{date: ~D[2018-12-19], title: "Movies"})
TodoServer.entries(~D[2018-12-19])
```

## Runtime considerations

It\'s important to note a few runtime characteristics of BEAM processes that may affect the way we choose to use them.

1.  **Processes are sequential**: although multiple processes may run in parallel, a single process is always sequential. A single slow process can bottleneck an entire system if many processes depend of its computations. We should try to optimize such slow processes and in extreme cases we can resort to split the original process between multiple processes.
2.  **Unlimited process mailboxes**: a process\'s mailbox is limited by the available memory. With that in mind, if a process receives more messages than it can handle it will eventually crash the entire system. Because of that it\'s very important to always handle all messages, adding a default clause to `receive` blocks (because messages that do not match any clause are put back into the mailbox).
3.  **Shared-nothing concurrency**: processes share no memory. Thus, sending a message to another process results in a deep copy of the message contents. Because of that we should be careful when sending big amounts of data between processes, as it will all be deep copied. Some advantages of shared-nothing concurrency is that the system becomes more resilient and that garbage collection can be performed on a process level, without stopping the whole runtime.
4.  **Scheduler inner workings**: BEAM schedulers are preemptive, each process can run for about 2000 function calls. A process can yield its execution to the scheduler when executing a `receive` or performing an I/O operation. This makes the I/O code look synchronous, but under the hood it runs asynchronously using BEAM async threads. With that, we as programmers get a simpler model of programming without compromising the responsiveness of the system.

# Chapter 6: Generic server processes

Server processes are very frequent in concurrent systems in Elixir and Erlang, so it\'s natural that there are already some common abstractions and utilities available that facilitate the implementation of such processes. In Elixir this abstraction is provided by the `GenServer` module part of the OTP framework.

Elixir and Erlang offer multiple OTP-compliant abstractions, that is: modules that are based processes that adhere to OTP conventions. Those types of processes are easy to use in supervision trees, and have error-handling and logging benefits. Some common OTP-compliant abstractions are: `Task`, `Agent`, `GenState`, `Phoenix.Channel` etc. Note that many of these abstractions are built on top of `GenServer` (in fact, all the abstractions cited before, except for `Task`, are implemented using `GenServer`), which makes it arguably the most important OTP abstraction.

## Building a generic server process

To better understand `GenServer`, we\'ll implement a simplified version of it. The idea is to make a generic module that implements the following:

-   Spawn a process
-   Run an infinite loop in the process
-   Maintain the state
-   React to messages
-   Send the responses back to the caller

The generic module implements these operations, but relies on a `callback_module` provided as a parameter of the `start/0` function, that provides the concrete (business logic dependent) implementation, such as the handling of the messages and the updating of the state. The server supports both synchronous and asynchronous requests, via the `call` and `cast` operations, respectively.

``` elixir
defmodule ServerProcess do
  def start(callback_module) do
    spawn(fn ->
      initial_state = callback_module.init()
      loop(callback_module, initial_state)
    end)
  end

  def call(server_pid, request) do
    send(server_pid, {:call, request, self()})

    receive do
      {:response, response} -> response
    end
  end

  def cast(server_pid, request) do
    send(server_pid, {:cast, request})
  end

  def loop(callback_module, current_state) do
    receive do
      {:call, request, caller} ->
        {response, new_state} = callback_module.handle_call(request, current_state)
        send(caller, {:response, response})

        loop(callback_module, new_state)

      {:cast, request} ->
        new_state = callback_module.handle_cast(request, current_state)

        loop(callback_module, new_state)
    end
  end
end
```

:

``` example
{:module, ServerProcess,
 <<70, 79, 82, 49, 0, 0, 10, 204, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 1, 6,
   0, 0, 0, 28, 20, 69, 108, 105, 120, 105, 114, 46, 83, 101, 114, 118, 101,
   114, 80, 114, 111, 99, 101, 115, 115, 8, 95, ...>>, {:loop, 2}}
```

With that basic abstraction, is possible to issue requests to the server and get the results back, all while keeping internal state. Here\'s a simple `KeyValueStore` module that relies on the generic implementation of the `ServerProcess`.

``` elixir
defmodule KeyValueStore do
  ## Interface functions -> run in the client process
  def start do
    ServerProcess.start(KeyValueStore)
  end

  def put(pid, key, value) do
    ServerProcess.cast(pid, {:put, key, value})
  end

  def get(pid, key) do
    ServerProcess.call(pid, {:get, key})
  end

  ## Callback functions -> run in the server process
  def init, do: %{}

  def handle_cast({:put, key, value}, state) do
    Map.put(state, key, value)
  end

  def handle_call({:get, key}, state) do
    {Map.get(state, key), state}
  end
end
```

:

``` example
{:module, KeyValueStore,
 <<70, 79, 82, 49, 0, 0, 9, 204, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 1, 13,
   0, 0, 0, 28, 20, 69, 108, 105, 120, 105, 114, 46, 75, 101, 121, 86, 97, 108,
   117, 101, 83, 116, 111, 114, 101, 8, 95, ...>>, {:handle_call, 2}}
```

``` elixir
pid = KeyValueStore.start()
KeyValueStore.put(pid, :some_key, :some_value)
KeyValueStore.get(pid, :some_key)
```

## Todo list server using the generic server process

We can refactor the `TodoServer` module to make use of the new `ServerProcess` module.

``` elixir
defmodule TodoList do
  defstruct auto_id: 1, entries: %{}

  def new(entries \\ []) do
    Enum.reduce(entries, %__MODULE__{}, &add_entry(&2, &1))
  end

  def add_entry(%__MODULE__{auto_id: auto_id, entries: entries}, entry) do
    new_entry = Map.put(entry, :id, auto_id)
    new_entries = Map.put(entries, auto_id, new_entry)
    %__MODULE__{entries: new_entries, auto_id: auto_id + 1}
  end

  def entries(%__MODULE__{entries: entries}, date) do
    entries
    |> Stream.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end

  def update_entry(%__MODULE__{} = todo_list, %{} = new_entry) do
    update_entry(todo_list, new_entry.id, fn _ -> new_entry end)
  end

  def update_entry(%__MODULE__{entries: entries} = todo_list, id, updater_fun) do
    case Map.fetch(entries, id) do
      :error ->
        todo_list

      {:ok, old_entry} ->
        old_entry_id = old_entry.id
        new_entry = %{id: ^old_entry_id} = updater_fun.(old_entry)
        new_entries = Map.put(entries, new_entry.id, new_entry)
        %__MODULE__{todo_list | entries: new_entries}
    end
  end

  def delete_entry(%__MODULE__{entries: entries} = todo_list, id) do
    %__MODULE__{todo_list | entries: Map.delete(entries, id)}
  end
end

defmodule TodoServer do
  def start do
    ServerProcess.start(__MODULE__)
  end

  def add_entry(pid, entry) do
    ServerProcess.cast(pid, {:add_entry, entry})
  end

  def entries(pid, date) do
    ServerProcess.call(pid, {:entries, date})
  end

  def init, do: TodoList.new()

  def handle_cast({:add_entry, entry}, state) do
    TodoList.add_entry(state, entry)
  end

  def handle_call({:entries, date}, state) do
    {TodoList.entries(state, date), state}
  end
end
```

``` elixir
pid = TodoServer.start()

TodoServer.add_entry(pid, %{date: ~D[2018-12-19], title: "Dentist"})
TodoServer.add_entry(pid, %{date: ~D[2018-12-20], title: "Shopping"})
TodoServer.add_entry(pid, %{date: ~D[2018-12-19], title: "Movies"})
TodoServer.entries(pid, ~D[2018-12-19])
```

## Using `GenServer`

`GenServer` is an Elixir/Erlang abstraction to implement server processes. `GenServer` is a *behaviour*, that is: a module that implements a set of generic operations and expects a callback module to implement the specific logic desired.

In total, the `GenServer` behaviour requeres seven callback functions, but we generally don\'t need to implement all of them. We can use the default implementations of all the required callback functions if we `use` the `GenServer` module.

``` elixir
defmodule KeyValueStore do
  use GenServer

  def start do
    GenServer.start(KeyValueStore, nil)
  end

  def put(pid, key, value) do
    GenServer.cast(pid, {:put, key, value})
  end

  def get(pid, key) do
    GenServer.call(pid, {:get, key})
  end

  @impl true
  def init(_) do
    :timer.send_interval(5000, :cleanup)
    {:ok, %{}}
  end

  @impl true
  def handle_cast({:put, key, value}, state) do
    {:noreply, Map.put(state, key, value)}
  end

  @impl true
  def handle_call({:get, key}, _, state) do
    {:reply, Map.get(state, key), state}
  end

  @impl true
  def handle_info(:cleanup, state) do
    IO.puts("performing cleanup...")
    {:noreply, state}
  end
end
```

:

``` example
{:module, KeyValueStore,
 <<70, 79, 82, 49, 0, 0, 15, 96, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 1, 143,
   0, 0, 0, 42, 20, 69, 108, 105, 120, 105, 114, 46, 75, 101, 121, 86, 97, 108,
   117, 101, 83, 116, 111, 114, 101, 8, 95, ...>>, {:handle_info, 2}}
```

``` elixir
{:ok, pid} = KeyValueStore.start()
KeyValueStore.put(pid, :some_key, :some_value)
KeyValueStore.get(pid, :some_key)
```

We can now refactor the `TodoServer` module to make use of the `GenServer` abstraction.

``` elixir
defmodule TodoList do
  defstruct auto_id: 1, entries: %{}

  def new(entries \\ []) do
    Enum.reduce(entries, %__MODULE__{}, &add_entry(&2, &1))
  end

  def add_entry(%__MODULE__{auto_id: auto_id, entries: entries}, entry) do
    new_entry = Map.put(entry, :id, auto_id)
    new_entries = Map.put(entries, auto_id, new_entry)
    %__MODULE__{entries: new_entries, auto_id: auto_id + 1}
  end

  def entries(%__MODULE__{entries: entries}, date) do
    entries
    |> Stream.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end

  def update_entry(%__MODULE__{} = todo_list, %{} = new_entry) do
    update_entry(todo_list, new_entry.id, fn _ -> new_entry end)
  end

  def update_entry(%__MODULE__{entries: entries} = todo_list, id, updater_fun) do
    case Map.fetch(entries, id) do
      :error ->
        todo_list

      {:ok, old_entry} ->
        old_entry_id = old_entry.id
        new_entry = %{id: ^old_entry_id} = updater_fun.(old_entry)
        new_entries = Map.put(entries, new_entry.id, new_entry)
        %__MODULE__{todo_list | entries: new_entries}
    end
  end

  def delete_entry(%__MODULE__{entries: entries} = todo_list, id) do
    %__MODULE__{todo_list | entries: Map.delete(entries, id)}
  end
end

defmodule TodoServer do
  use GenServer

  def start do
    GenServer.start(__MODULE__, nil)
  end

  def add_entry(pid, entry) do
    GenServer.cast(pid, {:add_entry, entry})
  end

  def entries(pid, date) do
    GenServer.call(pid, {:entries, date})
  end

  @impl GenServer
  def init(_) do
    {:ok, TodoList.new()}
  end

  @impl GenServer
  def handle_cast({:add_entry, entry}, state) do
    {:noreply, TodoList.add_entry(state, entry)}
  end

  @impl GenServer
  def handle_call({:entries, date}, _, state) do
    {:reply, TodoList.entries(state, date), state}
  end
end
```

``` elixir
{:ok, pid} = TodoServer.start()

TodoServer.add_entry(pid, %{date: ~D[2018-12-19], title: "Dentist"})
TodoServer.add_entry(pid, %{date: ~D[2018-12-20], title: "Shopping"})
TodoServer.add_entry(pid, %{date: ~D[2018-12-19], title: "Movies"})
TodoServer.entries(pid, ~D[2018-12-19])
```

# Chapter 7: Building a concurrent system

# Chapter 8: Fault-tolerance basis

In a distribute system we don\'t try to make sure that nothing fails, we make sure that if something fails it doesn\'t take down the entire system. As such, we need mechanisms of detecting and acting on failures, so our system can try to recover from them.

In the BEAM processes are completely isolated, so when a process crashes it doesn\'t propagate the failure to other processes neither corrupts shared state. This means that we\'re covered from the error isolation standpoint, but we must develop have mechanisms that allow the system to detect and recover from failures.

In Elixir, a runtime error has a type, which can be `:error` `:exit` or `:throw` and a value, which is an arbitrary term. If a runtime error isn\'t handled, the process terminates.

We can **link** processes together so they are notified of each other\'s termination. Linking two processes is always bidirectional. By default, when one of the linked processes is terminated, the other process also terminates. We can override this default behavior by *trapping exits* on a process, making the process receive a message about the termination of a linked process. It is also possible to make unidirectional links using monitors.
