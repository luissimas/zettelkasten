---
created-at: "2024-07-21"
---

Taskwarrior is a free and open source command line **task manager**. It is very simple to use yet very powerful and extensible. I'd say it has both a low floor and a very high ceiling. The core tool is a C++ CLI program that uses an [[SQLite]] database for storage.

What recently drove me to try this tool is that I needed something accessible to just input tasks and process them later. Since I'm always in the terminal, Taskwarrior was an obvious choice.

Capturing and editing tasks is really straightforward (as it should), and there's support for projects, tags and deadlines. The reporting aspect is where I think the tool has the greatest depth. We can visualize the tasks and their progress in various ways.

Summary of the progress on all projects.

```sh
task summary
```

A calendar view of when tasks are due.

```sh
task calendar
```

A burndown chart that also supports daily, monthly and weekly views.

```sh
task burndown
```

# References

https://taskwarrior.org/
