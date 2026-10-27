EXAMS.calculo = [

/* ==================================================================== */
{ title: "Examen parcial de prueba 1",
  sub: "Cálculo I · Temas 1 a 6: reales, complejos, funciones, derivadas",
  desc: "Dominio con arcoseno, raíces cúbicas complejas, derivada por definición, folium de Descartes, hiperbólicas e inversa.",
  dur: "1 h 50 min", pts: "10 puntos",
  instr: "<p>Justifica todas las respuestas. No se permite calculadora gráfica ni apuntes. Cada problema en una hoja diferente.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<p>Halla el dominio de la función</p>
$$f(x)=\arcsin\left(\frac{x+1}{x-3}\right)+\frac{\sqrt{x+5}}{\ln(x+6)}.$$

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<ol class="parts">
<li>Calcula, en forma binómica, las soluciones de la ecuación $z^3=4\sqrt2\,(-1+i)$.</li>
<li>Las tres soluciones son los vértices de un triángulo. Justifica de qué tipo de triángulo se trata y calcula su área.</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Calcula, aplicando la definición, la derivada de la función $f(x)=\dfrac{1}{\sqrt{2x+1}}$ en un punto genérico $x\gt-\frac12$.</p>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<p>La curva de ecuación $x^3+y^3=6xy$ se llama <em>folium de Descartes</em>.</p>
<ol class="parts">
<li>Comprueba que el punto $(3,3)$ pertenece a la curva y halla la ecuación de la recta tangente en ese punto.</li>
<li>Halla el punto del primer cuadrante, distinto del origen, en el que la recta tangente es horizontal.</li>
</ol>

<h2>Problema 5 <span class="pts">(1 punto)</span></h2>
<p>Resuelve la ecuación $2\cosh x-\sinh x=2$.</p>

<h2>Problema 6 <span class="pts">(1 punto)</span></h2>
<p>Sea $f(x)=\dfrac{e^x-1}{e^x+1}$. Calcula su función inversa, indicando el dominio y la imagen de $f^{-1}$.</p>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p><strong>Arcoseno:</strong> hace falta $-1\le\frac{x+1}{x-3}\le1$ (y $x\ne3$).</p>
<p>• $\frac{x+1}{x-3}\le1\iff\frac{x+1-(x-3)}{x-3}=\frac{4}{x-3}\le0\iff x\lt3$.</p>
<p>• $\frac{x+1}{x-3}\ge-1\iff\frac{x+1+x-3}{x-3}=\frac{2(x-1)}{x-3}\ge0\iff x\le1$ o $x\gt3$.</p>
<p>Intersección: $x\le1$.</p>
<p><strong>Raíz:</strong> $x+5\ge0\iff x\ge-5$. <strong>Logaritmo:</strong> $x+6\gt0$ y además, al estar en el denominador, $\ln(x+6)\ne0\iff x\ne-5$.</p>
<p>Juntando: $x\ge-5$, $x\ne-5$, $x\gt-6$, $x\le1$.</p>
<p class="res">$\text{Dom}(f)=(-5,\,1]$</p>
<p class="crit">Criterio: 1 punto el arcoseno (0,5 cada desigualdad), 0,5 raíz y logaritmo, 0,5 intersección final (fijarse en que $x=-5$ anula el denominador).</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $-1+i=\sqrt2_{3\pi/4}$, así que $4\sqrt2(-1+i)=8_{3\pi/4}$. Raíces cúbicas: módulo $\sqrt[3]8=2$ y argumentos $\frac{3\pi/4+2k\pi}{3}$:</p>
$$\theta_0=\frac\pi4,\qquad \theta_1=\frac{11\pi}{12},\qquad \theta_2=\frac{19\pi}{12}.$$
<p>Con $\cos\frac{11\pi}{12}=-\frac{\sqrt6+\sqrt2}4$, $\sin\frac{11\pi}{12}=\frac{\sqrt6-\sqrt2}4$, $\cos\frac{19\pi}{12}=\frac{\sqrt6-\sqrt2}4$, $\sin\frac{19\pi}{12}=-\frac{\sqrt6+\sqrt2}4$:</p>
$$z_0=\sqrt2+\sqrt2\,i,\qquad z_1=-\frac{\sqrt6+\sqrt2}{2}+\frac{\sqrt6-\sqrt2}{2}i,\qquad z_2=\frac{\sqrt6-\sqrt2}{2}-\frac{\sqrt6+\sqrt2}{2}i.$$
<p>(b) Las tres raíces tienen el mismo módulo y sus argumentos difieren en $\frac{2\pi}3$: son los vértices de un <strong>triángulo equilátero</strong> inscrito en la circunferencia de radio $r=2$. Su lado es $\ell=r\sqrt3=2\sqrt3$ y su área:</p>
$$A=\frac{\sqrt3}{4}\ell^2=\frac{\sqrt3}{4}\cdot12=3\sqrt3.$$
<p class="res">$A=3\sqrt3\approx5{,}20$</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
$$f'(x)=\lim_{h\to0}\frac{\frac1{\sqrt{2x+2h+1}}-\frac1{\sqrt{2x+1}}}{h}=\lim_{h\to0}\frac{\sqrt{2x+1}-\sqrt{2x+2h+1}}{h\sqrt{2x+2h+1}\sqrt{2x+1}}.$$
<p>Multiplicamos y dividimos por el conjugado $\sqrt{2x+1}+\sqrt{2x+2h+1}$; el numerador queda $(2x+1)-(2x+2h+1)=-2h$:</p>
$$f'(x)=\lim_{h\to0}\frac{-2}{\sqrt{2x+2h+1}\sqrt{2x+1}\left(\sqrt{2x+1}+\sqrt{2x+2h+1}\right)}=\frac{-2}{(2x+1)\cdot2\sqrt{2x+1}}.$$
<p class="res">$f'(x)=-\dfrac{1}{(2x+1)^{3/2}}$</p>
<p class="crit">Comprobación con las reglas: $f=(2x+1)^{-1/2}$, $f'=-\frac12(2x+1)^{-3/2}\cdot2$. Si no se usa la definición, máximo 0,5 puntos.</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) $27+27=54=6\cdot3\cdot3$ ✔. Derivando implícitamente:</p>
$$3x^2+3y^2y'=6y+6xy'\ \Rightarrow\ y'=\frac{2y-x^2}{y^2-2x}.$$
<p>En $(3,3)$: $y'=\frac{6-9}{9-6}=-1$. Tangente: $y-3=-(x-3)$.</p>
<p class="res">$y=-x+6$</p>
<p>(b) Tangente horizontal: $y'=0\iff 2y=x^2$ (con $y^2\ne2x$). Sustituyendo $y=\frac{x^2}2$ en la curva:</p>
$$x^3+\frac{x^6}{8}=6x\cdot\frac{x^2}{2}=3x^3\ \Rightarrow\ \frac{x^6}8=2x^3\ \Rightarrow\ x^3=16\quad(x\ne0).$$
<p>$x=\sqrt[3]{16}=2^{4/3}$ e $y=\frac{x^2}2=2^{5/3}$. Comprobamos $y^2-2x=2^{10/3}-2^{7/3}\ne0$ ✔.</p>
<p class="res">$\left(2\sqrt[3]{2},\ 2\sqrt[3]{4}\right)\approx(2{,}52,\ 3{,}17)$</p>
</div>

<h2>Problema 5</h2>
<div class="ans">
<p>$2\cdot\frac{e^x+e^{-x}}2-\frac{e^x-e^{-x}}2=2$. Multiplicando por 2: $e^x+3e^{-x}=4$. Con $u=e^x\gt0$:</p>
$$u^2-4u+3=0\ \Rightarrow\ u=1\ \text{o}\ u=3.$$
<p class="res">$x=0$ y $x=\ln3$</p>
</div>

<h2>Problema 6</h2>
<div class="ans">
<p>$y=\frac{e^x-1}{e^x+1}\Rightarrow y e^x+y=e^x-1\Rightarrow e^x(1-y)=1+y\Rightarrow e^x=\frac{1+y}{1-y}$.</p>
<p>Como $f'(x)=\frac{2e^x}{(e^x+1)^2}\gt0$, $f$ es creciente; $\lim_{-\infty}f=-1$, $\lim_{+\infty}f=1$, así que $\text{Im}(f)=(-1,1)$.</p>
<p class="res">$f^{-1}(x)=\ln\dfrac{1+x}{1-x}$, $\ \text{Dom}(f^{-1})=(-1,1)$, $\ \text{Im}(f^{-1})=\mathbb R$</p>
<p class="crit">Observación: $f(x)=\tanh\frac x2$, de modo que $f^{-1}(x)=2\,\text{argtanh}\,x$.</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen parcial de prueba 2",
  sub: "Cálculo I · Temas 1 a 7: inecuaciones, polares y cónicas, límites, optimización",
  desc: "Dominio con logaritmo y raíz, parábola en polares, límites sin L'Hôpital, rectángulo bajo una parábola, ecuación compleja y derivación logarítmica.",
  dur: "1 h 50 min", pts: "10 puntos",
  instr: "<p>Justifica todas las respuestas. En el problema 3 no se puede usar la regla de L'Hôpital.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<p>Halla el dominio de la función</p>
$$f(x)=\sqrt{\ln\left(\frac{x^2-3x}{x+5}\right)}.$$

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<p>Considera la curva de ecuación polar $r=\dfrac{4}{1-\cos\alpha}$.</p>
<ol class="parts">
<li>Escribe su ecuación en coordenadas cartesianas e identifica de qué curva se trata, dando sus elementos (vértice, foco y eje).</li>
<li>Halla, en cartesianas, los puntos de corte con la circunferencia $r=4$.</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Calcula, sin utilizar la regla de L'Hôpital:</p>
<ol class="parts">
<li>$\displaystyle\lim_{x\to0}\frac{e^{x^2}-\cos x}{x\sin x}$</li>
<li>$\displaystyle\lim_{x\to0}\left(1+\sin2x\right)^{1/x}$</li>
</ol>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<p>Se inscribe un rectángulo en la región limitada por la parábola $y=12-x^2$ y el eje $OX$, con un lado sobre el eje $OX$ y los dos vértices superiores sobre la parábola. Halla las dimensiones del rectángulo de área máxima y el valor de esa área. Justifica que se trata de un máximo.</p>

<h2>Problema 5 <span class="pts">(1 punto)</span></h2>
<p>Halla todos los números complejos que cumplen $\bar z=z^2$.</p>

<h2>Problema 6 <span class="pts">(1 punto)</span></h2>
<p>Sea $f(x)=x^{\sin x}$ para $x\gt0$. Calcula $f'\!\left(\frac\pi2\right)$.</p>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>La raíz exige $\ln\left(\frac{x^2-3x}{x+5}\right)\ge0\iff\frac{x^2-3x}{x+5}\ge1$ (esto ya garantiza que el argumento del logaritmo es positivo).</p>
$$\frac{x^2-3x}{x+5}-1=\frac{x^2-4x-5}{x+5}=\frac{(x-5)(x+1)}{x+5}\ge0.$$
<p>Tabla de signos con $-5$, $-1$, $5$: negativo en $(-\infty,-5)$, positivo en $(-5,-1)$, negativo en $(-1,5)$, positivo en $(5,\infty)$. Los ceros del numerador se incluyen; $x=-5$ no.</p>
<p class="res">$\text{Dom}(f)=(-5,-1]\cup[5,\infty)$</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $r-r\cos\alpha=4\Rightarrow r=4+x$. Elevando al cuadrado: $x^2+y^2=16+8x+x^2$:</p>
<p class="res">$y^2=8(x+2)$</p>
<p>Es una <strong>parábola</strong> de eje $OX$ (eje $y=0$), abierta hacia la derecha, con vértice $(-2,0)$. Con la forma $y^2=2p(x-x_0)$: $2p=8$, $p=4$, y el foco está a distancia $\frac p2=2$ del vértice: <strong>foco $(0,0)$</strong> (el polo, como corresponde a una cónica en la forma $r=\frac{p}{1-e\cos\alpha}$ con $e=1$). Directriz: $x=-4$.</p>
<p>(b) $r=4$: $4=\frac4{1-\cos\alpha}\Rightarrow\cos\alpha=0\Rightarrow\alpha=\pm\frac\pi2$.</p>
<p class="res">$(0,4)$ y $(0,-4)$</p>
<p>Comprobación: $16=8(0+2)$ ✔.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) Usamos desarrollos (o equivalencias): $e^{x^2}=1+x^2+o(x^2)$, $\cos x=1-\frac{x^2}2+o(x^2)$. Numerador: $\frac32x^2+o(x^2)$. Denominador: $x\sin x\sim x^2$.</p>
<p class="res">$\displaystyle\lim=\frac32$</p>
<p>(b) Indeterminación $1^\infty$: $\lim f^g=e^{\lim g(f-1)}$ con $g(f-1)=\frac{\sin2x}{x}\to2$ (porque $\sin2x\sim2x$).</p>
<p class="res">$\displaystyle\lim=e^2$</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>Por simetría, los vértices superiores son $(\pm x,\,12-x^2)$ con $0\lt x\lt\sqrt{12}$. Área:</p>
$$A(x)=2x(12-x^2)=24x-2x^3,\qquad A'(x)=24-6x^2=0\iff x=2.$$
<p>$A''(x)=-12x\lt0$ en $x=2$: <strong>máximo</strong> (además $A\to0$ en los extremos del intervalo).</p>
<p class="res">Base $4$, altura $8$, área máxima $32$</p>
</div>

<h2>Problema 5</h2>
<div class="ans">
<p>Tomando módulos: $|z|=|z|^2\Rightarrow|z|=0$ o $|z|=1$.</p>
<p>• $|z|=0$: $z=0$, que es solución.</p>
<p>• $|z|=1$: $\bar z=\frac1z$, y la ecuación queda $\frac1z=z^2\iff z^3=1$: las raíces cúbicas de la unidad.</p>
<p class="res">$z=0,\ \ z=1,\ \ z=-\frac12\pm\frac{\sqrt3}2i$</p>
</div>

<h2>Problema 6</h2>
<div class="ans">
<p>Derivación logarítmica: $\ln f=\sin x\,\ln x\Rightarrow\frac{f'}f=\cos x\ln x+\frac{\sin x}{x}$.</p>
<p>En $x=\frac\pi2$: $\cos\frac\pi2=0$, $\sin\frac\pi2=1$, $f\left(\frac\pi2\right)=\frac\pi2$. Así $f'\left(\frac\pi2\right)=\frac\pi2\cdot\frac{1}{\pi/2}$.</p>
<p class="res">$f'\!\left(\frac\pi2\right)=1$</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen parcial de prueba 3",
  sub: "Cálculo I · Temas 1 a 7: valor absoluto, polinomios complejos, derivabilidad, Taylor, Bolzano",
  desc: "Inecuación con valor absoluto y supremos, factorización compleja, derivabilidad de x² sin(1/x), Taylor y límite, raíz única y argsinh.",
  dur: "1 h 50 min", pts: "10 puntos",
  instr: "<p>Justifica todas las respuestas. Se puede usar calculadora no programable solo en el problema 5.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<ol class="parts">
<li>Resuelve la inecuación $|x^2-4|\lt3x$.</li>
<li>Sea $A$ el conjunto de sus soluciones. Calcula, si existen, el supremo, el ínfimo, el máximo y el mínimo de $A$.</li>
</ol>

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<p>Sea $p(z)=z^4-2z^3+6z^2-8z+8$.</p>
<ol class="parts">
<li>Comprueba que $z=2i$ es raíz de $p$.</li>
<li>Halla todas las raíces de $p$ y descompón $p$ en factores irreducibles con coeficientes reales.</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Se considera la función</p>
$$f(x)=\begin{cases}x^2\sin\dfrac1x & x\ne0\\[4pt] 0 & x=0\end{cases}$$
<ol class="parts">
<li>Estudia la continuidad de $f$ en $x=0$.</li>
<li>Estudia la derivabilidad de $f$ en $x=0$ aplicando la definición.</li>
<li>Calcula $f'(x)$ para $x\ne0$ y estudia si $f'$ es continua en $x=0$.</li>
</ol>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<ol class="parts">
<li>Calcula el polinomio de MacLaurin de grado 3 de $f(x)=\ln(1+\sin x)$.</li>
<li>Utilízalo para calcular $\displaystyle\lim_{x\to0}\frac{\ln(1+\sin x)-x}{x^2}$.</li>
</ol>

<h2>Problema 5 <span class="pts">(1 punto)</span></h2>
<p>Demuestra que la ecuación $x^5+x-1=0$ tiene exactamente una solución real y localízala en un intervalo de longitud $\frac14$.</p>

<h2>Problema 6 <span class="pts">(1 punto)</span></h2>
<ol class="parts">
<li>Demuestra, a partir de la definición, que $\cosh2x=1+2\sinh^2x$.</li>
<li>Calcula el valor exacto de $\text{argsinh}\,\frac34$.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>(a) Como $|x^2-4|\ge0$, hace falta $3x\gt0$. Entonces la inecuación equivale a $-3x\lt x^2-4\lt3x$:</p>
<p>• $x^2-3x-4\lt0\iff(x-4)(x+1)\lt0\iff-1\lt x\lt4$.</p>
<p>• $x^2+3x-4\gt0\iff(x+4)(x-1)\gt0\iff x\lt-4$ o $x\gt1$.</p>
<p>Intersección (con $x\gt0$):</p>
<p class="res">$A=(1,4)$</p>
<p>(b) $\sup A=4$ e $\inf A=1$. Como $A$ es abierto, ni 1 ni 4 pertenecen a $A$: <strong>no tiene máximo ni mínimo</strong>.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $(2i)^4=16$, $(2i)^3=-8i$, $(2i)^2=-4$: $p(2i)=16+16i-24-16i+8=0$ ✔.</p>
<p>(b) Coeficientes reales, así que $-2i$ también es raíz y $(z-2i)(z+2i)=z^2+4$ divide a $p$. Dividiendo: $p(z)=(z^2+4)(z^2-2z+2)$. Las raíces del segundo factor son $z=\frac{2\pm\sqrt{4-8}}{2}=1\pm i$.</p>
<p class="res">Raíces: $\pm2i,\ 1\pm i$ · $\ p(z)=(z^2+4)(z^2-2z+2)$</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) $\left|x^2\sin\frac1x\right|\le x^2\to0$: por el criterio del sándwich (o "cero por acotada"), $\lim_{x\to0}f(x)=0=f(0)$. <strong>Continua.</strong></p>
<p>(b) $f'(0)=\lim_{h\to0}\frac{h^2\sin(1/h)-0}{h}=\lim_{h\to0}h\sin\frac1h=0$ (cero por acotada). <strong>Derivable, con $f'(0)=0$.</strong></p>
<p>(c) Para $x\ne0$: $f'(x)=2x\sin\frac1x+x^2\cos\frac1x\cdot\left(-\frac1{x^2}\right)=2x\sin\frac1x-\cos\frac1x$.</p>
<p>$2x\sin\frac1x\to0$ pero $\cos\frac1x$ no tiene límite en 0 (oscila entre $-1$ y $1$). Por tanto $\lim_{x\to0}f'(x)$ no existe.</p>
<p class="res">$f'$ no es continua en 0 (discontinuidad esencial), aunque $f$ sea derivable</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) Con $u=\sin x=x-\frac{x^3}6+o(x^3)$ y $\ln(1+u)=u-\frac{u^2}2+\frac{u^3}3+o(u^3)$:</p>
$$u^2=x^2+o(x^3),\quad u^3=x^3+o(x^3)\ \Rightarrow\ \ln(1+\sin x)=x-\frac{x^3}6-\frac{x^2}2+\frac{x^3}3+o(x^3).$$
<p class="res">$P_3(x)=x-\dfrac{x^2}2+\dfrac{x^3}6$</p>
<p>(b) $\frac{\ln(1+\sin x)-x}{x^2}=\frac{-\frac{x^2}2+\frac{x^3}6+o(x^3)}{x^2}\to-\frac12$.</p>
<p class="res">$\displaystyle\lim=-\frac12$</p>
</div>

<h2>Problema 5</h2>
<div class="ans">
<p><strong>Existencia</strong>: $g(x)=x^5+x-1$ es continua; $g(0)=-1\lt0$ y $g(1)=1\gt0$. Por Bolzano hay una raíz en $(0,1)$.</p>
<p><strong>Unicidad</strong>: $g'(x)=5x^4+1\gt0$: $g$ es estrictamente creciente, así que tiene como máximo una raíz (también por Rolle: si hubiera dos, $g'$ se anularía entre ellas).</p>
<p><strong>Localización</strong> (bisección): $g(0{,}5)=-0{,}47\lt0$; $g(0{,}75)\approx-0{,}0127\lt0$; $g(1)=1\gt0$.</p>
<p class="res">La raíz está en $(0{,}75,\ 1)$ (su valor es $\approx0{,}7549$)</p>
</div>

<h2>Problema 6</h2>
<div class="ans">
<p>(a) $1+2\sinh^2x=1+2\cdot\frac{e^{2x}-2+e^{-2x}}4=1+\frac{e^{2x}+e^{-2x}}2-1=\cosh2x$ ✔.</p>
<p>(b) $\text{argsinh}\,x=\ln\left(x+\sqrt{x^2+1}\right)$: $\ \frac34+\sqrt{\frac9{16}+1}=\frac34+\frac54=2$.</p>
<p class="res">$\text{argsinh}\,\frac34=\ln2$</p>
</div>
`}
];
