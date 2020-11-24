# Timing analysis
Timing analysis is used to calculate the total delay of a circuit considering its various propagation delays for each point in the cicuit.
Imagine that we wish to calculate the maximum clock frequency of a circuit $F_max$, and determine if the circuit have any hold time violations. We first need to know some information that is usually in the specification of each chip, since it depends on the materials used and the logic arrangement of the logic gates. 

$$
\begin{aligned}
  &t_{su}=\text{Total setup time}\\
  &t_h=\text{Total hold time}\\
  &T_{cQ}=\text{Total delay until the output signal is propagated}
\end{aligned}
$$

Given that information, we can calculate 

---

created: 24/11/2020
modified: 24/11/2020
