---
created-at: 2020-12-14
tags:
---
Usually more complex digital circuits have a *datapath circuit*, which is used store and manipulate data, and a *control circuit* (usually implemented via [[Finite state machines|finite state machines]]), that controls the operation of the datapath circuit. A bus (*barramento*) is a structure that can interconect multiple parts of a circuit using the same set of wires. Bus structures create a common path to transfer data from multiple sources to multiple destinations, for that reason it's necessary to ensure that only one source is active at a time, to prevent interference.

# Tri-state drivers
Tri-state drivers are simple buffers that can propagate the sign of the input to the output, without performing any logic operation. The idea here is that these drivers recieve a *enable* signal, that allows us to disable the connection when needed. When the connection is disabled, the output enters in a *high impedance state*, that is denoted by the letter $Z$ (or $z$).
![](tristatedriver.png)
This type of connection allows us to control which connections will be active in the bus. A circuit using a bus that implements this tri-state drivers idea can look like that:
![](tristatedrivercircuit.png)

# Multiplexers
We can also control the connections on the bus using [[Multiplexers|multiplexers]] to select which source of data will be active.
![](multiplexerbus.png)