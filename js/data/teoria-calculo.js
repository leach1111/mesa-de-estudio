THEORY.calculo = {

/* ================================================================== */
reales: String.raw`
<h2>1. Clases de números</h2>
<p>Los conjuntos numéricos se van ampliando para poder resolver operaciones que antes no tenían solución:</p>
<div class="formula">$$\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\subset\mathbb C$$</div>
<table>
<tr><th>Conjunto</th><th>Qué contiene</th><th>Por qué hace falta</th></tr>
<tr><td>$\mathbb N=\{1,2,3,\dots\}$</td><td>Naturales</td><td>Contar</td></tr>
<tr><td>$\mathbb Z$</td><td>Enteros: naturales, 0 y negativos</td><td>Restar siempre ($3-5$)</td></tr>
<tr><td>$\mathbb Q$</td><td>Racionales: $\frac pq$ con $p,q\in\mathbb Z$, $q\ne0$</td><td>Dividir siempre ($3:5$)</td></tr>
<tr><td>$\mathbb R$</td><td>Reales: racionales e irracionales ($\sqrt2,\pi,e$)</td><td>Medir longitudes, límites</td></tr>
<tr><td>$\mathbb C$</td><td>Complejos $a+bi$</td><td>Raíces de negativos ($\sqrt{-1}$)</td></tr>
</table>
<div class="def"><span class="label">Irracional</span><p>Real que no se puede escribir como fracción. Su expresión decimal es infinita y <strong>no periódica</strong>. Los racionales, en cambio, tienen expresión decimal finita o periódica.</p></div>

<h3>Representación sobre la recta y densidad</h3>
<p>Cada real corresponde a un punto de la recta y viceversa: la recta real "no tiene agujeros" (propiedad de completitud). Además:</p>
<div class="thm"><span class="label">Densidad de $\mathbb Q$ y de $\mathbb R\setminus\mathbb Q$</span><p>Entre dos reales distintos cualesquiera hay infinitos racionales e infinitos irracionales.</p></div>
<p>Por ejemplo, entre $a$ y $b$ siempre está el punto medio $\frac{a+b}2$, y entre $a$ y ese punto medio otro, y así indefinidamente.</p>

<h3>Expresión decimal: fracción generatriz</h3>
<div class="key"><span class="label">Método</span>
<p>Multiplica el número por potencias de 10 para que, al restar, desaparezca la parte periódica.</p></div>
<div class="steps"><p>Fracción generatriz de $x=23{,}1451451\ldots$ (periodo 145).</p>
<div class="step">El periodo tiene 3 cifras y empieza justo tras la coma: $1000x=23145{,}145145\ldots$</div>
<div class="step">Restamos: $1000x-x=23145{,}145\ldots-23{,}145\ldots=23122$.</div>
<div class="step">$999x=23122 \Rightarrow x=\frac{23122}{999}$. (Simplifica si se puede: aquí $\text{mcd}=1$.)</div></div>
<div class="tf" data-a="v"><p>$1{,}999\ldots=2$.</p>
<div class="why"><p>$x=1{,}999\ldots \Rightarrow 10x=19{,}999\ldots \Rightarrow 9x=18 \Rightarrow x=2$. Son dos expresiones del mismo número.</p></div></div>

<h3>Demostrar que un número es irracional</h3>
<div class="steps"><p>Demuestra que $\sqrt2$ no es racional (reducción al absurdo).</p>
<div class="step">Supón $\sqrt2=\frac pq$ con la fracción irreducible. Entonces $p^2=2q^2$, así que $p^2$ es par y por tanto $p$ es par: $p=2k$.</div>
<div class="step">Sustituyendo: $4k^2=2q^2 \Rightarrow q^2=2k^2$, luego $q$ también es par.</div>
<div class="step">$p$ y $q$ pares contradice que la fracción fuera irreducible. Luego $\sqrt2\notin\mathbb Q$.</div></div>
<div class="tip"><span class="label">Consecuencias útiles</span><p>Racional + irracional = irracional. Racional (no nulo) × irracional = irracional. Pero irracional + irracional puede ser racional: $\sqrt2+(-\sqrt2)=0$.</p></div>

<h2>2. Orden y desigualdades</h2>
<p>En $\mathbb R$ hay un orden: dados $a,b$, se cumple exactamente una de $a\lt b$, $a=b$, $a\gt b$. Propiedades (para todo $a,b,c$):</p>
<ul>
<li>$a\lt b \Rightarrow a+c\lt b+c$.</li>
<li>$a\lt b$ y $c\lt d \Rightarrow a+c\lt b+d$ (se pueden sumar desigualdades del mismo sentido; <strong>restar no</strong>).</li>
<li>$a\lt b$ y $c\gt0 \Rightarrow ac\lt bc$; si $c\lt0 \Rightarrow ac\gt bc$.</li>
<li>$0\lt a\lt b \Rightarrow \frac1a\gt\frac1b$; y si $a\lt b\lt0$ también $\frac1a\gt\frac1b$.</li>
<li>$0\le a\lt b \Rightarrow a^n\lt b^n$ y $\sqrt[n]a\lt\sqrt[n]b$ (con negativos, cuidado).</li>
<li>$a^2\ge0$ siempre. De aquí sale, por ejemplo, $a^2+b^2\ge2ab$ (porque $(a-b)^2\ge0$).</li>
</ul>

<h3>Intervalos y semirrectas</h3>
<table>
<tr><th>Notación</th><th>Conjunto</th><th>Nombre</th></tr>
<tr><td>$(a,b)$</td><td>$a\lt x\lt b$</td><td>abierto</td></tr>
<tr><td>$[a,b]$</td><td>$a\le x\le b$</td><td>cerrado</td></tr>
<tr><td>$[a,b)$, $(a,b]$</td><td>semiabiertos</td><td></td></tr>
<tr><td>$(a,\infty)$, $[a,\infty)$, $(-\infty,b)$…</td><td>semirrectas</td><td>no acotados</td></tr>
</table>
<p>$\infty$ no es un número: nunca lleva corchete cerrado.</p>

<h2>3. Inecuaciones, tipo a tipo</h2>
<h3>Lineales</h3>
<p>Se despeja como en una ecuación, girando el sentido si multiplicas o divides por un negativo.</p>
<h3>Polinómicas (grado 2 o más)</h3>
<ol><li>Pasa todo a un lado: $P(x)\gt0$.</li>
<li>Factoriza $P$ (raíces reales).</li>
<li>Tabla de signos con las raíces como separadores.</li></ol>
<div class="tip"><span class="label">Grado 2 sin tabla</span><p>$ax^2+bx+c$ con $a\gt0$ y raíces $r_1\lt r_2$: es negativo entre las raíces y positivo fuera. Si no tiene raíces reales (discriminante negativo), tiene siempre el signo de $a$: así $x^2+x+1\ge0$ se cumple para todo $x$ (ejercicio 7a).</p></div>
<div class="steps"><p>Resuelve $x^3-4x^2-7x+10\gt0$ (ej. 7d).</p>
<div class="step">Probamos divisores de 10: $x=1$ da $1-4-7+10=0$. Ruffini: $x^3-4x^2-7x+10=(x-1)(x^2-3x-10)=(x-1)(x-5)(x+2)$.</div>
<div class="step">Raíces $-2,1,5$. Signos: $(-\infty,-2)$: $-$; $(-2,1)$: $+$; $(1,5)$: $-$; $(5,\infty)$: $+$.</div>
<div class="step">Solución: $(-2,1)\cup(5,\infty)$.</div></div>
<h3>Racionales</h3>
<div class="warn"><span class="label">Nunca multipliques en cruz</span><p>En $\frac{x-1}{x+1}\ge3$ no puedes pasar $x+1$ multiplicando porque no sabes su signo. Haz: $\frac{x-1}{x+1}-3\ge0 \Rightarrow \frac{x-1-3x-3}{x+1}\ge0 \Rightarrow \frac{-2x-4}{x+1}\ge0$ y tabla. Solución: $[-2,-1)$.</p></div>
<p>Los ceros del denominador <strong>siempre</strong> quedan excluidos; los del numerador se incluyen si la desigualdad es $\le$ o $\ge$.</p>
<h3>Con parámetros: raíces reales o complejas</h3>
<p>$ax^2+bx+c=0$ tiene raíces reales si $\Delta=b^2-4ac\ge0$ y complejas no reales si $\Delta\lt0$ (ejercicios 11 y 12 del libro).</p>
<div class="num" data-a="1" data-tol="0.001" data-show="α ∈ (-∞,-5] ∪ [1,∞) ; el extremo positivo es 1"><p>¿Para qué $\alpha$ son reales las raíces de $x^2+\alpha x-\alpha+\frac54=0$? Escribe el menor valor positivo de $\alpha$ que vale.</p>
<div class="why"><p>$\Delta=\alpha^2-4(-\alpha+\frac54)=\alpha^2+4\alpha-5=(\alpha+5)(\alpha-1)\ge0 \iff \alpha\le-5$ o $\alpha\ge1$. El menor positivo es 1.</p></div></div>

<h2>4. Valor absoluto y distancia</h2>
<div class="def"><span class="label">Definición</span>
$$|x|=\begin{cases}x & x\ge0\\-x & x\lt0\end{cases}=\max\{x,-x\}=\sqrt{x^2}$$
<p>La <strong>distancia</strong> entre $x$ e $y$ es $d(x,y)=|x-y|$, y el punto medio es $\frac{x+y}2$.</p></div>
<div class="thm"><span class="label">Propiedades</span>
<ul><li>$|x|\ge0$ y $|x|=0\iff x=0$; $|-x|=|x|$.</li>
<li>$|xy|=|x||y|$, $\left|\frac xy\right|=\frac{|x|}{|y|}$, $|x^n|=|x|^n$.</li>
<li>$-|x|\le x\le|x|$.</li>
<li>Si $c\ge0$: $|x|\le c\iff -c\le x\le c$; $|x|\ge c\iff x\le-c$ o $x\ge c$.</li>
<li>Desigualdad triangular: $|x+y|\le|x|+|y|$. Y también $|x-y|\ge\big||x|-|y|\big|$.</li></ul></div>
<div class="demo"><p>La triangular: sumando $-|x|\le x\le|x|$ y $-|y|\le y\le|y|$ queda $-(|x|+|y|)\le x+y\le|x|+|y|$, que es $|x+y|\le|x|+|y|$.</p></div>

<h3>Traducir condiciones geométricas</h3>
<table>
<tr><th>Frase</th><th>Condición</th></tr>
<tr><td>$x$ dista de 3 menos que 2</td><td>$|x-3|\lt2$</td></tr>
<tr><td>$x$ está entre $-4$ y $4$ (ambos incluidos)</td><td>$|x|\le4$</td></tr>
<tr><td>$x$ equidista de 2 y de $-6$</td><td>$|x-2|=|x+6|$ ($x=-2$)</td></tr>
<tr><td>$x$ es 10 o $-10$</td><td>$|x|=10$</td></tr>
</table>

<h3>Ecuaciones e inecuaciones con valor absoluto: tres métodos</h3>
<ol>
<li><strong>Equivalencias</strong> $|A|\le c$, $|A|\ge c$ cuando un lado es una constante.</li>
<li><strong>Elevar al cuadrado</strong> cuando los dos lados son valores absolutos (o no negativos): $|A|\lt|B|\iff A^2\lt B^2$.</li>
<li><strong>Separar por trozos</strong> en el caso general: busca dónde se anula cada interior, y en cada intervalo quita las barras con el signo que corresponda.</li>
</ol>
<div class="steps"><p>Resuelve $|x+2|-|x-2|\lt2$ (ej. 23e).</p>
<div class="step">Las barras cambian en $x=-2$ y $x=2$. Tres trozos.</div>
<div class="step">$x\lt-2$: $-(x+2)+(x-2)=-4\lt2$ ✔ siempre. $-2\le x\lt2$: $(x+2)+(x-2)=2x\lt2\iff x\lt1$. $x\ge2$: $(x+2)-(x-2)=4\lt2$ ✘.</div>
<div class="step">Uniendo: $(-\infty,-2)\cup[-2,1)=(-\infty,1)$.</div></div>
<div class="num" data-a="4" data-show="x = 4"><p>Resuelve $|x-3|=|x-5|$.</p>
<div class="why"><p>Equidista de 3 y 5: el punto medio, $x=4$. (Elevando al cuadrado: $-6x+9=-10x+25 \Rightarrow x=4$.)</p></div></div>

<h3>Entornos</h3>
<p>El <strong>entorno</strong> de centro $a$ y radio $r$ es $E(a,r)=(a-r,a+r)=\{x:|x-a|\lt r\}$. Es el lenguaje que se usa después para definir límites.</p>

<h2>5. Acotación: supremo, ínfimo, máximo y mínimo</h2>
<div class="def"><span class="label">Definiciones</span>
<ul><li>$A$ está <strong>acotado superiormente</strong> si existe $M$ con $x\le M$ para todo $x\in A$ ($M$ es cota superior).</li>
<li>El <strong>supremo</strong> es la menor cota superior. Si pertenece a $A$, se llama <strong>máximo</strong>.</li>
<li>Análogamente: cota inferior, <strong>ínfimo</strong> (mayor cota inferior) y <strong>mínimo</strong>.</li></ul></div>
<div class="thm"><span class="label">Axioma del supremo (completitud)</span><p>Todo subconjunto de $\mathbb R$ no vacío y acotado superiormente tiene supremo en $\mathbb R$. (En $\mathbb Q$ falla: $\{x\in\mathbb Q: x^2\lt2\}$ no tiene supremo racional.)</p></div>
<div class="key"><span class="label">Cómo hallarlos en un ejercicio</span><ol>
<li>Describe el conjunto como intervalos (resolviendo la inecuación) o escribe sus primeros términos si es una sucesión.</li>
<li>Mira los extremos: ¿pertenecen al conjunto? Si sí, son máximo/mínimo.</li></ol></div>
<div class="steps"><p>$B=\left\{x=1+\frac{(-1)^n}{n}: n\in\mathbb N\right\}$.</p>
<div class="step">Términos: $n=1$: $0$; $n=2$: $\frac32$; $n=3$: $\frac23$; $n=4$: $\frac54$; … oscilan alrededor de 1 acercándose.</div>
<div class="step">El mayor es $\frac32$ (con $n=2$): supremo = máximo $=\frac32$.</div>
<div class="step">El menor es $0$ (con $n=1$): ínfimo = mínimo $=0$.</div></div>
<div class="tf" data-a="f"><p>Todo conjunto acotado de números reales tiene máximo.</p>
<div class="why"><p>Tiene supremo, pero no necesariamente máximo: $(0,1)$ tiene supremo 1, que no está en el conjunto.</p></div></div>
`,

/* ================================================================== */
complejos: String.raw`
<h2>1. Por qué existen los complejos</h2>
<p>La ecuación $x^2+1=0$ no tiene solución real. Se introduce un número nuevo, la <strong>unidad imaginaria</strong> $i$, con $i^2=-1$, y se construyen los números $z=a+bi$ con $a,b\in\mathbb R$.</p>
<div class="def"><span class="label">Definiciones</span>
<ul><li>$a=\text{Re}(z)$ es la parte real; $b=\text{Im}(z)$ la parte imaginaria (¡es un número real, sin la $i$!).</li>
<li>Si $b=0$, $z$ es real; si $a=0$ y $b\ne0$, es <strong>imaginario puro</strong>.</li>
<li>Dos complejos son iguales si tienen la misma parte real y la misma parte imaginaria.</li>
<li><strong>Conjugado</strong>: $\bar z=a-bi$ (simétrico respecto al eje real). <strong>Opuesto</strong>: $-z=-a-bi$.</li></ul></div>
<h3>Potencias de $i$</h3>
<p>Se repiten cada 4: $i^1=i$, $i^2=-1$, $i^3=-i$, $i^4=1$. Para $i^n$ divide $n$ entre 4 y usa el resto: $i^{87}=i^{3}=-i$.</p>
<div class="mc"><p>¿Cuánto vale $i^{2026}$?</p><ul><li data-ok>$-1$</li><li>$1$</li><li>$i$</li><li>$-i$</li></ul>
<div class="why"><p>$2026=4\cdot506+2$, así que $i^{2026}=i^2=-1$.</p></div></div>

<h2>2. Forma binómica: operaciones</h2>
<div class="formula">$$(a+bi)\pm(c+di)=(a\pm c)+(b\pm d)i\qquad (a+bi)(c+di)=(ac-bd)+(ad+bc)i$$
$$\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{c^2+d^2}$$</div>
<div class="thm"><span class="label">Propiedades del conjugado</span>
<ul><li>$\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\,\bar w$, $\overline{z/w}=\bar z/\bar w$, $\bar{\bar z}=z$.</li>
<li>$z+\bar z=2\,\text{Re}(z)$, $z-\bar z=2i\,\text{Im}(z)$, así que $\text{Re}(z)=\frac{z+\bar z}2$ e $\text{Im}(z)=\frac{z-\bar z}{2i}$.</li>
<li>$z\bar z=a^2+b^2=|z|^2$ (siempre real y $\ge0$).</li>
<li>$z$ es real $\iff z=\bar z$; $z$ es imaginario puro $\iff z=-\bar z$.</li></ul></div>
<h3>Problemas típicos de condiciones</h3>
<div class="steps"><p>Halla $a\in\mathbb R$ para que $\frac{3+2i}{a-3i}$ sea real (ej. 33).</p>
<div class="step">Multiplica por el conjugado: $\frac{(3+2i)(a+3i)}{a^2+9}=\frac{3a-6+(9+2a)i}{a^2+9}$.</div>
<div class="step">Real ⇔ parte imaginaria nula: $9+2a=0 \Rightarrow a=-\frac92$.</div>
<div class="step">(Para imaginario puro pediríamos $3a-6=0$, es decir $a=2$.)</div></div>

<h2>3. Representación gráfica, módulo y argumento</h2>
<p>$z=a+bi$ se dibuja como el punto $(a,b)$ (o el vector que va del origen a él) en el <strong>plano complejo</strong>: eje horizontal real, eje vertical imaginario.</p>
<div class="def"><span class="label">Módulo y argumento</span>
<p>$|z|=r=\sqrt{a^2+b^2}$ es la distancia al origen. El argumento $\alpha=\arg z$ es el ángulo con el semieje real positivo. Está definido salvo múltiplos de $2\pi$; el <strong>argumento principal</strong> se toma en $[0,2\pi)$ (o en $(-\pi,\pi]$).</p></div>
<div class="thm"><span class="label">Propiedades del módulo</span>
<ul><li>$|z|=|\bar z|=|-z|$; $|zw|=|z||w|$; $\left|\frac zw\right|=\frac{|z|}{|w|}$.</li>
<li>$|\text{Re}\,z|\le|z|$, $|\text{Im}\,z|\le|z|$.</li>
<li>Triangular: $|z+w|\le|z|+|w|$.</li>
<li>$|z-w|$ es la distancia entre los puntos $z$ y $w$.</li></ul></div>
<div class="tip"><span class="label">Regiones del plano</span><p>$|z-z_0|=r$ es la circunferencia de centro $z_0$ y radio $r$; $|z-z_0|\lt r$, el disco abierto. $|z-1|=|z+i|$ es la mediatriz del segmento que une $1$ y $-i$. $\text{Re}(z)\gt0$ es el semiplano derecho.</p></div>

<h3>Cálculo del argumento por cuadrantes</h3>
<table>
<tr><th>Situación</th><th>Argumento</th></tr>
<tr><td>1.<sup>er</sup> cuadrante ($a\gt0,b\gt0$)</td><td>$\arctan\frac ba$</td></tr>
<tr><td>2.º o 3.<sup>er</sup> cuadrante ($a\lt0$)</td><td>$\arctan\frac ba+\pi$</td></tr>
<tr><td>4.º cuadrante ($a\gt0,b\lt0$)</td><td>$\arctan\frac ba+2\pi$ (o el negativo)</td></tr>
<tr><td>$a=0$</td><td>$\frac\pi2$ si $b\gt0$, $\frac{3\pi}2$ si $b\lt0$</td></tr>
</table>
<div class="num" data-a="2.3562" data-tol="0.005" data-show="3π/4 ≈ 2,356"><p>Argumento principal (en $[0,2\pi)$) de $z=-2+2i$, en radianes.</p>
<div class="why"><p>Segundo cuadrante: $\arctan(-1)+\pi=-\frac\pi4+\pi=\frac{3\pi}4\approx2{,}356$.</p></div></div>

<h2>4. Formas polar, trigonométrica y exponencial</h2>
<div class="formula">$$z=r_\alpha=r(\cos\alpha+i\sin\alpha)=re^{i\alpha}$$</div>
<p>La última se justifica con la <strong>fórmula de Euler</strong> $e^{i\alpha}=\cos\alpha+i\sin\alpha$, que se puede comprobar con los desarrollos de Taylor de $e^x$, $\cos x$ y $\sin x$ (tema de aplicaciones de la derivada).</p>
<div class="thm"><span class="label">Igualdad en polar</span><p>$r_\alpha=s_\beta \iff r=s$ y $\alpha-\beta=2k\pi$ para algún $k\in\mathbb Z$. Esto es lo que hace que las raíces sean varias.</p></div>

<h2>5. Operaciones en polar</h2>
<div class="formula">$$r_\alpha\cdot s_\beta=(rs)_{\alpha+\beta}\qquad \frac{r_\alpha}{s_\beta}=\left(\frac rs\right)_{\alpha-\beta}\qquad (r_\alpha)^n=(r^n)_{n\alpha}\qquad \overline{r_\alpha}=r_{-\alpha}\qquad \frac1{r_\alpha}=\left(\frac1r\right)_{-\alpha}$$</div>
<div class="demo"><p>$re^{i\alpha}\cdot se^{i\beta}=rs\,e^{i(\alpha+\beta)}$ por las propiedades de las exponenciales. Geométricamente: multiplicar por $s_\beta$ es <strong>girar</strong> un ángulo $\beta$ y <strong>escalar</strong> por $s$. Multiplicar por $i=1_{\pi/2}$ es girar 90°.</p></div>
<h3>Fórmula de De Moivre y trigonometría</h3>
<p>$(\cos\alpha+i\sin\alpha)^n=\cos n\alpha+i\sin n\alpha$. Desarrollando el binomio e igualando partes, salen las fórmulas de ángulo múltiple. Con $n=2$:</p>
<div class="formula">$$\cos^2\alpha-\sin^2\alpha+2i\sin\alpha\cos\alpha=\cos2\alpha+i\sin2\alpha$$</div>
<div class="steps"><p>Calcula $(1+i\sqrt3)^6+(1-i\sqrt3)^6$ (ej. 45).</p>
<div class="step">$1+i\sqrt3=2_{\pi/3}$ y $1-i\sqrt3=2_{-\pi/3}$.</div>
<div class="step">Sextas potencias: $64_{2\pi}=64$ y $64_{-2\pi}=64$.</div>
<div class="step">Suma: $128$.</div></div>

<h2>6. Radicación: raíces n-ésimas</h2>
<div class="thm"><span class="label">Teorema</span><p>Todo complejo $w=R_\theta\ne0$ tiene exactamente $n$ raíces $n$-ésimas distintas:</p>
$$z_k=\left(\sqrt[n]R\right)_{\frac{\theta+2k\pi}{n}},\qquad k=0,1,\dots,n-1.$$</div>
<div class="demo"><p>Buscamos $z=r_\alpha$ con $z^n=w$: $(r^n)_{n\alpha}=R_\theta$. Igualdad en polar: $r^n=R$ y $n\alpha=\theta+2k\pi$. Para $k=n$ el ángulo vuelve a coincidir con el de $k=0$ (dio una vuelta completa), por eso solo hay $n$.</p></div>
<ul><li>Las $n$ raíces forman un <strong>polígono regular</strong> de $n$ lados centrado en el origen.</li>
<li>Las raíces $n$-ésimas de la unidad son $e^{2k\pi i/n}$; suman 0 y su producto vale $(-1)^{n+1}$.</li></ul>
<div class="num" data-a="3"><p>¿Cuántas de las raíces sextas de 1 tienen parte real positiva?</p>
<div class="why"><p>Argumentos $0,\frac\pi3,\frac{2\pi}3,\pi,\frac{4\pi}3,\frac{5\pi}3$. Coseno positivo para $0$, $\frac\pi3$ y $\frac{5\pi}3$: son 3.</p></div></div>

<h2>7. Exponencial y logaritmo complejos</h2>
<p>$e^{a+bi}=e^a(\cos b+i\sin b)$: módulo $e^a$ y argumento $b$. Es periódica de periodo $2\pi i$. Despejando de Euler:</p>
<div class="formula">$$\cos\alpha=\frac{e^{i\alpha}+e^{-i\alpha}}2\qquad \sin\alpha=\frac{e^{i\alpha}-e^{-i\alpha}}{2i}\qquad e^{i\pi}+1=0$$</div>

<h2>8. Polinomios: descomposición en factores</h2>
<div class="thm"><span class="label">Teorema fundamental del álgebra</span><p>Todo polinomio de grado $n\ge1$ con coeficientes complejos tiene $n$ raíces en $\mathbb C$ (contadas con multiplicidad) y se factoriza como $p(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n)$.</p></div>
<div class="thm"><span class="label">Coeficientes reales</span><p>Si $p$ tiene coeficientes reales y $z_0$ es raíz, también lo es $\bar z_0$ (con la misma multiplicidad).</p></div>
<div class="demo"><p>Si $p(z_0)=0$, conjugando y usando que los coeficientes son reales: $p(\bar z_0)=\overline{p(z_0)}=0$.</p></div>
<p>Consecuencia: un polinomio real de grado impar tiene al menos una raíz real. Y en $\mathbb R$ se factoriza en factores de grado 1 (raíces reales) y de grado 2 sin raíces reales (parejas conjugadas):</p>
<div class="formula">$$(z-w)(z-\bar w)=z^2-2\,\text{Re}(w)\,z+|w|^2$$</div>
<p>Los guiones distinguen cuatro casos al descomponer: raíces reales simples, reales múltiples, complejas simples y complejas múltiples (este último no se usa en el curso). Esto es lo que después se necesita para integrar funciones racionales.</p>
<h3>Relaciones de Cardano-Vieta</h3>
<p>Para $z^n+a_{n-1}z^{n-1}+\dots+a_1z+a_0$ con raíces $z_1,\dots,z_n$: $\sum z_i=-a_{n-1}$ y $\prod z_i=(-1)^na_0$.</p>
<div class="steps"><p>Sabiendo que $z=2$ es raíz de $z^3-8z^2+30z-36=0$, resuélvela y descompón en reales (ej. 50).</p>
<div class="step">Ruffini con 2: cociente $z^2-6z+18$.</div>
<div class="step">$z=\frac{6\pm\sqrt{36-72}}2=3\pm3i$.</div>
<div class="step">$z^3-8z^2+30z-36=(z-2)(z^2-6z+18)$; raíces $2$, $3+3i$, $3-3i$.</div></div>
<div class="tf" data-a="v"><p>Un polinomio de grado 5 con coeficientes reales tiene al menos una raíz real.</p>
<div class="why"><p>Las no reales van por parejas; con 5 raíces, al menos una queda sin pareja y debe ser real.</p></div></div>

<h2>9. Resumen de distancias y polígonos</h2>
<ul><li>Distancia entre $z$ y $w$: $|z-w|$.</li>
<li>Argumento de $\frac{z_1-z_0}{z_2-z_0}$: ángulo que forman los segmentos $z_0z_1$ y $z_0z_2$ (útil para triángulos y polígonos de los ej. 68–70).</li>
<li>Los vértices de un polígono regular de $n$ lados con centro $c$ y un vértice $v$ son $c+(v-c)e^{2k\pi i/n}$.</li></ul>
`,

/* ================================================================== */
funciones: String.raw`
<h2>1. Definición, dominio y recorrido</h2>
<div class="def"><span class="label">Función real de variable real</span><p>Una regla $f$ que asigna a cada $x$ de un conjunto $D\subset\mathbb R$ <strong>un único</strong> número $f(x)$. $D$ es el <strong>dominio</strong> y $\text{Im}(f)=\{f(x):x\in D\}$ el <strong>recorrido</strong> o imagen.</p></div>
<p>Si no se dice nada, el dominio es el mayor conjunto donde la fórmula tiene sentido (ver la tabla de condiciones del resumen).</p>
<h3>Cómo calcular el recorrido</h3>
<ol><li>Despejar $x$ en $y=f(x)$ y ver para qué $y$ hay solución en el dominio.</li>
<li>Si $f$ es continua y monótona en un intervalo, la imagen es el intervalo entre los valores (o límites) en los extremos.</li>
<li>En general: estudiar crecimiento, máximos, mínimos y límites.</li></ol>
<div class="steps"><p>Recorrido de $f(x)=\frac{x}{x^2+1}$.</p>
<div class="step">$y(x^2+1)=x \Rightarrow yx^2-x+y=0$.</div>
<div class="step">Hay solución real en $x$ si $y=0$ (da $x=0$) o si $\Delta=1-4y^2\ge0 \iff -\frac12\le y\le\frac12$.</div>
<div class="step">$\text{Im}(f)=\left[-\frac12,\frac12\right]$.</div></div>

<h2>2. Formas de expresar una función</h2>
<ul><li><strong>Explícita</strong>: $y=f(x)$.</li>
<li><strong>Implícita</strong>: $F(x,y)=0$ (por ejemplo $x^2+y^2=1$, que no es una sola función).</li>
<li><strong>Paramétrica</strong>: $x=x(t)$, $y=y(t)$.</li>
<li><strong>En polares</strong>: $r=r(\alpha)$.</li>
<li><strong>A trozos</strong>: fórmulas distintas en cada intervalo (el valor absoluto es un ejemplo).</li></ul>

<h2>3. Simetría, periodicidad, monotonía y acotación</h2>
<div class="def"><span class="label">Definiciones</span>
<ul><li><strong>Par</strong>: $f(-x)=f(x)$ para todo $x$ del dominio (dominio simétrico). Gráfica simétrica respecto al eje $OY$.</li>
<li><strong>Impar</strong>: $f(-x)=-f(x)$. Simétrica respecto al origen. Si $0\in D$, entonces $f(0)=0$.</li>
<li><strong>Periódica de periodo $T$</strong>: $f(x+T)=f(x)$. El periodo fundamental es el menor $T\gt0$.</li>
<li><strong>Creciente</strong> en $I$: $x_1\lt x_2 \Rightarrow f(x_1)\le f(x_2)$; <strong>estrictamente</strong> si $\lt$.</li>
<li><strong>Acotada</strong>: existe $M$ con $|f(x)|\le M$ en todo el dominio.</li></ul></div>
<div class="tip"><span class="label">Paridad de operaciones</span><p>par·par = par; impar·impar = par; par·impar = impar. La composición con una función par es par. Toda función con dominio simétrico es suma de una par y una impar: $f(x)=\frac{f(x)+f(-x)}2+\frac{f(x)-f(-x)}2$.</p></div>
<div class="tip"><span class="label">Periodos</span><p>$\sin(kx)$ y $\cos(kx)$ tienen periodo $\frac{2\pi}{|k|}$; $\tan(kx)$, $\frac\pi{|k|}$. La suma de funciones de periodos $T_1$ y $T_2$ tiene como periodo el mínimo común múltiplo (si existe).</p></div>
<div class="mc"><p>$f(x)=\frac{\sin x}{x^2+4}$ es…</p><ul><li data-ok>impar</li><li>par</li><li>ni par ni impar</li><li>periódica</li></ul>
<div class="why"><p>Numerador impar, denominador par: cociente impar. $f(-x)=\frac{-\sin x}{x^2+4}=-f(x)$.</p></div></div>

<h2>4. Operaciones y composición</h2>
<ul><li>$(f\pm g)(x)$, $(fg)(x)$: dominio $D_f\cap D_g$. $\left(\frac fg\right)(x)$: además $g(x)\ne0$.</li>
<li>$(g\circ f)(x)=g(f(x))$: dominio $\{x\in D_f: f(x)\in D_g\}$.</li></ul>
<div class="steps"><p>$f(x)=\sqrt x$, $g(x)=x-4$. Calcula $f\circ g$ y $g\circ f$ con sus dominios.</p>
<div class="step">$(f\circ g)(x)=\sqrt{x-4}$, dominio $[4,\infty)$.</div>
<div class="step">$(g\circ f)(x)=\sqrt x-4$, dominio $[0,\infty)$.</div>
<div class="step">Son distintas: la composición no es conmutativa.</div></div>

<h2>5. Función inversa</h2>
<div class="def"><span class="label">Inyectiva e inversa</span><p>$f$ es <strong>inyectiva</strong> si $f(x_1)=f(x_2)\Rightarrow x_1=x_2$ (cada valor se alcanza una sola vez; toda recta horizontal corta la gráfica como mucho una vez). Entonces existe $f^{-1}:\text{Im}(f)\to D$ con $f^{-1}(f(x))=x$ y $f(f^{-1}(y))=y$.</p></div>
<ul><li>Toda función estrictamente monótona es inyectiva.</li>
<li>Si no es inyectiva, se puede <strong>restringir</strong> el dominio: así se definen $\arcsin$ (con $\sin$ en $[-\frac\pi2,\frac\pi2]$), $\arccos$ ($[0,\pi]$), $\arctan$ ($(-\frac\pi2,\frac\pi2)$), $\sqrt x$ ($x^2$ en $[0,\infty)$) y $\text{argcosh}$.</li>
<li>La gráfica de $f^{-1}$ es la simétrica respecto a $y=x$.</li></ul>
<div class="warn"><span class="label">Notación</span><p>$f^{-1}(x)$ es la inversa por composición, no $\frac1{f(x)}$. Por eso $\sin^{-1}x$ significa $\arcsin x$, no $\frac1{\sin x}$.</p></div>

<h2>6. Funciones elementales</h2>
<h3>Potencias y polinomios</h3>
<p>$x^n$ con $n$ par: par, mínimo en 0. Con $n$ impar: impar, creciente. $x^{1/n}=\sqrt[n]x$: dominio $[0,\infty)$ si $n$ es par, $\mathbb R$ si es impar.</p>
<h3>Exponencial $a^x$ ($a\gt0$, $a\ne1$)</h3>
<ul><li>Dominio $\mathbb R$, imagen $(0,\infty)$, $a^0=1$.</li>
<li>Creciente si $a\gt1$, decreciente si $0\lt a\lt1$.</li>
<li>$a^{x+y}=a^xa^y$, $(a^x)^y=a^{xy}$, $a^{-x}=\frac1{a^x}$.</li>
<li>Si $a\gt1$: $\lim_{x\to\infty}a^x=\infty$, $\lim_{x\to-\infty}a^x=0$ (asíntota $y=0$).</li></ul>
<h3>Logaritmo $\log_ax$</h3>
<p>Inversa de $a^x$: $\log_ax=y\iff a^y=x$. Dominio $(0,\infty)$, imagen $\mathbb R$, $\log_a1=0$, $\log_aa=1$.</p>
<div class="formula">$$\log_a(xy)=\log_ax+\log_ay\qquad \log_a\frac xy=\log_ax-\log_ay\qquad \log_a(x^p)=p\log_ax\qquad \log_ax=\frac{\ln x}{\ln a}$$</div>
<div class="warn"><span class="label">Ecuaciones con logaritmos</span><p>Al usar $\ln(x-1)+\ln(x+1)=\ln3 \Rightarrow (x-1)(x+1)=3$ pueden aparecer soluciones falsas: comprueba siempre que estén en el dominio. Aquí $x=\pm2$, pero solo vale $x=2$.</p></div>

<h3>Trigonométricas</h3>
<p>En la circunferencia de radio 1, el punto de ángulo $\alpha$ es $(\cos\alpha,\sin\alpha)$, y $\tan\alpha=\frac{\sin\alpha}{\cos\alpha}$. Además $\sec=\frac1{\cos}$, $\csc=\frac1{\sin}$, $\cot=\frac1{\tan}$.</p>
<table>
<tr><th>Función</th><th>Dominio</th><th>Imagen</th><th>Periodo</th><th>Paridad</th></tr>
<tr><td>$\sin$</td><td>$\mathbb R$</td><td>$[-1,1]$</td><td>$2\pi$</td><td>impar</td></tr>
<tr><td>$\cos$</td><td>$\mathbb R$</td><td>$[-1,1]$</td><td>$2\pi$</td><td>par</td></tr>
<tr><td>$\tan$</td><td>$x\ne\frac\pi2+k\pi$</td><td>$\mathbb R$</td><td>$\pi$</td><td>impar</td></tr>
</table>
<h4>Identidades (las del resumen teórico del libro)</h4>
<div class="formula">$$\sin^2\alpha+\cos^2\alpha=1\qquad 1+\tan^2\alpha=\sec^2\alpha\qquad 1+\cot^2\alpha=\csc^2\alpha$$
$$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta\qquad \cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta$$
$$\tan(\alpha\pm\beta)=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}$$
$$\sin2\alpha=2\sin\alpha\cos\alpha\qquad \cos2\alpha=\cos^2\alpha-\sin^2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1$$
$$\sin^2\frac\alpha2=\frac{1-\cos\alpha}2\qquad \cos^2\frac\alpha2=\frac{1+\cos\alpha}2\qquad \tan\frac\alpha2=\pm\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}$$
$$\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}2\cos\frac{\alpha-\beta}2\qquad \cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}2\cos\frac{\alpha-\beta}2$$
$$\sin\alpha\cos\beta=\tfrac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)]\qquad \sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$$</div>
<h4>Ecuaciones trigonométricas</h4>
<p>No olvides todas las soluciones: $\sin x=a\iff x=\arcsin a+2k\pi$ o $x=\pi-\arcsin a+2k\pi$; $\cos x=a\iff x=\pm\arccos a+2k\pi$; $\tan x=a\iff x=\arctan a+k\pi$.</p>
<div class="num" data-a="2"><p>¿Cuántas soluciones tiene $\sin x=\frac12$ en $[0,2\pi)$?</p>
<div class="why"><p>$x=\frac\pi6$ y $x=\pi-\frac\pi6=\frac{5\pi}6$.</p></div></div>
<h4>Inversas trigonométricas</h4>
<ul><li>$\arcsin:[-1,1]\to[-\frac\pi2,\frac\pi2]$, creciente, impar.</li>
<li>$\arccos:[-1,1]\to[0,\pi]$, decreciente. Relación: $\arcsin x+\arccos x=\frac\pi2$.</li>
<li>$\arctan:\mathbb R\to(-\frac\pi2,\frac\pi2)$, creciente, impar, asíntotas $y=\pm\frac\pi2$. $\arctan x+\arctan\frac1x=\frac\pi2$ si $x\gt0$.</li></ul>

<h3>Hiperbólicas</h3>
<div class="formula">$$\sinh x=\frac{e^x-e^{-x}}2\quad \cosh x=\frac{e^x+e^{-x}}2\quad \tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}}\quad \text{sech}=\tfrac1{\cosh},\ \text{csch}=\tfrac1{\sinh},\ \coth=\tfrac1{\tanh}$$</div>
<table>
<tr><th></th><th>Dominio</th><th>Imagen</th><th>Comportamiento</th></tr>
<tr><td>$\sinh$</td><td>$\mathbb R$</td><td>$\mathbb R$</td><td>impar, creciente</td></tr>
<tr><td>$\cosh$</td><td>$\mathbb R$</td><td>$[1,\infty)$</td><td>par, mínimo en 0 (catenaria)</td></tr>
<tr><td>$\tanh$</td><td>$\mathbb R$</td><td>$(-1,1)$</td><td>impar, creciente, asíntotas $y=\pm1$</td></tr>
</table>
<div class="formula">$$\cosh^2x-\sinh^2x=1\qquad 1-\tanh^2x=\text{sech}^2x\qquad \coth^2x-1=\text{csch}^2x$$
$$\sinh(a\pm b)=\sinh a\cosh b\pm\cosh a\sinh b\qquad \cosh(a\pm b)=\cosh a\cosh b\pm\sinh a\sinh b$$
$$\sinh2a=2\sinh a\cosh a\qquad \cosh2a=\cosh^2a+\sinh^2a=1+2\sinh^2a=2\cosh^2a-1$$
$$\cosh x+\sinh x=e^x\qquad \cosh x-\sinh x=e^{-x}$$</div>
<div class="tip"><span class="label">Regla de Osborn</span><p>Una identidad trigonométrica se convierte en hiperbólica cambiando el signo de cada producto de dos senos: $\cos^2+\sin^2=1$ pasa a $\cosh^2-\sinh^2=1$.</p></div>
<h4>Inversas hiperbólicas</h4>
<div class="formula">$$\text{argsinh}\,x=\ln\left(x+\sqrt{x^2+1}\right),\ x\in\mathbb R\qquad \text{argcosh}\,x=\ln\left(x+\sqrt{x^2-1}\right),\ x\ge1$$
$$\text{argtanh}\,x=\frac12\ln\frac{1+x}{1-x},\ |x|\lt1$$</div>
<p>(argcosh es la inversa de $\cosh$ restringido a $[0,\infty)$.) Todas se deducen igual: escribe $x=\cosh y$ con exponenciales, llama $u=e^y$ y resuelve la ecuación de segundo grado en $u$.</p>
<div class="num" data-a="0" data-show="0"><p>¿Cuánto vale $\text{argcosh}\,1$?</p><div class="why"><p>$\ln(1+0)=0$, porque $\cosh0=1$.</p></div></div>

<h2>7. Esbozo de gráficas a partir de funciones elementales</h2>
<table>
<tr><th>Transformación</th><th>Efecto sobre la gráfica de $f$</th></tr>
<tr><td>$f(x)+k$</td><td>sube $k$</td></tr>
<tr><td>$f(x-h)$</td><td>se desplaza $h$ a la derecha</td></tr>
<tr><td>$af(x)$</td><td>estira verticalmente ($a\gt1$) o comprime; si $a\lt0$ además refleja en $OX$</td></tr>
<tr><td>$f(ax)$</td><td>comprime horizontalmente por $a$ ($a\gt1$)</td></tr>
<tr><td>$-f(x)$ / $f(-x)$</td><td>simétrica respecto a $OX$ / $OY$</td></tr>
<tr><td>$|f(x)|$</td><td>lo que queda por debajo de $OX$ se refleja hacia arriba</td></tr>
<tr><td>$f(|x|)$</td><td>se borra la parte $x\lt0$ y se copia la de $x\gt0$ por simetría</td></tr>
<tr><td>$\frac1{f(x)}$</td><td>donde $f=0$ aparecen asíntotas verticales; donde $f$ es grande, $\frac1f$ es pequeña</td></tr>
</table>
<div class="mc"><p>La gráfica de $y=2-|x-1|$ es…</p><ul><li data-ok>una "V" invertida con vértice en $(1,2)$</li><li>una "V" con vértice en $(1,2)$</li><li>una "V" invertida con vértice en $(-1,2)$</li><li>una recta</li></ul>
<div class="why"><p>$|x|$ es una V con vértice en el origen. $|x-1|$ la mueve a $x=1$; el signo menos la invierte; el $+2$ la sube.</p></div></div>
`,

/* ================================================================== */
polares: String.raw`
<h2>1. Coordenadas polares</h2>
<p>Un punto del plano se describe por su distancia al origen $r$ y el ángulo $\alpha$ que forma con el semieje $OX$ positivo.</p>
<div class="formula">$$x=r\cos\alpha,\quad y=r\sin\alpha\qquad\qquad r=\sqrt{x^2+y^2},\quad \tan\alpha=\frac yx\ (\text{cuidado con el cuadrante})$$</div>
<p>Una misma posición tiene muchas descripciones: $(r,\alpha)$, $(r,\alpha+2\pi)$ y, si se admite $r\lt0$, $(-r,\alpha+\pi)$.</p>
<div class="key"><span class="label">Convenio de los guiones</span><p>En las curvas $r=r(\alpha)$ <strong>se admite $r$ negativo</strong>: el punto se dibuja en la dirección opuesta, $\alpha+\pi$. Lo recuerdan explícitamente en el Control 1 de 2025.</p></div>

<h2>2. De polares a cartesianas y al revés</h2>
<ul><li>Sustituye $r\cos\alpha=x$, $r\sin\alpha=y$, $r^2=x^2+y^2$. Si hace falta, multiplica primero por $r$ o $r^2$.</li>
<li>De cartesianas a polares: sustituye $x$ e $y$ y simplifica (suele quedar una sola $r$).</li></ul>
<div class="steps"><p>Pasa $r=\frac{2\cos\alpha}{\cos2\alpha}$ a cartesianas (Control 1, 2024).</p>
<div class="step">$r\cos2\alpha=2\cos\alpha$. Multiplicamos por $r$: $r^2\cos2\alpha=2r\cos\alpha$.</div>
<div class="step">$r^2(\cos^2\alpha-\sin^2\alpha)=x^2-y^2$, así que $x^2-y^2=2x$.</div>
<div class="step">Completando cuadrados: $(x-1)^2-y^2=1$. Hipérbola equilátera de centro $(1,0)$.</div></div>

<h2>3. Curvas polares típicas</h2>
<table>
<tr><th>Ecuación</th><th>Curva</th></tr>
<tr><td>$r=a$</td><td>Circunferencia de centro el origen</td></tr>
<tr><td>$\alpha=\alpha_0$</td><td>Recta por el origen</td></tr>
<tr><td>$r=2a\cos\alpha$ / $r=2a\sin\alpha$</td><td>Circunferencia de radio $a$ que pasa por el origen, centro $(a,0)$ / $(0,a)$</td></tr>
<tr><td>$r=\frac{d}{\cos\alpha}$</td><td>Recta vertical $x=d$</td></tr>
<tr><td>$r=a(1\pm\cos\alpha)$</td><td>Cardioide</td></tr>
<tr><td>$r=a+b\cos\alpha$</td><td>Caracol de Pascal (con lazo interior si $b\gt a$)</td></tr>
<tr><td>$r=a\cos(n\alpha)$, $r=a\sin(n\alpha)$</td><td>Rosa: $n$ pétalos si $n$ es impar, $2n$ si es par</td></tr>
<tr><td>$r^2=a^2\cos2\alpha$, $r^2=a^2\sin2\alpha$</td><td>Lemniscata (figura de ocho)</td></tr>
<tr><td>$r=a\alpha$</td><td>Espiral de Arquímedes</td></tr>
<tr><td>$r=\frac{p}{1-e\cos\alpha}$</td><td>Cónica con foco en el origen: elipse $e\lt1$, parábola $e=1$, hipérbola $e\gt1$</td></tr>
</table>
<div class="num" data-a="4"><p>¿Cuántos pétalos tiene la rosa $r=\cos2\alpha$?</p><div class="why"><p>$n=2$ es par: $2n=4$ pétalos.</p></div></div>

<h3>Cómo dibujar una curva polar paso a paso</h3>
<ol><li><strong>Simetrías</strong>: si cambiando $\alpha\to-\alpha$ queda igual, simétrica respecto a $OX$; si $\alpha\to\pi-\alpha$, respecto a $OY$; si $r\to-r$ (o $\alpha\to\alpha+\pi$), respecto al origen.</li>
<li><strong>Periodo</strong>: en qué intervalo de $\alpha$ basta dibujarla.</li>
<li><strong>Tabla</strong> de valores con ángulos notables; marca dónde $r=0$ (la curva pasa por el origen con tangente en esa dirección) y dónde $r$ es máximo.</li>
<li>Para $r^2=f(\alpha)$, solo existe donde $f(\alpha)\ge0$.</li></ol>
<div class="steps"><p>Dibuja $r=1+\cos\alpha$.</p>
<div class="step">Simétrica respecto a $OX$ (coseno par). Basta $\alpha\in[0,\pi]$.</div>
<div class="step">$\alpha=0$: $r=2$; $\frac\pi2$: $r=1$; $\frac{2\pi}3$: $r=\frac12$; $\pi$: $r=0$ (pasa por el origen).</div>
<div class="step">Une los puntos y refleja: es un cardioide con "pico" en el origen apuntando a la izquierda.</div></div>

<h2>4. Cónicas</h2>
<p>Son las curvas que se obtienen cortando un cono con un plano. Se definen como lugares geométricos:</p>
<div class="def"><span class="label">Elipse</span><p>Puntos cuya <strong>suma</strong> de distancias a dos focos $F_1,F_2$ es constante, $2a$.</p>
<ul><li>Semieje mayor $a$, semieje menor $b$, semidistancia focal $c$, con $a^2=b^2+c^2$.</li>
<li>Ecuación reducida (centro $(x_0,y_0)$, eje mayor horizontal): $\frac{(x-x_0)^2}{a^2}+\frac{(y-y_0)^2}{b^2}=1$; focos $(x_0\pm c,y_0)$; vértices $(x_0\pm a,y_0)$, $(x_0,y_0\pm b)$.</li>
<li>Excentricidad $e=\frac ca\in[0,1)$. Si $a=b$, circunferencia ($e=0$).</li></ul></div>
<div class="def"><span class="label">Hipérbola</span><p>Puntos con el <strong>valor absoluto de la diferencia</strong> de distancias a los focos constante, $2a$.</p>
<ul><li>$c^2=a^2+b^2$ ($a$ semieje real, $b$ imaginario).</li>
<li>$\frac{(x-x_0)^2}{a^2}-\frac{(y-y_0)^2}{b^2}=1$; vértices $(x_0\pm a,y_0)$; asíntotas $y-y_0=\pm\frac ba(x-x_0)$.</li>
<li>$e=\frac ca\gt1$. Si $a=b$, equilátera (asíntotas perpendiculares).</li></ul></div>
<div class="def"><span class="label">Parábola</span><p>Puntos que <strong>equidistan</strong> de un punto (foco) y de una recta (directriz).</p>
<ul><li>$(y-y_0)^2=2p(x-x_0)$: vértice $(x_0,y_0)$, eje horizontal, foco a distancia $\frac p2$ del vértice, directriz al otro lado a la misma distancia.</li>
<li>$(x-x_0)^2=2p(y-y_0)$: eje vertical.</li></ul></div>
<div class="key"><span class="label">Identificar una cónica sin término en $xy$</span>
<ol><li>Agrupa las $x$ y las $y$ y completa cuadrados: $x^2+bx=\left(x+\frac b2\right)^2-\frac{b^2}4$.</li>
<li>Pasa la constante a la derecha y divide para que quede 1.</li>
<li>Lee el tipo y los elementos. Si a la derecha queda 0 o un negativo, es un caso degenerado (un punto, dos rectas, o vacía).</li></ol></div>
<div class="num" data-a="1.25" data-tol="0.01" data-show="5/4 = 1,25"><p>Excentricidad de la hipérbola $\frac{x^2}{16}-\frac{y^2}9=1$.</p>
<div class="why"><p>$c=\sqrt{16+9}=5$, $a=4$, $e=\frac54$.</p></div></div>
<div class="tf" data-a="v"><p>La ecuación $x^2+y^2-4x+6y+13=0$ representa un único punto.</p>
<div class="why"><p>$(x-2)^2+(y+3)^2=4+9-13=0$: solo el punto $(2,-3)$. Es una "circunferencia de radio 0".</p></div></div>
`

};
