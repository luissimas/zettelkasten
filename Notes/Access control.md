---
created-at: "2024-08-10"
---

In statically typed [[Programação orientada a objetos|OOP]] languages, it is quite common to have access control keywords to delimit whether a method or attribute can be accessed from outside of the class. I usually didn't saw much value in it, and there are languages that I use daily such as [[Python]] that don't even have this feature and prefer to use conventions instead.

While learning [[Rust]] via "The Book", I've encountered the following description of the motivation for such system of access controls in Rust:

> The way you write code defines which parts are public for other code to use and which parts are private implementation details **that you reserve the right to change**. This is another way to **limit the amount of detail you have to keep in your head**.

This is actually a very good benefit of having access control in a language. You have the right to change internal implementation enforced by the language, and not by convention. This makes the language overall much safer, and you can have stronger guarantees of API stability.
