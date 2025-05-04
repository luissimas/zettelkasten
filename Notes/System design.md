---
created-at: "2025-04-24"
---

System design is the process of designing a software system by defining its components and their interactions. It is a very useful skill overall, but especially important in the context of tech interviews.

System design interviews are usually open ended, and there's no universally correct design for any given problem: **it's all about trade-offs**. The idea of those interviews is to asses how the candidate reasons about the problem, evaluates trade-offs and makes decisions.

The problems presented in system design interviews are often deliberately vague and not very well defined. The goal is to evaluate how the candidate can gather requirements and ask questions to better understand the problem.

[ByteByteGo's system design interview framework](https://youtu.be/i7twT3x5yv8) is a good place to start when thinking about the structure of the interview. We usually get 45 minutes of actual interview time, so we should have a plan on how to make the best use of this time. The framework divides the interview into 4 steps:

1. Clarify requirements (5 min): define the scope of the solution. Who are the users? What are the features? What are the non-functional requirements (security, consistency, scalability, availability)? The output of this step is a short list of features along with a set of non functional requirements that should guide our design.
2. High-level architecture (25 min): define the core functionalities and draw a high level design of the end to end solution. The goal here is to have a full picture of a system that fulfills all functional and non functional requirements without getting into a lot of complex details. The output of this step is the core API of the services, the data model (access patterns, read/write ratio) and a high level diagram of the solution.
3. Deep dive on core components (15 min): get into the details of some of the core components, focusing on how to fulfill the non-functional requirements. This is the time to discuss database choices, [[Database sharding]], load balancing algorithms, caching, CDN policies etc. The output of this step is a detailed diagram of one or two core components of the solution, highlighting how their design solves the non-functional requirements.
4. Wrap up (5 min): summarize the design making the trade-offs clear to the interviewer.

# Core concepts

[[Scalability]]
[[Latency vs Throughput]]
[[CAP Theorem]]
[[Consistency patterns]]
[[Availability patterns]]

# Key components

[[DNS]]
[[CDN]]
[[Load balancer]]
[[Cache]]
[[Message Queues]]
[[Database]]
[[API Gateway]]
[[WAF]]
[[Object storage]]

# References

https://github.com/donnemartin/system-design-primer
https://gist.github.com/vasanthk/485d1c25737e8e72759f
[How to Crack Any System Design Interview](https://www.youtube.com/watch?v=o-k7h2G3Gco)
