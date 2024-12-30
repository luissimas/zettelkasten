---
created-at: "2024-12-30"
---

Eork stealing scheduler (WSS) is a task scheduler model suited for multi-threaded environments. Each worker thread has a local queue of worker that is consumed locally, which means that there are no locks involved in the local queue. To prevent starvation and ensure that the task workload is balanced among workers, each worker can "steal" tasks from the end of other worker's queues.

# References

https://users.rust-lang.org/t/what-are-the-benefits-of-a-work-stealing-scheduler/24988
