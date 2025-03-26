---
created-at: "2025-03-26"
---

Software-defined networking is an approach to network management that aims to **abstract away the physical network** to create arbitrary logical network topologies. With this approach, we can make changes to the logical network without regarding the physical network topology and vice-versa.

Services like [[OVN]] and [[OVS]] can work together in providing the basis for an SDN solution. The solution typically involves a control plane that receives requests for a given logical network topology and then program those changes as flows in the SDN solution. In the data plane, the overlay network packets are encapsulated on the underlay network by using something like VXLAN or Geneve.

# References

[Introduction to OpenStack Neutron](https://www.youtube.com/watch?v=yqFpyubsYfE)
[Introduction to SDN (Software-defined Networking)](https://www.youtube.com/watch?v=DiChnu_PAzA)
