THEORY.algebra = {

/* ================================================================== */
matrices: String.raw`
<h2>1. Matrices: definiciones y tipos</h2>
<div class="def"><span class="label">Matriz</span><p>Una matriz $m\times n$ es una tabla de números con $m$ filas y $n$ columnas: $A=(a_{ij})$, donde $a_{ij}$ está en la fila $i$ y la columna $j$. Escribimos $A_i$ para la fila $i$ y $A^j$ para la columna $j$ (notación de las transparencias).</p></div>
<table>
<tr><th>Tipo</th><th>Definición</th></tr>
<tr><td>Fila / columna</td><td>$1\times n$ / $m\times1$</td></tr>
<tr><td>Cuadrada de orden $n$</td><td>$n\times n$. Diagonal principal: $a_{11},\dots,a_{nn}$. Traza: su suma.</td></tr>
<tr><td>Nula $0$</td><td>todos los elementos son 0</td></tr>
<tr><td>Diagonal</td><td>cuadrada con ceros fuera de la diagonal</td></tr>
<tr><td>Identidad $I$</td><td>diagonal con unos</td></tr>
<tr><td>Triangular superior / inferior</td><td>ceros por debajo / por encima de la diagonal</td></tr>
<tr><td>Escalonada</td><td>cada fila empieza (primer elemento no nulo, el <em>pivote</em>) más a la derecha que la anterior, y las filas nulas van al final</td></tr>
</table>

<h2>2. Operaciones y sus propiedades</h2>
<h3>Suma y producto por escalares</h3>
<p>Elemento a elemento, entre matrices del mismo tamaño. Propiedades (teoremas 1.7 y 1.12): asociativa, conmutativa, elemento neutro $0$, opuesto $-A$; $\alpha(A+B)=\alpha A+\alpha B$, $(\alpha+\beta)A=\alpha A+\beta A$, $(\alpha\beta)A=\alpha(\beta A)$, $1A=A$.</p>
<h3>Producto de matrices</h3>
<div class="formula">$$A_{m\times n}\cdot B_{n\times p}=C_{m\times p},\qquad c_{ij}=\sum_{k=1}^na_{ik}b_{kj}=A_i\cdot B^j$$</div>
<div class="thm"><span class="label">Propiedades (teorema 1.17)</span><ul>
<li>Asociativa: $A(BC)=(AB)C$.</li>
<li>Neutro: $IA=A=AI$.</li>
<li>Distributiva: $A(B+C)=AB+AC$ y $(B+C)A=BA+CA$.</li>
<li>$(\alpha A)B=\alpha(AB)=A(\alpha B)$.</li></ul></div>
<div class="warn"><span class="label">Lo que NO cumple</span><ul>
<li>No es conmutativo: $AB\ne BA$ en general (a veces ni siquiera están definidos los dos).</li>
<li>Puede ser $AB=0$ con $A\ne0$ y $B\ne0$ (divisores de cero).</li>
<li>De $AB=AC$ no se deduce $B=C$, salvo que $A$ sea invertible.</li>
<li>Por tanto $(A+B)^2\ne A^2+2AB+B^2$ y $(A+B)(A-B)\ne A^2-B^2$ en general.</li></ul></div>
<p>Una forma útil de pensar el producto: <strong>las columnas de $AB$ son combinaciones lineales de las columnas de $A$</strong>, con los coeficientes que da cada columna de $B$. Del mismo modo, las filas de $AB$ son combinaciones de las filas de $B$.</p>
<h3>Potencias</h3>
<p>$A^n=A\cdots A$. Para calcular $A^n$ en general: calcula $A^2$, $A^3$, intuye el patrón y demuéstralo por inducción (ejercicio 2 de la colección), o diagonaliza ($A^n=SD^nS^{-1}$).</p>
<h3>Traspuesta</h3>
<p>$(A^t)_{ij}=a_{ji}$: las filas pasan a ser columnas. Propiedades (teorema 1.22): $(A^t)^t=A$, $(A+B)^t=A^t+B^t$, $(\alpha A)^t=\alpha A^t$, $(AB)^t=B^tA^t$.</p>
<h3>Simétricas y antisimétricas</h3>
<ul><li>Simétrica: $A^t=A$. Suma y múltiplos de simétricas son simétricas (pero no el producto).</li>
<li>Antisimétrica: $A^t=-A$; tiene la diagonal nula.</li>
<li>Toda cuadrada se escribe como simétrica + antisimétrica: $A=\frac{A+A^t}2+\frac{A-A^t}2$.</li>
<li>$AA^t$ y $A^tA$ son siempre simétricas.</li></ul>

<h2>3. Determinantes</h2>
<div class="def"><span class="label">Determinante</span><p>Número asociado a una matriz cuadrada. Geométricamente, el valor absoluto de $\det(A^1,\dots,A^n)$ es el volumen del paralelepípedo que forman sus columnas, y su signo indica la orientación.</p></div>
<h3>Cálculo</h3>
<ul><li>Orden 2: $ad-bc$.</li>
<li>Orden 3: regla de Sarrus (tres productos "diagonales" positivos menos tres negativos).</li>
<li>Cualquier orden: desarrollo de <strong>Laplace</strong> por una fila o columna (teorema 1.48): $\det A=\sum_ja_{ij}\,\hat a_{ij}$, donde $\hat a_{ij}=(-1)^{i+j}\det(A\text{ sin fila }i\text{ ni columna }j)$ es el <strong>adjunto</strong>.</li>
<li>Triangular: producto de la diagonal. Por eso un buen método es escalonar (Gauss) y multiplicar los pivotes, llevando la cuenta de los cambios de signo.</li></ul>
<div class="num" data-a="-9"><p>Calcula $\begin{vmatrix}2 & 1 & 3\\ 0 & -1 & 4\\ 1 & 2 & 0\end{vmatrix}$.</p>
<div class="why"><p>Por la primera columna: $2\begin{vmatrix}-1 & 4\\ 2 & 0\end{vmatrix}-0+1\begin{vmatrix}1 & 3\\ -1 & 4\end{vmatrix}=2(-8)+1(4+3)=-16+7=-9$.</p></div></div>
<h3>Propiedades</h3>
<div class="thm"><span class="label">Alternancia y multilinealidad (teorema 1.38)</span><ul>
<li>Si dos columnas (o filas) son iguales, $\det=0$. Intercambiarlas cambia el signo.</li>
<li>Es lineal en cada columna: $\det(\dots,B+C,\dots)=\det(\dots,B,\dots)+\det(\dots,C,\dots)$ y $\det(\dots,\alpha A^i,\dots)=\alpha\det(\dots)$.</li>
<li>Consecuencia: sumar a una columna un múltiplo de otra no cambia el determinante.</li></ul></div>
<div class="thm"><span class="label">Teorema 1.40</span><p>$\det(\alpha A)=\alpha^n\det A$; $\det(AB)=\det A\det B$; $\det A^t=\det A$. El determinante de una suma, en cambio, no es la suma de determinantes.</p></div>
<h3>Matrices directas e inversas</h3>
<p>Una cuadrada es <strong>directa</strong> si $\det\gt0$ e <strong>inversa</strong> si $\det\lt0$ (teorema 1.52). Si $\alpha\lt0$, $\alpha A$ conserva el tipo si $n$ es par y lo cambia si $n$ es impar (por el $\alpha^n$).</p>
<h3>Matrices ortogonales</h3>
<div class="def"><span class="label">Definición</span><p>$A$ es ortogonal si sus columnas son <strong>ortonormales</strong>: módulo 1 y perpendiculares dos a dos. Equivale a $A^tA=I$.</p></div>
<div class="thm"><span class="label">Teoremas 1.56, 1.58 y 1.148</span><ul>
<li>Si $A$ es cuadrada: ortogonal $\iff AA^t=I\iff A^{-1}=A^t$ (entonces también las filas son ortonormales).</li>
<li>El producto de ortogonales es ortogonal; la traspuesta de una ortogonal cuadrada también.</li>
<li>$\det A=\pm1$. (La suma de ortogonales no tiene por qué serlo.)</li></ul></div>
<div class="demo"><p>$1=\det I=\det(A^tA)=\det A^t\det A=(\det A)^2$.</p></div>
<div class="tf" data-a="f"><p>Toda matriz con determinante 1 es ortogonal.</p>
<div class="why"><p>Por ejemplo $\begin{pmatrix}2 & 0\\ 0 & \frac12\end{pmatrix}$ tiene determinante 1 y sus columnas no tienen módulo 1. Ser ortogonal implica $\det=\pm1$, no al revés.</p></div></div>

<h2>4. Matriz inversa</h2>
<div class="def"><span class="label">Inversa</span><p>$A^{-1}$ es la matriz que cumple $AA^{-1}=A^{-1}A=I$. Si existe, $A$ es <strong>regular</strong> (invertible); si no, <strong>singular</strong>.</p></div>
<div class="thm"><span class="label">Caracterizaciones (teoremas 1.103 y 1.127)</span><p>Para $A$ cuadrada de orden $n$ son equivalentes: $A$ invertible; $\det A\ne0$; $\text{rg}A=n$; $AX=0$ solo tiene la solución nula; $A$ es simplificable ($AB=AC\Rightarrow B=C$); $A$ no es divisora de cero.</p></div>
<div class="thm"><span class="label">Propiedades</span><p>$(A^{-1})^{-1}=A$; $(\alpha A)^{-1}=\frac1\alpha A^{-1}$; $(AB)^{-1}=B^{-1}A^{-1}$ (se gira el orden); $(A^t)^{-1}=(A^{-1})^t$; $\det A^{-1}=\frac1{\det A}$.</p></div>
<h3>Método de Gauss-Jordan</h3>
<ol><li>Forma la matriz ampliada $(A\,|\,I)$.</li>
<li>Con operaciones elementales <strong>de fila</strong> (intercambiar, multiplicar por $\ne0$, sumar un múltiplo de otra fila) consigue la identidad a la izquierda.</li>
<li>Lo que queda a la derecha es $A^{-1}$. Si aparece una fila nula a la izquierda, $A$ no es invertible.</li></ol>
<div class="steps"><p>Inversa de $A=\begin{pmatrix}1 & 0 & 1\\ -1 & 1 & 1\\ 0 & 1 & 0\end{pmatrix}$ (ej. 24).</p>
<div class="step">$(A|I)$ y $F_2+F_1$: fila 2 pasa a $(0,1,2\,|\,1,1,0)$.</div>
<div class="step">$F_3-F_2$: $(0,0,-2\,|\,-1,-1,1)$. Dividimos entre $-2$: $(0,0,1\,|\,\frac12,\frac12,-\frac12)$.</div>
<div class="step">$F_2-2F_3$: $(0,1,0\,|\,0,0,1)$. $F_1-F_3$: $(1,0,0\,|\,\frac12,-\frac12,\frac12)$.</div>
<div class="step">$A^{-1}=\begin{pmatrix}\frac12 & -\frac12 & \frac12\\ 0 & 0 & 1\\ \frac12 & \frac12 & -\frac12\end{pmatrix}$.</div></div>
<h3>Método de la adjunta</h3>
<div class="thm"><span class="label">Teoremas 1.142 y 1.146</span><p>$A\,\hat A^t=\hat A^t A=(\det A)\,I$, donde $\hat A$ es la matriz de adjuntos. Por tanto $A^{-1}=\frac1{\det A}\hat A^t$.</p></div>
<p>Para orden 2 queda una regla rápida: $\begin{pmatrix}a & b\\ c & d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$.</p>
<p>Propiedades de la adjunta (teorema 1.137): $\det\hat A=(\det A)^{n-1}$, $\widehat{\alpha A}=\alpha^{n-1}\hat A$, $\widehat{AB}=\hat A\hat B$.</p>

<h2>5. Ecuaciones matriciales</h2>
<ul><li>$AX=B$ con $A$ invertible: $X=A^{-1}B$. En general (teorema 1.120) tiene solución si y solo si $\text{rg}(A|B)=\text{rg}A$, y se resuelve con Gauss-Jordan sobre $(A|B)$, columna por columna.</li>
<li>$XA=B$: trasponiendo, $A^tX^t=B^t$ (teorema 1.123). Si $A$ es invertible, $X=BA^{-1}$.</li>
<li>Expresiones más largas: agrupa la incógnita como factor común <strong>respetando el lado</strong>: $AX+X=B\Rightarrow(A+I)X=B$ (no $X(A+1)$).</li>
<li>Si hay determinantes, toma determinantes en los dos lados y usa las propiedades.</li></ul>
<div class="steps"><p>Despeja $X$ en $AX-2X=B$.</p>
<div class="step">$AX-2X=(A-2I)X$. ¡Cuidado: $2X=2IX$, por eso aparece $I$!</div>
<div class="step">Si $A-2I$ es invertible: $X=(A-2I)^{-1}B$.</div>
<div class="step">Si no lo es, resuelve el sistema con Gauss sobre $(A-2I\,|\,B)$.</div></div>
`,

/* ================================================================== */
"rango-sistemas": String.raw`
<h2>1. Dependencia lineal de filas y columnas</h2>
<div class="def"><span class="label">Combinación lineal e independencia</span><p>Una fila $F$ es combinación lineal de $F_1,\dots,F_k$ si $F=\alpha_1F_1+\dots+\alpha_kF_k$. Las filas son <strong>linealmente independientes</strong> si la única combinación que da la fila nula es la de todos los coeficientes 0; equivalentemente, si ninguna es nula ni combinación de las otras (teorema 1.67).</p></div>

<h2>2. Rango</h2>
<div class="def"><span class="label">Rango</span><p>$\text{rg}A$ = número máximo de filas linealmente independientes = número máximo de columnas linealmente independientes = orden del mayor menor no nulo.</p></div>
<div class="thm"><span class="label">Propiedades (teorema 1.72)</span><p>$\text{rg}(\alpha A)=\text{rg}A$ si $\alpha\ne0$; $\text{rg}(AB)\le\min\{\text{rg}A,\text{rg}B\}$; $\text{rg}A^t=\text{rg}A$; $\text{rg}A\le\min\{m,n\}$. El rango de una suma no tiene relación directa con los rangos.</p></div>
<div class="thm"><span class="label">Teorema 1.74 (el que más se usa después)</span><ul>
<li>Las columnas $A^{j_1},\dots,A^{j_k}$ son independientes $\iff\text{rg}(A^{j_1}\cdots A^{j_k})=k$.</li>
<li>$A^{j_0}$ es combinación lineal de ellas $\iff$ añadirla no aumenta el rango.</li></ul></div>
<h3>Método de Gauss (escalonamiento)</h3>
<p>Las operaciones elementales de fila no cambian el rango. Escalona y cuenta las filas no nulas.</p>
<div class="num" data-a="2"><p>Rango de $\begin{pmatrix}1 & 2 & 0 & 1\\ 2 & 4 & 1 & 3\\ 3 & 6 & 1 & 4\end{pmatrix}$.</p>
<div class="why"><p>$F_2-2F_1=(0,0,1,1)$, $F_3-3F_1=(0,0,1,1)$, y después $F_3-F_2=0$. Quedan dos filas no nulas: rango 2. (La fila 3 es la suma de las dos primeras.)</p></div></div>
<h3>Método de los menores orlados</h3>
<ol><li>Toma un menor no nulo de orden $k$ (empieza con un elemento no nulo, $k=1$).</li>
<li>Calcula sus orlados: los menores de orden $k+1$ que lo contienen (añadiendo una fila y una columna).</li>
<li>Si todos son 0, $\text{rg}=k$. Si alguno no es 0, pasa a ese menor y repite.</li></ol>
<p>Es el más cómodo cuando hay <strong>parámetros</strong>, porque el resultado se expresa con determinantes en función del parámetro.</p>

<h2>3. Sistemas de ecuaciones lineales</h2>
<p>$AX=B$ con $A$ la matriz de coeficientes ($m\times n$), $X$ las incógnitas y $B$ los términos independientes. $(A|B)$ es la matriz <strong>ampliada</strong>.</p>
<div class="thm"><span class="label">Teorema de Rouché-Frobenius (1.89)</span><ul>
<li>Compatible (tiene solución) $\iff\text{rg}(A|B)=\text{rg}A$.</li>
<li>Compatible determinado (solución única) $\iff\text{rg}(A|B)=\text{rg}A=n$.</li>
<li>Compatible indeterminado $\iff\text{rg}(A|B)=\text{rg}A=r\lt n$; las soluciones dependen de $n-r$ parámetros.</li></ul></div>
<div class="demo"><p>$AX=x_1A^1+\dots+x_nA^n$. Resolver el sistema es buscar cómo escribir $B$ como combinación lineal de las columnas de $A$, y eso es posible si y solo si añadir $B$ no aumenta el rango (teorema 1.74).</p></div>
<h3>Resolución por Gauss</h3>
<ol><li>Escalona la ampliada.</li>
<li>Si aparece una fila $(0\cdots0\,|\,c)$ con $c\ne0$: incompatible.</li>
<li>Si no, las incógnitas que no tienen pivote son <strong>libres</strong> (parámetros); despeja las demás de abajo arriba.</li></ol>
<div class="steps"><p>Resuelve $x+y+z=2$, $2x+3y+z=5$.</p>
<div class="step">$F_2-2F_1$: $y-z=1$. Rango 2, 3 incógnitas: 1 parámetro.</div>
<div class="step">$z=\lambda$ libre; $y=1+\lambda$; $x=2-y-z=1-2\lambda$.</div>
<div class="step">Solución: $(x,y,z)=(1,1,0)+\lambda(-2,1,1)$. Es una recta: punto más vector director.</div></div>
<h3>Sistemas homogéneos</h3>
<p>$AX=0$ siempre es compatible (solución trivial). Tiene soluciones no triviales $\iff\text{rg}A\lt n$; para $A$ cuadrada, $\iff\det A=0$. Sus soluciones forman un <strong>subespacio vectorial</strong>, y las de $AX=B$ son "una solución particular + las del homogéneo".</p>
<h3>Regla de Cramer (teorema 1.110)</h3>
<p>Si $A$ es cuadrada con $\det A\ne0$ (sistema de Cramer): $x_i=\frac{\det(A^1\cdots B\cdots A^n)}{\det A}$, con $B$ en la columna $i$.</p>

<h2>4. Discusión con parámetros: método general</h2>
<ol><li>Matriz cuadrada: $\det A=0$ da los valores críticos. Si no es cuadrada, usa menores orlados o escalona con cuidado (no dividas por expresiones que puedan valer 0).</li>
<li>Valores no críticos: compatible determinado.</li>
<li>Cada valor crítico se estudia sustituyéndolo: rangos de $A$ y de $(A|B)$.</li>
<li>Si te piden la solución en los casos compatibles, resuélvelos (Cramer en el caso general, Gauss en los particulares).</li></ol>
<div class="tf" data-a="f"><p>Si $\det A=0$, el sistema $AX=B$ (cuadrado) es incompatible.</p>
<div class="why"><p>Puede ser incompatible o compatible indeterminado: depende de si $B$ aumenta el rango. $\det A=0$ solo descarta que sea determinado.</p></div></div>

<h2>5. Eliminación de parámetros (paso previo a las ecuaciones implícitas)</h2>
<p>Dado $X=P+\lambda_1V_1+\dots+\lambda_kV_k$ (todas las combinaciones), se obtienen ecuaciones sin parámetros exigiendo $\text{rg}(V_1\cdots V_k\,|\,X-P)=\text{rg}(V_1\cdots V_k)$ (teorema 1.85). En la práctica: escalona $(V\,|\,X-P)$ y las filas que se anulan en la parte izquierda dan las ecuaciones.</p>
`,

/* ================================================================== */
espacios: String.raw`
<h2>1. El espacio vectorial $\mathbb R^n$</h2>
<p>Los vectores de $\mathbb R^n$ son listas $\vec x=(x_1,\dots,x_n)$. Se suman y se multiplican por escalares componente a componente, con las propiedades de siempre (teoremas 2.3 y 2.4).</p>
<div class="def"><span class="label">Conceptos básicos</span><ul>
<li><strong>Combinación lineal</strong> de $\vec v_1,\dots,\vec v_k$: $\alpha_1\vec v_1+\dots+\alpha_k\vec v_k$.</li>
<li><strong>Subespacio generado</strong> $\langle\vec v_1,\dots,\vec v_k\rangle$: todas sus combinaciones lineales.</li>
<li>Sistema <strong>linealmente independiente</strong>: ningún vector es combinación de los otros.</li>
<li><strong>Sistema de generadores</strong> de $V$: su subespacio generado es $V$.</li>
<li><strong>Base</strong>: sistema de generadores linealmente independiente. <strong>Dimensión</strong>: número de vectores de una base (todas tienen los mismos, teorema 2.10).</li></ul></div>

<h2>2. Subespacios vectoriales</h2>
<div class="def"><span class="label">Subespacio</span><p>Subconjunto $V\subset\mathbb R^n$ cerrado por sumas y productos por escalares. Siempre contiene $\vec0$. Los subespacios son exactamente los conjuntos de combinaciones lineales de algún sistema (teorema 2.9).</p></div>
<table>
<tr><th>Dimensión en $\mathbb R^3$</th><th>Subespacio</th></tr>
<tr><td>0</td><td>$\{\vec0\}$</td></tr>
<tr><td>1</td><td>recta por el origen</td></tr>
<tr><td>2</td><td>plano por el origen</td></tr>
<tr><td>3</td><td>todo $\mathbb R^3$</td></tr>
</table>
<div class="tf" data-a="f"><p>$\{(x,y): x+y=1\}$ es un subespacio vectorial de $\mathbb R^2$.</p>
<div class="why"><p>No contiene el $\vec0$ (porque $0+0\ne1$). Es una recta que no pasa por el origen: una variedad <em>afín</em>, no un subespacio.</p></div></div>
<h3>Ecuaciones de un subespacio</h3>
<ul>
<li><strong>Vectorial / paramétricas</strong>: $\vec x=\alpha_1\vec v_1+\dots+\alpha_k\vec v_k$, escrita componente a componente.</li>
<li><strong>Implícitas</strong>: sistema homogéneo $AX=0$ cuyas soluciones son $V$. Si son independientes (minimales), hay exactamente $n-\dim V$.</li></ul>
<div class="key"><span class="label">Pasar de una forma a otra</span>
<ul><li>Paramétricas → implícitas: exige $\text{rg}(\vec v_1\cdots\vec v_k\,|\,\vec x)=\text{rg}(\vec v_1\cdots\vec v_k)$. Con un menor orlado no nulo de los generadores, los orlados que incluyen la columna $\vec x$ igualados a 0 son las ecuaciones.</li>
<li>Implícitas → paramétricas: resuelve el sistema homogéneo. Los vectores que multiplican a los parámetros forman una base.</li></ul></div>
<h3>Extraer una base de un sistema de generadores</h3>
<p>Escribe los vectores como columnas, escalona y quédate con los vectores de las columnas que tienen pivote. Para <strong>completar</strong> una base de $V$ hasta una de $\mathbb R^n$, añade vectores canónicos que hagan subir el rango.</p>

<h2>3. Componentes y cambio de base</h2>
<div class="def"><span class="label">Componentes</span><p>Si $B'=\{\vec e'_1,\dots,\vec e'_n\}$ es base, todo $\vec x$ se escribe de forma única como $\vec x=x'_1\vec e'_1+\dots+x'_n\vec e'_n$; los $x'_i$ son sus componentes en $B'$: $\vec x=(x'_1,\dots,x'_n)_{B'}$.</p></div>
<div class="thm"><span class="label">Fórmula del cambio de base (teorema 2.24)</span><p>Si $C$ es la matriz cuyas columnas son los vectores de $B'$ escritos en la base $B$, entonces $X=CX'$ (y $X'=C^{-1}X$). $C$ se llama matriz del cambio de base de $B'$ a $B$.</p></div>
<div class="warn"><span class="label">El sentido del cambio</span><p>$C$ convierte componentes "nuevas" en "antiguas". Para pasar de antiguas a nuevas hace falta $C^{-1}$, o resolver el sistema $CX'=X$.</p></div>
<p>En la base nueva, las operaciones se hacen igual: las componentes de la suma son la suma de componentes (teorema 2.17).</p>

<h2>4. Operaciones con subespacios</h2>
<ul>
<li><strong>Intersección</strong> $V\cap W$: une las ecuaciones implícitas. Siempre es subespacio.</li>
<li><strong>Suma</strong> $V+W=\{\vec v+\vec w\}$: une los generadores. (La unión $V\cup W$ en general no es subespacio.)</li>
<li><strong>Grassmann</strong>: $\dim(V+W)=\dim V+\dim W-\dim(V\cap W)$.</li>
<li><strong>Suma directa</strong> $V\oplus W$: si $V\cap W=\{\vec0\}$. Entonces cada vector de la suma se descompone de forma única.</li></ul>
<div class="num" data-a="3"><p>$V$ es un plano y $W$ una recta de $\mathbb R^4$ con $V\cap W=\{\vec0\}$. ¿Cuánto vale $\dim(V+W)$?</p>
<div class="why"><p>Grassmann: $\dim(V+W)=2+1-0=3$. Es una suma directa, $V\oplus W$.</p></div></div>

<h2>5. El espacio afín: puntos y variedades lineales</h2>
<p>Además de vectores, trabajamos con <strong>puntos</strong>. Un punto $p$ más un vector $\vec v$ da otro punto $p+\vec v$; dos puntos determinan el vector $\vec{pq}=q-p$.</p>
<div class="def"><span class="label">Variedad lineal (afín)</span><p>$V=p+\vec V=\{p+\vec v:\vec v\in\vec V\}$: un punto de paso $p$ y un subespacio director $\vec V$. Su dimensión es $\dim\vec V$: puntos (0), rectas (1), planos (2), hiperplanos ($n-1$).</p></div>
<div class="thm"><span class="label">Teorema 2.38</span><p>$x\in V\iff\vec{px}\in\vec V$. Por eso las ecuaciones implícitas de $V$ son las de $\vec V$ aplicadas a $X-P$: quedan $A(X-P)=0$, es decir $AX=AP$, un sistema <strong>no homogéneo</strong>.</p></div>
<h3>Referencias y coordenadas</h3>
<p>Una referencia $R'=\{O';B'\}$ es un punto origen más una base. Las coordenadas de $x$ en $R'$ son las componentes de $\vec{O'x}$ en $B'$. Fórmula del cambio de referencia (teorema 2.52): $X=M+CX'$, con $M$ las coordenadas de $O'$ y $C$ la matriz de $B'$.</p>
<h3>Posiciones relativas</h3>
<div class="thm"><span class="label">Clasificación</span><ul>
<li><strong>Secantes</strong>: se cortan (el sistema de las dos variedades es compatible).</li>
<li><strong>Paralelas</strong>: una dirección está contenida en la otra ($\vec V\subset\vec W$ o al revés).</li>
<li><strong>Se cruzan</strong>: ni se cortan ni son paralelas.</li></ul>
<p>Para decidirlo: rango de las direcciones juntas y rango del sistema completo (o, con implícitas, $\text{rg}A$ y $\text{rg}(A|B)$ del sistema que forman todas las ecuaciones).</p></div>
<div class="steps"><p>Posición de $r:(1,0,0)+\lambda(1,1,0)$ y $s:(0,0,1)+\mu(0,1,1)$.</p>
<div class="step">Direcciones $(1,1,0)$ y $(0,1,1)$: no proporcionales, así que no son paralelas.</div>
<div class="step">¿Se cortan? $(1+\lambda,\lambda,0)=(0,\mu,1+\mu)$: de la 1.ª, $\lambda=-1$; de la 3.ª, $\mu=-1$; la 2.ª da $-1=-1$ ✔.</div>
<div class="step">Se cortan en $(0,-1,0)$.</div></div>
`,

/* ================================================================== */
euclideo: String.raw`
<h2>1. Producto escalar y sus propiedades</h2>
<div class="def"><span class="label">Producto escalar ordinario</span><p>$\vec x\cdot\vec y=x_1y_1+\dots+x_ny_n=X^tY$ (en base ortonormal).</p></div>
<div class="thm"><span class="label">Propiedades (teorema 2.61)</span><p>Bilineal, simétrico ($\vec x\cdot\vec y=\vec y\cdot\vec x$) y definido positivo ($\vec x\cdot\vec x\ge0$, con igualdad solo si $\vec x=\vec0$).</p></div>
<h3>Matriz de Gram</h3>
<p>Si los vectores están dados en una base cualquiera, el producto escalar se calcula con la matriz de Gram $G$ de la base ($G_{ij}=\vec e_i\cdot\vec e_j$): $\vec x\cdot\vec y=X^tGY$. Para un sistema $\vec v$ con matriz $C$ (en base ortonormal), $G_{\vec v}=C^tC$ (teorema 2.70).</p>

<h2>2. Norma, distancia y ángulo</h2>
<div class="formula">$$\|\vec x\|=\sqrt{\vec x\cdot\vec x}\qquad \cos\widehat{(\vec x,\vec y)}=\frac{\vec x\cdot\vec y}{\|\vec x\|\,\|\vec y\|}\qquad d(x,y)=\|\vec{xy}\|$$</div>
<div class="thm"><span class="label">Desigualdades</span><ul>
<li>Cauchy-Schwarz: $|\vec x\cdot\vec y|\le\|\vec x\|\,\|\vec y\|$ (garantiza que el coseno está entre $-1$ y $1$).</li>
<li>Minkowski (triangular): $\|\vec x+\vec y\|\le\|\vec x\|+\|\vec y\|$.</li>
<li>$\|\alpha\vec x\|=|\alpha|\|\vec x\|$.</li></ul></div>
<p>El ángulo entre subespacios o variedades se toma agudo (entre 0 y $\frac\pi2$), con valor absoluto en el coseno.</p>

<h2>3. Ortogonalidad</h2>
<div class="def"><span class="label">Definiciones</span><ul>
<li>$\vec x\perp\vec y$ si $\vec x\cdot\vec y=0$.</li>
<li>Sistema <strong>ortogonal</strong>: vectores no nulos perpendiculares dos a dos. <strong>Ortonormal</strong>: además de módulo 1.</li>
<li><strong>Complemento ortogonal</strong> $\vec V^\perp$: vectores perpendiculares a todos los de $\vec V$.</li></ul></div>
<div class="thm"><span class="label">Teorema 2.68</span><p>Todo sistema ortogonal es linealmente independiente. Normalizando un sistema ortogonal se obtiene uno ortonormal.</p></div>
<div class="thm"><span class="label">Ventaja de las bases ortonormales (teorema 2.70)</span><p>En una base ortonormal, las componentes de $\vec x$ se obtienen con productos escalares: $x_i=\vec x\cdot\vec e_i$. No hace falta resolver ningún sistema.</p></div>
<div class="thm"><span class="label">Complemento ortogonal (teoremas 2.80 y 2.82)</span><ul>
<li>Si $\vec V=\langle\vec v_1,\dots,\vec v_k\rangle$, entonces $\vec V^\perp:\ \vec v_1\cdot\vec x=0,\dots,\vec v_k\cdot\vec x=0$. ¡Los generadores de $\vec V$ son los coeficientes de las implícitas de $\vec V^\perp$!</li>
<li>$\dim\vec V+\dim\vec V^\perp=n$, $(\vec V^\perp)^\perp=\vec V$, y una base de $\vec V$ unida a una de $\vec V^\perp$ es base de $\mathbb R^n$.</li></ul></div>
<h3>Gram-Schmidt</h3>
<p>Convierte una base $\vec v_1,\dots,\vec v_k$ de $\vec V$ en una ortogonal: $\vec v^*_1=\vec v_1$ y cada $\vec v^*_i$ es $\vec v_i$ menos su proyección sobre los anteriores:</p>
<div class="formula">$$\vec v^*_i=\vec v_i-\sum_{j\lt i}\frac{\vec v_i\cdot\vec v^*_j}{\vec v^*_j\cdot\vec v^*_j}\,\vec v^*_j$$</div>

<h2>4. Proyección ortogonal y simetría</h2>
<div class="def"><span class="label">Proyección ortogonal</span><p>Todo $\vec x$ se descompone de forma única como $\vec x=\vec x_V+\vec x_{V^\perp}$ con $\vec x_V\in\vec V$ y $\vec x_{V^\perp}\in\vec V^\perp$. $P_{\vec V}(\vec x)=\vec x_V$ es la proyección; $S_{\vec V}(\vec x)=\vec x_V-\vec x_{V^\perp}=2P_{\vec V}(\vec x)-\vec x$ es la simetría.</p></div>
<div class="key"><span class="label">Cómo calcularla</span><ul>
<li>Con una base <strong>ortogonal</strong> $\{\vec w_j\}$ de $\vec V$: $P_{\vec V}(\vec x)=\sum_j\frac{\vec x\cdot\vec w_j}{\vec w_j\cdot\vec w_j}\vec w_j$.</li>
<li>Si $\vec V^\perp$ es más pequeño (por ejemplo, $\vec V$ es un plano de $\mathbb R^3$ con normal $\vec n$), proyecta sobre $\vec V^\perp$ y resta: $P_{\vec V}(\vec x)=\vec x-\frac{\vec x\cdot\vec n}{\vec n\cdot\vec n}\vec n$.</li>
<li>Con base cualquiera: $\vec x_V=\sum\alpha_j\vec v_j$, con los $\alpha_j$ obtenidos imponiendo $(\vec x-\vec x_V)\perp\vec v_j$ para todo $j$ (sistema con la matriz de Gram).</li></ul></div>
<div class="thm"><span class="label">Propiedad de mínima distancia (teorema 2.85)</span><p>$P_{\vec V}(\vec x)$ es el vector de $\vec V$ más cercano a $\vec x$. En esto se basan los mínimos cuadrados.</p></div>
<h3>Proyección de un punto sobre una variedad</h3>
<p>$P_V(x)=p+P_{\vec V}(\vec{px})$ (teorema 2.110). También es la intersección de $V$ con la variedad perpendicular a $V$ que pasa por $x$, y el punto medio entre $x$ y su simétrico (teorema 2.111).</p>

<h2>5. Distancias</h2>
<div class="thm"><span class="label">Distancia de un punto a una variedad (teorema 2.121)</span><p>$d(q,V)=\|\vec{q\,P_V(q)}\|=\|P_{\vec V^\perp}(\vec{pq})\|$: la longitud de la componente perpendicular.</p></div>
<div class="formula">$$d(q,H)=\frac{|A_1q_1+\dots+A_nq_n+A_0|}{\sqrt{A_1^2+\dots+A_n^2}}\quad(\text{hiperplano } H:\ A_1x_1+\dots+A_nx_n+A_0=0)$$</div>
<p>Entre dos variedades que no se cortan: distancia = distancia de un punto de una a la otra si son paralelas; si se cruzan, se proyecta $\vec{pq}$ sobre el complemento ortogonal de $\vec V+\vec W$. En $\mathbb R^3$ para dos rectas: $d=\frac{|[\vec{pq},\vec u,\vec v]|}{\|\vec u\times\vec v\|}$.</p>

<h2>6. Volumen y orientación</h2>
<div class="def"><span class="label">Volumen</span><p>$\mu(\vec v_1,\dots,\vec v_k)=\sqrt{\det G_{\vec v}}$ es el volumen $k$-dimensional del paralelepípedo (longitud si $k=1$, área si $k=2$). Si $k=n$, vale $|\det C|$. Es 0 si y solo si los vectores son dependientes (teorema 2.75).</p></div>
<p>Volúmenes de figuras: el triángulo es la mitad del paralelogramo; el tetraedro, la sexta parte del paralelepípedo. En general, el símplice $k$-dimensional es $\frac1{k!}$ del paralelepípedo.</p>
<div class="def"><span class="label">Orientación (definición 2.133)</span><p>Dos bases tienen la misma orientación si la matriz de cambio entre ellas es <strong>directa</strong> ($\det\gt0$). En $\mathbb R^3$, una base es positiva (como la canónica) si cumple la regla de la mano derecha.</p></div>
<h3>Producto vectorial</h3>
<p>Para $n-1$ vectores de $\mathbb R^n$ (dos en $\mathbb R^3$): el vector perpendicular a todos ellos, de módulo igual al volumen que forman, y orientado de forma que $\{\vec v_1,\dots,\vec v_{n-1},\vec v_1\wedge\dots\wedge\vec v_{n-1}\}$ sea positiva. En $\mathbb R^3$ se calcula con el determinante simbólico.</p>
<div class="mc"><p>¿Qué vector es $(1,-1,-1)\times(-5,8,4)$? (ejemplo 2.147)</p>
<ul><li data-ok>$(4,1,3)$</li><li>$(-4,-1,-3)$</li><li>$(4,-1,3)$</li><li>$(12,9,3)$</li></ul>
<div class="why"><p>$((-1)(4)-(-1)(8),\ (-1)(-5)-(1)(4),\ (1)(8)-(-1)(-5))=(-4+8,\ 5-4,\ 8-5)=(4,1,3)$.</p></div></div>

<h2>7. Rotaciones</h2>
<p>En $\mathbb R^2$, girar un ángulo $\gamma$ (en sentido positivo, antihorario): $R_\gamma(\vec x)=\begin{pmatrix}\cos\gamma & -\sin\gamma\\ \sin\gamma & \cos\gamma\end{pmatrix}X$.</p>
<p>En $\mathbb R^3$, girar alrededor de un eje de vector unitario $\vec u$ (fórmula de Rodrigues, versión del teorema 2.153):</p>
<div class="formula">$$R(\vec x)=P_{\langle\vec u\rangle}(\vec x)+\cos\gamma\,P_{\langle\vec u\rangle^\perp}(\vec x)+\sin\gamma\,(\vec u\times\vec x)$$</div>
<p>La componente sobre el eje no cambia; la perpendicular gira un ángulo $\gamma$ (el sentido lo fija la orientación del eje con la regla de la mano derecha).</p>
`,

/* ================================================================== */
lineales: String.raw`
<h2>1. Transformaciones lineales</h2>
<div class="def"><span class="label">Definición</span><p>$\vec f:\mathbb R^n\to\mathbb R^n$ es lineal si $\vec f(\vec x+\vec y)=\vec f(\vec x)+\vec f(\vec y)$ y $\vec f(\alpha\vec x)=\alpha\vec f(\vec x)$. Consecuencia: $\vec f(\vec0)=\vec0$, y conserva combinaciones lineales.</p></div>
<div class="thm"><span class="label">Determinación por una base (teorema 3.4)</span><p>Una transformación lineal queda completamente determinada por las imágenes de los vectores de una base: si sabes $\vec f(\vec e_1),\dots,\vec f(\vec e_n)$, sabes $\vec f$ de todo.</p></div>
<h3>Matriz asociada</h3>
<p>La matriz $A$ de $\vec f$ en la base $B$ tiene por columnas las componentes de $\vec f(\vec e_1),\dots,\vec f(\vec e_n)$ en $B$. Entonces $\bar X=AX$ (expresión matricial, teorema 3.7).</p>
<div class="key"><span class="label">Si te dan las imágenes de otra base</span><p>Si conoces $\vec f(\vec v_i)=\vec w_i$ para una base $\{\vec v_i\}$: con $V$ y $W$ las matrices de columnas, $AV=W$, así que $A=WV^{-1}$.</p></div>
<div class="thm"><span class="label">Cambio de base (teorema 3.10)</span><p>$A'=C^{-1}AC$, con $C$ la matriz de la base nueva. Matrices relacionadas así se llaman <strong>semejantes</strong>: tienen el mismo determinante, traza, rango y polinomio característico.</p></div>
<div class="num" data-a="7"><p>Si $A=\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$ y $C=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$, ¿cuál es el elemento $(2,2)$ de $A'=C^{-1}AC$?</p>
<div class="why"><p>$C^{-1}AC=\begin{pmatrix}-2 & -4\\ 3 & 7\end{pmatrix}$. Comprobación: la traza se conserva ($-2+7=5=1+4$).</p></div></div>

<h2>2. Núcleo, imagen, regularidad</h2>
<ul><li>$\ker\vec f=\{\vec x:\vec f(\vec x)=\vec0\}$: soluciones de $AX=0$.</li>
<li>$\text{Im}\vec f=\{\vec f(\vec x)\}=\langle A^1,\dots,A^n\rangle$: subespacio generado por las columnas.</li>
<li>$\dim\ker\vec f+\dim\text{Im}\vec f=n$ y $\dim\text{Im}\vec f=\text{rg}A$.</li>
<li>$\vec f$ es <strong>regular</strong> (biyectiva) $\iff$ transforma bases en bases $\iff A$ regular $\iff\ker\vec f=\{\vec0\}$ (teoremas 3.20 y 3.21).</li>
<li>$\vec f$ es <strong>directa</strong> (conserva la orientación) si $\det A\gt0$, <strong>inversa</strong> si $\det A\lt0$ (teoremas 3.26 y 3.27).</li></ul>

<h2>3. Valores y vectores propios</h2>
<div class="def"><span class="label">Definiciones</span><p>$\lambda$ es valor propio (VAP) de $\vec f$ si existe $\vec v\ne\vec0$ con $\vec f(\vec v)=\lambda\vec v$; $\vec v$ es un vector propio (VEP). El <strong>subespacio propio</strong> es $U_\lambda=\ker(\vec f-\lambda\vec I)$.</p></div>
<ul><li><strong>Polinomio característico</strong>: $p(x)=\det(A-xI)$. Los VAP son sus raíces reales. No depende de la base.</li>
<li><strong>Multiplicidad algebraica</strong> $m_\lambda$: multiplicidad como raíz de $p$. <strong>Geométrica</strong>: $\dim U_\lambda=n-\text{rg}(A-\lambda I)$. Siempre $1\le\dim U_\lambda\le m_\lambda$.</li>
<li>VEP de VAP distintos son linealmente independientes.</li>
<li>Suma de VAP (con multiplicidad, incluidos los complejos) = traza; producto = determinante. $\lambda=0$ es VAP $\iff A$ no es invertible.</li></ul>
<div class="mc"><p>Valores propios de $\begin{pmatrix}2 & 0 & 0\\ 0 & 3 & 4\\ 0 & 4 & -3\end{pmatrix}$:</p>
<ul><li data-ok>$2,\ 5,\ -5$</li><li>$2,\ 3,\ -3$</li><li>$2,\ 7,\ -1$</li><li>$2,\ 4,\ 4$</li></ul>
<div class="why"><p>Por bloques: el 2 sale directamente; el bloque $\begin{pmatrix}3 & 4\\ 4 & -3\end{pmatrix}$ tiene traza 0 y determinante $-25$, así que $\lambda^2=25$.</p></div></div>

<h2>4. Diagonalización</h2>
<div class="thm"><span class="label">Teorema 3.16</span><ol type="a">
<li>$\vec f$ es diagonalizable $\iff$ su polinomio característico tiene todas las raíces reales y $\dim U_\lambda=m_\lambda$ para cada VAP.</li>
<li>Si todos los VAP son simples (distintos), es diagonalizable.</li>
<li>Si $A$ es simétrica, es diagonalizable.</li></ol></div>
<p>En la base de VEP la matriz es diagonal: $D=C^{-1}AC$, con los VAP en la diagonal en el mismo orden que los VEP en las columnas de $C$. Utilidades: $A^n=CD^nC^{-1}$, interpretar geométricamente la transformación (estira $\lambda$ veces en la dirección de cada VEP).</p>
<div class="tf" data-a="v"><p>Una matriz $3\times3$ real con un VAP complejo no real no es diagonalizable en $\mathbb R$.</p>
<div class="why"><p>La condición (a) exige que todas las raíces sean reales. Ejemplo típico: un giro de $\mathbb R^3$ que no sea de 0° ni 180°.</p></div></div>

<h2>5. Transformaciones simétricas y diagonalización ortogonal</h2>
<div class="def"><span class="label">Simétrica</span><p>$\vec f$ es simétrica si $\vec f(\vec x)\cdot\vec y=\vec x\cdot\vec f(\vec y)$; equivale a que su matriz en base ortonormal sea simétrica (teorema 3.64).</p></div>
<div class="thm"><span class="label">Teorema espectral (3.65 y 3.69)</span><p>Son equivalentes: $\vec f$ simétrica; $\vec f$ diagonaliza en una base ortogonal; $\vec f$ diagonaliza en una base ortonormal. Además, VEP de VAP distintos son ortogonales.</p></div>
<div class="key"><span class="label">Receta</span><ol>
<li>VAP y bases de cada $U_\lambda$.</li>
<li>Los subespacios propios ya son perpendiculares entre sí. Dentro de cada uno con dimensión mayor que 1, aplica Gram-Schmidt.</li>
<li>Normaliza todo. $C$ (con esos vectores en columnas) es ortogonal y $D=C^tAC$.</li></ol></div>
<div class="tip"><span class="label">Atajo en dimensión 3</span><p>Si un VAP es doble y el otro simple, basta con el VEP $\vec u$ del simple: $U$ del doble es el plano $\vec u^\perp$.</p></div>

<h2>6. Proyecciones, simetrías y rotaciones lineales</h2>
<ul><li><strong>Proyección ortogonal</strong> sobre $\vec V$: VAP 1 en $\vec V$ y 0 en $\vec V^\perp$. Matriz simétrica e idempotente ($P^2=P$). Sobre un plano de normal unitaria $\vec n$: $P=I-\vec n\vec n^t$.</li>
<li><strong>Simetría</strong> respecto a $\vec V$: VAP 1 en $\vec V$ y $-1$ en $\vec V^\perp$. $S=2P-I$, simétrica y ortogonal ($S^2=I$).</li>
<li><strong>Rotación</strong>: se describe con el eje (VAP 1) y el ángulo.</li></ul>
<div class="num" data-a="0.6667" data-tol="0.002" data-show="2/3"><p>Elemento $(1,1)$ de la matriz de la proyección ortogonal sobre el plano $x+y+z=0$.</p>
<div class="why"><p>$P=I-\frac{\vec n\vec n^t}{\vec n\cdot\vec n}$ con $\vec n=(1,1,1)$: $P=I-\frac13J$, donde $J$ es la matriz de unos. Elemento $(1,1)$: $1-\frac13=\frac23$.</p></div></div>
`,

/* ================================================================== */
afines: String.raw`
<h2>1. Transformaciones afines</h2>
<div class="def"><span class="label">Definición</span><p>$f$ es afín si existe una transformación lineal $\vec f$ (su <strong>lineal asociada</strong>) con $\vec{f(x)f(y)}=\vec f(\vec{xy})$. Es decir: transforma vectores como $\vec f$ y los puntos se trasladan además.</p></div>
<div class="thm"><span class="label">Expresión matricial (teoremas 3.36 y 3.38)</span>
$$\bar X=AX+B,\qquad\text{o centrada en un punto } p:\quad \bar X=f(P)+A(X-P)$$
<p>$A$ es la matriz de $\vec f$ y $B$ las coordenadas de $f(O)$. Como matriz $(n+1)\times(n+1)$: $\begin{pmatrix}1 & 0\\ B & A\end{pmatrix}$, que permite componer multiplicando.</p></div>
<p>Queda determinada por la imagen de un punto y de una base (teorema 3.34), o por las imágenes de $n+1$ puntos afínmente independientes.</p>
<h3>Clasificación básica</h3>
<ul><li><strong>Regular</strong>: $A$ regular (transforma referencias en referencias). Directa o inversa según $\det A$.</li>
<li><strong>Traslación</strong>: $A=I$. <strong>Homotecia</strong>: $A=kI$ ($k\ne0,1$), con centro el único punto fijo.</li></ul>

<h2>2. Puntos fijos</h2>
<div class="thm"><span class="label">Teorema 3.44</span><ul>
<li>Los puntos fijos son las soluciones de $(A-I)X=-B$.</li>
<li>$f$ tiene un único punto fijo $\iff$ 1 no es VAP de $\vec f$.</li>
<li>Si tiene puntos fijos, forman una variedad lineal $U_1$ cuya dirección es el subespacio propio $\vec U_1$ de VAP 1.</li></ul></div>
<p>Las variedades <strong>invariantes</strong> (que se transforman en sí mismas, aunque sus puntos se muevan) también interesan: por ejemplo, el eje de un movimiento helicoidal.</p>

<h2>3. Transformaciones euclidianas (movimientos)</h2>
<div class="def"><span class="label">Definición</span><p>$\vec f$ es euclidiana si conserva el producto escalar: $\vec f(\vec x)\cdot\vec f(\vec y)=\vec x\cdot\vec y$ (teorema 3.105). Equivale a que conserve longitudes, y a que su matriz en base ortonormal sea <strong>ortogonal</strong> (3.109). Entonces $\det=\pm1$ y es regular.</p></div>
<p>Una transformación afín es euclidiana si su lineal asociada lo es (teorema 3.136): conserva distancias y ángulos. Las directas ($\det=1$) se llaman <strong>movimientos</strong> o desplazamientos; las inversas, movimientos inversos.</p>

<h2>4. Clasificación en el plano</h2>
<table>
<tr><th>$\det A$</th><th>Lineal asociada</th><th>Con puntos fijos</th><th>Sin puntos fijos</th></tr>
<tr><td>$1$, $A=I$</td><td>identidad</td><td>identidad</td><td>traslación</td></tr>
<tr><td>$1$, $A\ne I$</td><td>giro de ángulo $\gamma$, $\cos\gamma=\frac{\text{tr}A}2$</td><td>giro alrededor del punto fijo</td><td>(imposible)</td></tr>
<tr><td>$-1$</td><td>simetría axial (VAP $1,-1$)</td><td>simetría axial: los puntos fijos forman el eje</td><td>simetría con deslizamiento</td></tr>
</table>
<p>El sentido del giro lo da el signo de $\sin\gamma$, que se lee en el elemento $(2,1)$ de la matriz $\begin{pmatrix}\cos\gamma & -\sin\gamma\\ \sin\gamma & \cos\gamma\end{pmatrix}$.</p>
<div class="key"><span class="label">Simetría con deslizamiento</span><p>Se descompone en simetría respecto a un eje $r$ y traslación de vector $\vec v$ paralelo a $r$. Para hallarlos: $\vec v=\frac12\vec{x\,f(f(x))}$ para cualquier $x$, y el eje pasa por el punto medio de $x$ y $f(x)$ con la dirección del VEP de VAP 1.</p></div>

<h2>5. Clasificación en el espacio</h2>
<table>
<tr><th>$\det A$</th><th>Lineal asociada</th><th>Con puntos fijos</th><th>Sin puntos fijos</th></tr>
<tr><td>$1$</td><td>rotación de eje $\vec u$ (VEP de VAP 1) y ángulo $\gamma$, $\text{tr}A=1+2\cos\gamma$</td><td>rotación alrededor de una recta</td><td>movimiento helicoidal (rotación + traslación a lo largo del eje), o traslación si $A=I$</td></tr>
<tr><td>$-1$, VAP $1,1,-1$</td><td>simetría especular respecto a un plano</td><td>simetría respecto al plano de puntos fijos</td><td>simetría con deslizamiento (traslación paralela al plano)</td></tr>
<tr><td>$-1$, otro caso</td><td>rotación compuesta con simetría respecto al plano perpendicular al eje, $\text{tr}A=-1+2\cos\gamma$</td><td>rotación-simetría (un único punto fijo); si $A=-I$, simetría central</td><td>(imposible: 1 no es VAP)</td></tr>
</table>
<div class="steps"><p>Clasifica la lineal $A=\begin{pmatrix}0 & -1 & 0\\ 1 & 0 & 0\\ 0 & 0 & 1\end{pmatrix}$.</p>
<div class="step">Columnas ortonormales: ortogonal. $\det A=1$: rotación.</div>
<div class="step">Eje: $(A-I)X=0$ da $x=y=0$, el eje $OZ$, $\vec u=(0,0,1)$.</div>
<div class="step">$\text{tr}A=1=1+2\cos\gamma\Rightarrow\gamma=90^\circ$. Como $A\vec e_1=\vec e_2$, gira de $OX$ hacia $OY$: sentido positivo respecto a $\vec u$.</div></div>
<div class="tf" data-a="v"><p>Una transformación euclidiana directa del espacio sin puntos fijos y con $A\ne I$ es un movimiento helicoidal.</p>
<div class="why"><p>Su lineal es una rotación de ángulo no nulo; al no fijar ningún punto, la traslación tiene componente a lo largo del eje.</p></div></div>

<h2>6. Construir la matriz de un movimiento dado geométricamente</h2>
<ol><li>Elige una base ortonormal adaptada: el eje (o el normal al plano) y dos vectores perpendiculares.</li>
<li>En esa base la matriz es sencilla (rotación por bloques, diagonal con $\pm1$…).</li>
<li>Vuelve a la canónica con $A=CA'C^t$ (con $C$ ortogonal, $C^{-1}=C^t$).</li>
<li>Para la parte afín: impón que un punto conocido (del eje, del plano) quede fijo o vaya donde corresponda, $\bar X=P'+A(X-P)$.</li></ol>
`,

/* ================================================================== */
cuadraticas: String.raw`
<h2>1. Formas cuadráticas</h2>
<div class="def"><span class="label">Definición</span><p>Una forma cuadrática es un polinomio homogéneo de grado 2: $\vec q(\vec x)=X^tQX$ con $Q$ simétrica. En la diagonal van los coeficientes de los cuadrados y fuera, la <strong>mitad</strong> de los coeficientes cruzados.</p></div>
<div class="thm"><span class="label">Cambio de base (teorema 4.5)</span><p>En la base $B'$ de matriz $C$: $Q'=C^tQC$ (congruencia; ¡no es la semejanza $C^{-1}QC$, salvo que $C$ sea ortogonal!).</p></div>

<h2>2. Clasificación (ley de inercia)</h2>
<p>Siempre existe una base en la que $\vec q$ es "suma y resta de cuadrados" (teorema 4.14):</p>
<div class="formula">$$\vec q=x_1^{*2}+\dots+x_r^{*2}-x_{r+1}^{*2}-\dots-x_{r+s}^{*2}$$</div>
<p>El número $r$ de positivos y $s$ de negativos no depende de la base (es lo que se conserva, teorema 4.11): $(r,s)$ es la <strong>signatura</strong> y $r+s$ el rango.</p>
<table>
<tr><th>Tipo</th><th>Signatura ($n$ variables)</th><th>Significado</th></tr>
<tr><td>Definida positiva</td><td>$(n,0)$</td><td>$\vec q(\vec x)\gt0$ si $\vec x\ne\vec0$</td></tr>
<tr><td>Definida negativa</td><td>$(0,n)$</td><td>$\vec q(\vec x)\lt0$ si $\vec x\ne\vec0$</td></tr>
<tr><td>Semidefinida positiva</td><td>$(r,0)$, $r\lt n$</td><td>$\ge0$, se anula en vectores no nulos</td></tr>
<tr><td>Semidefinida negativa</td><td>$(0,s)$, $s\lt n$</td><td>$\le0$</td></tr>
<tr><td>Indefinida</td><td>$r,s\ge1$</td><td>toma valores de los dos signos</td></tr>
</table>
<h3>Tres maneras de clasificar</h3>
<ol><li><strong>Completando cuadrados</strong> (método de Lagrange, referencias conjugadas): por ejemplo $x^2+2xy+3y^2=(x+y)^2+2y^2$ → definida positiva.</li>
<li><strong>Sylvester</strong> (teorema 4.19): con los menores principales $\Delta_1,\dots,\Delta_n$. Definida positiva $\iff$ todos $\gt0$. Definida negativa $\iff$ alternan empezando por $\Delta_1\lt0$. Si algún $\Delta_k=0$, el criterio no decide.</li>
<li><strong>Valores propios</strong> (teorema 4.67): sus signos dan la signatura, porque en la base ortonormal de VEP $\vec q=\lambda_1x_1^2+\dots+\lambda_nx_n^2$. Para saber solo los signos, sin calcularlos: regla de Descartes sobre el polinomio característico.</li></ol>
<div class="mc"><p>$\vec q(x,y)=x^2+4xy+y^2$ es…</p><ul><li data-ok>indefinida</li><li>definida positiva</li><li>semidefinida positiva</li><li>definida negativa</li></ul>
<div class="why"><p>$\Delta_1=1\gt0$, $\Delta_2=1-4=-3\lt0$: no es definida. VAP: $3$ y $-1$, signos opuestos. Comprobación: $\vec q(1,-1)=1-4+1=-2$.</p></div></div>

<h2>3. Cuádricas: ecuación y clasificación afín</h2>
<div class="def"><span class="label">Cuádrica</span><p>Conjunto $V_q$ de puntos que anulan un polinomio de grado 2: $q(x)=X^tQX+2L^tX+a=0$. Matricialmente, $\begin{pmatrix}1 & X^t\end{pmatrix}\begin{pmatrix}a & L^t\\ L & Q\end{pmatrix}\begin{pmatrix}1\\ X\end{pmatrix}=0$. En $\mathbb R^2$ se llaman <strong>cónicas</strong>.</p></div>
<h3>Centro</h3>
<p>Los centros son las soluciones de $QX+L=0$ (anular las derivadas parciales). Si $Q$ es regular, hay un centro único y, trasladando el origen allí, desaparecen los términos lineales. Si no hay centro, la cuádrica es de tipo parabólico.</p>
<h3>Ecuaciones reducidas</h3>
<p>Con centro (teorema 4.35): $\pm x_1^{*2}\pm\dots=1$ o $=0$. Sin centro (teorema 4.43): $x_h^*=\pm x_1^{*2}\pm\dots$. De aquí sale toda la clasificación.</p>
<table>
<tr><th>Cónica (reducida)</th><th>Nombre</th></tr>
<tr><td>$x^2+y^2=1$ (escalado)</td><td>elipse</td></tr>
<tr><td>$x^2+y^2=-1$</td><td>elipse imaginaria (vacía)</td></tr>
<tr><td>$x^2-y^2=1$</td><td>hipérbola</td></tr>
<tr><td>$x^2+y^2=0$ / $x^2-y^2=0$</td><td>un punto / par de rectas secantes</td></tr>
<tr><td>$y=x^2$</td><td>parábola</td></tr>
<tr><td>$x^2=1$ / $x^2=0$ / $x^2=-1$</td><td>rectas paralelas / recta doble / vacía</td></tr>
</table>
<p>Las cuádricas de $\mathbb R^3$ se resumen en la tabla del resumen: elipsoide, hiperboloides de una y dos hojas, cono, paraboloides elíptico e hiperbólico, cilindros y casos degenerados (pares de planos, recta, punto, vacía).</p>

<h2>4. Clasificación euclidiana: ejes principales</h2>
<p>Usando la base ortonormal de VEP de $Q$ (diagonalización ortogonal, que no deforma las figuras):</p>
<div class="key"><span class="label">Procedimiento</span><ol>
<li>VAP $\lambda_i$ y VEP ortonormales de $Q$: dan las <strong>direcciones de los ejes</strong>.</li>
<li>Escribe la ecuación en esa base: $\sum\lambda_ix_i'^2+(\text{lineales})+a=0$.</li>
<li>Completa cuadrados (traslación al centro o al vértice).</li>
<li>Ecuación euclidiana reducida (teoremas 4.80 y 4.84): por ejemplo $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ con $a,b$ los semiejes reales.</li></ol></div>
<div class="steps"><p>Clasifica $2x^2+2y^2+2z^2+2xy+2xz+2yz=4$.</p>
<div class="step">$Q=\begin{pmatrix}2 & 1 & 1\\ 1 & 2 & 1\\ 1 & 1 & 2\end{pmatrix}$, VAP $4$ (simple, VEP $(1,1,1)$) y $1$ (doble).</div>
<div class="step">Ecuación reducida: $4x'^2+y'^2+z'^2=4$, es decir $x'^2+\frac{y'^2}4+\frac{z'^2}4=1$.</div>
<div class="step">Elipsoide de revolución con eje en la dirección $(1,1,1)$, semiejes 1, 2, 2.</div></div>
<div class="tip"><span class="label">Casos especiales</span><ul>
<li>Esfera: todos los coeficientes cuadráticos iguales y los cruzados nulos (teorema 4.89).</li>
<li>Hipérbola <strong>equilátera</strong> (asíntotas perpendiculares): VAP opuestos, $\lambda_1=-\lambda_2$ (teorema 4.127); equivale a traza de $Q$ igual a 0.</li>
<li>Asíntotas de una hipérbola de centro $\dot O$: $q(x)-q(\dot O)=0$ (teorema 4.125).</li></ul></div>

<h2>5. Lugares geométricos</h2>
<ul><li>Esfera/circunferencia: puntos a distancia $r$ de $C$: $\sum(x_i-c_i)^2=r^2$ (teorema 4.130).</li>
<li>Elipse: suma de distancias a los focos $2a$, con $a^2=b^2+c^2$ (teorema 4.135).</li>
<li>Hipérbola: diferencia de distancias $2a$, con $c^2=a^2+b^2$ (teorema 4.139).</li>
<li>Parábola: equidistancia a foco y directriz (teorema 4.143).</li>
<li>Par de hiperplanos: producto de sus ecuaciones igualado a 0 (teorema 4.119).</li></ul>

<h2>6. Mínimos cuadrados (aproximación)</h2>
<p>Dado un sistema incompatible $AX=B$, se busca $X$ que haga mínimo $\|AX-B\|$. El vector resultado $AX$ debe ser la <strong>proyección ortogonal</strong> de $B$ sobre $\langle A^1,\dots,A^n\rangle$ (teorema 4.109), lo que equivale a las ecuaciones normales:</p>
<div class="formula">$$A^tAX=A^tB$$</div>
<p>Si las columnas de $A$ son independientes, la solución es única: $X=(A^tA)^{-1}A^tB$. El <strong>error</strong> es $\|AX-B\|$, la distancia de $B$ al subespacio.</p>
<div class="key"><span class="label">Ajustes típicos</span><ul>
<li>Recta $y=a+bx$ por puntos $(x_i,y_i)$: columnas $(1,\dots,1)$ y $(x_1,\dots,x_m)$.</li>
<li>Parábola $y=a+bx+cx^2$: añade la columna de los $x_i^2$.</li>
<li>Exponencial $y=ce^{kx}$: toma logaritmos, $\ln y=\ln c+kx$, y ajusta una recta.</li></ul></div>
`

};
