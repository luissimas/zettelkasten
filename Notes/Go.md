---
created-at: 2024-06-03
---

Go is a statically typed, high-level programming language. It was developed at Google with the goal of being **simple**, easy to learn and scalable. Go is garbage collected, but it has excellent performance and a low memory footprint when compared to other garbage collected languages.

Go's highlights are:

1. [[Simplicity]]. Go is simple to learn and use. It's a language that tries to **stay out of your way** as much as possible. As a result of it's simplicity, there's usually only one way to do something, which makes it very easy to get new developers up to speed in exists projects.
2. **Fast compile times**. Go's compile times are usually under a second, even for medium-sized projects. This enables tight [[Feedback loops]].
3. The CSP-style **concurrency model**, with lightweight, user space threads called goroutines and communication primitives at a language level through channels.
4. The **implicit interface implementation**, resulting in a sort of duck type experience in a statically typed language.

In general, I think Go is **rarely the best language** (in pure technical aspects) for most domains (unlike [[Rust]]). With that said, it is also **extremely OK** for most domains. By extremely OK I mean it's probably the best combination of _performance_ and _maintainability_ for the least amount of _effort_. For me, this makes Go the incarnation of the [[Pareto principle]] in programming languages.

Here are some examples of domains in which Go would be my first choice:

- Any kind of network service
- CLI applications
- Cloud native applications
- Infrastructure services
