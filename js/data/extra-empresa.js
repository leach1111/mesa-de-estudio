EXTRA.empresa = [

{ t: "balance", after: "2. El modelo renta-riqueza", html: String.raw`
<h3 class="visual-h">Esquema: cómo encajan los tres documentos</h3>
<div class="blocks" style="grid-template-columns:1fr auto 1fr auto 1fr;align-items:center">
<div class="bk"><b>Balance inicial</b><small>Foto a 31/12 del año anterior: qué tiene la empresa y de dónde salió.</small></div>
<div style="font-size:26px">+</div>
<div class="bk" style="border-color:var(--c)"><b>Cuenta de resultados</b><small>Película del año: ingresos − gastos = <strong>resultado</strong>. Va al patrimonio neto.</small><hr style="margin:8px 0"><b>Estado de tesorería</b><small>Cobros − pagos = variación de la <strong>caja</strong>. Va a tesorería.</small></div>
<div style="font-size:26px">=</div>
<div class="bk"><b>Balance final</b><small>Foto a 31/12: lo que quedó pendiente (clientes, proveedores, HP…) más los nuevos saldos.</small></div>
</div>
<div class="tip"><span class="label">Por qué hacen falta dos documentos "de flujo"</span><p>La cuenta de resultados responde a "¿ganamos dinero?" y el estado de tesorería a "¿tenemos dinero?". Una empresa puede ganar dinero y quedarse sin caja (vende a 90 días y paga al contado) o perderlo y tener caja (cobra deudas antiguas). Las dos preguntas son distintas e igual de importantes: con pérdidas se acaba quebrando; sin caja se quiebra antes.</p></div>
`},
{ t: "balance", after: "3. El balance de situación", html: String.raw`
<h3 class="visual-h">Esquema: el balance por masas patrimoniales</h3>
<div class="bal">
<div><div class="cell hd">ACTIVO · en qué se invierte</div>
<div class="cell anc" style="min-height:120px"><b>Activo no corriente</b><small>Permanece más de un año: inmovilizado material e intangible (menos su amortización acumulada), inversiones financieras a largo plazo.</small></div>
<div class="cell ac"><b>Existencias</b><small>Mercaderías, materias primas, productos.</small></div>
<div class="cell ac"><b>Realizable</b><small>Clientes, deudores, HP deudora.</small></div>
<div class="cell ac"><b>Disponible</b><small>Caja y bancos.</small></div></div>
<div><div class="cell hd">PN + PASIVO · de dónde sale</div>
<div class="cell pn" style="min-height:110px"><b>Patrimonio neto</b><small>Lo aportado por los socios y lo que han dejado: capital, reservas, prima de emisión, resultado.</small></div>
<div class="cell pnc"><b>Pasivo no corriente</b><small>Deudas a más de un año: préstamos a largo plazo.</small></div>
<div class="cell pc" style="min-height:96px"><b>Pasivo corriente</b><small>Deudas a menos de un año: proveedores, acreedores, HP acreedora, póliza.</small></div></div>
</div>
<p>De arriba abajo, el activo va de <strong>menos a más líquido</strong> y el pasivo, de <strong>menos a más exigible</strong>. Las dos columnas siempre suman lo mismo: todo lo que hay en la empresa (izquierda) ha salido de algún sitio (derecha).</p>
<div class="key"><span class="label">Equilibrio financiero</span><p>Lo que se queda mucho tiempo en la empresa (el activo no corriente) debe financiarse con recursos que también se quedan mucho tiempo (patrimonio neto y pasivo no corriente). Si una máquina que dura 10 años se paga con una deuda a 3 meses, habrá problemas para devolverla.</p></div>
`},
{ t: "balance", after: "4. La cuenta de resultados", html: String.raw`
<h3 class="visual-h">Esquema: la cascada de márgenes</h3>
<div class="blocks">
<div class="bk" style="border-left:6px solid #137f58"><b>Ventas</b><small>uf vendidas × precio</small></div>
<div class="bk" style="margin-left:24px;border-left:6px solid #d2541b"><b>− Gastos de explotación</b><small>CMV, personal, TSE, alquileres, tributos, amortización, ± resultados por venta de inmovilizado</small></div>
<div class="bk" style="border-left:6px solid var(--c)"><b>= BAII (resultado de explotación)</b><small>Lo que genera la actividad, sin tener en cuenta cómo se financia.</small></div>
<div class="bk" style="margin-left:24px;border-left:6px solid #d2541b"><b>± Resultado financiero</b><small>Intereses pagados (préstamos, pólizas) e ingresos de inversiones financieras.</small></div>
<div class="bk" style="border-left:6px solid var(--c)"><b>= BAI</b><small>Beneficio antes de impuestos: la base del impuesto de sociedades.</small></div>
<div class="bk" style="margin-left:24px;border-left:6px solid #d2541b"><b>− Impuesto de sociedades</b><small>% del BAI (si es positivo).</small></div>
<div class="bk" style="border-left:6px solid #137f58"><b>= Beneficio neto</b><small>Lo que queda para los socios: dividendos o reservas.</small></div>
</div>
`},

{ t: "amortizacion", after: "2. La amortización", html: String.raw`
<h3 class="visual-h">Visualízalo: el valor contable se va consumiendo</h3>
<p>Con el método lineal, la amortización acumulada (naranja) crece cada año lo mismo y el valor neto contable (azul) baja en línea recta, desde el valor de adquisición hasta el valor residual al final de la vida útil. A partir de ahí el elemento está <strong>totalmente amortizado</strong>: ya no hay dotación aunque se siga usando.</p>
<div class="plot" data-x="0,12" data-y="0,6000" data-f="x<=n?I-(I-R)/n*x:R; x<=n?(I-R)/n*x:I-R" data-l="VNC = IMB − AA; amortización acumulada (AA)" data-p="I=5000,1000,6000,100; R=500,0,2000,100; n=5,1,10,1" data-info="dotación anual=(I-R)/n; porcentaje anual sobre la base=100/n" data-cap="Eje horizontal: años desde la compra. Si se vende el elemento, el resultado es precio − VNC en ese momento."></div>
`},

{ t: "inventarios", after: "3. Métodos de valoración", html: String.raw`
<h3 class="visual-h">Esquema: qué unidades "salen" con cada método</h3>
<p>Ejemplo del apartado: 50 uf antiguas a 9 um y 50 uf nuevas a 12 um; se venden 70.</p>
<div class="blocks" style="grid-template-columns:repeat(3,1fr)">
<div class="bk"><b>FIFO</b><small>Salen las 50 antiguas y 20 nuevas.</small>
<div style="margin-top:8px;display:flex;flex-direction:column;gap:3px">
<div style="background:#2f62d8;opacity:.35;height:22px;border-radius:4px;text-align:center;font-size:12px">50 a 9 → vendidas</div>
<div style="background:#2f62d8;opacity:.35;height:9px;border-radius:4px"></div>
<div style="border:2px dashed #2f62d8;height:14px;border-radius:4px;font-size:11px;text-align:center">quedan 30 a 12</div></div>
<small>CMV 690 · Existencias 360</small></div>
<div class="bk"><b>LIFO</b><small>Salen las 50 nuevas y 20 antiguas.</small>
<div style="margin-top:8px;display:flex;flex-direction:column;gap:3px">
<div style="background:#d2541b;opacity:.35;height:22px;border-radius:4px;text-align:center;font-size:12px">50 a 12 → vendidas</div>
<div style="background:#d2541b;opacity:.35;height:9px;border-radius:4px"></div>
<div style="border:2px dashed #d2541b;height:14px;border-radius:4px;font-size:11px;text-align:center">quedan 30 a 9</div></div>
<small>CMV 780 · Existencias 270</small></div>
<div class="bk"><b>PMP</b><small>Todas valen la media: 10,5.</small>
<div style="margin-top:8px;display:flex;flex-direction:column;gap:3px">
<div style="background:#137f58;opacity:.35;height:31px;border-radius:4px;text-align:center;font-size:12px">70 a 10,5 → vendidas</div>
<div style="border:2px dashed #137f58;height:14px;border-radius:4px;font-size:11px;text-align:center">quedan 30 a 10,5</div></div>
<small>CMV 735 · Existencias 315</small></div>
</div>
<p>Los tres métodos reparten el mismo total (450 + 600 = 1.050 um) entre CMV y existencias finales: lo que uno pone en la cuenta de resultados lo quita del balance. Con precios al alza, FIFO da el mayor beneficio y LIFO el menor.</p>
`},

{ t: "diferidos", after: "1. Cobros y pagos diferidos", html: String.raw`
<h3 class="visual-h">Esquema: por qué queda pendiente d/360</h3>
<figure class="dg"><svg viewBox="0 0 560 170" width="560" role="img" aria-label="Línea temporal de ventas y cobros a 90 días">
<line x1="30" y1="60" x2="530" y2="60" class="ink"/>
<line x1="30" y1="50" x2="30" y2="70" class="ink"/><text x="20" y="40" class="s">1 enero</text>
<line x1="410" y1="40" x2="410" y2="150" class="dash"/><text x="380" y="34" class="s">31 dic</text>
<rect x="30" y="66" width="380" height="20" class="f1"/><text x="140" y="81" class="s">ventas de todo el año (repartidas)</text>
<rect x="120" y="100" width="290" height="20" class="f3"/><text x="170" y="115" class="s">cobros de este año</text>
<rect x="410" y="100" width="90" height="20" class="f2"/><text x="414" y="140" class="t2">pendiente (90 días)</text>
<text x="40" y="115" class="s">90 días</text>
</svg><figcaption>Las ventas de los últimos 90 días del año se cobran ya en el año siguiente: a 31/12 quedan pendientes 90/360 = 25 % de las ventas anuales (el saldo de Clientes).</figcaption></figure>
<div class="plot" data-x="0,180" data-y="0,100" data-f="100*x/360" data-l="% de las ventas pendiente a 31/12" data-p="d=60,0,180,1" data-pts="d|100*d/360" data-info="pendiente (%)=100*d/360; ventas de 4.800 um: saldo de clientes=4800*d/360" data-cap="Eje horizontal: plazo de cobro en días."></div>
`},
{ t: "diferidos", after: "3. Fondo de maniobra", html: String.raw`
<h3 class="visual-h">Esquema: el fondo de maniobra en el balance</h3>
<div class="bal">
<div><div class="cell hd">Activo</div><div class="cell anc" style="min-height:90px"><b>Activo no corriente</b></div><div class="cell ac" style="min-height:120px"><b>Activo corriente</b><small>se convierte en dinero a corto plazo</small></div></div>
<div><div class="cell hd">PN + Pasivo</div><div class="cell pn" style="min-height:130px"><b>Recursos permanentes</b><small>PN + pasivo no corriente. La parte que "sobra" tras financiar el activo no corriente es el <strong>fondo de maniobra</strong>.</small></div><div class="cell pc" style="min-height:80px"><b>Pasivo corriente</b><small>hay que pagarlo a corto plazo</small></div></div>
</div>
<p>FM = AC − PC. Si el activo corriente "sobresale" por encima del pasivo corriente, hay un colchón: aunque todo lo que se debe a corto venciera hoy, lo que se cobrará a corto bastaría para pagarlo.</p>
`},

{ t: "ratios", after: "5. Rentabilidad", html: String.raw`
<h3 class="visual-h">Visualízalo: el efecto apalancamiento</h3>
<p>Si la empresa rinde una rentabilidad económica ROA sobre sus activos y paga un interés $i$ por la deuda, la rentabilidad de los socios (sin impuestos) es</p>
$$\text{ROE}=\text{ROA}+(\text{ROA}-i)\cdot\frac{\text{Deuda}}{\text{PN}}.$$
<p>Si ROA &gt; $i$, cada euro de deuda "gana más de lo que cuesta" y la ROE crece al endeudarse (apalancamiento positivo). Si ROA &lt; $i$, endeudarse hunde la ROE. Mueve los deslizadores.</p>
<div class="plot" data-x="0,4" data-y="-20,40" data-f="ROA+(ROA-i)*x; ROA" data-l="ROE (%); ROA (%)" data-p="ROA=10,0,20,0.5; i=5,0,15,0.5" data-info="ROE con deuda = PN (%)=2*ROA-i; efecto=ROA>i?1:(ROA==i?0:-1)" data-cap="Eje horizontal: endeudamiento Deuda/PN. Efecto: 1 = positivo, 0 = neutro, −1 = negativo."></div>
`},

{ t: "costes", after: "4. Punto de equilibrio", html: String.raw`
<h3 class="visual-h">Visualízalo: el gráfico del punto muerto</h3>
<p>La recta de <strong>ingresos</strong> ($p_v\cdot x$) sale del origen; la de <strong>costes totales</strong> ($CF+c_v\cdot x$) empieza en la altura de los costes fijos. Donde se cortan está el punto muerto: a la izquierda hay pérdidas y a la derecha, beneficios (zona sombreada). Mueve el precio, el coste variable, los fijos y las ventas previstas.</p>
<div class="plot" data-x="0,8000" data-y="0,320000" data-f="pv*x; CF+cv*x; CF" data-l="ingresos; costes totales; costes fijos" data-p="pv=45,20,80,1; cv=27,5,60,1; CF=54000,10000,120000,1000; Q=5000,0,8000,100" data-fill="0|CF/(pv-cv)|8000|1" data-pts="CF/(pv-cv)|pv*CF/(pv-cv);Q|pv*Q" data-ptl="punto muerto;ventas previstas" data-info="punto muerto (u)=pv>cv?CF/(pv-cv):Infinity; resultado con Q=(pv-cv)*Q-CF; margen de seguridad (%)=100*(Q-CF/(pv-cv))/Q" data-cap="Valores iniciales: el problema de las mochilas del simulacro 2 (punto muerto en 3.000 unidades)."></div>
<div class="tip"><span class="label">Lectura del gráfico</span><p>La pendiente de la recta de ingresos es el precio; la de costes, el coste variable unitario. Cuanto más se separan las pendientes (mayor margen de contribución), antes se cortan: subir el precio o bajar el coste variable acerca el punto muerto. Subir los costes fijos lo aleja.</p></div>
`},

{ t: "economia", after: "1. Conceptos básicos", html: String.raw`
<h3 class="visual-h">Visualízalo: frontera de posibilidades de producción</h3>
<p>Con unos recursos dados, la economía puede producir las combinaciones de dos bienes que quedan dentro de la curva. Mueve el punto: sobre la curva es <strong>eficiente</strong>; dentro, <strong>ineficiente</strong> (hay recursos parados); fuera, <strong>inalcanzable</strong>. El deslizador "crecimiento" desplaza la frontera hacia fuera (más recursos o mejor tecnología).</p>
<div class="plot" data-x="0,14" data-y="0,12" data-f="x<=10*g?8*g*sqrt(1-(x/(10*g))^2):NaN" data-l="frontera de posibilidades" data-p="g=1,0.6,1.3,0.01; X=6,0,13,0.1; Y=5,0,11,0.1" data-pts="X|Y" data-ptl="(X, Y)" data-info="producción máxima de Y con ese X=X<=10*g?8*g*sqrt(1-(X/(10*g))^2):0; estado (1 inalcanzable, 0 sobre la curva, −1 ineficiente)=X>10*g?1:(abs(Y-8*g*sqrt(1-(X/(10*g))^2))<0.15?0:(Y>8*g*sqrt(1-(X/(10*g))^2)?1:-1))" data-cap="Eje horizontal: bien X. Eje vertical: bien Y. La curvatura refleja un coste de oportunidad creciente."></div>
<p>El <strong>coste de oportunidad</strong> de producir una unidad más de X es lo que hay que dejar de producir de Y: la pendiente de la curva. Como la curva se inclina cada vez más, cada unidad adicional de X cuesta más unidades de Y.</p>
`},
{ t: "economia", after: "2. Microeconomía", html: String.raw`
<h3 class="visual-h">Visualízalo: oferta, demanda y equilibrio</h3>
<p>La demanda (azul) baja con el precio y la oferta (naranja) sube. El equilibrio es el corte. Mueve el desplazamiento de la demanda (por ejemplo, porque sube la renta y es un bien normal) o el de la oferta (por ejemplo, porque baja el coste de los factores) y observa cómo cambian el precio y la cantidad.</p>
<div class="plot" data-x="0,120" data-y="0,100" data-f="(D-x)/1.2; (x-S)/0.8; pm" data-l="demanda; oferta; precio máximo" data-p="D=100,40,130,1; S=10,-30,50,1; pm=30,0,100,1" data-pts="(0.8*D+1.2*S)/2|(D-(0.8*D+1.2*S)/2)/1.2" data-ptl="equilibrio" data-info="cantidad de equilibrio=(0.8*D+1.2*S)/2; precio de equilibrio=(D-(0.8*D+1.2*S)/2)/1.2; exceso de demanda con el precio máximo=max(0,(D-1.2*pm)-(S+0.8*pm))" data-cap="Eje horizontal: cantidad. Eje vertical: precio. Si el precio máximo queda por debajo del equilibrio, se demanda más de lo que se ofrece: escasez."></div>
`},
{ t: "economia", after: "3. Macroeconomía", html: String.raw`
<h3 class="visual-h">Visualízalo: el efecto multiplicador</h3>
<p>Si el Estado gasta 1 € más, ese euro es renta para alguien, que gasta una fracción $c$ (la <strong>propensión marginal al consumo</strong>), que a su vez es renta de otro, que gasta $c^2$… El efecto total es la serie geométrica $1+c+c^2+\dots=\frac1{1-c}$. Las barras (sumas parciales) se acercan al multiplicador.</p>
<div class="plot" data-x="0,20" data-y="0,11" data-f="H.geo(c,floor(x)); 1/(1-c)" data-l="efecto acumulado tras n rondas; multiplicador 1/(1 − c)" data-p="c=0.8,0.1,0.95,0.01" data-n="1500" data-info="multiplicador=1/(1-c); aumento del PIB si el gasto sube 100 M€=100/(1-c)" data-cap="Eje horizontal: rondas de gasto. Con c = 0,8, 100 M€ de gasto público acaban aumentando la renta en 500 M€ (modelo simplificado, sin impuestos ni importaciones)."></div>
<h3 class="visual-h">Visualízalo: el ciclo económico</h3>
<div class="plot" data-x="0,20" data-y="60,160" data-f="80+3*x; 80+3*x+A*sin(2*pi*x/T)" data-l="tendencia (crecimiento a largo plazo); PIB real" data-p="A=8,0,20,1; T=7,3,12,0.5" data-cap="Sobre la tendencia, la economía alterna expansiones (por encima, hacia el auge) y contracciones (recesión, hasta la depresión o «valle»). Las políticas anticíclicas intentan reducir la amplitud A."></div>
`}
];
