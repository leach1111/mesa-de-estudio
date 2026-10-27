THEORY.fisica = {

/* ================================================================== */
vectores: String.raw`
<h2>1. Magnitudes, dimensiones y unidades</h2>
<p>Una <strong>magnitud física</strong> es una propiedad que se puede medir. Las del Sistema Internacional (SI) que usarás en mecánica:</p>
<table>
<tr><th>Magnitud fundamental</th><th>Dimensión</th><th>Unidad SI</th></tr>
<tr><td>Longitud</td><td>L</td><td>metro (m)</td></tr>
<tr><td>Masa</td><td>M</td><td>kilogramo (kg)</td></tr>
<tr><td>Tiempo</td><td>T</td><td>segundo (s)</td></tr>
</table>
<p>Las demás son <strong>derivadas</strong>: velocidad $[v]=LT^{-1}$ (m/s), aceleración $LT^{-2}$, fuerza $MLT^{-2}$ (newton, N), energía y trabajo $ML^2T^{-2}$ (julio, J), potencia $ML^2T^{-3}$ (vatio, W).</p>
<div class="key"><span class="label">Análisis dimensional</span><p>Todos los términos de una ecuación física deben tener las mismas dimensiones, y los argumentos de $\sin$, $\exp$, $\ln$ deben ser adimensionales. Sirve para detectar errores y para deducir las unidades de constantes: en $v=2+3t^2+4t^3$ (m/s), el 3 va en m/s³ y el 4 en m/s⁴ (problema 1 de cinemática).</p></div>
<h3>Conversión de unidades y cifras significativas</h3>
<p>Multiplica por factores iguales a 1: $72\ \frac{\text{km}}{\text{h}}\cdot\frac{1000\text{ m}}{1\text{ km}}\cdot\frac{1\text{ h}}{3600\text{ s}}=20$ m/s. Truco: km/h → m/s, divide entre 3,6.</p>
<p>Un resultado no puede ser más preciso que los datos: al multiplicar o dividir, deja tantas cifras significativas como el dato que menos tenga.</p>
<div class="num" data-a="20" data-unit="m/s"><p>Pasa 72 km/h a m/s.</p><div class="why"><p>$72/3{,}6=20$ m/s.</p></div></div>

<h2>2. Escalares y vectores</h2>
<p>Una magnitud <strong>escalar</strong> queda definida por un número (temperatura, masa, energía). Una <strong>vectorial</strong> necesita módulo, dirección y sentido (velocidad, fuerza, campo eléctrico).</p>
<div class="def"><span class="label">Elementos de un vector</span><p><strong>Módulo</strong> $|\vec A|$ (longitud), <strong>dirección</strong> (la recta soporte), <strong>sentido</strong> (orientación sobre la recta) y <strong>punto de aplicación</strong> (origen).</p></div>
<table>
<tr><th>Tipo</th><th>Punto de aplicación</th><th>Ejemplo</th></tr>
<tr><td>Fijo (ligado)</td><td>fijo</td><td>fuerza sobre un sólido deformable</td></tr>
<tr><td>Deslizante</td><td>puede moverse a lo largo de su recta soporte</td><td>fuerza sobre un sólido rígido</td></tr>
<tr><td>Libre</td><td>cualquiera</td><td>velocidad de traslación, momento de un par</td></tr>
</table>

<h2>3. Operaciones con vectores libres</h2>
<h3>Suma y resta</h3>
<p>Geométricamente: regla del paralelogramo (la suma es una diagonal y la resta, la otra) o poniendo un vector a continuación del otro. Por componentes: se suman componente a componente.</p>
<div class="formula">$$|\vec A+\vec B|^2=|\vec A|^2+|\vec B|^2+2|\vec A||\vec B|\cos\theta\qquad(\text{teorema del coseno})$$</div>
<p>Propiedades: conmutativa, asociativa, neutro $\vec0$, opuesto $-\vec A$.</p>
<h3>Producto por un escalar y vectores unitarios</h3>
<p>$p\vec A$ tiene módulo $|p||\vec A|$ y el mismo sentido si $p\gt0$. Todo vector se escribe como $\vec A=|\vec A|\,\hat u_A$, con $\hat u_A$ unitario (versor). Los versores cartesianos son $\hat\imath,\hat\jmath,\hat k$.</p>
<h3>Producto escalar</h3>
<div class="formula">$$\vec A\cdot\vec B=|\vec A||\vec B|\cos\theta=A_xB_x+A_yB_y+A_zB_z$$</div>
<ul><li>Conmutativo y distributivo. $\vec A\cdot\vec A=|\vec A|^2$.</li>
<li>$\hat\imath\cdot\hat\imath=\hat\jmath\cdot\hat\jmath=\hat k\cdot\hat k=1$; $\hat\imath\cdot\hat\jmath=\hat\imath\cdot\hat k=\hat\jmath\cdot\hat k=0$.</li>
<li>Si $\vec A,\vec B\ne\vec0$ y $\vec A\cdot\vec B=0$, son perpendiculares.</li>
<li><strong>Proyección</strong> de $\vec A$ sobre la dirección $\hat u$: $\vec A\cdot\hat u$. Componente vectorial: $(\vec A\cdot\hat u)\hat u$.</li>
<li>Cosenos directores: $\cos\alpha=\frac{A_x}{|\vec A|}$, etc.; cumplen $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.</li></ul>
<h3>Producto vectorial</h3>
<div class="formula">$$\vec A\times\vec B=|\vec A||\vec B|\sin\theta\,\hat u,\qquad \vec A\times\vec B=\begin{vmatrix}\hat\imath & \hat\jmath & \hat k\\ A_x & A_y & A_z\\ B_x & B_y & B_z\end{vmatrix}$$</div>
<ul><li>$\hat u$ perpendicular a los dos, sentido de la mano derecha (o del sacacorchos).</li>
<li>Anticonmutativo; distributivo; <strong>no asociativo</strong>.</li>
<li>$\hat\imath\times\hat\jmath=\hat k$, $\hat\jmath\times\hat k=\hat\imath$, $\hat k\times\hat\imath=\hat\jmath$ (orden cíclico), y $\hat\imath\times\hat k=-\hat\jmath$.</li>
<li>Su módulo es el área del paralelogramo. $\vec A\times\vec B=\vec0\iff$ paralelos.</li></ul>
<h3>Producto mixto y doble producto vectorial</h3>
<div class="formula">$$\vec A\cdot(\vec B\times\vec C)=\begin{vmatrix}A_x & A_y & A_z\\ B_x & B_y & B_z\\ C_x & C_y & C_z\end{vmatrix}=\vec B\cdot(\vec C\times\vec A)=\vec C\cdot(\vec A\times\vec B)$$
$$\vec A\times(\vec B\times\vec C)=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B)$$</div>
<p>El producto mixto en valor absoluto es el volumen del paralelepípedo; vale 0 si los vectores son coplanarios.</p>
<div class="tf" data-a="v"><p>$\vec A\times(\vec B\times\vec C)$ está en el plano de $\vec B$ y $\vec C$.</p>
<div class="why"><p>Es combinación lineal de $\vec B$ y $\vec C$, según la fórmula del doble producto.</p></div></div>

<h2>4. Derivada de un vector</h2>
<p>Si $\vec A(t)=A_x(t)\hat\imath+A_y(t)\hat\jmath+A_z(t)\hat k$ con versores fijos, se deriva componente a componente. Reglas: $(\vec A\cdot\vec B)'=\vec A'\cdot\vec B+\vec A\cdot\vec B'$ y $(\vec A\times\vec B)'=\vec A'\times\vec B+\vec A\times\vec B'$ (respetando el orden).</p>
<div class="thm"><span class="label">Vector de módulo constante</span><p>Si $|\vec A|$ es constante, $\vec A'\perp\vec A$. Si $\vec A$ es un versor que gira con velocidad angular $\vec\omega$: $\frac{d\hat u}{dt}=\vec\omega\times\hat u$ (fórmulas de Poisson, base del movimiento relativo).</p></div>

<h2>5. Momento de un vector</h2>
<div class="def"><span class="label">Momento respecto a un punto</span><p>$\vec M_O=\vec{OP}\times\vec F$, con $P$ cualquier punto de la recta soporte de $\vec F$ (no importa cuál: por eso tiene sentido para vectores deslizantes). Módulo: $|\vec F|\cdot d$, con $d$ la distancia de $O$ a la recta soporte (el "brazo").</p></div>
<div class="def"><span class="label">Momento respecto a un eje</span><p>Es la proyección sobre el eje del momento respecto a cualquier punto del eje: $M_e=\vec M_O\cdot\hat u_e$. Mide la tendencia a hacer girar alrededor de ese eje.</p></div>

<h2>6. Sistemas de vectores deslizantes</h2>
<ul><li><strong>Resultante</strong> $\vec R=\sum\vec F_i$ (no depende del punto).</li>
<li><strong>Momento resultante</strong> $\vec M_O=\sum\vec{OP_i}\times\vec F_i$.</li>
<li><strong>Cambio de punto</strong>: $\vec M_{O'}=\vec M_O+\vec{O'O}\times\vec R$.</li>
<li><strong>Invariante escalar</strong>: $\vec R\cdot\vec M_O$ es igual para todos los puntos.</li>
<li><strong>Eje central</strong>: lugar de puntos donde el momento es mínimo y paralelo a $\vec R$.</li>
<li><strong>Par de fuerzas</strong>: dos fuerzas iguales y opuestas no alineadas. $\vec R=\vec0$ y momento igual en todos los puntos.</li>
<li>Dos sistemas son <strong>equivalentes</strong> si tienen la misma resultante y el mismo momento en un punto.</li></ul>
<div class="mc"><p>Dos fuerzas de 10 N iguales y opuestas, separadas 0,5 m. ¿Momento respecto a cualquier punto?</p>
<ul><li data-ok>5 N·m</li><li>0</li><li>10 N·m</li><li>Depende del punto</li></ul>
<div class="why"><p>Es un par: $M=F\cdot d=10\cdot0{,}5=5$ N·m, igual en todos los puntos porque $\vec R=\vec0$.</p></div></div>
`,

/* ================================================================== */
"cinematica-recta": String.raw`
<h2>1. Conceptos básicos</h2>
<div class="def"><span class="label">Definiciones</span><ul>
<li><strong>Sistema de referencia</strong>: origen + ejes + reloj, respecto al que se describe el movimiento.</li>
<li><strong>Vector de posición</strong> $\vec r(t)$: del origen a la partícula. Sus componentes $x(t),y(t),z(t)$ son las <strong>ecuaciones horarias</strong>.</li>
<li><strong>Trayectoria</strong>: la curva que recorre. Se obtiene eliminando $t$ de las ecuaciones horarias.</li>
<li><strong>Desplazamiento</strong> $\Delta\vec r=\vec r(t_2)-\vec r(t_1)$. No es lo mismo que la distancia recorrida $\Delta s$ (medida sobre la trayectoria).</li>
<li><strong>Velocidad media</strong> $\vec v_m=\frac{\Delta\vec r}{\Delta t}$; <strong>instantánea</strong> $\vec v=\frac{d\vec r}{dt}$ (siempre tangente a la trayectoria). Rapidez: $|\vec v|=\frac{ds}{dt}$.</li>
<li><strong>Aceleración</strong> media $\frac{\Delta\vec v}{\Delta t}$ e instantánea $\vec a=\frac{d\vec v}{dt}=\frac{d^2\vec r}{dt^2}$.</li></ul></div>
<div class="tf" data-a="f"><p>El módulo de la velocidad media coincide siempre con la rapidez media.</p>
<div class="why"><p>$|\Delta\vec r|\le\Delta s$. En una vuelta completa, el desplazamiento es 0 y la distancia no.</p></div></div>

<h2>2. Movimiento rectilíneo</h2>
<p>Todo ocurre en una recta (eje $x$), así que los vectores se reducen a números con signo: $v=\dot x$, $a=\dot v=\ddot x$.</p>
<h3>Interpretación gráfica</h3>
<ul><li>Pendiente de $x(t)$ = velocidad. Pendiente de $v(t)$ = aceleración.</li>
<li>Área bajo $v(t)$ = desplazamiento. Área bajo $a(t)$ = cambio de velocidad.</li></ul>
<h3>MRU y MRUA</h3>
<table>
<tr><th>MRU ($a=0$)</th><th>MRUA ($a$ constante)</th></tr>
<tr><td>$v=v_0$<br>$x=x_0+v_0(t-t_0)$</td><td>$v=v_0+a(t-t_0)$<br>$x=x_0+v_0(t-t_0)+\frac12a(t-t_0)^2$<br>$v^2=v_0^2+2a(x-x_0)$<br>$\bar v=\frac{v_0+v}2$</td></tr>
</table>
<div class="tip"><span class="label">Acelera o frena</span><p>El movimiento es acelerado si $v$ y $a$ tienen el mismo signo, y decelerado (frena) si tienen signos opuestos. Un $a$ negativo no significa necesariamente que frene.</p></div>
<div class="num" data-a="75" data-unit="m"><p>Un móvil parte con $v_0=10$ m/s y $a=2$ m/s². ¿Cuánto recorre en 5 s?</p>
<div class="why"><p>$x=10\cdot5+\frac12\cdot2\cdot25=50+25=75$ m. (Su velocidad final es 20 m/s.)</p></div></div>

<h3>Caída libre y tiro vertical</h3>
<p>MRUA con $a=-g$ (eje hacia arriba), $g\approx9{,}8$ m/s². Altura máxima: $\frac{v_0^2}{2g}$; tiempo de subida $\frac{v_0}g$. Sin rozamiento, el tiempo de subida y bajada coinciden.</p>

<h2>3. Aceleración no constante</h2>
<p>Hay que integrar. Tres casos según de qué dependa $a$:</p>
<table>
<tr><th>Dato</th><th>Cómo integrar</th></tr>
<tr><td>$a=a(t)$</td><td>$v=v_0+\int_{t_0}^ta\,dt$ y $x=x_0+\int_{t_0}^tv\,dt$</td></tr>
<tr><td>$a=a(v)$</td><td>$\frac{dv}{a(v)}=dt$ (da $v(t)$); o $\frac{v\,dv}{a(v)}=dx$ (da $v(x)$)</td></tr>
<tr><td>$a=a(x)$</td><td>$v\,dv=a(x)\,dx$, porque $a=\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}$</td></tr>
</table>
<div class="key"><span class="label">Integral definida, no indefinida</span><p>Pon los límites desde el principio: $\int_{v_0}^v\frac{dv'}{v'^2}=-k\int_0^tdt'$. Así no tienes que calcular constantes (lo hace la solución del problema 9). Usa variables con prima dentro de la integral para no confundirlas con los límites.</p></div>
<h3>Casos clásicos</h3>
<ul><li><strong>Rozamiento lineal</strong> $a=-kv$: $v=v_0e^{-kt}$; se para "en el infinito" pero recorre una distancia finita $\frac{v_0}k$.</li>
<li><strong>Rozamiento cuadrático</strong> $a=-kv^2$: $v=\frac{v_0}{1+kv_0t}$ y $v=v_0e^{-kx}$; nunca se para y la distancia crece sin límite.</li>
<li><strong>Muelle</strong> $a=-\omega^2x$: $v^2=v_0^2+\omega^2(x_0^2-x^2)$; movimiento armónico simple $x=A\cos(\omega t+\varphi)$.</li>
<li><strong>Caída con rozamiento</strong> $a=g-kv$: tiende a la velocidad límite $v_L=\frac gk$ (cuando $a=0$).</li></ul>
<div class="num" data-a="5" data-unit="m/s"><p>Un cuerpo cae con $a=g-kv$, $k=2$ s⁻¹, $g=10$ m/s². ¿Velocidad límite?</p>
<div class="why"><p>En el límite $a=0$: $v_L=\frac gk=5$ m/s.</p></div></div>
`,

/* ================================================================== */
"cinematica-plano": String.raw`
<h2>1. Movimiento en el plano en cartesianas</h2>
<p>$\vec r=x(t)\hat\imath+y(t)\hat\jmath$, $\vec v=\dot x\hat\imath+\dot y\hat\jmath$, $\vec a=\ddot x\hat\imath+\ddot y\hat\jmath$. Cada eje se trata por separado.</p>

<h2>2. Tiro parabólico</h2>
<p>Con $\vec a=-g\hat\jmath$, lanzamiento desde $(0,h)$ con $v_0$ y ángulo $\theta$:</p>
<div class="formula">$$x=v_0\cos\theta\,t\qquad y=h+v_0\sin\theta\,t-\frac12gt^2\qquad v_x=v_0\cos\theta\qquad v_y=v_0\sin\theta-gt$$</div>
<p>Eliminando $t$, la trayectoria es una parábola: $y=h+x\tan\theta-\frac{g\,x^2}{2v_0^2\cos^2\theta}$.</p>
<table>
<tr><th>Magnitud ($h=0$)</th><th>Fórmula</th></tr>
<tr><td>Tiempo de vuelo</td><td>$\frac{2v_0\sin\theta}g$</td></tr>
<tr><td>Altura máxima</td><td>$\frac{v_0^2\sin^2\theta}{2g}$ (cuando $v_y=0$)</td></tr>
<tr><td>Alcance</td><td>$\frac{v_0^2\sin2\theta}g$, máximo con $\theta=45^\circ$</td></tr>
</table>
<div class="tip"><span class="label">Ángulos complementarios</span><p>$\theta$ y $90^\circ-\theta$ dan el mismo alcance (porque $\sin2\theta$ es igual), uno con trayectoria tensa y otro bombeada.</p></div>
<div class="warn"><span class="label">No uses las fórmulas de memoria si los niveles son distintos</span><p>Si sale de una altura $h$ o llega a una pared, plantea las ecuaciones horarias e impón la condición ("$y=0$", "$x=d$").</p></div>

<h2>3. Movimiento circular</h2>
<div class="formula">$$s=R\theta\qquad \omega=\dot\theta\qquad \alpha=\dot\omega\qquad v=\omega R\qquad a_t=\alpha R\qquad a_n=\frac{v^2}R=\omega^2R$$</div>
<ul><li><strong>MCU</strong>: $\omega$ constante, $\theta=\theta_0+\omega t$. Periodo $T=\frac{2\pi}\omega$, frecuencia $f=\frac1T$ (Hz), $\omega=2\pi f$.</li>
<li><strong>MCUA</strong>: $\alpha$ constante, $\omega=\omega_0+\alpha t$, $\theta=\theta_0+\omega_0t+\frac12\alpha t^2$, $\omega^2=\omega_0^2+2\alpha\Delta\theta$ (análogas al MRUA).</li>
<li><strong>Vectorialmente</strong>: $\vec\omega$ perpendicular al plano de giro (regla de la mano derecha) y $\vec v=\vec\omega\times\vec r$.</li></ul>
<div class="num" data-a="78.96" data-tol="0.1" data-unit="m/s²"><p>Un punto a $R=0{,}5$ m del eje gira a 2 vueltas por segundo. ¿Aceleración normal?</p>
<div class="why"><p>$\omega=2\cdot2\pi=4\pi$ rad/s. $a_n=\omega^2R=16\pi^2\cdot0{,}5\approx78{,}96$ m/s².</p></div></div>

<h2>4. Componentes intrínsecas</h2>
<p>Se usa una base que viaja con la partícula: $\hat u_t$ tangente a la trayectoria (en el sentido del movimiento) y $\hat u_n$ normal, hacia el centro de curvatura.</p>
<div class="formula">$$\vec v=v\,\hat u_t\qquad \vec a=\frac{dv}{dt}\hat u_t+\frac{v^2}\rho\hat u_n$$</div>
<div class="demo"><p>Derivando $\vec v=v\hat u_t$: $\vec a=\dot v\hat u_t+v\frac{d\hat u_t}{dt}$. Como $\hat u_t$ tiene módulo 1, su derivada es perpendicular a él; al recorrer un arco $ds$ gira un ángulo $d\varphi=\frac{ds}\rho$, de donde $\frac{d\hat u_t}{dt}=\frac v\rho\hat u_n$.</p></div>
<ul><li>$\rho$ es el <strong>radio de curvatura</strong> (el radio de la circunferencia que mejor se ajusta a la curva en ese punto). Recta: $\rho=\infty$.</li>
<li>Fórmulas de cálculo: $a_t=\frac{\vec v\cdot\vec a}{v}$, $a_n=\frac{|\vec v\times\vec a|}{v}$, $\rho=\frac{v^3}{|\vec v\times\vec a|}$.</li>
<li>Para una curva $y=f(x)$: $\rho=\frac{(1+y'^2)^{3/2}}{|y''|}$.</li></ul>
<table>
<tr><th>$a_t$</th><th>$a_n$</th><th>Movimiento</th></tr>
<tr><td>0</td><td>0</td><td>rectilíneo uniforme</td></tr>
<tr><td>$\ne0$</td><td>0</td><td>rectilíneo variado</td></tr>
<tr><td>0</td><td>$\ne0$</td><td>curvilíneo uniforme</td></tr>
<tr><td>$\ne0$</td><td>$\ne0$</td><td>curvilíneo variado</td></tr>
</table>
<div class="tf" data-a="v"><p>En el punto más alto de un tiro parabólico, el radio de curvatura vale $\frac{(v_0\cos\theta)^2}{g}$.</p>
<div class="why"><p>Allí $\vec v$ es horizontal y $\vec a=-g\hat\jmath$ es totalmente normal: $a_n=g=\frac{v^2}\rho$ con $v=v_0\cos\theta$.</p></div></div>

<h2>5. Componentes polares</h2>
<p>Base $\hat u_r$ (radial, alejándose del origen) y $\hat u_\theta$ (perpendicular, en el sentido de $\theta$ creciente). Como giran con $\dot\theta$: $\frac{d\hat u_r}{dt}=\dot\theta\hat u_\theta$ y $\frac{d\hat u_\theta}{dt}=-\dot\theta\hat u_r$.</p>
<div class="formula">$$\vec r=r\hat u_r\qquad \vec v=\dot r\hat u_r+r\dot\theta\hat u_\theta\qquad \vec a=(\ddot r-r\dot\theta^2)\hat u_r+(r\ddot\theta+2\dot r\dot\theta)\hat u_\theta$$</div>
<ul><li>$\dot r$: velocidad radial (alejarse o acercarse). $r\dot\theta$: velocidad transversal (girar).</li>
<li>$-r\dot\theta^2$: centrípeta. $2\dot r\dot\theta$: término de Coriolis.</li>
<li>Si $r$ es constante, se recupera el movimiento circular.</li></ul>

<h2>6. Movimiento en el espacio: triedro intrínseco</h2>
<p>En 3D se añade el versor <strong>binormal</strong> $\hat u_b=\hat u_t\times\hat u_n$. El plano que contiene $\hat u_t$ y $\hat u_n$ es el <strong>plano osculador</strong>: el plano en el que "localmente" se mueve la partícula, y donde está la aceleración ($\vec a$ no tiene componente binormal).</p>
<ul><li>$\hat u_t=\frac{\vec v}{v}$, $\hat u_b=\frac{\vec v\times\vec a}{|\vec v\times\vec a|}$, $\hat u_n=\hat u_b\times\hat u_t$.</li>
<li>Plano osculador en el punto $P$: pasa por $P$ y su normal es $\vec v\times\vec a$.</li></ul>
<div class="mc"><p>¿Qué vector es perpendicular al plano osculador?</p><ul><li data-ok>$\vec v\times\vec a$</li><li>$\vec v$</li><li>$\vec a$</li><li>$\vec v+\vec a$</li></ul>
<div class="why"><p>$\vec v$ y $\vec a$ están en el plano osculador; su producto vectorial es perpendicular a él (dirección binormal).</p></div></div>
`,

/* ================================================================== */
relativo: String.raw`
<h2>1. Posición, velocidad y aceleración relativas</h2>
<p>Las observaciones dependen del sistema de referencia. Para dos partículas $A$ y $B$ vistas desde un sistema fijo:</p>
<div class="formula">$$\vec r_{BA}=\vec r_B-\vec r_A\qquad \vec v_{BA}=\vec v_B-\vec v_A\qquad \vec a_{BA}=\vec a_B-\vec a_A$$</div>
<p>$\vec v_{BA}$ es la velocidad de $B$ vista desde $A$, y $\vec v_{AB}=-\vec v_{BA}$.</p>

<h2>2. Sistema móvil en traslación</h2>
<p>Sistema fijo $O$ y sistema móvil $O'$ cuyos ejes se mantienen paralelos a los de $O$.</p>
<div class="formula">$$\vec r_F=\vec r_M+\vec{OO'}\qquad \vec v_F=\vec v_M+\vec v_{O'}\qquad \vec a_F=\vec a_M+\vec a_{O'}$$</div>
<p>Si $\vec v_{O'}$ es constante (traslación uniforme), $\vec a_F=\vec a_M$: son las <strong>transformaciones de Galileo</strong>. Los dos observadores miden la misma aceleración y, por tanto, las mismas fuerzas.</p>
<div class="steps"><p>Ejemplo de la teoría: un hombre lanza una pelota verticalmente dentro de un tren a velocidad constante.</p>
<div class="step">Desde el tren (móvil): $x'=$ cte, $y'=v_{0y}t-\frac12gt^2$. Sube y baja en vertical.</div>
<div class="step">Desde el andén (fijo): $x=x_0+v_{O'}t$, $y$ igual. Ve una parábola.</div>
<div class="step">Ambos miden la misma aceleración, $-g\hat\jmath$.</div></div>
<div class="num" data-a="5" data-unit="m/s"><p>Un río va hacia el este a 3 m/s y un barco se dirige al norte a 4 m/s respecto al agua. ¿Velocidad del barco respecto a tierra?</p>
<div class="why"><p>$\vec v=4\hat\jmath+3\hat\imath$, $|\vec v|=5$ m/s. Si el río tiene 100 m de ancho, cruza en $\frac{100}4=25$ s y es arrastrado $3\cdot25=75$ m hacia el este.</p></div></div>

<h2>3. Sistema móvil en rotación</h2>
<p>Ahora los versores del sistema móvil $\hat\imath',\hat\jmath',\hat k'$ giran con velocidad angular $\vec\omega$, así que no son constantes vistos desde el fijo.</p>
<div class="thm"><span class="label">Fórmulas de Poisson y operador derivada</span>
$$\frac{d\hat\imath'}{dt}=\vec\omega\times\hat\imath'\ (\text{igual con }\hat\jmath',\hat k')\qquad \left.\frac{d\vec A}{dt}\right|_F=\left.\frac{d\vec A}{dt}\right|_M+\vec\omega\times\vec A$$
<p>La derivada vista desde el fijo es la vista desde el móvil más el efecto del giro.</p></div>
<h3>Velocidad</h3>
<div class="formula">$$\vec v_F=\vec v_M+\vec v_{O'}+\vec\omega\times\vec r\,'$$</div>
<p>$\vec v_{O'}+\vec\omega\times\vec r\,'$ es la <strong>velocidad de arrastre</strong>: la que tendría el punto si estuviera pegado al sistema móvil.</p>
<h3>Aceleración</h3>
<div class="formula">$$\vec a_F=\vec a_M+\underbrace{\vec a_{O'}+\dot{\vec\omega}\times\vec r\,'+\vec\omega\times(\vec\omega\times\vec r\,')}_{\vec a_{\text{arrastre}}}+\underbrace{2\vec\omega\times\vec v_M}_{\vec a_{\text{Coriolis}}}$$</div>
<table>
<tr><th>Término</th><th>Significado</th></tr>
<tr><td>$\vec a_M$</td><td>aceleración relativa (la que mide el observador móvil)</td></tr>
<tr><td>$\vec a_{O'}$</td><td>aceleración del origen móvil</td></tr>
<tr><td>$\dot{\vec\omega}\times\vec r\,'$</td><td>aceleración tangencial de arrastre (si el giro se acelera)</td></tr>
<tr><td>$\vec\omega\times(\vec\omega\times\vec r\,')$</td><td>centrípeta de arrastre: $\omega^2d$ hacia el eje</td></tr>
<tr><td>$2\vec\omega\times\vec v_M$</td><td>Coriolis: solo si la partícula se mueve respecto al móvil, y perpendicular a $\vec v_M$ y a $\vec\omega$</td></tr>
</table>
<div class="key"><span class="label">Método para los problemas</span><ol>
<li>Elige qué sistema es el fijo y cuál el móvil (el móvil suele ser el que gira: la plataforma, la puerta, la Tierra).</li>
<li>Escribe $\vec\omega$, $\dot{\vec\omega}$, $\vec r\,'$, $\vec v_M$, $\vec a_M$ en una misma base.</li>
<li>Calcula cada término con productos vectoriales y suma.</li></ol></div>
<div class="tf" data-a="f"><p>La aceleración de Coriolis es paralela a la velocidad relativa.</p>
<div class="why"><p>Es $2\vec\omega\times\vec v_M$: perpendicular a $\vec v_M$. Por eso solo cambia la dirección del movimiento relativo, no su rapidez.</p></div></div>

<h2>4. Movimiento relativo a la superficie terrestre</h2>
<p>La Tierra gira con $\omega=\frac{2\pi}{86164\text{ s}}\approx7{,}29\cdot10^{-5}$ rad/s (día sidéreo). Para un observador en la superficie:</p>
<ul><li><strong>Gravedad efectiva</strong>: $\vec g_{ef}=\vec g-\vec\omega\times(\vec\omega\times\vec r)$. En el ecuador la corrección centrífuga es $\omega^2R\approx0{,}034$ m/s² (un 0,35%); en los polos, cero. La plomada no apunta exactamente al centro de la Tierra.</li>
<li><strong>Coriolis</strong> $-2m\vec\omega\times\vec v$: en el hemisferio norte desvía a la derecha los movimientos horizontales; un cuerpo en caída libre se desvía ligeramente hacia el este.</li>
<li>Consecuencias visibles: giro de los anticiclones y borrascas, péndulo de Foucault (su plano de oscilación gira).</li></ul>
<div class="num" data-a="0.0339" data-tol="0.001" data-unit="m/s²"><p>Aceleración centrípeta de un punto del ecuador ($R=6{,}37\cdot10^6$ m).</p>
<div class="why"><p>$\omega^2R=(7{,}29\cdot10^{-5})^2\cdot6{,}37\cdot10^6\approx0{,}0339$ m/s².</p></div></div>
`,

/* ================================================================== */
estatica: String.raw`
<h2>1. Concepto de fuerza</h2>
<p>Una <strong>fuerza</strong> es la medida de la interacción entre cuerpos: lo que cambia su estado de movimiento (o los deforma). Es un vector.</p>
<ul><li><strong>A distancia</strong>: las cuatro interacciones fundamentales (gravitatoria, electromagnética, nuclear fuerte y débil). En mecánica, sobre todo el <strong>peso</strong> $\vec P=m\vec g$.</li>
<li><strong>De contacto</strong>: normales, rozamiento, tensiones de cuerdas, fuerzas de muelles. En el fondo son electromagnéticas.</li></ul>
<h3>Fuerzas que aparecen en los problemas</h3>
<table>
<tr><th>Fuerza</th><th>Dirección</th><th>Módulo</th></tr>
<tr><td>Peso</td><td>vertical, hacia abajo</td><td>$mg$</td></tr>
<tr><td>Normal $\vec N$</td><td>perpendicular a la superficie de contacto, empujando</td><td>la que haga falta (incógnita)</td></tr>
<tr><td>Tensión $\vec T$</td><td>a lo largo de la cuerda, tirando</td><td>incógnita; igual en toda una cuerda ideal (sin masa, polea ideal)</td></tr>
<tr><td>Muelle</td><td>a lo largo del muelle</td><td>$k|\Delta l|$ (ley de Hooke), opuesta a la deformación</td></tr>
<tr><td>Rozamiento</td><td>tangente a la superficie</td><td>ver apartado 3</td></tr>
</table>

<h2>2. Ligaduras</h2>
<p>Una ligadura restringe el movimiento (una superficie, un alambre, una cuerda). Aparece como una <strong>fuerza de reacción</strong> desconocida.</p>
<ul><li><strong>Lisa</strong> (sin rozamiento): la reacción es perpendicular a la ligadura.</li>
<li><strong>Rugosa</strong>: la reacción tiene además una componente tangencial, el rozamiento.</li>
<li>Una cuerda solo puede tirar ($T\ge0$); una superficie apoyada solo puede empujar ($N\ge0$). Si sale negativa, el contacto se pierde.</li></ul>

<h2>3. Rozamiento seco (leyes de Coulomb)</h2>
<div class="thm"><span class="label">Rozamiento estático</span><p>Mientras no hay deslizamiento, $F_r$ vale lo justo para el equilibrio, hasta un máximo: $F_r\le\mu_sN$. El sentido se opone a la tendencia al movimiento.</p></div>
<div class="thm"><span class="label">Rozamiento dinámico</span><p>Con deslizamiento, $F_r=\mu_kN$ y se opone a la velocidad relativa. Normalmente $\mu_k\lt\mu_s$.</p></div>
<p>Los coeficientes dependen de los materiales y del estado de las superficies, no del área de contacto ni de la velocidad (en este modelo).</p>
<h3>Ángulo y cono de rozamiento</h3>
<p>La reacción total $\vec R=\vec N+\vec F_r$ forma con la normal un ángulo $\varphi$ con $\tan\varphi=\frac{F_r}N\le\mu_s$. El <strong>ángulo de rozamiento</strong> es $\varphi_s=\arctan\mu_s$.</p>
<div class="key"><span class="label">Cono de rozamiento</span><p>El cono de semiángulo $\varphi_s$ alrededor de la normal. Hay equilibrio si y solo si la reacción total que haría falta cae <strong>dentro</strong> del cono. Si cae justo en el borde, el movimiento es inminente.</p></div>
<div class="num" data-a="16.7" data-tol="0.1" data-unit="grados"><p>Ángulo máximo de un plano inclinado para que un bloque con $\mu_s=0{,}3$ no deslice.</p>
<div class="why"><p>$\tan\theta=\mu_s \Rightarrow \theta=\arctan0{,}3\approx16{,}7^\circ$. No depende de la masa.</p></div></div>

<h2>4. Partícula en equilibrio estático</h2>
<div class="formula">$$\sum\vec F=\vec0\iff\sum F_x=0,\ \sum F_y=0,\ \sum F_z=0$$</div>
<ul><li>Fuerzas coplanarias: 2 ecuaciones; en el espacio: 3. (Para una partícula no hay ecuación de momentos.)</li>
<li>Gráficamente, las fuerzas forman un polígono cerrado.</li>
<li>Con tres fuerzas, se puede usar el <strong>teorema del seno</strong> (Lamy): $\frac{F_1}{\sin\alpha_1}=\frac{F_2}{\sin\alpha_2}=\frac{F_3}{\sin\alpha_3}$, con $\alpha_i$ el ángulo opuesto a $F_i$.</li></ul>
<div class="key"><span class="label">Plantear bien un problema de equilibrio</span><ol>
<li>Aísla la partícula (diagrama de cuerpo libre).</li>
<li>Dibuja todas las fuerzas con su dirección conocida; las incógnitas con un sentido supuesto.</li>
<li>Ejes adaptados: en planos inclinados, a lo largo y perpendicular al plano.</li>
<li>Con rozamiento estático, decide si te preguntan por una situación general (incógnita $F_r$ y luego compruebas $F_r\le\mu_sN$) o por movimiento <strong>inminente</strong> (impones $F_r=\mu_sN$ con el sentido adecuado).</li></ol></div>
<h3>Fuerza mínima para mover un bloque</h3>
<p>Si tiras de un bloque con una fuerza que forma un ángulo $\beta$ con el plano, la fuerza necesaria es mínima cuando $\tan\beta=\mu_s$: tirar "un poco hacia arriba" reduce la normal y, con ella, el rozamiento.</p>
`,

/* ================================================================== */
dinamica: String.raw`
<h2>1. Leyes de Newton</h2>
<div class="thm"><span class="label">Primera ley (inercia)</span><p>Todo cuerpo permanece en reposo o en movimiento rectilíneo uniforme si no actúa ninguna fuerza (o si la resultante es nula). Define los <strong>sistemas inerciales</strong>: aquellos en los que se cumple.</p></div>
<div class="thm"><span class="label">Segunda ley (fundamental)</span><p>$\sum\vec F=\frac{d\vec p}{dt}$, con $\vec p=m\vec v$. Con masa constante: $\sum\vec F=m\vec a$. La masa inercial mide la resistencia a cambiar de velocidad.</p></div>
<div class="thm"><span class="label">Tercera ley (acción y reacción)</span><p>Si $A$ ejerce $\vec F$ sobre $B$, $B$ ejerce $-\vec F$ sobre $A$. Actúan sobre cuerpos distintos, por eso nunca se anulan entre sí en un mismo diagrama.</p></div>
<div class="warn"><span class="label">El peso y la normal no son pareja de acción y reacción</span><p>Actúan sobre el mismo cuerpo. La reacción al peso es la fuerza con la que el cuerpo atrae a la Tierra; la reacción a la normal es la fuerza con la que el cuerpo aprieta la mesa.</p></div>
<h3>En componentes intrínsecas</h3>
<div class="formula">$$\sum F_t=m\frac{dv}{dt}\qquad \sum F_n=m\frac{v^2}\rho\qquad \sum F_b=0$$</div>
<p>Es la forma natural cuando la trayectoria es conocida (curvas, péndulos, alambres).</p>

<h2>2. Movimiento interdependiente (cuerdas y poleas)</h2>
<ol><li>Un diagrama de fuerzas y una ecuación de Newton por cada cuerpo.</li>
<li>La <strong>ligadura</strong> de la cuerda relaciona las aceleraciones: si la longitud es constante, la suma de los tramos no cambia, y derivando dos veces se obtiene la relación entre aceleraciones (por ejemplo, con una polea móvil, $a_1=2a_2$).</li>
<li>Cuerda ideal: la tensión es la misma a ambos lados de una polea ideal.</li></ol>
<div class="steps"><p>Máquina de Atwood: masas de 3 kg y 2 kg colgando de una polea ideal ($g=9{,}8$).</p>
<div class="step">Masa de 3 kg (baja): $29{,}4-T=3a$. Masa de 2 kg (sube): $T-19{,}6=2a$.</div>
<div class="step">Sumando: $9{,}8=5a \Rightarrow a=1{,}96$ m/s².</div>
<div class="step">$T=2(9{,}8+1{,}96)=23{,}52$ N.</div></div>

<h2>3. Dinámica del movimiento circular</h2>
<p>La suma de fuerzas en la dirección normal hace de fuerza centrípeta: $\sum F_n=m\frac{v^2}R$.</p>
<ul><li><strong>Curva sin peralte</strong>: el rozamiento proporciona la centrípeta: $v_{\max}=\sqrt{\mu_sgR}$.</li>
<li><strong>Curva peraltada sin rozamiento</strong>: $\tan\theta=\frac{v^2}{Rg}$.</li>
<li><strong>Péndulo cónico</strong>: $\tan\theta=\frac{\omega^2r}{g}$.</li>
<li><strong>Bucle vertical</strong>: para no caer arriba, $v_{\text{arriba}}\ge\sqrt{gR}$ (la normal no puede ser negativa).</li></ul>
<div class="num" data-a="22.2" data-tol="0.2" data-unit="grados"><p>Peralte necesario para tomar a 20 m/s una curva de 100 m de radio sin depender del rozamiento ($g=9{,}8$).</p>
<div class="why"><p>$\tan\theta=\frac{400}{980}=0{,}408 \Rightarrow \theta\approx22{,}2^\circ$.</p></div></div>

<h2>4. Sistemas inerciales y no inerciales</h2>
<p>Las leyes de Newton solo valen en sistemas inerciales. En un sistema acelerado, para poder seguir escribiendo $\sum\vec F=m\vec a_M$, hay que añadir <strong>fuerzas de inercia</strong> (ficticias: no las ejerce ningún cuerpo):</p>
<div class="formula">$$m\vec a_M=\sum\vec F_{\text{reales}}\ \underbrace{-\ m\vec a_{O'}-m\dot{\vec\omega}\times\vec r\,'-m\vec\omega\times(\vec\omega\times\vec r\,')}_{\text{arrastre}}\ \underbrace{-\ 2m\vec\omega\times\vec v_M}_{\text{Coriolis}}$$</div>
<ul><li>Ascensor o vehículo con aceleración $\vec a$: fuerza de inercia $-m\vec a$ (te sientes empujado hacia atrás al acelerar).</li>
<li>Plataforma que gira: <strong>fuerza centrífuga</strong> $m\omega^2d$ hacia fuera, más Coriolis si te mueves sobre ella.</li>
<li>Gravedad aparente: $\vec g_{ap}=\vec g-\vec a_{O'}$. Una plomada se alinea con ella.</li></ul>
<div class="tf" data-a="v"><p>Un pasajero dentro de un ascensor en caída libre no siente su peso.</p>
<div class="why"><p>$\vec a_{O'}=\vec g$: la gravedad aparente $\vec g-\vec g=\vec0$. La normal del suelo se anula.</p></div></div>

<h2>5. Cantidad de movimiento e impulso</h2>
<div class="formula">$$\vec p=m\vec v\qquad \vec I=\int_{t_1}^{t_2}\vec F\,dt=\Delta\vec p$$</div>
<ul><li>El <strong>impulso</strong> de la fuerza total es el cambio de la cantidad de movimiento. Útil en choques y golpes cortos (fuerzas grandes en tiempos pequeños).</li>
<li><strong>Conservación</strong>: si la resultante de las fuerzas exteriores es nula, $\vec p$ total se conserva (aunque haya fuerzas internas).</li></ul>
<div class="num" data-a="2" data-unit="N·s"><p>Una fuerza media de 100 N actúa durante 0,02 s. ¿Impulso?</p><div class="why"><p>$I=F\Delta t=2$ N·s, que es el cambio de $p$.</p></div></div>

<h2>6. Momento angular y fuerzas centrales</h2>
<div class="formula">$$\vec L_O=\vec r\times m\vec v\qquad \frac{d\vec L_O}{dt}=\vec M_O=\vec r\times\vec F\qquad(O\text{ fijo})$$</div>
<p>Si el momento de las fuerzas respecto a $O$ es nulo, $\vec L_O$ se conserva.</p>
<div class="def"><span class="label">Fuerza central</span><p>Siempre dirigida hacia (o desde) un punto fijo $O$: $\vec F=F(r)\hat u_r$. Ejemplos: gravitación, fuerza eléctrica, muelle anclado en un punto.</p></div>
<div class="thm"><span class="label">Consecuencias de $\vec L$ constante</span><ul>
<li>El movimiento es <strong>plano</strong> (en el plano perpendicular a $\vec L$).</li>
<li>Se cumple la ley de las áreas (2.ª ley de Kepler): $\frac{dA}{dt}=\frac{L}{2m}$ es constante, y $r^2\dot\theta=$ cte.</li>
<li>En los puntos de máxima y mínima distancia, $\vec v\perp\vec r$, así que $r_1v_1=r_2v_2$.</li></ul></div>
`,

/* ================================================================== */
energia: String.raw`
<h2>1. Trabajo</h2>
<div class="def"><span class="label">Trabajo de una fuerza</span>
$$W_{A\to B}=\int_A^B\vec F\cdot d\vec r=\int_A^B F_t\,ds$$
<p>Solo trabaja la componente de la fuerza a lo largo del desplazamiento. Unidad: julio (J = N·m).</p></div>
<ul><li>Fuerza constante y movimiento rectilíneo: $W=\vec F\cdot\Delta\vec r=F\,d\cos\theta$.</li>
<li>Puede ser positivo (motor), negativo (resistente) o nulo (fuerza perpendicular al desplazamiento: normal sin rozamiento, centrípeta en un MCU, tensión de un péndulo).</li>
<li>En general depende del camino seguido.</li></ul>
<h3>Potencia</h3>
<div class="formula">$$P=\frac{dW}{dt}=\vec F\cdot\vec v\qquad\text{unidad: vatio (W = J/s)}$$</div>
<p>Rendimiento de una máquina: $\eta=\frac{P_{\text{útil}}}{P_{\text{consumida}}}$.</p>

<h2>2. Energía cinética</h2>
<div class="thm"><span class="label">Teorema de las fuerzas vivas</span>
$$W_{\text{total}}=\Delta E_c,\qquad E_c=\frac12mv^2$$</div>
<div class="demo"><p>$\vec F\cdot d\vec r=m\frac{d\vec v}{dt}\cdot\vec v\,dt=m\vec v\cdot d\vec v=d\left(\frac12mv^2\right)$.</p></div>
<p>Vale siempre (en un sistema inercial) e incluye <strong>todas</strong> las fuerzas: conservativas o no.</p>

<h2>3. Fuerzas conservativas y energía potencial</h2>
<div class="def"><span class="label">Fuerza conservativa</span><p>Su trabajo entre dos puntos no depende del camino (equivalentemente, en un camino cerrado es 0). Se le asocia una energía potencial $E_p$ con $W_{A\to B}=E_p(A)-E_p(B)=-\Delta E_p$, y $\vec F=-\nabla E_p$ (en 1D, $F=-\frac{dE_p}{dx}$).</p></div>
<table>
<tr><th>Fuerza</th><th>$E_p$</th><th>Referencia ($E_p=0$)</th></tr>
<tr><td>Peso $-mg\hat\jmath$</td><td>$mgh$</td><td>donde quieras</td></tr>
<tr><td>Muelle $-kx\hat\imath$</td><td>$\frac12kx^2$</td><td>longitud natural</td></tr>
<tr><td>Gravitación $-\frac{GMm}{r^2}\hat u_r$</td><td>$-\frac{GMm}r$</td><td>infinito</td></tr>
</table>
<p>No conservativas: rozamiento, fuerzas aplicadas por motores o personas, resistencia del aire.</p>
<div class="key"><span class="label">Teorema de la energía mecánica</span>
$$\Delta(E_c+E_p)=W_{\text{no conservativas}}$$
<p>Si solo trabajan fuerzas conservativas, la energía mecánica se conserva. El rozamiento siempre hace $W\lt0$: disipa energía.</p></div>
<div class="tip"><span class="label">Energía o Newton</span><p>Para relacionar velocidades con posiciones (sin necesidad de tiempos) la energía es mucho más rápida. Para fuerzas de ligadura (la normal en un punto, la tensión) hace falta Newton en dirección normal, usando $v$ calculada por energía.</p></div>
<div class="steps"><p>Velocidad mínima en el punto más bajo para dar una vuelta completa en un bucle de radio $R$ (sin rozamiento).</p>
<div class="step">Arriba, Newton normal: $N+mg=m\frac{v_A^2}R$. Con $N\ge0$, $v_A^2\ge gR$.</div>
<div class="step">Energía entre abajo y arriba (altura $2R$): $\frac12v_B^2=\frac12v_A^2+2gR$.</div>
<div class="step">$v_B^2\ge gR+4gR=5gR$: $v_B\ge\sqrt{5gR}$.</div></div>

<h2>4. Discusión de curvas de energía potencial</h2>
<p>En un movimiento unidimensional con $E$ constante: $E_c=E-E_p(x)\ge0$.</p>
<ul><li>El movimiento solo es posible donde $E_p(x)\le E$.</li>
<li><strong>Puntos de retorno</strong>: $E_p(x)=E$ (allí $v=0$ y se da la vuelta).</li>
<li>Si la región permitida está acotada, el movimiento es <strong>ligado</strong> (oscila); si no, es libre.</li>
<li><strong>Equilibrio</strong>: $F=-E_p'=0$. Mínimo de $E_p$: estable (pequeñas oscilaciones alrededor). Máximo: inestable. Zona plana: indiferente.</li></ul>
<div class="mc"><p>Una partícula tiene $E_p(x)=x^2-x^4$ y energía total $E=0{,}1$ J, partiendo de $x=0$. Su movimiento es…</p>
<ul><li data-ok>oscilatorio alrededor de $x=0$</li><li>libre hacia el infinito</li><li>en reposo</li><li>uniforme</li></ul>
<div class="why"><p>$E_p$ tiene un mínimo en 0 y máximos de valor $0{,}25$ en $x=\pm\frac1{\sqrt2}$. Con $E=0{,}1\lt0{,}25$, queda atrapada en el pozo central.</p></div></div>

<h2>5. Gravitación</h2>
<div class="thm"><span class="label">Ley de la gravitación universal</span>
$$\vec F=-\frac{GMm}{r^2}\hat u_r,\qquad G=6{,}67\cdot10^{-11}\ \text{N·m}^2/\text{kg}^2$$</div>
<ul><li>Campo en la superficie: $g_0=\frac{GM}{R^2}$; a altura $h$: $g=g_0\frac{R^2}{(R+h)^2}$.</li>
<li>Energía potencial: $E_p=-\frac{GMm}r$ (negativa: el sistema está ligado). Cerca de la superficie se reduce a $mgh$.</li>
<li><strong>Órbita circular</strong>: $\frac{GMm}{r^2}=m\frac{v^2}r \Rightarrow v=\sqrt{\frac{GM}r}$; $E_c=\frac{GMm}{2r}$, $E=-\frac{GMm}{2r}$.</li>
<li><strong>Velocidad de escape</strong> ($E=0$): $v_e=\sqrt{\frac{2GM}{R}}=\sqrt{2g_0R}\approx11{,}2$ km/s en la Tierra.</li>
<li>Tipo de órbita según la energía total: $E\lt0$ elipse (o circunferencia), $E=0$ parábola, $E\gt0$ hipérbola.</li>
<li>Leyes de Kepler: órbitas elípticas con el Sol en un foco; ley de las áreas (conservación de $\vec L$); $T^2\propto a^3$.</li></ul>
<div class="num" data-a="7.9" data-tol="0.05" data-unit="km/s"><p>Velocidad de una órbita circular rasante a la Tierra ($g_0=9{,}8$ m/s², $R=6370$ km).</p>
<div class="why"><p>$v=\sqrt{g_0R}=\sqrt{9{,}8\cdot6{,}37\cdot10^6}\approx7900$ m/s $=7{,}9$ km/s.</p></div></div>
`

};
