---
created-at: 2024-03-29
---

Structured logging is the practice of logging in a structured, parsable format as opposed to an string with no well-defined structure. This is great because it makes it easier to filter and search the logs for relevant information, improving the [[Observability]].

There are several formats to log, but people mostly use JSON or [logfmt](https://brandur.org/logfmt). I tend to favor logfmt as it is easier for humans to read and as easy to parse as JSON.

Tools such as [Logstash](https://www.elastic.co/logstash) and [Loki](https://grafana.com/oss/loki/) allow us to parse, filter and visualize structured logs.

I see no reason to not use structured logging instead of traditional logging in an application.
