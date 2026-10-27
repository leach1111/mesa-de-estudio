SUBJECTS.push({
  id: "algebra",
  name: "Álgebra lineal",
  short: "Álgebra",
  desc: "Matrices, sistemas, espacios vectoriales y afines, transformaciones y formas cuadráticas.",
  intro: "Sigue el orden de las transparencias de Amer y Sales: primero la parte operativa (matrices, determinantes, rango, sistemas) y luego la conceptual. Entre paréntesis tienes el nombre en catalán que verás en los apuntes.",
  sources: "Transparències d'Àlgebra (Amer y Sales), Exercicis y Exercicis resolts.",
  topics: [

/* ============================================================ */
{ id: "matrices", title: "Matrices y determinantes",
  desc: "Operaciones, tipos de matrices, propiedades del determinante, inversa y ecuaciones matriciales.",
  html: String.raw`
<h2>Operaciones básicas</h2>
<ul>
<li><strong>Producto</strong> $AB$: solo si las columnas de $A$ coinciden con las filas de $B$. El elemento $(i,j)$ es "fila $i$ de $A$ por columna $j$ de $B$".</li>
<li>El producto <strong>no es conmutativo</strong>: en general $AB\ne BA$.</li>
<li><strong>Traspuesta</strong>: $(A^t)_{ij}=A_{ji}$. Cumple $(AB)^t=B^tA^t$ (se gira el orden).</li>
</ul>
<div class="tf" data-a="f"><p>Para matrices cuadradas cualesquiera, $(A+B)^2=A^2+2AB+B^2$.</p>
<div class="why"><p>$(A+B)^2=A^2+AB+BA+B^2$. Solo coincide si $AB=BA$. Es justo lo que te hace comprobar el ejercicio 3 de la colección.</p></div></div>

<h3>Tipos de matrices que aparecen</h3>
<table>
<tr><th>Tipo</th><th>Condición</th></tr>
<tr><td>Simétrica</td><td>$A^t=A$</td></tr>
<tr><td>Antisimétrica</td><td>$A^t=-A$ (diagonal nula)</td></tr>
<tr><td>Regular (invertible)</td><td>$\det A\ne0$</td></tr>
<tr><td>Ortogonal</td><td>$A^tA=I$, es decir $A^{-1}=A^t$. Columnas ortonormales. $\det A=\pm1$</td></tr>
<tr><td>Directa / inversa</td><td>$\det A\gt0$ / $\det A\lt0$</td></tr>
</table>
<div class="tip"><span class="label">Cómo comprobar si es ortogonal en 10 segundos</span><p>Mira las columnas: cada una debe tener módulo 1 y ser perpendicular a las demás. Ejemplo: $\frac17\begin{pmatrix}-6 & 3 & 2\\ 3 & 2 & 6\\ 2 & 6 & -3\end{pmatrix}$: columnas de módulo $\frac17\sqrt{49}=1$ y productos escalares nulos. Ortogonal.</p></div>

<h2>Determinantes</h2>
<div class="formula">$$\begin{vmatrix} a & b\\ c & d\end{vmatrix}=ad-bc\qquad \text{Sarrus para }3\times3\qquad \text{Laplace: desarrollar por una fila o columna}$$</div>
<div class="key"><span class="label">Propiedades que más se usan</span>
<ul>
<li>$\det(AB)=\det A\cdot\det B$, $\det(A^t)=\det A$, $\det(A^{-1})=\frac1{\det A}$.</li>
<li>$\det(kA)=k^n\det A$ si $A$ es $n\times n$ (¡la $k$ multiplica a cada una de las $n$ filas!).</li>
<li>Intercambiar dos filas cambia el signo. Sumar a una fila un múltiplo de otra no lo cambia.</li>
<li>Fila de ceros o dos filas proporcionales ⇒ determinante 0.</li></ul></div>
<div class="tip"><span class="label">Para 4×4</span><p>Haz ceros en una columna con operaciones "fila + k·fila" (no cambian el determinante) y desarrolla por esa columna.</p></div>

<div class="num" data-a="-32"><p>Si $A,B$ son $2\times2$ con $\det A=2$ y $\det B=-1$, ¿cuánto vale $\det(-2A^tBA^2)$?</p>
<div class="why"><p>$(-2)^2\cdot\det A\cdot\det B\cdot(\det A)^2=4\cdot2\cdot(-1)\cdot4=-32$. (Si fueran $3\times3$: $(-2)^3=-8$ y el resultado sería $64$.)</p></div></div>

<div class="prob"><div class="enun"><p>$A,B,X$ son $3\times3$ y cumplen $A^2X^{-1}B^t=2X$. Halla $\det X$ si $\det A=-1$ y $\det B=2$.</p><p class="src">Exercicis, cap. 1, ej. 30</p></div>
<div class="hint"><p>Toma determinantes en los dos lados. Ojo: $\det(2X)=2^3\det X$.</p></div>
<div class="sol"><p>$(\det A)^2\cdot\frac1{\det X}\cdot\det B=8\det X \Rightarrow \frac{2}{\det X}=8\det X \Rightarrow (\det X)^2=\frac14$.</p>
<p>$\det X=\pm\frac12$.</p></div></div>

<h2>Matriz inversa</h2>
<h3>Por Gauss-Jordan</h3>
<p>Escribe $(A\,|\,I)$ y haz operaciones de fila hasta llegar a $(I\,|\,A^{-1})$.</p>
<h3>Por la adjunta</h3>
<div class="formula">$$A^{-1}=\frac{1}{\det A}\,\text{adj}(A)^t,\qquad \text{adj}(A)_{ij}=(-1)^{i+j}\cdot\text{menor al quitar fila } i \text{ y columna } j$$</div>
<div class="steps"><p>Inversa de $A=\begin{pmatrix}1 & 1 & 1\\ 1 & 2 & 1\\ 0 & 1 & 3\end{pmatrix}$ por la adjunta (ej. 26).</p>
<div class="step">$\det A=1(6-1)-1(3-0)+1(1-0)=5-3+1=3$.</div>
<div class="step">Adjuntos (con su signo de tablero de ajedrez): fila 1: $5,\ -3,\ 1$; fila 2: $-2,\ 3,\ -1$; fila 3: $-1,\ 0,\ 1$.</div>
<div class="step">Trasponemos y dividimos por 3: $A^{-1}=\frac13\begin{pmatrix}5 & -2 & -1\\ -3 & 3 & 0\\ 1 & -1 & 1\end{pmatrix}$. Comprueba siempre que $AA^{-1}=I$.</div></div>

<h2>Ecuaciones matriciales</h2>
<div class="warn"><span class="label">El lado importa</span><p>De $AX=B$ se despeja $X=A^{-1}B$ (multiplicando por la izquierda). De $XA=B$, $X=BA^{-1}$ (por la derecha). Nunca escribas $\frac BA$.</p></div>
<div class="mc"><p>Despeja $X$ en $2A-3(X^t-C)=A-2B$.</p>
<ul><li data-ok>$X=\frac13(A+2B+3C)^t$</li><li>$X=\frac13(A-2B+3C)^t$</li><li>$X=A+2B+3C$</li><li>$X^t=3(A+2B+C)$</li></ul>
<div class="why"><p>$2A-3X^t+3C=A-2B \Rightarrow 3X^t=A+2B+3C \Rightarrow X=\frac13(A+2B+3C)^t$.</p></div></div>
`},

/* ============================================================ */
{ id: "rango-sistemas", title: "Rango y sistemas de ecuaciones",
  desc: "Escalonamiento (Gauss), menores orlados, Rouché-Frobenius, Cramer y discusión con parámetros.",
  html: String.raw`
<h2>Rango de una matriz</h2>
<p>El <strong>rango</strong> es el número máximo de filas (o columnas) linealmente independientes. Dos formas de calcularlo:</p>
<h3>Método de Gauss (esglaonament)</h3>
<p>Haz ceros por debajo de los pivotes hasta tener forma escalonada. El rango es el número de filas no nulas.</p>
<h3>Método de los menores (menors orlats)</h3>
<ol><li>Busca un menor de orden 2 no nulo.</li>
<li>"Órlalo": añádele una fila y una columna de las que quedan para formar menores de orden 3. Si todos los orlados son 0, el rango es 2. Si alguno no es 0, sigue subiendo.</li></ol>
<div class="tip"><span class="label">Por qué orlar ahorra trabajo</span><p>En una matriz $3\times4$ hay 4 menores de orden 3, pero si orlas un menor $2\times2$ fijo solo tienes que mirar 2.</p></div>
<div class="num" data-a="2"><p>Rango de $\begin{pmatrix}1 & 2 & 3\\ 2 & 4 & 6\\ 1 & 0 & 1\end{pmatrix}$.</p>
<div class="why"><p>La fila 2 es el doble de la 1. Las filas 1 y 3 no son proporcionales. Rango 2.</p></div></div>

<h2>Teorema de Rouché-Frobenius</h2>
<p>Para el sistema $AX=b$ con $n$ incógnitas, sea $A^*=(A\,|\,b)$ la matriz ampliada:</p>
<table>
<tr><th>Situación</th><th>Tipo de sistema</th></tr>
<tr><td>$\text{rg}\,A\ne\text{rg}\,A^*$</td><td>Incompatible (sin solución)</td></tr>
<tr><td>$\text{rg}\,A=\text{rg}\,A^*=n$</td><td>Compatible determinado (una solución)</td></tr>
<tr><td>$\text{rg}\,A=\text{rg}\,A^*\lt n$</td><td>Compatible indeterminado: $n-\text{rg}$ parámetros libres</td></tr>
</table>
<div class="tf" data-a="v"><p>Un sistema homogéneo ($b=0$) siempre es compatible.</p>
<div class="why"><p>Siempre tiene la solución trivial $X=0$, y el rango de $A$ y $A^*$ coincide porque solo se añade una columna de ceros.</p></div></div>

<div class="steps"><p>Ej. 14(a): resuelve $x+2y+z=4,\ 2x-3y+4z=6,\ 3x-y+5z=1$.</p>
<div class="step">Ampliada y $F_2-2F_1$, $F_3-3F_1$: filas $(0,-7,2\,|\,-2)$ y $(0,-7,2\,|\,-11)$.</div>
<div class="step">$F_3-F_2$: $(0,0,0\,|\,-9)$. Ecuación $0=-9$, imposible.</div>
<div class="step">$\text{rg}\,A=2\ne\text{rg}\,A^*=3$: <strong>incompatible</strong>. Fíjate: la tercera ecuación tiene los coeficientes de la suma de las dos primeras pero otro término independiente.</div></div>

<h2>Regla de Cramer</h2>
<div class="formula">$$x_i=\frac{\det A_i}{\det A},\qquad A_i=A\text{ con la columna } i \text{ sustituida por } b$$</div>
<p>Solo para sistemas cuadrados con $\det A\ne0$. Si el sistema es compatible indeterminado, pasa las incógnitas libres al otro lado y aplica Cramer al sistema que queda.</p>

<h2>Discusión con un parámetro</h2>
<div class="key"><span class="label">Receta</span><ol>
<li>Si $A$ es cuadrada, calcula $\det A$ en función del parámetro y busca dónde se anula.</li>
<li>Para los demás valores: compatible determinado.</li>
<li>Para cada valor que anula el determinante, sustituye y calcula los rangos de $A$ y $A^*$.</li></ol></div>
<div class="prob"><div class="enun"><p>Discute según $\alpha$: $\ x-2y+\alpha z=\alpha,\quad x+4y+\alpha^2z=6\alpha,\quad x-8y+\alpha^2z=-4$.</p><p class="src">Exercicis, cap. 1, ej. 20</p></div>
<div class="hint"><p>Calcula $\det A$: sale un producto sencillo.</p></div>
<div class="sol"><p>$\det A=12\alpha(\alpha-1)$.</p>
<ul><li>$\alpha\ne0,1$: rango 3 = rango ampliada = n.º incógnitas → <strong>compatible determinado</strong>.</li>
<li>$\alpha=0$: $\text{rg}A=2$, $\text{rg}A^*=3$ → <strong>incompatible</strong>.</li>
<li>$\alpha=1$: $\text{rg}A=\text{rg}A^*=2$ → <strong>compatible indeterminado</strong> con 1 parámetro.</li></ul></div></div>

<div class="prob"><div class="enun"><p>Un depósito tiene tres grifos. Con el 1.º y el 2.º se llena en 2 h; con el 1.º y el 3.º, en 3 h; con el 2.º y el 3.º, en 2 h. ¿Cuánto tarda cada uno solo?</p><p class="src">Exercicis, cap. 1, ej. 15</p></div>
<div class="hint"><p>Usa como incógnitas los <em>caudales</em> (fracción de depósito por hora), no los tiempos: así el sistema es lineal.</p></div>
<div class="sol"><p>$a+b=\frac12$, $a+c=\frac13$, $b+c=\frac12$. Sumando: $2(a+b+c)=\frac43 \Rightarrow a+b+c=\frac23$.</p>
<p>$c=\frac23-\frac12=\frac16$, $b=\frac23-\frac13=\frac13$, $a=\frac23-\frac12=\frac16$.</p>
<p>Tiempos: grifo 1, 6 h; grifo 2, 3 h; grifo 3, 6 h.</p></div></div>
`},

/* ============================================================ */
{ id: "espacios", title: "Espacios vectoriales y afines",
  desc: "Combinación lineal, bases, subespacios en paramétricas e implícitas, cambio de base, rectas y planos.",
  html: String.raw`
<h2>Dependencia lineal y bases</h2>
<ul>
<li>$\vec v$ es <strong>combinación lineal</strong> de $\vec u_1,\dots,\vec u_k$ si $\vec v=\lambda_1\vec u_1+\dots+\lambda_k\vec u_k$.</li>
<li>Vectores <strong>linealmente independientes</strong>: ninguno es combinación de los otros. En la práctica: el rango de la matriz que forman es igual al número de vectores.</li>
<li><strong>Base</strong>: sistema independiente que genera todo el espacio. Todas las bases tienen el mismo número de vectores: la <strong>dimensión</strong>.</li>
</ul>
<div class="tf" data-a="v"><p>Cuatro vectores de $\mathbb R^3$ siempre son linealmente dependientes.</p>
<div class="why"><p>En $\mathbb R^3$ el rango máximo es 3, así que 4 vectores no pueden ser independientes.</p></div></div>

<h2>Subespacios: dos maneras de describirlos</h2>
<table>
<tr><th>Forma</th><th>Ejemplo (un plano de $\mathbb R^3$)</th></tr>
<tr><td>Generadores / paramétricas</td><td>$\langle(1,0,1),(0,1,2)\rangle$: $(x,y,z)=\alpha(1,0,1)+\beta(0,1,2)$</td></tr>
<tr><td>Implícitas</td><td>$x+2y-z=0$</td></tr>
</table>
<div class="key"><span class="label">Contar ecuaciones</span><p>En $\mathbb R^n$, un subespacio de dimensión $d$ necesita exactamente $n-d$ ecuaciones implícitas independientes ("minimales").</p></div>
<div class="steps"><p>Pasa $\langle(1,0,1),(0,1,2)\rangle$ a implícitas.</p>
<div class="step">$(x,y,z)$ está en el subespacio si es combinación de los generadores: el rango de la matriz con filas $(1,0,1)$, $(0,1,2)$, $(x,y,z)$ debe ser 2.</div>
<div class="step">Como el menor de los generadores ya es no nulo, basta con $\begin{vmatrix}1 & 0 & 1\\ 0 & 1 & 2\\ x & y & z\end{vmatrix}=0$.</div>
<div class="step">Desarrollando: $1(z-2y)-0+1(0-x)=0 \Rightarrow -x-2y+z=0$, es decir $x+2y-z=0$.</div></div>
<p>Al revés (de implícitas a paramétricas): resuelve el sistema homogéneo; las incógnitas libres son los parámetros.</p>

<h2>Cambio de base</h2>
<div class="formula">$$\text{Si } B'=\{\vec e'_1,\dots,\vec e'_n\} \text{ y } S \text{ tiene por columnas los } \vec e'_i:\qquad X=S\,X'\qquad X'=S^{-1}X$$</div>
<div class="mc"><p>Componentes de $(1,-3,1)$ en la base $B'=\{(1,1,3),(1,0,1),(2,1,0)\}$:</p>
<ul><li data-ok>$\left(-\frac32,\ \frac{11}2,\ -\frac32\right)$</li><li>$(1,-3,1)$</li><li>$\left(\frac32,-\frac{11}2,\frac32\right)$</li><li>$(-1,3,-1)$</li></ul>
<div class="why"><p>Resolvemos $a(1,1,3)+b(1,0,1)+c(2,1,0)=(1,-3,1)$. Sale $a=-\frac32$, $b=\frac{11}2$, $c=-\frac32$. Comprueba la segunda componente: $a+c=-3$ ✔.</p></div></div>

<h2>Suma e intersección</h2>
<ul>
<li>$V\cap W$: junta las ecuaciones implícitas de los dos.</li>
<li>$V+W$: junta los generadores de los dos.</li>
<li><strong>Fórmula de Grassmann</strong>: $\dim(V+W)=\dim V+\dim W-\dim(V\cap W)$.</li>
</ul>
<div class="num" data-a="1"><p>Dos planos vectoriales distintos de $\mathbb R^3$. ¿Qué dimensión tiene su intersección?</p>
<div class="why"><p>Al ser distintos, $V+W=\mathbb R^3$ (dim 3). Grassmann: $3=2+2-\dim(V\cap W) \Rightarrow 1$. Se cortan en una recta.</p></div></div>

<h2>Espacio afín: puntos, rectas y planos</h2>
<p>Una variedad afín es "un punto más un subespacio": $P+\vec V$. Las ecuaciones implícitas dejan de ser homogéneas (aparece término independiente).</p>
<div class="formula">$$\text{Recta: } (x,y,z)=P+\lambda\vec v\qquad \text{Plano: } (x,y,z)=P+\lambda\vec u+\mu\vec v\ \ \leftrightarrow\ \ ax+by+cz=d$$</div>
<h3>Posición relativa con rangos</h3>
<p>Escribe todas las ecuaciones implícitas juntas y compara $r=\text{rg}A$ con $r^*=\text{rg}A^*$:</p>
<table>
<tr><th>Dos planos en $\mathbb R^3$</th><th>Recta y plano</th><th>Dos rectas</th></tr>
<tr><td>$r=r^*=1$: coincidentes<br>$r=1,r^*=2$: paralelos<br>$r=r^*=2$: se cortan en una recta</td>
<td>$r=r^*=3$: se cortan en un punto<br>$r=2,r^*=3$: paralelos<br>$r=r^*=2$: recta contenida</td>
<td>$r=r^*=3$: se cortan<br>$r=3,r^*=4$: se cruzan<br>$r=2,r^*=3$: paralelas<br>$r=r^*=2$: coincidentes</td></tr>
</table>
<div class="tf" data-a="f"><p>Si dos rectas de $\mathbb R^3$ no se cortan, entonces son paralelas.</p>
<div class="why"><p>También pueden <strong>cruzarse</strong>: no se cortan y tienen direcciones distintas (están en planos diferentes).</p></div></div>
`},

/* ============================================================ */
{ id: "euclideo", title: "Espacio euclídeo: ángulos, distancias y proyecciones",
  desc: "Producto escalar, bases ortonormales, Gram-Schmidt, proyecciones, simétricos, distancias y orientación.",
  html: String.raw`
<h2>Producto escalar</h2>
<div class="formula">$$\vec u\cdot\vec v=u_1v_1+u_2v_2+u_3v_3=|\vec u||\vec v|\cos\theta\qquad |\vec u|=\sqrt{\vec u\cdot\vec u}\qquad \vec u\perp\vec v\iff\vec u\cdot\vec v=0$$</div>
<p>Si la base no es ortonormal hay que usar la matriz de Gram $G$ ($G_{ij}=\vec e_i\cdot\vec e_j$): $\vec u\cdot\vec v=U^tGV$.</p>

<h2>Complemento ortogonal</h2>
<div class="key"><span class="label">La relación más útil del tema</span><p>Los <strong>coeficientes</strong> de una ecuación implícita forman un vector perpendicular al subespacio. El plano $ax+by+cz=0$ es $\langle(a,b,c)\rangle^\perp$.</p></div>
<div class="tf" data-a="v"><p>El plano $\langle(1,-2,1)\rangle^\perp$ tiene ecuación $x-2y+z=0$.</p>
<div class="why"><p>Son los vectores perpendiculares a $(1,-2,1)$: $(x,y,z)\cdot(1,-2,1)=0$.</p></div></div>

<h2>Gram-Schmidt: fabricar una base ortogonal</h2>
<div class="formula">$$\vec w_1=\vec v_1,\qquad \vec w_2=\vec v_2-\frac{\vec v_2\cdot\vec w_1}{\vec w_1\cdot\vec w_1}\vec w_1,\qquad \vec w_3=\vec v_3-\frac{\vec v_3\cdot\vec w_1}{\vec w_1\cdot\vec w_1}\vec w_1-\frac{\vec v_3\cdot\vec w_2}{\vec w_2\cdot\vec w_2}\vec w_2$$</div>
<p>A cada vector le quitas su "sombra" sobre los anteriores. Para que sea ortonormal, divide al final cada uno por su módulo. Truco: puedes multiplicar cada $\vec w_i$ por un número para quitar fracciones antes de seguir.</p>
<div class="prob"><div class="enun"><p>Base ortonormal de $V=\langle(0,1,2,3),(3,2,1,0),(1,-1,1,-1)\rangle$.</p><p class="src">Exercicis, cap. 2, ej. 11</p></div>
<div class="sol"><p>$\vec w_1=(0,1,2,3)$, $|\vec w_1|^2=14$.</p>
<p>$\vec v_2\cdot\vec w_1=4$: $\vec w_2=(3,2,1,0)-\frac4{14}(0,1,2,3)=\left(3,\frac{12}7,\frac37,-\frac67\right)$; multiplicando por $\frac73$: $(7,4,1,-2)$.</p>
<p>$\vec w_3=(1,-1,1,-1)-\frac{\vec v_3\cdot\vec w_1}{14}\vec w_1-\frac{\vec v_3\cdot\vec w_2}{|\vec w_2|^2}\vec w_2=\left(\frac25,-\frac65,\frac65,-\frac25\right)$, proporcional a $(1,-3,3,-1)$.</p>
<p>Normalizando: $\frac1{\sqrt{14}}(0,1,2,3)$, $\frac1{\sqrt{70}}(7,4,1,-2)$, $\frac1{\sqrt{20}}(1,-3,3,-1)$.</p></div></div>

<h2>Proyección ortogonal y simétrico</h2>
<div class="formula">$$\text{Sobre la recta } \langle\vec n\rangle:\ \ \text{proy}=\frac{\vec u\cdot\vec n}{\vec n\cdot\vec n}\vec n\qquad\qquad \text{Sobre el plano } \langle\vec n\rangle^\perp:\ \ \text{proy}=\vec u-\frac{\vec u\cdot\vec n}{\vec n\cdot\vec n}\vec n$$
$$\text{Simétrico}=2\cdot\text{proy}-\vec u$$</div>
<div class="steps"><p>Proyección y simétrico de $(1,0,1)$ respecto al plano $\langle(1,-2,1)\rangle^\perp$ (ej. 12).</p>
<div class="step">$\vec u\cdot\vec n=1+0+1=2$, $\vec n\cdot\vec n=6$.</div>
<div class="step">$\text{proy}=(1,0,1)-\frac26(1,-2,1)=\left(\frac23,\frac23,\frac23\right)$.</div>
<div class="step">Simétrico: $2\left(\frac23,\frac23,\frac23\right)-(1,0,1)=\left(\frac13,\frac43,\frac13\right)$.</div></div>

<h2>Distancias y ángulos</h2>
<div class="formula">$$d(P,\pi)=\frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^2+b^2+c^2}}\qquad d(P,r)=\frac{|\vec{AP}\times\vec v|}{|\vec v|}\qquad d(r,s)=\frac{|[\vec{AB},\vec u,\vec v]|}{|\vec u\times\vec v|}$$</div>
<div class="num" data-a="3.9196" data-tol="0.01" data-show="13/√11 ≈ 3,920"><p>Distancia del punto $(0,1,0)$ al plano que pasa por $(-3,0,3)$ con vector normal $(1,1,-3)$ (ej. 18).</p>
<div class="why"><p>Plano: $(x+3)+y-3(z-3)=0 \Rightarrow x+y-3z+12=0$. $d=\frac{|0+1-0+12|}{\sqrt{11}}=\frac{13}{\sqrt{11}}\approx3{,}920$.</p></div></div>
<p>Ángulo entre rectas: con los vectores directores (en valor absoluto, para quedarte con el agudo). Entre planos: con los normales. Entre recta y plano: $\sin\theta=\frac{|\vec v\cdot\vec n|}{|\vec v||\vec n|}$.</p>

<h2>Producto vectorial, volumen y orientación</h2>
<div class="formula">$$\vec u\times\vec v=\begin{vmatrix}\vec i & \vec j & \vec k\\ u_1 & u_2 & u_3\\ v_1 & v_2 & v_3\end{vmatrix}\qquad \text{Área paralelogramo}=|\vec u\times\vec v|\qquad \text{Volumen}=|\det(\vec u,\vec v,\vec w)|$$</div>
<p>Una base tiene la misma <strong>orientación</strong> que la canónica (directa) si el determinante de sus vectores es positivo.</p>
<div class="tf" data-a="v"><p>Si el determinante de tres vectores es 0, son coplanarios.</p>
<div class="why"><p>Volumen nulo significa que el paralelepípedo es plano: los vectores son dependientes.</p></div></div>
`},

/* ============================================================ */
{ id: "lineales", title: "Transformaciones lineales y diagonalización",
  desc: "Matriz asociada, núcleo, imagen, cambio de base, valores y vectores propios.",
  html: String.raw`
<h2>Matriz de una transformación lineal</h2>
<div class="key"><span class="label">Regla de oro</span><p>Las <strong>columnas</strong> de la matriz de $\vec f$ son las imágenes de los vectores de la base, escritas en esa base.</p></div>
<p>Ejemplo: si $\vec f(x,y,z)=(x+3y+3z,\ -3x+7y+3z,\ 12x-12y-8z)$, la matriz en la canónica tiene por columnas $\vec f(1,0,0)=(1,-3,12)$, etc.</p>
<div class="formula">$$\text{Cambio de base: } A'=S^{-1}AS\qquad (S=\text{columnas: vectores de la nueva base})$$</div>
<ul>
<li><strong>Núcleo</strong> $\ker\vec f=\{\vec v: \vec f(\vec v)=\vec 0\}$: resuelve $AX=0$.</li>
<li><strong>Imagen</strong> $\text{Im}\vec f$: generada por las columnas de $A$. $\dim\text{Im}=\text{rg}A$.</li>
<li>$\dim\ker+\dim\text{Im}=n$.</li>
</ul>
<div class="tf" data-a="v"><p>Una transformación lineal de $\mathbb R^3$ en $\mathbb R^3$ con $\det A\ne0$ tiene núcleo $\{\vec 0\}$.</p>
<div class="why"><p>$\det A\ne0$ ⇒ rango 3 ⇒ $\dim\ker=3-3=0$. Es biyectiva.</p></div></div>

<h2>Valores y vectores propios</h2>
<div class="def"><span class="label">Definición</span><p>$\vec v\ne\vec0$ es vector propio (VEP) de valor propio (VAP) $\lambda$ si $\vec f(\vec v)=\lambda\vec v$: la transformación solo lo estira o encoge, sin cambiarle la dirección.</p></div>
<div class="key"><span class="label">Receta para diagonalizar</span><ol>
<li>Polinomio característico: $\det(A-\lambda I)=0$. Sus raíces son los VAP.</li>
<li>Para cada VAP, $\ker(A-\lambda I)$ da sus VEP. Su dimensión es la multiplicidad geométrica: $n-\text{rg}(A-\lambda I)$.</li>
<li>Es <strong>diagonalizable</strong> si todos los VAP son reales y, para cada uno, multiplicidad geométrica = multiplicidad algebraica.</li>
<li>$D=S^{-1}AS$ con $S$ = VEP en columnas, en el mismo orden que los VAP en $D$.</li></ol></div>
<div class="tip"><span class="label">Atajo</span><p>Si los $n$ VAP son distintos, es diagonalizable seguro. Comprobaciones rápidas: suma de VAP = traza; producto de VAP = determinante.</p></div>
<div class="steps"><p>Diagonaliza $A=\begin{pmatrix}4 & 1\\ 2 & 3\end{pmatrix}$.</p>
<div class="step">$\det(A-\lambda I)=(4-\lambda)(3-\lambda)-2=\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$.</div>
<div class="step">$\lambda=2$: $A-2I=\begin{pmatrix}2 & 1\\ 2 & 1\end{pmatrix}$, $2x+y=0$, VEP $(-1,2)$. $\lambda=5$: $\begin{pmatrix}-1 & 1\\ 2 & -2\end{pmatrix}$, $x=y$, VEP $(1,1)$.</div>
<div class="step">$S=\begin{pmatrix}-1 & 1\\ 2 & 1\end{pmatrix}$, $D=\begin{pmatrix}2 & 0\\ 0 & 5\end{pmatrix}=S^{-1}AS$. Comprobación: $2+5=7=$ traza, $2\cdot5=10=\det A$ ✔.</div></div>
<div class="mc"><p>$A=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$:</p>
<ul><li data-ok>no es diagonalizable</li><li>es diagonalizable con VAP 1 y 1</li><li>es diagonalizable porque es triangular</li><li>tiene VAP complejos</li></ul>
<div class="why"><p>VAP $\lambda=1$ doble, pero $A-I=\begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}$ tiene rango 1: multiplicidad geométrica $2-1=1\ne2$.</p></div></div>

<h2>Diagonalización ortogonal</h2>
<div class="key"><span class="label">Teorema espectral</span><p>Toda matriz <strong>simétrica real</strong> es diagonalizable, con VAP reales y VEP de VAP distintos ortogonales. Normalizando los VEP, $S$ es ortogonal y $D=S^tAS$.</p></div>
<div class="num" data-a="3"><p>¿Cuál es el valor propio mayor de $\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$?</p>
<div class="why"><p>$(2-\lambda)^2-1=0 \Rightarrow \lambda=1,3$. VEP $(1,1)$ para 3 y $(-1,1)$ para 1: perpendiculares, como dice el teorema.</p></div></div>
`},

/* ============================================================ */
{ id: "afines", title: "Transformaciones afines e isometrías",
  desc: "Expresión matricial, puntos fijos, giros, simetrías, proyecciones y clasificación de movimientos.",
  html: String.raw`
<h2>Transformación afín = lineal + traslación</h2>
<div class="formula">$$f(X)=AX+B\qquad\leftrightarrow\qquad \begin{pmatrix}1\\ \bar X\end{pmatrix}=\begin{pmatrix}1 & 0\\ B & A\end{pmatrix}\begin{pmatrix}1\\ X\end{pmatrix}$$</div>
<ul><li>$A$ es la <strong>lineal asociada</strong> $\vec f$; $B=f(O)$ es la imagen del origen.</li>
<li><strong>Regular</strong> si $\det A\ne0$; directa si $\det A\gt0$, inversa si $\det A\lt0$.</li>
<li><strong>Puntos fijos</strong>: resuelve $AX+B=X$, es decir $(A-I)X=-B$.</li></ul>
<div class="tf" data-a="f"><p>Toda transformación afín tiene al menos un punto fijo.</p>
<div class="why"><p>Una traslación no nula $f(X)=X+B$ no fija ningún punto: $(A-I)X=-B$ es $0=-B$, incompatible.</p></div></div>

<h2>Isometrías (movimientos)</h2>
<p>Conservan distancias: la parte lineal $A$ es <strong>ortogonal</strong> (en base ortonormal), y $\det A=\pm1$.</p>
<h3>En el plano</h3>
<table>
<tr><th>$\det A$</th><th>Puntos fijos</th><th>Tipo</th></tr>
<tr><td>$+1$</td><td>uno</td><td>Giro (ángulo con $\cos\theta=\frac{\text{traza}}2$)</td></tr>
<tr><td>$+1$, $A=I$</td><td>ninguno / todos</td><td>Traslación / identidad</td></tr>
<tr><td>$-1$</td><td>una recta</td><td>Simetría axial</td></tr>
<tr><td>$-1$</td><td>ninguno</td><td>Simetría con deslizamiento</td></tr>
</table>
<div class="formula">$$\text{Giro de ángulo }\theta:\ \begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$$</div>
<h3>En el espacio</h3>
<table>
<tr><th>$\det A$</th><th>Tipo (lineal)</th><th>Cómo reconocerlo</th></tr>
<tr><td>$+1$</td><td>Rotación alrededor de un eje</td><td>Eje: VEP de VAP 1. Ángulo: $\text{traza}=1+2\cos\theta$</td></tr>
<tr><td>$-1$</td><td>Simetría especular (respecto a un plano)</td><td>VAP $1,1,-1$; matriz simétrica</td></tr>
<tr><td>$-1$</td><td>Rotación + simetría</td><td>$\text{traza}=-1+2\cos\theta$</td></tr>
</table>
<p>Afines en el espacio: rotación con deslizamiento = <strong>movimiento helicoidal</strong>; simetría con deslizamiento; simetría central ($A=-I$).</p>
<div class="num" data-a="120" data-tol="0.5" data-show="120°" data-unit="grados"><p>Una rotación del espacio tiene matriz con traza 0. ¿Cuál es su ángulo?</p>
<div class="why"><p>$0=1+2\cos\theta \Rightarrow \cos\theta=-\frac12 \Rightarrow \theta=120^\circ$ ($\frac{2\pi}3$).</p></div></div>

<h2>Simetría respecto a un plano</h2>
<div class="formula">$$S(\vec u)=\vec u-2\frac{\vec u\cdot\vec n}{\vec n\cdot\vec n}\vec n\qquad \text{matriz: } I-\frac{2}{\vec n^t\vec n}\vec n\vec n^t$$</div>
<div class="prob"><div class="enun"><p>Simétrico del punto $(1,1,1)$ respecto al plano $x+2y+2z=1$.</p><p class="src">Exercicis, cap. 3, ej. 17(b)</p></div>
<div class="hint"><p>Recta perpendicular por el punto, corte con el plano (proyección $M$) y simétrico $=2M-P$.</p></div>
<div class="sol"><p>Recta: $(1+t,1+2t,1+2t)$. En el plano: $1+t+2+4t+2+4t=1 \Rightarrow 9t=-4 \Rightarrow t=-\frac49$.</p>
<p>$M=\left(\frac59,\frac19,\frac19\right)$. Simétrico: $2M-P=\left(\frac19,-\frac79,-\frac79\right)$.</p></div></div>
`},

/* ============================================================ */
{ id: "cuadraticas", title: "Formas cuadráticas, cónicas, cuádricas y mínimos cuadrados",
  desc: "Clasificar formas, reducir cónicas y cuádricas y ajustar rectas por mínimos cuadrados.",
  html: String.raw`
<h2>Forma cuadrática y su matriz</h2>
<p>$q(X)=X^tAX$ con $A$ <strong>simétrica</strong>. Los términos cruzados se reparten a medias: en $3x^2+11y^2-6xy$, el $-6xy$ pone un $-3$ en las posiciones $(1,2)$ y $(2,1)$.</p>

<h2>Clasificación</h2>
<table>
<tr><th>Tipo</th><th>Por valores propios</th><th>Por menores (Sylvester)</th></tr>
<tr><td>Definida positiva</td><td>todos $\gt0$</td><td>$\Delta_1\gt0,\Delta_2\gt0,\Delta_3\gt0$</td></tr>
<tr><td>Definida negativa</td><td>todos $\lt0$</td><td>signos alternos: $\Delta_1\lt0,\Delta_2\gt0,\Delta_3\lt0$</td></tr>
<tr><td>Semidefinida</td><td>$\ge0$ (o $\le0$) con algún 0</td><td>—</td></tr>
<tr><td>Indefinida (no definida)</td><td>de signos distintos</td><td>—</td></tr>
</table>
<p>$\Delta_k$ son los menores principales "de la esquina": $1\times1$, $2\times2$, $3\times3$.</p>
<div class="tip"><span class="label">Signatura</span><p>(n.º de VAP positivos, n.º de negativos). Es lo que se conserva al cambiar de base (ley de inercia de Sylvester).</p></div>

<div class="mc"><p>$q(x,y,z)=3x^2+11y^2+3z^2-6xy+2xz+6yz$ es…</p>
<ul><li data-ok>definida positiva</li><li>definida negativa</li><li>indefinida</li><li>semidefinida positiva</li></ul>
<div class="why"><p>$A=\begin{pmatrix}3 & -3 & 1\\ -3 & 11 & 3\\ 1 & 3 & 3\end{pmatrix}$: $\Delta_1=3$, $\Delta_2=33-9=24$, $\Delta_3=16$. Todos positivos.</p></div></div>
<div class="mc"><p>$q(x,y,z)=2xy+2xz+2yz$ es…</p>
<ul><li data-ok>indefinida</li><li>definida positiva</li><li>semidefinida</li><li>definida negativa</li></ul>
<div class="why"><p>$\Delta_1=0$, así que Sylvester no decide. VAP de $\begin{pmatrix}0 & 1 & 1\\ 1 & 0 & 1\\ 1 & 1 & 0\end{pmatrix}$: $2,-1,-1$. Signos distintos. (Más rápido: $q(1,1,0)=2\gt0$ y $q(1,-1,0)=-2\lt0$.)</p></div></div>
<div class="tf" data-a="v"><p>$q=-x^2-y^2-z^2+2xz$ es semidefinida negativa.</p>
<div class="why"><p>$q=-(x-z)^2-y^2\le0$ y vale 0 en $(1,0,1)\ne0$. VAP: $0,-1,-2$.</p></div></div>

<h2>Cónicas</h2>
<div class="key"><span class="label">Reducir una cónica en 3 pasos</span><ol>
<li>Parte cuadrática: matriz $2\times2$, VAP $\lambda_1,\lambda_2$ y VEP ortonormales (giran los ejes y eliminan el $xy$).</li>
<li>Completa cuadrados para quitar los términos lineales (traslada el centro).</li>
<li>Lee la ecuación reducida: mismo signo → elipse; signos opuestos → hipérbola; un VAP nulo → parábola.</li></ol></div>
<div class="steps"><p>Reduce $5x^2+4xy+8y^2=36$.</p>
<div class="step">$A=\begin{pmatrix}5 & 2\\ 2 & 8\end{pmatrix}$, $\lambda^2-13\lambda+36=0 \Rightarrow \lambda=4,9$.</div>
<div class="step">VEP: para 4, $(-2,1)$; para 9, $(1,2)$. Ejes en esas direcciones.</div>
<div class="step">En los nuevos ejes: $4x'^2+9y'^2=36 \Rightarrow \frac{x'^2}{9}+\frac{y'^2}4=1$. Elipse de semiejes 3 y 2.</div></div>

<h2>Cuádricas (resumen)</h2>
<table>
<tr><th>Ecuación reducida</th><th>Nombre</th></tr>
<tr><td>$\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$</td><td>Elipsoide</td></tr>
<tr><td>$\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$</td><td>Hiperboloide de una hoja</td></tr>
<tr><td>$\frac{x^2}{a^2}-\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$</td><td>Hiperboloide de dos hojas</td></tr>
<tr><td>$\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0$</td><td>Cono</td></tr>
<tr><td>$z=\frac{x^2}{a^2}+\frac{y^2}{b^2}$</td><td>Paraboloide elíptico</td></tr>
<tr><td>$z=\frac{x^2}{a^2}-\frac{y^2}{b^2}$</td><td>Paraboloide hiperbólico ("silla")</td></tr>
<tr><td>Falta una variable</td><td>Cilindro (elíptico, hiperbólico o parabólico)</td></tr>
</table>
<div class="tf" data-a="v"><p>$x^2+y^2-z^2=1$ es un hiperboloide de una hoja.</p>
<div class="why"><p>Dos signos $+$ y uno $-$ con término independiente positivo: una hoja (un tubo con cintura). Con dos $-$ serían dos hojas.</p></div></div>

<h2>Anexo: mínimos cuadrados</h2>
<p>Si $AX=b$ es incompatible (más ecuaciones que incógnitas, datos con ruido), la "mejor" solución resuelve las <strong>ecuaciones normales</strong>:</p>
<div class="formula">$$A^tA\,X=A^t\,b$$</div>
<p>Geométricamente, $AX$ es la proyección ortogonal de $b$ sobre el espacio generado por las columnas de $A$.</p>
<div class="prob"><div class="enun"><p>Ajusta la recta $y=a+bx$ a los puntos $(0,1),(1,2),(2,2),(3,4)$.</p></div>
<div class="hint"><p>$A$ tiene una columna de unos y otra con las $x$; $b=(1,2,2,4)$.</p></div>
<div class="sol"><p>$A^tA=\begin{pmatrix}4 & 6\\ 6 & 14\end{pmatrix}$, $A^tb=\begin{pmatrix}9\\ 19\end{pmatrix}$.</p>
<p>Resolviendo: $a=\frac9{10}$, $b=\frac9{10}$. Recta: $y=0{,}9+0{,}9x$.</p></div></div>
<div class="num" data-a="0.9" data-show="0,9"><p>En el ajuste anterior, ¿cuál es la pendiente $b$?</p>
<div class="why"><p>De las ecuaciones normales: $4a+6b=9$ y $6a+14b=19$. Restando $1{,}5$ veces la primera a la segunda: $5b=4{,}5 \Rightarrow b=0{,}9$.</p></div></div>
`}
  ]
});
