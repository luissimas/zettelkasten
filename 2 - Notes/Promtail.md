---
created-at: 2024-06-30
---

Promtail is an agent that collects local logs and pushed them to [[Loki]] via an HTTP endpoint. Usually, a Promtail instance is executed on each node that is being monitored. Promtail also **discovers targets** to collect logs from and labels the logs accordingly before pushing them to the Loki instance.

# References

https://grafana.com/docs/loki/latest/send-data/promtail/
