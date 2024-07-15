---
created-at: 2024-06-30
---

Loki is a distributed, highly-available log aggregation system. It is designed to be **highly scalable** and **cost effective**.

> Loki is like [[Prometheus]], but for logs.

Loki exposes an HTTP endpoint that is used by agents such as [[Promtail]] to push log data. This data is then aggregated, compressed and stored into either the local [[Sistema de arquivos|file system]] or an [[Object storage]]. Its the agent's responsibility to label the data before pushing it to Loki. Usually there's an agent running on each node that needs to be monitored. 

![[Pasted image 20240630111018.png]]

A key difference from Loki to other logging aggregation systems is that Loki **does not index** the contents of the logs when ingesting them. Instead, only metadata in the form of **labels are indexed** and stored with the logs. The user can then query the logs using this metadata and subsequently refine the query matching the logs's contents. By **parsing the log content only at query time** when needed, Loki can ingest and store a high volume of logs at a low cost.

A benefit of using the concept of labels is that if we use the same labels as the metrics of our applications we can easily correlate Loki's logs with [[Prometheus]]'s metrics.

Loki can be deployed as a monolith application or as a set of microservices that can be scaled independently.

# References

https://grafana.com/docs/loki/latest/get-started/overview/