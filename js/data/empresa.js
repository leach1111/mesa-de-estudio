SUBJECTS.push({
  id: "empresa",
  name: "Economía y Empresa",
  short: "Empresa",
  desc: "Contabilidad previsional (balance, resultados, tesorería), ratios, costes y economía.",
  intro: "El primer parcial es un test sobre un caso de contabilidad previsional: con un balance inicial y una lista de operaciones hay que sacar la cuenta de resultados, el estado de tesorería y el balance final. Los aciertos suman 1 y los fallos restan ¼. El segundo parcial es un verdadero/falso de economía más problemas de costes (Direct-Cost).",
  sources: "temas DF1-DF12 y E1-E3 de Pep Simo, ejercicios de Direct-Cost, parcial del 14/04/2026 y segundo parcial del 15/06/2026 con soluciones.",
  topics: [

/* ============================================================ */
{ id: "balance", title: "Balance, cuenta de resultados y modelo renta-riqueza",
  desc: "Activo, patrimonio neto y pasivo; ingresos y gastos frente a cobros y pagos.",
  html: String.raw`
<h2>La idea de todo el bloque</h2>
<p>La contabilidad <strong>previsional</strong> calcula los documentos financieros <em>antes</em> de que ocurra el año, para anticiparse a los problemas. Se usan tres documentos que encajan como piezas:</p>
<div class="key"><span class="label">Modelo renta-riqueza ampliado</span>
<p><strong>Balance inicial</strong> + <strong>Cuenta de resultados</strong> (lo que se gana) + <strong>Estado de tesorería</strong> (el dinero que entra y sale) = <strong>Balance final</strong>.</p>
<p>Ingresar no es cobrar y gastar no es pagar. Esa diferencia es la fuente de casi todas las preguntas trampa.</p></div>

<h2>El balance de situación: una fotografía</h2>
<div class="formula" style="text-align:center"><strong>ACTIVO = PATRIMONIO NETO + PASIVO</strong></div>
<table>
<tr><th>Activo (lo que la empresa tiene), de menos a más líquido</th><th>PN y Pasivo (de dónde sale), de menos a más exigible</th></tr>
<tr><td><strong>Activo no corriente</strong> (más de un año): terrenos, construcciones, maquinaria (IMB), patentes, (amortización acumulada en negativo)<br><br>
<strong>Activo corriente</strong>: existencias → realizable (clientes, deudores) → disponible (tesorería, caja)</td>
<td><strong>Patrimonio neto</strong>: capital social, reservas, resultado del ejercicio, resultados negativos de ejercicios anteriores (REA)<br><br>
<strong>Pasivo no corriente</strong>: préstamos a largo plazo<br><br>
<strong>Pasivo corriente</strong>: proveedores, acreedores, HP acreedora, préstamos a corto, póliza</td></tr>
</table>
<div class="tip"><span class="label">Proveedores vs. acreedores</span><p><strong>Proveedores</strong>: deudas por compras de mercadería. <strong>Acreedores</strong>: deudas por otros gastos (servicios exteriores, TSE). <strong>Proveedores de inmovilizado</strong>: deuda por comprar maquinaria. <strong>HP acreedora</strong>: lo que debes a Hacienda (impuesto de sociedades).</p></div>

<div class="mc"><p>¿En qué masa patrimonial va la cuenta "Clientes"?</p>
<ul><li data-ok>Activo corriente (realizable)</li><li>Activo no corriente</li><li>Pasivo corriente</li><li>Patrimonio neto</li></ul>
<div class="why"><p>Es un derecho de cobro que se convertirá en dinero antes de un año.</p></div></div>
<div class="mc"><p>¿Y "Reservas"?</p>
<ul><li data-ok>Patrimonio neto</li><li>Activo corriente</li><li>Pasivo no corriente</li><li>Pasivo corriente</li></ul>
<div class="why"><p>Son beneficios que los socios dejan en la empresa (autofinanciación): fondos propios.</p></div></div>
<div class="tf" data-a="f"><p>"Hacienda Pública acreedora" es una cuenta de activo.</p>
<div class="why"><p>Es una deuda con Hacienda que se paga en menos de un año: pasivo corriente.</p></div></div>

<h2>La cuenta de resultados: una película del año</h2>
<div class="formula" style="text-align:center"><strong>RESULTADO = INGRESOS − GASTOS</strong> (se cobren/paguen o no)</div>
<p>Estructura que usaremos:</p>
<table>
<tr><td>Ventas (uf vendidas × precio)</td><td class="n">+</td></tr>
<tr><td>Coste de las mercaderías vendidas (CMV): solo lo <strong>vendido</strong>, no lo comprado</td><td class="n">−</td></tr>
<tr><td>Gastos de personal, TSE (trabajos y servicios exteriores), alquileres</td><td class="n">−</td></tr>
<tr><td>Dotación a la amortización</td><td class="n">−</td></tr>
<tr><td>Resultados por venta de inmovilizado (beneficio o pérdida)</td><td class="n">±</td></tr>
<tr><td><strong>BAII</strong> (resultado de explotación)</td><td></td></tr>
<tr><td>Gastos financieros (intereses) / ingresos financieros</td><td class="n">±</td></tr>
<tr><td><strong>BAI</strong> (o BAT, antes de impuestos)</td><td></td></tr>
<tr><td>Impuesto de sociedades (IS)</td><td class="n">−</td></tr>
<tr><td><strong>Beneficio neto (BN)</strong></td><td></td></tr>
</table>
<div class="warn"><span class="label">Error típico</span><p>Si compras 500 um de mercadería y vendes 300 um (a coste), el gasto del año es 300 (CMV). Las 200 restantes son <strong>existencias</strong> en el activo, no un gasto.</p></div>

<div class="num" data-a="5550" data-unit="um"><p>DF-E3: ventas 21.140; CMV 8.900; impuestos municipales 90; agua/luz/gas 300; nómina 3.800; alquiler 1.200; transportes sobre ventas 1.300. ¿BAT?</p>
<div class="why"><p>21.140 − 8.900 − 90 − 300 − 3.800 − 1.200 − 1.300 = 5.550 um.</p></div></div>

<div class="steps"><p>DF-E4: la empresa PH tiene Terrenos 2.000 = Capital 2.000. En Z2 compra 100 uf a 10 (pagadas), vende 100 uf a 40 (al contado), personal 1.500 y TSE 600 al contado. CR y balance final.</p>
<div class="step">Cuenta de resultados: ventas 4.000 − CMV 1.000 − personal 1.500 − TSE 600 = <strong>900</strong> (los terrenos no se amortizan).</div>
<div class="step">Tesorería: 0 + 4.000 − 1.000 − 1.500 − 600 = 900.</div>
<div class="step">Balance: activo = Terrenos 2.000 + Tesorería 900 = 2.900. PN = Capital 2.000 + Resultado 900 = 2.900. Cuadra.</div></div>
`},

/* ============================================================ */
{ id: "amortizacion", title: "Amortización y estado de tesorería",
  desc: "Depreciación del inmovilizado, método lineal, valor neto contable y entradas/salidas de dinero.",
  html: String.raw`
<h2>Qué es la amortización</h2>
<p>Es el <strong>gasto</strong> que refleja la pérdida de valor del inmovilizado (desgaste y obsolescencia). Va a la cuenta de resultados, pero <strong>no es una salida de dinero</strong>: nunca aparece en tesorería.</p>
<div class="key"><span class="label">Fórmulas</span>
<p>Base amortizable = Valor de adquisición − Valor residual.</p>
<p>Amortización lineal anual = Base / Vida útil (o Base × %).</p>
<p>Valor neto contable (VNC) = IMB − Amortización acumulada (AA).</p></div>
<p>En el balance (método indirecto): el IMB se mantiene a su valor de compra y debajo aparece la AA en negativo, que crece cada año.</p>
<div class="tip"><span class="label">Fracciones de año</span><p>Si el inmovilizado se compra o vende a mitad de año, se amortizan solo los meses en que está en la empresa. Comprado el 1 de abril: 9/12 del año. Vendido el 31 de marzo: 3/12.</p></div>
<div class="warn"><span class="label">No te pases</span><p>La AA nunca puede superar la base amortizable. Si un inmovilizado ya está totalmente amortizado (AA = IMB − VR), su dotación del año es 0. Esto decidía una pregunta del parcial de abril.</p></div>
<p>Los terrenos, el inmovilizado en curso y las inversiones financieras no se amortizan.</p>

<div class="num" data-a="300" data-unit="um/año"><p>Inmovilizado de 3.500 um, valor residual 500 um, vida útil 10 años. Amortización anual lineal:</p>
<div class="why"><p>(3.500 − 500) / 10 = 300 um al año.</p></div></div>
<div class="num" data-a="150" data-unit="um"><p>Un vehículo de 900 um, vida útil 4 años, valor residual 100 um, se compra el 1 de abril. ¿Dotación del primer año?</p>
<div class="why"><p>(900 − 100) / 4 = 200 um/año. Por 9 meses: 200 × 9/12 = 150 um.</p></div></div>
<div class="tf" data-a="f"><p>La dotación a la amortización reduce la tesorería de la empresa.</p>
<div class="why"><p>Es un gasto contable, no un pago. Reduce el resultado (y así el impuesto a pagar), pero no la caja.</p></div></div>

<h2>Funciones de la amortización</h2>
<ul><li><strong>Financiera</strong>: va recuperando el dinero invertido (es autofinanciación).</li>
<li><strong>Contable</strong>: calcula bien el resultado y el valor del patrimonio.</li>
<li><strong>Fiscal</strong>: es un gasto deducible del impuesto de sociedades.</li></ul>

<h2>El estado de tesorería</h2>
<div class="formula" style="text-align:center">Tesorería final = Tesorería inicial + Entradas (cobros) − Salidas (pagos)<br>Cash-flow financiero = Entradas − Salidas</div>
<div class="tip"><span class="label">Lista de comprobación de salidas</span><p>Pagos a proveedores y acreedores del año anterior · compras del año (la parte pagada) · personal · TSE · alquileres · inmovilizado comprado (la parte pagada) · IS del año anterior · dividendos · intereses y devolución de préstamos.</p></div>

<div class="steps"><p>DF-E6: ACA SA tiene IMB 2.000 y Tesorería 100 (Capital 2.100). En X1, todo al contado: compra 100 uf a 10, vende 100 uf a 40, personal 1.500, TSE 600. El IMB se amortiza al 20%.</p>
<div class="step">CR: 4.000 − 1.000 − 1.500 − 600 − 400 (amortización: 20% de 2.000) = <strong>500</strong>.</div>
<div class="step">Tesorería: 100 + 4.000 − 1.000 − 1.500 − 600 = <strong>1.000</strong> (la amortización no se resta).</div>
<div class="step">Balance: IMB 2.000, AA (400), Tesorería 1.000 → Activo 2.600. Capital 2.100 + Resultado 500 = 2.600.</div></div>
`},

/* ============================================================ */
{ id: "resultados", title: "Tratamiento de los resultados",
  desc: "Impuesto de sociedades, dividendos, reservas y compensación de pérdidas.",
  html: String.raw`
<h2>¿Qué pasa con el beneficio?</h2>
<ol><li>Al cerrar el año, el resultado aparece en el <strong>patrimonio neto</strong>.</li>
<li>Se calcula el <strong>impuesto de sociedades</strong> (IS) sobre el BAI. Se paga al año siguiente, así que a final de año queda como <strong>HP acreedora</strong> en el pasivo corriente.</li>
<li>Con el beneficio neto, los socios deciden: <strong>dividendos</strong> (se pagan, salen de tesorería) y <strong>autofinanciación</strong> (pasa a reservas, no mueve dinero).</li></ol>
<div class="warn"><span class="label">Fíjate en sobre qué se reparte</span><p>Unos enunciados reparten el BN ("el beneficio neto se reparte a partes iguales entre dividendos y autofinanciación") y otros el BAI ("30% IS, 50% dividendos, 20% autofinanciación"). Lee con calma qué base usan.</p></div>

<div class="steps"><p>DF-E7: Balance inicial IMB 3.000, Tesorería 500 (Capital 3.500). Al contado: compra 60 uf a 10, venta 60 uf a 50, personal 1.000, TSE 500, amortización 20%, IS 30%.</p>
<div class="step">CR: 3.000 − 600 − 1.000 − 500 − 600 = BAI 300. IS 30% = 90. BN = 210.</div>
<div class="step">Tesorería: 500 + 3.000 − 600 − 1.000 − 500 = 1.400 (el IS se paga el año siguiente).</div>
<div class="step">Balance: IMB 3.000, AA (600), Tesorería 1.400 = 3.800. Capital 3.500 + BN 210 + HP acreedora 90 = 3.800.</div></div>

<div class="mc"><p>El año siguiente se reparte ese BN de 210 en partes iguales. ¿Qué efecto tiene en la tesorería de ese año?</p>
<ul><li data-ok>Salen 105 de dividendos y 90 de IS: −195</li><li>Salen 210</li><li>Salen 105</li><li>No sale nada, solo cambian cuentas del PN</li></ul>
<div class="why"><p>Se pagan los dividendos (105) y la deuda con Hacienda (90). Los otros 105 pasan a reservas sin mover dinero.</p></div></div>

<h2>Pérdidas</h2>
<ul><li>Las pérdidas se quedan en el PN como <strong>resultados negativos de ejercicios anteriores (REA)</strong>, en negativo.</li>
<li>Se compensan con beneficios futuros, lo que reduce la base del impuesto (desgravación fiscal).</li>
<li>Con pérdidas no hay IS ni dividendos ese año.</li></ul>
<div class="tf" data-a="v"><p>Una empresa puede tener pérdidas y, aun así, aumentar su tesorería en el mismo año.</p>
<div class="why"><p>Sí: por ejemplo, si cobra deudas de clientes del año anterior o si sus pérdidas se deben a amortizaciones, que no son pagos.</p></div></div>
`},

/* ============================================================ */
{ id: "inventarios", title: "Inventarios (FIFO, LIFO, PMP) e IVA",
  desc: "Balance de existencias, valoración de lo vendido y efecto del IVA en tesorería.",
  html: String.raw`
<h2>Balance de unidades</h2>
<div class="formula" style="text-align:center">Existencias iniciales + Compras = Ventas + Existencias finales (en uf)</div>
<p>Las existencias son una <strong>inversión</strong> (activo corriente), no un gasto: solo lo vendido pasa a la cuenta de resultados como CMV.</p>

<h2>¿A qué precio salen las unidades vendidas?</h2>
<table>
<tr><th>Método</th><th>Idea</th></tr>
<tr><td>FIFO</td><td>Lo primero que entra es lo primero que sale (se venden las más antiguas).</td></tr>
<tr><td>LIFO</td><td>Lo último que entra es lo primero que sale.</td></tr>
<tr><td>PMP</td><td>Precio medio ponderado: (valor total) / (unidades totales).</td></tr>
</table>
<p>Se debe aplicar siempre el mismo método (principio de uniformidad). En los exámenes de Empresa se usa casi siempre el <strong>PMP</strong>.</p>

<div class="steps"><p>Existencias iniciales 50 uf a 9 um; se compran 50 uf a 12 um; se venden 70 uf. CMV y existencias finales con cada método.</p>
<div class="step"><strong>FIFO</strong>: salen las 50 de 9 y 20 de 12. CMV = 450 + 240 = 690. Quedan 30 × 12 = 360.</div>
<div class="step"><strong>LIFO</strong>: salen las 50 de 12 y 20 de 9. CMV = 600 + 180 = 780. Quedan 30 × 9 = 270.</div>
<div class="step"><strong>PMP</strong>: (450 + 600)/100 = 10,5 um/uf. CMV = 70 × 10,5 = 735. Quedan 30 × 10,5 = 315.</div></div>
<div class="tf" data-a="v"><p>Con precios de compra crecientes, el FIFO da un CMV menor (y por tanto más beneficio) que el LIFO.</p>
<div class="why"><p>FIFO vende primero las unidades antiguas, más baratas. En el ejemplo: 690 frente a 780.</p></div></div>

<div class="num" data-a="1260" data-unit="um"><p>Parcial de abril: existencias iniciales 60 uf a 20 (PMP), se compran 40 uf a 15 y se venden 70 uf. ¿CMV?</p>
<div class="why"><p>PMP = (1.200 + 600)/100 = 18 um/uf. CMV = 70 × 18 = 1.260 um (en la cuenta de resultados, −1.260).</p></div></div>
<div class="num" data-a="540" data-unit="um"><p>¿Y el valor de las existencias finales en el balance?</p>
<div class="why"><p>Quedan 100 − 70 = 30 uf × 18 = 540 um.</p></div></div>

<h2>El IVA</h2>
<ul><li>Al vender, la empresa cobra IVA al cliente: <strong>IVA repercutido</strong>.</li>
<li>Al comprar, paga IVA al proveedor: <strong>IVA soportado</strong>.</li>
<li>Liquida a Hacienda la diferencia: repercutido − soportado. Si es negativa, la recupera o la compensa.</li>
<li>El IVA <strong>no</strong> es ni ingreso ni gasto: no entra en la cuenta de resultados. Sí afecta a tesorería y al balance (HP deudora o acreedora por IVA).</li></ul>
<div class="tf" data-a="f"><p>El IVA repercutido de las ventas aumenta el resultado de la empresa.</p>
<div class="why"><p>No es suyo: lo cobra para Hacienda. Solo pasa por tesorería y el balance.</p></div></div>
`},

/* ============================================================ */
{ id: "diferidos", title: "Cobros y pagos aplazados, fondo de maniobra y falta de tesorería",
  desc: "Cobros a X días, clientes y proveedores en el balance, fondo de maniobra y pólizas de crédito.",
  html: String.raw`
<h2>Cobros y pagos a X días</h2>
<div class="key"><span class="label">La regla del examen (año de 360 días)</span>
<p>Si vendes por 2.800 um cobrando a 36 días, a 31/12 queda pendiente la fracción 36/360 = 10%: <strong>280 en Clientes</strong> (activo), y se cobran este año 2.520.</p>
<p>Igual con los pagos: compras de 600 pagadas a 30 días dejan 600 × 30/360 = 50 en <strong>Proveedores</strong> (pasivo) y se pagan 550.</p></div>
<p>Y lo que quedó pendiente a final del año anterior (clientes, deudores, proveedores, acreedores, HP) se cobra o paga normalmente durante el año actual.</p>

<div class="num" data-a="2520" data-unit="um"><p>Ventas de 70 uf a 40 um/uf con cobro a 36 días. ¿Cuánto se cobra durante el año?</p>
<div class="why"><p>Ventas 2.800. Pendiente: 2.800 × 36/360 = 280. Cobrado: 2.520.</p></div></div>
<div class="num" data-a="250" data-unit="um"><p>Gastos de TSE de 300 um con pago a 60 días. ¿Cuánto se paga en el año?</p>
<div class="why"><p>Pendiente 300 × 60/360 = 50 (queda en Acreedores). Pagado 250.</p></div></div>

<h2>Fondo de maniobra</h2>
<div class="formula" style="text-align:center"><strong>Fondo de maniobra = Activo corriente − Pasivo corriente</strong></div>
<p>Debería ser positivo: lo que se convertirá en dinero pronto tiene que cubrir lo que hay que pagar pronto. Si es negativo, probablemente habrá problemas para pagar las deudas a corto plazo.</p>
<p>El <strong>fondo de maniobra necesario</strong> se calcula con el ciclo de caja: FM necesario = ciclo de caja (días) × coste diario. Si el FM real lo supera, no debería haber problemas de liquidez.</p>
<div class="tf" data-a="v"><p>Una empresa con beneficios puede quedarse sin tesorería si cobra a 90 días y paga al contado.</p>
<div class="why"><p>Sí: el dinero de las ventas se queda en Clientes mientras los pagos salen ya. Es el caso de DF-E14, que obliga a pedir una póliza.</p></div></div>

<h2>Falta de tesorería: la póliza de crédito</h2>
<ul><li>Si la tesorería final saldría negativa (o por debajo de un mínimo), se pide una póliza por la diferencia. Aparece en el pasivo corriente.</li>
<li>Su interés es un <strong>gasto financiero</strong> (CR) y un pago (tesorería). Suele calcularse sobre el saldo dispuesto o "el saldo más desfavorable" del año.</li></ul>
`},

/* ============================================================ */
{ id: "inversion", title: "Inversiones, financiación y desinversión",
  desc: "Ampliaciones de capital, préstamos, inversiones financieras y venta de inmovilizado.",
  html: String.raw`
<h2>Financiar una inversión</h2>
<table>
<tr><th>Opción</th><th>Qué pasa en el balance</th></tr>
<tr><td>Préstamo bancario (mejor a largo plazo)</td><td>Pasivo no corriente; los intereses son gasto financiero y pago.</td></tr>
<tr><td>Ampliación de capital</td><td>Sube el capital social. Lo que los accionistas aún no han pagado aparece en negativo en el PN: <strong>accionistas por desembolsos no exigidos (ADNE)</strong>.</td></tr>
<tr><td>Emisión sobre la par</td><td>Lo que se paga por encima del nominal va a <strong>prima de emisión</strong> (PN).</td></tr>
<tr><td>Autofinanciación</td><td>Reservas y amortizaciones.</td></tr>
</table>
<div class="tip"><span class="label">Compra de inmovilizado con pago aplazado</span><p>Se registra el IMB completo en el activo el día de la compra. Lo que no se ha pagado va a <strong>proveedores de inmovilizado</strong> (pasivo). En tesorería solo sale la parte pagada.</p></div>
<div class="num" data-a="450" data-unit="um"><p>Se compra un vehículo de 900 um pagando el 50% al contado y el resto el año siguiente. ¿Cuánto sale de tesorería este año?</p>
<div class="why"><p>450 um. Los otros 450 quedan como deuda (proveedores de inmovilizado).</p></div></div>

<h2>Inversiones financieras</h2>
<p>Comprar acciones de otras empresas: a largo (activo no corriente) o a corto (activo corriente). Sus rendimientos son <strong>ingresos financieros</strong> en la CR.</p>

<h2>Desinversión: vender un inmovilizado</h2>
<div class="key"><span class="label">Resultado de la venta</span>
<p>Resultado = Precio de venta − VNC en el momento de la venta, con VNC = IMB − AA (incluida la amortización de este año hasta la fecha de venta).</p>
<p>Al vender, desaparecen del balance tanto el IMB como su AA.</p></div>
<div class="steps"><p>Parcial de abril: IMB1 de 2.000 con AA de 1.600 a 31/12/X1, amortización 20% anual sin valor residual. Se vende el 31 de marzo de X2 por 100 al contado.</p>
<div class="step">Amortización de X2 hasta la venta: 2.000 × 20% × 3/12 = 100.</div>
<div class="step">VNC en la venta: 2.000 − 1.600 − 100 = 300.</div>
<div class="step">Resultado: 100 − 300 = <strong>−200</strong> (pérdida). En tesorería entran 100.</div></div>
<div class="tf" data-a="f"><p>Si vendes una máquina por 100 um, el ingreso en la cuenta de resultados es 100 um.</p>
<div class="why"><p>En la CR va solo la diferencia con el VNC (beneficio o pérdida). Los 100 um sí entran enteros en tesorería.</p></div></div>
`},

/* ============================================================ */
{ id: "examen-abril", title: "Simulacro: parcial del 14/04/2026 resuelto",
  desc: "El caso completo (versión de 70 uf) contestado pregunta a pregunta, con el método para no equivocarse.",
  html: String.raw`
<h2>El enunciado</h2>
<p>Balance previsional a 31/12/X1:</p>
<table>
<tr><th>Activo</th><th class="n">um</th><th>PN y Pasivo</th><th class="n">um</th></tr>
<tr><td>IMB 1</td><td class="n">2.000</td><td>Capital social</td><td class="n">3.200</td></tr>
<tr><td>(AA 1)</td><td class="n">−1.600</td><td>Beneficio neto X1</td><td class="n">100</td></tr>
<tr><td>IMB 2</td><td class="n">1.000</td><td>Proveedores</td><td class="n">200</td></tr>
<tr><td>(AA 2)</td><td class="n">−800</td><td>Acreedores</td><td class="n">300</td></tr>
<tr><td>Existencias (60 uf a 20, PMP)</td><td class="n">1.200</td><td>HP acreedora</td><td class="n">200</td></tr>
<tr><td>Clientes</td><td class="n">1.000</td><td></td><td></td></tr>
<tr><td>Deudores</td><td class="n">200</td><td></td><td></td></tr>
<tr><td>Tesorería</td><td class="n">1.000</td><td></td><td></td></tr>
<tr><th>Total</th><th class="n">4.000</th><th>Total</th><th class="n">4.000</th></tr>
</table>
<p>Operaciones de X2:</p>
<ul>
<li>Ventas de <strong>70 uf</strong> a 40 um/uf, cobro a 36 días.</li>
<li>Compra de 40 uf a 15 um/uf, pago a 30 días.</li>
<li>Personal 700 (contado). TSE 300 (pago a 60 días).</li>
<li>Amortización: IMB1 al 20% sin valor residual; IMB2 al 20% con valor residual 200.</li>
<li>El 31 de marzo se vende el IMB1 por 100 (contado) y se alquila otro desde abril a 10 um/mes (contado).</li>
<li>El 1 de abril se compra un vehículo (IMB3) de 900, 4 años, valor residual 100. Se paga el 50% al contado y el resto en X3.</li>
<li>El BN de X1 se reparte a partes iguales entre dividendos y autofinanciación.</li>
<li>IS de X2 del 20%, se paga en X3. Todas las deudas a corto de X1 se pagan y cobran en X2.</li>
</ul>
<div class="tip"><span class="label">Método recomendado</span><p>Haz tres columnas en papel (CR, Tesorería, Balance) y recorre las operaciones una a una anotando su efecto en cada documento. Al final, el balance tiene que cuadrar: si no cuadra, has olvidado algo.</p></div>

<h2>Cuenta de resultados</h2>
<div class="num" data-a="-1260" data-unit="um"><p>1. Coste de los materiales vendidos (CMV), con signo.</p>
<div class="why"><p>PMP = (1.200 + 600)/(60 + 40) = 18. CMV = 70 × 18 = <strong>−1.260</strong>.</p></div></div>
<div class="num" data-a="-100" data-unit="um"><p>2. Dotación a la amortización del IMB1, con signo.</p>
<div class="why"><p>2.000 × 20% = 400/año, pero solo 3 meses (se vende el 31/3): <strong>−100</strong>.</p></div></div>
<div class="mc"><p>Dotación del IMB2 en X2:</p>
<ul><li data-ok>0</li><li>−160</li><li>−200</li><li>−40</li></ul>
<div class="why"><p>Base amortizable = 1.000 − 200 = 800, y la AA ya es 800: está totalmente amortizado. Es la trampa del examen.</p></div></div>
<div class="steps"><p>Construimos la cuenta de resultados completa.</p>
<div class="step">Ventas 70 × 40 = 2.800. CMV −1.260. Personal −700. TSE −300.</div>
<div class="step">Amortizaciones: IMB1 −100, IMB2 0, IMB3 (900 − 100)/4 × 9/12 = −150. Alquiler: 9 meses × 10 = −90.</div>
<div class="step">Venta del IMB1: 100 − VNC (2.000 − 1.600 − 100 = 300) = −200.</div>
<div class="step">BAI = 2.800 − 1.260 − 700 − 300 − 100 − 150 − 90 − 200 = <strong>0</strong>. IS = 0. BN = 0.</div></div>
<div class="num" data-a="0" data-unit="um"><p>3. Impuesto de sociedades de X2.</p>
<div class="why"><p>BAI = 0, así que IS = 0. (En la versión de 80 uf el BAI es 220 y el IS −44; en la de 90 uf, BAI 440 e IS −88.)</p></div></div>

<h2>Estado de tesorería</h2>
<div class="num" data-a="2520" data-unit="um"><p>4. Cobro de las ventas de X2.</p>
<div class="why"><p>2.800 × (1 − 36/360) = 2.520.</p></div></div>
<div class="num" data-a="3820" data-unit="um"><p>5. Total de entradas.</p>
<div class="why"><p>Clientes X1 1.000 + Deudores X1 200 + ventas 2.520 + venta del IMB1 100 = 3.820.</p></div></div>
<div class="num" data-a="-450" data-unit="um"><p>6. Pago del IMB3, con signo.</p>
<div class="why"><p>50% de 900 = −450.</p></div></div>
<div class="steps"><p>Salidas del año.</p>
<div class="step">Deudas de X1: proveedores 200, acreedores 300, HP 200 → 700.</div>
<div class="step">Compras: 600 × 330/360 = 550. Personal 700. TSE 300 × 300/360 = 250. Alquiler 90.</div>
<div class="step">IMB3: 450. Dividendos: 50% de 100 = 50.</div>
<div class="step">Total salidas = 700 + 550 + 700 + 250 + 90 + 450 + 50 = 2.790.</div></div>

<h2>Balance a 31/12/X2</h2>
<div class="num" data-a="540" data-unit="um"><p>7. Existencias en el activo.</p>
<div class="why"><p>30 uf × 18 = 540.</p></div></div>
<div class="num" data-a="2030" data-unit="um"><p>8. Tesorería.</p>
<div class="why"><p>1.000 + 3.820 − 2.790 = 2.030.</p></div></div>
<div class="num" data-a="3250" data-unit="um"><p>9. Suma total del patrimonio neto.</p>
<div class="why"><p>Capital 3.200 + Reservas 50 (la mitad del BN de X1) + BN X2 0 = 3.250.</p></div></div>
<div class="num" data-a="0" data-unit="um"><p>10. HP acreedora en el pasivo corriente.</p>
<div class="why"><p>La de X1 ya se pagó y el IS de X2 es 0.</p></div></div>
<div class="steps"><p>Comprobamos que el balance cuadra.</p>
<div class="step">Activo: IMB2 1.000, AA2 −800, IMB3 900, AA3 −150, Existencias 540, Clientes 280, Tesorería 2.030 → <strong>3.800</strong>.</div>
<div class="step">PN 3.250. Pasivo: Proveedores 50, Acreedores 50, Proveedores de inmovilizado 450 → 550.</div>
<div class="step">3.250 + 550 = <strong>3.800</strong>. Cuadra.</div></div>
`},

/* ============================================================ */
{ id: "ratios", title: "Análisis con ratios",
  desc: "Liquidez, endeudamiento, actividad y rentabilidad (ROA, ROE, apalancamiento).",
  html: String.raw`
<h2>Para qué sirven</h2>
<p>Un ratio es un cociente entre dos magnitudes relacionadas. Por sí solo dice poco: hay que compararlo con años anteriores, con lo presupuestado, con valores "ideales" o con el sector. Cuidado con los ratios de dos números negativos (pérdidas / fondos propios negativos sale positivo y engaña).</p>
<table>
<tr><th>Grupo</th><th>Ratio</th><th>Fórmula</th></tr>
<tr><td rowspan="3">Liquidez</td><td>Liquidez</td><td>Activo corriente / Pasivo corriente</td></tr>
<tr><td>Tesorería</td><td>(Realizable + Disponible) / Pasivo corriente</td></tr>
<tr><td>Disponibilidad</td><td>Disponible / Pasivo corriente</td></tr>
<tr><td rowspan="3">Endeudamiento</td><td>Endeudamiento</td><td>Total pasivo / Total activo</td></tr>
<tr><td>Calidad de la deuda</td><td>Pasivo corriente / Total pasivo</td></tr>
<tr><td>Capacidad de devolución</td><td>(Beneficio + Amortización) / Préstamos</td></tr>
<tr><td rowspan="2">Actividad</td><td>Rotación del activo</td><td>Ventas / Total activo</td></tr>
<tr><td>Productividad</td><td>Ventas (o BAI) / empleados u horas</td></tr>
<tr><td rowspan="3">Rentabilidad</td><td>Económica (ROA)</td><td>BAII / Total activo</td></tr>
<tr><td>Financiera (ROE)</td><td>Beneficio neto / Fondos propios</td></tr>
<tr><td>Apalancamiento</td><td>(Activo / Fondos propios) × (BAI / BAII)</td></tr>
</table>
<div class="tip"><span class="label">Apalancamiento</span><p>Si es mayor que 1, endeudarse aumenta la rentabilidad de los accionistas (la deuda "sale barata" respecto a lo que rinde el activo).</p></div>
<div class="num" data-a="2"><p>Activo corriente 3.000 y pasivo corriente 1.500. Ratio de liquidez:</p>
<div class="why"><p>3.000 / 1.500 = 2: el activo corriente cubre dos veces las deudas a corto.</p></div></div>
<div class="mc"><p>¿Qué ratio mide la rentabilidad que obtienen los accionistas?</p>
<ul><li data-ok>ROE = Beneficio neto / Fondos propios</li><li>ROA = BAII / Activo</li><li>Endeudamiento</li><li>Rotación del activo</li></ul>
<div class="why"><p>El ROE relaciona lo que ganan los socios (BN) con lo que han puesto (fondos propios). El ROA mide la eficiencia de los activos sin importar cómo se financian.</p></div></div>
`},

/* ============================================================ */
{ id: "costes", title: "Contabilidad de costes: Direct-Cost y punto de equilibrio",
  desc: "Costes fijos y variables, margen de contribución, punto muerto y decisiones (pedidos, eliminar productos).",
  html: String.raw`
<h2>Full-Cost frente a Direct-Cost</h2>
<ul><li><strong>Full-Cost</strong>: reparte todos los costes (directos e indirectos) entre productos y centros de coste. Busca el coste "real" de cada producto.</li>
<li><strong>Direct-Cost</strong>: solo imputa a los productos los costes <strong>variables</strong>. Los fijos van al total del periodo. Sirve para <strong>tomar decisiones</strong>.</li></ul>
<div class="def"><span class="label">Fijos y variables</span><p><strong>Variable</strong>: cambia con la actividad (materia prima, comisiones, pago por pieza). <strong>Fijo</strong>: no cambia con la actividad a corto plazo (alquiler, sueldos fijos, amortización, seguros). Hay costes mixtos (semivariables, semifijos).</p></div>
<table>
<tr><th>Cuenta de resultados Direct-Cost</th><th></th></tr>
<tr><td>Ingresos por ventas</td><td>pv · x</td></tr>
<tr><td>− Costes variables</td><td>cv · x</td></tr>
<tr><td><strong>= Margen de contribución (MC)</strong></td><td>(pv − cv) · x</td></tr>
<tr><td>− Costes fijos</td><td>CF</td></tr>
<tr><td><strong>= Resultado</strong></td><td></td></tr>
</table>

<h2>Punto de equilibrio (punto muerto)</h2>
<div class="formula" style="text-align:center">Resultado = 0 ⟺ MC = CF ⟺ <strong>x<sub>eq</sub> = CF / (pv − cv)</strong></div>
<div class="num" data-a="50000" data-unit="uf"><p>E2-2: costes C(x) = 12.000.000 + 540x y precio 780 um. ¿Unidades para no perder?</p>
<div class="why"><p>Margen unitario 780 − 540 = 240. x = 12.000.000 / 240 = 50.000 uf.</p></div></div>
<div class="num" data-a="91667" data-tol="1" data-unit="uf"><p>¿Y para ganar 10.000.000 um?</p>
<div class="why"><p>240x = 12.000.000 + 10.000.000 ⇒ x = 91.666,7, es decir 91.667 uf.</p></div></div>
<div class="num" data-a="26.67" data-tol="0.02" data-unit="um"><p>Si solo se venden 45.000 uf, ¿cuánto hay que subir el precio para cubrir costes?</p>
<div class="why"><p>45.000(p − 540) = 12.000.000 ⇒ p = 806,67. Subida de 26,67 um.</p></div></div>

<div class="steps"><p>E2-1: compra 1.000 uf de MP a 2; empleado de 720 (fijo); autónomo que cobra 3 um por pieza; administración 3.000; comisión del 2% sobre ventas; se venden 1.000 uf a 10.</p>
<div class="step">Variables por unidad: MP 2 + autónomo 3 + comisión 0,2 = 5,2. Margen unitario 4,8.</div>
<div class="step">MC = 1.000 × 4,8 = 4.800. Fijos = 720 + 3.000 = 3.720. Resultado = 1.080.</div>
<div class="step">Punto de equilibrio: 3.720 / 4,8 = 775 uf.</div></div>

<h2>Decisiones con Direct-Cost</h2>
<div class="key"><span class="label">La regla de oro</span><p>Compara solo lo que <strong>cambia</strong> con la decisión (ingresos y costes incrementales). Los costes fijos que existen igualmente no cuentan. El "coste total unitario" (fijos repartidos) engaña.</p></div>
<div class="prob"><div class="enun"><p>Producción normal de 1.000 uf a 5.000 um, con 2.500.000 de variables y 1.500.000 de fijos. Un cliente nuevo pide 200 uf a 3.000 um como máximo; servirlas sube un 5% el coste variable y añade 15.000 de fijos. El gerente dice que no, porque el coste unitario es 4.000. ¿Se acepta?</p><p class="src">E2-3</p></div>
<div class="hint"><p>El coste unitario de 4.000 incluye fijos que se pagan igualmente. Calcula solo el efecto incremental.</p></div>
<div class="sol"><p>Coste variable unitario: 2.500 × 1,05 = 2.625. Incremento: 200 × (3.000 − 2.625) − 15.000 = 75.000 − 15.000 = <strong>+60.000 um</strong>. Se acepta.</p></div></div>
<div class="num" data-a="300" data-unit="€"><p>Segundo parcial: venta normal de 1.000 camisetas (cv 6 €, CF 4.000). Pedido especial de 250 a 8,50 €, con +0,50 €/u de coste variable y 200 € de preparación. ¿Cambio en el resultado?</p>
<div class="why"><p>250 × 8,50 − 250 × 6,50 − 200 = 2.125 − 1.625 − 200 = +300 €.</p></div></div>

<div class="prob"><div class="enun"><p>Tres productos: A (ingresos 35.000, CV 16.000), B (45.000; 16.000) y C (20.000; 7.000). Fijos de 55.000 (sueldos de los socios) repartidos según ingresos: A sale con −250. ¿Conviene eliminar A?</p><p class="src">E2-5</p></div>
<div class="sol"><p>A aporta un margen de contribución de 35.000 − 16.000 = 19.000. Los fijos (55.000) siguen igual sin A. Resultado actual 6.000; sin A: 6.000 − 19.000 = <strong>−13.000</strong>. No conviene: el −250 era un efecto del reparto de fijos.</p></div></div>

<div class="prob"><div class="enun"><p>A: precio 15, cv 7, 2 h/uf, demanda ≤ 2.000. B: precio 10, cv 4, 1 h/uf, demanda ≤ 4.000. Capacidad 6.400 h, fijos 12.100. ¿Cuánto fabricar de cada uno?</p><p class="src">E2-4</p></div>
<div class="hint"><p>Con un recurso escaso, ordena por margen por <strong>hora</strong>, no por unidad.</p></div>
<div class="sol"><p>Margen por hora: A 8/2 = 4; B 6/1 = 6. Primero B: 4.000 uf usan 4.000 h. Quedan 2.400 h → 1.200 uf de A.</p>
<p>Resultado: 1.200 × 8 + 4.000 × 6 − 12.100 = 21.500 um.</p></div></div>

<div class="num" data-a="26.25" data-unit="€"><p>Segundo parcial: visita estándar (400 personas, precio P) y nocturna (150 a 30 €). La plataforma cobra un 15%; fijos 12.750 €. ¿Precio de la estándar para el punto de equilibrio?</p>
<div class="why"><p>Margen = 85% del precio. 400 × 0,85P + 150 × 25,50 = 12.750 ⇒ 340P = 8.925 ⇒ P = 26,25 €.</p></div></div>

<div class="prob"><div class="enun"><p>Dos apps: A a 2 € y B a 4 €; Google se queda el 20%; personal 40.000 €/año y cuenta de 2.000 €/año. Se venden 4 de A por cada una de B. (a) Punto muerto. (b) Resultado si se venden 3.750 de B.</p><p class="src">E2-6</p></div>
<div class="sol"><p>Márgenes: A 1,6 €, B 3,2 €. Fijos 42.000. Con A = 4B: 4B·1,6 + 3,2B = 9,6B = 42.000 ⇒ B = 4.375 y A = 17.500.</p>
<p>(b) A = 15.000: MC = 24.000 + 12.000 = 36.000; resultado = −6.000 €.</p>
<p>(c) Para ganar 5.000 € el margen de A debería ser 35.000/15.000 = 2,33 € ⇒ precio 2,92 € (+45,8%), por encima del 20% que admite el estudio de elasticidad: no es factible. Subiendo A un 20% el MC aumenta 15.000 × 0,32 = 4.800 €.</p></div></div>
`},

/* ============================================================ */
{ id: "economia", title: "Economía: introducción, micro y macro",
  desc: "Escasez, mercados, oferta y demanda, elasticidad, PIB, inflación, desempleo y política económica.",
  html: String.raw`
<h2>Introducción</h2>
<ul><li>La economía es una ciencia <strong>social</strong> que estudia cómo se usan recursos escasos con usos alternativos para satisfacer necesidades materiales e inmateriales.</li>
<li><strong>Escasez</strong> (necesidades ilimitadas, recursos limitados) obliga a elegir: <strong>qué</strong>, <strong>cómo</strong> y <strong>para quién</strong> producir. Escasez ≠ pobreza.</li>
<li>Factores productivos clásicos: <strong>tierra, trabajo y capital</strong>.</li>
<li>Sistemas: economía de mercado ("mano invisible" de Adam Smith), planificada y mixta (la más habitual).</li>
<li><strong>Microeconomía</strong>: unidades individuales (consumidores, empresas) y mercados. <strong>Macroeconomía</strong>: el sistema en conjunto con variables agregadas.</li></ul>

<h2>Microeconomía: oferta y demanda</h2>
<div class="formula" style="text-align:center">Demanda Q = D(P<sub>A</sub>, renta, precios de otros bienes, gustos) · Oferta Q = O(P<sub>A</sub>, otros precios, factores, tecnología)</div>
<ul><li>Demanda: relación <strong>inversa</strong> con el precio. Oferta: relación <strong>directa</strong>.</li>
<li>Equilibrio: precio donde cantidad ofrecida = demandada. Por encima, exceso de oferta; por debajo, exceso de demanda.</li>
<li><em>Ceteris paribus</em>: todo constante salvo el precio. Un cambio del precio te mueve <strong>por</strong> la curva; un cambio de renta, gustos o precios de otros bienes <strong>desplaza</strong> la curva.</li></ul>
<table>
<tr><th>Tipo de bien</th><th>Comportamiento</th></tr>
<tr><td>Normal</td><td>Sube la renta → sube la demanda</td></tr>
<tr><td>Inferior</td><td>Sube la renta → baja la demanda</td></tr>
<tr><td>Complementarios</td><td>Sube el precio de uno → baja la demanda del otro (coche y gasolina)</td></tr>
<tr><td>Sustitutivos</td><td>Sube el precio de uno → sube la demanda del otro</td></tr>
</table>
<div class="key"><span class="label">Elasticidad precio</span><p>E = (variación % de la cantidad) / (variación % del precio). E &gt; 1 elástica, E &lt; 1 inelástica. Primera necesidad → poca elasticidad. Fácil sustitución, mucho peso en el presupuesto o mucho tiempo → más elasticidad.</p></div>

<h2>Macroeconomía</h2>
<ul><li>Cinco indicadores: <strong>inflación</strong> (aumento % del nivel general de precios), <strong>desempleo</strong> (población activa sin empleo), <strong>crecimiento</strong> del producto, <strong>déficit público</strong> (gastos − ingresos públicos), <strong>desequilibrio exterior</strong> (importaciones &gt; exportaciones).</li>
<li><strong>PIB = C + I + G + X − M</strong>. Interior: dentro de las fronteras. Nacional: factores del país estén donde estén. <strong>PNB = PIB − RRE + RRN</strong>.</li>
<li>Precios <strong>corrientes</strong> (los del momento) frente a <strong>constantes</strong> (de un año base; eliminan la inflación).</li>
<li>Renta personal disponible = renta personal − impuestos directos.</li>
<li>Ciclos: expansión y contracción. Clásicos: la economía se ajusta sola. Keynes: el Estado debe intervenir. Más gasto público (o menos impuestos) desplaza la demanda agregada a la derecha, con efecto multiplicador.</li>
<li>Los bancos comerciales <strong>crean dinero</strong> al conceder préstamos (el préstamo genera un depósito).</li></ul>

<h2>Verdadero o falso del segundo parcial (junio 2026)</h2>
<p>En el examen: +1 si aciertas, −½ si fallas, 0 si no contestas.</p>
<div class="tf" data-a="f"><p>La economía estudia únicamente necesidades materiales.</p><div class="why"><p>También inmateriales, como la educación.</p></div></div>
<div class="tf" data-a="v"><p>La escasez obliga a elegir entre usos alternativos de los recursos.</p><div class="why"><p>Recursos limitados frente a necesidades ilimitadas: qué, cómo y para quién.</p></div></div>
<div class="tf" data-a="f"><p>Si los recursos fueran ilimitados, el problema económico básico sería el mismo.</p><div class="why"><p>El problema económico nace precisamente de que los recursos son limitados.</p></div></div>
<div class="tf" data-a="f"><p>Escasez y pobreza son conceptos equivalentes.</p><div class="why"><p>La escasez es relativa: querer más de lo disponible.</p></div></div>
<div class="tf" data-a="f"><p>La microeconomía estudia principalmente variables agregadas como la inflación o el desempleo.</p><div class="why"><p>Eso es la macroeconomía.</p></div></div>
<div class="tf" data-a="f"><p>Las economías domésticas actúan siempre con intencionalidad mercantil o empresarial.</p><div class="why"><p>Se caracterizan justo por no tenerla.</p></div></div>
<div class="tf" data-a="v"><p>Ceteris paribus implica mantener constantes todos los factores excepto el precio del producto.</p><div class="why"><p>Así se aíslan las curvas de oferta y demanda.</p></div></div>
<div class="tf" data-a="f"><p>Los bienes complementarios aumentan su demanda cuando sube el precio del otro bien.</p><div class="why"><p>Disminuye. Lo que describe la frase son los sustitutivos.</p></div></div>
<div class="tf" data-a="v"><p>Los bienes sustitutivos aumentan su demanda cuando sube el precio del bien relacionado.</p><div class="why"><p>Los consumidores se pasan a la alternativa.</p></div></div>
<div class="tf" data-a="f"><p>Un bien inferior aumenta su demanda cuando aumenta la renta.</p><div class="why"><p>Disminuye; eso define al bien inferior.</p></div></div>
<div class="tf" data-a="f"><p>Una elasticidad alta indica poca respuesta de la cantidad demandada.</p><div class="why"><p>Indica mucha respuesta.</p></div></div>
<div class="tf" data-a="f"><p>Los bienes de primera necesidad tienden a presentar gran elasticidad.</p><div class="why"><p>No podemos dejar de consumirlos: elasticidad pequeña.</p></div></div>
<div class="tf" data-a="f"><p>La demanda mantiene una relación directa entre precio y cantidad demandada.</p><div class="why"><p>Relación inversa.</p></div></div>
<div class="tf" data-a="f"><p>La oferta mantiene una relación inversa entre precio y cantidad ofrecida.</p><div class="why"><p>Relación directa.</p></div></div>
<div class="tf" data-a="f"><p>El déficit público es la diferencia entre exportaciones e importaciones.</p><div class="why"><p>Es gastos públicos − ingresos públicos. Lo otro es el desequilibrio exterior.</p></div></div>
<div class="tf" data-a="f"><p>Las importaciones se suman al PIB en la fórmula del gasto.</p><div class="why"><p>Se restan: PIB = C + I + G + X − M.</p></div></div>
<div class="tf" data-a="f"><p>Si un país produce mucho dentro de sus fronteras, su PNB debe ser igual a su PIB.</p><div class="why"><p>PNB = PIB − RRE + RRN; en general son distintos.</p></div></div>
<div class="tf" data-a="f"><p>El producto nacional a precios constantes se mide con los precios del momento de producción.</p><div class="why"><p>Eso son precios corrientes. Los constantes usan un año base.</p></div></div>
<div class="tf" data-a="v"><p>Los precios constantes permiten eliminar los efectos de la inflación o la deflación.</p><div class="why"><p>Al fijar los precios de un año base.</p></div></div>
<div class="tf" data-a="f"><p>La renta personal disponible se obtiene sumando los impuestos directos a la renta personal.</p><div class="why"><p>Se restan.</p></div></div>
<div class="tf" data-a="f"><p>La inflación mide la disminución general de precios.</p><div class="why"><p>Mide el aumento.</p></div></div>
<div class="tf" data-a="v"><p>Aumentar el gasto público puede desplazar la demanda agregada hacia la derecha.</p><div class="why"><p>Es una política expansiva, con efecto multiplicador.</p></div></div>
<div class="tf" data-a="f"><p>Cuando un banco concede un préstamo no se crea dinero nuevo.</p><div class="why"><p>Crea dinero bancario: el préstamo genera a la vez un depósito.</p></div></div>
<div class="tf" data-a="f"><p>Los factores productivos clásicos son únicamente el trabajo y el conocimiento.</p><div class="why"><p>Son tierra, trabajo y capital.</p></div></div>
<div class="tf" data-a="v"><p>El tipo de cambio expresa el precio en moneda nacional de una unidad de moneda extranjera.</p><div class="why"><p>Es su definición.</p></div></div>
<div class="tf" data-a="f"><p>Si la renta afecta a la demanda, cualquier variación de renta provoca el mismo desplazamiento en todos los bienes.</p><div class="why"><p>Depende del tipo de bien: los normales suben y los inferiores bajan.</p></div></div>
<div class="tf" data-a="v"><p>La existencia de economías mixtas puede verse como respuesta a las limitaciones del mercado libre y de la planificación.</p><div class="why"><p>Lo habitual son sistemas intermedios.</p></div></div>
`}
  ]
});
