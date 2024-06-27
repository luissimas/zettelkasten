---
created-at: "2024-06-10"
---

InfluxDB is a time series database. I've started using it on my [[Zettelkasten exporter]] project.

Key concepts:

| InfluxDB    | Relational database |
| ----------- | ------------------- |
| Measurement | Table               |
| Bucket      | Database            |

A bucket can have a **retention period** to determine for how long to persist the measurements. InfluxDB support a handful of different query languages. There's an SQL-like language called InfluxQL and a functional-like language called Flux, which looks a lot like [[Elixir]], and that's great.

Overall it's been a good tool for storing time series data with a good support for long term storage.

# References

https://docs.influxdata.com/influxdb/v2/reference/key-concepts/data-elements/
https://docs.influxdata.com/influxdb/v2/write-data/best-practices/schema-design/
