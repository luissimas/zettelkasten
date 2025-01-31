---
created-at: 2020-12-07
---
Para calcular o comprimento de uma curva usando integrais a ideia é: encontrar (através do teorema de pitágoras) "hipotenusas" *infinitesimais* ao longo da curva, e então somá-las para todo o intervalo. 
![[comprimentodecurva.png]]
Partindo dessa ideia, dizemos que:
Sendo $f'(x)$ contínua no intervalo $[a,b]$, temos então que o comprimento $s$ da curva $f(x)$ é dado por:
$$
  s=\int_a^b{\sqrt{1+(f'(x))^2}}\,dx
$$