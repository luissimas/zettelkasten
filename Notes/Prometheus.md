---
created-at: 2024-06-27
---

Prometheus is a monitoring system and time series database that enables scraping of metrics from multiple targets, storing and querying those metrics in tools like [[Grafana]] and also managing alerts based on threshold for metrics. It is a fundamental service in [[Observability]] stacks.

Prometheus is not designed for horizontally scaling, and this can impose some limitations for large scale setups. [[VictoriaMetrics]] is an interesting alternative that promises a better use of resources and better scalability.