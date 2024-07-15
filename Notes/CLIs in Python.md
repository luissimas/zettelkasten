---
created-at: "2024-07-11"
---

[[Python]] is quite good for building CLI apps. With [Typer](https://typer.tiangolo.com/) we can easily define commands and their arguments using type annotations.

Here's an example from a [[Distributed Systems]] assignment from university:

```python
from typing import Annotated

from typer import Option, Typer

from trabalho_1.application import Application
from trabalho_1.server import Server

app = Typer()

topic = "room"


@app.command(help="Run the client GUI application.")
def client(
    broker_address: Annotated[
        str, Option(help="The IP address or hostname of the message broker.")
    ] = "127.0.0.1"
):
    application = Application(broker_address=broker_address, topic=topic)
    application.start()


@app.command(help="Run the message broker server.")
def server():
    server = Server(topic=topic)
    server.bind()
    server.start()
```

There's also [rich](https://github.com/Textualize/rich) to print rich text in the terminal. The combination of those tools and Python's ease of use make for a very nice mix for building CLI apps. My only concern is with the distribution of such CLI, given that we cannot generate a static binary like in [[Go]].
