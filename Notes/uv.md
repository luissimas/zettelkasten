---
created-at: 2024-09-25
---

uv is a tool that acts as an entry point for [[Python]] tooling. It tries to offer a similar experience as [[Cargo]] (and it is written in [[Rust]], so they probably got a lot of influence from its tooling).

The basic usage is the following:

```shell
uv init test-project
cd ./test-project
uv venv
uv add rich typer
uv pip list
uv tool install black     # Installs black globally like pipx
```

Overall my first impression of uv was great. It has a nice UX with intuitive commands and it is quite fast at fetching packages and dependencies.

I always thought that the [[Python]] ecosystem was a bit messy in terms of tooling, as there were no unified tools such as uv. I generally use [Poetry](https://python-poetry.org/) to manage dependencies in more complex projects. If I'm doing something simple, I'd generally just use regular `pip` with venvs directly. I think I'll start using uv for everything now and see how it goes.

# References

https://docs.astral.sh/uv/
