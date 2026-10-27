SUBJECTS.push({
  id: "calculo",
  name: "Cálculo I",
  short: "Cálculo",
  desc: "Reales, complejos, funciones, polares, límites, derivadas, Taylor, integrales y series.",
  intro: "El parcial cubre sobre todo los temas 1 a 7: complejos, dominios e inversas, hiperbólicas, polares, límites, derivadas (por definición e implícitas) y optimización. Empieza por ahí si vas justo de tiempo.",
  sources: "guiones de Càlcul I 2026-27, libro de problemas (capítulos 1-3, tu PDF escaneado), cónicas, controles y parciales 2024 y 2025.",
  topics: [

/* ============================================================ */
{ id: "reales", title: "Números reales, desigualdades y valor absoluto",
  desc: "Inecuaciones, valor absoluto, supremo e ínfimo: la base de todos los dominios.",
  html: String.raw`
<h2>Por qué importa</h2>
<p>Casi todos los ejercicios de dominio acaban en una inecuación. Si resuelves inecuaciones con soltura, la mitad del problema 1 de cualquier parcial ya está hecha.</p>

<h2>Reglas de las desigualdades</h2>
<ul>
<li>Sumar o restar el mismo número a los dos lados <strong>no cambia</strong> el sentido.</li>
<li>Multiplicar o dividir por un número <strong>positivo</strong> no lo cambia; por uno <strong>negativo</strong>, <strong>lo invierte</strong>: $-3x \le 6 \iff x \ge -2$.</li>
<li>Invertir: si $0 \lt a \lt b$ entonces $\frac1a \gt \frac1b$.</li>
</ul>
<div class="warn"><span class="label">Error típico</span>
<p>Nunca multipliques una inecuación por algo que contenga $x$ (por ejemplo, por $x+1$) sin saber su signo. En las inecuaciones racionales, pásalo todo a un lado y estudia el signo con una tabla.</p></div>

<h3>Método de la tabla de signos</h3>
<div class="steps">
<p>Resuelve $\dfrac{x-1}{x+1} \gt 0$.</p>
<div class="step">Puntos críticos: donde se anula el numerador ($x=1$) y el denominador ($x=-1$). Parten la recta en tres trozos.</div>
<div class="step">Signo en cada trozo (prueba un valor): en $(-\infty,-1)$, con $x=-2$: $\frac{-3}{-1}\gt 0$ ✔. En $(-1,1)$, con $x=0$: $\frac{-1}{1}\lt 0$ ✘. En $(1,\infty)$, con $x=2$: $\frac13\gt0$ ✔.</div>
<div class="step">Los extremos: $x=1$ da 0 (no vale, pide $\gt 0$) y $x=-1$ anula el denominador (nunca vale). Solución: $(-\infty,-1)\cup(1,\infty)$.</div>
</div>

<h2>Valor absoluto</h2>
<div class="def"><span class="label">Definición</span>
$$|x| = \begin{cases} x & \text{si } x \ge 0\\ -x & \text{si } x \lt 0\end{cases} \qquad |x| = \sqrt{x^2}\qquad |x-a| = \text{distancia de } x \text{ a } a$$</div>
<p>Las tres equivalencias que más se usan (con $c \gt 0$):</p>
<div class="formula">
$$|x| \le c \iff -c \le x \le c \qquad\qquad |x| \ge c \iff x\le -c \ \text{ o } \ x \ge c$$
$$|a| \lt |b| \iff a^2 \lt b^2$$
</div>
<p>Desigualdad triangular: $|x+y| \le |x|+|y|$ y también $\big||x|-|y|\big| \le |x-y|$.</p>

<div class="steps">
<p>Resuelve $|2-3x| \le 10$.</p>
<div class="step">Por la primera equivalencia: $-10 \le 2-3x \le 10$.</div>
<div class="step">Restamos 2: $-12 \le -3x \le 8$.</div>
<div class="step">Dividimos entre $-3$ (¡se giran las desigualdades!): $4 \ge x \ge -\frac83$. Solución: $\left[-\frac83,\ 4\right]$.</div>
</div>

<div class="tf" data-a="f"><p>$|x-3| \lt 2$ es equivalente a $x \lt 5$.</p>
<div class="why"><p>Falta una parte: $|x-3|\lt 2 \iff -2 \lt x-3 \lt 2 \iff 1 \lt x \lt 5$. Son los puntos a distancia menor que 2 del 3.</p></div></div>

<div class="mc"><p>¿Cuál es la solución de $|x-1| \lt |x+2|$?</p>
<ul><li data-ok>$x \gt -\frac12$</li><li>$x \lt -\frac12$</li><li>$-2 \lt x \lt 1$</li><li>Todos los reales</li></ul>
<div class="why"><p>Elevamos al cuadrado (ambos lados son $\ge 0$): $x^2-2x+1 \lt x^2+4x+4 \iff -6x \lt 3 \iff x \gt -\frac12$. Geométricamente: los puntos más cerca de 1 que de $-2$; el punto medio es $-\frac12$.</p></div></div>

<h2>Cuando hay que separar casos</h2>
<p>Si en la expresión aparecen varios valores absolutos, o un valor absoluto junto a otros términos, quita las barras por trozos: busca dónde se anula cada interior y escribe la expresión en cada intervalo. Así se hizo el problema 1 del parcial 2025:</p>
<div class="formula">$$\arcsin\big(|2x-6|-x\big) = \begin{cases}\arcsin(6-3x) & x \le 3\\ \arcsin(x-6) & x \gt 3\end{cases}$$</div>

<h2>Supremo, ínfimo, máximo y mínimo</h2>
<ul>
<li><strong>Cota superior</strong> de $A$: un número mayor o igual que todos los elementos de $A$.</li>
<li><strong>Supremo</strong>: la menor de las cotas superiores. Si además pertenece a $A$, es el <strong>máximo</strong>.</li>
<li>Igual con ínfimo (mayor cota inferior) y mínimo.</li>
</ul>
<div class="tip"><span class="label">Truco</span><p>El supremo puede no estar en el conjunto: $A=(0,1)$ tiene supremo 1 pero no tiene máximo. Para conjuntos como $\{1-\frac1n : n\in\mathbb N\}$, escribe los primeros términos: $0, \frac12, \frac23, \dots$ crece hacia 1, así que ínfimo = mínimo = 0 y supremo = 1 sin máximo.</p></div>

<div class="num" data-a="1.618034" data-tol="0.002" data-show="(1+√5)/2 ≈ 1,618"><p>Sea $A=\{x\in\mathbb R : x^2-x-1 \lt 0\}$. ¿Cuánto vale $\sup A$? (da un decimal)</p>
<div class="why"><p>Raíces de $x^2-x-1$: $x=\frac{1\pm\sqrt5}{2}$. La parábola es negativa entre ellas, así que $A=\left(\frac{1-\sqrt5}2,\frac{1+\sqrt5}2\right)$ y $\sup A = \frac{1+\sqrt5}{2}\approx 1{,}618$ (no es máximo).</p></div></div>

<h2>Problemas del libro</h2>
<div class="prob"><div class="enun"><p>Resuelve $\dfrac{2}{x} + \dfrac{5}{3-x} \le 0$.</p><p class="src">Libro de problemas, cap. 1, ej. 9(c)</p></div>
<div class="hint"><p>Une las fracciones: denominador común $x(3-x)$.</p></div>
<div class="sol"><p>$\frac{2(3-x)+5x}{x(3-x)} = \frac{3x+6}{x(3-x)} \le 0$. Puntos críticos: $-2$, $0$, $3$.</p>
<p>Tabla: en $(-\infty,-2)$ con $x=-3$: $\frac{-3}{(-3)(6)}\gt0$. En $(-2,0)$ con $x=-1$: $\frac{3}{(-1)(4)}\lt0$ ✔. En $(0,3)$ con $x=1$: $\frac{9}{2}\gt 0$. En $(3,\infty)$ con $x=4$: $\frac{18}{4\cdot(-1)}\lt0$ ✔.</p>
<p>$x=-2$ anula el numerador (vale, porque es $\le$); $0$ y $3$ no. Solución: $[-2,0)\cup(3,\infty)$.</p></div></div>

<div class="prob"><div class="enun"><p>Resuelve $|x^2-5x+3| \le 3$.</p><p class="src">Libro de problemas, cap. 1, ej. 22(d)</p></div>
<div class="hint"><p>Es $-3 \le x^2-5x+3 \le 3$: dos inecuaciones de segundo grado a la vez.</p></div>
<div class="sol"><p>Derecha: $x^2-5x \le 0 \iff x(x-5)\le0 \iff x\in[0,5]$.</p>
<p>Izquierda: $x^2-5x+6 \ge 0 \iff (x-2)(x-3)\ge0 \iff x\le 2$ o $x\ge3$.</p>
<p>Intersección: $[0,2]\cup[3,5]$.</p></div></div>

<div class="prob"><div class="enun"><p>Una refinería estima que su producción diaria $p$ (en barriles) cumple $|p-225000| \le 125000$. ¿Producción máxima y mínima?</p><p class="src">Libro de problemas, cap. 1, ej. 17</p></div>
<div class="sol"><p>$-125000 \le p-225000 \le 125000 \iff 100000 \le p \le 350000$. Mínima 100 000 barriles, máxima 350 000.</p></div></div>
`},

/* ============================================================ */
{ id: "complejos", title: "Números complejos",
  desc: "Forma binómica, polar y exponencial, potencias, raíces y polinomios. Sale seguro.",
  html: String.raw`
<h2>Las tres formas de escribir un complejo</h2>
<p>Un complejo es un punto del plano. Lo puedes describir con coordenadas cartesianas (binómica) o con distancia y ángulo (polar).</p>
<div class="formula">
$$z = a+bi \quad=\quad r_\alpha \quad=\quad r(\cos\alpha + i\sin\alpha) \quad=\quad r\,e^{i\alpha}$$
$$r=|z|=\sqrt{a^2+b^2},\qquad \cos\alpha = \tfrac ar,\ \ \sin\alpha=\tfrac br,\qquad a=r\cos\alpha,\ b=r\sin\alpha$$
</div>
<div class="warn"><span class="label">Cuidado con el argumento</span>
<p>$\arctan\frac ba$ solo da ángulos entre $-\frac\pi2$ y $\frac\pi2$. Dibuja siempre el punto para saber el cuadrante. Ejemplo: $z=-1-i$ está en el tercer cuadrante, así que su argumento es $\frac{5\pi}4$ (o $-\frac{3\pi}4$), no $\frac\pi4$.</p></div>

<h3>Valores que conviene saber de memoria</h3>
<table><tr><th>Ángulo</th><th>$0$</th><th>$\pi/6$</th><th>$\pi/4$</th><th>$\pi/3$</th><th>$\pi/2$</th></tr>
<tr><td>$\cos$</td><td>1</td><td>$\frac{\sqrt3}2$</td><td>$\frac{\sqrt2}2$</td><td>$\frac12$</td><td>0</td></tr>
<tr><td>$\sin$</td><td>0</td><td>$\frac12$</td><td>$\frac{\sqrt2}2$</td><td>$\frac{\sqrt3}2$</td><td>1</td></tr></table>

<div class="mc"><p>¿Cuál es la forma polar de $z=1+i\sqrt3$?</p>
<ul><li data-ok>$2_{\pi/3}$</li><li>$2_{\pi/6}$</li><li>$4_{\pi/3}$</li><li>$\sqrt3_{\pi/3}$</li></ul>
<div class="why"><p>$r=\sqrt{1+3}=2$. $\cos\alpha=\frac12$ y $\sin\alpha=\frac{\sqrt3}2$, primer cuadrante: $\alpha=\frac\pi3$.</p></div></div>

<h2>Operaciones: elige la forma adecuada</h2>
<ul>
<li><strong>Sumar/restar</strong>: en binómica.</li>
<li><strong>Dividir en binómica</strong>: multiplica arriba y abajo por el conjugado del denominador.</li>
<li><strong>Multiplicar, dividir, potencias, raíces</strong>: en polar es mucho más cómodo.</li>
</ul>
<div class="formula">
$$r_\alpha\cdot s_\beta=(rs)_{\alpha+\beta}\qquad \frac{r_\alpha}{s_\beta}=\left(\tfrac rs\right)_{\alpha-\beta}\qquad (r_\alpha)^n = (r^n)_{n\alpha}\ \ \text{(De Moivre)}$$
$$\bar z = a-bi,\qquad z\,\bar z = |z|^2,\qquad z+\bar z = 2\,\text{Re}(z),\qquad \frac1z=\frac{\bar z}{|z|^2}$$
</div>

<div class="steps"><p>Calcula $\dfrac{2-3i}{1+i}$.</p>
<div class="step">Multiplicamos por el conjugado $1-i$: $\dfrac{(2-3i)(1-i)}{(1+i)(1-i)}$.</div>
<div class="step">Denominador: $1-i^2=2$. Numerador: $2-2i-3i+3i^2 = 2-5i-3 = -1-5i$.</div>
<div class="step">Resultado: $-\frac12-\frac52 i$.</div></div>

<div class="num" data-a="16"><p>Calcula $(1+i)^8$ (el resultado es real).</p>
<div class="why"><p>$1+i=\sqrt2_{\pi/4}$. Entonces $(1+i)^8=(\sqrt2)^8_{8\pi/4}=16_{2\pi}=16$.</p></div></div>

<h2>Fórmula de Euler</h2>
<div class="key"><span class="label">Idea clave</span>
<p>$e^{i\alpha}=\cos\alpha+i\sin\alpha$. De aquí salen $e^{i\pi}=-1$, $e^{2\pi i}=1$ y que $e^{i\alpha}$ es <strong>periódica de periodo $2\pi$</strong>. Despejando:</p>
$$\cos\alpha=\frac{e^{i\alpha}+e^{-i\alpha}}2,\qquad \sin\alpha=\frac{e^{i\alpha}-e^{-i\alpha}}{2i}$$
<p>Compara con $\cosh x=\frac{e^x+e^{-x}}2$: es el mismo patrón sin la $i$.</p></div>
<div class="tip"><span class="label">Truco para exponentes enormes</span>
<p>Para $e^{1000\pi i/3}$ resta múltiplos de $2\pi$: $\frac{1000\pi}3 = 332\pi+\frac{4\pi}3$, y $332\pi$ son vueltas completas, así que $e^{1000\pi i/3}=e^{4\pi i/3}$.</p></div>

<h2>Raíces n-ésimas</h2>
<div class="formula">$$\sqrt[n]{r_\alpha} = \left(\sqrt[n]{r}\right)_{\frac{\alpha+2k\pi}{n}},\qquad k=0,1,\dots,n-1$$</div>
<p>Hay exactamente $n$ raíces, todas en una circunferencia de radio $\sqrt[n]r$, repartidas como los vértices de un polígono regular de $n$ lados.</p>
<figure>
<svg viewBox="0 0 240 220" width="240" role="img" aria-label="Las tres raíces cúbicas de -8 en una circunferencia de radio 2">
<line x1="10" y1="110" x2="230" y2="110" class="fig-ink" stroke-width="1"/><line x1="120" y1="10" x2="120" y2="210" class="fig-ink" stroke-width="1"/>
<circle cx="120" cy="110" r="80" class="fig-c" stroke-width="1.5" stroke-dasharray="4 4"/>
<polygon points="160,40.7 40,110 160,179.3" class="fig-fill"/>
<polygon points="160,40.7 40,110 160,179.3" class="fig-c" stroke-width="1.5"/>
<circle cx="160" cy="40.7" r="5" fill="currentColor"/><circle cx="40" cy="110" r="5" fill="currentColor"/><circle cx="160" cy="179.3" r="5" fill="currentColor"/>
<text x="168" y="38" class="fig-text">1+i√3</text><text x="14" y="100" class="fig-text">−2</text><text x="168" y="192" class="fig-text">1−i√3</text>
</svg>
<figcaption>Raíces cúbicas de −8: triángulo equilátero en la circunferencia de radio 2.</figcaption></figure>

<div class="steps"><p>Calcula las raíces cúbicas de $-8$.</p>
<div class="step">$-8 = 8_\pi$. Módulo de las raíces: $\sqrt[3]8=2$.</div>
<div class="step">Argumentos: $\frac{\pi+2k\pi}3$ para $k=0,1,2$: $\frac\pi3,\ \pi,\ \frac{5\pi}3$.</div>
<div class="step">En binómica: $2_{\pi/3}=1+i\sqrt3$, $2_\pi=-2$, $2_{5\pi/3}=1-i\sqrt3$.</div></div>

<div class="tf" data-a="v"><p>La suma de las $n$ raíces $n$-ésimas de la unidad ($n\ge2$) vale 0.</p>
<div class="why"><p>Son las raíces de $z^n-1$. La suma de las raíces de un polinomio mónico es menos el coeficiente de $z^{n-1}$, que aquí es 0. Este truco resolvió el problema 1 del Control 1 de 2024: seis términos consecutivos de $e^{i\pi n/3}$ suman 0.</p></div></div>

<h2>Polinomios y ecuaciones</h2>
<ul>
<li><strong>Teorema fundamental del álgebra</strong>: un polinomio de grado $n$ tiene exactamente $n$ raíces complejas contando multiplicidades.</li>
<li>Si los coeficientes son <strong>reales</strong>, las raíces no reales van en parejas conjugadas: si $2-i$ es raíz, $2+i$ también.</li>
<li>Para factorizar en reales, agrupa cada pareja: $(z-w)(z-\bar w) = z^2-2\,\text{Re}(w)\,z+|w|^2$.</li>
<li>Vieta, para $z^n+a_{n-1}z^{n-1}+\dots+a_0$: suma de raíces $=-a_{n-1}$, producto $=(-1)^na_0$.</li>
</ul>
<div class="tf" data-a="f"><p>El polinomio $z^3-2z^2+z-2$ tiene coeficientes reales y una raíz es $i$, así que sus raíces son $i$, $-i$ y $-2$.</p>
<div class="why"><p>Las dos primeras son correctas (conjugadas), pero la tercera sale de $z^3-2z^2+z-2=(z^2+1)(z-2)$: es $z=2$. Con Vieta: $i+(-i)+r=2 \Rightarrow r=2$.</p></div></div>

<h3>Ecuaciones con $\bar z$ o $|z|$</h3>
<p>Dos estrategias: (1) escribir $z=x+iy$ e igualar partes real e imaginaria; (2) si te dan $|z|=1$, usar $\bar z = \frac1z$.</p>
<div class="steps"><p>Control 1, 2025: resuelve $z^2+\bar z^2 = 1$ con $|z|=1$.</p>
<div class="step">Como $|z|=1$, $\bar z = 1/z$. La ecuación queda $z^2+\frac1{z^2}=1$.</div>
<div class="step">Multiplicamos por $z^2$: $z^4-z^2+1=0$. Bicuadrada: $z^2=\frac{1\pm\sqrt{-3}}2 = \frac12\pm\frac{\sqrt3}2 i = 1_{\pm\pi/3}$.</div>
<div class="step">Raíces cuadradas: $1_{\pm\pi/6}$ y $1_{\pm\pi/6+\pi}$. En binómica: $\pm\frac{\sqrt3}2\pm\frac12 i$ (las cuatro combinaciones de signos).</div></div>

<div class="num" data-a="7.0711" data-tol="0.01" data-show="5√2 ≈ 7,071"><p>Calcula $|(3+4i)(1-i)|$.</p>
<div class="why"><p>El módulo de un producto es el producto de los módulos: $5\cdot\sqrt2\approx 7{,}071$.</p></div></div>

<h2>Problemas</h2>
<div class="prob"><div class="enun"><p>Calcula $\displaystyle\sum_{n=5}^{1002} e^{i\pi n/3}$ en forma binómica.</p><p class="src">Control 1, 2024</p></div>
<div class="hint"><p>Los términos se repiten cada 6 y seis consecutivos suman 0. ¿Cuántos términos hay y cuántos sobran?</p></div>
<div class="sol"><p>De $n=5$ a $n=1002$ hay $998$ términos. $998 = 6\cdot166+2$: 166 bloques que suman 0 y sobran 2 términos.</p>
<p>Si quitamos los bloques empezando por el principio, sobran los dos últimos, $n=1001$ y $n=1002$, que equivalen (mod 6) a $n=5$ y $n=6$:</p>
<p>$e^{5\pi i/3}+e^{2\pi i} = \left(\frac12-\frac{\sqrt3}2 i\right)+1 = \frac32-\frac{\sqrt3}2 i$.</p></div></div>

<div class="prob"><div class="enun"><p>Demuestra que $p(z)=z^{1000}+z^{500}+1$ es divisible entre $q(z)=z^2+z+1$.</p><p class="src">Parcial 2025, problema 5</p></div>
<div class="hint"><p>Basta ver que las raíces de $q$ son raíces de $p$. Las raíces de $q$ son $e^{\pm 2\pi i/3}$, que cumplen $\alpha^3=1$.</p></div>
<div class="sol"><p>Si $\alpha=e^{2\pi i/3}$, entonces $\alpha^3=1$. Reducimos exponentes módulo 3: $1000=3\cdot333+1$ y $500=3\cdot166+2$.</p>
<p>$p(\alpha)=\alpha^{1}+\alpha^{2}+1 = q(\alpha)=0$. Como $p$ tiene coeficientes reales, $\bar\alpha$ también es raíz. Las dos raíces de $q$ son raíces de $p$, luego $q$ divide a $p$.</p></div></div>

<div class="prob"><div class="enun"><p>Resuelve $z^4+16=0$ y descompón $z^4+16$ en factores reales.</p><p class="src">Libro de problemas, cap. 1, ej. 53(a)</p></div>
<div class="sol"><p>$z^4=-16=16_\pi$. Raíces: $2_{\frac{\pi+2k\pi}4}$: $2_{\pi/4},2_{3\pi/4},2_{5\pi/4},2_{7\pi/4}$, es decir $\pm\sqrt2\pm\sqrt2 i$.</p>
<p>Parejas conjugadas: $\sqrt2\pm\sqrt2 i$ dan $z^2-2\sqrt2 z+4$; $-\sqrt2\pm\sqrt2i$ dan $z^2+2\sqrt2z+4$.</p>
<p>$z^4+16=(z^2-2\sqrt2z+4)(z^2+2\sqrt2z+4)$.</p></div></div>

<div class="prob"><div class="enun"><p>¿Para qué valores reales $a,b$ la ecuación $z^2+2a\bar z+b=0$ tiene exactamente cuatro soluciones? Resuelve el caso $z^2-4\bar z+3=0$.</p><p class="src">Parcial 2024, problema 2</p></div>
<div class="hint"><p>Escribe $z=x+iy$. La parte imaginaria da $2y(x-a)=0$: dos casos, $y=0$ o $x=a$.</p></div>
<div class="sol"><p>Parte real: $x^2-y^2+2ax+b=0$. Parte imaginaria: $2xy-2ay=0 \iff y=0$ o $x=a$.</p>
<p>Si $y=0$: $x^2+2ax+b=0$, dos soluciones reales si $b\lt a^2$.</p>
<p>Si $x=a$: $3a^2-y^2+b=0 \Rightarrow y=\pm\sqrt{3a^2+b}$, dos soluciones no reales si $b\gt-3a^2$.</p>
<p>Cuatro soluciones si $-3a^2\lt b\lt a^2$ (la región entre dos parábolas).</p>
<p>Con $a=-2$, $b=3$: $z=1$, $z=3$, $z=-2\pm\sqrt{15}\,i$.</p></div></div>
`},

/* ============================================================ */
{ id: "funciones", title: "Funciones: dominio, inversa y funciones elementales",
  desc: "Dominios, composición, inversa, exponencial, logaritmo, trigonométricas e hiperbólicas.",
  html: String.raw`
<h2>Dominio: la lista de comprobación</h2>
<p>Para calcular un dominio, recorre la fórmula y anota una condición por cada pieza "peligrosa":</p>
<table>
<tr><th>Si aparece…</th><th>exige…</th></tr>
<tr><td>$\frac{A}{B}$</td><td>$B\ne0$</td></tr>
<tr><td>$\sqrt[\text{par}]{A}$</td><td>$A\ge0$</td></tr>
<tr><td>$\ln A$, $\log_b A$</td><td>$A\gt0$</td></tr>
<tr><td>$\arcsin A$, $\arccos A$</td><td>$-1\le A\le1$</td></tr>
<tr><td>$\tan A$</td><td>$A\ne\frac\pi2+k\pi$</td></tr>
<tr><td>$\text{argcosh}\,A$</td><td>$A\ge1$</td></tr>
<tr><td>$\text{argtanh}\,A$</td><td>$-1\lt A\lt1$</td></tr>
<tr><td>$A^B$ con $B$ variable</td><td>$A\gt0$</td></tr>
</table>
<p>El dominio es la <strong>intersección</strong> de todas las condiciones.</p>

<div class="steps"><p>Dominio de $f(x)=\ln\left(\sqrt{\dfrac{2x^2+6x+20}{x^2+9x+18}}-1\right)$ (Control 1, 2024).</p>
<div class="step">El logaritmo pide $\sqrt{\cdots}-1\gt0$, es decir $\sqrt{\cdots}\gt1$, que equivale a $\dfrac{2x^2+6x+20}{x^2+9x+18}\gt1$ (esto ya garantiza que la raíz existe).</div>
<div class="step">Pasamos el 1: $\dfrac{2x^2+6x+20-x^2-9x-18}{x^2+9x+18}=\dfrac{x^2-3x+2}{x^2+9x+18}=\dfrac{(x-1)(x-2)}{(x+3)(x+6)}\gt0$.</div>
<div class="step">Tabla de signos con puntos $-6,-3,1,2$: positivo en $(-\infty,-6)\cup(-3,1)\cup(2,\infty)$. Ese es el dominio.</div></div>

<div class="mc"><p>Dominio de $f(x)=\dfrac{\ln(x^2-5x+6)}{\sqrt{x-1}}$:</p>
<ul><li data-ok>$(1,2)\cup(3,\infty)$</li><li>$[1,2)\cup(3,\infty)$</li><li>$(2,3)$</li><li>$(1,\infty)$</li></ul>
<div class="why"><p>Raíz en el denominador: $x-1\gt0$. Logaritmo: $(x-2)(x-3)\gt0 \iff x\lt2$ o $x\gt3$. Intersección: $(1,2)\cup(3,\infty)$.</p></div></div>

<h2>Paridad, composición e inversa</h2>
<ul>
<li><strong>Par</strong>: $f(-x)=f(x)$ (simétrica respecto al eje $y$: $x^2$, $\cos x$, $\cosh x$).</li>
<li><strong>Impar</strong>: $f(-x)=-f(x)$ (simétrica respecto al origen: $x^3$, $\sin x$, $\sinh x$).</li>
<li><strong>Composición</strong>: $(g\circ f)(x)=g(f(x))$. En general $g\circ f\ne f\circ g$.</li>
</ul>
<div class="key"><span class="label">Inversa en cuatro pasos</span>
<ol><li>Comprueba que $f$ es inyectiva (por ejemplo, porque es estrictamente monótona: $f'\gt0$).</li>
<li>Escribe $y=f(x)$ y <strong>despeja $x$</strong>.</li>
<li>Intercambia los nombres: $f^{-1}(x)=\dots$</li>
<li>$\text{Dom}(f^{-1})=\text{Im}(f)$ e $\text{Im}(f^{-1})=\text{Dom}(f)$. ¡No es el dominio "natural" de la fórmula!</li></ol></div>

<div class="steps"><p>Inversa de $f(x)=\dfrac{2x+1}{x-3}$.</p>
<div class="step">$y(x-3)=2x+1 \Rightarrow yx-3y=2x+1 \Rightarrow x(y-2)=3y+1$.</div>
<div class="step">$x=\dfrac{3y+1}{y-2}$, así que $f^{-1}(x)=\dfrac{3x+1}{x-2}$.</div>
<div class="step">$\text{Dom}(f)=\mathbb R\setminus\{3\}$ y $\text{Im}(f)=\mathbb R\setminus\{2\}$ (el 2 es la asíntota horizontal). Por tanto $\text{Dom}(f^{-1})=\mathbb R\setminus\{2\}$.</div></div>

<div class="tf" data-a="v"><p>La gráfica de $f^{-1}$ es la simétrica de la gráfica de $f$ respecto de la recta $y=x$.</p>
<div class="why"><p>Si $(a,b)$ está en la gráfica de $f$, entonces $(b,a)$ está en la de $f^{-1}$: eso es reflejar en $y=x$.</p></div></div>

<h2>Exponencial y logaritmo</h2>
<div class="formula">$$e^{a+b}=e^ae^b\qquad \ln(ab)=\ln a+\ln b\qquad \ln(a^b)=b\ln a\qquad a^x=e^{x\ln a}\qquad \log_b a=\frac{\ln a}{\ln b}$$</div>
<p>$e^x$: dominio $\mathbb R$, imagen $(0,\infty)$, creciente. $\ln x$: dominio $(0,\infty)$, imagen $\mathbb R$, creciente.</p>
<div class="warn"><span class="label">Error típico</span><p>$\ln(a+b)\ne\ln a+\ln b$. Y $e^{2x}\le 2 \iff 2x\le\ln2$ funciona porque $\ln$ es creciente; con funciones decrecientes la desigualdad se giraría.</p></div>

<h2>Trigonométricas y sus inversas</h2>
<div class="formula">$$\sin^2x+\cos^2x=1\qquad 1+\tan^2x=\frac1{\cos^2x}\qquad \sin2x=2\sin x\cos x\qquad \cos2x=\cos^2x-\sin^2x$$
$$\cos^2x=\frac{1+\cos2x}2\qquad \sin^2x=\frac{1-\cos2x}2$$</div>
<table>
<tr><th>Función</th><th>Dominio</th><th>Imagen</th></tr>
<tr><td>$\arcsin x$</td><td>$[-1,1]$</td><td>$[-\frac\pi2,\frac\pi2]$</td></tr>
<tr><td>$\arccos x$</td><td>$[-1,1]$</td><td>$[0,\pi]$</td></tr>
<tr><td>$\arctan x$</td><td>$\mathbb R$</td><td>$(-\frac\pi2,\frac\pi2)$</td></tr>
</table>
<div class="tf" data-a="f"><p>$\arcsin(\sin x)=x$ para todo número real $x$.</p>
<div class="why"><p>Solo si $x\in[-\frac\pi2,\frac\pi2]$. Por ejemplo $\arcsin(\sin\pi)=\arcsin 0=0\ne\pi$.</p></div></div>

<h2>Funciones hiperbólicas</h2>
<p>Se definen con exponenciales y se comportan casi como las trigonométricas (cambia algún signo).</p>
<div class="formula">$$\sinh x=\frac{e^x-e^{-x}}2\qquad \cosh x=\frac{e^x+e^{-x}}2\qquad \tanh x=\frac{\sinh x}{\cosh x}$$
$$\cosh^2x-\sinh^2x=1\qquad \sinh 2x = 2\sinh x\cosh x\qquad \cosh2x=\cosh^2x+\sinh^2x$$</div>
<ul>
<li>$\cosh$ es par, mínimo $\cosh0=1$; forma de catenaria (un cable colgando).</li>
<li>$\sinh$ y $\tanh$ son impares y crecientes; $\tanh$ va de $-1$ a $1$.</li>
</ul>
<h3>Inversas hiperbólicas (deducción que preguntan)</h3>
<div class="steps"><p>Deduce $\text{argsinh}\,x=\ln\left(x+\sqrt{x^2+1}\right)$.</p>
<div class="step">$y=\text{argsinh}\,x \iff x=\sinh y=\dfrac{e^y-e^{-y}}2$. Llama $u=e^y\gt0$: $2x=u-\frac1u \Rightarrow u^2-2xu-1=0$.</div>
<div class="step">$u=x\pm\sqrt{x^2+1}$. Como $u\gt0$, solo vale el signo $+$.</div>
<div class="step">$e^y=x+\sqrt{x^2+1} \Rightarrow y=\ln(x+\sqrt{x^2+1})$.</div></div>
<div class="formula">$$\text{argcosh}\,x=\ln\left(x+\sqrt{x^2-1}\right)\ (x\ge1)\qquad \text{argtanh}\,x=\frac12\ln\frac{1+x}{1-x}\ (|x|\lt1)$$</div>
<div class="num" data-a="0.5493" data-tol="0.002" data-show="½·ln 3 ≈ 0,549"><p>Calcula $\text{argtanh}\left(\frac12\right)$ con 3 decimales.</p>
<div class="why"><p>$\frac12\ln\frac{1+1/2}{1-1/2}=\frac12\ln3\approx0{,}549$.</p></div></div>

<h2>Problemas de examen</h2>
<div class="prob"><div class="enun"><p>Halla el dominio de $f(x)=\arcsin\big(|2x-6|-x\big)$.</p><p class="src">Parcial 2025, problema 1 (2 puntos)</p></div>
<div class="hint"><p>Quita el valor absoluto separando $x\le3$ y $x\gt3$. Dentro del arcsin solo puede haber valores entre $-1$ y $1$.</p></div>
<div class="sol"><p>Si $x\le3$: $|2x-6|=6-2x$ y queda $\arcsin(6-3x)$. Pedimos $-1\le6-3x\le1 \iff -7\le-3x\le-5 \iff \frac53\le x\le\frac73$ (dentro de $x\le3$ ✔).</p>
<p>Si $x\gt3$: queda $\arcsin(x-6)$, y $-1\le x-6\le1 \iff 5\le x\le7$.</p>
<p>$\text{Dom}(f)=\left[\frac53,\frac73\right]\cup[5,7]$.</p></div></div>

<div class="prob"><div class="enun"><p>Una pasarela tiene forma $f(x)=a\cosh(bx)$, pasa por $A=(-1,1)$ y $B=(1,1)$ y en el centro su altura es $\frac45$. Halla $a$ y $b$ sin decimales.</p><p class="src">Parcial 2025, problema 2</p></div>
<div class="hint"><p>El centro da $a$ directamente ($\cosh0=1$). Para $b$, escribe $\cosh$ con exponenciales y llama $u=e^b$.</p></div>
<div class="sol"><p>$f(0)=a=\frac45$. Imponemos $f(1)=1$: $\frac45\cdot\frac{e^b+e^{-b}}2=1 \Rightarrow e^b+e^{-b}=\frac52$.</p>
<p>Con $u=e^b$: $u+\frac1u=\frac52 \Rightarrow 2u^2-5u+2=0 \Rightarrow u=2$ o $u=\frac12$, es decir $b=\pm\ln2$. Ambos dan la misma función (cosh es par):</p>
<p>$f(x)=\frac45\cosh(x\ln2)$. No hace falta usar $A$: por paridad, si pasa por $(1,1)$ pasa por $(-1,1)$.</p></div></div>

<div class="prob"><div class="enun"><p>Sea $f(x)=\dfrac{e^x-\sqrt{2-e^{2x}}}{2}$. (a) Dominio e imagen. (b) Inversa, con su dominio e imagen.</p><p class="src">Parcial 2024, problema 1</p></div>
<div class="hint"><p>$f'(x)\gt0$, así que $f$ es creciente: la imagen va de $\lim_{x\to-\infty}f$ hasta $f$ en el extremo derecho del dominio. Para la inversa aísla la raíz, eleva al cuadrado y obtendrás una ecuación de segundo grado en $e^x$.</p></div>
<div class="sol"><p>(a) $2-e^{2x}\ge0 \iff x\le\frac{\ln2}2=\ln\sqrt2$. $\text{Dom}=(-\infty,\ln\sqrt2]$. Como $f'\gt0$, $\text{Im}=\left(\lim_{-\infty}f,\ f(\ln\sqrt2)\right]=\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right]$.</p>
<p>(b) $\sqrt{2-e^{2x}}=e^x-2y \Rightarrow 2-e^{2x}=e^{2x}-4ye^x+4y^2 \Rightarrow e^{2x}-2ye^x+2y^2-1=0$.</p>
<p>$e^x=y\pm\sqrt{1-y^2}$. Con $x=0$ es $y=0$ y debe salir $e^0=1$: signo $+$. $f^{-1}(x)=\ln\left(x+\sqrt{1-x^2}\right)$ con dominio $\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right]$ e imagen $(-\infty,\ln\sqrt2]$.</p></div></div>

<div class="prob"><div class="enun"><p>Sea $f(x)=x^{\frac{\text{argsinh}\,x}{\ln x}}$ para $x\gt0$, $x\ne1$, y $f(1)=1+\sqrt2$. (a) ¿Es continua? (b) Halla $f^{-1}$, su dominio e imagen.</p><p class="src">Parcial 2025, problema 6</p></div>
<div class="hint"><p>Toma logaritmos: $\ln f = \frac{\text{argsinh}\,x}{\ln x}\cdot\ln x$. Se simplifica muchísimo.</p></div>
<div class="sol"><p>$\ln f(x)=\text{argsinh}\,x \Rightarrow f(x)=e^{\text{argsinh}x}=x+\sqrt{x^2+1}$. En $x=1$ el límite es $1+\sqrt2=f(1)$: continua.</p>
<p>Inversa: $y=x+\sqrt{x^2+1} \Rightarrow (y-x)^2=x^2+1 \Rightarrow x=\frac{y^2-1}{2y}$. $f^{-1}(x)=\frac{x^2-1}{2x}$.</p>
<p>$\text{Im}(f^{-1})=\text{Dom}(f)=(0,\infty)$ y $\text{Dom}(f^{-1})=\text{Im}(f)=(1,\infty)$ (no es "todo menos el 0").</p></div></div>
`},

/* ============================================================ */
{ id: "polares", title: "Coordenadas polares y cónicas",
  desc: "Pasar de polares a cartesianas, reconocer elipses, hipérbolas y parábolas.",
  html: String.raw`
<h2>El diccionario</h2>
<div class="formula">$$x=r\cos\alpha,\qquad y=r\sin\alpha,\qquad r^2=x^2+y^2,\qquad \tan\alpha=\frac yx$$</div>
<div class="key"><span class="label">Estrategia para pasar a cartesianas</span>
<p>Manipula la ecuación hasta que aparezcan los bloques $r\cos\alpha$, $r\sin\alpha$ y $r^2$. Normalmente hay que <strong>multiplicar por $r$</strong> (o por $r^2$) en algún momento.</p></div>

<div class="steps"><p>Escribe $r=2\cos\alpha$ en cartesianas.</p>
<div class="step">Multiplicamos por $r$: $r^2=2r\cos\alpha$.</div>
<div class="step">Sustituimos: $x^2+y^2=2x$.</div>
<div class="step">Completamos cuadrados: $(x-1)^2+y^2=1$. Es la circunferencia de centro $(1,0)$ y radio 1.</div></div>

<div class="steps"><p>Control 1, 2024: escribe $r=\dfrac{3}{2+\cos\alpha}$ en cartesianas.</p>
<div class="step">$2r+r\cos\alpha=3 \Rightarrow 2r+x=3 \Rightarrow 2r=3-x$.</div>
<div class="step">Elevamos al cuadrado: $4(x^2+y^2)=(3-x)^2=9-6x+x^2 \Rightarrow 3x^2+6x+4y^2=9$.</div>
<div class="step">Completamos cuadrados: $3(x+1)^2+4y^2=12 \Rightarrow \dfrac{(x+1)^2}4+\dfrac{y^2}3=1$. Una elipse.</div></div>

<div class="mc"><p>¿Qué curva es $r=2\cot\alpha\,\csc\alpha$?</p>
<ul><li data-ok>La parábola $y^2=2x$</li><li>La circunferencia $x^2+y^2=2$</li><li>La hipérbola $x^2-y^2=2$</li><li>La recta $y=2x$</li></ul>
<div class="why"><p>$r=\frac{2\cos\alpha}{\sin^2\alpha} \Rightarrow r\sin^2\alpha=2\cos\alpha$. Multiplicamos por $r$: $r^2\sin^2\alpha=2r\cos\alpha$, es decir $y^2=2x$.</p></div></div>

<h3>Dibujar curvas en polares</h3>
<ul>
<li>Haz una tabla $\alpha \mapsto r$ con ángulos notables ($0,\frac\pi6,\frac\pi4,\dots$).</li>
<li>Si $r\lt0$, el punto se dibuja en la dirección opuesta: $(r,\alpha)$ con $r\lt0$ es el punto $(|r|,\alpha+\pi)$.</li>
<li>Simetrías: si cambiar $\alpha\to-\alpha$ deja la ecuación igual, la curva es simétrica respecto al eje $x$.</li>
</ul>
<div class="tf" data-a="v"><p>La lemniscata $(x^2+y^2)^2=4xy$ en polares es $r^2=2\sin2\alpha$.</p>
<div class="why"><p>$(r^2)^2=4r^2\cos\alpha\sin\alpha \Rightarrow r^2=4\sin\alpha\cos\alpha=2\sin2\alpha$.</p></div></div>

<h2>Cónicas</h2>
<table>
<tr><th>Cónica</th><th>Ecuación reducida (centro $(x_0,y_0)$)</th><th>Datos</th></tr>
<tr><td>Circunferencia</td><td>$(x-x_0)^2+(y-y_0)^2=r^2$</td><td>radio $r$</td></tr>
<tr><td>Elipse</td><td>$\dfrac{(x-x_0)^2}{a^2}+\dfrac{(y-y_0)^2}{b^2}=1$</td><td>$a^2=b^2+c^2$ ($a\gt b$), focos a distancia $c$ del centro</td></tr>
<tr><td>Hipérbola</td><td>$\dfrac{(x-x_0)^2}{a^2}-\dfrac{(y-y_0)^2}{b^2}=1$</td><td>$c^2=a^2+b^2$, asíntotas $y-y_0=\pm\frac ba(x-x_0)$</td></tr>
<tr><td>Parábola</td><td>$(y-y_0)^2=2p(x-x_0)$</td><td>vértice $(x_0,y_0)$</td></tr>
</table>
<div class="tip"><span class="label">Reconocerla de un vistazo</span>
<p>En $Ax^2+By^2+\dots=0$ (sin término $xy$): si $A$ y $B$ tienen el mismo signo, elipse (o circunferencia si $A=B$); signos opuestos, hipérbola; si falta uno de los dos cuadrados, parábola.</p></div>

<div class="steps"><p>Identifica $4x^2+9y^2-8x+36y+4=0$.</p>
<div class="step">Agrupamos: $4(x^2-2x)+9(y^2+4y)+4=0$.</div>
<div class="step">Completamos cuadrados: $4[(x-1)^2-1]+9[(y+2)^2-4]+4=0 \Rightarrow 4(x-1)^2+9(y+2)^2=36$.</div>
<div class="step">Dividimos entre 36: $\dfrac{(x-1)^2}9+\dfrac{(y+2)^2}4=1$. Elipse de centro $(1,-2)$, $a=3$, $b=2$, $c=\sqrt5$.</div></div>

<div class="num" data-a="2.2361" data-tol="0.01" data-show="√5 ≈ 2,236"><p>Para la elipse anterior, ¿a qué distancia del centro están los focos?</p>
<div class="why"><p>$c=\sqrt{a^2-b^2}=\sqrt{9-4}=\sqrt5\approx2{,}236$.</p></div></div>

<h2>Problema de examen</h2>
<div class="prob"><div class="enun"><p>La lemniscata $(x^2+y^2)^2=4xy$ se dibuja junto a las 48 raíces de $p(z)=z^{48}+1$. ¿Cuántas raíces quedan dentro de la lemniscata?</p><p class="src">Parcial 2024, problema 3</p></div>
<div class="hint"><p>Las raíces están en la circunferencia $r=1$ con argumentos $\frac{(2k+1)\pi}{48}$. Busca dónde corta $r=1$ a $r^2=2\sin2\alpha$ y cuenta en el primer cuadrante.</p></div>
<div class="sol"><p>Corte: $2\sin2\alpha=1 \Rightarrow 2\alpha=\frac\pi6$ o $\frac{5\pi}6$, es decir $\alpha=\frac{\pi}{12}$ y $\frac{5\pi}{12}$.</p>
<p>Dentro en el primer cuadrante si $\frac\pi{12}\lt\frac{(2k+1)\pi}{48}\lt\frac{5\pi}{12} \iff 4\lt2k+1\lt20 \iff k=2,\dots,9$: 8 raíces.</p>
<p>Por simetría hay otras 8 en el tercer cuadrante (la lemniscata no entra en el 2.º ni el 4.º). Total: <strong>16</strong>.</p></div></div>
`},

/* ============================================================ */
{ id: "limites", title: "Límites y continuidad",
  desc: "Indeterminaciones, infinitésimos equivalentes, Bolzano y Weierstrass.",
  html: String.raw`
<h2>Qué hacer con cada indeterminación</h2>
<table>
<tr><th>Tipo</th><th>Herramienta habitual</th></tr>
<tr><td>$\frac00$ con raíces</td><td>Multiplicar por el conjugado</td></tr>
<tr><td>$\frac00$ con trigonométricas, exp, log</td><td>Infinitésimos equivalentes o Taylor</td></tr>
<tr><td>$\frac\infty\infty$ con polinomios</td><td>Dividir por la mayor potencia</td></tr>
<tr><td>$1^\infty$</td><td>$\lim f^g = e^{\lim g\,(f-1)}$</td></tr>
<tr><td>$0\cdot\infty$, $\infty-\infty$</td><td>Reescribir como cociente</td></tr>
</table>

<h2>Infinitésimos equivalentes (cuando $u\to0$)</h2>
<div class="formula">$$\sin u\sim u\quad \tan u\sim u\quad \arcsin u\sim u\quad \arctan u\sim u\quad 1-\cos u\sim\frac{u^2}2$$
$$e^u-1\sim u\quad \ln(1+u)\sim u\quad (1+u)^a-1\sim au\quad \sinh u\sim u\quad \cosh u-1\sim\frac{u^2}2$$</div>
<div class="warn"><span class="label">Solo en productos y cocientes</span>
<p>Puedes sustituir un factor por su equivalente, pero <strong>no</strong> un sumando. En $\frac{\tan x-\sin x}{x^3}$, cambiar ambos por $x$ da $\frac0{x^3}$, que es falso (el límite es $\frac12$). En esos casos usa Taylor.</p></div>

<div class="num" data-a="3"><p>Calcula $\displaystyle\lim_{x\to0}\frac{\sin 3x}{x}$.</p>
<div class="why"><p>$\sin3x\sim3x$, así que el límite es $\frac{3x}{x}=3$.</p></div></div>

<div class="steps"><p>Control 1, 2025: calcula sin derivadas $\displaystyle\lim_{x\to0}\frac{1+\cos^2x-2\cos x}{\tan^4x}$.</p>
<div class="step">El numerador es un cuadrado: $(1-\cos x)^2$.</div>
<div class="step">Equivalencias en el cociente: $(1-\cos x)^2\sim\left(\frac{x^2}2\right)^2=\frac{x^4}4$ y $\tan^4x\sim x^4$.</div>
<div class="step">Límite $=\frac{x^4/4}{x^4}=\frac14$.</div></div>

<h3>El número $e$</h3>
<div class="formula">$$\lim_{x\to\infty}\left(1+\frac ax\right)^x=e^a\qquad \text{y en general}\qquad \lim f^g=e^{\lim g\,(f-1)}\ \text{ si } f\to1,\ g\to\infty$$</div>
<div class="mc"><p>$\displaystyle\lim_{x\to\infty}\left(\frac{x+3}{x+1}\right)^{x}=$</p>
<ul><li data-ok>$e^2$</li><li>$1$</li><li>$e^3$</li><li>$\infty$</li></ul>
<div class="why"><p>$f-1=\frac{2}{x+1}$, así que $g(f-1)=\frac{2x}{x+1}\to2$. Límite $e^2$.</p></div></div>

<h2>Continuidad</h2>
<div class="def"><span class="label">Definición</span><p>$f$ es continua en $a$ si existe $f(a)$, existe $\lim_{x\to a}f(x)$ y son iguales.</p></div>
<p>Tipos de discontinuidad:</p>
<ul>
<li><strong>Evitable</strong>: el límite existe pero no coincide con $f(a)$ (o $f(a)$ no existe).</li>
<li><strong>De salto</strong>: los límites laterales existen y son distintos.</li>
<li><strong>Esencial</strong>: algún límite lateral no existe o es infinito.</li>
</ul>
<div class="num" data-a="1"><p>¿Qué valor de $a$ hace continua $f(x)=\begin{cases}x^2+a & x\lt1\\ 3x-1 & x\ge1\end{cases}$?</p>
<div class="why"><p>Igualamos laterales en $x=1$: $1+a=2 \Rightarrow a=1$.</p></div></div>

<h2>Los dos teoremas importantes</h2>
<div class="key"><span class="label">Bolzano</span><p>Si $f$ es continua en $[a,b]$ y $f(a)$, $f(b)$ tienen signos opuestos, existe $c\in(a,b)$ con $f(c)=0$. Sirve para demostrar que una ecuación tiene solución.</p></div>
<div class="key"><span class="label">Weierstrass</span><p>Si $f$ es continua en un intervalo <strong>cerrado y acotado</strong> $[a,b]$, alcanza un máximo y un mínimo absolutos.</p></div>
<div class="tf" data-a="v"><p>La ecuación $x^3+x-1=0$ tiene al menos una solución en $(0,1)$.</p>
<div class="why"><p>$f(0)=-1\lt0$ y $f(1)=1\gt0$, y $f$ es continua: Bolzano. (Además es única porque $f'=3x^2+1\gt0$.)</p></div></div>
<div class="tf" data-a="f"><p>Toda función continua en $(0,1)$ tiene máximo absoluto.</p>
<div class="why"><p>El intervalo es abierto: $f(x)=\frac1x$ es continua en $(0,1)$ y no está acotada. Weierstrass exige $[a,b]$ cerrado.</p></div></div>

<h2>Problemas</h2>
<div class="prob"><div class="enun"><p>Calcula $\displaystyle\lim_{x\to0}\frac{\tan(x^2)-\sin^2x}{(1-\cos x)^2}$.</p><p class="src">Control 2, 2024</p></div>
<div class="hint"><p>El numerador es una resta: necesitas Taylor hasta grado 4.</p></div>
<div class="sol"><p>$\tan(x^2)=x^2+O(x^6)$. $\sin x=x-\frac{x^3}6+\dots \Rightarrow \sin^2x=x^2-\frac{x^4}3+\dots$</p>
<p>Numerador $\sim\frac{x^4}3$. Denominador $\sim\left(\frac{x^2}2\right)^2=\frac{x^4}4$. Límite $=\frac{1/3}{1/4}=\frac43$.</p></div></div>

<div class="prob"><div class="enun"><p>Calcula $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+3x}-x\right)$.</p></div>
<div class="sol"><p>Conjugado: $\frac{x^2+3x-x^2}{\sqrt{x^2+3x}+x}=\frac{3x}{\sqrt{x^2+3x}+x}$. Dividiendo por $x$: $\frac{3}{\sqrt{1+3/x}+1}\to\frac32$.</p></div></div>
`},

/* ============================================================ */
{ id: "derivadas", title: "Derivadas: definición, reglas e implícitas",
  desc: "Derivada por definición, regla de la cadena, logarítmica, implícita y rectas tangentes.",
  html: String.raw`
<h2>La definición (la piden en el parcial)</h2>
<div class="formula">$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$</div>
<p>Geométricamente es la pendiente de la recta tangente; físicamente, la velocidad de cambio.</p>
<div class="steps"><p>Parcial 2025: deriva por definición $f(x)=\sqrt{x^2-2x+3}$.</p>
<div class="step">$f'(x)=\displaystyle\lim_{h\to0}\frac{\sqrt{(x+h)^2-2(x+h)+3}-\sqrt{x^2-2x+3}}{h}$, que es $\frac00$.</div>
<div class="step">Multiplicamos y dividimos por el conjugado. El numerador queda $(x+h)^2-2(x+h)+3-(x^2-2x+3)=2xh+h^2-2h$.</div>
<div class="step">Sacamos $h$ y simplificamos: $\displaystyle\lim_{h\to0}\frac{2x+h-2}{\sqrt{(x+h)^2-2(x+h)+3}+\sqrt{x^2-2x+3}}$.</div>
<div class="step">Con $h=0$: $\dfrac{2x-2}{2\sqrt{x^2-2x+3}}=\dfrac{x-1}{\sqrt{x^2-2x+3}}$.</div></div>
<div class="tip"><span class="label">Plantilla</span><p>Raíz → conjugado. Fracción → común denominador. Seno/coseno → fórmulas de suma o equivalencias. Al final siempre "sale" una $h$ que se simplifica.</p></div>

<h3>Derivable implica continua (no al revés)</h3>
<div class="tf" data-a="f"><p>Si $f$ es continua en $a$, entonces es derivable en $a$.</p>
<div class="why"><p>$|x|$ es continua en 0 pero tiene un pico: derivadas laterales $-1$ y $1$. Lo que sí es cierto es lo contrario: derivable ⇒ continua.</p></div></div>
<p>En funciones a trozos, para que sea derivable en el punto de unión pide <strong>continuidad</strong> y <strong>derivadas laterales iguales</strong>: dos ecuaciones para dos parámetros.</p>

<h2>Tabla y reglas</h2>
<table>
<tr><th>$f$</th><th>$f'$</th><th>$f$</th><th>$f'$</th></tr>
<tr><td>$x^n$</td><td>$nx^{n-1}$</td><td>$\arcsin x$</td><td>$\frac1{\sqrt{1-x^2}}$</td></tr>
<tr><td>$e^x$</td><td>$e^x$</td><td>$\arccos x$</td><td>$\frac{-1}{\sqrt{1-x^2}}$</td></tr>
<tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$\arctan x$</td><td>$\frac1{1+x^2}$</td></tr>
<tr><td>$\ln x$</td><td>$\frac1x$</td><td>$\sinh x$</td><td>$\cosh x$</td></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\cosh x$</td><td>$\sinh x$</td></tr>
<tr><td>$\cos x$</td><td>$-\sin x$</td><td>$\tanh x$</td><td>$\frac1{\cosh^2x}$</td></tr>
<tr><td>$\tan x$</td><td>$1+\tan^2x$</td><td>$\text{argsinh}\,x$</td><td>$\frac1{\sqrt{x^2+1}}$</td></tr>
</table>
<div class="formula">$$(fg)'=f'g+fg'\qquad \left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\qquad (g\circ f)'(x)=g'(f(x))\,f'(x)$$
$$\text{Inversa: } (f^{-1})'(y)=\frac1{f'(x)}\ \text{ con } y=f(x)$$</div>

<div class="mc"><p>$\dfrac{d}{dx}\arctan(x^2)=$</p>
<ul><li data-ok>$\dfrac{2x}{1+x^4}$</li><li>$\dfrac{1}{1+x^4}$</li><li>$\dfrac{2x}{1+x^2}$</li><li>$\dfrac{2x}{(1+x^2)^2}$</li></ul>
<div class="why"><p>Cadena: $\frac1{1+(x^2)^2}\cdot2x$.</p></div></div>
<div class="num" data-a="1"><p>Si $f(x)=\ln(x^2+1)$, ¿cuánto vale $f'(1)$?</p>
<div class="why"><p>$f'(x)=\frac{2x}{x^2+1}$, y $f'(1)=\frac22=1$.</p></div></div>

<h2>Derivación logarítmica</h2>
<p>Para funciones del tipo $f(x)^{g(x)}$: toma logaritmos y deriva.</p>
<div class="steps"><p>Deriva $y=x^x$.</p>
<div class="step">$\ln y=x\ln x$.</div>
<div class="step">Derivamos los dos lados: $\frac{y'}{y}=\ln x+1$.</div>
<div class="step">$y'=x^x(\ln x+1)$.</div></div>

<h2>Derivación implícita</h2>
<div class="key"><span class="label">Idea clave</span><p>Cuando la curva viene dada por una ecuación $F(x,y)=0$, deriva todo respecto de $x$ pensando que $y=y(x)$: cada vez que derives algo con $y$, multiplica por $y'$. Después despeja $y'$.</p></div>
<div class="steps"><p>Pendiente de $x^2+xy+y^2=7$ en el punto $(1,2)$.</p>
<div class="step">Derivamos: $2x+(y+xy')+2yy'=0$.</div>
<div class="step">Sustituimos $(1,2)$: $2+2+y'+4y'=0 \Rightarrow 5y'=-4$.</div>
<div class="step">$y'=-\frac45$. Recta tangente: $y-2=-\frac45(x-1)$.</div></div>
<div class="tip"><span class="label">Tangente horizontal o vertical</span><p>Tangente horizontal: impón $y'=0$ en la ecuación derivada y resuelve el sistema con la curva. Tangente vertical: lo mismo pensando $x$ como función de $y$ ($x'=0$).</p></div>

<h2>Recta tangente y normal; ángulo entre curvas</h2>
<div class="formula">$$\text{Tangente: } y-f(a)=f'(a)(x-a)\qquad \text{Normal: } y-f(a)=-\frac{1}{f'(a)}(x-a)$$
$$\text{Ángulo entre curvas con pendientes } m_1,m_2:\quad \tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|$$</div>
<div class="mc"><p>Recta tangente a $y=x^3-2x$ en $x=1$:</p>
<ul><li data-ok>$y=x-2$</li><li>$y=x-1$</li><li>$y=3x-4$</li><li>$y=-x$</li></ul>
<div class="why"><p>$f(1)=-1$, $f'(x)=3x^2-2$, $f'(1)=1$. $y+1=x-1 \Rightarrow y=x-2$.</p></div></div>

<h2>Problemas de examen</h2>
<div class="prob"><div class="enun"><p>La ecuación $(x^2+y^2)^2=3\sqrt3\,xy$ define una lemniscata. Halla las dimensiones del cuadrado más pequeño que la contiene.</p><p class="src">Parcial 2025, problema 4</p></div>
<div class="hint"><p>El lado superior del cuadrado toca la curva donde la tangente es horizontal: deriva implícitamente e impón $y'=0$.</p></div>
<div class="sol"><p>Derivando: $2(x^2+y^2)(2x+2yy')=3\sqrt3(y+xy')$. Con $y'=0$: $4x(x^2+y^2)=3\sqrt3\,y$.</p>
<p>Multiplicamos esta ecuación por $x$ e igualamos con la de la curva: $4x^2(x^2+y^2)=(x^2+y^2)^2 \Rightarrow (x^2+y^2)(y^2-3x^2)=0$. Así $y=\sqrt3x$ (primer cuadrante).</p>
<p>Sustituyendo: $4x\cdot4x^2=3\sqrt3\cdot\sqrt3x \Rightarrow 16x^2=9 \Rightarrow x=\frac34$, $y=\frac{3\sqrt3}4$.</p>
<p>El punto más alto tiene $y=\frac{3\sqrt3}4$; por simetría el lado del cuadrado es $\frac{3\sqrt3}2$ y su área $\frac{27}4$.</p></div></div>

<div class="prob"><div class="enun"><p>Halla $a$ y $b$ para que $f(x)=\begin{cases}\frac1{|x|} & x\le-1\\ a+bx^2 & x\gt-1\end{cases}$ sea derivable en todo $\mathbb R$.</p><p class="src">Libro de problemas, cap. 3, ej. 13</p></div>
<div class="sol"><p>Para $x\le-1$, $f(x)=-\frac1x$ y $f'(x)=\frac1{x^2}$.</p>
<p>Continuidad en $-1$: $1=a+b$. Derivadas laterales: izquierda $1$, derecha $2bx\big|_{-1}=-2b$. Entonces $-2b=1 \Rightarrow b=-\frac12$ y $a=\frac32$.</p></div></div>
`},

/* ============================================================ */
{ id: "aplicaciones", title: "Aplicaciones: extremos, optimización, L'Hôpital y Taylor",
  desc: "Máximos y mínimos, problemas de optimizar, teorema del valor medio, L'Hôpital y polinomios de Taylor.",
  html: String.raw`
<h2>Extremos absolutos en $[a,b]$</h2>
<div class="key"><span class="label">Receta</span><ol>
<li>Calcula $f'$ y halla los puntos críticos: $f'=0$ o $f'$ no existe.</li>
<li>Evalúa $f$ en los puntos críticos de dentro <strong>y en los extremos $a$ y $b$</strong>.</li>
<li>El mayor valor es el máximo absoluto; el menor, el mínimo.</li></ol></div>
<div class="steps"><p>Extremos de $f(x)=x^3-3x$ en $[-2,3]$.</p>
<div class="step">$f'(x)=3x^2-3=0 \Rightarrow x=\pm1$.</div>
<div class="step">Valores: $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(3)=18$.</div>
<div class="step">Máximo absoluto 18 (en $x=3$), mínimo absoluto $-2$ (en $x=-2$ y $x=1$).</div></div>
<p>Para extremos relativos: si $f'(c)=0$ y $f''(c)\gt0$, mínimo; si $f''(c)\lt0$, máximo. Si $f''(c)=0$, mira la primera derivada no nula: orden par → extremo, orden impar → punto de inflexión.</p>

<h2>Optimización</h2>
<p>Pasos: (1) dibujo con variables; (2) función a optimizar; (3) usar la condición del enunciado para dejarla en <strong>una sola variable</strong>; (4) derivar e igualar a 0; (5) comprobar que es máximo/mínimo y responder lo que se pregunta.</p>
<div class="prob"><div class="enun"><p>Halla la altura del cono de volumen máximo inscrito en una esfera de radio $R$. ($V=\frac13\pi r^2H$)</p><p class="src">Control 2, 2024</p></div>
<div class="hint"><p>Pon el vértice del cono arriba y llama $x$ a la distancia del centro de la esfera a la base: $H=R+x$ y, por Pitágoras, $r^2=R^2-x^2$.</p></div>
<div class="sol"><p>$V(x)=\frac\pi3(R^2-x^2)(R+x)$, $x\in[-R,R]$.</p>
<p>$V'(x)=0 \iff -2x(R+x)+(R^2-x^2)=0 \iff (R+x)(R-3x)=0$. La solución útil es $x=\frac R3$.</p>
<p>$H=R+\frac R3=\frac{4R}3$.</p></div></div>
<div class="num" data-a="1.4142" data-tol="0.01" data-show="√2 ≈ 1,414"><p>El rectángulo de área máxima inscrito en una circunferencia de radio 1 es un cuadrado. ¿Cuánto mide su lado?</p>
<div class="why"><p>La diagonal es el diámetro, 2. Cuadrado de diagonal 2: lado $\frac2{\sqrt2}=\sqrt2$.</p></div></div>

<h2>Teoremas de Rolle y del valor medio</h2>
<ul>
<li><strong>Rolle</strong>: $f$ continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$ ⇒ existe $c$ con $f'(c)=0$.</li>
<li><strong>Valor medio (Lagrange)</strong>: existe $c\in(a,b)$ con $f'(c)=\frac{f(b)-f(a)}{b-a}$.</li>
</ul>
<div class="tip"><span class="label">Para contar raíces</span><p>Bolzano demuestra que hay <em>al menos</em> una; Rolle demuestra que no hay más: si hubiera dos raíces, $f'$ se anularía entre ellas. Si $f'\gt0$ siempre, hay como máximo una.</p></div>
<div class="tf" data-a="v"><p>$f(x)=x^3+3x-5$ tiene exactamente una raíz real.</p>
<div class="why"><p>$f'(x)=3x^2+3\gt0$: estrictamente creciente, como máximo una raíz. Y $f(1)=-1\lt0$, $f(2)=9\gt0$: al menos una (Bolzano).</p></div></div>

<h2>Regla de L'Hôpital</h2>
<p>Si $\frac fg$ da $\frac00$ o $\frac\infty\infty$, entonces $\lim\frac fg=\lim\frac{f'}{g'}$ (si este existe). Se puede aplicar varias veces.</p>
<div class="num" data-a="0.16667" data-tol="0.002" data-show="1/6"><p>Calcula $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$.</p>
<div class="why"><p>Tres veces L'Hôpital: $\frac{1-\cos x}{3x^2}\to\frac{\sin x}{6x}\to\frac{\cos x}{6}\to\frac16$. Con Taylor: $x-\sin x\sim\frac{x^3}6$.</p></div></div>

<h2>Polinomio de Taylor</h2>
<div class="formula">$$f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots+\frac{f^{(n)}(a)}{n!}(x-a)^n$$</div>
<p>Desarrollos de MacLaurin ($a=0$) que debes saber:</p>
<div class="formula">$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\qquad \sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots\qquad \cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$$
$$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3-\cdots\qquad \frac1{1-x}=1+x+x^2+\cdots\qquad (1+x)^a=1+ax+\binom a2x^2+\cdots$$</div>
<div class="key"><span class="label">El truco de las derivadas altas</span>
<p>El coeficiente de $x^n$ en el desarrollo es $\frac{f^{(n)}(0)}{n!}$. Así, para hallar $f^{(n)}(0)$ basta encontrar ese coeficiente y multiplicar por $n!$, sin derivar $n$ veces.</p></div>
<div class="num" data-a="0.33333" data-tol="0.002" data-show="1/3"><p>¿Cuál es el coeficiente de $x^3$ en el desarrollo de MacLaurin de $e^x\sin x$?</p>
<div class="why"><p>$(1+x+\frac{x^2}2)(x-\frac{x^3}6)$: los términos de grado 3 son $\frac{x^3}2-\frac{x^3}6=\frac{x^3}3$.</p></div></div>

<div class="prob"><div class="enun"><p>Sea $f(x)=\displaystyle\int_0^{x^2}\frac{e^{t^2}}{1+t}\,dt$. Calcula $f^{(8)}(0)$.</p><p class="src">Control 2, 2025</p></div>
<div class="hint"><p>Desarrolla el integrando, integra término a término entre 0 y $x^2$ y busca el término $x^8$. Viene del término $t^3$ del integrando.</p></div>
<div class="sol"><p>$\frac1{1+t}=1-t+t^2-t^3+\dots$ y $e^{t^2}=1+t^2+\dots$ Término $t^3$ del producto: $-t^3+t^2\cdot(-t)=-2t^3$.</p>
<p>$\int_0^{x^2}-2t^3\,dt=-\frac{x^8}2$. Igualamos a $\frac{f^{(8)}(0)}{8!}x^8$: $f^{(8)}(0)=-\frac{8!}2=-20160$.</p></div></div>

<div class="prob"><div class="enun"><p>Sea $f(x)=\displaystyle\int_0^{x^2}e^{t^2}\sin t\,dt$. Calcula $f^{(12)}(0)$.</p><p class="src">Control 2, 2024</p></div>
<div class="sol"><p>El término $x^{12}$ sale de integrar el término $t^5$ del integrando (porque $\int_0^{x^2}t^5dt=\frac{x^{12}}6$).</p>
<p>Término $t^5$ de $\left(1+t^2+\frac{t^4}2\right)\left(t-\frac{t^3}6+\frac{t^5}{120}\right)$: $\frac12-\frac16+\frac1{120}=\frac{41}{120}$.</p>
<p>Coeficiente de $x^{12}$: $\frac{41}{120\cdot6}=\frac{41}{720}$. Entonces $f^{(12)}(0)=\frac{41\cdot12!}{720}=27\,276\,480$.</p></div></div>
`},

/* ============================================================ */
{ id: "integrales", title: "Integrales: primitivas, áreas y volúmenes",
  desc: "Cambio de variable, partes, racionales, teorema fundamental, impropias y aplicaciones.",
  html: String.raw`
<h2>Teorema fundamental del cálculo</h2>
<div class="formula">$$\frac{d}{dx}\int_a^{x}f(t)\,dt=f(x)\qquad \frac{d}{dx}\int_{a}^{g(x)}f(t)\,dt=f(g(x))\,g'(x)\qquad \int_a^bf=F(b)-F(a)$$</div>
<div class="mc"><p>$\dfrac{d}{dx}\displaystyle\int_0^{x^2}\sin(t^2)\,dt=$</p>
<ul><li data-ok>$2x\sin(x^4)$</li><li>$\sin(x^4)$</li><li>$\sin(x^2)$</li><li>$2x\cos(x^4)$</li></ul>
<div class="why"><p>$f(g(x))g'(x)$ con $f(t)=\sin t^2$ y $g=x^2$: $\sin(x^4)\cdot2x$.</p></div></div>

<h2>Métodos de integración</h2>
<h3>Cambio de variable</h3>
<p>Si ves una función y su derivada (o casi), cambia $u=$ la función de dentro. Con raíces $\sqrt x$, prueba $x=t^2$.</p>
<h3>Por partes</h3>
<div class="formula">$$\int u\,dv=uv-\int v\,du$$</div>
<p>Elige $u$ con el orden <strong>ALPES</strong>: Arcos, Logaritmos, Polinomios, Exponenciales, Senos/cosenos (la que antes aparece, es $u$).</p>
<div class="steps"><p>Control 2, 2025: $\displaystyle\int e^{\sqrt x}\,dx$.</p>
<div class="step">Cambio $x=t^2$, $dx=2t\,dt$: $\int 2t\,e^t\,dt$.</div>
<div class="step">Partes con $u=2t$, $dv=e^tdt$: $2te^t-\int2e^tdt=2e^t(t-1)$.</div>
<div class="step">Deshacemos el cambio: $2e^{\sqrt x}(\sqrt x-1)+C$.</div></div>
<div class="num" data-a="1"><p>Calcula $\displaystyle\int_0^1 x e^x\,dx$.</p>
<div class="why"><p>Partes: $\int xe^x=e^x(x-1)$. Entre 0 y 1: $0-(-1)=1$.</p></div></div>

<h3>Racionales $\frac{P(x)}{Q(x)}$</h3>
<ol><li>Si $\text{grado}\,P\ge\text{grado}\,Q$, divide primero.</li>
<li>Factoriza $Q$ y descompón en fracciones simples:
$$\frac{A}{x-a},\quad \frac{B}{(x-a)^2},\quad \frac{Cx+D}{x^2+px+q}\ (\text{sin raíces reales})$$</li>
<li>Integra: $\int\frac{A}{x-a}=A\ln|x-a|$, $\int\frac{1}{x^2+1}=\arctan x$.</li></ol>
<div class="tf" data-a="v"><p>$\displaystyle\int\frac{dx}{x^2-1}=\frac12\ln\left|\frac{x-1}{x+1}\right|+C$.</p>
<div class="why"><p>$\frac1{x^2-1}=\frac{1/2}{x-1}-\frac{1/2}{x+1}$. Integrando: $\frac12\ln|x-1|-\frac12\ln|x+1|$.</p></div></div>

<h3>Trigonométricas</h3>
<ul><li>$\sin^2x$ o $\cos^2x$: usa ángulo doble, $\cos^2x=\frac{1+\cos2x}2$.</li>
<li>Potencia impar de $\sin$: guarda un $\sin x$ y cambia $u=\cos x$ (y al revés).</li></ul>

<h2>Integrales impropias</h2>
<p>Con límite infinito o función no acotada: se calcula como límite. Converge si el límite es finito.</p>
<div class="formula">$$\int_1^\infty\frac{dx}{x^p}\ \text{converge} \iff p\gt1\qquad \int_0^1\frac{dx}{x^p}\ \text{converge}\iff p\lt1$$</div>
<div class="num" data-a="0.21460" data-tol="0.002" data-show="1 − π/4 ≈ 0,2146"><p>Control 2, 2025: área bajo $f(x)=\frac1{x^2+x^4}$ entre 1 y $+\infty$ (da un decimal).</p>
<div class="why"><p>$\frac1{x^2(1+x^2)}=\frac1{x^2}-\frac1{1+x^2}$. Primitiva $-\frac1x-\arctan x$. De 1 a $\infty$: $\left(0-\frac\pi2\right)-\left(-1-\frac\pi4\right)=1-\frac\pi4\approx0{,}2146$.</p></div></div>

<h2>Áreas y volúmenes</h2>
<div class="formula">$$\text{Área entre curvas: } \int_a^b|f-g|\,dx\qquad \text{Área en polares: } \frac12\int_{\alpha}^{\beta}r(\theta)^2d\theta$$
$$\text{Discos (eje }x): V=\pi\int_a^bf(x)^2dx\qquad \text{Capas (eje }y): V=2\pi\int_a^b x\,f(x)\,dx$$</div>
<div class="num" data-a="0.16667" data-tol="0.002" data-show="1/6"><p>Área entre $y=x$ e $y=x^2$.</p>
<div class="why"><p>Se cortan en 0 y 1; arriba está $y=x$. $\int_0^1(x-x^2)dx=\frac12-\frac13=\frac16$.</p></div></div>
<div class="num" data-a="25.133" data-tol="0.05" data-show="8π ≈ 25,13"><p>Volumen al girar $y=\sqrt x$, $0\le x\le4$, alrededor del eje $x$.</p>
<div class="why"><p>$\pi\int_0^4 x\,dx=\pi\cdot8=8\pi\approx25{,}13$.</p></div></div>

<div class="prob"><div class="enun"><p>Halla una primitiva de $f(x)=\arctan\sqrt x$.</p><p class="src">Control 2, 2024</p></div>
<div class="hint"><p>Cambio $x=t^2$ y después partes con $u=\arctan t$.</p></div>
<div class="sol"><p>$\int2t\arctan t\,dt=t^2\arctan t-\int\frac{t^2}{1+t^2}dt=t^2\arctan t-(t-\arctan t)$.</p>
<p>$=(t^2+1)\arctan t-t=(x+1)\arctan\sqrt x-\sqrt x+C$.</p></div></div>
`},

/* ============================================================ */
{ id: "series", title: "Sucesiones y series",
  desc: "Límites de sucesiones, inducción y criterios de convergencia de series.",
  html: String.raw`
<h2>Sucesiones</h2>
<ul>
<li>Una sucesión monótona y acotada converge (teorema de la convergencia monótona).</li>
<li>Jerarquía de infinitos cuando $n\to\infty$: $\ln n \ll n^a \ll b^n \ll n! \ll n^n$.</li>
<li>Criterio de Stolz: $\lim\frac{a_n}{b_n}=\lim\frac{a_{n+1}-a_n}{b_{n+1}-b_n}$ si $b_n$ crece a $\infty$.</li>
</ul>
<div class="tf" data-a="v"><p>$\displaystyle\lim_{n\to\infty}\frac{2^n}{n!}=0$.</p>
<div class="why"><p>El factorial crece más rápido que cualquier exponencial.</p></div></div>

<h2>Inducción</h2>
<p>Para demostrar $P(n)$ para todo $n\ge1$: (1) compruébalo para $n=1$; (2) supón $P(n)$ y demuestra $P(n+1)$.</p>

<h2>Series numéricas</h2>
<div class="key"><span class="label">Condición necesaria</span><p>Si $\sum a_n$ converge, entonces $a_n\to0$. Si $a_n\not\to0$, diverge seguro. Pero $a_n\to0$ no basta: la armónica $\sum\frac1n$ diverge.</p></div>
<div class="formula">$$\text{Geométrica: } \sum_{n=0}^\infty r^n=\frac1{1-r}\ \ (|r|\lt1)\qquad \sum\frac1{n^p}\ \text{converge}\iff p\gt1$$</div>
<table>
<tr><th>Criterio</th><th>Cuándo usarlo</th></tr>
<tr><td>Comparación / paso al límite</td><td>Cociente de polinomios o parecido a $\frac1{n^p}$</td></tr>
<tr><td>Cociente (D'Alembert): $L=\lim\frac{a_{n+1}}{a_n}$</td><td>Con factoriales o potencias $b^n$. $L\lt1$ converge, $L\gt1$ diverge</td></tr>
<tr><td>Raíz (Cauchy): $L=\lim\sqrt[n]{a_n}$</td><td>Con potencias $n$-ésimas</td></tr>
<tr><td>Leibniz</td><td>Alternadas: $|a_n|$ decreciente a 0 ⇒ converge</td></tr>
</table>
<div class="num" data-a="1.5" data-show="3/2"><p>Calcula $\displaystyle\sum_{n=0}^\infty\left(\frac13\right)^n$.</p>
<div class="why"><p>Geométrica de razón $\frac13$: $\frac{1}{1-1/3}=\frac32$.</p></div></div>
<div class="mc"><p>La serie $\displaystyle\sum_{n\ge1}\frac{(-1)^n}{n}$…</p>
<ul><li data-ok>converge condicionalmente</li><li>converge absolutamente</li><li>diverge</li><li>no se puede saber</li></ul>
<div class="why"><p>Por Leibniz converge, pero la serie de valores absolutos es la armónica, que diverge: convergencia condicional.</p></div></div>
`},

/* ============================================================ */
{ id: "parcial-2025", title: "Simulacro: parcial 2025 completo",
  desc: "El parcial de noviembre de 2025 problema a problema, para hacerlo con reloj (1 h 50 min aprox.).",
  html: String.raw`
<h2>Cómo usar este simulacro</h2>
<p>Ponte un temporizador e intenta cada problema sin mirar. Los apartados enlazan con los temas donde se explica el método. Puntuación del examen original entre paréntesis.</p>

<div class="prob" data-tag="Problema 1 · 2 puntos"><div class="enun"><p>Halla el dominio de $f(x)=\arcsin\big(|2x-6|-x\big)$.</p></div>
<div class="hint"><p>Separa en $x\le3$ y $x\gt3$.</p></div>
<div class="sol"><p>$\left[\frac53,\frac73\right]\cup[5,7]$. Desarrollo completo en el tema "Funciones".</p></div></div>

<div class="prob" data-tag="Problema 2 · 2 puntos"><div class="enun"><p>Pasarela $f(x)=a\cosh(bx)$ que pasa por $(\pm1,1)$ con altura central $\frac45$. Halla $a$ y $b$.</p></div>
<div class="hint"><p>$a=f(0)$. Luego ecuación de segundo grado en $e^b$.</p></div>
<div class="sol"><p>$a=\frac45$, $b=\pm\ln2$: $f(x)=\frac45\cosh(x\ln2)$.</p></div></div>

<div class="prob" data-tag="Problema 3 · 2 puntos"><div class="enun"><p>Calcula aplicando la definición la derivada de $f(x)=\sqrt{x^2-2x+3}$.</p></div>
<div class="hint"><p>Conjugado del numerador.</p></div>
<div class="sol"><p>$f'(x)=\frac{x-1}{\sqrt{x^2-2x+3}}$. Desarrollo en el tema "Derivadas".</p></div></div>

<div class="prob" data-tag="Problema 4 · 2 puntos"><div class="enun"><p>Cuadrado más pequeño que contiene la lemniscata $(x^2+y^2)^2=3\sqrt3xy$.</p></div>
<div class="hint"><p>Implícita con $y'=0$.</p></div>
<div class="sol"><p>Lado $\frac{3\sqrt3}2$, área $\frac{27}4$. Punto de tangencia $\left(\frac34,\frac{3\sqrt3}4\right)$.</p></div></div>

<div class="prob" data-tag="Problema 5 · 1 punto"><div class="enun"><p>Prueba que $z^{1000}+z^{500}+1$ es divisible entre $z^2+z+1$.</p></div>
<div class="hint"><p>Las raíces de $z^2+z+1$ cumplen $\alpha^3=1$.</p></div>
<div class="sol"><p>$p(\alpha)=\alpha^{1}+\alpha^{2}+1=0$ reduciendo exponentes módulo 3.</p></div></div>

<div class="prob" data-tag="Problema 6 · 1 punto"><div class="enun"><p>$f(x)=x^{\text{argsinh}x/\ln x}$, $f(1)=1+\sqrt2$. Continuidad e inversa.</p></div>
<div class="hint"><p>Toma logaritmos.</p></div>
<div class="sol"><p>$f(x)=x+\sqrt{x^2+1}$, continua. $f^{-1}(x)=\frac{x^2-1}{2x}$ con dominio $(1,\infty)$ e imagen $(0,\infty)$.</p></div></div>

<h2>Lo que más se repite en los parciales</h2>
<ul>
<li><strong>Dominio + inversa</strong> con su dominio e imagen (2024 y 2025).</li>
<li><strong>Complejos</strong>: ecuaciones con $\bar z$, raíces de polinomios, exponentes grandes.</li>
<li><strong>Lemniscata</strong>: pasar a polares o derivar implícitamente (2024 y 2025).</li>
<li><strong>Derivada por definición</strong> o recta tangente.</li>
<li><strong>Hiperbólicas</strong>: catenarias e inversas con logaritmos.</li>
</ul>
<div class="tf" data-a="f"><p>El dominio de la inversa de $f$ coincide siempre con el dominio natural de la fórmula de $f^{-1}$.</p>
<div class="why"><p>No: $\text{Dom}(f^{-1})=\text{Im}(f)$. En el parcial 2025 la fórmula $\frac{x^2-1}{2x}$ tiene dominio natural $\mathbb R\setminus\{0\}$, pero la inversa solo está definida en $(1,\infty)$. Fíjate que la solución oficial lo subraya.</p></div></div>
`}
  ]
});
