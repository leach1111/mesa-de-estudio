EXAMS.empresa = [

/* ==================================================================== */
{ title: "Simulacro 1: primer parcial (test)",
  sub: "Empresa · Contabilidad previsional: balance, cuenta de resultados y tesorería",
  desc: "Caso completo con PMP, venta y compra de inmovilizado a mitad de año, cobros y pagos aplazados e impuesto de sociedades. 10 preguntas tipo test.",
  dur: "1 h 15 min", pts: "10 puntos (acierto +1, error −0,25, en blanco 0)",
  instr: "<p>Marca una sola respuesta por pregunta en la hoja de respuestas. Los importes negativos de gastos y pagos se indican con signo menos. Año comercial de 360 días; operaciones repartidas uniformemente.</p>",
  exam: String.raw`
<h3>Hoja de respuestas</h3>
<table class="answer-grid"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><th>Respuesta</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

<h2>Enunciado</h2>
<p>La empresa RODA SA presenta el siguiente balance previsional a 31/12/X1 (en um):</p>
<table class="keep">
<tr><th>Activo</th><th class="n"></th><th>Patrimonio neto y pasivo</th><th class="n"></th></tr>
<tr><td>IMB1 (maquinaria)</td><td class="n">4.000</td><td>Capital social</td><td class="n">4.000</td></tr>
<tr><td>(AA1)</td><td class="n">(2.400)</td><td>Reservas</td><td class="n">300</td></tr>
<tr><td>IMB2 (furgoneta)</td><td class="n">1.500</td><td>Beneficio neto X1</td><td class="n">400</td></tr>
<tr><td>(AA2)</td><td class="n">(300)</td><td>Proveedores</td><td class="n">300</td></tr>
<tr><td>Existencias (50 uf a 12 um/uf)</td><td class="n">600</td><td>Acreedores</td><td class="n">200</td></tr>
<tr><td>Clientes</td><td class="n">800</td><td>HP acreedora</td><td class="n">200</td></tr>
<tr><td>Tesorería</td><td class="n">1.200</td><td></td><td></td></tr>
<tr><th>Total</th><th class="n">5.400</th><th>Total</th><th class="n">5.400</th></tr>
</table>
<p>Para el ejercicio X2 se prevén las siguientes operaciones:</p>
<ul>
<li>Ventas de 120 uf a 40 um/uf, con cobro a 60 días.</li>
<li>Compras de 100 uf a 15 um/uf, con pago a 90 días. Las existencias se valoran por el PMP.</li>
<li>Gastos de personal: 900 um al contado. Gastos de TSE: 600 um, con pago a 30 días.</li>
<li>El IMB1 se amortiza al 20 % anual sin valor residual. El IMB2 se amortiza en 5 años sin valor residual.</li>
<li>El 1 de julio se vende el IMB2 por 1.000 um, cobradas al contado.</li>
<li>El 1 de octubre se compra una furgoneta nueva (IMB3) por 1.800 um, con una vida útil de 6 años y sin valor residual. Se paga un tercio al contado y el resto en X3.</li>
<li>El beneficio neto de X1 se distribuye: 40 % dividendos y 60 % reservas.</li>
<li>El impuesto de sociedades de X2 es el 20 % del BAI y se pagará en X3. Todas las deudas y derechos a corto plazo de X1 se liquidan en X2.</li>
</ul>

<h2>Preguntas</h2>
<p><strong>1.</strong> El coste de las mercaderías vendidas (CMV) de X2 es:</p>
<ul class="mcq"><li>a) −1.500</li><li>b) −1.680</li><li>c) −1.800</li><li>d) −1.440</li></ul>
<p><strong>2.</strong> La dotación total a la amortización de X2 es:</p>
<ul class="mcq"><li>a) −1.100</li><li>b) −1.250</li><li>c) −1.025</li><li>d) −875</li></ul>
<p><strong>3.</strong> El resultado de la venta del IMB2 es:</p>
<ul class="mcq"><li>a) −50</li><li>b) −200</li><li>c) +100</li><li>d) −500</li></ul>
<p><strong>4.</strong> El beneficio antes de impuestos (BAI) de X2 es:</p>
<ul class="mcq"><li>a) 395</li><li>b) 545</li><li>c) 645</li><li>d) 595</li></ul>
<p><strong>5.</strong> El cobro de las ventas de X2 durante X2 es:</p>
<ul class="mcq"><li>a) 4.800</li><li>b) 3.600</li><li>c) 4.000</li><li>d) 4.400</li></ul>
<p><strong>6.</strong> El total de entradas de tesorería de X2 es:</p>
<ul class="mcq"><li>a) 5.800</li><li>b) 4.800</li><li>c) 6.600</li><li>d) 5.000</li></ul>
<p><strong>7.</strong> El total de salidas de tesorería de X2 es:</p>
<ul class="mcq"><li>a) −3.875</li><li>b) −4.035</li><li>c) −4.410</li><li>d) −4.635</li></ul>
<p><strong>8.</strong> La tesorería a 31/12/X2 es:</p>
<ul class="mcq"><li>a) 2.365</li><li>b) 3.565</li><li>c) 2.965</li><li>d) 2.165</li></ul>
<p><strong>9.</strong> El patrimonio neto total a 31/12/X2 es:</p>
<ul class="mcq"><li>a) 5.136</li><li>b) 4.840</li><li>c) 4.736</li><li>d) 4.976</li></ul>
<p><strong>10.</strong> El pasivo corriente total a 31/12/X2 es:</p>
<ul class="mcq"><li>a) 1.734</li><li>b) 1.625</li><li>c) 534</li><li>d) 1.842</li></ul>
`,
  sol: String.raw`
<table class="answer-grid"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><th>Correcta</th><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>d</td><td>a</td></tr></table>

<h2>Cuenta de resultados X2</h2>
<div class="ans">
<p><strong>1. CMV.</strong> PMP $=\frac{600+1.500}{50+100}=14$ um/uf. CMV $=120\cdot14=$ <span class="res">−1.680 (b)</span>. Existencias finales: $30\cdot14=420$.</p>
<p><strong>2. Amortizaciones.</strong> IMB1: $4.000\cdot20\%=800$ (AA pasa a 3.200, sin superar el tope). IMB2: $\frac{1.500}5=300$/año, 6 meses → 150. IMB3: $\frac{1.800}6=300$/año, 3 meses → 75. Total <span class="res">−1.025 (c)</span>.</p>
<p><strong>3. Venta del IMB2.</strong> VNC $=1.500-300-150=1.050$. Resultado $=1.000-1.050=$ <span class="res">−50 (a)</span>. (−200 sale si se olvida la amortización de X2; −500 si se olvida toda la AA.)</p>
<table>
<tr><td>Ventas ($120\cdot40$)</td><td class="n">4.800</td></tr>
<tr><td>CMV</td><td class="n">−1.680</td></tr>
<tr><td>Personal</td><td class="n">−900</td></tr>
<tr><td>TSE</td><td class="n">−600</td></tr>
<tr><td>Amortizaciones</td><td class="n">−1.025</td></tr>
<tr><td>Resultado venta IMB2</td><td class="n">−50</td></tr>
<tr><th>BAI</th><th class="n">545</th></tr>
<tr><td>IS (20 %)</td><td class="n">−109</td></tr>
<tr><th>BN</th><th class="n">436</th></tr>
</table>
<p><strong>4.</strong> <span class="res">BAI = 545 (b)</span></p>
</div>

<h2>Estado de tesorería X2</h2>
<div class="ans">
<p><strong>5.</strong> Cobro de ventas: $4.800\cdot\frac{300}{360}=$ <span class="res">4.000 (c)</span>. Quedan 800 en Clientes.</p>
<p><strong>6. Entradas:</strong> clientes X1 800 + ventas 4.000 + venta IMB2 1.000 = <span class="res">5.800 (a)</span>.</p>
<p><strong>7. Salidas:</strong> proveedores X1 300, acreedores X1 200, HP X1 200, compras $1.500\cdot\frac{270}{360}=1.125$, personal 900, TSE $600\cdot\frac{330}{360}=550$, IMB3 600, dividendos $40\%\cdot400=160$. Total <span class="res">−4.035 (b)</span>.</p>
<p><strong>8.</strong> Tesorería final $=1.200+5.800-4.035=$ <span class="res">2.965 (c)</span>.</p>
</div>

<h2>Balance a 31/12/X2</h2>
<div class="ans">
<table>
<tr><th>Activo</th><th class="n"></th><th>PN y pasivo</th><th class="n"></th></tr>
<tr><td>IMB1</td><td class="n">4.000</td><td>Capital social</td><td class="n">4.000</td></tr>
<tr><td>(AA1)</td><td class="n">(3.200)</td><td>Reservas ($300+240$)</td><td class="n">540</td></tr>
<tr><td>IMB3</td><td class="n">1.800</td><td>BN X2</td><td class="n">436</td></tr>
<tr><td>(AA3)</td><td class="n">(75)</td><td>Proveedores ($1.500\cdot\frac{90}{360}$)</td><td class="n">375</td></tr>
<tr><td>Existencias</td><td class="n">420</td><td>Acreedores ($600\cdot\frac{30}{360}$)</td><td class="n">50</td></tr>
<tr><td>Clientes</td><td class="n">800</td><td>Proveedores de inmovilizado</td><td class="n">1.200</td></tr>
<tr><td>Tesorería</td><td class="n">2.965</td><td>HP acreedora (IS)</td><td class="n">109</td></tr>
<tr><th>Total</th><th class="n">6.710</th><th>Total</th><th class="n">6.710</th></tr>
</table>
<p><strong>9.</strong> PN $=4.000+540+436=$ <span class="res">4.976 (d)</span>.</p>
<p><strong>10.</strong> Pasivo corriente $=375+50+1.200+109=$ <span class="res">1.734 (a)</span>.</p>
<p class="crit">El balance cuadra: 6.710 = 6.710.</p>
</div>
`},

/* ==================================================================== */
{ title: "Simulacro 2: segundo parcial",
  sub: "Empresa · Economía (verdadero/falso) y contabilidad de costes (Direct-Cost)",
  desc: "20 afirmaciones de economía y dos problemas: punto muerto con pedido especial y planificación con un recurso escaso.",
  dur: "1 h 30 min", pts: "10 puntos (parte 1: 5 · parte 2: 5)",
  instr: "<p><strong>Parte 1:</strong> cada respuesta correcta suma 0,25; cada error resta 0,125; en blanco, 0. <strong>Parte 2:</strong> justifica los cálculos.</p>",
  exam: String.raw`
<h2>Parte 1: Verdadero o falso <span class="pts">(5 puntos)</span></h2>
<table class="vf-table">
<tr><th>n.º</th><th>Afirmación</th><th>V / F</th></tr>
<tr><td>1</td><td>El coste de oportunidad de una decisión es el valor de la mejor alternativa a la que se renuncia.</td><td class="box"></td></tr>
<tr><td>2</td><td>Un punto situado por encima de la frontera de posibilidades de producción es alcanzable si se emplean todos los recursos.</td><td class="box"></td></tr>
<tr><td>3</td><td>En una economía planificada, los precios los fija principalmente el mercado.</td><td class="box"></td></tr>
<tr><td>4</td><td>Si aumenta la renta de los consumidores, la curva de demanda de un bien normal se desplaza hacia la derecha.</td><td class="box"></td></tr>
<tr><td>5</td><td>Una variación del precio del propio bien desplaza su curva de demanda.</td><td class="box"></td></tr>
<tr><td>6</td><td>Si sube mucho el precio de la gasolina, la demanda de coches de gasolina tiende a disminuir.</td><td class="box"></td></tr>
<tr><td>7</td><td>Un precio máximo fijado por debajo del precio de equilibrio provoca un exceso de demanda.</td><td class="box"></td></tr>
<tr><td>8</td><td>Si la demanda de un bien es inelástica, una subida de su precio reduce los ingresos totales de los vendedores.</td><td class="box"></td></tr>
<tr><td>9</td><td>En competencia perfecta, cada empresa puede influir significativamente en el precio de mercado.</td><td class="box"></td></tr>
<tr><td>10</td><td>Un monopolio tiende a producir menos y a un precio más alto que un mercado competitivo.</td><td class="box"></td></tr>
<tr><td>11</td><td>El PIB a precios constantes permite comparar la producción real de años distintos.</td><td class="box"></td></tr>
<tr><td>12</td><td>El valor añadido de una empresa es el valor de sus ventas menos el de los bienes intermedios que utiliza.</td><td class="box"></td></tr>
<tr><td>13</td><td>Las rentas que obtienen en España las empresas extranjeras forman parte del PNB español.</td><td class="box"></td></tr>
<tr><td>14</td><td>La tasa de desempleo se calcula sobre el total de la población del país.</td><td class="box"></td></tr>
<tr><td>15</td><td>Una política fiscal restrictiva consiste en aumentar el gasto público.</td><td class="box"></td></tr>
<tr><td>16</td><td>Según Keynes, en una recesión el Estado debería aumentar la demanda agregada.</td><td class="box"></td></tr>
<tr><td>17</td><td>Una de las funciones del dinero es servir como depósito de valor.</td><td class="box"></td></tr>
<tr><td>18</td><td>Cuando se devuelve un préstamo bancario, se destruye dinero.</td><td class="box"></td></tr>
<tr><td>19</td><td>La balanza de pagos solo registra las exportaciones e importaciones de bienes.</td><td class="box"></td></tr>
<tr><td>20</td><td>Una depreciación del euro tiende a favorecer las exportaciones de la zona euro.</td><td class="box"></td></tr>
</table>

<h2>Parte 2: Problemas <span class="pts">(5 puntos)</span></h2>
<h3>Problema 1 (2,5 puntos)</h3>
<p>Una empresa fabrica mochilas que vende a 45 € la unidad. Cada mochila necesita 18 € de materiales y 4,50 € de montaje (se paga por pieza a un taller externo), y el comercial cobra una comisión del 10 % sobre el precio de venta. Los costes fijos son de 54.000 € anuales.</p>
<ol class="parts">
<li>Calcula el margen de contribución unitario y el punto muerto en unidades y en euros.</li>
<li>¿Cuántas mochilas hay que vender para obtener un beneficio de 18.000 €?</li>
<li>Si se prevé vender 5.000 mochilas, calcula el resultado y el margen de seguridad.</li>
<li>Un cliente extranjero pide 500 mochilas a 35 € la unidad, sin comisión y con un coste de envío de 1.000 €. Hay capacidad libre. ¿Se debe aceptar? Justifícalo.</li>
</ol>
<h3>Problema 2 (2,5 puntos)</h3>
<p>Una empresa fabrica tres productos que pasan por la misma máquina, disponible 5.500 horas al año. Costes fijos: 30.000 €.</p>
<table>
<tr><th>Producto</th><th class="n">Precio (€/u)</th><th class="n">Coste variable (€/u)</th><th class="n">Horas/u</th><th class="n">Demanda máxima (u)</th></tr>
<tr><td>X</td><td class="n">60</td><td class="n">36</td><td class="n">3</td><td class="n">1.000</td></tr>
<tr><td>Y</td><td class="n">40</td><td class="n">28</td><td class="n">1</td><td class="n">2.500</td></tr>
<tr><td>Z</td><td class="n">80</td><td class="n">50</td><td class="n">5</td><td class="n">600</td></tr>
</table>
<ol class="parts">
<li>¿Cuántas unidades de cada producto conviene fabricar? Calcula el resultado.</li>
<li>¿Qué resultado se obtendría si se diera prioridad a los productos con mayor margen unitario? Explica la diferencia.</li>
</ol>
`,
  sol: String.raw`
<h2>Parte 1</h2>
<div class="ans">
<table class="vf-table">
<tr><th>n.º</th><th>Sol.</th><th>Justificación</th></tr>
<tr><td>1</td><td>V</td><td>Es la definición de coste de oportunidad.</td></tr>
<tr><td>2</td><td>F</td><td>Por encima de la frontera la producción es inalcanzable con los recursos y la tecnología actuales.</td></tr>
<tr><td>3</td><td>F</td><td>En la economía planificada decide el Estado mediante un plan central.</td></tr>
<tr><td>4</td><td>V</td><td>Es la definición de bien normal.</td></tr>
<tr><td>5</td><td>F</td><td>Produce un movimiento a lo largo de la curva; la desplazan otros factores (renta, gustos, otros precios).</td></tr>
<tr><td>6</td><td>V</td><td>Coche de gasolina y gasolina son bienes complementarios.</td></tr>
<tr><td>7</td><td>V</td><td>A ese precio se demanda más de lo que se ofrece: escasez.</td></tr>
<tr><td>8</td><td>F</td><td>Si es inelástica, la cantidad baja proporcionalmente menos que lo que sube el precio: los ingresos aumentan.</td></tr>
<tr><td>9</td><td>F</td><td>Cada empresa es muy pequeña respecto al mercado: es precio-aceptante.</td></tr>
<tr><td>10</td><td>V</td><td>Al no tener competencia, restringe la producción para cobrar más.</td></tr>
<tr><td>11</td><td>V</td><td>Usa los precios de un año base y elimina el efecto de la inflación.</td></tr>
<tr><td>12</td><td>V</td><td>Es la definición de valor añadido.</td></tr>
<tr><td>13</td><td>F</td><td>Forman parte del PIB español (se producen dentro), pero se restan para obtener el PNB: $\text{PNB}=\text{PIB}-\text{RRE}+\text{RRN}$.</td></tr>
<tr><td>14</td><td>F</td><td>Se calcula sobre la población activa.</td></tr>
<tr><td>15</td><td>F</td><td>Restrictiva es reducir el gasto o subir impuestos; aumentar el gasto es expansiva.</td></tr>
<tr><td>16</td><td>V</td><td>Es la tesis keynesiana: intervenir para estimular la demanda.</td></tr>
<tr><td>17</td><td>V</td><td>Medio de cambio, unidad de cuenta y depósito de valor.</td></tr>
<tr><td>18</td><td>V</td><td>El dinero bancario creado con el préstamo desaparece al devolverlo.</td></tr>
<tr><td>19</td><td>F</td><td>Registra todas las transacciones con el exterior: bienes, servicios, rentas, transferencias y capitales.</td></tr>
<tr><td>20</td><td>V</td><td>Los productos europeos resultan más baratos en moneda extranjera.</td></tr>
</table>
</div>

<h2>Parte 2</h2>
<h3>Problema 1</h3>
<div class="ans">
<p>(a) Coste variable unitario: $18+4{,}50+0{,}10\cdot45=27$ €. Margen de contribución: $45-27=18$ €/u.</p>
<p class="res">Punto muerto: $\frac{54.000}{18}=3.000$ u, es decir $3.000\cdot45=135.000$ €</p>
<p>(b) $\frac{54.000+18.000}{18}=$ <span class="res">4.000 mochilas</span></p>
<p>(c) Resultado $=5.000\cdot18-54.000=36.000$ €. Margen de seguridad $=\frac{5.000-3.000}{5.000}=40\%$ (las ventas pueden caer un 40 % antes de tener pérdidas).</p>
<p>(d) Sin comisión, el coste variable es $22{,}50$ €. Efecto incremental: $500\cdot(35-22{,}50)-1.000=6.250-1.000$.</p>
<p class="res">+5.250 €: se acepta (los costes fijos no cambian y hay capacidad)</p>
</div>
<h3>Problema 2</h3>
<div class="ans">
<p>(a) Recurso escaso: se ordena por <strong>margen por hora</strong>.</p>
<table>
<tr><th>Producto</th><th class="n">mc (€/u)</th><th class="n">mc por hora</th><th>Orden</th></tr>
<tr><td>X</td><td class="n">24</td><td class="n">8</td><td>2.º</td></tr>
<tr><td>Y</td><td class="n">12</td><td class="n">12</td><td>1.º</td></tr>
<tr><td>Z</td><td class="n">30</td><td class="n">6</td><td>3.º</td></tr>
</table>
<p>Y: 2.500 u × 1 h = 2.500 h (quedan 3.000 h). X: 1.000 u × 3 h = 3.000 h (quedan 0). Z: 0 u.</p>
<p class="res">Plan: 2.500 Y, 1.000 X, 0 Z. Resultado $=2.500\cdot12+1.000\cdot24-30.000=24.000$ €</p>
<p>(b) Priorizando por margen unitario (Z, X, Y): Z 600 u (3.000 h); quedan 2.500 h → X 833 u (2.499 h); Y 0.</p>
<p>Margen $=600\cdot30+833\cdot24=37.992$ €; resultado $\approx7.992$ €.</p>
<p>Se pierden unos 16.000 €: con horas limitadas importa lo que aporta cada <strong>hora</strong> de máquina, no cada unidad. Z deja mucho margen por unidad pero consume 5 horas.</p>
</div>
`},

/* ==================================================================== */
{ title: "Simulacro 3: examen final",
  sub: "Empresa · Caso previsional con póliza, verdadero/falso y Full-Cost frente a Direct-Cost",
  desc: "Caso con pérdidas y falta de tesorería (6 preguntas test), 12 afirmaciones de contabilidad y costes, y decisión de eliminar un producto.",
  dur: "2 h", pts: "10 puntos (3 + 3 + 4)",
  instr: "<p><strong>Parte 1:</strong> test, acierto +0,5, error −0,125. <strong>Parte 2:</strong> acierto +0,25, error −0,125. <strong>Parte 3:</strong> justifica los cálculos. Año comercial de 360 días.</p>",
  exam: String.raw`
<h2>Parte 1: Caso de contabilidad previsional <span class="pts">(3 puntos)</span></h2>
<p>Balance de MONTSE SL a 31/12/Z1 (um):</p>
<table class="keep">
<tr><th>Activo</th><th class="n"></th><th>Patrimonio neto y pasivo</th><th class="n"></th></tr>
<tr><td>IMB</td><td class="n">6.000</td><td>Capital social</td><td class="n">5.000</td></tr>
<tr><td>(AA)</td><td class="n">(1.800)</td><td>Reservas</td><td class="n">400</td></tr>
<tr><td>Clientes</td><td class="n">1.500</td><td>Resultado Z1 (BAT)</td><td class="n">200</td></tr>
<tr><td>Tesorería</td><td class="n">300</td><td>Proveedores</td><td class="n">400</td></tr>
<tr><th>Total</th><th class="n">6.000</th><th>Total</th><th class="n">6.000</th></tr>
</table>
<p>Operaciones previstas para Z2:</p>
<ul>
<li>Compra de 200 uf a 10 um/uf, con pago a 90 días. Venta de 180 uf a 25 um/uf, con cobro a 90 días.</li>
<li>Gastos de personal: 1.800 um al contado. TSE: 900 um, con pago a 60 días.</li>
<li>Amortización del IMB: 15 % anual sin valor residual.</li>
<li>El resultado de Z1 se distribuye: 25 % impuesto de sociedades, 50 % dividendos y 25 % reservas.</li>
<li>A final de año se compra una máquina de 2.075 um al contado (empieza a amortizarse en Z3).</li>
<li>La tesorería no puede ser negativa. Si hace falta, se dispone de una póliza de crédito cuyo interés (20 % del importe dispuesto) se paga en Z2 con la propia póliza.</li>
<li>Si hay beneficios, el IS de Z2 es el 25 %.</li>
</ul>
<p><strong>1.</strong> El resultado de explotación (BAII) de Z2 es:</p>
<ul class="mcq"><li>a) −525</li><li>b) −900</li><li>c) 600</li><li>d) −1.275</li></ul>
<p><strong>2.</strong> El importe dispuesto de la póliza es:</p>
<ul class="mcq"><li>a) 1.500</li><li>b) 1.800</li><li>c) 1.875</li><li>d) 2.000</li></ul>
<p><strong>3.</strong> El gasto financiero de Z2 es:</p>
<ul class="mcq"><li>a) −375</li><li>b) −300</li><li>c) −187,5</li><li>d) 0</li></ul>
<p><strong>4.</strong> El resultado del ejercicio Z2 es:</p>
<ul class="mcq"><li>a) −900</li><li>b) −1.020</li><li>c) −956,25</li><li>d) −1.275</li></ul>
<p><strong>5.</strong> El patrimonio neto a 31/12/Z2 es:</p>
<ul class="mcq"><li>a) 4.225</li><li>b) 4.175</li><li>c) 5.450</li><li>d) 3.975</li></ul>
<p><strong>6.</strong> El fondo de maniobra a 31/12/Z2 es:</p>
<ul class="mcq"><li>a) 1.325</li><li>b) −675</li><li>c) 175</li><li>d) −1.200</li></ul>

<h2>Parte 2: Verdadero o falso <span class="pts">(3 puntos)</span></h2>
<table class="vf-table">
<tr><th>n.º</th><th>Afirmación</th><th>V / F</th></tr>
<tr><td>1</td><td>La amortización es un gasto que no supone una salida de tesorería.</td><td class="box"></td></tr>
<tr><td>2</td><td>Un fondo de maniobra negativo indica que el activo corriente es mayor que el pasivo corriente.</td><td class="box"></td></tr>
<tr><td>3</td><td>Las existencias finales aparecen como gasto en la cuenta de resultados.</td><td class="box"></td></tr>
<tr><td>4</td><td>Con precios de compra crecientes, el FIFO da un CMV menor que el LIFO.</td><td class="box"></td></tr>
<tr><td>5</td><td>Los dividendos son un gasto de la cuenta de resultados.</td><td class="box"></td></tr>
<tr><td>6</td><td>La prima de emisión forma parte del patrimonio neto.</td><td class="box"></td></tr>
<tr><td>7</td><td>El IVA repercutido en las ventas es un ingreso de la empresa.</td><td class="box"></td></tr>
<tr><td>8</td><td>Al vender un inmovilizado, el resultado es el precio de venta menos su valor neto contable.</td><td class="box"></td></tr>
<tr><td>9</td><td>El ROE relaciona el beneficio neto con los fondos propios.</td><td class="box"></td></tr>
<tr><td>10</td><td>En el modelo Direct-Cost los costes fijos se reparten entre los productos.</td><td class="box"></td></tr>
<tr><td>11</td><td>A corto plazo, un pedido especial interesa si su precio cubre el coste variable y los costes fijos adicionales que genera.</td><td class="box"></td></tr>
<tr><td>12</td><td>En el punto muerto, el margen de contribución total es igual a los costes fijos.</td><td class="box"></td></tr>
</table>

<h2>Parte 3: Costes <span class="pts">(4 puntos)</span></h2>
<p>Una empresa tiene tres líneas de producto. Los costes fijos comunes (30.000 €) se reparten en proporción a las ventas:</p>
<table>
<tr><th></th><th class="n">A</th><th class="n">B</th><th class="n">C</th></tr>
<tr><td>Ventas</td><td class="n">50.000</td><td class="n">30.000</td><td class="n">20.000</td></tr>
<tr><td>Costes variables</td><td class="n">30.000</td><td class="n">12.000</td><td class="n">16.000</td></tr>
</table>
<ol class="parts">
<li>Elabora la cuenta de resultados Full-Cost por producto.</li>
<li>Elabora la cuenta de resultados Direct-Cost por producto y total.</li>
<li>La dirección propone eliminar C porque "da pérdidas". ¿Qué le pasaría al resultado? ¿Es correcta la propuesta?</li>
<li>¿Cambiaría la decisión si al eliminar C se pudieran ahorrar 5.000 € de costes fijos?</li>
</ol>
`,
  sol: String.raw`
<h2>Parte 1</h2>
<div class="ans">
<table class="answer-grid"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><th>Correcta</th><td>b</td><td>c</td><td>a</td><td>d</td><td>b</td><td>d</td></tr></table>
<p><strong>1.</strong> Ventas $180\cdot25=4.500$; CMV $180\cdot10=1.800$; personal 1.800; TSE 900; amortización $15\%\cdot6.000=900$. BAII $=4.500-1.800-1.800-900-900=$ <span class="res">−900 (b)</span>.</p>
<p><strong>Tesorería antes de la póliza.</strong> Entradas: clientes Z1 1.500 + ventas $4.500\cdot\frac{270}{360}=3.375$ → 4.875. Salidas: proveedores Z1 400, compras $2.000\cdot\frac{270}{360}=1.500$, personal 1.800, TSE $900\cdot\frac{300}{360}=750$, IS Z1 50, dividendos 100, máquina 2.075 → 6.675. Saldo: $300+4.875-6.675=-1.500$.</p>
<p><strong>2.</strong> La póliza debe cubrir el descubierto y su propio interés: $P-0{,}2P=1.500\Rightarrow P=$ <span class="res">1.875 (c)</span>.</p>
<p><strong>3.</strong> Interés $=20\%\cdot1.875=$ <span class="res">−375 (a)</span>.</p>
<p><strong>4.</strong> Resultado $=-900-375=$ <span class="res">−1.275 (d)</span>. Hay pérdidas: no hay IS.</p>
<p><strong>5.</strong> Reservas $=400+25\%\cdot200=450$. PN $=5.000+450-1.275=$ <span class="res">4.175 (b)</span>.</p>
<p><strong>6.</strong> Activo corriente: existencias $20\cdot10=200$ + clientes $4.500\cdot\frac{90}{360}=1.125$ + tesorería 0 = 1.325. Pasivo corriente: proveedores 500 + acreedores 150 + póliza 1.875 = 2.525. FM $=1.325-2.525=$ <span class="res">−1.200 (d)</span>.</p>
<p class="crit">Comprobación del balance: activo $8.075-2.700+1.325=6.700$; PN + pasivo $4.175+2.525=6.700$ ✔.</p>
</div>

<h2>Parte 2</h2>
<div class="ans">
<table class="vf-table">
<tr><th>n.º</th><th>Sol.</th><th>Justificación</th></tr>
<tr><td>1</td><td>V</td><td>Reduce el resultado, pero no es un pago.</td></tr>
<tr><td>2</td><td>F</td><td>Negativo significa que el pasivo corriente supera al activo corriente.</td></tr>
<tr><td>3</td><td>F</td><td>Son activo corriente; solo el CMV es gasto.</td></tr>
<tr><td>4</td><td>V</td><td>FIFO vende primero las unidades antiguas, más baratas.</td></tr>
<tr><td>5</td><td>F</td><td>Son una distribución del beneficio, no un gasto (sí son un pago).</td></tr>
<tr><td>6</td><td>V</td><td>Es aportación de los socios por encima del nominal.</td></tr>
<tr><td>7</td><td>F</td><td>Se cobra para Hacienda: no pasa por la cuenta de resultados.</td></tr>
<tr><td>8</td><td>V</td><td>VNC = IMB − AA en la fecha de venta.</td></tr>
<tr><td>9</td><td>V</td><td>ROE = BN / PN.</td></tr>
<tr><td>10</td><td>F</td><td>Se restan en bloque; solo se imputan los variables.</td></tr>
<tr><td>11</td><td>V</td><td>Es el criterio incremental.</td></tr>
<tr><td>12</td><td>V</td><td>Resultado 0 ⇔ MC = CF.</td></tr>
</table>
</div>

<h2>Parte 3</h2>
<div class="ans">
<p>(a) Reparto de fijos según ventas (50 %, 30 %, 20 %): 15.000, 9.000 y 6.000.</p>
<table>
<tr><th>Full-Cost</th><th class="n">A</th><th class="n">B</th><th class="n">C</th><th class="n">Total</th></tr>
<tr><td>Ventas</td><td class="n">50.000</td><td class="n">30.000</td><td class="n">20.000</td><td class="n">100.000</td></tr>
<tr><td>− Variables</td><td class="n">30.000</td><td class="n">12.000</td><td class="n">16.000</td><td class="n">58.000</td></tr>
<tr><td>− Fijos repartidos</td><td class="n">15.000</td><td class="n">9.000</td><td class="n">6.000</td><td class="n">30.000</td></tr>
<tr><th>Resultado</th><th class="n">5.000</th><th class="n">9.000</th><th class="n">−2.000</th><th class="n">12.000</th></tr>
</table>
<p>(b) Direct-Cost:</p>
<table>
<tr><th>Direct-Cost</th><th class="n">A</th><th class="n">B</th><th class="n">C</th><th class="n">Total</th></tr>
<tr><td>Margen de contribución</td><td class="n">20.000</td><td class="n">18.000</td><td class="n">4.000</td><td class="n">42.000</td></tr>
<tr><td>− Costes fijos</td><td colspan="3"></td><td class="n">30.000</td></tr>
<tr><th>Resultado</th><th colspan="3"></th><th class="n">12.000</th></tr>
</table>
<p>(c) C tiene un margen de contribución <strong>positivo</strong> (4.000 €). Si se elimina, los 30.000 € de fijos se mantienen: resultado $=38.000-30.000=8.000$ €.</p>
<p class="res">El resultado baja de 12.000 a 8.000 €: la propuesta es incorrecta</p>
<p>Las "pérdidas" de C en el Full-Cost se deben al reparto de unos costes fijos que no desaparecen con él.</p>
<p>(d) Si se ahorran 5.000 € de fijos: resultado $=38.000-25.000=13.000$ € &gt; 12.000 €.</p>
<p class="res">Sí cambiaría: eliminar C mejoraría el resultado en 1.000 €</p>
<p class="crit">Regla: eliminar un producto solo conviene si su margen de contribución es menor que los costes fijos que se evitan al eliminarlo (4.000 &lt; 5.000).</p>
</div>
`}
];
