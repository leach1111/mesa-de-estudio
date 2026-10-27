EXTRA.algebra = [

{ t: "matrices", after: "3. Determinantes", html: String.raw`
<h3 class="visual-h">Visualízalo: el determinante es un área con signo</h3>
<p>Las columnas de $A=\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ son los vectores $(a,c)$ y $(b,d)$. El área del paralelogramo que forman es $|\det A|=|ad-bc|$. Si los haces paralelos, el paralelogramo se aplasta y el determinante vale 0: las columnas son dependientes y la matriz no es invertible.</p>
<div class="plot" data-x="-4,4" data-y="-3,4" data-equal data-p="a=2,-3,3,0.1; c=0.5,-3,3,0.1; b=0.7,-3,3,0.1; d=2,-3,3,0.1" data-vec="0|0|a|c;0|0|b|d" data-vecl="1.ª columna;2.ª columna" data-par="0,1|a*t|c*t;0,1|b*t|d*t;0,1|a+b*t|c+d*t;0,1|b+a*t|d+c*t" data-info="det A=a*d-b*c; área=abs(a*d-b*c)" data-cap="Si el determinante es negativo, la 2.ª columna queda a la derecha de la 1.ª: la base tiene orientación inversa."></div>
<div class="key"><span class="label">Por qué esto explica las propiedades</span><ul>
<li>Multiplicar una columna por $k$ estira el paralelogramo en esa dirección: el área se multiplica por $k$. Con $n$ columnas, $\det(kA)=k^n\det A$.</li>
<li>Sumar a una columna un múltiplo de otra "inclina" el paralelogramo sin cambiar su base ni su altura: el área no cambia.</li>
<li>Intercambiar dos columnas invierte la orientación: cambia el signo.</li></ul></div>
`},

{ t: "rango-sistemas", after: "3. Sistemas de ecuaciones", html: String.raw`
<h3 class="visual-h">Visualízalo: un sistema 2×2 son dos rectas</h3>
<p>Cada ecuación $a_1x+b_1y=c_1$ es una recta del plano y las soluciones del sistema son los puntos comunes. Mueve la pendiente y la ordenada de la segunda recta: si se cortan hay <strong>una</strong> solución (compatible determinado); si son paralelas, <strong>ninguna</strong> (incompatible); si coinciden, <strong>infinitas</strong> (compatible indeterminado).</p>
<div class="plot" data-x="-5,5" data-y="-4,4" data-f="(4-2*x)/2; m*x+k" data-l="recta 1: 2x + 2y = 4; recta 2: y = mx + k" data-p="m=0.5,-2,2,0.05; k=-1,-3,3,0.05" data-pts="(2-k)/(m+1)|m*(2-k)/(m+1)+k" data-ptl="solución" data-info="det A (con la recta 2 como −mx + y = k)=2*1-2*(-m); x=(2-k)/(m+1); y=m*(2-k)/(m+1)+k" data-cap="Prueba m = −1 (misma pendiente): con k = 2 coinciden; con cualquier otro k, son paralelas y el determinante vale 0."></div>
<h3 class="visual-h">Esquema: cómo discutir un sistema</h3>
<div class="flow">
<div class="fb">Calcula $r=\text{rg}A$ y $r^*=\text{rg}(A|B)$</div><div class="ar"></div>
<div class="fb dec">¿$r=r^*$?</div>
<div class="row"><div class="col"><div class="lab">no</div><div class="ar"></div><div class="fb end">Incompatible</div></div>
<div class="col"><div class="lab">sí</div><div class="ar"></div><div class="fb dec">¿$r=n$ (n.º incógnitas)?</div>
<div class="row"><div class="col"><div class="lab">sí</div><div class="ar"></div><div class="fb end">Compatible determinado</div></div><div class="col"><div class="lab">no</div><div class="ar"></div><div class="fb end">Compatible indeterminado: $n-r$ parámetros</div></div></div></div></div>
</div>
`},

{ t: "espacios", after: "1. El espacio vectorial", html: String.raw`
<h3 class="visual-h">Visualízalo: combinaciones lineales</h3>
<p>Con dos vectores no paralelos $\vec u$ y $\vec v$ del plano se llega a <strong>cualquier</strong> punto: basta elegir bien $\alpha$ y $\beta$ en $\alpha\vec u+\beta\vec v$. Por eso forman una base de $\mathbb R^2$. Los números $(\alpha,\beta)$ son las <strong>componentes</strong> del vector en esa base.</p>
<div class="plot" data-x="-5,5" data-y="-4,4" data-equal data-p="α=1.5,-2,2,0.05; β=1,-2,2,0.05" data-vec="0|0|2|0.5;0|0|0.5|1.5;0|0|α*2|α*0.5;α*2|α*0.5|α*2+β*0.5|α*0.5+β*1.5" data-vecl="u;v;αu;αu + βv" data-pts="α*2+β*0.5|α*0.5+β*1.5" data-info="vector resultante x=α*2+β*0.5; y=α*0.5+β*1.5" data-cap="u = (2; 0,5), v = (0,5; 1,5). La flecha final se obtiene recorriendo αu y después βv."></div>
<p>Si $\vec u$ y $\vec v$ fueran paralelos, todas sus combinaciones caerían sobre una recta: generarían un subespacio de dimensión 1 y serían linealmente dependientes.</p>
`},
{ t: "espacios", after: "5. El espacio afín", html: String.raw`
<h3 class="visual-h">Visualízalo: una recta es un punto más un vector</h3>
<div class="plot" data-x="-5,5" data-y="-3,4" data-equal data-f="1+0.5*(x+1)" data-l="r: P + λv" data-p="λ=1,-3,3,0.05" data-vec="0|0|-1|1;-1|1|-1+2*λ|1+λ" data-vecl="P;λv" data-pts="-1+2*λ|1+λ" data-ptl="P + λv" data-cap="P = (−1, 1) y v = (2, 1). Cada valor del parámetro λ da un punto de la recta: es la ecuación paramétrica."></div>
`},

{ t: "euclideo", after: "3. Ortogonalidad", html: String.raw`
<h3 class="visual-h">Visualízalo: Gram-Schmidt en el plano</h3>
<p>A $\vec v_2$ se le quita su "sombra" sobre $\vec v_1$ (la proyección). Lo que queda, $\vec w_2$, es perpendicular a $\vec v_1$. Mueve $\vec v_2$ y comprueba que $\vec w_2$ siempre forma un ángulo recto con $\vec v_1$.</p>
<div class="plot" data-x="-4,4" data-y="-2,3.5" data-equal data-p="p=1.5,-3,3,0.05; q=2,0.3,3,0.05" data-vec="0|0|3|1;0|0|p|q;0|0|(3*p+q)/10*3|(3*p+q)/10*1;0|0|p-(3*p+q)/10*3|q-(3*p+q)/10" data-vecl="v₁;v₂;proyección;w₂" data-info="v₁·w₂=3*(p-(3*p+q)/10*3)+1*(q-(3*p+q)/10)" data-cap="v₁ = (3, 1). w₂ = v₂ − (v₂·v₁ / v₁·v₁) v₁. El producto escalar v₁·w₂ es siempre 0."></div>
`},
{ t: "euclideo", after: "4. Proyección ortogonal", html: String.raw`
<h3 class="visual-h">Visualízalo: proyección y simétrico</h3>
<p>La proyección de $\vec u$ sobre la recta $\langle\vec n\rangle$ es la "sombra" de $\vec u$ sobre ella; la diferencia $\vec u-\text{proy}$ es perpendicular a la recta. El simétrico se obtiene "pasando al otro lado" la misma distancia: $2\,\text{proy}-\vec u$.</p>
<div class="plot" data-x="-4,4" data-y="-3,3.5" data-equal data-f="0.5*x" data-l="recta ⟨(2, 1)⟩" data-p="ux=0.5,-3,3,0.05; uy=2.5,-3,3,0.05" data-vec="0|0|ux|uy;0|0|(2*ux+uy)/5*2|(2*ux+uy)/5;(2*ux+uy)/5*2|(2*ux+uy)/5|ux|uy;0|0|2*(2*ux+uy)/5*2-ux|2*(2*ux+uy)/5-uy" data-vecl="u;proy;u − proy;simétrico" data-info="u·n=2*ux+uy; distancia de u a la recta=abs(-ux+2*uy)/sqrt(5)" data-cap="La longitud de u − proy es la distancia del punto a la recta."></div>
`},

{ t: "lineales", after: "1. Transformaciones lineales", html: String.raw`
<h3 class="visual-h">Visualízalo: qué hace una matriz al plano</h3>
<p>La transformación $\vec f(\vec x)=A\vec x$ con $A=\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ lleva $\vec e_1=(1,0)$ a la primera columna $(a,c)$ y $\vec e_2=(0,1)$ a la segunda $(b,d)$. La circunferencia unidad (naranja) se transforma en una elipse (azul). Prueba:</p>
<ul><li>$a=d=2$, $b=c=0$: homotecia de razón 2.</li>
<li>$a=d=\cos\theta$, $c=-b=\sin\theta$ (por ejemplo, $a=d=0$, $c=1$, $b=-1$): giro de 90°, la circunferencia no cambia.</li>
<li>$a=1$, $d=-1$, $b=c=0$: simetría respecto al eje $OX$.</li>
<li>$\det=0$ (por ejemplo, $a=1$, $b=2$, $c=0{,}5$, $d=1$): todo el plano se aplasta sobre una recta.</li></ul>
<div class="plot" data-x="-4,4" data-y="-3,3" data-equal data-h="360" data-p="a=1.5,-2,2,0.1; b=0.5,-2,2,0.1; c=0.3,-2,2,0.1; d=1,-2,2,0.1" data-par="0,2*pi|a*cos(t)+b*sin(t)|c*cos(t)+d*sin(t);0,2*pi|cos(t)|sin(t)" data-vec="0|0|a|c;0|0|b|d" data-vecl="f(e₁);f(e₂)" data-info="det A=a*d-b*c; traza=a+d" data-cap="El área de la elipse es |det A| veces el área del círculo: el determinante mide cuánto se multiplica el área."></div>
`},
{ t: "lineales", after: "3. Valores y vectores propios", html: String.raw`
<h3 class="visual-h">Visualízalo: buscar las direcciones que no giran</h3>
<p>Con $A=\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$, gira el vector $\vec v$ (azul) cambiando su ángulo y mira su imagen $A\vec v$ (naranja). En general apuntan a sitios distintos, pero hay direcciones en las que $A\vec v$ es paralelo a $\vec v$: son los <strong>vectores propios</strong>. Encuéntralos (están a 45° y a 135°) y lee en el panel cuánto se estira $\vec v$: ese factor es el <strong>valor propio</strong> (3 y 1).</p>
<div class="plot" data-x="-3.5,3.5" data-y="-3,3" data-equal data-p="φ=20,0,180,1" data-vec="0|0|cos(φ*pi/180)|sin(φ*pi/180);0|0|2*cos(φ*pi/180)+sin(φ*pi/180)|cos(φ*pi/180)+2*sin(φ*pi/180)" data-vecl="v;Av" data-f="x; -x" data-l="dirección propia (λ = 3); dirección propia (λ = 1)" data-info="ángulo entre v y Av (grados)=abs(atan2(cos(φ*pi/180)+2*sin(φ*pi/180),2*cos(φ*pi/180)+sin(φ*pi/180))-φ*pi/180)*180/pi; |Av|/|v|=hypot(2*cos(φ*pi/180)+sin(φ*pi/180),cos(φ*pi/180)+2*sin(φ*pi/180))"></div>
<p>Como $A$ es simétrica, las dos direcciones propias son <strong>perpendiculares</strong> (teorema espectral). En la base de vectores propios, la transformación es simplemente "estirar 3 veces en una dirección y dejar igual la otra".</p>
`},

{ t: "afines", after: "4. Clasificación en el plano", html: String.raw`
<h3 class="visual-h">Visualízalo: giro alrededor de un punto</h3>
<p>El triángulo azul se gira un ángulo $\theta$ alrededor del centro $C$ (el único punto fijo). La forma y el tamaño no cambian: es una isometría directa. Mueve el centro y el ángulo.</p>
<div class="plot" data-x="-4,5" data-y="-3,4" data-equal data-h="360" data-p="θ=60,0,360,1; cx=0,-2,2,0.1; cy=0,-2,2,0.1" data-par="0,1|1+2*t|0;0,1|3-t|2*t;0,1|2-t|2-2*t;0,1|cx+(1+2*t-cx)*cos(θ*pi/180)-(0-cy)*sin(θ*pi/180)|cy+(1+2*t-cx)*sin(θ*pi/180)+(0-cy)*cos(θ*pi/180);0,1|cx+(3-t-cx)*cos(θ*pi/180)-(2*t-cy)*sin(θ*pi/180)|cy+(3-t-cx)*sin(θ*pi/180)+(2*t-cy)*cos(θ*pi/180);0,1|cx+(2-t-cx)*cos(θ*pi/180)-(2-2*t-cy)*sin(θ*pi/180)|cy+(2-t-cx)*sin(θ*pi/180)+(2-2*t-cy)*cos(θ*pi/180)" data-pts="cx|cy" data-ptl="C" data-info="traza de la lineal=2*cos(θ*pi/180); det=1" data-cap="Con θ = 180° es una simetría central. La matriz de la lineal asociada es la de giro de ángulo θ."></div>
`},

{ t: "cuadraticas", after: "2. Clasificación", html: String.raw`
<h3 class="visual-h">Visualízalo: la curva q(x, y) = 1 según el tipo de forma</h3>
<p>Para $q(x,y)=ax^2+2bxy+cy^2$ dibujamos la curva $q=1$ (azul) y la curva $q=-1$ (naranja). Si $q$ es <strong>definida positiva</strong>, $q=1$ es una elipse y $q=-1$ no existe; si es <strong>indefinida</strong>, aparecen hipérbolas; si es <strong>semidefinida</strong> (un VAP nulo), se degenera en dos rectas paralelas. Los ejes de las curvas siguen las direcciones de los vectores propios.</p>
<div class="plot" data-x="-3,3" data-y="-2.3,2.3" data-equal data-h="360" data-p="a=1,-2,3,0.05; b=0.4,-2,2,0.05; c=2,-2,3,0.05" data-pol="0,2*pi|1/sqrt(a*cos(t)^2+2*b*cos(t)*sin(t)+c*sin(t)^2);0,2*pi|1/sqrt(-(a*cos(t)^2+2*b*cos(t)*sin(t)+c*sin(t)^2))" data-n="2400" data-info="λ₁=((a+c)+sqrt((a-c)^2+4*b^2))/2; λ₂=((a+c)-sqrt((a-c)^2+4*b^2))/2; Δ₂ = ac − b²=a*c-b*b" data-cap="Δ₁ = a y Δ₂ = ac − b² son los menores de Sylvester. Prueba a hacer Δ₂ negativo."></div>
`},
{ t: "cuadraticas", after: "3. Cuádricas", html: String.raw`
<h3 class="visual-h">Visualízalo: las tres cónicas no degeneradas</h3>
<div class="plot" data-x="-4,4" data-y="-3,3" data-equal data-par="0,2*pi|2*cos(t)|1.2*sin(t);-1.6,1.6|cosh(t)|sinh(t);-1.6,1.6|-cosh(t)|sinh(t);-2.2,2.2|t^2/2-2.5|t" data-l="" data-cap="Azul: elipse x²/4 + y²/1,44 = 1. Naranja y verde: las dos ramas de la hipérbola x² − y² = 1. Morado: parábola x = y²/2 − 2,5."></div>
`},
{ t: "cuadraticas", after: "6. Mínimos cuadrados", html: String.raw`
<h3 class="visual-h">Visualízalo: busca tú la mejor recta</h3>
<p>Los cuatro puntos son los del examen de prueba 3: $(-1,0)$, $(0,1)$, $(1,1)$ y $(2,3)$. Mueve $a$ y $b$ en $y=a+bx$ para hacer lo más pequeña posible la suma de los cuadrados de los residuos (las flechas verticales). El mínimo se alcanza en $a=0{,}8$, $b=0{,}9$, con suma $0{,}7$: es lo que dan las ecuaciones normales.</p>
<div class="plot" data-x="-2,3" data-y="-1,4" data-f="a+b*x" data-l="y = a + bx" data-p="a=0.3,-1,2,0.05; b=1.3,0,2,0.05" data-pts="-1|0;0|1;1|1;2|3" data-vec="-1|0|-1|a-b;0|1|0|a;1|1|1|a+b;2|3|2|a+2*b" data-info="suma de cuadrados=(a-b)^2+(a-1)^2+(a+b-1)^2+(a+2*b-3)^2; mínimo posible=0.7"></div>
`}
];
