---
created-at: 2024-07-08
---

To create a LiveView, instead of using the `Phoenix.LiveView` module directly such as:

```elixir
defmodule MyAppWeb.ChatLive do
  use Phoenix.LiveView

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <h1 class="text-sm">
      Hello!
    </h1>
    """
  end
end
```

We should use the generated web module for the application with the `:live_view` parameter. This will inject the application layout and other Phoenix helpers.

```elixir
defmodule MyAppWeb.ChatLive do
  use MyAppWeb, :live_view

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <h1 class="text-sm">
      Hello!
    </h1>
    """
  end
end
```
