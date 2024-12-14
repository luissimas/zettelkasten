---
created-at: 2024-09-14
---

[[Go]] is way simpler than [[Rust]], but it also has a smaller range of applications. I like to think that Rust is like C in the sense that it can be used to anything, provided you're willing to do it. Rust gives you a lot of power and control while also providing a lot of safety and quality of life with its type system, but a lot of power comes with a lot of complexity.

Go is designed with [[Simplicity]] in mind, and my experience with it until now has been that it has a really low mental overhead.

Most of the stuff that I care about is written in Go, so it is very valuable to be able to read and write Go code very proficiently.

Rust is probably a better language in many aspects, but I just don't care enough anymore. In 2021 I'd probably care a lot about its design and elegance, but I changed a bit, and like when [[Switching to Ubuntu]], I think I just value simplicity much more than before.

I want to build cool stuff with [[Kubernetes]] like [[KubeVirt]] and [[CloudNativePG]], and a expressive and safe type system does not help as much when you're always just interfacing with existing services that are inherently unsafe. Types aren't gonna solve everything.

I think that Rust is way more suitable for a closed environment where you know your variables and requirements so you can encode those into the type system and get the benefits of [[Type-driven design]]. But when you need to be more flexible and adapt quickly to stuff out of your control I think that a looser type system like Go's is just way easier to work with.

I don't think I'm willing to invest the time required into learning Rust and then pay the subsequent cost of having to deal with a more complex language. But I truly want to see if Rust is really less productive due to its complexity before ditching it.

Go's ecosystem is more mature for cloud-native things, and this is the area were I really care about.

I want a language that aligns with the [[Princípio de Pareto]], and I think Go is that language.

With that said, I started learning Rust and I enjoy it. So I'll stick with it until I finish the book and then build a couple of projects with it to get a real feel of the language. I think I missed my momentum, but I have to persist otherwise I'll always fall for the [[Shiny object syndrome]].

# Reference

https://kristoff.it/blog/why-go-and-not-rust/