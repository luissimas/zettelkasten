---
created-at: "2025-05-04"
---

Latency and throughput are key metrics for evaluating the performance of a system. I've always intuitively thought that there was a direct correlation between latency and throughput, but this is not true at all.

Latency is **how much time** a system takes to complete an operation. Throughput is **how many operations** can be completed in a given unit of time. Latency is measured in units of time like seconds or milliseconds, while throughput is measured in units of work like requests/sec, MB/s etc.

While both metrics are important to evaluate the performance of systems, they can be affected by different factors, and therefore are not directly correlated.

> Low latency does not imply high throughput. High throughput does not imply low latency.

Using a water pipe as an analogy, we can think of latency as being directly impacted by how long the pipe is, and of throughput as being directly impacted by how wide the pipe is.

![[Attachments/Latency vs throughput.png]]

There are cases in which optimizing for low latency can reduce throughput and vice versa. In general, we should aim for **maximal throughput** with **acceptable latency**.
