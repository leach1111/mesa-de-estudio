EXTRA.calculo = [

/* ---------------- Reales ---------------- */
{ t: "reales", after: "3. Inecuaciones", html: String.raw`
<h3 class="visual-h">Visualízalo: el signo se ve en la gráfica</h3>
<p>Resolver $P(x)\gt0$ es buscar dónde la gráfica de $P$ está <strong>por encima</strong> del eje $OX$. Las raíces son los puntos donde la curva cruza el eje, y entre dos raíces consecutivas el signo no cambia. Por eso la tabla de signos funciona: solo hay que probar un punto de cada trozo.</p>
<div class="plot" data-x="-4,7" data-y="-40,40" data-f="(x+2)*(x-1)*(x-5)/1" data-l="P(x) = (x+2)(x−1)(x−5)" data-fill="0|-2|1;0|5|7" data-cap="Las zonas sombreadas son donde P(x) > 0: (−2, 1) ∪ (5, ∞)."></div>
<p>En las racionales, además de las raíces del numerador hay que mirar dónde se anula el denominador: allí la función "salta" (asíntota vertical) y puede cambiar de signo sin pasar por cero.</p>
<div class="plot" data-x="-5,5" data-y="-6,6" data-f="(x-1)/(x+1)" data-l="(x−1)/(x+1)" data-fill="0|-5|-1;0|1|5" data-cap="Positiva en (−∞, −1) ∪ (1, ∞). En x = −1 hay una asíntota vertical: por eso se excluye aunque no sea una raíz."></div>
`},
{ t: "reales", after: "4. Valor absoluto", html: String.raw`
<h3 class="visual-h">Visualízalo: |x − a| &lt; r es un intervalo centrado en a</h3>
<p>La gráfica de $y=|x-a|$ es una "V" con el vértice en $x=a$. Pedir $|x-a|\lt r$ es pedir que la V esté por debajo de la recta horizontal $y=r$: eso pasa en el intervalo $(a-r,\ a+r)$, de radio $r$ alrededor de $a$. Mueve los deslizadores.</p>
<div class="plot" data-x="-6,6" data-y="-1,6" data-f="abs(x-a); r" data-l="|x − a|; y = r" data-p="a=1,-3,3,0.5; r=2,0.5,4,0.5" data-fill="1|a-r|a+r|0" data-info="extremo izquierdo=a-r; extremo derecho=a+r" data-cap="La zona sombreada marca las x que cumplen |x − a| < r."></div>
<div class="key"><span class="label">Traducción geométrica</span><p>$|x-a|\lt r$: "estar a menos de $r$ de $a$". $|x-a|\gt r$: "estar a más de $r$ de $a$" (dos semirrectas). $|x-a|=|x-b|$: "equidistar de $a$ y $b$" (el punto medio).</p></div>
`},

/* ---------------- Complejos ---------------- */
{ t: "complejos", after: "3. Representación gráfica", html: String.raw`
<h3 class="visual-h">Visualízalo: un complejo es una flecha</h3>
<p>Mueve la parte real $a$ y la imaginaria $b$. La flecha azul es $z=a+bi$; la naranja es su conjugado $\bar z=a-bi$, que es su <strong>reflejo en el eje real</strong>. El módulo es la longitud de la flecha y el argumento, su ángulo con el semieje real positivo.</p>
<div class="plot" data-x="-4,4" data-y="-3,3" data-equal data-p="a=2,-3.5,3.5,0.1; b=1.5,-3,3,0.1" data-vec="0|0|a|b;0|0|a|-b" data-vecl="z;z̄" data-par="0,2*pi|sqrt(a*a+b*b)*cos(t)|sqrt(a*a+b*b)*sin(t)" data-info="|z|=sqrt(a*a+b*b); arg z (grados)=(atan2(b,a)*180/pi+360)%360" data-cap="La circunferencia punteada tiene radio |z|: todos sus puntos tienen el mismo módulo."></div>
<p>Fíjate en el argumento cuando $a\lt0$: la calculadora daría $\arctan\frac ba$ entre $-90^\circ$ y $90^\circ$, pero el punto está en el 2.º o 3.<sup>er</sup> cuadrante. La gráfica te avisa: dibuja siempre el punto.</p>
`},
{ t: "complejos", after: "5. Operaciones en polar", html: String.raw`
<h3 class="visual-h">Visualízalo: multiplicar es girar y estirar</h3>
<p>Al multiplicar $z\cdot w$ se <strong>multiplican los módulos</strong> y se <strong>suman los argumentos</strong>. Elige $z$ y $w$ en polar y observa el producto (verde).</p>
<div class="plot" data-x="-5,5" data-y="-4,4" data-equal data-p="r=1.5,0.5,2.5,0.1; α=0.5,0,6.28,0.05; s=1.5,0.5,2,0.1; β=1,0,6.28,0.05" data-vec="0|0|r*cos(α)|r*sin(α);0|0|s*cos(β)|s*sin(β);0|0|r*s*cos(α+β)|r*s*sin(α+β)" data-vecl="z;w;z·w" data-info="|z·w|=r*s; arg(z·w) (grados)=((α+β)*180/pi)%360" data-cap="Prueba con s = 1: multiplicar por un complejo de módulo 1 es solo girar. Multiplicar por i es girar 90°."></div>
`},
{ t: "complejos", after: "6. Radicación", html: String.raw`
<h3 class="visual-h">Visualízalo: las n raíces forman un polígono regular</h3>
<p>Las raíces $n$-ésimas de $w=R_\theta$ están en la circunferencia de radio $\sqrt[n]R$, la primera con ángulo $\frac\theta n$ y las demás separadas $\frac{2\pi}n$. Cambia $n$, el módulo $R$ y el argumento $\theta$ de $w$: los vértices del polígono son las raíces.</p>
<div class="plot" data-x="-2.5,2.5" data-y="-2,2" data-equal data-p="n=3,2,10,1; R=8,1,30,1; θ=3.1416,0,6.28,0.05" data-par="0,n|H.px(t,n,R^(1/n),θ)|H.py(t,n,R^(1/n),θ);0,2*pi|R^(1/n)*cos(t)|R^(1/n)*sin(t)" data-pts="R^(1/n)*cos(θ/n)|R^(1/n)*sin(θ/n)" data-ptl="z₀" data-info="radio de las raíces=R^(1/n); ángulo entre raíces (grados)=360/n" data-cap="Con n = 3, R = 8 y θ = π se obtienen las raíces cúbicas de −8: un triángulo de radio 2."></div>
<p>Esto explica dos hechos útiles: (1) <strong>la suma de las $n$ raíces vale 0</strong> (el polígono está centrado en el origen); (2) si $w$ es real positivo, una raíz está sobre el eje real ($\theta=0$).</p>
`},

/* ---------------- Funciones ---------------- */
{ t: "funciones", after: "6. Funciones elementales", html: String.raw`
<h3 class="visual-h">Visualízalo: exponencial y logaritmo son simétricas</h3>
<p>$\log_a$ es la inversa de $a^x$, así que sus gráficas son simétricas respecto a la recta $y=x$. Cambia la base $a$: si $a\gt1$ las dos crecen; si $0\lt a\lt1$, las dos decrecen.</p>
<div class="plot" data-x="-4,6" data-y="-4,6" data-equal data-f="a^x; ln(x)/ln(a); x" data-l="aˣ; logₐ x; y = x" data-p="a=2.718,0.2,5,0.01" data-pts="0|1;1|0" data-ptl="(0, 1);(1, 0)" data-cap="Todas las exponenciales pasan por (0, 1) y todos los logaritmos por (1, 0). Con a = e (2,718) tienes eˣ y ln x."></div>

<h3 class="visual-h">Visualízalo: las hiperbólicas</h3>
<div class="plot" data-x="-3,3" data-y="-3,4" data-f="cosh(x); sinh(x); tanh(x); exp(x)/2" data-l="cosh x; sinh x; tanh x; eˣ/2" data-cap="Para x grande, cosh x y sinh x se pegan a eˣ/2 (el término e⁻ˣ se hace despreciable). tanh x tiende a ±1."></div>
<p>La <strong>catenaria</strong> $y=a\cosh\frac xa$ es la forma que adopta un cable que cuelga de dos puntos (como la pasarela del parcial 2025). El parámetro $a$ controla lo "tenso" que está:</p>
<div class="plot" data-x="-4,4" data-y="0,6" data-f="a*cosh(x/a)" data-l="a·cosh(x/a)" data-p="a=1.5,0.5,4,0.1" data-info="altura mínima (en x = 0)=a"></div>

<h3 class="visual-h">Visualízalo: las inversas trigonométricas</h3>
<div class="plot" data-x="-3,3" data-y="-2,3.5" data-f="asin(x); acos(x); atan(x)" data-l="arcsin x; arccos x; arctan x" data-cap="arcsin y arccos solo existen en [−1, 1]; arctan está definida en todo ℝ y tiene asíntotas y = ±π/2."></div>
`},
{ t: "funciones", after: "7. Esbozo", html: String.raw`
<h3 class="visual-h">Visualízalo: las transformaciones de una gráfica</h3>
<p>La curva naranja es $y=a\,\sin\big(b(x-h)\big)+k$ y la azul, la función original $\sin x$. Mueve cada deslizador por separado y comprueba la tabla de arriba: $a$ estira en vertical, $b$ comprime en horizontal (cambia el periodo a $\frac{2\pi}b$), $h$ desplaza a la derecha y $k$ sube.</p>
<div class="plot" data-x="-7,7" data-y="-4,4" data-f="sin(x); a*sin(b*(x-h))+k" data-l="sin x; a·sin(b(x − h)) + k" data-p="a=1,-3,3,0.1; b=1,0.25,3,0.05; h=0,-3,3,0.1; k=0,-2,2,0.1" data-info="amplitud=abs(a); periodo=2*pi/b"></div>
<p>Con $|f(x)|$ y $f(|x|)$ pasa esto:</p>
<div class="plot" data-x="-4,4" data-y="-3,3" data-f="x^2-2*x-1; abs(x^2-2*x-1); x^2-2*abs(x)-1" data-l="f(x) = x² − 2x − 1; |f(x)|; f(|x|)" data-cap="|f| refleja hacia arriba lo que estaba por debajo del eje. f(|x|) copia la parte derecha en la izquierda (queda par)."></div>
`},

/* ---------------- Polares ---------------- */
{ t: "polares", after: "3. Curvas polares", html: String.raw`
<h3 class="visual-h">Visualízalo: una familia que lo contiene casi todo</h3>
<p>La curva $r=a+b\cos(n\alpha)$ incluye muchas de las curvas de la tabla. Prueba: $a=b$, $n=1$ (cardioide); $a=1$, $b=2$, $n=1$ (caracol con lazo); $a=0$, $b=2$, $n=3$ (rosa de 3 pétalos); $a=0$, $n=2$ (4 pétalos).</p>
<div class="plot" data-x="-3.5,3.5" data-y="-3,3" data-equal data-h="380" data-p="a=1,0,2,0.1; b=1,0,2,0.1; n=1,1,6,1" data-pol="0,2*pi|a+b*cos(n*t)" data-cap="Se dibuja con α de 0 a 2π, admitiendo r negativo (el punto se dibuja en la dirección opuesta)."></div>
<p>Y la lemniscata $r^2=a^2\cos2\alpha$: solo existe donde $\cos2\alpha\ge0$, es decir, en los sectores alrededor del eje $OX$.</p>
<div class="plot" data-x="-2.5,2.5" data-y="-1.3,1.3" data-equal data-p="a=2,0.5,2.4,0.1" data-pol="-pi/4,pi/4|a*sqrt(max(0,cos(2*t)));3*pi/4,5*pi/4|a*sqrt(max(0,cos(2*t)))"></div>
`},
{ t: "polares", after: "4. Cónicas", html: String.raw`
<h3 class="visual-h">Visualízalo: la excentricidad decide la cónica</h3>
<p>Todas las cónicas con un foco en el origen se escriben $r=\dfrac{p}{1-e\cos\alpha}$. Mueve la excentricidad $e$: con $e=0$ es una circunferencia; con $0\lt e\lt1$, una elipse cada vez más alargada; con $e=1$, una parábola (la elipse "se abre" por un lado); con $e\gt1$, una hipérbola.</p>
<div class="plot" data-x="-6,8" data-y="-5,5" data-equal data-h="380" data-p="e=0.5,0,2,0.05; p=2,0.5,4,0.1" data-pol="0,2*pi|p/(1-e*cos(t))" data-pts="0|0" data-ptl="foco" data-n="1500" data-cap="Las órbitas de los planetas son elipses con el Sol en un foco: de ahí la importancia de esta forma."></div>
<div class="tip"><span class="label">Relación con la ecuación cartesiana</span><p>Para la elipse con foco en el origen: $a=\frac{p}{1-e^2}$ (semieje mayor) y $c=ea$. Para la parábola ($e=1$) sale $y^2=2p\left(x+\frac p2\right)$, como en el problema 2 del simulacro 2.</p></div>
`},

/* ---------------- Límites ---------------- */
{ t: "limites", after: "1. Idea y definición", html: String.raw`
<h3 class="visual-h">Visualízalo: el límite no mira el punto</h3>
<p>$f(x)=\frac{\sin x}x$ no está definida en $x=0$ (el punto hueco), pero sus valores se acercan a 1 por los dos lados: $\lim_{x\to0}\frac{\sin x}{x}=1$. El límite habla de lo que pasa <strong>cerca</strong> de $a$, no en $a$.</p>
<div class="plot" data-x="-12,12" data-y="-0.4,1.2" data-f="sin(x)/x" data-l="sin x / x" data-pts="0|1" data-ptl="hueco: (0, 1)" data-cap="La función oscila y se amortigua; en 0 tiene un hueco a altura 1 (discontinuidad evitable)."></div>
<h3 class="visual-h">Visualízalo: el criterio del sándwich</h3>
<p>$x\sin\frac1x$ oscila infinitas veces cerca de 0, pero siempre está atrapada entre $-|x|$ y $|x|$, que tienden a 0. Por tanto, también tiende a 0.</p>
<div class="plot" data-x="-0.5,0.5" data-y="-0.5,0.5" data-f="x*sin(1/x); abs(x); -abs(x)" data-l="x·sin(1/x); |x|; −|x|" data-n="3000"></div>
`},
{ t: "limites", after: "4. Continuidad", html: String.raw`
<h3 class="visual-h">Visualízalo: los tipos de discontinuidad</h3>
<div class="plot" data-x="-3,3" data-y="-3,3" data-f="x/abs(x); 1/x" data-l="salto finito: x/|x|; salto infinito: 1/x" data-cap="x/|x| vale −1 a la izquierda y 1 a la derecha (salto de 2). 1/x tiene una asíntota vertical."></div>
<div class="plot" data-x="-0.6,0.6" data-y="-1.5,1.5" data-f="sin(1/x)" data-l="esencial: sin(1/x)" data-n="4000" data-cap="sin(1/x) oscila cada vez más rápido entre −1 y 1: los límites laterales no existen."></div>
`},
{ t: "limites", after: "5. Teoremas", html: String.raw`
<h3 class="visual-h">Visualízalo: Bolzano y el método de bisección</h3>
<p>$f(x)=x^3+x-1$ es negativa en 0 y positiva en 1, así que cruza el eje entre ellos. La bisección parte el intervalo por la mitad y se queda con la mitad donde hay cambio de signo. Mueve los extremos $a$ y $b$ hasta encerrar la raíz en un intervalo pequeño, comprobando siempre que $f(a)$ y $f(b)$ tienen signos opuestos.</p>
<div class="plot" data-x="-0.5,1.5" data-y="-2,2" data-f="x^3+x-1" data-l="f(x) = x³ + x − 1" data-p="a=0,-0.5,1.5,0.01; b=1,-0.5,1.5,0.01" data-pts="a|a^3+a-1;b|b^3+b-1;(a+b)/2|0" data-ptl="a;b;punto medio" data-info="f(a)=a^3+a-1; f(b)=b^3+b-1; f(punto medio)=((a+b)/2)^3+(a+b)/2-1; longitud=b-a"></div>
`},

/* ---------------- Derivadas ---------------- */
{ t: "derivadas", after: "1. Definición e interpretaciones", html: String.raw`
<h3 class="visual-h">Visualízalo: de la secante a la tangente</h3>
<p>La recta naranja es la <strong>secante</strong> que pasa por $(a,f(a))$ y $(a+h,f(a+h))$; su pendiente es el cociente incremental $\frac{f(a+h)-f(a)}h$. Haz $h$ cada vez más pequeño (también negativo): la secante gira hasta coincidir con la <strong>tangente</strong> (verde), cuya pendiente es $f'(a)$. Eso es exactamente la definición de derivada.</p>
<div class="plot" data-x="-2.5,2.5" data-y="-2,3" data-f="x^3/2-x+1; (a^3/2-a+1)+(((a+h)^3/2-(a+h)+1)-(a^3/2-a+1))/h*(x-a); (a^3/2-a+1)+(3*a^2/2-1)*(x-a)" data-l="f(x) = x³/2 − x + 1; secante; tangente" data-p="a=1,-2,2,0.05; h=1,-1.5,1.5,0.01" data-pts="a|a^3/2-a+1;a+h|(a+h)^3/2-(a+h)+1" data-ptl="(a, f(a));(a+h, f(a+h))" data-info="pendiente secante=(((a+h)^3/2-(a+h)+1)-(a^3/2-a+1))/h; f'(a)=3*a^2/2-1"></div>
<div class="key"><span class="label">En palabras</span><p>La derivada es "la pendiente que se ve al hacer zoom": si amplías mucho una curva derivable alrededor de un punto, parece una recta, y su pendiente es $f'(a)$. Por eso una función con un pico (como $|x|$ en 0) no es derivable: por mucho zoom que hagas, el pico sigue ahí.</p></div>
`},
{ t: "derivadas", after: "6. Rectas tangente", html: String.raw`
<h3 class="visual-h">Visualízalo: tangente y normal en un punto</h3>
<div class="plot" data-x="-3,3" data-y="-2,2" data-equal data-f="sin(x); sin(a)+cos(a)*(x-a); sin(a)-(x-a)/cos(a)" data-l="f(x) = sin x; tangente; normal" data-p="a=0.8,-2.8,2.8,0.05" data-pts="a|sin(a)" data-info="pendiente tangente=cos(a); pendiente normal=-1/cos(a)" data-cap="La normal es perpendicular a la tangente (con la misma escala en los dos ejes se ve el ángulo recto). Cuando cos a = 0 la tangente es horizontal y la normal, vertical."></div>
`},

/* ---------------- Aplicaciones ---------------- */
{ t: "aplicaciones", after: "1. Monotonía", html: String.raw`
<h3 class="visual-h">Visualízalo: f y f' juntas</h3>
<p>Donde $f'$ (naranja) está por encima del eje, $f$ (azul) crece; donde está por debajo, decrece; donde $f'$ corta el eje, $f$ tiene un máximo o un mínimo.</p>
<div class="plot" data-x="-2.5,2.5" data-y="-4,4" data-f="x^3-3*x; 3*x^2-3" data-l="f(x) = x³ − 3x; f'(x) = 3x² − 3" data-pts="-1|2;1|-2" data-ptl="máximo;mínimo" data-cap="f'(x) = 0 en x = ±1. f' pasa de + a − en −1 (máximo) y de − a + en 1 (mínimo)."></div>
`},
{ t: "aplicaciones", after: "2. Concavidad", html: String.raw`
<h3 class="visual-h">Visualízalo: f'' y la curvatura</h3>
<div class="plot" data-x="-2.5,2.5" data-y="-4,4" data-f="x^3-3*x; 6*x" data-l="f(x) = x³ − 3x; f''(x) = 6x" data-pts="0|0" data-ptl="inflexión" data-cap="f'' < 0 a la izquierda (forma ∩) y f'' > 0 a la derecha (forma U). En x = 0 cambia: punto de inflexión."></div>
`},
{ t: "aplicaciones", after: "4. Teoremas del valor medio", html: String.raw`
<h3 class="visual-h">Visualízalo: el teorema del valor medio</h3>
<p>Para $f(x)=\sqrt x$ en $[a,b]$, la recta naranja une los extremos (la "cuerda") y la verde es la tangente en el punto $c$ que garantiza Lagrange: <strong>son paralelas</strong>. Mueve $a$ y $b$.</p>
<div class="plot" data-x="0,9" data-y="0,3.5" data-f="sqrt(x); sqrt(a)+(sqrt(b)-sqrt(a))/(b-a)*(x-a); sqrt(((sqrt(a)+sqrt(b))/2)^2)+1/(sqrt(a)+sqrt(b))*(x-((sqrt(a)+sqrt(b))/2)^2)" data-l="f(x) = √x; cuerda; tangente en c" data-p="a=1,0.1,4,0.05; b=6,4.5,9,0.05" data-pts="a|sqrt(a);b|sqrt(b);((sqrt(a)+sqrt(b))/2)^2|(sqrt(a)+sqrt(b))/2" data-ptl="a;b;c" data-info="c=((sqrt(a)+sqrt(b))/2)^2; pendiente cuerda=(sqrt(b)-sqrt(a))/(b-a); f'(c)=1/(sqrt(a)+sqrt(b))"></div>
<p>Aquí $c$ se puede calcular exactamente: $f'(c)=\frac1{2\sqrt c}=\frac{\sqrt b-\sqrt a}{b-a}=\frac1{\sqrt a+\sqrt b}$, así que $\sqrt c=\frac{\sqrt a+\sqrt b}2$.</p>
`},
{ t: "aplicaciones", after: "6. Fórmula de Taylor", html: String.raw`
<h3 class="visual-h">Visualízalo: el polinomio de Taylor se pega a la función</h3>
<p>Sube el grado $n$: el polinomio de MacLaurin de $\sin x$ se ajusta a la curva en un intervalo cada vez mayor alrededor de 0. Fíjate en que al pasar de grado 1 a 2 no cambia nada: el seno solo tiene potencias impares.</p>
<div class="plot" data-x="-9,9" data-y="-3,3" data-f="sin(x); H.tsin(x,n)" data-l="sin x; Pₙ(x)" data-p="n=1,1,17,1" data-info="error en x = 3=abs(sin(3)-H.tsin(3,n))"></div>
<p>Para $e^x$ el desarrollo converge en todo $\mathbb R$; para $\ln(1+x)$ solo en $(-1,1]$: por mucho que subas el grado, fuera de ese intervalo el polinomio se separa.</p>
<div class="plot" data-x="-1.5,3" data-y="-3,3" data-f="ln(1+x); H.tln(x,n)" data-l="ln(1 + x); Pₙ(x)" data-p="n=3,1,25,1" data-cap="A la derecha de x = 1 el polinomio oscila cada vez más al subir n: la serie no converge allí."></div>
`},
{ t: "aplicaciones", after: "8. Resolución aproximada", html: String.raw`
<h3 class="visual-h">Visualízalo: un paso del método de Newton</h3>
<p>Desde $x_n$ se traza la tangente y se mira dónde corta el eje: ese es $x_{n+1}$. Para $f(x)=x^2-2$ (raíz $\sqrt2\approx1{,}4142$), empieza en $x_n=3$ y ve copiando el valor de $x_{n+1}$ en el deslizador: en 4 pasos tienes muchos decimales correctos.</p>
<div class="plot" data-x="0,4" data-y="-3,10" data-f="x^2-2; (q^2-2)+2*q*(x-q)" data-l="f(x) = x² − 2; tangente en xₙ" data-p="q=3,0.6,4,0.0001" data-pts="q|q^2-2;q-(q^2-2)/(2*q)|0" data-ptl="(xₙ, f(xₙ));xₙ₊₁" data-info="xₙ=q; xₙ₊₁=q-(q^2-2)/(2*q); error=abs(q-(q^2-2)/(2*q)-sqrt(2))"></div>
`},

/* ---------------- Integrales ---------------- */
{ t: "integrales", after: "1. La integral de Riemann", html: String.raw`
<h3 class="visual-h">Visualízalo: sumas de Riemann</h3>
<p>Aproximamos el área bajo $f(x)=x^2$ entre 0 y 2 con $n$ rectángulos cuya altura es el valor de $f$ en el extremo izquierdo de cada trozo. Sube $n$: la suma se acerca al valor exacto $\int_0^2x^2\,dx=\frac83\approx2{,}667$.</p>
<div class="plot" data-x="-0.2,2.3" data-y="-0.3,4.5" data-f="x^2; (floor(x/(2/n))*(2/n))^2*(x>=0)*(x<2)" data-l="f(x) = x²; altura de los rectángulos" data-p="n=4,1,60,1" data-fill="1|0|2" data-n="1500" data-info="suma inferior=8*(n-1)*n*(2*n-1)/(6*n^3); valor exacto=8/3; error=8/3-8*(n-1)*n*(2*n-1)/(6*n^3)"></div>
<p>Como $f$ es creciente, los rectángulos de la izquierda quedan siempre por debajo: es una <strong>suma inferior</strong>. Con el extremo derecho tendríamos una suma superior. La integral existe porque las dos se acercan al mismo número.</p>
`},
{ t: "integrales", after: "2. Función integral", html: String.raw`
<h3 class="visual-h">Visualízalo: el teorema fundamental del cálculo</h3>
<p>La función integral $F(x)=\int_0^x\cos t\,dt$ mide el área acumulada bajo $\cos t$ desde 0 hasta $x$ (contando negativa el área bajo el eje). Mueve $x$: el punto verde sube cuando $\cos$ es positivo y baja cuando es negativo. La curva que dibuja es $\sin x$, porque $F'(x)=\cos x$.</p>
<div class="plot" data-x="-0.3,6.6" data-y="-1.5,1.5" data-f="cos(x); sin(x)" data-l="f(t) = cos t; F(x) = ∫₀ˣ cos t dt" data-p="b=1.5,0,6.28,0.02" data-fill="0|0|b" data-pts="b|sin(b)" data-ptl="F(x)" data-info="x=b; área acumulada F(x)=sin(b)"></div>
`},
{ t: "integrales", after: "4. Integrales impropias", html: String.raw`
<h3 class="visual-h">Visualízalo: ¿converge el área infinita?</h3>
<p>El área bajo $\frac1{x^p}$ desde 1 hasta $b$ vale $\frac{b^{1-p}-1}{1-p}$. Haz $b$ grande: con $p\gt1$ el área se estabiliza en $\frac1{p-1}$ (converge); con $p\le1$ sigue creciendo sin límite (diverge), aunque la curva tienda a 0.</p>
<div class="plot" data-x="0,20" data-y="0,1.5" data-f="1/x^p" data-l="1/xᵖ" data-p="p=2,0.5,3,0.05; b=10,1.5,20,0.1" data-fill="0|1|b" data-info="área de 1 a b=p==1?ln(b):(b^(1-p)-1)/(1-p); límite si b→∞=p>1?1/(p-1):Infinity"></div>
`},
{ t: "integrales", after: "5. Aplicaciones geométricas", html: String.raw`
<h3 class="visual-h">Visualízalo: área entre dos curvas</h3>
<div class="plot" data-x="-0.3,1.4" data-y="-0.2,1.3" data-equal data-f="x; x^2" data-l="y = x; y = x²" data-fill="0|0|1|1" data-pts="0|0;1|1" data-ptl="corte;corte" data-cap="Área = ∫₀¹ (x − x²) dx = 1/6. Primero los puntos de corte; después “la de arriba menos la de abajo”."></div>
<h3 class="visual-h">Método de los discos</h3>
<figure class="dg"><svg viewBox="0 0 520 240" width="520" role="img" aria-label="Sólido de revolución cortado en discos">
<line x1="30" y1="130" x2="500" y2="130" class="thin"/><text x="488" y="150" class="s">x</text>
<path d="M60 130 Q 200 40 440 55" class="c1"/><path d="M60 130 Q 200 220 440 205" class="c1" stroke-dasharray="6 5"/>
<ellipse cx="260" cy="130" rx="12" ry="70" class="f1"/><ellipse cx="260" cy="130" rx="12" ry="70" class="c2"/>
<line x1="260" y1="130" x2="260" y2="60" class="ink"/><text x="268" y="98" class="t2">r = f(x)</text>
<text x="250" y="226" class="s">grosor dx</text><ellipse cx="440" cy="130" rx="16" ry="75" class="thin"/>
<text x="120" y="40" class="t1">y = f(x)</text>
</svg><figcaption>Al girar la curva alrededor de OX, cada corte perpendicular es un disco de radio f(x): volumen π f(x)² dx. Se suman todos: V = π∫ f(x)² dx.</figcaption></figure>
`},

/* ---------------- Series ---------------- */
{ t: "series", after: "3. Series numéricas", html: String.raw`
<h3 class="visual-h">Visualízalo: sumas parciales de la serie geométrica</h3>
<p>Cada escalón es una suma parcial $S_N=1+r+r^2+\dots+r^N$. Con $|r|\lt1$ los escalones se acercan a la línea horizontal $\frac1{1-r}$; con $r$ cerca de 1 la convergencia es lenta, y con $r\ge1$ crecen sin límite. Con $r$ negativo, las sumas oscilan alrededor del límite.</p>
<div class="plot" data-x="0,25" data-y="-1,8" data-f="H.geo(r,floor(x)); abs(r)<1?1/(1-r):NaN" data-l="S_N; 1/(1 − r)" data-p="r=0.7,-0.95,1.05,0.01" data-n="1500" data-info="S₂₅=H.geo(r,25); suma de la serie=abs(r)<1?1/(1-r):Infinity"></div>
<p>La armónica $\sum\frac1n$ es el caso famoso: sus términos tienden a 0, pero las sumas parciales crecen como $\ln N$ (muy despacio, pero sin límite).</p>
<div class="plot" data-x="0,60" data-y="0,5" data-f="ln(floor(x)+1)+0.5772; ln(x)" data-l="S_N de la armónica (aprox.); ln N" data-cap="Las sumas parciales de la armónica se parecen a ln N + 0,577: tienden a infinito."></div>
`}
];
