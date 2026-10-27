Object.assign(THEORY.calculo, {

/* ================================================================== */
limites: String.raw`
<h2>1. Idea y definición de límite</h2>
<p>$\lim_{x\to a}f(x)=L$ significa que $f(x)$ se acerca tanto como queramos a $L$ cuando $x$ se acerca suficientemente a $a$ (sin llegar a ser $a$). No importa cuánto vale $f(a)$, ni siquiera si existe.</p>
<div class="def"><span class="label">Definición formal (ε-δ)</span>
$$\lim_{x\to a}f(x)=L \iff \forall\varepsilon\gt0\ \exists\delta\gt0:\ 0\lt|x-a|\lt\delta \Rightarrow |f(x)-L|\lt\varepsilon$$
<p>En palabras: para cualquier "tolerancia" $\varepsilon$ alrededor de $L$, hay un entorno de $a$ donde $f$ cumple esa tolerancia.</p></div>
<h3>Límites laterales</h3>
<p>$\lim_{x\to a^-}$ (por la izquierda) y $\lim_{x\to a^+}$ (por la derecha). El límite existe si y solo si existen los dos laterales y coinciden. Se usan en funciones a trozos, con valores absolutos y en puntos donde la función solo existe a un lado.</p>
<h3>Límites infinitos y en el infinito: asíntotas</h3>
<ul><li>$\lim_{x\to a^\pm}f(x)=\pm\infty$: <strong>asíntota vertical</strong> $x=a$ (suele estar donde se anula un denominador o en el borde del dominio de un logaritmo).</li>
<li>$\lim_{x\to\pm\infty}f(x)=L$: <strong>asíntota horizontal</strong> $y=L$.</li>
<li><strong>Asíntota oblicua</strong> $y=mx+n$ con $m=\lim\frac{f(x)}x$ y $n=\lim(f(x)-mx)$ (si $m$ es finito y no nulo).</li></ul>

<h2>2. Propiedades y cálculo</h2>
<div class="thm"><span class="label">Álgebra de límites</span><p>Si $\lim f=L$ y $\lim g=M$ (finitos): $\lim(f\pm g)=L\pm M$, $\lim fg=LM$, $\lim\frac fg=\frac LM$ si $M\ne0$, $\lim f^g=L^M$ si $L\gt0$. Además, si $f$ es continua, $\lim f(g(x))=f(\lim g(x))$.</p></div>
<div class="thm"><span class="label">Criterio del cero por acotada</span><p>Si $\lim f=0$ y $g$ está acotada cerca de $a$, entonces $\lim f\cdot g=0$. Ejemplo: $\lim_{x\to0}x\sin\frac1x=0$.</p></div>
<div class="thm"><span class="label">Criterio del sándwich (de la entrada)</span><p>Si $f\le g\le h$ cerca de $a$ y $\lim f=\lim h=L$, entonces $\lim g=L$.</p></div>
<h3>Aritmética con infinitos</h3>
<p>Determinados: $\infty+\infty=\infty$, $k\cdot\infty=\pm\infty$ ($k\ne0$), $\frac k\infty=0$, $\frac k{0^\pm}=\pm\infty$ ($k\ne0$). <strong>Indeterminados</strong>: $\frac00$, $\frac\infty\infty$, $0\cdot\infty$, $\infty-\infty$, $1^\infty$, $0^0$, $\infty^0$.</p>

<h3>Límites fundamentales</h3>
<div class="formula">$$\lim_{x\to0}\frac{\sin x}x=1\qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12\qquad \lim_{x\to0}\frac{e^x-1}x=1\qquad \lim_{x\to0}\frac{\ln(1+x)}x=1$$
$$\lim_{x\to\pm\infty}\left(1+\frac1x\right)^x=e\qquad \lim_{x\to0}(1+x)^{1/x}=e$$</div>
<div class="demo"><p>$\frac{\sin x}x\to1$ se ve con el sándwich: en la circunferencia unidad, comparando áreas, $\cos x\le\frac{\sin x}x\le1$ para $x$ pequeño, y $\cos x\to1$.</p></div>

<h3>Técnicas para cada indeterminación</h3>
<ul>
<li><strong>$\frac00$ con polinomios</strong>: factoriza y simplifica el factor $(x-a)$.</li>
<li><strong>$\frac00$ con raíces</strong>: conjugado.</li>
<li><strong>$\frac\infty\infty$ en cocientes de polinomios</strong>: compara grados. Mayor arriba → $\infty$; iguales → cociente de coeficientes líderes; mayor abajo → 0.</li>
<li><strong>$\infty-\infty$</strong>: común denominador o conjugado.</li>
<li><strong>$1^\infty$</strong>: $\lim f^g=e^{\lim g(f-1)}$.</li>
<li><strong>$0^0$, $\infty^0$</strong>: escribe $f^g=e^{g\ln f}$.</li>
<li><strong>Cualquier $\frac00$ "difícil"</strong>: infinitésimos equivalentes, Taylor o L'Hôpital.</li></ul>

<h2>3. Infinitésimos e infinitos</h2>
<div class="def"><span class="label">Definiciones</span><p>$f$ es un <strong>infinitésimo</strong> en $a$ si $\lim_{x\to a}f=0$. Dos infinitésimos son <strong>equivalentes</strong> ($f\sim g$) si $\lim\frac fg=1$. $f$ es de <strong>orden superior</strong> a $g$ si $\lim\frac fg=0$ (se escribe $f=o(g)$).</p></div>
<div class="thm"><span class="label">Principio de sustitución</span><p>En un límite, un <strong>factor</strong> o <strong>divisor</strong> se puede sustituir por otro equivalente sin cambiar el resultado.</p></div>
<p>Tabla (con $u=u(x)\to0$; vale con cualquier expresión que tienda a 0):</p>
<div class="formula">$$\sin u\sim\tan u\sim\arcsin u\sim\arctan u\sim\sinh u\sim\tanh u\sim e^u-1\sim\ln(1+u)\sim u$$
$$1-\cos u\sim\frac{u^2}2\qquad \cosh u-1\sim\frac{u^2}2\qquad a^u-1\sim u\ln a\qquad (1+u)^\alpha-1\sim\alpha u\qquad \ln u\sim u-1\ (u\to1)$$</div>
<h3>Jerarquía de infinitos ($x\to\infty$)</h3>
<p>$\ln x\ll x^p\ll a^x\ll x^x$ ($p\gt0$, $a\gt1$): cada uno es despreciable frente al siguiente. Así $\lim\frac{\ln x}{x}=0$ y $\lim\frac{x^{100}}{e^x}=0$.</p>
<div class="num" data-a="1"><p>$\displaystyle\lim_{x\to0}\frac{\ln(1+x\sin x)}{x^2}$.</p>
<div class="why"><p>$\ln(1+u)\sim u$ con $u=x\sin x\to0$. Y $x\sin x\sim x\cdot x=x^2$. El cociente queda $\frac{x^2}{x^2}\to1$.</p></div></div>

<h2>4. Continuidad</h2>
<div class="def"><span class="label">Función continua en $a$</span><p>$\lim_{x\to a}f(x)=f(a)$. Es decir: $f(a)$ existe, el límite existe y coinciden. Continua en un intervalo: en todos sus puntos (en los extremos, con el lateral correspondiente).</p></div>
<div class="thm"><span class="label">Propiedades</span><p>Sumas, productos, cocientes (donde el denominador no se anula) y composiciones de continuas son continuas. Polinomios, exponenciales, logaritmos, trigonométricas, raíces e hiperbólicas son continuas en su dominio.</p></div>
<h3>Clasificación de discontinuidades</h3>
<table>
<tr><th>Tipo</th><th>Qué pasa</th><th>Ejemplo en $x=0$</th></tr>
<tr><td>Evitable</td><td>Existe el límite (finito) pero $\ne f(a)$ o $f(a)$ no existe. Se "arregla" redefiniendo $f(a)$.</td><td>$\frac{\sin x}x$</td></tr>
<tr><td>De salto finito</td><td>Laterales finitos y distintos. Salto $=|L^+-L^-|$.</td><td>$\frac{|x|}x$</td></tr>
<tr><td>De salto infinito / asintótica</td><td>Algún lateral es infinito.</td><td>$\frac1x$</td></tr>
<tr><td>Esencial</td><td>Algún lateral no existe (oscila).</td><td>$\sin\frac1x$</td></tr>
</table>
<div class="mc"><p>$f(x)=e^{1/x}$ en $x=0$ tiene una discontinuidad…</p><ul><li data-ok>de salto infinito: por la derecha $\infty$, por la izquierda 0</li><li>evitable</li><li>de salto finito</li><li>no tiene: es continua</li></ul>
<div class="why"><p>$\frac1x\to+\infty$ por la derecha ($e^{+\infty}=\infty$) y $\to-\infty$ por la izquierda ($e^{-\infty}=0$).</p></div></div>

<h2>5. Teoremas de las funciones continuas</h2>
<div class="thm"><span class="label">Teorema de Bolzano</span><p>Si $f$ es continua en $[a,b]$ y $f(a)f(b)\lt0$, existe $c\in(a,b)$ con $f(c)=0$.</p></div>
<div class="thm"><span class="label">Teorema de los valores intermedios (Darboux)</span><p>Si $f$ es continua en $[a,b]$, toma todos los valores entre $f(a)$ y $f(b)$.</p></div>
<div class="thm"><span class="label">Teorema de Weierstrass</span><p>Si $f$ es continua en $[a,b]$ (cerrado y acotado), alcanza un máximo y un mínimo absolutos en $[a,b]$.</p></div>
<div class="key"><span class="label">Uso típico en ejercicios</span>
<ul><li>"Demuestra que la ecuación $g(x)=h(x)$ tiene solución en $[a,b]$": aplica Bolzano a $f=g-h$.</li>
<li>Bolzano también da un método numérico: la <strong>bisección</strong> (partir el intervalo por la mitad y quedarse con la mitad donde cambia el signo).</li>
<li>Para que sea <strong>única</strong>, añade monotonía ($f'\gt0$ o $f'\lt0$).</li></ul></div>
<div class="tf" data-a="v"><p>Un polinomio de grado impar siempre tiene una raíz real (se puede demostrar con Bolzano).</p>
<div class="why"><p>Cuando $x\to\pm\infty$ toma signos opuestos (el término de mayor grado manda), así que hay un intervalo donde cambia de signo.</p></div></div>
`,

/* ================================================================== */
derivadas: String.raw`
<h2>1. Definición e interpretaciones</h2>
<div class="def"><span class="label">Derivada en un punto</span>
$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$$
<p>$f$ es derivable en $a$ si el límite existe y es finito.</p></div>
<ul><li><strong>Geométrica</strong>: pendiente de la recta tangente. El cociente $\frac{f(a+h)-f(a)}h$ es la pendiente de una secante, que se convierte en tangente cuando $h\to0$.</li>
<li><strong>Física</strong>: velocidad instantánea (si $f$ es la posición), y en general ritmo de cambio instantáneo de una magnitud respecto a otra.</li>
<li><strong>Aproximación lineal</strong>: $f(a+h)\approx f(a)+f'(a)h$. El diferencial es $df=f'(a)\,dx$.</li></ul>
<h3>Derivadas laterales</h3>
<p>$f'(a^-)=\lim_{h\to0^-}\frac{f(a+h)-f(a)}h$ y $f'(a^+)$ igual con $h\to0^+$. $f$ es derivable en $a$ si y solo si existen las dos y son iguales. Si son distintas hay un <strong>punto anguloso</strong>; si son infinitas, tangente vertical.</p>
<div class="thm"><span class="label">Derivable ⇒ continua</span><p>Si $f$ es derivable en $a$, es continua en $a$. El recíproco es falso ($|x|$ en 0).</p></div>
<div class="demo"><p>$f(a+h)-f(a)=\frac{f(a+h)-f(a)}h\cdot h\to f'(a)\cdot0=0$.</p></div>
<div class="key"><span class="label">Funciones a trozos con parámetros</span><p>Para que $f$ sea derivable en el punto de unión $a$: (1) continuidad, $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$; (2) derivadas laterales iguales. Si cada trozo es derivable, las laterales se pueden calcular derivando cada fórmula y evaluando en $a$ (siempre que $f$ sea continua en $a$).</p></div>

<h2>2. Reglas de derivación</h2>
<div class="formula">$$(f\pm g)'=f'\pm g'\qquad (kf)'=kf'\qquad (fg)'=f'g+fg'\qquad \left(\frac fg\right)'=\frac{f'g-fg'}{g^2}$$</div>
<div class="thm"><span class="label">Regla de la cadena</span>
$$(g\circ f)'(x)=g'(f(x))\cdot f'(x)\qquad\text{o, en notación de Leibniz,}\qquad \frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$
<p>"Derivada de la de fuera, evaluada en la de dentro, por la derivada de la de dentro."</p></div>
<div class="thm"><span class="label">Derivada de la función inversa</span>
$$(f^{-1})'(y)=\frac1{f'(x)},\qquad y=f(x),\ f'(x)\ne0$$</div>
<div class="demo"><p>Derivando $f(f^{-1}(y))=y$ con la cadena: $f'(f^{-1}(y))\cdot(f^{-1})'(y)=1$.</p></div>
<div class="steps"><p>Deduce $(\arctan x)'$ con la fórmula de la inversa.</p>
<div class="step">$y=\arctan x\iff x=\tan y$, con $\frac{dx}{dy}=1+\tan^2y$.</div>
<div class="step">$\frac{dy}{dx}=\frac1{1+\tan^2y}=\frac1{1+x^2}$.</div>
<div class="step">Igual se obtienen $(\arcsin x)'=\frac1{\sqrt{1-x^2}}$ (usando $\cos y=\sqrt{1-\sin^2y}$) y $(\text{argtanh}\,x)'=\frac1{1-x^2}$.</div></div>

<h2>3. Tabla completa</h2>
<table>
<tr><th>$f$</th><th>$f'$</th><th>$f$</th><th>$f'$</th></tr>
<tr><td>$x^r$</td><td>$rx^{r-1}$</td><td>$\sqrt[n]x$</td><td>$\frac1{n\sqrt[n]{x^{n-1}}}$</td></tr>
<tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$\log_ax$</td><td>$\frac1x\log_ae=\frac1{x\ln a}$</td></tr>
<tr><td>$e^x$</td><td>$e^x$</td><td>$\ln x$</td><td>$\frac1x$</td></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\arcsin x$</td><td>$\frac1{\sqrt{1-x^2}}$</td></tr>
<tr><td>$\cos x$</td><td>$-\sin x$</td><td>$\arccos x$</td><td>$\frac{-1}{\sqrt{1-x^2}}$</td></tr>
<tr><td>$\tan x$</td><td>$\frac1{\cos^2x}=1+\tan^2x$</td><td>$\arctan x$</td><td>$\frac1{1+x^2}$</td></tr>
<tr><td>$\cot x$</td><td>$\frac{-1}{\sin^2x}$</td><td>$\text{arccot}\,x$</td><td>$\frac{-1}{1+x^2}$</td></tr>
<tr><td>$\sinh x$</td><td>$\cosh x$</td><td>$\text{argsinh}\,x$</td><td>$\frac1{\sqrt{x^2+1}}$</td></tr>
<tr><td>$\cosh x$</td><td>$\sinh x$</td><td>$\text{argcosh}\,x$</td><td>$\frac1{\sqrt{x^2-1}}$</td></tr>
<tr><td>$\tanh x$</td><td>$\frac1{\cosh^2x}$</td><td>$\text{argtanh}\,x$</td><td>$\frac1{1-x^2}$</td></tr>
</table>
<div class="mc"><p>$\frac{d}{dx}\ln\sqrt{\frac{1-x}{1+x}}=$</p>
<ul><li data-ok>$\dfrac{-1}{1-x^2}$</li><li>$\dfrac{1}{1-x^2}$</li><li>$\dfrac{-2}{1-x^2}$</li><li>$\dfrac{1}{2}\ln\dfrac{1-x}{1+x}$</li></ul>
<div class="why"><p>Simplifica antes de derivar: $\frac12[\ln(1-x)-\ln(1+x)]$. Derivada: $\frac12\left[\frac{-1}{1-x}-\frac1{1+x}\right]=\frac12\cdot\frac{-2}{1-x^2}$.</p></div></div>

<h2>4. Derivadas de orden superior</h2>
<p>$f''=(f')'$, etc. Algunas fórmulas de orden $n$:</p>
<div class="formula">$$(e^{ax})^{(n)}=a^ne^{ax}\qquad (\sin x)^{(n)}=\sin\left(x+\frac{n\pi}2\right)\qquad \left(\frac1{x}\right)^{(n)}=\frac{(-1)^nn!}{x^{n+1}}$$
$$\text{Leibniz: } (uv)^{(n)}=\sum_{k=0}^n\binom nk u^{(n-k)}v^{(k)}$$</div>

<h2>5. Derivación implícita</h2>
<p>Si $y$ viene definida por una ecuación $F(x,y)=0$, se deriva toda la ecuación respecto a $x$ tratando $y$ como función de $x$ (cada término con $y$ arrastra un $y'$ por la regla de la cadena):</p>
<div class="formula">$$\frac{d}{dx}(y^2)=2yy'\qquad \frac{d}{dx}(xy)=y+xy'\qquad \frac{d}{dx}\sin y=y'\cos y$$</div>
<h3>Derivada segunda implícita</h3>
<p>Deriva otra vez la ecuación ya derivada (o la expresión de $y'$), y sustituye $y'$ por lo ya calculado.</p>
<div class="steps"><p>Halla $y''$ en el punto $(0,1)$ de $x^2+y^2=1$.</p>
<div class="step">$2x+2yy'=0 \Rightarrow y'=-\frac xy$; en $(0,1)$: $y'=0$.</div>
<div class="step">Derivamos $x+yy'=0$: $1+(y')^2+yy''=0$.</div>
<div class="step">En $(0,1)$: $1+0+y''=0 \Rightarrow y''=-1$ (máximo: es la parte de arriba de la circunferencia).</div></div>
<h3>Derivación logarítmica</h3>
<p>Para $y=f(x)^{g(x)}$ o productos largos: $\ln y=g\ln f$, derivar y despejar: $y'=f^g\left(g'\ln f+g\frac{f'}f\right)$.</p>
<h3>Curvas paramétricas</h3>
<p>Si $x=x(t)$, $y=y(t)$: $\frac{dy}{dx}=\frac{y'(t)}{x'(t)}$. Útil para la astroide o la cicloide (ej. 33–34).</p>
<h3>Curvas en polares</h3>
<p>Con $x=r(\alpha)\cos\alpha$, $y=r(\alpha)\sin\alpha$, se aplica lo anterior tomando $\alpha$ como parámetro.</p>

<h2>6. Rectas tangente y normal; ángulo entre curvas</h2>
<div class="formula">$$\text{Tangente: } y-y_0=m(x-x_0),\ m=f'(x_0)\qquad \text{Normal: } y-y_0=-\frac1m(x-x_0)$$</div>
<p>El ángulo entre dos curvas que se cortan es el ángulo entre sus tangentes en el punto de corte:</p>
<div class="formula">$$\tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|\qquad(\text{ortogonales si } m_1m_2=-1)$$</div>
<div class="num" data-a="36.87" data-tol="0.1" data-unit="grados"><p>Ángulo con el que se cortan $y=x^2$ e $y=\sqrt x$ en el punto $(1,1)$.</p>
<div class="why"><p>$m_1=2$, $m_2=\frac12$. $\tan\theta=\left|\frac{2-1/2}{1+2\cdot\frac12}\right|=\frac34$, así que $\theta=\arctan\frac34\approx36{,}87^\circ$.</p></div></div>

<h2>7. Problemas de tasas relacionadas</h2>
<p>Cuando varias magnitudes dependen del tiempo y están ligadas por una ecuación, se deriva la ecuación respecto a $t$ (ej. 27–30 del libro).</p>
<div class="steps"><p>Un globo esférico pierde aire a $2$ cm³/min. ¿Con qué rapidez disminuye el radio cuando $V=64\pi$ cm³?</p>
<div class="step">$V=\frac43\pi r^3$. Con $V=64\pi$: $r^3=48$, $r\approx3{,}63$ cm.</div>
<div class="step">Derivando respecto de $t$: $\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}$.</div>
<div class="step">$-2=4\pi(3{,}63)^2\frac{dr}{dt} \Rightarrow \frac{dr}{dt}\approx-0{,}012$ cm/min.</div></div>
`,

/* ================================================================== */
aplicaciones: String.raw`
<h2>1. Monotonía y extremos relativos</h2>
<div class="thm"><span class="label">Monotonía</span><p>En un intervalo: $f'\gt0 \Rightarrow f$ estrictamente creciente; $f'\lt0 \Rightarrow$ estrictamente decreciente; $f'=0$ en todo el intervalo $\iff f$ constante. Si $f'=g'$ en un intervalo, $f=g+k$.</p></div>
<div class="def"><span class="label">Extremos</span><p>$f$ tiene un <strong>máximo relativo</strong> en $c$ si $f(c)\ge f(x)$ para $x$ cerca de $c$; <strong>absoluto</strong> si lo cumple en todo el dominio.</p></div>
<div class="thm"><span class="label">Condición necesaria (Fermat)</span><p>Si $f$ tiene un extremo relativo en un punto interior $c$ y es derivable allí, entonces $f'(c)=0$. Los candidatos a extremo son: puntos con $f'=0$, puntos donde $f$ no es derivable y extremos del intervalo.</p></div>
<div class="thm"><span class="label">Criterios suficientes</span>
<ul><li><strong>Primera derivada</strong>: si $f'$ pasa de $+$ a $-$ en $c$, máximo; de $-$ a $+$, mínimo; si no cambia, no hay extremo.</li>
<li><strong>Segunda derivada</strong>: $f'(c)=0$ y $f''(c)\lt0$ ⇒ máximo; $f''(c)\gt0$ ⇒ mínimo.</li>
<li><strong>Derivadas sucesivas</strong> (resumen del libro): si $f'(a)=\dots=f^{(n-1)}(a)=0$ y $f^{(n)}(a)\ne0$: con $n$ par hay extremo (mínimo si $f^{(n)}(a)\gt0$, máximo si $\lt0$); con $n$ impar, punto de inflexión.</li></ul></div>
<div class="tf" data-a="f"><p>Si $f'(c)=0$, entonces $f$ tiene un máximo o un mínimo en $c$.</p>
<div class="why"><p>$f(x)=x^3$ tiene $f'(0)=0$ y en 0 hay un punto de inflexión, no un extremo.</p></div></div>

<h2>2. Concavidad e inflexión</h2>
<ul><li>$f''\gt0$: convexa (forma de U, "abierta hacia arriba"; la gráfica queda por encima de las tangentes).</li>
<li>$f''\lt0$: cóncava (forma de ∩).</li>
<li><strong>Punto de inflexión</strong>: donde cambia la curvatura. Candidatos: $f''=0$ o $f''$ no existe.</li></ul>
<div class="warn"><span class="label">Vocabulario</span><p>Según el libro, "cóncava" y "convexa" se usan a veces al revés. Lo seguro es decir "cóncava hacia arriba" (U, $f''\gt0$) o "cóncava hacia abajo" (∩, $f''\lt0$).</p></div>

<h2>3. Extremos absolutos</h2>
<div class="key"><span class="label">En un intervalo cerrado $[a,b]$ con $f$ continua</span><p>Por Weierstrass existen. Se comparan los valores de $f$ en: los puntos críticos interiores y los extremos $a$, $b$.</p></div>
<div class="key"><span class="label">En un intervalo abierto o una semirrecta</span><p>Además de los críticos, calcula los <strong>límites</strong> en los extremos abiertos. Puede no haber máximo o mínimo absoluto (por ejemplo, si el límite es mayor que todos los valores alcanzados).</p></div>

<h2>4. Teoremas del valor medio</h2>
<div class="thm"><span class="label">Rolle</span><p>$f$ continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$ ⇒ existe $c\in(a,b)$ con $f'(c)=0$.</p></div>
<div class="thm"><span class="label">Valor medio de Lagrange</span><p>$f$ continua en $[a,b]$ y derivable en $(a,b)$ ⇒ existe $c\in(a,b)$ con $f'(c)=\frac{f(b)-f(a)}{b-a}$.</p></div>
<div class="thm"><span class="label">Valor medio de Cauchy</span><p>$f,g$ en las mismas condiciones ⇒ existe $c$ con $[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)$. Es la base de L'Hôpital.</p></div>
<p>Interpretación de Lagrange: hay un punto donde la tangente es paralela a la cuerda; o bien, en algún instante la velocidad instantánea coincide con la media.</p>
<h3>Aplicaciones</h3>
<ul><li><strong>Contar raíces</strong>: entre dos raíces de $f$ hay una de $f'$. Si $f'$ no se anula, $f$ tiene como mucho una raíz. Si $f'$ tiene $k$ raíces, $f$ tiene como mucho $k+1$.</li>
<li><strong>Demostrar desigualdades</strong> (ej. 142): por ejemplo $|\sin a-\sin b|\le|a-b|$, porque $\frac{\sin a-\sin b}{a-b}=\cos c$ y $|\cos c|\le1$.</li></ul>
<div class="steps"><p>Demuestra que $\frac{x-1}x\lt\ln x\lt x-1$ para $x\gt1$ (ej. 142d).</p>
<div class="step">Lagrange a $\ln$ en $[1,x]$: $\ln x-\ln1=\frac1c(x-1)$ con $1\lt c\lt x$.</div>
<div class="step">Como $1\lt c\lt x$: $\frac1x\lt\frac1c\lt1$.</div>
<div class="step">Multiplicando por $x-1\gt0$: $\frac{x-1}x\lt\ln x\lt x-1$.</div></div>

<h2>5. Reglas de L'Hôpital</h2>
<div class="thm"><span class="label">Enunciado</span><p>Si $\lim\frac{f}{g}$ es $\frac00$ o $\frac\infty\infty$ (con $x\to a$ o $x\to\pm\infty$), $f,g$ derivables cerca y $g'\ne0$, y existe $\lim\frac{f'}{g'}=L$, entonces $\lim\frac fg=L$.</p></div>
<ul><li>Otras indeterminaciones se reducen a estas: $0\cdot\infty$ como $\frac{f}{1/g}$; $\infty-\infty$ con común denominador; $1^\infty$, $0^0$, $\infty^0$ tomando logaritmos.</li>
<li>Si $\frac{f'}{g'}$ no tiene límite, no se puede concluir nada (por ejemplo, $\frac{x+\sin x}x$).</li></ul>
<div class="warn"><span class="label">Error típico</span><p>Es la derivada del numerador entre la del denominador, <strong>no</strong> la derivada del cociente.</p></div>

<h2>6. Fórmula de Taylor</h2>
<div class="thm"><span class="label">Teorema de Taylor con resto de Lagrange</span>
$$f(x)=\underbrace{f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots+\frac{f^{(n)}(a)}{n!}(x-a)^n}_{P_n(x)}+R_n(x)$$
$$R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},\quad c\text{ entre }a\text{ y }x$$</div>
<p>$P_n$ es el único polinomio de grado $\le n$ que coincide con $f$ y sus $n$ primeras derivadas en $a$. Además $R_n(x)=o\big((x-a)^n\big)$: el error es despreciable frente a $(x-a)^n$ (desarrollo limitado).</p>
<h3>Desarrollos de MacLaurin (con su convergencia)</h3>
<table>
<tr><th>Desarrollo</th><th>Vale para</th></tr>
<tr><td>$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots+\frac{x^n}{n!}+o(x^n)$</td><td>$x\in\mathbb R$</td></tr>
<tr><td>$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^n\frac{x^{2n+1}}{(2n+1)!}+o(x^{2n+2})$</td><td>$\mathbb R$</td></tr>
<tr><td>$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n+1})$</td><td>$\mathbb R$</td></tr>
<tr><td>$\tan x=x+\frac{x^3}3+\frac{2x^5}{15}+o(x^6)$</td><td>$(-\frac\pi2,\frac\pi2)$</td></tr>
<tr><td>$\sinh x=x+\frac{x^3}{3!}+\frac{x^5}{5!}+\cdots$</td><td>$\mathbb R$</td></tr>
<tr><td>$\cosh x=1+\frac{x^2}{2!}+\frac{x^4}{4!}+\cdots$</td><td>$\mathbb R$</td></tr>
<tr><td>$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3-\cdots+(-1)^{n+1}\frac{x^n}n+o(x^n)$</td><td>$(-1,1]$</td></tr>
<tr><td>$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+\binom\alpha nx^n+o(x^n)$</td><td>$(-1,1)$</td></tr>
<tr><td>$\arctan x=x-\frac{x^3}3+\frac{x^5}5-\cdots$</td><td>$[-1,1]$</td></tr>
</table>
<div class="key"><span class="label">Operar con desarrollos</span>
<ul><li><strong>Sustituir</strong>: el de $e^{x^2}$ sale cambiando $x$ por $x^2$ en el de $e^x$.</li>
<li><strong>Multiplicar</strong>: multiplica polinomios y quédate solo hasta el grado que necesitas.</li>
<li><strong>Integrar o derivar</strong> término a término (así se obtiene $\arctan$ a partir de $\frac1{1+x^2}$).</li>
<li>Para límites: desarrolla hasta el primer término que no se cancela.</li></ul></div>
<h3>Aplicaciones</h3>
<ul><li><strong>Aproximar valores</strong> con cota de error usando $R_n$: por ejemplo $e\approx P_n(1)$ con error $\le\frac{3}{(n+1)!}$.</li>
<li><strong>Calcular límites</strong> sustituyendo por desarrollos.</li>
<li><strong>Derivadas en un punto</strong>: $f^{(n)}(a)=n!\cdot$(coeficiente de $(x-a)^n$).</li>
<li><strong>Estudio local</strong> de una curva (extremos, inflexión, posición respecto de la tangente): el primer término no nulo después del lineal decide.</li></ul>
<div class="num" data-a="0.0083333" data-tol="0.0002" data-show="1/120 ≈ 0,00833"><p>Se aproxima $\sin 1$ por $1-\frac16$. Da una cota del error usando el primer término despreciado.</p>
<div class="why"><p>El siguiente término es $\frac{x^5}{5!}$; en $x=1$ vale $\frac1{120}\approx0{,}00833$. En una serie alternada decreciente, el error es menor que el primer término despreciado.</p></div></div>

<h2>7. Representación gráfica de funciones</h2>
<div class="key"><span class="label">Guion completo</span><ol>
<li>Dominio, simetrías y periodicidad.</li>
<li>Cortes con los ejes.</li>
<li>Asíntotas verticales, horizontales y oblicuas.</li>
<li>$f'$: monotonía y extremos relativos.</li>
<li>$f''$: concavidad e inflexiones.</li>
<li>Tabla resumen y dibujo.</li></ol></div>
<p>También se puede ir al revés: dada la gráfica de $f$, esbozar la de $f'$ (donde $f$ crece, $f'\gt0$; en sus extremos, $f'=0$; donde $f$ es convexa, $f'$ crece). Así son los ejercicios 128–133 del libro.</p>

<h2>8. Resolución aproximada de ecuaciones: método de Newton</h2>
<div class="formula">$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$</div>
<p>Idea: sustituir la curva por su tangente en $x_n$ y tomar como siguiente aproximación el corte de esa tangente con el eje $OX$. Se para cuando dos iteraciones consecutivas difieren menos que el error pedido (ej. 135–136 del libro).</p>
<div class="steps"><p>Resuelve $x-\cos x=0$ partiendo de $x_0=1$.</p>
<div class="step">$f(x)=x-\cos x$, $f'(x)=1+\sin x$.</div>
<div class="step">$x_1=1-\frac{1-0{,}5403}{1+0{,}8415}=0{,}7504$. $x_2=0{,}7391$. $x_3=0{,}7391$.</div>
<div class="step">Solución $x\approx0{,}7391$ (las dos últimas coinciden en 4 decimales).</div></div>
<div class="tip"><span class="label">Antes de iterar</span><p>Localiza la raíz con Bolzano y elige un $x_0$ cerca. Si $f'(x_n)\approx0$, el método falla (la tangente es casi horizontal).</p></div>
`,

/* ================================================================== */
integrales: String.raw`
<h2>1. La integral de Riemann</h2>
<p>Queremos el área bajo $f\ge0$ entre $a$ y $b$. Partimos $[a,b]$ en trozos $a=x_0\lt x_1\lt\dots\lt x_n=b$ y aproximamos con rectángulos:</p>
<div class="formula">$$s(f,P)=\sum_{i=1}^n m_i\,\Delta x_i\ \ (\text{inferior})\qquad S(f,P)=\sum_{i=1}^n M_i\,\Delta x_i\ \ (\text{superior})$$</div>
<p>con $m_i$, $M_i$ el ínfimo y el supremo de $f$ en cada trozo. Si al refinar la partición las sumas inferiores y superiores se acercan a un mismo número, $f$ es <strong>integrable</strong> y ese número es $\int_a^bf(x)\,dx$.</p>
<div class="thm"><span class="label">Funciones integrables</span><p>Son integrables en $[a,b]$: las continuas, las monótonas y las acotadas con un número finito de discontinuidades.</p></div>
<h3>Propiedades</h3>
<ul><li>Linealidad: $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$.</li>
<li>Aditividad: $\int_a^bf=\int_a^cf+\int_c^bf$. Además $\int_a^af=0$ y $\int_b^af=-\int_a^bf$.</li>
<li>Monotonía: $f\le g \Rightarrow \int_a^bf\le\int_a^bg$. Y $\left|\int_a^bf\right|\le\int_a^b|f|$.</li>
<li>Si $f$ es impar, $\int_{-a}^af=0$; si es par, $\int_{-a}^af=2\int_0^af$.</li></ul>
<div class="thm"><span class="label">Teorema del valor medio integral</span><p>Si $f$ es continua en $[a,b]$, existe $c$ con $\int_a^bf=f(c)(b-a)$. $f(c)$ es el valor medio de $f$.</p></div>

<h2>2. Función integral y teorema fundamental</h2>
<div class="def"><span class="label">Función integral</span><p>$F(x)=\int_a^xf(t)\,dt$: el área acumulada desde $a$ hasta $x$.</p></div>
<div class="thm"><span class="label">Teorema fundamental del cálculo</span><p>Si $f$ es continua, $F$ es derivable y $F'(x)=f(x)$. Es decir: integrar y derivar son operaciones inversas.</p></div>
<div class="thm"><span class="label">Regla de Barrow</span><p>Si $G$ es una primitiva de $f$ (es decir, $G'=f$), entonces $\int_a^bf(x)\,dx=G(b)-G(a)$.</p></div>
<div class="formula">$$\text{Con la cadena: }\ \frac{d}{dx}\int_{h(x)}^{g(x)}f(t)\,dt=f(g(x))\,g'(x)-f(h(x))\,h'(x)$$</div>
<div class="mc"><p>Si $F(x)=\displaystyle\int_x^{x^2}e^{t^2}\,dt$, entonces $F'(1)=$</p>
<ul><li data-ok>$e$</li><li>$0$</li><li>$2e$</li><li>$3e$</li></ul>
<div class="why"><p>$F'(x)=e^{x^4}\cdot2x-e^{x^2}\cdot1$. En $x=1$: $2e-e=e$.</p></div></div>
<p>Uso típico en examen: límites con integrales (aplica L'Hôpital y el TFC), extremos de funciones integrales y desarrollos de Taylor de una función integral (los controles 2 de 2024 y 2025).</p>

<h2>3. Cálculo de primitivas</h2>
<h3>Inmediatas (la tabla al revés, con la cadena)</h3>
<div class="formula">$$\int u^r u'=\frac{u^{r+1}}{r+1}\ (r\ne-1)\qquad \int\frac{u'}u=\ln|u|\qquad \int e^uu'=e^u\qquad \int a^uu'=\frac{a^u}{\ln a}$$
$$\int u'\cos u=\sin u\qquad \int u'\sin u=-\cos u\qquad \int\frac{u'}{\cos^2u}=\tan u\qquad \int u'\cosh u=\sinh u$$
$$\int\frac{u'}{\sqrt{1-u^2}}=\arcsin u\qquad \int\frac{u'}{1+u^2}=\arctan u\qquad \int\frac{u'}{\sqrt{u^2+1}}=\text{argsinh}\,u\qquad \int\frac{u'}{\sqrt{u^2-1}}=\text{argcosh}\,u$$
$$\int\frac{dx}{a^2+x^2}=\frac1a\arctan\frac xa\qquad \int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa$$</div>
<h3>Por descomposición</h3>
<p>Separa en sumas usando identidades: $\int\tan^2x\,dx=\int(1+\tan^2x-1)\,dx=\tan x-x$.</p>
<h3>Cambio de variable</h3>
<p>$\int f(g(x))g'(x)\,dx=\int f(t)\,dt$ con $t=g(x)$. En integrales definidas, <strong>cambia también los límites</strong> (o deshaz el cambio antes de evaluar).</p>
<h3>Por partes</h3>
<div class="formula">$$\int u\,dv=uv-\int v\,du$$</div>
<ul><li>Polinomio × exponencial/seno/coseno: $u=$ polinomio (se va reduciendo el grado).</li>
<li>Logaritmo o arco × algo: $u=$ logaritmo/arco (su derivada es más sencilla).</li>
<li><strong>Integrales cíclicas</strong> como $\int e^x\sin x\,dx$: partes dos veces, aparece la integral inicial y se despeja: $\frac{e^x(\sin x-\cos x)}2$.</li></ul>
<h3>Racionales $\frac{P(x)}{Q(x)}$</h3>
<ol><li>Si grado $P\ge$ grado $Q$, divide: $\frac PQ=C(x)+\frac{R(x)}{Q(x)}$.</li>
<li>Factoriza $Q$ (raíces reales simples, reales múltiples, complejas simples).</li>
<li>Descompón: raíz simple $a$ → $\frac A{x-a}$; raíz múltiple $a$ de orden $k$ → $\frac{A_1}{x-a}+\dots+\frac{A_k}{(x-a)^k}$; factor $x^2+px+q$ sin raíces reales → $\frac{Mx+N}{x^2+px+q}$.</li>
<li>Integra: $\frac{A}{x-a}\to A\ln|x-a|$; $\frac{A}{(x-a)^k}\to\frac{-A}{(k-1)(x-a)^{k-1}}$; $\frac{Mx+N}{x^2+px+q}$ → completa cuadrados y sale un $\ln$ más un $\arctan$.</li></ol>
<div class="steps"><p>$\displaystyle\int\frac{x+5}{x^2+2x+5}\,dx$.</p>
<div class="step">Denominador sin raíces reales: $x^2+2x+5=(x+1)^2+4$. Busca la derivada del denominador ($2x+2$) en el numerador: $x+5=\frac12(2x+2)+4$.</div>
<div class="step">$\frac12\int\frac{2x+2}{x^2+2x+5}dx+4\int\frac{dx}{(x+1)^2+4}$.</div>
<div class="step">$=\frac12\ln(x^2+2x+5)+4\cdot\frac12\arctan\frac{x+1}2+C=\frac12\ln(x^2+2x+5)+2\arctan\frac{x+1}2+C$.</div></div>
<h3>Trigonométricas e hiperbólicas</h3>
<ul><li>$\int\sin^mx\cos^nx$ con alguna potencia impar: separa un factor de esa función y cambia por la otra ($t=\cos x$ si el seno es impar).</li>
<li>Ambas pares: baja el grado con $\sin^2=\frac{1-\cos2x}2$, $\cos^2=\frac{1+\cos2x}2$.</li>
<li>Productos $\sin ax\cos bx$: pásalos a sumas con las fórmulas de transformación.</li>
<li>Racionales en $\sin$ y $\cos$: cambio general $t=\tan\frac x2$, con $\sin x=\frac{2t}{1+t^2}$, $\cos x=\frac{1-t^2}{1+t^2}$, $dx=\frac{2\,dt}{1+t^2}$.</li></ul>
<h3>Irracionales sencillas</h3>
<table>
<tr><th>Aparece</th><th>Cambio</th></tr>
<tr><td>$\sqrt[n]{ax+b}$</td><td>$ax+b=t^n$</td></tr>
<tr><td>$\sqrt{a^2-x^2}$</td><td>$x=a\sin t$</td></tr>
<tr><td>$\sqrt{a^2+x^2}$</td><td>$x=a\sinh t$ (o $a\tan t$)</td></tr>
<tr><td>$\sqrt{x^2-a^2}$</td><td>$x=a\cosh t$</td></tr>
</table>
<div class="num" data-a="0.7854" data-tol="0.003" data-show="π/4 ≈ 0,785"><p>$\displaystyle\int_0^1\sqrt{1-x^2}\,dx$ (piensa qué área es).</p>
<div class="why"><p>Es un cuarto del círculo de radio 1: $\frac\pi4$. Con el cambio $x=\sin t$: $\int_0^{\pi/2}\cos^2t\,dt=\frac\pi4$.</p></div></div>

<h2>4. Integrales impropias</h2>
<div class="def"><span class="label">Dos tipos</span>
<ul><li><strong>De primera especie</strong> (intervalo infinito): $\int_a^\infty f=\lim_{c\to\infty}\int_a^cf$.</li>
<li><strong>De segunda especie</strong> (función no acotada en un extremo $b$): $\int_a^bf=\lim_{c\to b^-}\int_a^cf$.</li></ul>
<p>Converge si el límite es finito; si no, diverge. Si hay problemas en los dos extremos, se parte en dos y deben converger <strong>ambas</strong>.</p></div>
<div class="formula">$$\int_1^\infty\frac{dx}{x^p}\ \begin{cases}\text{converge a } \frac1{p-1} & p\gt1\\ \text{diverge} & p\le1\end{cases}\qquad \int_0^1\frac{dx}{x^p}\ \begin{cases}\text{converge} & p\lt1\\ \text{diverge} & p\ge1\end{cases}\qquad \int_0^\infty e^{-ax}dx=\frac1a$$</div>
<div class="thm"><span class="label">Criterios de comparación ($f,g\ge0$)</span><p>Si $f\le g$ y $\int g$ converge, $\int f$ converge. Si $\lim\frac fg=L\in(0,\infty)$, las dos tienen el mismo carácter.</p></div>
<div class="tf" data-a="f"><p>$\displaystyle\int_{-1}^1\frac{dx}{x^2}=\left[-\frac1x\right]_{-1}^1=-2$.</p>
<div class="why"><p>Error grave: $\frac1{x^2}$ no está acotada en 0, dentro del intervalo. Hay que partir en $\int_{-1}^0+\int_0^1$ y cada una diverge ($p=2\ge1$). El resultado negativo de un integrando positivo ya delataba el error.</p></div></div>

<h2>5. Aplicaciones geométricas</h2>
<h3>Áreas en cartesianas</h3>
<ul><li>Área entre $f$ y el eje $OX$: $\int_a^b|f(x)|\,dx$ (separa donde $f$ cambia de signo).</li>
<li>Área entre dos curvas: halla los puntos de corte y calcula $\int_a^b(\text{arriba}-\text{abajo})\,dx$. A veces es más cómodo integrar en $y$.</li></ul>
<h3>Áreas en polares</h3>
<div class="formula">$$A=\frac12\int_\alpha^\beta r(\theta)^2\,d\theta$$</div>
<p>Viene de sumar sectores circulares de área $\frac12r^2\,d\theta$. Aprovecha las simetrías (por ejemplo, una lemniscata: calcula un cuarto y multiplica por 4).</p>
<div class="num" data-a="1" data-show="1"><p>Área total encerrada por la lemniscata $r^2=\cos2\theta$.</p>
<div class="why"><p>Un pétalo va de $-\frac\pi4$ a $\frac\pi4$: $\frac12\int_{-\pi/4}^{\pi/4}\cos2\theta\,d\theta=\frac12$. Son dos pétalos: área 1.</p></div></div>
<h3>Volúmenes de revolución</h3>
<div class="formula">$$\text{Discos (giro en }OX):\ V=\pi\int_a^bf(x)^2dx\qquad \text{Arandelas: } V=\pi\int_a^b\left(R^2-r^2\right)dx$$
$$\text{Capas o tubos (giro en }OY):\ V=2\pi\int_a^bx\,f(x)\,dx$$</div>
<p>Discos: cortas el sólido perpendicularmente al eje de giro (cada corte es un círculo). Capas: lo descompones en cilindros huecos concéntricos al eje (radio $x$, altura $f(x)$, grosor $dx$).</p>
<div class="num" data-a="4.1888" data-tol="0.01" data-show="4π/3 ≈ 4,189"><p>Volumen de la esfera de radio 1 girando $y=\sqrt{1-x^2}$ alrededor de $OX$.</p>
<div class="why"><p>$\pi\int_{-1}^1(1-x^2)dx=\pi\left(2-\frac23\right)=\frac{4\pi}3$.</p></div></div>
`,

/* ================================================================== */
series: String.raw`
<h2>1. Principio de inducción</h2>
<div class="thm"><span class="label">Principio de inducción</span><p>Si $P(1)$ es cierta y $P(n)\Rightarrow P(n+1)$ para todo $n$, entonces $P(n)$ es cierta para todo $n\in\mathbb N$.</p></div>
<div class="steps"><p>Demuestra que $1+2+\cdots+n=\frac{n(n+1)}2$.</p>
<div class="step">Base: $n=1$: $1=\frac{1\cdot2}2$ ✔.</div>
<div class="step">Hipótesis: lo suponemos cierto para $n$. Para $n+1$: $1+\dots+n+(n+1)=\frac{n(n+1)}2+(n+1)$.</div>
<div class="step">$=\frac{(n+1)(n+2)}2$, que es la fórmula para $n+1$ ✔.</div></div>

<h2>2. Sucesiones: definición y límite</h2>
<div class="def"><span class="label">Sucesión</span><p>Una función $\mathbb N\to\mathbb R$, $n\mapsto a_n$. Converge a $L$ si $\forall\varepsilon\gt0\ \exists N:\ n\ge N\Rightarrow|a_n-L|\lt\varepsilon$.</p></div>
<ul><li>El límite, si existe, es único. Toda sucesión convergente está acotada (el recíproco es falso: $(-1)^n$).</li>
<li>Si $a_n=f(n)$ y $\lim_{x\to\infty}f(x)=L$, entonces $a_n\to L$: puedes usar todas las técnicas de límites de funciones (incluido L'Hôpital sobre $f$).</li>
<li>Sándwich y "cero por acotada" funcionan igual.</li></ul>
<div class="thm"><span class="label">Convergencia monótona</span><p>Toda sucesión monótona y acotada converge. (Creciente y acotada superiormente → converge a su supremo.)</p></div>
<p>Se usa con sucesiones definidas por recurrencia: se demuestra por inducción que es monótona y acotada, y después se calcula el límite $L$ resolviendo $L=g(L)$.</p>
<div class="num" data-a="2"><p>$a_1=1$, $a_{n+1}=\sqrt{2+a_n}$ es creciente y acotada por 2. ¿Cuál es su límite?</p>
<div class="why"><p>$L=\sqrt{2+L} \Rightarrow L^2-L-2=0 \Rightarrow L=2$ (la otra raíz, $-1$, no vale porque los términos son positivos).</p></div></div>
<h3>Otros criterios útiles</h3>
<ul><li><strong>Stolz</strong>: si $b_n$ es creciente y tiende a $\infty$, $\lim\frac{a_n}{b_n}=\lim\frac{a_{n+1}-a_n}{b_{n+1}-b_n}$ (si existe). Ideal para sumas: $\frac{1+2^2+\dots+n^2}{n^3}\to\frac13$.</li>
<li><strong>Criterio de la raíz para sucesiones</strong>: $\lim\sqrt[n]{a_n}=\lim\frac{a_{n+1}}{a_n}$ si este existe.</li>
<li>Equivalencias: $n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n$ (Stirling).</li></ul>

<h2>3. Series numéricas</h2>
<div class="def"><span class="label">Serie</span><p>$\sum_{n=1}^\infty a_n$ es la sucesión de <strong>sumas parciales</strong> $S_N=a_1+\dots+a_N$. Converge si $S_N$ tiene límite finito, que se llama suma de la serie.</p></div>
<div class="thm"><span class="label">Condición necesaria</span><p>$\sum a_n$ converge $\Rightarrow a_n\to0$. (Contrarrecíproco: si $a_n\not\to0$, diverge.)</p></div>
<h3>Series que hay que conocer</h3>
<ul><li><strong>Geométrica</strong>: $\sum_{n=0}^\infty r^n=\frac1{1-r}$ si $|r|\lt1$; diverge si $|r|\ge1$. Con primer término $a$: $\frac{a}{1-r}$.</li>
<li><strong>Armónica generalizada</strong>: $\sum\frac1{n^p}$ converge $\iff p\gt1$.</li>
<li><strong>Telescópica</strong>: $\sum(b_n-b_{n+1})=b_1-\lim b_n$. Ejemplo: $\sum\frac1{n(n+1)}=\sum\left(\frac1n-\frac1{n+1}\right)=1$.</li></ul>
<p>Operaciones: $\sum(a_n+b_n)=\sum a_n+\sum b_n$ y $\sum ka_n=k\sum a_n$ si las de la derecha convergen. Quitar o añadir un número finito de términos no cambia el carácter.</p>
<h3>Criterios para términos no negativos</h3>
<table>
<tr><th>Criterio</th><th>Enunciado</th></tr>
<tr><td>Comparación</td><td>$0\le a_n\le b_n$: si $\sum b_n$ converge, $\sum a_n$ también; si $\sum a_n$ diverge, $\sum b_n$ también.</td></tr>
<tr><td>Paso al límite</td><td>$\lim\frac{a_n}{b_n}=L\in(0,\infty)$: mismo carácter. Compara con $\frac1{n^p}$ usando el grado.</td></tr>
<tr><td>Cociente (D'Alembert)</td><td>$L=\lim\frac{a_{n+1}}{a_n}$: $L\lt1$ converge, $L\gt1$ diverge, $L=1$ no decide.</td></tr>
<tr><td>Raíz (Cauchy)</td><td>$L=\lim\sqrt[n]{a_n}$: igual que el del cociente.</td></tr>
<tr><td>Integral</td><td>Si $a_n=f(n)$ con $f$ positiva y decreciente, $\sum a_n$ y $\int_1^\infty f$ tienen el mismo carácter.</td></tr>
</table>
<div class="mc"><p>$\displaystyle\sum_{n\ge1}\frac{n^2}{2^n}$…</p><ul><li data-ok>converge (cociente: $L=\frac12$)</li><li>diverge porque $n^2\to\infty$</li><li>el criterio del cociente no decide</li><li>converge a 0</li></ul>
<div class="why"><p>$\frac{(n+1)^2/2^{n+1}}{n^2/2^n}=\frac12\left(\frac{n+1}n\right)^2\to\frac12\lt1$. (Su suma, por cierto, es 6.)</p></div></div>

<h2>4. Convergencia absoluta y series alternadas</h2>
<div class="def"><span class="label">Absoluta y condicional</span><p>$\sum a_n$ converge <strong>absolutamente</strong> si $\sum|a_n|$ converge. Toda serie absolutamente convergente es convergente. Si converge pero no absolutamente, la convergencia es <strong>condicional</strong>.</p></div>
<div class="thm"><span class="label">Criterio de Leibniz</span><p>Si $b_n\ge0$ es decreciente y $b_n\to0$, la serie alternada $\sum(-1)^nb_n$ converge. Además, el error al cortar en el término $N$ es menor que $b_{N+1}$.</p></div>
<div class="tf" data-a="v"><p>$\sum\frac{(-1)^n}{\sqrt n}$ converge condicionalmente.</p>
<div class="why"><p>Leibniz: $\frac1{\sqrt n}$ decrece a 0. Pero $\sum\frac1{\sqrt n}$ es la de $p=\frac12\le1$, divergente.</p></div></div>
`

});
