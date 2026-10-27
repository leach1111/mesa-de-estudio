EXAMS.fisica = [

/* ==================================================================== */
{ title: "Examen de prueba 1",
  sub: "Física I · Cinemática y dinámica de la partícula",
  desc: "Componentes intrínsecas, aceleración dependiente de la velocidad, tiro desde una altura y bloques con polea en un plano inclinado.",
  dur: "2 h", pts: "10 puntos",
  instr: "<p>Toma $g=9{,}8$ m/s². Las cuestiones teóricas deben justificarse: una respuesta sin justificar no puntúa.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<p>El vector de posición de una partícula es $\vec r(t)=(t^2-4t)\,\hat\imath+(2t+1)\,\hat\jmath$ (SI).</p>
<ol class="parts">
<li>Calcula la velocidad y la aceleración en función del tiempo.</li>
<li>En $t=1$ s, calcula las componentes tangencial y normal de la aceleración y el radio de curvatura de la trayectoria.</li>
<li>Escribe la ecuación de la trayectoria.</li>
</ol>

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<p>Un cuerpo que parte del reposo desde el origen se mueve en línea recta con aceleración $a=6-2v$ (SI).</p>
<ol class="parts">
<li>Calcula $v(t)$ y la velocidad límite.</li>
<li>Calcula $x(t)$.</li>
<li>¿Cuánto tarda en alcanzar el 95 % de la velocidad límite?</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Desde lo alto de un edificio de 20 m se lanza una pelota con una velocidad de 15 m/s formando 30° por encima de la horizontal.</p>
<ol class="parts">
<li>Calcula la altura máxima (respecto al suelo) que alcanza.</li>
<li>Calcula el tiempo de vuelo y la distancia horizontal al pie del edificio a la que cae.</li>
<li>Calcula el módulo de la velocidad al llegar al suelo y el ángulo que forma con la horizontal.</li>
</ol>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<p>Un bloque de 4 kg está sobre un plano inclinado 30° ($\mu_k=0{,}2$). Está unido mediante una cuerda ideal que pasa por una polea ideal situada en lo alto del plano a un bloque de 3 kg que cuelga verticalmente. El sistema se mueve con el bloque colgante bajando.</p>
<ol class="parts">
<li>Dibuja el diagrama de fuerzas de cada bloque.</li>
<li>Calcula la normal sobre el bloque del plano, la aceleración del sistema y la tensión de la cuerda.</li>
</ol>

<h2>Cuestiones <span class="pts">(0,5 puntos cada una)</span></h2>
<p>Indica si son verdaderas o falsas y justifícalo.</p>
<ol>
<li>Si el módulo de la velocidad de una partícula es constante, su aceleración es nula.</li>
<li>En un tiro parabólico sin rozamiento, la componente horizontal de la velocidad es constante.</li>
<li>La fuerza normal que un plano ejerce sobre un cuerpo es siempre igual a su peso.</li>
<li>La fuerza de rozamiento estático siempre vale $\mu_sN$.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>(a) $\vec v=(2t-4)\,\hat\imath+2\,\hat\jmath$, $\ \vec a=2\,\hat\imath$ (constante).</p>
<p>(b) En $t=1$: $\vec v=(-2,2)$, $|\vec v|=2\sqrt2$; $\vec a=(2,0)$.</p>
$$a_t=\frac{\vec v\cdot\vec a}{|\vec v|}=\frac{-4}{2\sqrt2}=-\sqrt2,\qquad a_n=\frac{|\vec v\times\vec a|}{|\vec v|}=\frac{|(-2)(0)-(2)(2)|}{2\sqrt2}=\sqrt2,\qquad \rho=\frac{v^2}{a_n}=\frac{8}{\sqrt2}.$$
<p class="res">$a_t=-\sqrt2$ m/s² (frena), $\ a_n=\sqrt2$ m/s², $\ \rho=4\sqrt2\approx5{,}66$ m</p>
<p>(c) $y=2t+1\Rightarrow t=\frac{y-1}2$; $x=t^2-4t$: $\ x=\frac{(y-1)^2}{4}-2(y-1)$. Es una parábola de eje horizontal.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>(a) $\frac{dv}{dt}=6-2v\Rightarrow\int_0^v\frac{dv'}{6-2v'}=\int_0^tdt'\Rightarrow-\frac12\ln\frac{6-2v}{6}=t$.</p>
<p class="res">$v(t)=3\left(1-e^{-2t}\right)$ m/s; $\ v_L=3$ m/s</p>
<p>(La velocidad límite también sale de imponer $a=0$: $6-2v=0$.)</p>
<p>(b) $x=\int_0^t3(1-e^{-2t'})\,dt'$:</p>
<p class="res">$x(t)=3t-\frac32\left(1-e^{-2t}\right)$ m</p>
<p>(c) $1-e^{-2t}=0{,}95\Rightarrow e^{-2t}=0{,}05\Rightarrow t=\frac{\ln20}{2}$.</p>
<p class="res">$t\approx1{,}50$ s</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>Origen en el pie del edificio: $v_x=15\cos30^\circ=12{,}99$ m/s, $v_{0y}=15\sin30^\circ=7{,}5$ m/s.</p>
<p>(a) $h_{\max}=20+\frac{v_{0y}^2}{2g}=20+\frac{56{,}25}{19{,}6}$.</p>
<p class="res">$h_{\max}\approx22{,}87$ m</p>
<p>(b) $y=20+7{,}5t-4{,}9t^2=0\Rightarrow t=\frac{7{,}5+\sqrt{7{,}5^2+4\cdot4{,}9\cdot20}}{9{,}8}$.</p>
<p class="res">$t\approx2{,}93$ s; $\ x=v_xt\approx38{,}0$ m</p>
<p>(c) $v_y=7{,}5-9{,}8\cdot2{,}926=-21{,}17$ m/s.</p>
<p class="res">$|\vec v|=\sqrt{12{,}99^2+21{,}17^2}\approx24{,}8$ m/s, a $58{,}5^\circ$ por debajo de la horizontal</p>
<p class="crit">Comprobación por energía: $v^2=v_0^2+2gh=225+392=617\Rightarrow v=24{,}84$ m/s ✔.</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) Bloque del plano (4 kg): peso, normal, tensión hacia la polea (subiendo por el plano) y rozamiento hacia abajo del plano (se opone a que suba). Bloque colgante (3 kg): peso y tensión.</p>
<p>(b) $N=m_1g\cos30^\circ=4\cdot9{,}8\cdot0{,}866=33{,}9$ N; $\ F_r=\mu_kN=6{,}79$ N.</p>
$$\text{Bloque 2: } m_2g-T=m_2a\qquad \text{Bloque 1: } T-m_1g\sin30^\circ-F_r=m_1a$$
$$a=\frac{m_2g-m_1g\sin30^\circ-\mu_km_1g\cos30^\circ}{m_1+m_2}=\frac{29{,}4-19{,}6-6{,}79}{7}$$
<p class="res">$N\approx33{,}9$ N, $\ a\approx0{,}43$ m/s², $\ T=m_2(g-a)\approx28{,}1$ N</p>
</div>

<h2>Cuestiones</h2>
<div class="ans">
<p><strong>1. Falsa.</strong> Si el módulo es constante, $a_t=0$, pero la dirección puede cambiar: en un movimiento circular uniforme $a_n=\frac{v^2}R\ne0$.</p>
<p><strong>2. Verdadera.</strong> La única fuerza es el peso, vertical: $a_x=0$ y $v_x=v_0\cos\theta$ es constante.</p>
<p><strong>3. Falsa.</strong> En un plano inclinado $N=mg\cos\theta$; también cambia si hay otras fuerzas con componente perpendicular, o en un ascensor acelerado.</p>
<p><strong>4. Falsa.</strong> $F_r\le\mu_sN$: toma el valor justo para el equilibrio, y solo vale $\mu_sN$ cuando el movimiento es inminente.</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen de prueba 2",
  sub: "Física I · Vectores, movimiento relativo, movimiento circular y energía",
  desc: "Momento de una fuerza, cruzar un río, disco con aceleración angular y bloque lanzado por un muelle con rozamiento.",
  dur: "2 h", pts: "10 puntos",
  instr: "<p>Toma $g=9{,}8$ m/s². Las cuestiones deben justificarse.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<p>Una fuerza $\vec F=\hat\imath+2\hat\jmath-2\hat k$ (N) está aplicada en el punto $P=(2,-1,3)$ (m).</p>
<ol class="parts">
<li>Calcula el momento de $\vec F$ respecto al origen y su módulo.</li>
<li>Calcula la distancia del origen a la recta de acción de $\vec F$ (el brazo).</li>
<li>Calcula el momento de $\vec F$ respecto al eje $OZ$.</li>
<li>Calcula el ángulo entre $\vec{OP}$ y $\vec F$, y la proyección de $\vec{OP}$ sobre la dirección de $\vec F$.</li>
</ol>

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<p>Un río de 80 m de ancho baja con una velocidad de 3 m/s. Una barca se mueve a 5 m/s respecto al agua.</p>
<ol class="parts">
<li>Si la barca apunta perpendicularmente a la orilla, ¿cuánto tarda en cruzar y a qué distancia río abajo llega?</li>
<li>¿Hacia dónde debe apuntar para llegar al punto exactamente opuesto? ¿Cuánto tarda entonces?</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Un disco de radio $R=0{,}5$ m parte del reposo y gira con aceleración angular constante $\alpha=2$ rad/s². Para un punto del borde, en $t=3$ s:</p>
<ol class="parts">
<li>Calcula la velocidad angular, la velocidad lineal y el número de vueltas dadas.</li>
<li>Calcula las aceleraciones tangencial y normal y el módulo de la aceleración total.</li>
</ol>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<p>Un muelle de constante $k=500$ N/m se comprime 20 cm y se usa para lanzar un bloque de 0,5 kg sobre una superficie horizontal con $\mu_k=0{,}25$ (el rozamiento actúa desde el primer momento).</p>
<ol class="parts">
<li>Calcula la energía almacenada en el muelle.</li>
<li>Calcula la velocidad del bloque en el momento en que el muelle recupera su longitud natural.</li>
<li>Calcula la distancia total que recorre el bloque desde que se suelta hasta que se para.</li>
</ol>

<h2>Cuestiones <span class="pts">(0,5 puntos cada una)</span></h2>
<ol>
<li>Si la resultante de un sistema de fuerzas es nula, su momento es el mismo respecto a cualquier punto.</li>
<li>Un observador en un tren que va a velocidad constante mide las mismas aceleraciones que uno en el andén.</li>
<li>El trabajo de la fuerza de rozamiento es independiente del camino seguido.</li>
<li>Si sobre una partícula solo actúan fuerzas conservativas, su energía cinética se conserva.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>(a) $\vec M_O=\vec{OP}\times\vec F=\begin{vmatrix}\hat\imath & \hat\jmath & \hat k\\ 2 & -1 & 3\\ 1 & 2 & -2\end{vmatrix}=(2-6,\ 3+4,\ 4+1)$.</p>
<p class="res">$\vec M_O=(-4,\,7,\,5)$ N·m, $\ |\vec M_O|=\sqrt{90}=3\sqrt{10}\approx9{,}49$ N·m</p>
<p>(b) $|\vec F|=3$ N, $\ d=\frac{|\vec M_O|}{|\vec F|}=\sqrt{10}\approx3{,}16$ m.</p>
<p>(c) $M_z=\vec M_O\cdot\hat k=5$ N·m.</p>
<p>(d) $\vec{OP}\cdot\vec F=2-2-6=-6$; $|\vec{OP}|=\sqrt{14}$. $\cos\theta=\frac{-6}{3\sqrt{14}}=-0{,}535$, $\theta\approx122{,}3^\circ$. Proyección: $\frac{\vec{OP}\cdot\vec F}{|\vec F|}=-2$ m.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>$\vec v_{\text{barca/tierra}}=\vec v_{\text{barca/agua}}+\vec v_{\text{agua/tierra}}$.</p>
<p>(a) Componente transversal 5 m/s: $t=\frac{80}5=16$ s. Arrastre: $3\cdot16=48$ m.</p>
<p class="res">16 s; llega 48 m río abajo (velocidad respecto a tierra $\sqrt{34}\approx5{,}83$ m/s)</p>
<p>(b) La componente de la barca a lo largo del río debe anular la corriente: $5\sin\theta=3\Rightarrow\theta=36{,}9^\circ$ río arriba respecto a la perpendicular. Componente transversal: $5\cos\theta=4$ m/s.</p>
<p class="res">Apuntar $36{,}9^\circ$ aguas arriba; $t=\frac{80}4=20$ s</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) $\omega=\alpha t=6$ rad/s; $v=\omega R=3$ m/s; $\theta=\frac12\alpha t^2=9$ rad $=\frac{9}{2\pi}\approx1{,}43$ vueltas.</p>
<p>(b) $a_t=\alpha R=1$ m/s²; $a_n=\omega^2R=18$ m/s².</p>
<p class="res">$|\vec a|=\sqrt{1+324}\approx18{,}03$ m/s²</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>(a) $E=\frac12kx^2=\frac12\cdot500\cdot0{,}2^2$.</p>
<p class="res">$E=10$ J</p>
<p>(b) Rozamiento: $F_r=\mu_kmg=0{,}25\cdot0{,}5\cdot9{,}8=1{,}225$ N. En los 0,2 m de descompresión: $\frac12mv^2=10-1{,}225\cdot0{,}2=9{,}755$ J.</p>
<p class="res">$v=\sqrt{\frac{2\cdot9{,}755}{0{,}5}}\approx6{,}25$ m/s</p>
<p>(c) Toda la energía inicial se disipa: $F_r\,d=10$ J.</p>
<p class="res">$d=\frac{10}{1{,}225}\approx8{,}16$ m (desde el punto de suelta)</p>
</div>

<h2>Cuestiones</h2>
<div class="ans">
<p><strong>1. Verdadera.</strong> $\vec M_{O'}=\vec M_O+\vec{O'O}\times\vec R$, y con $\vec R=\vec0$ queda $\vec M_{O'}=\vec M_O$ (es un par).</p>
<p><strong>2. Verdadera.</strong> Con traslación uniforme, $\vec a_F=\vec a_M+\vec a_{O'}$ y $\vec a_{O'}=\vec0$ (transformación de Galileo).</p>
<p><strong>3. Falsa.</strong> El rozamiento no es conservativo: su trabajo, $-F_r\cdot s$, depende de la longitud del camino recorrido.</p>
<p><strong>4. Falsa.</strong> Se conserva la energía <strong>mecánica</strong> $E_c+E_p$; la cinética cambia (por ejemplo, en una caída libre aumenta).</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen de prueba 3",
  sub: "Física I · Polares, sistemas en rotación, estática con rozamiento y gravitación",
  desc: "Movimiento en coordenadas polares, partícula sobre una plataforma giratoria, fuerza mínima en un plano y satélite en órbita.",
  dur: "2 h", pts: "10 puntos",
  instr: "<p>Toma $g=9{,}8$ m/s² y $R_T=6370$ km. Las cuestiones deben justificarse.</p>",
  exam: String.raw`
<h2>Problema 1 <span class="pts">(2 puntos)</span></h2>
<p>Una partícula se mueve en el plano según $r(t)=\frac12t^2$ (m) y $\theta(t)=2t$ (rad).</p>
<ol class="parts">
<li>Calcula los vectores velocidad y aceleración en componentes polares en $t=1$ s.</li>
<li>En ese instante, calcula las aceleraciones tangencial y normal y el radio de curvatura.</li>
</ol>

<h2>Problema 2 <span class="pts">(2 puntos)</span></h2>
<p>Una plataforma horizontal gira con velocidad angular constante $\omega=2$ rad/s. Una partícula de 0,5 kg se mueve sobre ella a lo largo de una ranura radial, alejándose del centro con velocidad constante de 1,5 m/s respecto a la plataforma.</p>
<ol class="parts">
<li>Cuando está a 2 m del centro, calcula la aceleración absoluta (respecto al suelo), separando sus términos.</li>
<li>Calcula la fuerza horizontal que la ranura ejerce sobre la partícula en ese instante.</li>
</ol>

<h2>Problema 3 <span class="pts">(2 puntos)</span></h2>
<p>Un bloque de 10 kg descansa en un plano inclinado 20° con $\mu_s=0{,}4$.</p>
<ol class="parts">
<li>¿Está en equilibrio sin ninguna fuerza aplicada? ¿Cuánto vale la fuerza de rozamiento?</li>
<li>Calcula la fuerza <strong>horizontal</strong> mínima que hay que aplicar para que el bloque empiece a subir.</li>
</ol>

<h2>Problema 4 <span class="pts">(2 puntos)</span></h2>
<p>Un satélite describe una órbita circular a una altura sobre la superficie terrestre igual al radio de la Tierra.</p>
<ol class="parts">
<li>Calcula su velocidad orbital y su periodo.</li>
<li>Calcula la velocidad que necesitaría a esa altura para escapar de la atracción terrestre y el aumento de velocidad necesario.</li>
</ol>

<h2>Cuestiones <span class="pts">(0,5 puntos cada una)</span></h2>
<ol>
<li>La aceleración de Coriolis es nula si la partícula está en reposo respecto al sistema que gira.</li>
<li>Si $\dot r=0$ en todo momento, el movimiento es circular.</li>
<li>Bajo una fuerza central, el momento angular respecto al centro de fuerzas se conserva.</li>
<li>El periodo de un satélite en órbita circular no depende de su masa.</li>
</ol>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<p>En $t=1$: $r=\frac12$, $\dot r=t=1$, $\ddot r=1$, $\dot\theta=2$, $\ddot\theta=0$.</p>
$$\vec v=\dot r\,\hat u_r+r\dot\theta\,\hat u_\theta=\hat u_r+\hat u_\theta,\qquad \vec a=(\ddot r-r\dot\theta^2)\hat u_r+(r\ddot\theta+2\dot r\dot\theta)\hat u_\theta=-\hat u_r+4\hat u_\theta.$$
<p class="res">$\vec v=(1,1)$ m/s, $|\vec v|=\sqrt2$; $\ \vec a=(-1,4)$ m/s², $|\vec a|=\sqrt{17}$</p>
<p>(b) $a_t=\frac{\vec v\cdot\vec a}{v}=\frac{3}{\sqrt2}\approx2{,}12$ m/s²; $\ a_n=\frac{|\vec v\times\vec a|}{v}=\frac{|1\cdot4-1\cdot(-1)|}{\sqrt2}=\frac{5}{\sqrt2}\approx3{,}54$ m/s².</p>
<p class="res">$\rho=\frac{v^2}{a_n}=\frac{2\sqrt2}{5}\approx0{,}57$ m</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<p>Sistema móvil: la plataforma. $\vec\omega=2\hat k$, $\vec r\,'=2\hat u_r$, $\vec v_M=1{,}5\hat u_r$, $\vec a_M=\vec0$, $\dot{\vec\omega}=\vec0$.</p>
<p>(a) Centrípeta de arrastre: $\vec\omega\times(\vec\omega\times\vec r\,')=-\omega^2r'\hat u_r=-8\hat u_r$. Coriolis: $2\vec\omega\times\vec v_M=2\cdot2\cdot1{,}5\,\hat u_\theta=6\hat u_\theta$.</p>
<p class="res">$\vec a=-8\,\hat u_r+6\,\hat u_\theta$ m/s², $\ |\vec a|=10$ m/s²</p>
<p>(b) Newton en el sistema fijo: la única fuerza horizontal es la de la ranura.</p>
<p class="res">$\vec F=m\vec a=-4\,\hat u_r+3\,\hat u_\theta$ N, $\ |\vec F|=5$ N</p>
<p class="crit">La componente $\hat u_\theta$ (3 N) la hace la pared lateral de la ranura: es la que "transmite" la aceleración de Coriolis.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<p>(a) $\tan20^\circ=0{,}364\lt\mu_s=0{,}4$: <strong>está en equilibrio</strong>. El rozamiento compensa la componente del peso: $F_r=mg\sin20^\circ$.</p>
<p class="res">$F_r\approx33{,}5$ N (menor que $\mu_sN=0{,}4\cdot92{,}1=36{,}8$ N)</p>
<p>(b) Con $F$ horizontal y movimiento inminente hacia arriba (rozamiento hacia abajo):</p>
$$\perp:\ N=mg\cos20^\circ+F\sin20^\circ\qquad \parallel:\ F\cos20^\circ=mg\sin20^\circ+\mu_sN$$
$$F=\frac{mg(\sin20^\circ+\mu_s\cos20^\circ)}{\cos20^\circ-\mu_s\sin20^\circ}=\frac{98\cdot0{,}7179}{0{,}8029}$$
<p class="res">$F\approx87{,}6$ N</p>
</div>

<h2>Problema 4</h2>
<div class="ans">
<p>Radio de la órbita $r=2R_T$. Con $GM=g_0R_T^2$:</p>
<p>(a) $v=\sqrt{\frac{GM}{r}}=\sqrt{\frac{g_0R_T}{2}}=\sqrt{\frac{9{,}8\cdot6{,}37\cdot10^6}{2}}$; $\ T=\frac{2\pi r}{v}$.</p>
<p class="res">$v\approx5{,}59$ km/s, $\ T\approx14\,330$ s $\approx3{,}98$ h</p>
<p>(b) Escape desde $r$: $v_e=\sqrt{\frac{2GM}{r}}=\sqrt{g_0R_T}\approx7{,}90$ km/s ($=\sqrt2\,v$).</p>
<p class="res">$\Delta v\approx7{,}90-5{,}59=2{,}31$ km/s</p>
</div>

<h2>Cuestiones</h2>
<div class="ans">
<p><strong>1. Verdadera.</strong> $\vec a_C=2\vec\omega\times\vec v_M$, y si $\vec v_M=\vec0$ es nula.</p>
<p><strong>2. Verdadera.</strong> $r$ es constante: la distancia al origen no cambia, así que la trayectoria es una circunferencia (aunque $\dot\theta$ puede variar).</p>
<p><strong>3. Verdadera.</strong> $\vec M_O=\vec r\times\vec F=\vec0$ porque $\vec F\parallel\vec r$, y $\frac{d\vec L_O}{dt}=\vec M_O$.</p>
<p><strong>4. Verdadera.</strong> $v=\sqrt{GM/r}$ y $T=2\pi r/v$ solo dependen de la masa de la Tierra y del radio de la órbita.</p>
</div>
`}
];
