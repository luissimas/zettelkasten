---
created-at: 2020-11-03
tags:
---
É fundamental relembrar as principais propriedades e relações trigonométricas. Em um triângulo retângulo temos as seguintes relações:
$$
\cos{\theta} = \frac{cateto \ adjacente}{hipotenusa}
$$
$$
\sin{\theta} = \frac{cateto \ oposto}{hipotenusa}
$$
$$
\tan{\theta} = \frac{cateto \ oposto}{cateto \ adjacente}=\frac{\sin{\theta}}{cos{\theta}}
$$
$$
\begin{array}{|c|c|c|c|}
\hline
\theta & \cos{\theta} & \sin{\theta} & \tan{\theta} \\ \hline
0^{\circ}&1&0&0 \\
\hline
30^{\circ}&\frac{\sqrt{3}}{2}&\frac{1}{2}&\frac{1}{\sqrt{3}} \\
\hline
45^{\circ}&\frac{\sqrt{2}}{2}&\frac{\sqrt{2}}{2}&1 \\
\hline
60^{\circ}&\frac{1}{2}&\frac{\sqrt{3}}{2}&\sqrt{3} \\
\hline
90^{\circ}&0&1&\text{undefined} \\
\hline
\end{array}
$$

Além da relações básicas, temos também as funções trigonométricas inversas, definidas por:
$$
\cot{\alpha} = \frac{\cos{\alpha}}{\sin{\alpha}}\qquad(a\not=n\pi,\forall n \in\mathbb{Z})
$$
$$
\sec{\alpha} = \frac{1}{\cos{\alpha}}\qquad(a\not=\frac{\pi}{2}+n\pi,\forall n \in\mathbb{Z})
$$
$$
\csc{\alpha} = \frac{1}{\sin{\alpha}}\qquad(a\not=n\pi,\forall n \in\mathbb{Z})
$$

Existem ainda as seguintes relações, muito úteis principalmente para o cálculo de [[Integrais indefinidas|integrais]]:
$$
\begin{array}{|c|c|}
\hline
\displaystyle\sin^2{x}+\cos^2{x}=1 & \displaystyle1+\tan^2{x}=\sec^2{x}\\
\hline
\displaystyle 1+\cot^2{x}=\csc^2{x} & \displaystyle \sin{(-x)} = -\sin{x} \\
\hline
\displaystyle \cos{(-x)}=\cos{x} & \displaystyle \tan{(-x)}=-\tan{x} \\
\hline
\displaystyle \cos{2x}=\cos^2{x}-\sin^2{x} & \displaystyle \sin{(a\pm b)}=\sin{a}\cos{b}\pm\cos{a}\sin{b} \\
\hline
\displaystyle \cos{(a\pm b)}=\cos{a}\cos{b}\mp\sin{a}\sin{b} & \displaystyle \tan{(a+b)}=\frac{\tan{a}+\tan{b}}{1-\tan{a}\tan{b}} \\
\hline
\displaystyle \tan{(a-b)}=\frac{\tan{a}-\tan{b}}{1+\tan{a}\tan{b}} & \displaystyle \cos^2{x}=\frac{1}{2}(1+\cos{2x}) \\
\hline
\displaystyle \sin^2{x}=\frac{1}{2}(1-\cos{2x}) & \displaystyle \sin{2x}=2\sin{x}\cos{x} \\
\hline
\displaystyle \cos{2x}=1-2\sin^2{x}=2\cos^2{x}-1& \displaystyle \tan{2x}=\frac{2\tan{x}}{1-\tan^2{x}} \\
\hline
\displaystyle \Big|\sin{\frac{x}{2}}\Big|=\sqrt{\frac{1-\cos{x}}{2}} & \displaystyle \Big|\cos{\frac{x}{2}}\Big|=\sqrt{\frac{1+\cos{x}}{2}} \\
\hline
\displaystyle \tan{\frac{x}{2}}=\frac{1-\cos{x}}{\sin{x}}=\frac{\sin{x}}{1+\cos{x}} & \displaystyle \sin{x}\cos{y}=\frac{1}{2}[\sin{(x-y)+\sin{(x+y)}}] \\
\hline
\displaystyle \sin{x}\sin{y}=\frac{1}{2}[\cos{(x-y)-\cos{(x+y)}}] & \displaystyle \cos{x}\cos{y}=\frac{1}{2}[\cos{(x-y)+\cos{(x+y)}}] \\
\hline
\displaystyle \cos{x}\sin{y}=\frac{1}{2}[\sin{(x+y)-\sin{(x-y)}}] & \displaystyle \sin{x}-\sin{y}=2\sin{\Big(\frac{x-y}{2}\Big)}\cos{\Big(\frac{x+y}{2}\Big)} \\
\hline
\displaystyle \sin{x}\cos{x}=\frac{1}{2}\sin{2x} & \displaystyle 1-\cos{x}=2\sin^2{\frac{x}{2}} \\
\hline
\displaystyle 1+\cos{x}=2\cos^2{\frac{x}{2}} & \displaystyle 1\pm\sin{x}=1\pm\cos{\Big(\frac{\pi}{2}-x\Big)} \\
\hline
\end{array}
$$

Como base para calcular as derivadas das funções trigonométricas tomamos o *primeiro limite fundamental.*
$$
\lim_{x\to0}\frac{\sin{x}}{x}=1
$$