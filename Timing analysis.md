# Timing analysis
Timing analysis is used to calculate the total delay of a circuit that uses [[Flip-Flops|flip-flops]] considering its various propagation delays for each point in the cicuit.
Imagine that we wish to calculate the maximum clock frequency of a circuit $F_max$, and determine if the circuit have any hold time violations. We first need to know some information that is usually in the specification of each chip, since it depends on the materials used and the logic arrangement of the logic gates. 
In order to calculate the maximum clock frequency we always have to consider the longest and slowest path of the circuit that uses flip-flops. To determine hold time violations, we have to consider the shortest and faster path.

$$
\begin{aligned}
  &t_{su}=\text{Total setup time before flip-flop activation}\\
  &t_h=\text{Total hold time after flip-flop activation}\\
  &t_{cQ}=\text{Total delay until the output signal of the flip-flop is propagated}\\
  &T_{gate}=\text{Total delay for every logic gate wich the signal has to travel}
\end{aligned}
$$

In general we consider $T_{gate}=1 + (0,1\cdot n_{ports})$ for each gate if no further information is given. The value of $t_{cQ}$ is usually represented by an interval, to calculate the maximum clock frequency we always use the max of that interval, to determine time violations we have to consider the minimun of that interval.
Given that information, we can calculate the minimum time that the clock cycle can have without compromising the functionality of the circuit (losing signals due to delay etc).

$$
\begin{aligned}
  &T_{min}=t_{cQ}+t_{gates}+t_su\\
  &F_{max}=\frac{1}{T_{min}}
\end{aligned}
$$

To determine hold time violations, we check the following:

$$
t_{cQ} + t_{gates} > t_h
$$

If thats true, then the signal have enough time to keep output stable. If thats false, then the circuit has a hold time violation.

**Example:**
We desire to calculate the maximum clock frequency and determine the existence of any hold time violations on the following circuit:
![](../Attachments/LD/timinganalysisexample.png)

Considering the longest path, we have the following

$$
\begin{aligned}
  &t_{su}=0,6\\
  &t_{h}=0,4\\
  &0,8\le t_{cQ}\le 1,0\\
  \\
  &T_{min}=t_{cQ}+3\cdot(t_{AND}) + t_{XOR} + t_su\\
  &T_{min}=1+3\cdot 1,2 + 1,2 + 0,6 = 6,4\\
  &F_{max}=\frac{1}{6,4}=156,25\text{MHz}
\end{aligned}
$$

---

created: 24/11/2020
modified: 24/11/2020
