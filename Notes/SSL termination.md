---
created-at: "2025-01-05"
---

SSL termination is the process of handling SSL encryption/decryption process at the edge of the network. It is commonly used in [[Reverse proxy|reverse proxies]] or [[Load balancer|load balancers]] to **centralize all SSL communication** in a single component. The load balancer keeps the SSL certificate and does all encryption and decryption of traffic, while the **actual servers handle only plain HTTP** traffic to and from the load balancer.

![[SSL termination.png]]

Overall, this approach **reduces the CPU load** on servers (because they don't need to handle SSL encryption), and makes managing the SSL certificates easier for multiple services.

# References

https://www.haproxy.com/glossary/what-is-ssl-tls-termination
