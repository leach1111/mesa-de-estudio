EXAMS.algebra = [

/* ==================================================================== */
{ title: "Examen de prueba 1",
  sub: "Álgebra lineal · Sistemas, ecuaciones matriciales, espacio euclídeo y cuádricas",
  desc: "Sistema con parámetro, ecuación matricial, subespacio de R⁴ con proyección ortogonal, diagonalización ortogonal y cuádrica.",
  dur: "2 h", pts: "10 puntos (2,5 por problema)",
  instr: "<p>Justifica todas las respuestas. Se valora el procedimiento, no solo el resultado.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2,5 puntos)</span></h2>
<p>Discute el sistema según los valores de $a\in\mathbb R$ y resuélvelo cuando sea compatible:</p>
$$\begin{cases}x+y+az=1\\ x+ay+z=a\\ ax+y+z=a^2\end{cases}$$

<h2>Problema 2 <span class="pts">(2,5 puntos)</span></h2>
<p>Sean $A=\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$ y $B=\begin{pmatrix}2 & 0\\ 1 & 1\end{pmatrix}$.</p>
<ol class="parts">
<li>Despeja la matriz $X$ de la ecuación $XA+B=2X$ indicando qué condición debe cumplirse.</li>
<li>Calcula $X$.</li>
<li>Sin calcular $X$ de nuevo, deduce $\det X$ a partir de los determinantes de $B$ y de $A-2I$, y compruébalo.</li>
</ol>

<h2>Problema 3 <span class="pts">(2,5 puntos)</span></h2>
<p>En $\mathbb R^4$ con el producto escalar ordinario, sea $V=\langle(1,1,0,1),\ (2,1,1,0),\ (0,1,-1,2)\rangle$.</p>
<ol class="parts">
<li>Calcula la dimensión de $V$, una base y unas ecuaciones implícitas.</li>
<li>Calcula una base ortogonal de $V$.</li>
<li>Calcula la proyección ortogonal del vector $\vec u=(1,0,0,0)$ sobre $V$ y la distancia de $\vec u$ a $V$.</li>
</ol>

<h2>Problema 4 <span class="pts">(2,5 puntos)</span></h2>
<p>Sea $A=\begin{pmatrix}3 & 1 & 1\\ 1 & 3 & 1\\ 1 & 1 & 3\end{pmatrix}$.</p>
<ol class="parts">
<li>Diagonaliza $A$ mediante una matriz ortogonal.</li>
<li>Clasifica la cuádrica $3x^2+3y^2+3z^2+2xy+2xz+2yz=10$, da su ecuación reducida, sus semiejes y la dirección de su eje de revolución (si lo tiene).</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>$\det A=\begin{vmatrix}1 & 1 & a\\ 1 & a & 1\\ a & 1 & 1\end{vmatrix}=-(a-1)^2(a+2)$.</p>
<p>• $a\ne1,\,-2$: $\text{rg}A=\text{rg}A^*=3$, <strong>compatible determinado</strong>. Por Cramer (o Gauss):</p>
$$x=\frac{(a+1)^2}{a+2},\qquad y=\frac{1}{a+2},\qquad z=-\frac{a+1}{a+2}.$$
<p>• $a=1$: las tres ecuaciones son $x+y+z=1$. $\text{rg}A=\text{rg}A^*=1$: <strong>compatible indeterminado</strong> con 2 parámetros: $(x,y,z)=(1-\lambda-\mu,\ \lambda,\ \mu)$.</p>
<p>• $a=-2$: $\text{rg}A=2$ (el menor $\begin{vmatrix}1 & 1\\ 1 & -2\end{vmatrix}=-3\ne0$) y $\text{rg}A^*=3$ (el orlado con la columna de términos independientes vale $-9\ne0$): <strong>incompatible</strong>.</p>
<p class="crit">Comprobación de la solución general con $a=0$: $(x,y,z)=(\frac12,\frac12,-\frac12)$ cumple las tres ecuaciones.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $XA-2X=-B\Rightarrow X(A-2I)=-B$. Si $A-2I$ es invertible, $X=-B(A-2I)^{-1}$ (la inversa multiplica <strong>por la derecha</strong>).</p>
<p>(b) $A-2I=\begin{pmatrix}-1 & 2\\ 3 & 2\end{pmatrix}$, $\det=-8\ne0$, $(A-2I)^{-1}=-\frac18\begin{pmatrix}2 & -2\\ -3 & -1\end{pmatrix}$.</p>
<p class="res">$X=\begin{pmatrix}\frac12 & -\frac12\\[2pt] -\frac18 & -\frac38\end{pmatrix}$</p>
<p>(c) $\det X\cdot\det(A-2I)=\det(-B)=(-1)^2\det B=2$, así que $\det X=\frac{2}{-8}=-\frac14$. Comprobación: $\frac12\cdot\left(-\frac38\right)-\left(-\frac12\right)\left(-\frac18\right)=-\frac3{16}-\frac1{16}=-\frac14$ ✔.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) $(0,1,-1,2)=2(1,1,0,1)-(2,1,1,0)$, y los dos primeros no son proporcionales: $\dim V=2$, base $\{\vec v_1=(1,1,0,1),\ \vec v_2=(2,1,1,0)\}$. Hacen falta $4-2=2$ ecuaciones. Resolviendo el sistema de los vectores perpendiculares a $\vec v_1$ y $\vec v_2$, se obtiene $V^\perp=\langle(-1,1,1,0),(1,-2,0,1)\rangle$, y por tanto:</p>
<p class="res">$V:\ -x+y+z=0,\quad x-2y+t=0$</p>
<p>(b) Gram-Schmidt: $\vec w_1=\vec v_1$, $\ \vec w_2=\vec v_2-\frac{\vec v_2\cdot\vec w_1}{\vec w_1\cdot\vec w_1}\vec w_1=(2,1,1,0)-\frac33(1,1,0,1)=(1,0,1,-1)$.</p>
<p class="res">Base ortogonal: $\{(1,1,0,1),\ (1,0,1,-1)\}$</p>
<p>(c) $P_V(\vec u)=\frac{\vec u\cdot\vec w_1}{3}\vec w_1+\frac{\vec u\cdot\vec w_2}{3}\vec w_2=\frac13(1,1,0,1)+\frac13(1,0,1,-1)=\left(\frac23,\frac13,\frac13,0\right)$.</p>
<p>$\vec u-P_V(\vec u)=\left(\frac13,-\frac13,-\frac13,0\right)$, de módulo $\frac{\sqrt3}3$.</p>
<p class="res">$P_V(\vec u)=\left(\frac23,\frac13,\frac13,0\right)$, $\ d(\vec u,V)=\frac{\sqrt3}{3}$</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) $A$ es simétrica. Como $A=2I+J$ ($J$ = matriz de unos, con VAP 3, 0, 0), los VAP son $\lambda=5$ (simple) y $\lambda=2$ (doble). Comprobación: traza $9=5+2+2$.</p>
<p>$U_5=\langle(1,1,1)\rangle$; $U_2=(1,1,1)^\perp=\langle(-1,1,0),(-1,0,1)\rangle$. Ortonormalizando $U_2$: $\frac1{\sqrt2}(-1,1,0)$ y $\frac1{\sqrt6}(-1,-1,2)$.</p>
$$C=\begin{pmatrix}\frac1{\sqrt3} & -\frac1{\sqrt2} & -\frac1{\sqrt6}\\ \frac1{\sqrt3} & \frac1{\sqrt2} & -\frac1{\sqrt6}\\ \frac1{\sqrt3} & 0 & \frac2{\sqrt6}\end{pmatrix},\qquad C^tAC=\begin{pmatrix}5 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 2\end{pmatrix}.$$
<p>(b) En la base de VEP: $5x'^2+2y'^2+2z'^2=10$, es decir</p>
<p class="res">$\dfrac{x'^2}{2}+\dfrac{y'^2}{5}+\dfrac{z'^2}{5}=1$: elipsoide de revolución</p>
<p>Semiejes $\sqrt2$ (en la dirección $(1,1,1)$) y $\sqrt5$, $\sqrt5$. Eje de revolución: la recta por el origen con dirección $(1,1,1)$.</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen de prueba 2",
  sub: "Álgebra lineal · Rango, inversa, transformaciones lineales e isometrías",
  desc: "Rango con parámetro, determinante 4×4 e inversa, transformación definida por valores propios y movimiento helicoidal.",
  dur: "2 h", pts: "10 puntos (2,5 por problema)",
  instr: "<p>Justifica todas las respuestas.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2,5 puntos)</span></h2>
<p>Calcula el rango de la matriz $M=\begin{pmatrix}1 & 2 & 1 & a\\ 2 & a & 2 & 2\\ 1 & 2 & a & 1\end{pmatrix}$ según los valores de $a\in\mathbb R$. Para el valor de $a$ en el que el rango es mínimo, escribe una relación de dependencia lineal entre las filas.</p>

<h2>Problema 2 <span class="pts">(2,5 puntos)</span></h2>
<ol class="parts">
<li>Calcula el determinante $\begin{vmatrix}1 & 2 & 3 & 4\\ 2 & 3 & 4 & 1\\ 3 & 4 & 1 & 2\\ 4 & 1 & 2 & 3\end{vmatrix}$.</li>
<li>Calcula por el método de Gauss-Jordan la inversa de $C=\begin{pmatrix}1 & 1 & 0\\ 0 & 1 & 1\\ 1 & 0 & 2\end{pmatrix}$.</li>
</ol>

<h2>Problema 3 <span class="pts">(2,5 puntos)</span></h2>
<p>Sea $\vec f:\mathbb R^3\to\mathbb R^3$ la transformación lineal que cumple $\vec f(1,1,0)=(2,2,0)$, $\vec f(0,1,1)=(0,1,1)$ y $\vec f(1,0,1)=(0,0,0)$.</p>
<ol class="parts">
<li>Calcula la matriz de $\vec f$ en la base canónica.</li>
<li>Calcula el núcleo y la imagen de $\vec f$. ¿Es $\vec f$ regular?</li>
<li>¿Es $\vec f$ diagonalizable? Justifícalo sin calcular el polinomio característico.</li>
</ol>

<h2>Problema 4 <span class="pts">(2,5 puntos)</span></h2>
<p>Se considera la transformación afín de $\mathbb R^3$ (referencia canónica)</p>
$$f(x,y,z)=(z+1,\ x+1,\ y+1).$$
<ol class="parts">
<li>Comprueba que es una transformación euclidiana y clasifica su transformación lineal asociada (eje y ángulo).</li>
<li>Estudia sus puntos fijos y clasifica $f$, dando todos sus elementos geométricos.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>Menores de orden 3 (columnas 1-2-3, 1-2-4, 1-3-4, 2-3-4):</p>
$$(a-4)(a-1),\quad -(a-4)(a-1),\quad 2(a-1)^2,\quad (a-1)(a^2+a-8).$$
<p>Todos se anulan solo si $a=1$ (para $a=4$, el tercero vale $18\ne0$).</p>
<p>• $a\ne1$: $\text{rg}M=3$. &nbsp;• $a=1$: $M=\begin{pmatrix}1 & 2 & 1 & 1\\ 2 & 1 & 2 & 2\\ 1 & 2 & 1 & 1\end{pmatrix}$, con $\begin{vmatrix}1 & 2\\ 2 & 1\end{vmatrix}=-3\ne0$: $\text{rg}M=2$.</p>
<p class="res">$\text{rg}M=3$ si $a\ne1$; $\ \text{rg}M=2$ si $a=1$, con $F_3=F_1$</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) Sumamos todas las columnas a la primera: queda la columna $(10,10,10,10)$. Sacamos el 10 y restamos la fila 1 a las demás:</p>
$$10\begin{vmatrix}1 & 2 & 3 & 4\\ 0 & 1 & 1 & -3\\ 0 & 2 & -2 & -2\\ 0 & -1 & -1 & -1\end{vmatrix}=10\begin{vmatrix}1 & 1 & -3\\ 2 & -2 & -2\\ -1 & -1 & -1\end{vmatrix}=10\cdot16.$$
<p class="res">$\det=160$</p>
<p>(b) $\det C=3$. Gauss-Jordan sobre $(C\,|\,I)$: $F_3-F_1$, $F_3+F_2$, $F_3/3$, $F_2-F_3$, $F_1-F_2$:</p>
<p class="res">$C^{-1}=\dfrac13\begin{pmatrix}2 & -2 & 1\\ 1 & 2 & -1\\ -1 & 1 & 1\end{pmatrix}$</p>
<p class="crit">Comprobación: $C\,C^{-1}=I$.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) Con $V=\begin{pmatrix}1 & 0 & 1\\ 1 & 1 & 0\\ 0 & 1 & 1\end{pmatrix}$ (columnas $\vec v_i$) y $W$ (columnas imágenes), $A=WV^{-1}$. Como $\vec f(\vec v_1)=2\vec v_1$, $\vec f(\vec v_2)=\vec v_2$, $\vec f(\vec v_3)=\vec0$, también $A=V\,\text{diag}(2,1,0)\,V^{-1}$:</p>
<p class="res">$A=\begin{pmatrix}1 & 1 & -1\\ \frac12 & \frac32 & -\frac12\\ -\frac12 & \frac12 & \frac12\end{pmatrix}$</p>
<p>(b) $\ker\vec f=\langle(1,0,1)\rangle$ (dimensión 1). $\text{Im}\vec f=\langle(1,1,0),(0,1,1)\rangle$ (dimensión 2, porque $\vec v_1,\vec v_2$ están en la imagen). <strong>No es regular</strong> ($\det A=0$).</p>
<p>(c) Sí: $\{\vec v_1,\vec v_2,\vec v_3\}$ es una base ($\det V=2\ne0$) formada por vectores propios de VAP $2$, $1$ y $0$. En esa base la matriz es diagonal.</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) $f(X)=AX+B$ con $A=\begin{pmatrix}0 & 0 & 1\\ 1 & 0 & 0\\ 0 & 1 & 0\end{pmatrix}$, $B=(1,1,1)$. Las columnas de $A$ son ortonormales: <strong>euclidiana</strong>. $\det A=1$: rotación. Eje: $(A-I)X=0\Rightarrow x=y=z$, $\vec u=(1,1,1)$. Ángulo: $\text{tr}A=0=1+2\cos\gamma\Rightarrow\gamma=\frac{2\pi}3$ ($120^\circ$).</p>
<p>(b) Puntos fijos: $(A-I)X=-B$, es decir $z-x=-1$, $x-y=-1$, $y-z=-1$. Sumando: $0=-3$: <strong>no hay puntos fijos</strong>.</p>
<p>Una euclidiana directa con lineal asociada rotación ($\ne I$) y sin puntos fijos es un <strong>movimiento helicoidal</strong>. Como $B=(1,1,1)$ es paralelo al eje, la traslación es $\vec t=(1,1,1)$ y el eje pasa por el origen.</p>
<p class="res">Movimiento helicoidal: eje $x=y=z$, ángulo $120^\circ$, traslación $(1,1,1)$ (longitud $\sqrt3$)</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen de prueba 3",
  sub: "Álgebra lineal · Sistemas con dos parámetros, cambio de base, geometría afín y mínimos cuadrados",
  desc: "Sistema con dos parámetros, matriz en otra base, rectas que se cruzan y recta de mínimos cuadrados.",
  dur: "2 h", pts: "10 puntos (2,5 por problema)",
  instr: "<p>Justifica todas las respuestas.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2,5 puntos)</span></h2>
<p>Discute el sistema según los valores de $a,b\in\mathbb R$ y resuélvelo cuando sea compatible indeterminado:</p>
$$\begin{cases}x+2y-z=1\\ 2x+y+az=0\\ x-y+2z=b\end{cases}$$

<h2>Problema 2 <span class="pts">(2,5 puntos)</span></h2>
<p>Sea $\vec f:\mathbb R^2\to\mathbb R^2$ de matriz $A=\begin{pmatrix}1 & 2\\ 2 & 1\end{pmatrix}$ en la base canónica, y sea $B'=\{(1,1),(1,-1)\}$.</p>
<ol class="parts">
<li>Calcula la matriz de $\vec f$ en la base $B'$.</li>
<li>Calcula las componentes del vector $(3,1)$ en la base $B'$ y, con ellas, las de su imagen en $B'$.</li>
<li>Interpreta geométricamente $\vec f$.</li>
</ol>

<h2>Problema 3 <span class="pts">(2,5 puntos)</span></h2>
<p>Se consideran las rectas $r:\ (1,0,0)+\lambda(1,1,0)$ y $s:\ (0,1,1)+\mu(0,1,-1)$.</p>
<ol class="parts">
<li>Estudia su posición relativa.</li>
<li>Calcula la distancia entre ellas.</li>
<li>Calcula la ecuación del plano que contiene a $r$ y es paralelo a $s$.</li>
</ol>

<h2>Problema 4 <span class="pts">(2,5 puntos)</span></h2>
<p>Se han medido los puntos $(-1,0)$, $(0,1)$, $(1,1)$ y $(2,3)$.</p>
<ol class="parts">
<li>Plantea el sistema (incompatible) que resultaría de imponer que pasen por una recta $y=a+bx$.</li>
<li>Calcula la recta de ajuste por mínimos cuadrados y el error cometido.</li>
<li>Explica qué interpretación geométrica tiene la solución.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>$\det A=\begin{vmatrix}1 & 2 & -1\\ 2 & 1 & a\\ 1 & -1 & 2\end{vmatrix}=3(a-1)$.</p>
<p>• $a\ne1$: <strong>compatible determinado</strong> para todo $b$.</p>
<p>• $a=1$: $\text{rg}A=2$. Orlando con los términos independientes: $\begin{vmatrix}1 & 2 & 1\\ 2 & 1 & 0\\ 1 & -1 & b\end{vmatrix}=-3b-3$, que se anula solo si $b=-1$.</p>
<p>&nbsp;&nbsp;– $a=1$, $b\ne-1$: <strong>incompatible</strong>. &nbsp;– $a=1$, $b=-1$: <strong>compatible indeterminado</strong> (1 parámetro).</p>
<p>Resolución con $a=1$, $b=-1$: de las dos primeras ecuaciones, con $z=\lambda$: $x+2y=1+\lambda$, $2x+y=-\lambda$.</p>
<p class="res">$(x,y,z)=\left(-\frac13-\lambda,\ \frac23+\lambda,\ \lambda\right)$</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $C=\begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}$, $A'=C^{-1}AC$. Más rápido: $\vec f(1,1)=(3,3)=3(1,1)$ y $\vec f(1,-1)=(-1,1)=-(1,-1)$.</p>
<p class="res">$A'=\begin{pmatrix}3 & 0\\ 0 & -1\end{pmatrix}$</p>
<p>(b) $(3,1)=2(1,1)+1(1,-1)$: componentes $(2,1)_{B'}$. Imagen: $A'\binom21=\binom{6}{-1}$, es decir $(6,-1)_{B'}$.</p>
<p class="crit">Comprobación: $6(1,1)-(1,-1)=(5,7)$ y $A(3,1)=(5,7)$ ✔.</p>
<p>(c) $B'$ es una base ortogonal de vectores propios: $\vec f$ estira por 3 en la dirección de la bisectriz $y=x$ y refleja (multiplica por $-1$) en la dirección perpendicular $y=-x$.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) Direcciones $\vec u=(1,1,0)$, $\vec v=(0,1,-1)$, no proporcionales. Con $\vec{PQ}=(-1,1,1)$: $\det(\vec{PQ},\vec u,\vec v)=3\ne0$, así que no son coplanarias: <strong>se cruzan</strong>.</p>
<p>(b) $\vec u\times\vec v=(-1,1,1)$, $|\vec u\times\vec v|=\sqrt3$.</p>
$$d(r,s)=\frac{|\det(\vec{PQ},\vec u,\vec v)|}{|\vec u\times\vec v|}=\frac{3}{\sqrt3}.$$
<p class="res">$d(r,s)=\sqrt3$</p>
<p>(c) Plano por $P=(1,0,0)$ con vectores $\vec u$ y $\vec v$: normal $(-1,1,1)$.</p>
<p class="res">$-x+y+z+1=0$</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) $\begin{pmatrix}1 & -1\\ 1 & 0\\ 1 & 1\\ 1 & 2\end{pmatrix}\binom ab=\begin{pmatrix}0\\ 1\\ 1\\ 3\end{pmatrix}$: 4 ecuaciones, 2 incógnitas; incompatible (los puntos no están alineados).</p>
<p>(b) Ecuaciones normales $A^tA\binom ab=A^t\vec y$: $\begin{pmatrix}4 & 2\\ 2 & 6\end{pmatrix}\binom ab=\binom{5}{7}$, con solución $a=\frac45$, $b=\frac9{10}$.</p>
<p class="res">$y=0{,}8+0{,}9x$</p>
<p>Residuos: $A\binom ab-\vec y=\left(-\frac1{10},-\frac15,\frac7{10},-\frac25\right)$. Error: $\sqrt{\frac{1+4+49+16}{100}}=\frac{\sqrt{70}}{10}\approx0{,}837$.</p>
<p>(c) $A\binom ab$ es la proyección ortogonal de $\vec y$ sobre el subespacio generado por las columnas de $A$: el vector "alcanzable" más cercano a los datos. El error es la distancia de $\vec y$ a ese subespacio.</p>
</div>
`}
];
