---
created-at: 2024-10-25
---

pgBadger is a log analyzer for [[PostgreSQL]] that can generate **database reports using only the database logs** as input. It is implemented as a Perl script that parses log files to extract information from it. pgBadger generates surprisingly rich reports, with information ranging from an overview of the types of queries performed all the way up to performance analysis of individual queries. The reports are produced as static HTML files that can be easily distributed.

The great thing about pgBadger is the minimal amount of setup. We can get great reports that provide a lot of value by just setting some config options on the database instance and running a script on the log files.

PostgresSQL's default log level is not verbose enough to extract meaningful information, so we need to set some log parameters to make it both more verbose and format its output. The result of this is that Postgres will log all queries and their execution time.

```toml
log_destination = stderr
logging_collector = on
log_min_duration_statement = 0
log_line_prefix = '%t [%p]: user=%u,db=%d,app=%a,client=%h '
log_checkpoints = on
log_connections = on
log_disconnections = on
log_lock_waits = on
log_temp_files = 0
log_autovacuum_min_duration = 0
log_error_verbosity = default
lc_messages='en_US.UTF-8'
```

# References

https://pgbadger.darold.net/
https://github.com/darold/pgbadger
https://pgbadger.darold.net/examples/sample.html