EXTRA.fisica = [

{ t: "vectores", after: "3. Operaciones", html: String.raw`
<h3 class="visual-h">Visualízalo: producto escalar y vectorial</h3>
<p>El producto escalar mide "cuánto apuntan en la misma dirección": es máximo con vectores paralelos, cero si son perpendiculares y negativo si forman más de 90°. El módulo del producto vectorial es el <strong>área</strong> del paralelogramo, máxima con vectores perpendiculares y nula si son paralelos. Mueve los ángulos.</p>
<div class="plot" data-x="-4,4" data-y="-3,3.5" data-equal data-p="α=20,0,360,1; β=80,0,360,1; A=2.5,0.5,3,0.1; B=2,0.5,3,0.1" data-vec="0|0|A*cos(α*pi/180)|A*sin(α*pi/180);0|0|B*cos(β*pi/180)|B*sin(β*pi/180)" data-vecl="A;B" data-par="0,1|A*cos(α*pi/180)+t*B*cos(β*pi/180)|A*sin(α*pi/180)+t*B*sin(β*pi/180);0,1|B*cos(β*pi/180)+t*A*cos(α*pi/180)|B*sin(β*pi/180)+t*A*sin(α*pi/180)" data-info="ángulo θ (grados)=((β-α)%360+360)%360; A·B = AB cos θ=A*B*cos((β-α)*pi/180); |A×B| = AB |sin θ|=abs(A*B*sin((β-α)*pi/180))"></div>
<div class="key"><span class="label">Dónde aparece cada uno en física</span><p><strong>Escalar</strong>: trabajo $W=\vec F\cdot\Delta\vec r$, potencia $P=\vec F\cdot\vec v$, proyecciones (componente tangencial $a_t=\vec a\cdot\hat u_t$). <strong>Vectorial</strong>: momento $\vec M=\vec r\times\vec F$, momento angular $\vec L=\vec r\times m\vec v$, velocidad en rotación $\vec v=\vec\omega\times\vec r$, fuerza de Coriolis.</p></div>
`},
{ t: "vectores", after: "5. Momento", html: String.raw`
<h3 class="visual-h">Visualízalo: el brazo de una fuerza</h3>
<p>El momento de $\vec F$ respecto a $O$ vale $M=F\cdot d$, donde $d$ es la distancia de $O$ a la <strong>recta de acción</strong> de la fuerza (línea discontinua), no la distancia al punto de aplicación. Desplaza el punto de aplicación $P$ a lo largo de la recta de acción: el momento no cambia (por eso las fuerzas sobre sólidos rígidos son vectores deslizantes).</p>
<div class="plot" data-x="-1,5" data-y="-1,4" data-equal data-p="s=0,-1.5,1.5,0.05; Fx=1,-2,2,0.1; Fy=1.5,-2,2,0.1" data-f="Fx==0?NaN:2+Fy/Fx*(x-3)" data-l="recta de acción" data-vec="0|0|3+s*Fx|2+s*Fy;3+s*Fx|2+s*Fy|3+s*Fx+Fx|2+s*Fy+Fy" data-vecl="r = OP;F" data-pts="0|0" data-ptl="O" data-info="M_z = x F_y − y F_x=3*Fy-2*Fx; brazo d=abs(3*Fy-2*Fx)/hypot(Fx,Fy)"></div>
`},

{ t: "cinematica-recta", after: "2. Movimiento rectilíneo", html: String.raw`
<h3 class="visual-h">Visualízalo: las tres gráficas del MRUA</h3>
<p>Con aceleración constante, $x(t)$ es una parábola, $v(t)$ una recta y $a(t)$ una constante. La pendiente de cada una es la siguiente: la pendiente de $x(t)$ es $v$ y la de $v(t)$ es $a$. El área bajo $v(t)$ entre 0 y $t$ es el desplazamiento.</p>
<div class="plot" data-x="0,6" data-y="-10,20" data-f="x0+v0*x+a*x^2/2; v0+a*x; a" data-l="x(t); v(t); a(t)" data-p="x0=0,-5,5,0.5; v0=4,-5,8,0.5; a=-2,-4,4,0.25" data-info="instante en que v = 0=a==0?NaN:-v0/a; posición en ese instante=a==0?NaN:x0-v0*v0/(2*a)" data-cap="Con v₀ > 0 y a < 0 el móvil frena, se para (v = 0, vértice de la parábola) y vuelve hacia atrás."></div>
`},
{ t: "cinematica-recta", after: "3. Aceleración no constante", html: String.raw`
<h3 class="visual-h">Visualízalo: rozamiento lineal frente a cuadrático</h3>
<p>Un cuerpo que se lanza con $v_0$ y frena por rozamiento: con $a=-kv$ (azul) la velocidad decae exponencialmente; con $a=-kv^2$ (naranja) decae como $\frac{v_0}{1+kv_0t}$, más deprisa al principio pero mucho más despacio después.</p>
<div class="plot" data-x="0,10" data-y="0,12" data-f="v0*exp(-k*x); v0/(1+k*v0*x)" data-l="a = −kv; a = −kv²" data-p="v0=10,1,12,0.5; k=0.4,0.05,1,0.05" data-cap="Eje horizontal: tiempo. Eje vertical: velocidad."></div>
<h3>Rozamiento viscoso y velocidad límite</h3>
<p>En un fluido a poca velocidad, la resistencia es proporcional a la velocidad: $\vec F=-b\vec v$ (<strong>rozamiento viscoso</strong>). Un cuerpo que cae cumple entonces $m\dot v=mg-bv$, es decir $a=g-kv$ con $k=\frac bm$:</p>
$$v(t)=\frac gk\left(1-e^{-kt}\right)\ \xrightarrow{t\to\infty}\ v_L=\frac gk$$
<div class="plot" data-x="0,8" data-y="0,25" data-f="9.8/k*(1-exp(-k*x)); 9.8/k; 9.8*x" data-l="v(t) con rozamiento; velocidad límite g/k; caída libre (sin rozamiento)" data-p="k=0.6,0.2,2,0.05" data-info="velocidad límite (m/s)=9.8/k; tiempo para el 95 % (s)=ln(20)/k"></div>
<p>Al principio $v$ es pequeña y el rozamiento casi no actúa (la curva sigue a la caída libre); a medida que $v$ crece, el rozamiento compensa el peso y la aceleración tiende a 0. Así funciona un paracaídas: aumenta mucho $b$ y reduce $v_L$.</p>
`},

{ t: "cinematica-plano", after: "2. Tiro parabólico", html: String.raw`
<h3 class="visual-h">Simúlalo: tiro parabólico</h3>
<p>Elige la velocidad inicial, el ángulo y la altura de lanzamiento. Con $h=0$, comprueba que el alcance máximo se obtiene con 45° y que 30° y 60° dan el mismo alcance.</p>
<div class="plot" data-x="0,50" data-y="0,30" data-equal data-h="320" data-p="v=18,5,22,0.5; θ=45,5,85,1; h=0,0,20,1" data-par="0,(v*sin(θ*pi/180)+sqrt((v*sin(θ*pi/180))^2+19.6*h))/9.8|v*cos(θ*pi/180)*t|h+v*sin(θ*pi/180)*t-4.9*t^2" data-pts="v*cos(θ*pi/180)*v*sin(θ*pi/180)/9.8|h+(v*sin(θ*pi/180))^2/19.6" data-ptl="altura máxima" data-info="tiempo de vuelo (s)=(v*sin(θ*pi/180)+sqrt((v*sin(θ*pi/180))^2+19.6*h))/9.8; alcance (m)=v*cos(θ*pi/180)*(v*sin(θ*pi/180)+sqrt((v*sin(θ*pi/180))^2+19.6*h))/9.8; altura máxima (m)=h+(v*sin(θ*pi/180))^2/19.6" data-cap="g = 9,8 m/s². La trayectoria es una parábola porque x crece uniformemente mientras y sigue un MRUA."></div>
<div class="tip"><span class="label">Con altura inicial ya no es 45°</span><p>Si lanzas desde lo alto ($h\gt0$), el ángulo óptimo es menor de 45°: prueba con $h=20$ m. Las fórmulas cerradas de alcance y altura solo valen al mismo nivel; en general, plantea las ecuaciones horarias.</p></div>
`},
{ t: "cinematica-plano", after: "4. Componentes intrínsecas", html: String.raw`
<h3 class="visual-h">Esquema: aceleración tangencial y normal</h3>
<figure class="dg"><svg viewBox="0 0 520 300" width="520" role="img" aria-label="Descomposición de la aceleración en componentes tangencial y normal">
<path d="M40 250 C 140 240, 230 200, 290 140 S 400 40, 490 30" class="ink"/>
<circle cx="290" cy="140" r="5" class="dot"/><text x="250" y="160">P</text>
<circle cx="190" cy="40" r="125" class="dash"/><text x="150" y="40" class="s">circunferencia osculatriz</text>
<line x1="290" y1="140" x2="190" y2="40" class="thin"/><text x="232" y="80" class="s">ρ</text>
<line x1="290" y1="140" x2="380" y2="50" class="c1"/><polygon points="380,50 368,54 376,62" fill="var(--s1)"/><text x="384" y="50" class="t1">v (tangente)</text>
<line x1="290" y1="140" x2="350" y2="80" class="c2"/><polygon points="350,80 338,84 346,92" fill="var(--s2)"/><text x="345" y="105" class="t2">aₜ</text>
<line x1="290" y1="140" x2="235" y2="85" class="c3"/><polygon points="235,85 239,97 247,89" fill="var(--s3)"/><text x="210" y="112" class="t3">aₙ</text>
<line x1="290" y1="140" x2="295" y2="25" class="c4"/><polygon points="295,25 289,36 300,37" fill="var(--s4)"/><text x="302" y="28" class="t4">a</text>
<line x1="350" y1="80" x2="295" y2="25" class="dash"/><line x1="235" y1="85" x2="295" y2="25" class="dash"/>
</svg><figcaption>La aceleración total a (morado) se descompone en aₜ, a lo largo de la velocidad (cambia el módulo de v), y aₙ, hacia el centro de curvatura (cambia la dirección). aₙ = v²/ρ, con ρ el radio de la circunferencia osculatriz.</figcaption></figure>
`},
{ t: "cinematica-plano", after: "5. Componentes polares", html: String.raw`
<h3 class="visual-h">Esquema: la base polar se mueve con la partícula</h3>
<figure class="dg"><svg viewBox="0 0 460 300" width="460" role="img" aria-label="Vectores unitarios radial y transversal">
<line x1="40" y1="260" x2="430" y2="260" class="thin"/><line x1="60" y1="280" x2="60" y2="20" class="thin"/>
<text x="420" y="280" class="s">x</text><text x="44" y="30" class="s">y</text>
<line x1="60" y1="260" x2="260" y2="120" class="ink"/><circle cx="260" cy="120" r="5" class="dot"/><text x="150" y="178" class="s">r</text>
<path d="M120 260 A 60 60 0 0 0 109 226" class="thin"/><text x="126" y="246" class="s">θ</text>
<line x1="260" y1="120" x2="342" y2="63" class="c1"/><polygon points="342,63 330,64 336,73" fill="var(--s1)"/><text x="346" y="62" class="t1">ûᵣ</text>
<line x1="260" y1="120" x2="203" y2="38" class="c2"/><polygon points="203,38 205,50 214,44" fill="var(--s2)"/><text x="182" y="34" class="t2">û_θ</text>
<path d="M60 260 Q 200 230 260 120 T 330 30" class="dash"/>
</svg><figcaption>ûᵣ apunta desde el origen hacia la partícula y û_θ es perpendicular, en el sentido de θ creciente. Al moverse la partícula, los dos vectores giran: por eso al derivar aparecen los términos −rθ̇² (centrípeto) y 2ṙθ̇ (Coriolis).</figcaption></figure>
`},

{ t: "relativo", after: "2. Sistema móvil en traslación", html: String.raw`
<h3 class="visual-h">Visualízalo: el triángulo de velocidades</h3>
<p>Una barca que va a 5 m/s respecto al agua cruza un río cuya corriente es $V$. La velocidad respecto a tierra es la suma vectorial $\vec v=\vec v\,'+\vec V$. Cambia el rumbo de la barca: con el rumbo adecuado (río arriba), la velocidad resultante es perpendicular a la orilla.</p>
<div class="plot" data-x="-4,6" data-y="-1,6" data-equal data-p="φ=90,30,150,1; V=3,0,4.5,0.1" data-vec="0|0|5*cos(φ*pi/180)|5*sin(φ*pi/180);5*cos(φ*pi/180)|5*sin(φ*pi/180)|5*cos(φ*pi/180)+V|5*sin(φ*pi/180);0|0|5*cos(φ*pi/180)+V|5*sin(φ*pi/180)" data-vecl="v′ (barca/agua);V (corriente);v (barca/tierra)" data-info="|v|=hypot(5*cos(φ*pi/180)+V,5*sin(φ*pi/180)); tiempo para cruzar 80 m (s)=80/(5*sin(φ*pi/180)); deriva (m)=80/(5*sin(φ*pi/180))*(5*cos(φ*pi/180)+V)" data-cap="Rumbo φ medido desde la orilla (90° = perpendicular). Para llegar justo enfrente, la deriva debe ser 0: cos φ = −V/5."></div>
`},
{ t: "relativo", after: "3. Sistema móvil en rotación", html: String.raw`
<h3 class="visual-h">Visualízalo: lo que ve el observador fijo</h3>
<p>Una partícula se aleja del centro de una plataforma giratoria a velocidad constante $v'$ <strong>respecto a la plataforma</strong>: para quien gira con ella, va en línea recta. Pero el observador del suelo ve una <strong>espiral</strong> (de Arquímedes, $r=v't$, $\theta=\omega t$). La curvatura de esa espiral es la huella de las aceleraciones centrípeta y de Coriolis.</p>
<div class="plot" data-x="-6,6" data-y="-5,5" data-equal data-h="360" data-p="ω=1,0,3,0.05; v=1,0.3,2,0.05; T=5,0.5,8,0.1" data-par="0,T|v*t*cos(ω*t)|v*t*sin(ω*t)" data-pts="v*T*cos(ω*T)|v*T*sin(ω*T)" data-ptl="partícula" data-info="aceleración centrípeta ω²r=ω*ω*v*T; aceleración de Coriolis 2ωv′=2*ω*v; |a| total=hypot(ω*ω*v*T,2*ω*v)" data-cap="Con ω = 0 la trayectoria es una recta: sin giro no hay ni centrípeta ni Coriolis."></div>
`},
{ t: "relativo", after: "4. Movimiento relativo a la superficie", html: String.raw`
<h3>Órbita geoestacionaria</h3>
<p>Un satélite <strong>geoestacionario</strong> (o geosíncrono en el plano ecuatorial) da una vuelta en un día sidéreo, igual que la Tierra, así que desde el suelo se ve siempre en el mismo punto del cielo. Igualando la gravedad a la fuerza centrípeta con $T=86\,164$ s:</p>
$$\frac{GMm}{r^2}=m\omega^2r\ \Rightarrow\ r=\sqrt[3]{\frac{GM}{\omega^2}}\approx42\,160\text{ km}\quad(\text{unos }35\,800\text{ km de altura})$$
<p>Es un ejemplo de que en el sistema que gira con la Tierra el satélite está en reposo: la fuerza centrífuga (ficticia) compensa exactamente la gravedad.</p>
`},

{ t: "estatica", after: "3. Rozamiento seco", html: String.raw`
<h3 class="visual-h">Esquema: diagrama de fuerzas en un plano inclinado</h3>
<figure class="dg"><svg viewBox="0 0 520 320" width="520" role="img" aria-label="Bloque sobre un plano inclinado con sus fuerzas">
<polygon points="40,280 480,280 480,60" class="solid" style="fill:var(--surface-2)"/>
<g transform="rotate(-26.6 300 190)"><rect x="255" y="150" width="90" height="56" class="solid"/></g>
<circle cx="300" cy="178" r="4" class="dot"/>
<line x1="300" y1="178" x2="300" y2="288" class="c2"/><polygon points="300,288 294,276 306,276" fill="var(--s2)"/><text x="306" y="300" class="t2">P = mg</text>
<line x1="300" y1="178" x2="253" y2="84" class="c1"/><polygon points="253,84 252,97 263,92" fill="var(--s1)"/><text x="215" y="80" class="t1">N</text>
<line x1="300" y1="178" x2="390" y2="133" class="c3"/><polygon points="390,133 377,133 382,143" fill="var(--s3)"/><text x="388" y="125" class="t3">F<tspan dy="4" font-size="11">r</tspan></text>
<line x1="300" y1="178" x2="251" y2="203" class="dash"/><text x="196" y="222" class="s">mg sin θ</text>
<line x1="300" y1="178" x2="349" y2="276" class="dash"/><text x="350" y="262" class="s">mg cos θ</text>
<path d="M100 280 A 60 60 0 0 0 95 254" class="thin"/><text x="108" y="270" class="s">θ</text>
</svg><figcaption>El peso se descompone en una componente a lo largo del plano (mg sin θ, tiende a hacerlo bajar) y otra perpendicular (mg cos θ), que equilibra la normal: N = mg cos θ. El rozamiento estático se opone a la tendencia a bajar.</figcaption></figure>
<h3 class="visual-h">Visualízalo: la fuerza de rozamiento al empujar cada vez más</h3>
<p>Empuja horizontalmente un bloque con una fuerza $F$ creciente. Al principio no se mueve y el rozamiento estático vale exactamente $F$ (crece a 45°). Cuando $F$ supera $\mu_sN$, el bloque arranca y el rozamiento cae a $\mu_kN$ y se queda constante.</p>
<div class="plot" data-x="0,100" data-y="0,70" data-f="x<=μs*N?x:μk*N" data-l="fuerza de rozamiento" data-p="μs=0.5,0.1,0.8,0.01; μk=0.35,0.05,0.8,0.01; N=100,20,120,5" data-info="rozamiento estático máximo μₛN=μs*N; rozamiento dinámico μₖN=μk*N" data-cap="Eje horizontal: fuerza aplicada F (N). Si eliges μₖ > μₛ obtienes un caso no físico: en la realidad siempre μₖ ≤ μₛ."></div>
<h3 class="visual-h">Esquema: el cono de rozamiento</h3>
<figure class="dg"><svg viewBox="0 0 440 240" width="440" role="img" aria-label="Cono de rozamiento">
<line x1="30" y1="200" x2="410" y2="200" class="ink"/>
<polygon points="220,200 130,40 310,40" class="f1"/><line x1="220" y1="200" x2="130" y2="40" class="c1"/><line x1="220" y1="200" x2="310" y2="40" class="c1"/>
<line x1="220" y1="200" x2="220" y2="30" class="dash"/><text x="226" y="34" class="s">normal</text>
<path d="M220 140 A 60 60 0 0 1 250 147" class="thin"/><text x="236" y="132" class="s">φₛ</text>
<line x1="220" y1="200" x2="270" y2="70" class="c3"/><text x="276" y="80" class="t3">R (dentro: equilibrio)</text>
<line x1="220" y1="200" x2="360" y2="120" class="c2"/><text x="300" y="150" class="t2">R (fuera: desliza)</text>
</svg><figcaption>tan φₛ = μₛ. Si la reacción total R que haría falta para el equilibrio cae dentro del cono, el cuerpo no se mueve; si cae fuera, desliza.</figcaption></figure>
`},

{ t: "dinamica", after: "2. Movimiento interdependiente", html: String.raw`
<h3 class="visual-h">Esquema: bloques unidos por una cuerda</h3>
<figure class="dg"><svg viewBox="0 0 520 280" width="520" role="img" aria-label="Bloque en un plano inclinado unido a un bloque colgante">
<polygon points="40,240 380,240 380,70" class="solid" style="fill:var(--surface-2)"/>
<circle cx="392" cy="62" r="14" class="ink"/>
<g transform="rotate(-26.6 230 163)"><rect x="195" y="128" width="70" height="44" class="solid"/></g>
<line x1="258" y1="132" x2="384" y2="50" class="thin"/><line x1="406" y1="62" x2="406" y2="150" class="thin"/>
<rect x="386" y="150" width="40" height="44" class="solid"/>
<text x="210" y="172">m₁</text><text x="396" y="178">m₂</text>
<line x1="406" y1="194" x2="406" y2="256" class="c2"/><polygon points="406,256 400,244 412,244" fill="var(--s2)"/><text x="414" y="250" class="t2">m₂g</text>
<line x1="406" y1="150" x2="406" y2="110" class="c1"/><polygon points="406,110 400,122 412,122" fill="var(--s1)"/><text x="414" y="120" class="t1">T</text>
<line x1="245" y1="140" x2="300" y2="112" class="c1"/><text x="292" y="104" class="t1">T</text>
<line x1="215" y1="160" x2="168" y2="183" class="c3"/><text x="140" y="196" class="t3">F<tspan dy="4" font-size="11">r</tspan></text>
</svg><figcaption>Examen de prueba 1, problema 4. Si la cuerda no se estira, los dos bloques tienen la misma aceleración (en módulo). La polea ideal transmite la misma tensión T a los dos lados.</figcaption></figure>
<div class="key"><span class="label">Receta para sistemas de bloques</span><ol>
<li>Decide el sentido del movimiento (si dudas, supón uno: si $a$ sale negativa, era el otro… pero entonces el rozamiento cambia de sentido y hay que rehacerlo).</li>
<li>Un diagrama y una ecuación $\sum F=ma$ por cuerpo, en la dirección de su movimiento.</li>
<li>Suma las ecuaciones: las tensiones internas se cancelan y obtienes $a$ directamente.</li></ol></div>
`},
{ t: "dinamica", after: "3. Dinámica del movimiento circular", html: String.raw`
<h3 class="visual-h">Esquema: curva peraltada</h3>
<figure class="dg"><svg viewBox="0 0 460 260" width="460" role="img" aria-label="Coche en una curva peraltada">
<polygon points="40,220 420,220 420,120" class="solid" style="fill:var(--surface-2)"/>
<g transform="rotate(-14.7 240 170)"><rect x="205" y="140" width="70" height="36" rx="6" class="solid"/></g>
<circle cx="238" cy="165" r="4" class="dot"/>
<line x1="238" y1="165" x2="238" y2="250" class="c2"/><polygon points="238,250 232,238 244,238" fill="var(--s2)"/><text x="244" y="248" class="t2">mg</text>
<line x1="238" y1="165" x2="214" y2="74" class="c1"/><polygon points="214,74 211,87 222,85" fill="var(--s1)"/><text x="186" y="72" class="t1">N</text>
<line x1="238" y1="165" x2="160" y2="165" class="c3"/><polygon points="160,165 172,159 172,171" fill="var(--s3)"/><text x="74" y="160" class="t3">hacia el centro</text>
<line x1="214" y1="74" x2="214" y2="165" class="dash"/><text x="140" y="120" class="s">N cos θ = mg</text>
<text x="250" y="110" class="s">N sin θ = mv²/R</text>
</svg><figcaption>Sin rozamiento, la componente horizontal de la normal es la que proporciona la fuerza centrípeta. Dividiendo las dos ecuaciones: tan θ = v²/(Rg).</figcaption></figure>
<div class="plot" data-x="0,40" data-y="0,60" data-f="atan(x^2/(R*9.8))*180/pi" data-l="peralte necesario (grados)" data-p="R=100,20,300,5" data-info="peralte para 20 m/s (grados)=atan(400/(R*9.8))*180/pi" data-cap="Eje horizontal: velocidad (m/s). Cuanto más rápida la curva o menor el radio, más peralte hace falta."></div>
`},

{ t: "energia", after: "4. Discusión de curvas", html: String.raw`
<h3 class="visual-h">Visualízalo: dónde puede estar la partícula</h3>
<p>La curva es $E_p(x)=\frac{x^4}4-x^2$ (un "doble pozo") y la recta horizontal, la energía total $E$. La partícula solo puede estar donde la curva queda <strong>por debajo</strong> de la recta (porque $E_c=E-E_p\ge0$). Los cortes son los puntos de retorno. Con $E\lt0$ queda atrapada en uno de los dos pozos; con $E\gt0$ pasa por encima de la "colina" central y oscila entre los dos lados.</p>
<div class="plot" data-x="-3,3" data-y="-1.5,2" data-f="x^4/4-x^2; En" data-l="Eₚ(x); energía total E" data-p="En=-0.5,-0.99,1.8,0.01" data-pts="-1.4142|-1;1.4142|-1;0|0" data-ptl="estable;estable;inestable" data-info="punto de retorno exterior x=sqrt(2+2*sqrt(1+En)); punto de retorno interior x=En<0?sqrt(2-2*sqrt(1+En)):NaN" data-cap="Mínimos de Eₚ: equilibrio estable. Máximo (x = 0): equilibrio inestable. La fuerza es F = −dEₚ/dx: empuja siempre hacia abajo de la curva."></div>
`},
{ t: "energia", after: "5. Gravitación", html: String.raw`
<h3 class="visual-h">Simúlalo: el cañón de Newton</h3>
<p>Newton imaginó un cañón en lo alto de una montaña que dispara horizontalmente. Con poca velocidad, el proyectil cae a la Tierra; con la velocidad orbital $v_0=\sqrt{GM/r}$ da vueltas en una circunferencia; con más, la órbita es una elipse cada vez más alargada; y a partir de $\sqrt2\,v_0$ (velocidad de escape) la trayectoria se abre (parábola, hipérbola) y ya no vuelve.</p>
<div class="plot" data-x="-4,2.5" data-y="-2.2,2.2" data-equal data-h="380" data-p="v=1,0.6,1.6,0.01" data-pol="0,2*pi|v^2/(1+(v^2-1)*cos(t));0,2*pi|0.8" data-pts="1|0" data-ptl="cañón" data-n="2000" data-info="velocidad / velocidad orbital=v; excentricidad=abs(v*v-1); tipo (0 círculo, 1 elipse, 2 abierta)=abs(v-1)<0.005?0:(v<1.4142?1:2)" data-cap="Unidades: radio de lanzamiento = 1 y velocidad orbital = 1. El círculo pequeño es la Tierra. Por debajo de cierta velocidad, la elipse corta la Tierra: el proyectil cae."></div>
<h3>Velocidad areolar (segunda ley de Kepler)</h3>
<p>El vector de posición de un planeta barre áreas iguales en tiempos iguales. La <strong>velocidad areolar</strong> es el área barrida por unidad de tiempo:</p>
$$\frac{dA}{dt}=\frac12r^2\dot\theta=\frac{|\vec r\times\vec v|}{2}=\frac{L}{2m}=\text{constante}$$
<p>Es constante porque la gravedad es central y conserva $\vec L$. Consecuencia: el planeta va <strong>más rápido cerca del Sol</strong> (perihelio) y más despacio lejos (afelio): $r_pv_p=r_av_a$.</p>
`}
];
