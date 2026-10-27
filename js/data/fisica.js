SUBJECTS.push({
  id: "fisica",
  name: "Física I",
  short: "Física",
  desc: "Vectores, cinemática, movimiento relativo, estática, dinámica y energía.",
  intro: "Los problemas siguen la numeración de tus hojas (vectores, cinemática y estática-dinámica), cuyas soluciones manuscritas tienes en problema_N.pdf. La idea de fondo de todo el curso es la misma: elegir bien el sistema de referencia y escribir las ecuaciones vectoriales antes de pasar a componentes.",
  sources: "teoría de vectores, cinemática y movimiento relativo; diapositivas de dinámica (lecciones 3 y 4); hojas de problemas de vectores, cinemática y estática-dinámica con soluciones.",
  topics: [

/* ============================================================ */
{ id: "vectores", title: "Vectores",
  desc: "Producto escalar, vectorial y mixto, momento y sistemas de vectores deslizantes.",
  html: String.raw`
<h2>Lo básico</h2>
<div class="formula">$$\vec A=A_x\vec i+A_y\vec j+A_z\vec k\qquad |\vec A|=\sqrt{A_x^2+A_y^2+A_z^2}\qquad \vec u_A=\frac{\vec A}{|\vec A|}$$</div>
<h3>Producto escalar (da un número)</h3>
<div class="formula">$$\vec A\cdot\vec B=A_xB_x+A_yB_y+A_zB_z=|\vec A||\vec B|\cos\theta$$</div>
<p>Sirve para: ángulos, comprobar perpendicularidad ($=0$) y proyectar ($\vec A\cdot\vec u$ es la componente de $\vec A$ en la dirección $\vec u$). En física: el trabajo $W=\vec F\cdot\Delta\vec r$.</p>
<h3>Producto vectorial (da un vector)</h3>
<div class="formula">$$\vec A\times\vec B=\begin{vmatrix}\vec i & \vec j & \vec k\\ A_x & A_y & A_z\\ B_x & B_y & B_z\end{vmatrix},\qquad |\vec A\times\vec B|=|\vec A||\vec B|\sin\theta$$</div>
<ul><li>Es perpendicular a $\vec A$ y a $\vec B$, con sentido de la regla de la mano derecha.</li>
<li>Su módulo es el área del paralelogramo. Anticonmutativo: $\vec B\times\vec A=-\vec A\times\vec B$.</li>
<li>$\vec A\times\vec B=\vec 0$ ⇔ paralelos.</li></ul>
<h3>Producto mixto</h3>
<p>$[\vec A,\vec B,\vec C]=\vec A\cdot(\vec B\times\vec C)=\det(\vec A,\vec B,\vec C)$: volumen del paralelepípedo.</p>

<div class="steps"><p>Problema 1: $\vec A=3\vec i+4\vec j-5\vec k$ y $\vec B=-\vec i+2\vec j+6\vec k$.</p>
<div class="step">Módulos: $|\vec A|=\sqrt{50}=5\sqrt2$, $|\vec B|=\sqrt{41}$.</div>
<div class="step">$\vec A\cdot\vec B=-3+8-30=-25$. $\cos\theta=\frac{-25}{5\sqrt2\sqrt{41}}=-0{,}552 \Rightarrow \theta\approx123{,}5^\circ$.</div>
<div class="step">$\vec A\times\vec B=(4\cdot6-(-5)\cdot2,\ (-5)(-1)-3\cdot6,\ 3\cdot2-4(-1))=(34,-13,10)$. No son paralelos.</div>
<div class="step">Unitario perpendicular a ambos: $\frac{(34,-13,10)}{|(34,-13,10)|}\approx(0{,}901,-0{,}344,0{,}265)$.</div></div>

<div class="num" data-a="-25"><p>Calcula $(3,4,-5)\cdot(-1,2,6)$.</p><div class="why"><p>$-3+8-30=-25$.</p></div></div>
<div class="tf" data-a="f"><p>$\vec A\times\vec B=\vec B\times\vec A$.</p><div class="why"><p>Es anticonmutativo: $\vec A\times\vec B=-\vec B\times\vec A$.</p></div></div>
<div class="num" data-a="0"><p>¿Para qué valor de $a$ es el vector que va del extremo de $\vec A=(1,2,-1)$ al extremo de $\vec B=(a,-1,1)$ perpendicular a $\vec D=(-1,1,1)$?</p>
<div class="why"><p>$\vec C=\vec B-\vec A=(a-1,-3,2)$. $\vec C\cdot\vec D=-(a-1)-3+2=-a=0 \Rightarrow a=0$ (problema 8).</p></div></div>

<h2>Derivada de un vector</h2>
<div class="key"><span class="label">Resultado importante</span><p>Si $|\vec A(t)|$ es constante, entonces $\frac{d\vec A}{dt}\perp\vec A$. Por eso en un movimiento circular uniforme la velocidad es perpendicular al radio y la aceleración apunta al centro.</p></div>
<p>Demostración: $\vec A\cdot\vec A=\text{cte} \Rightarrow 2\vec A\cdot\frac{d\vec A}{dt}=0$.</p>

<h2>Momento y sistemas de vectores deslizantes</h2>
<div class="formula">$$\vec M_O=\vec r\times\vec F\ \ (\vec r=\text{de } O \text{ al punto de aplicación})\qquad \vec R=\sum\vec F_i\qquad \vec M_P=\vec M_O+\vec{PO}\times\vec R$$</div>
<p>La última fórmula (cambio de punto) es la clave del problema 11: conociendo el momento en un punto lo conoces en todos.</p>
<div class="tf" data-a="v"><p>Si la resultante de un sistema de vectores es nula, el momento es el mismo respecto a cualquier punto.</p>
<div class="why"><p>$\vec M_P=\vec M_O+\vec{PO}\times\vec 0=\vec M_O$. Es un par de fuerzas.</p></div></div>
`},

/* ============================================================ */
{ id: "cinematica-recta", title: "Cinemática: movimiento rectilíneo",
  desc: "Posición, velocidad y aceleración; integrar cuando la aceleración depende de t, de v o de x.",
  html: String.raw`
<h2>Las tres magnitudes</h2>
<div class="formula">$$v=\frac{dx}{dt}\qquad a=\frac{dv}{dt}=\frac{d^2x}{dt^2}\qquad \text{y al revés: } x(t)=x_0+\int_{t_0}^tv\,dt$$</div>
<ul><li><strong>MRU</strong>: $a=0$, $x=x_0+vt$.</li>
<li><strong>MRUA</strong>: $a$ constante, $v=v_0+at$, $x=x_0+v_0t+\frac12at^2$, $v^2=v_0^2+2a(x-x_0)$.</li></ul>
<div class="warn"><span class="label">Velocidad media ≠ media de velocidades</span><p>$\bar v=\frac{\Delta x}{\Delta t}$. Si la velocidad cambia de signo, la "rapidez media" (distancia recorrida/tiempo) es distinta del módulo de la velocidad media.</p></div>

<div class="steps"><p>Problema 1: $v=2+3t^2+4t^3$ (m/s), $x(0)=3$ m.</p>
<div class="step">Unidades: cada sumando debe dar m/s: $2$ en m/s, $3$ en m/s³, $4$ en m/s⁴.</div>
<div class="step">Integramos: $x(t)=3+2t+t^3+t^4$. Derivamos: $a=6t+12t^2$.</div>
<div class="step">Velocidad media entre 2 y 5 s: $\frac{x(5)-x(2)}{3}=\frac{763-31}{3}=244$ m/s.</div></div>

<h2>Cuando la aceleración no depende de $t$</h2>
<div class="key"><span class="label">Dos trucos que lo resuelven todo</span>
<ul><li>Si $a=a(v)$: separa variables, $\frac{dv}{a(v)}=dt$.</li>
<li>Si $a=a(x)$: usa la regla de la cadena $a=\frac{dv}{dt}=v\frac{dv}{dx}$, así $v\,dv=a(x)\,dx$.</li></ul></div>
<div class="steps"><p>Problema 9: canoa con $a=-kv^2$ al parar el motor, $v(0)=v_0$.</p>
<div class="step">$\frac{dv}{dt}=-kv^2 \Rightarrow \int_{v_0}^v\frac{dv}{v^2}=-k\int_0^tdt \Rightarrow -\frac1v+\frac1{v_0}=-kt$.</div>
<div class="step">$v(t)=\dfrac{v_0}{1+v_0kt}$.</div>
<div class="step">Integrando otra vez: $x(t)=\frac1k\ln(1+v_0kt)$. Y con $a=v\frac{dv}{dx}=-kv^2$: $\frac{dv}{v}=-k\,dx \Rightarrow v(x)=v_0e^{-kx}$.</div></div>
<div class="num" data-a="0.003333" data-tol="0.0001" data-show="1/300 ≈ 0,00333 m⁻¹"><p>Problema 9(e): si $v_0=20$ m/s y a los 15 s la velocidad es la mitad, ¿cuánto vale $k$ (en m⁻¹)?</p>
<div class="why"><p>$10=\frac{20}{1+20\cdot k\cdot15} \Rightarrow 1+300k=2 \Rightarrow k=\frac1{300}$ m⁻¹.</p></div></div>
<div class="num" data-a="0.0462" data-tol="0.001"><p>Problema 10: $a=-kv$ y la velocidad se reduce a la mitad en 15 s. ¿$k$ en s⁻¹?</p>
<div class="why"><p>$v=v_0e^{-kt}$. $\frac12=e^{-15k} \Rightarrow k=\frac{\ln2}{15}=0{,}0462$ s⁻¹.</p></div></div>

<h2>Caída libre</h2>
<div class="prob"><div class="enun"><p>Una pelota que se deja caer desde una cornisa tarda 0,25 s en pasar frente a una ventana de 2 m. ¿Qué distancia hay entre la cornisa y el borde superior de la ventana?</p><p class="src">Cinemática, problema 3</p></div>
<div class="hint"><p>Primero la velocidad al llegar al borde superior con $2=v\cdot0{,}25+\frac12g(0{,}25)^2$; después $h=\frac{v^2}{2g}$.</p></div>
<div class="sol"><p>$2=0{,}25v+4{,}9\cdot0{,}0625 \Rightarrow v=6{,}78$ m/s. $h=\frac{6{,}78^2}{2\cdot9{,}8}\approx2{,}34$ m.</p></div></div>

<div class="prob"><div class="enun"><p>Un coche frena como máximo a 7 m/s² y el conductor tarda 0,5 s en reaccionar. Si debe pararse en 4 m como mucho, ¿velocidad máxima? ¿Qué parte de los 4 m se recorre durante la reacción?</p><p class="src">Cinemática, problema 4</p></div>
<div class="sol"><p>$0{,}5v+\frac{v^2}{14}=4 \Rightarrow v^2+7v-56=0 \Rightarrow v=4{,}76$ m/s (17 km/h). Durante la reacción: $0{,}5\cdot4{,}76=2{,}38$ m, el 59,5 %.</p></div></div>

<div class="prob"><div class="enun"><p>Un expreso a $v_1$ ve a distancia $d$ un mercancías que va delante a $v_2\lt v_1$ por la misma vía. Frena con deceleración $a$. ¿Condición para no chocar?</p><p class="src">Cinemática, problema 5</p></div>
<div class="hint"><p>Trabaja en el sistema del mercancías: el expreso se acerca a $v_1-v_2$ y frena con $a$.</p></div>
<div class="sol"><p>Velocidad relativa inicial $v_1-v_2$; se anula tras recorrer (relativamente) $\frac{(v_1-v_2)^2}{2a}$. No chocan si $d\gt\frac{(v_1-v_2)^2}{2a}$, es decir $a\gt\frac{(v_1-v_2)^2}{2d}$.</p></div></div>
`},

/* ============================================================ */
{ id: "cinematica-plano", title: "Cinemática en el plano y el espacio",
  desc: "Tiro parabólico, movimiento circular, componentes intrínsecas y coordenadas polares.",
  html: String.raw`
<h2>Tiro parabólico</h2>
<p>Se separa en dos movimientos independientes: MRU en $x$ y MRUA en $y$.</p>
<div class="formula">$$x=v_0\cos\theta\,t\qquad y=y_0+v_0\sin\theta\,t-\tfrac12gt^2$$
$$\text{Alcance (mismo nivel)}=\frac{v_0^2\sin2\theta}{g}\qquad h_{\max}=\frac{v_0^2\sin^2\theta}{2g}$$</div>
<div class="num" data-a="35.35" data-tol="0.1" data-unit="m"><p>Se lanza un proyectil a 20 m/s con 30° sobre la horizontal ($g=9{,}8$). ¿Alcance en terreno llano?</p>
<div class="why"><p>$\frac{400\cdot\sin60^\circ}{9{,}8}=\frac{346{,}4}{9{,}8}\approx35{,}35$ m.</p></div></div>
<div class="tf" data-a="v"><p>En el punto más alto de un tiro parabólico la velocidad no es nula.</p>
<div class="why"><p>Solo se anula la componente vertical; la horizontal $v_0\cos\theta$ se mantiene.</p></div></div>

<h2>Componentes intrínsecas</h2>
<div class="key"><span class="label">La aceleración se reparte en dos</span>
$$\vec a=a_t\,\vec u_t+a_n\,\vec u_n,\qquad a_t=\frac{d|\vec v|}{dt},\qquad a_n=\frac{v^2}{\rho}$$
<p>$a_t$ cambia el <strong>módulo</strong> de la velocidad; $a_n$ cambia su <strong>dirección</strong> (apunta al centro de curvatura, $\rho$ es el radio de curvatura).</p></div>
<div class="formula">$$a_t=\frac{\vec a\cdot\vec v}{|\vec v|}\qquad a_n=\frac{|\vec a\times\vec v|}{|\vec v|}=\sqrt{a^2-a_t^2}\qquad \rho=\frac{v^3}{|\vec a\times\vec v|}$$</div>
<div class="mc"><p>En un movimiento circular uniforme…</p>
<ul><li data-ok>$a_t=0$ y $a_n=\frac{v^2}{R}$</li><li>$a_t=\frac{v^2}{R}$ y $a_n=0$</li><li>$\vec a=\vec 0$ porque la rapidez es constante</li><li>$a_n=\omega R$</li></ul>
<div class="why"><p>La rapidez no cambia ($a_t=0$) pero la dirección sí: $a_n=\frac{v^2}R=\omega^2R$.</p></div></div>

<div class="steps"><p>Problema 21: $\vec r=3\sin(2\pi t)\,\vec i+2\cos(2\pi t)\,\vec j$.</p>
<div class="step">Trayectoria: $\frac{x^2}9+\frac{y^2}4=\sin^2+\cos^2=1$. Elipse.</div>
<div class="step">$\vec v=6\pi\cos(2\pi t)\vec i-4\pi\sin(2\pi t)\vec j$, $|\vec v|=2\pi\sqrt{5\cos^2(2\pi t)+4}$. Máxima cuando $\cos^2=1$ ($t=\frac n2$), mínima cuando $\cos=0$.</div>
<div class="step">$\vec a=-(2\pi)^2\vec r$: siempre apunta hacia el origen (aceleración central).</div>
<div class="step">Para $t=\frac\pi2$ s: $a_t=\frac{d|\vec v|}{dt}\approx-26{,}98$ m/s² y $a_n=\sqrt{a^2-a_t^2}\approx83{,}3$ m/s².</div></div>

<div class="prob"><div class="enun"><p>Una partícula recorre en sentido horario una circunferencia de radio 1 m centrada en $(1,0)$. Parte del reposo en el origen con aceleración tangencial constante $\frac\pi2$ m/s². Cuando ha recorrido media vuelta: tiempo, velocidad y aceleraciones.</p><p class="src">Cinemática, problema 20</p></div>
<div class="hint"><p>Media vuelta son $\pi$ metros de arco: $s=\frac12a_tt^2$.</p></div>
<div class="sol"><p>$\pi=\frac12\cdot\frac\pi2t^2 \Rightarrow t=2$ s. $v=a_tt=\pi$ m/s. Está en $(2,0)$ y va hacia abajo: $\vec v=-\pi\vec j$.</p>
<p>$a_n=\frac{v^2}{R}=\pi^2$ m/s², $a_t=\frac\pi2$ m/s².</p></div></div>

<h2>Coordenadas polares</h2>
<div class="formula">$$\vec v=\dot r\,\vec u_r+r\dot\theta\,\vec u_\theta\qquad \vec a=(\ddot r-r\dot\theta^2)\,\vec u_r+(r\ddot\theta+2\dot r\dot\theta)\,\vec u_\theta$$</div>
<p>El término $-r\dot\theta^2$ es la aceleración centrípeta; $2\dot r\dot\theta$ es la de Coriolis.</p>
<div class="prob"><div class="enun"><p>$r=60t^2-20t^3$ (mm) y $\theta=2t^2$ (rad). Velocidad y aceleración en $t=1$ s.</p><p class="src">Cinemática, problema 27</p></div>
<div class="sol"><p>En $t=1$: $r=40$, $\dot r=120t-60t^2=60$, $\ddot r=120-120t=0$; $\dot\theta=4t=4$, $\ddot\theta=4$.</p>
<p>$\vec v=60\vec u_r+40\cdot4\,\vec u_\theta=60\vec u_r+160\vec u_\theta$ mm/s.</p>
<p>$a_r=0-40\cdot16=-640$; $a_\theta=40\cdot4+2\cdot60\cdot4=640$. $\vec a=640(-\vec u_r+\vec u_\theta)$ mm/s².</p></div></div>

<h2>Movimiento en el espacio</h2>
<div class="tf" data-a="v"><p>En la hélice $x=R\cos\omega t$, $y=R\sin\omega t$, $z=bt$, la aceleración tangencial es nula.</p>
<div class="why"><p>$|\vec v|=\sqrt{\omega^2R^2+b^2}$ es constante, así que $a_t=0$ y toda la aceleración es normal: $a_n=\omega^2R$ (problema 23).</p></div></div>
`},

/* ============================================================ */
{ id: "relativo", title: "Movimiento relativo",
  desc: "Sistemas que se trasladan y que giran: Galileo, Coriolis y la Tierra como sistema no inercial.",
  html: String.raw`
<h2>Traslación</h2>
<div class="formula">$$\vec r=\vec r\,'+\vec r_{O'}\qquad \vec v=\vec v\,'+\vec V_{O'}\qquad \vec a=\vec a\,'+\vec A_{O'}$$</div>
<p>Si $O'$ se mueve con velocidad constante, las aceleraciones son iguales en los dos sistemas: los dos son inerciales.</p>
<div class="tip"><span class="label">Cómo plantearlo sin liarte</span><p>Escribe la frase "velocidad de X respecto de Y = velocidad de X respecto de Z + velocidad de Z respecto de Y" y dibuja el triángulo de vectores.</p></div>

<div class="prob"><div class="enun"><p>Un hombre en un camión a 40 km/h quiere dar a un poste lanzando una piedra a 20 m/s (respecto del camión) justo cuando pasa frente a él. ¿En qué dirección la lanza? ¿Velocidad horizontal respecto al suelo?</p><p class="src">Cinemática, problema 29</p></div>
<div class="hint"><p>Respecto al suelo la piedra debe ir perpendicular a la carretera, así que la componente del lanzamiento a lo largo de la carretera tiene que anular los 40 km/h del camión.</p></div>
<div class="sol"><p>$40$ km/h $=11{,}1$ m/s. Componente hacia atrás: $20\sin\alpha=11{,}1 \Rightarrow \alpha=33{,}7^\circ$ respecto a la perpendicular, hacia atrás.</p>
<p>Velocidad respecto al suelo: $20\cos33{,}7^\circ=16{,}6$ m/s $\approx59{,}9$ km/h.</p></div></div>

<div class="prob"><div class="enun"><p>Desde un tren a 15 km/h las gotas de lluvia forman 30° con la vertical; a 30 km/h, 45°. Con el tren parado, ¿qué ángulo y qué velocidad tendrían?</p><p class="src">Cinemática, problema 30</p></div>
<div class="hint"><p>$\vec v_{gota}=\vec v\,'+\vec v_{tren}$. Cuatro incógnitas ($v_x,v_y$ y los dos módulos vistos desde el tren) y cuatro ecuaciones.</p></div>
<div class="sol"><p>Desde el tren la gota tiene componente horizontal $-v'\sin\alpha'$. Así $v_x=15-v'_{15}\sin30^\circ=30-v'_{30}\sin45^\circ$ y $v_y=v'_{15}\cos30^\circ=v'_{30}\cos45^\circ$.</p>
<p>Resolviendo: $v_x\approx-5{,}49$ km/h, $v_y\approx35{,}49$ km/h. $|\vec v|\approx35{,}9$ km/h, con un ángulo de $8{,}8^\circ$ respecto a la vertical (hay "viento").</p></div></div>

<h2>Rotación: la fórmula completa</h2>
<div class="formula">$$\vec v=\vec v\,'+\vec V_{O'}+\vec\omega\times\vec r\,'$$
$$\vec a=\vec a\,'+\underbrace{\vec A_{O'}+\dot{\vec\omega}\times\vec r\,'+\vec\omega\times(\vec\omega\times\vec r\,')}_{\text{arrastre}}+\underbrace{2\,\vec\omega\times\vec v\,'}_{\text{Coriolis}}$$</div>
<ul><li><strong>Arrastre</strong>: la aceleración que tendría el punto si estuviera pegado al sistema móvil.</li>
<li><strong>Coriolis</strong>: solo aparece si el punto se mueve respecto al sistema que gira ($\vec v\,'\ne0$).</li>
<li>$\vec\omega\times(\vec\omega\times\vec r\,')$ es centrípeta: módulo $\omega^2d$, hacia el eje.</li></ul>
<div class="mc"><p>Una mosca camina sobre una puerta que gira. ¿Qué término desaparece si la mosca se queda quieta sobre la puerta?</p>
<ul><li data-ok>La aceleración de Coriolis</li><li>La aceleración centrípeta de arrastre</li><li>Todos</li><li>Ninguno</li></ul>
<div class="why"><p>Con $\vec v\,'=0$ (y $\vec a\,'=0$) solo queda el arrastre: la mosca gira con la puerta.</p></div></div>

<h2>La Tierra como sistema que gira</h2>
<p>$\omega_T=\frac{2\pi}{86164\text{ s}}\approx7{,}29\cdot10^{-5}$ rad/s. Consecuencias: la gravedad aparente apunta un poco fuera del centro (centrífuga), los cuerpos en caída se desvían hacia el este y los vientos giran (Coriolis).</p>
<div class="tf" data-a="v"><p>En el hemisferio norte, la fuerza de Coriolis desvía hacia la derecha a un cuerpo que se mueve horizontalmente.</p>
<div class="why"><p>$-2m\vec\omega\times\vec v\,'$ con $\vec\omega$ con componente hacia arriba en el hemisferio norte apunta a la derecha del movimiento.</p></div></div>
`},

/* ============================================================ */
{ id: "estatica", title: "Estática de la partícula y rozamiento",
  desc: "Diagrama de fuerzas, equilibrio, rozamiento estático y dinámico, cono de rozamiento.",
  html: String.raw`
<h2>El método (siempre el mismo)</h2>
<div class="key"><span class="label">Cuatro pasos</span><ol>
<li><strong>Diagrama de fuerzas</strong>: aísla el cuerpo y dibuja todas las fuerzas (peso, normales, tensiones, rozamiento).</li>
<li>Elige ejes cómodos (en planos inclinados: paralelo y perpendicular al plano).</li>
<li>Equilibrio: $\sum\vec F=\vec 0$, que da una ecuación por eje.</li>
<li>Resuelve y comprueba los signos (una tensión negativa significa que el cable no puede trabajar así).</li></ol></div>

<h2>Rozamiento</h2>
<div class="formula">$$\text{Estático: } F_r\le\mu_sN\ \ (\text{solo vale } \mu_sN \text{ con movimiento inminente})\qquad \text{Dinámico: } F_r=\mu_kN,\ \text{opuesto a la velocidad relativa}$$</div>
<ul><li>Ángulo de rozamiento: $\tan\varphi=\mu_s$. La reacción total (normal + rozamiento) forma como máximo $\varphi$ con la normal: <strong>cono de rozamiento</strong>.</li>
<li>Un bloque en un plano inclinado sin otras fuerzas está en reposo si $\tan\theta\le\mu_s$.</li></ul>

<h3>Cuestiones de las diapositivas (contesta razonadamente)</h3>
<div class="tf" data-a="v"><p>Una partícula sometida únicamente a dos fuerzas de distinta dirección no puede estar en equilibrio.</p><div class="why"><p>Dos fuerzas solo se anulan si son iguales, opuestas y de la misma dirección.</p></div></div>
<div class="tf" data-a="v"><p>La fuerza de rozamiento, en condiciones de movimiento inminente, hace que la reacción total forme con la normal el ángulo de rozamiento.</p><div class="why"><p>Con $F_r=\mu_sN$, $\tan(\text{ángulo})=\frac{F_r}N=\mu_s=\tan\varphi$.</p></div></div>
<div class="tf" data-a="f"><p>La condición de equilibrio de una partícula sometida a fuerzas coplanarias se formula con tres ecuaciones escalares.</p><div class="why"><p>Si las fuerzas están en un plano, $\sum F_x=0$ y $\sum F_y=0$: dos ecuaciones (para una partícula no hay ecuación de momentos).</p></div></div>
<div class="tf" data-a="v"><p>Si sumamos gráficamente las fuerzas sobre una partícula en equilibrio, forman un polígono cerrado.</p><div class="why"><p>La suma es nula: poniendo cada vector a continuación del anterior se vuelve al punto de partida.</p></div></div>
<div class="tf" data-a="v"><p>Si una partícula está en equilibrio bajo tres fuerzas de igual módulo, forman 120° entre sí.</p><div class="why"><p>El polígono cerrado es un triángulo equilátero: ángulos exteriores de 120°.</p></div></div>
<div class="tf" data-a="v"><p>Una partícula sometida a tres fuerzas no coplanarias no puede estar en equilibrio.</p><div class="why"><p>Si $\vec F_3=-(\vec F_1+\vec F_2)$, $\vec F_3$ está en el plano de $\vec F_1$ y $\vec F_2$.</p></div></div>
<div class="tf" data-a="f"><p>Si un cuerpo está en reposo sobre un plano inclinado con rozamiento, siempre se cumple $\mu=\tan\theta$.</p><div class="why"><p>Se cumple $\tan\theta\le\mu_s$; la igualdad solo cuando está a punto de deslizar.</p></div></div>
<div class="tf" data-a="f"><p>El coeficiente de rozamiento depende del área de contacto.</p><div class="why"><p>En el modelo de Coulomb depende solo de los materiales y del estado de las superficies.</p></div></div>
<div class="tf" data-a="f"><p>El coeficiente de rozamiento es proporcional a la normal.</p><div class="why"><p>Lo proporcional a la normal es la fuerza de rozamiento máxima, $\mu N$. El coeficiente es constante.</p></div></div>
<div class="tf" data-a="f"><p>No tiene sentido hablar de cono de rozamiento si la superficie no es horizontal.</p><div class="why"><p>El cono se construye alrededor de la normal, sea cual sea la inclinación de la superficie.</p></div></div>
<div class="tf" data-a="f"><p>El ángulo de rozamiento depende de las fuerzas aplicadas.</p><div class="why"><p>$\varphi=\arctan\mu_s$: solo depende de las superficies.</p></div></div>

<h2>Problemas</h2>
<div class="prob"><div class="enun"><p>Un bloque de 20 kg está sobre un plano inclinado 25° con $\mu_s=0{,}20$. Halla la fuerza $P$ mínima (módulo y dirección) para (a) iniciar la subida; (b) impedir que baje.</p><p class="src">Estática y dinámica, problema 7</p></div>
<div class="hint"><p>Deja el ángulo de $P$ con el plano como incógnita $\beta$ y minimiza. Sale $\tan\beta=\mu_s$, es decir, $P$ forma el ángulo de rozamiento con el plano.</p></div>
<div class="sol"><p>(a) A punto de subir, el rozamiento va hacia abajo. Con $P$ formando $\beta$ con el plano: $P=\frac{mg(\sin\theta+\mu\cos\theta)}{\cos\beta+\mu\sin\beta}$, mínimo con $\beta=\arctan0{,}2=11{,}31^\circ$:</p>
<p>$P=\frac{196{,}2(0{,}4226+0{,}1813)}{\sqrt{1{,}04}}=116{,}2$ N, a $25+11{,}31=36{,}31^\circ$ de la horizontal.</p>
<p>(b) A punto de bajar, el rozamiento va hacia arriba: $P=\frac{mg(\sin\theta-\mu\cos\theta)}{\sqrt{1+\mu^2}}=46{,}4$ N, a $25-11{,}31=13{,}69^\circ$ de la horizontal.</p></div></div>

<div class="prob"><div class="enun"><p>Dos paquetes en contacto sobre una cinta parada inclinada 15°: A (6 kg, $\mu_s=0{,}2$, $\mu_k=0{,}15$) abajo y B (4 kg, $\mu_s=0{,}3$, $\mu_k=0{,}25$). ¿Se mueven? ¿Rozamiento sobre cada uno?</p><p class="src">Estática y dinámica, problema 8</p></div>
<div class="hint"><p>Primero, ¿desliza cada uno por separado? Compara $\tan15^\circ=0{,}268$ con cada $\mu_s$. Luego mira si juntos pueden quedarse quietos.</p></div>
<div class="sol"><p>$\tan15^\circ=0{,}268$. A sola deslizaría ($\mu_s=0{,}2\lt0{,}268$); B sola no ($0{,}3\gt0{,}268$).</p>
<p>Como A está por debajo de B, al deslizar A se separa de B y no se empujan: cada uno va por su cuenta. A se mueve y B se queda quieto.</p>
<p>Rozamiento sobre A (dinámico): $\mu_kN_A=0{,}15\cdot6\cdot9{,}8\cos15^\circ=8{,}52$ N. Sobre B (estático, el justo para equilibrar): $4\cdot9{,}8\sin15^\circ=10{,}14$ N.</p>
<p>Si A estuviera encima de B, empujaría a B: el rozamiento máximo conjunto, 22,7 N, no aguantaría los 25,4 N de peso a lo largo del plano y bajarían los dos juntos.</p></div></div>
`},

/* ============================================================ */
{ id: "dinamica", title: "Dinámica: leyes de Newton",
  desc: "Segunda ley, ascensores, planos inclinados, movimiento circular, sistemas no inerciales.",
  html: String.raw`
<h2>Las tres leyes en una línea cada una</h2>
<ol><li><strong>Inercia</strong>: si $\sum\vec F=\vec0$, la velocidad es constante (reposo incluido).</li>
<li><strong>Fundamental</strong>: $\sum\vec F=m\vec a$ (en general $\sum\vec F=\frac{d\vec p}{dt}$).</li>
<li><strong>Acción y reacción</strong>: las fuerzas van por parejas iguales y opuestas, <strong>aplicadas a cuerpos distintos</strong>.</li></ol>
<div class="tf" data-a="f"><p>Cuando la fuerza neta sobre un cuerpo es nula, el cuerpo está necesariamente en reposo.</p><div class="why"><p>Puede moverse con velocidad constante (primera ley).</p></div></div>
<div class="tf" data-a="f"><p>Un niño sube por una cuerda colgada del techo. La reacción a la fuerza que el niño hace sobre la cuerda es la fuerza que el techo hace sobre la cuerda.</p><div class="why"><p>La reacción es la fuerza que la cuerda hace sobre el niño: la pareja acción-reacción siempre implica a los mismos dos cuerpos.</p></div></div>
<div class="tf" data-a="f"><p>Los cuerpos pesan menos en la Luna porque allí su masa es menor.</p><div class="why"><p>La masa es la misma; lo que cambia es $g$. El peso es $mg$.</p></div></div>

<h2>Ascensores y planos inclinados</h2>
<div class="formula">$$\text{Dinamómetro en ascensor con aceleración } a \text{ hacia arriba: } T=m(g+a)$$</div>
<div class="num" data-a="39.62" data-tol="0.05" data-unit="N"><p>Un cuerpo de 2 kg cuelga de un dinamómetro en un ascensor que sube con $a=10$ m/s². ¿Qué marca? ($g=9{,}81$)</p>
<div class="why"><p>$T-mg=ma \Rightarrow T=2(9{,}81+10)=39{,}62$ N. A velocidad constante marcaría 19,62 N y en caída libre, 0.</p></div></div>
<div class="num" data-a="5.2" data-tol="0.05" data-unit="m/s²"><p>Un hombre sostiene un cuerpo de 10 kg con una cuerda que resiste 150 N. Al arrancar el ascensor, la cuerda se rompe. ¿Aceleración mínima del ascensor? ($g=9{,}8$)</p>
<div class="why"><p>$150=10(9{,}8+a) \Rightarrow a=5{,}2$ m/s² hacia arriba.</p></div></div>
<div class="steps"><p>Problema 10: fuerza horizontal de 100 N empuja un bloque de 12 kg plano arriba (25°, sin rozamiento).</p>
<div class="step">Ejes: $x$ a lo largo del plano, $y$ perpendicular. Componentes de $F$: $F\cos25^\circ$ a lo largo y $F\sin25^\circ$ contra el plano.</div>
<div class="step">Eje $y$: $N=mg\cos25^\circ+F\sin25^\circ=106{,}6+42{,}3=148{,}8$ N.</div>
<div class="step">Eje $x$: $ma=F\cos25^\circ-mg\sin25^\circ=90{,}6-49{,}7 \Rightarrow a=3{,}41$ m/s².</div></div>

<h2>Movimiento circular</h2>
<div class="key"><span class="label">La "fuerza centrípeta" no es una fuerza nueva</span><p>Es el nombre de la suma de fuerzas reales en la dirección del centro: $\sum F_n=m\frac{v^2}{R}=m\omega^2R$. No la dibujes en el diagrama como una fuerza más.</p></div>
<div class="num" data-a="51.6" data-tol="0.3" data-unit="grados"><p>Problema 15: un abalorio en un alambre semicircular de $R=10$ cm que gira a 2 vueltas/s. ¿Ángulo $\theta$ (desde la vertical) en el que queda estacionario? ($g=9{,}8$)</p>
<div class="why"><p>Radio de giro $R\sin\theta$. Normal: $N\cos\theta=mg$ y $N\sin\theta=m\omega^2R\sin\theta$. Dividiendo: $\cos\theta=\frac{g}{\omega^2R}=\frac{9{,}8}{(4\pi)^2\cdot0{,}1}=0{,}621 \Rightarrow \theta=51{,}6^\circ$.</p></div></div>

<h2>Sistemas no inerciales</h2>
<p>Si analizas el problema desde un sistema acelerado (el camión, el ascensor, la plataforma que gira), añade <strong>fuerzas de inercia</strong>:</p>
<div class="formula">$$\vec F_{\text{inercia}}=-m\vec A_{O'}\quad(\text{traslación})\qquad \text{centrífuga}=-m\vec\omega\times(\vec\omega\times\vec r)\qquad \text{Coriolis}=-2m\vec\omega\times\vec v\,'$$</div>
<div class="prob"><div class="enun"><p>Un marco de 5 kg con una plomada de 1 kg desliza por un plano inclinado 30°. ¿Qué ángulo forma la plomada con la vertical si no hay rozamiento?</p><p class="src">Estática y dinámica, problema 14(a)</p></div>
<div class="hint"><p>Sin rozamiento todo baja con $a=g\sin30^\circ$ paralela al plano. En el sistema del marco, la plomada nota además $-m\vec a$.</p></div>
<div class="sol"><p>Gravedad efectiva: $\vec g-\vec a$. Su componente paralela al plano se anula ($g\sin30^\circ-a=0$), así que la plomada queda perpendicular al plano: forma <strong>30°</strong> con la vertical. (Con $\mu=0{,}2$ sale 19°.)</p></div></div>

<h2>Cantidad de movimiento y momento angular</h2>
<div class="formula">$$\vec p=m\vec v,\quad \sum\vec F=\frac{d\vec p}{dt}\qquad \vec L_O=\vec r\times m\vec v,\quad \vec M_O=\frac{d\vec L_O}{dt}$$</div>
<p>Fuerzas centrales (siempre hacia un punto fijo): $\vec M_O=0$, así que $\vec L_O$ se conserva y el movimiento es plano (planetas).</p>
`},

/* ============================================================ */
{ id: "energia", title: "Trabajo y energía",
  desc: "Trabajo, potencia, energía cinética y potencial, conservación y gravitación.",
  html: String.raw`
<h2>Trabajo y potencia</h2>
<div class="formula">$$W=\int_A^B\vec F\cdot d\vec r\qquad P=\frac{dW}{dt}=\vec F\cdot\vec v$$</div>
<div class="tf" data-a="v"><p>La fuerza normal no hace trabajo cuando un cuerpo desliza sobre una superficie fija.</p><div class="why"><p>Es perpendicular al desplazamiento: $\vec N\cdot d\vec r=0$.</p></div></div>

<h2>Teorema de la energía cinética</h2>
<div class="key"><span class="label">Siempre se cumple</span>$$W_{\text{total}}=\Delta E_c=\tfrac12mv_B^2-\tfrac12mv_A^2$$</div>

<h2>Fuerzas conservativas y energía potencial</h2>
<p>Una fuerza es conservativa si su trabajo no depende del camino. Entonces $W=-\Delta E_p$ y $\vec F=-\nabla E_p$.</p>
<table>
<tr><th>Fuerza</th><th>$E_p$</th></tr>
<tr><td>Peso (cerca de la Tierra)</td><td>$mgh$</td></tr>
<tr><td>Muelle</td><td>$\frac12kx^2$</td></tr>
<tr><td>Gravitación</td><td>$-\frac{GMm}{r}$</td></tr>
</table>
<div class="formula">$$E_c+E_p=\text{cte (solo fuerzas conservativas)}\qquad \Delta(E_c+E_p)=W_{\text{no conservativas}}\ (\text{p. ej. rozamiento})$$</div>
<div class="num" data-a="9.9" data-tol="0.05" data-unit="m/s"><p>Un cuerpo baja sin rozamiento desde 5 m de altura partiendo del reposo. ¿Velocidad abajo? ($g=9{,}8$)</p>
<div class="why"><p>$mgh=\frac12mv^2 \Rightarrow v=\sqrt{2\cdot9{,}8\cdot5}=9{,}9$ m/s. No depende de la masa ni de la forma de la rampa.</p></div></div>
<div class="num" data-a="1" data-unit="J"><p>Energía almacenada en un muelle de $k=200$ N/m comprimido 10 cm.</p>
<div class="why"><p>$\frac12\cdot200\cdot0{,}1^2=1$ J.</p></div></div>

<h2>Curvas de energía potencial</h2>
<p>Con $E=E_c+E_p$ constante, la partícula solo puede estar donde $E_p(x)\le E$ (porque $E_c\ge0$). Los puntos donde $E_p=E$ son de retorno. Mínimos de $E_p$: equilibrio estable; máximos: inestable.</p>
<div class="mc"><p>En un mínimo de la energía potencial, la fuerza es…</p>
<ul><li data-ok>nula, y el equilibrio es estable</li><li>máxima</li><li>nula, y el equilibrio es inestable</li><li>igual a la energía total</li></ul>
<div class="why"><p>$F=-\frac{dE_p}{dx}=0$. Si te apartas, la fuerza te devuelve al mínimo: estable.</p></div></div>

<h2>Gravitación</h2>
<div class="formula">$$F=\frac{GMm}{r^2}\qquad g(r)=\frac{GM}{r^2}\qquad v_{\text{órbita circular}}=\sqrt{\frac{GM}r}\qquad v_{\text{escape}}=\sqrt{\frac{2GM}{R}}$$</div>
<div class="tf" data-a="v"><p>La velocidad de escape es $\sqrt2$ veces la velocidad de una órbita circular rasante al mismo radio.</p><div class="why"><p>$\sqrt{2GM/R}=\sqrt2\cdot\sqrt{GM/R}$. En la Tierra: unos 7,9 km/s frente a 11,2 km/s.</p></div></div>

<div class="prob"><div class="enun"><p>Un bloque de 2 kg parte del reposo y baja 3 m por un plano inclinado 30° con $\mu_k=0{,}2$. ¿Con qué velocidad llega abajo? ($g=9{,}8$)</p></div>
<div class="hint"><p>$\Delta E_c=W_{\text{peso}}+W_{\text{rozamiento}}$. El rozamiento vale $\mu_kmg\cos30^\circ$ y trabaja en contra.</p></div>
<div class="sol"><p>$W_{\text{peso}}=mg\sin30^\circ\cdot3=29{,}4$ J. $W_{\text{roz}}=-0{,}2\cdot2\cdot9{,}8\cos30^\circ\cdot3=-10{,}18$ J.</p>
<p>$\frac12\cdot2\cdot v^2=19{,}22 \Rightarrow v\approx4{,}38$ m/s.</p></div></div>
`}
  ]
});
