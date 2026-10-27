THEORY.empresa = {

/* ================================================================== */
balance: String.raw`
<h2>1. Para qué sirve la dirección financiera</h2>
<p>Los objetivos de esta parte de la asignatura (tema DF1) son tres:</p>
<ul>
<li>Dominar los conceptos y técnicas básicas para gestionar financieramente una empresa desde un punto de vista <strong>directivo</strong>, no de contable.</li>
<li>Saber diagnosticar la salud económica de una empresa y proponer medidas para mejorarla.</li>
<li>Cuantificar y justificar el impacto económico de las decisiones: proyectos de inversión y de financiación.</li>
</ul>
<div class="key"><span class="label">Contabilidad financiera frente a previsional</span><p>La contabilidad <strong>financiera</strong> registra lo que ya ha pasado. La <strong>previsional</strong> calcula cómo quedarán los documentos financieros <em>antes</em> de que ocurra el ejercicio, para aprovechar oportunidades y anticiparse a los problemas (por ejemplo, ver que en junio faltará dinero y negociar una póliza a tiempo).</p></div>
<p>Unidades que usarás: <strong>um</strong> (unidades monetarias) y <strong>uf</strong> (unidades físicas de producto). Los años se nombran X1, X2… o Z1, Z2… y el ejercicio contable suele coincidir con el año natural.</p>

<h2>2. El modelo renta-riqueza</h2>
<ul>
<li>La <strong>riqueza</strong> (patrimonio) de la empresa en un instante la muestra el <strong>balance de situación</strong>.</li>
<li>La <strong>renta</strong> (variación de riqueza generada por la actividad) durante un periodo la muestra la <strong>cuenta de resultados</strong>.</li>
</ul>
<div class="formula" style="text-align:center">Modelo simplificado: Balance inicial + Cuenta de resultados = Balance final</div>
<p>Pero los flujos <strong>económicos</strong> (ingresos y gastos) no coinciden en el tiempo con los <strong>monetarios</strong> (cobros y pagos): <em>ingresar ≠ cobrar</em> y <em>gastar ≠ pagar</em>. Por eso se amplía el modelo:</p>
<div class="formula" style="text-align:center">Modelo ampliado: Balance inicial + Cuenta de resultados + <strong>Estado de tesorería</strong> = Balance final</div>
<p>Aún se puede ampliar con un <strong>programa de inversiones</strong> (PI), para mantener o aumentar la capacidad de generar riqueza, y un <strong>programa de financiación</strong> (PF), que detalla de dónde sale el dinero.</p>
<table>
<tr><th>Concepto</th><th>Qué es</th><th>Ejemplo</th></tr>
<tr><td>Ingreso</td><td>Aumento de riqueza por la actividad (al vender)</td><td>Vendes por 1.000 a 90 días: ingreso 1.000 hoy</td></tr>
<tr><td>Cobro</td><td>Entrada de dinero</td><td>El cobro de esos 1.000 llega dentro de 90 días</td></tr>
<tr><td>Gasto</td><td>Consumo de recursos para generar ingresos</td><td>Amortización, mercadería vendida</td></tr>
<tr><td>Pago</td><td>Salida de dinero</td><td>Pagar al proveedor, aunque la mercadería siga en el almacén</td></tr>
</table>
<div class="tf" data-a="v"><p>Comprar mercadería que no se vende en el año es un pago (si se paga) pero no un gasto del año.</p>
<div class="why"><p>Queda como existencias (activo). Solo será gasto (CMV) cuando se venda.</p></div></div>

<h2>3. El balance de situación</h2>
<div class="def"><span class="label">Definición (DF3)</span><p>Relación del patrimonio de la empresa en un momento determinado y de quién es su propiedad. Es <strong>estático</strong>: una fotografía. Muestra:</p>
<ul><li><strong>Activo</strong>: bienes, derechos y otros recursos controlados económicamente por la empresa (lo que tiene y lo que le deben).</li>
<li><strong>Pasivo</strong>: obligaciones actuales con terceros surgidas de sucesos pasados (lo que debe).</li>
<li><strong>Patrimonio neto</strong>: la parte residual del activo una vez deducido el pasivo (lo que es de los socios).</li></ul></div>
<div class="formula" style="text-align:center"><strong>ACTIVO = PATRIMONIO NETO + PASIVO</strong></div>
<p>Todo lo que tiene la empresa es de los accionistas o se lo debe a terceros. El lado derecho dice <strong>de dónde ha salido</strong> el dinero (fuentes de financiación) y el izquierdo <strong>en qué se ha invertido</strong>.</p>

<h3>Masas patrimoniales y cuentas</h3>
<table>
<tr><th>Masa</th><th>Cuentas típicas</th></tr>
<tr><td><strong>Activo no corriente</strong> (permanece más de un año)</td><td>Inmovilizado intangible (patentes, aplicaciones informáticas), inmovilizado material (terrenos, construcciones, maquinaria, mobiliario, vehículos: IMB), (amortización acumulada AA, en negativo), inversiones financieras a largo plazo</td></tr>
<tr><td><strong>Activo corriente</strong>: existencias</td><td>Mercaderías, materias primas, productos en curso y terminados</td></tr>
<tr><td>Activo corriente: realizable</td><td>Clientes (por ventas), deudores (por otros conceptos), HP deudora, inversiones financieras a corto</td></tr>
<tr><td>Activo corriente: disponible</td><td>Caja, bancos (tesorería)</td></tr>
<tr><td><strong>Patrimonio neto</strong></td><td>Capital social, reservas, prima de emisión, resultado del ejercicio, resultados negativos de ejercicios anteriores (REA, en negativo), accionistas por desembolsos no exigidos (ADNE, en negativo)</td></tr>
<tr><td><strong>Pasivo no corriente</strong></td><td>Préstamos y deudas a largo plazo</td></tr>
<tr><td><strong>Pasivo corriente</strong></td><td>Proveedores (compras de mercadería), acreedores (otros gastos: TSE), proveedores de inmovilizado, HP acreedora (impuestos), préstamos a corto, póliza de crédito</td></tr>
</table>
<p>El activo se ordena de menos a más líquido y el pasivo de menos a más exigible.</p>
<div class="mc"><p>DF-E1: ¿dónde va la cuenta "Mobiliario"?</p><ul><li data-ok>Activo no corriente (inmovilizado material)</li><li>Activo corriente</li><li>Patrimonio neto</li><li>Es un gasto de la cuenta de resultados</li></ul>
<div class="why"><p>Es un bien que se usa varios años en la empresa y no está destinado a la venta. Su desgaste anual sí será un gasto (amortización).</p></div></div>
<div class="mc"><p>"Préstamo a devolver en 5 años" va en…</p><ul><li data-ok>Pasivo no corriente</li><li>Pasivo corriente</li><li>Patrimonio neto</li><li>Activo corriente</li></ul>
<div class="why"><p>Es una deuda con terceros a más de un año. La parte que venza en el próximo año se reclasificaría a pasivo corriente.</p></div></div>

<h2>4. La cuenta de resultados</h2>
<div class="def"><span class="label">Definición</span><p>Documento <strong>dinámico</strong> (una película) que recoge los ingresos y gastos de un periodo y calcula el resultado: beneficio si es positivo, pérdida si es negativo. El resultado pasa al patrimonio neto del balance.</p></div>
<p>Se aplica el <strong>principio de devengo</strong>: ingresos y gastos se imputan al periodo en que se producen, con independencia de cuándo se cobran o pagan.</p>
<table>
<tr><th>Partida</th><th>Contenido</th></tr>
<tr><td>Ventas</td><td>uf vendidas × precio de venta</td></tr>
<tr><td>− CMV (coste de las mercaderías vendidas)</td><td>uf <strong>vendidas</strong> × coste unitario (no las compradas)</td></tr>
<tr><td>− Gastos de personal</td><td>sueldos y seguridad social</td></tr>
<tr><td>− TSE</td><td>trabajos, suministros y servicios exteriores: luz, agua, transportes, publicidad, reparaciones…</td></tr>
<tr><td>− Otros gastos de explotación</td><td>alquileres, tributos (IBI, impuestos municipales)</td></tr>
<tr><td>− Dotación a la amortización</td><td>depreciación del inmovilizado del año</td></tr>
<tr><td>± Resultados por enajenación de inmovilizado</td><td>precio de venta − VNC</td></tr>
<tr><td><strong>= BAII</strong> (resultado de explotación)</td><td></td></tr>
<tr><td>± Resultado financiero</td><td>ingresos de inversiones financieras − intereses de préstamos y pólizas</td></tr>
<tr><td><strong>= BAI / BAT</strong></td><td>beneficio antes de impuestos</td></tr>
<tr><td>− Impuesto de sociedades</td><td>porcentaje del BAI (si es positivo)</td></tr>
<tr><td><strong>= Beneficio neto (BN)</strong></td><td></td></tr>
</table>
<div class="tip"><span class="label">Cómo distinguir un gasto de una inversión</span><p>Si lo que pagas se consume en el año (la luz, el sueldo), es gasto. Si sigue siendo útil después (una máquina) o sigue en el almacén (mercadería no vendida), es una inversión: va al activo y solo pasará a gasto la parte que se consuma.</p></div>
`,

/* ================================================================== */
amortizacion: String.raw`
<h2>1. El inmovilizado</h2>
<p>Elementos del patrimonio vinculados a la empresa a largo plazo cuyo uso permite obtener bienes y servicios. Dentro del activo no corriente distinguimos:</p>
<ul><li><strong>Inmovilizado intangible</strong>: naturaleza inmaterial (patentes, marcas, software).</li>
<li><strong>Inmovilizado material</strong>: tangible, usado para producir y no destinado a la venta (máquinas, edificios, mobiliario, vehículos).</li>
<li><strong>Inversiones financieras a largo plazo</strong>: derechos que darán liquidez en el futuro (acciones de otras empresas).</li></ul>

<h2>2. La amortización</h2>
<div class="def"><span class="label">Definición (DF4)</span><p>Como <strong>gasto</strong>, la amortización refleja la pérdida de valor (depreciación) del inmovilizado durante un ejercicio. Contablemente, consiste en distribuir el coste del inmovilizado a lo largo de su vida útil.</p></div>
<p>Causas de la depreciación: el <strong>desgaste</strong> por el uso y la <strong>obsolescencia</strong> por los avances tecnológicos. No se amortizan los terrenos ni las inversiones financieras.</p>
<h3>Vocabulario</h3>
<table>
<tr><th>Término</th><th>Significado</th></tr>
<tr><td>Valor de adquisición (IMB)</td><td>Lo que costó (inmovilizado material bruto)</td></tr>
<tr><td>Valor residual (VR)</td><td>Lo que valdrá al final de su vida útil</td></tr>
<tr><td>Vida útil</td><td>Años que se usará</td></tr>
<tr><td>Base amortizable</td><td>IMB − VR: lo que hay que repartir</td></tr>
<tr><td>Dotación anual</td><td>Gasto por amortización del año (va a la CR)</td></tr>
<tr><td>Amortización acumulada (AA)</td><td>Suma de las dotaciones hasta la fecha (va al activo en negativo)</td></tr>
<tr><td>Valor neto contable (VNC)</td><td>IMB − AA: lo que "vale" en libros</td></tr>
</table>
<h3>Método lineal (cuotas constantes)</h3>
<div class="formula" style="text-align:center">Dotación anual = (IMB − VR) / vida útil = (IMB − VR) × % anual</div>
<p>Si el enunciado da un porcentaje sobre el IMB y no habla de valor residual, aplica el porcentaje directamente al IMB. Si hay valor residual, el porcentaje se aplica a la base amortizable.</p>
<div class="key"><span class="label">Reglas que deciden preguntas de examen</span><ul>
<li><strong>Prorrateo por meses</strong>: si se compra o se vende durante el año, solo se amortizan los meses en los que está en la empresa.</li>
<li><strong>Tope</strong>: la AA no puede superar la base amortizable. Un elemento totalmente amortizado tiene dotación 0 aunque se siga usando.</li>
<li>Si un inmovilizado empieza a amortizarse "a principios del año siguiente" (DF-E17), este año no tiene dotación.</li></ul></div>
<p>Además del lineal existen métodos degresivos (más amortización al principio) y por unidades producidas; en el curso se usa el lineal.</p>
<h3>Funciones de la amortización</h3>
<ul><li><strong>Financiera</strong>: como es un gasto que no se paga, el dinero "se queda" en la empresa. Es una fuente de autofinanciación para reponer el inmovilizado.</li>
<li><strong>Contable</strong>: permite calcular bien el resultado y valorar el patrimonio.</li>
<li><strong>Fiscal</strong>: es un gasto deducible que reduce el impuesto de sociedades.</li></ul>
<div class="num" data-a="900" data-unit="um"><p>Un año con beneficio neto de 500 um y amortización de 400 um. Si todo se cobra y paga al contado, ¿cuánto dinero ha generado la actividad (cash-flow económico)?</p>
<div class="why"><p>Cash-flow económico = BN + amortizaciones = 900 um. La amortización se restó para calcular el beneficio, pero no salió dinero.</p></div></div>

<h2>3. El estado de tesorería</h2>
<div class="def"><span class="label">Definición</span><p>Recoge los cobros y pagos del periodo. Muestra la liquidez: si la empresa podrá hacer frente a sus pagos.</p></div>
<div class="formula" style="text-align:center">Tesorería final = Tesorería inicial + Cobros − Pagos</div>
<div class="key"><span class="label">Checklist completo</span>
<p><strong>Entradas</strong>: cobro de clientes y deudores del año anterior; cobros de las ventas del año (parte al contado); venta de inmovilizado (si se cobra); préstamos recibidos; ampliaciones de capital desembolsadas; cobro de ADNE; rendimientos de inversiones financieras.</p>
<p><strong>Salidas</strong>: pago a proveedores, acreedores y HP del año anterior; compras del año (parte pagada); personal; TSE (parte pagada); alquileres; compra de inmovilizado (parte pagada); IS del año anterior; dividendos; intereses; devolución de préstamos; inversiones financieras.</p>
<p><strong>Nunca</strong> en tesorería: amortización, CMV (lo que se paga son las compras, no lo vendido), resultado por venta de inmovilizado, reservas.</p></div>
<div class="tf" data-a="f"><p>Si la cuenta de resultados da beneficios, la tesorería aumenta.</p>
<div class="why"><p>No necesariamente: comprar inmovilizado, pagar deudas del año anterior, pagar dividendos o vender a crédito pueden hacer bajar la tesorería con beneficios. Por eso hacen falta los dos documentos.</p></div></div>
`,

/* ================================================================== */
resultados: String.raw`
<h2>1. Distribución del beneficio (DF5)</h2>
<ol>
<li>Al cerrar el ejercicio, el resultado aparece en el <strong>patrimonio neto</strong>.</li>
<li>Si hay beneficios, primero se <strong>compensan las pérdidas</strong> de años anteriores (REA).</li>
<li>Se aplica el <strong>impuesto de sociedades</strong> sobre la base que quede: BN = BAI − IS.</li>
<li>El resto se distribuye entre <strong>dividendos</strong> (para los socios) y <strong>reservas</strong> (autofinanciación).</li></ol>
<div class="key"><span class="label">Cuándo se paga cada cosa</span><ul>
<li>El IS se paga en los 25 días siguientes a los 6 meses posteriores al cierre (en julio del año siguiente). A 31 de diciembre queda como deuda: <strong>Hacienda Pública acreedora por IS</strong>, en el pasivo corriente.</li>
<li>Los dividendos se acuerdan y pagan durante el año siguiente (salida de tesorería).</li>
<li>Las reservas no mueven dinero: solo cambian el nombre de una partida del PN (de "resultado" a "reservas").</li></ul></div>

<h2>2. Cómo se refleja en los documentos</h2>
<table>
<tr><th>Momento</th><th>Balance</th><th>Tesorería</th></tr>
<tr><td>31/12 del año 1</td><td>PN: resultado del año (BN o BAI, según el enunciado). Pasivo: HP acreedora por el IS calculado.</td><td>—</td></tr>
<tr><td>Durante el año 2</td><td>El resultado del año 1 desaparece: la parte autofinanciada pasa a reservas. La HP acreedora se cancela.</td><td>Salen el IS y los dividendos.</td></tr>
</table>
<div class="warn"><span class="label">Fíjate en cómo viene el balance</span><p>En unos ejercicios el balance muestra "Rdo (BAT)" y la distribución se hace en porcentajes del BAT (por ejemplo, 30% IS, 50% dividendos, 20% reservas: los porcentajes suman 100%). En otros aparece ya el BN y la HP acreedora, y se reparte solo el BN. Lee siempre sobre qué base se calcula cada porcentaje.</p></div>
<div class="num" data-a="20" data-unit="um"><p>BAT del año anterior: 100 um. Se distribuye 30% IS, 50% dividendos, 20% autofinanciación. ¿Cuánto pasa a reservas?</p>
<div class="why"><p>20% de 100 = 20 um. Salen de tesorería 30 (IS) + 50 (dividendos) = 80 um.</p></div></div>

<h2>3. Pérdidas</h2>
<ul><li>Si el año da pérdidas, el resultado aparece en el PN con <strong>signo negativo</strong> y se mantiene (como REA) hasta compensarse con beneficios futuros.</li>
<li>No hay IS ni dividendos ese año.</li>
<li>Al compensarlas, la base imponible de años futuros se reduce: es una ventaja fiscal.</li>
<li>Las pérdidas no implican necesariamente falta de tesorería, ni los beneficios implican tenerla (DF6: "pérdidas y tesorería").</li></ul>
<div class="tf" data-a="v"><p>Unas pérdidas acumuladas grandes pueden hacer que el patrimonio neto sea negativo.</p>
<div class="why"><p>Si las pérdidas superan capital y reservas, el PN es negativo: la empresa debe más de lo que tiene (situación de quiebra técnica).</p></div></div>
`,

/* ================================================================== */
inventarios: String.raw`
<h2>1. Las existencias son una inversión</h2>
<div class="def"><span class="label">Inventario (DF6)</span><p>Materias primas, productos en curso o semielaborados y productos terminados que la empresa tiene al final del ejercicio. Figuran en el <strong>activo corriente</strong>.</p></div>
<p>En la cuenta de resultados solo es gasto el coste de lo <strong>vendido</strong>. Lo que queda en el almacén es una inversión que pasará a gasto el año en que se venda.</p>
<h2>2. Balance de existencias</h2>
<div class="formula" style="text-align:center">Existencias iniciales + Compras (o producción) = Ventas + Existencias finales</div>
<p>Con esta igualdad en uf calculas la que falte. Después hay que <strong>valorar</strong> en um las unidades vendidas (CMV) y las que quedan (existencias finales).</p>

<h2>3. Métodos de valoración</h2>
<table>
<tr><th>Método</th><th>Unidades vendidas valoradas a…</th><th>Efecto con precios al alza</th></tr>
<tr><td><strong>FIFO</strong> (first in, first out)</td><td>precios de las más antiguas</td><td>CMV bajo, beneficio alto, existencias valoradas a precios actuales</td></tr>
<tr><td><strong>LIFO</strong> (last in, first out)</td><td>precios de las más recientes</td><td>CMV alto, beneficio bajo (menos impuestos), existencias a precios antiguos</td></tr>
<tr><td><strong>PMP</strong> (precio medio ponderado)</td><td>media ponderada de todas</td><td>intermedio</td></tr>
</table>
<div class="formula" style="text-align:center">PMP = (valor de existencias iniciales + valor de las compras) / (uf iniciales + uf compradas)</div>
<p>Las existencias finales se valoran al mismo PMP. Principio de <strong>uniformidad</strong>: elegido un método, se mantiene.</p>
<div class="tip"><span class="label">PMP continuo</span><p>Si hay varias compras y ventas intercaladas, el PMP se recalcula después de cada compra (las ventas salen al PMP vigente en ese momento). En los ejercicios del curso suele bastar con una única media del año.</p></div>
<div class="num" data-a="9.33" data-tol="0.01" data-unit="um/uf"><p>DF-E20: existencias iniciales de 100 uf a 8 um y compras de 50 uf a 12 um. ¿PMP?</p>
<div class="why"><p>(800 + 600)/150 = 9,33 um/uf.</p></div></div>

<h2>4. El IVA</h2>
<ul><li><strong>IVA repercutido</strong>: el que la empresa cobra a sus clientes en las ventas. Es una deuda con Hacienda.</li>
<li><strong>IVA soportado</strong>: el que paga a sus proveedores en las compras y servicios. Es un derecho frente a Hacienda.</li>
<li>Periódicamente se liquida: si repercutido > soportado, se paga la diferencia (HP acreedora por IVA); si es al revés, se recupera o compensa (HP deudora por IVA).</li></ul>
<div class="key"><span class="label">Dónde aparece</span><p>El IVA no es ni ingreso ni gasto: <strong>no está en la cuenta de resultados</strong>. Sí afecta a la <strong>tesorería</strong> (se cobra y se paga) y al <strong>balance</strong> (saldo pendiente con Hacienda). Los precios de la CR se ponen sin IVA.</p></div>
<div class="num" data-a="630" data-unit="um"><p>Ventas de 4.000 um y compras de 1.000 um, ambas con IVA del 21%. ¿Cuánto hay que ingresar a Hacienda por IVA?</p>
<div class="why"><p>Repercutido 840, soportado 210. A pagar: 840 − 210 = 630 um.</p></div></div>
`,

/* ================================================================== */
diferidos: String.raw`
<h2>1. Cobros y pagos diferidos (DF7)</h2>
<p>Es muy habitual que los cobros y pagos lleguen más tarde que los ingresos y gastos: "cobro a 90 días" significa que el cliente paga 90 días después de recibir el producto. Esto crea diferencias entre la cuenta de resultados y la tesorería, y forma el <strong>activo corriente</strong> (clientes) y parte del pasivo corriente (proveedores, acreedores).</p>
<div class="key"><span class="label">Convenio de los ejercicios</span><p>Año comercial de 360 días y operaciones repartidas uniformemente. Con cobro a $d$ días, a final de año queda pendiente la fracción $\frac{d}{360}$ de las ventas del año: 90 días → 25%; 60 días → 1/6; 36 días → 10%; 30 días → 1/12.</p></div>
<table>
<tr><th>Operación con aplazamiento</th><th>Cuenta de resultados</th><th>Tesorería este año</th><th>Balance a 31/12</th></tr>
<tr><td>Ventas a $d$ días</td><td>todo el importe</td><td>importe × (1 − d/360)</td><td>Clientes: importe × d/360</td></tr>
<tr><td>Compras de mercadería a $d$ días</td><td>(solo el CMV)</td><td>importe × (1 − d/360)</td><td>Proveedores: importe × d/360</td></tr>
<tr><td>TSE a $d$ días</td><td>todo</td><td>importe × (1 − d/360)</td><td>Acreedores: importe × d/360</td></tr>
</table>
<div class="num" data-a="1000" data-unit="um"><p>DF-E14: ventas de 100 uf a 40 um con cobro a 90 días. ¿Saldo de clientes a final de año?</p>
<div class="why"><p>4.000 × 90/360 = 1.000 um. Se cobran este año 3.000.</p></div></div>

<h2>2. Falta de tesorería</h2>
<p>Una tesorería negativa es peligrosa: obliga a endeudarse, con gastos financieros y la necesidad de devolver el dinero. Soluciones a corto plazo:</p>
<ul><li><strong>Póliza de crédito</strong>: el banco permite disponer hasta un límite. Lo dispuesto es pasivo corriente. El interés (a menudo "sobre el saldo más desfavorable" o "saldo máximo") es gasto financiero en la CR y un pago en tesorería.</li>
<li><strong>Préstamo</strong>: se recibe una cantidad y se devuelve en plazos, con intereses sobre el capital pendiente.</li></ul>
<div class="steps"><p>Cálculo típico: la tesorería final antes de financiación sale −700 y se exige un mínimo de 10 um, con una póliza al 20%.</p>
<div class="step">Hay que disponer de la póliza lo suficiente para acabar con 10 um, teniendo en cuenta que los intereses también se pagan con la póliza.</div>
<div class="step">Si $P$ es lo dispuesto: $-700+P-0{,}2P=10 \Rightarrow 0{,}8P=710 \Rightarrow P=887{,}5$ um.</div>
<div class="step">Interés 177,5 (gasto financiero en la CR y pago). La póliza (887,5) aparece en el pasivo corriente. Si el enunciado calcula el interés de otra forma (sobre el saldo inicial, por ejemplo), sigue su indicación.</div></div>

<h2>3. Fondo de maniobra</h2>
<div class="formula" style="text-align:center"><strong>Fondo de maniobra (FM) = Activo corriente − Pasivo corriente</strong><br>(equivale a Patrimonio neto + Pasivo no corriente − Activo no corriente)</div>
<ul><li>FM positivo: parte del activo corriente se financia con recursos permanentes. Es la situación sana.</li>
<li>FM negativo: el pasivo exigible a corto supera lo que se convertirá en dinero a corto. Probables problemas para pagar.</li>
<li>La segunda expresión muestra que el FM es la parte de los recursos permanentes (PN y deudas a largo) que no se ha invertido en inmovilizado.</li></ul>
<h3>Ciclo de maduración y fondo de maniobra necesario</h3>
<p>El <strong>ciclo de caja</strong> es el tiempo que pasa entre que se paga a los proveedores y se cobra a los clientes: días de almacén + días de cobro − días de pago. Cuanto más largo, más fondo de maniobra hace falta. FM necesario ≈ ciclo de caja (días) × coste diario de la actividad.</p>
<div class="tf" data-a="v"><p>Alargar el plazo de pago a proveedores reduce el fondo de maniobra necesario.</p>
<div class="why"><p>Acorta el ciclo de caja: los proveedores financian durante más tiempo la actividad.</p></div></div>
`,

/* ================================================================== */
inversion: String.raw`
<h2>1. Financiar una inversión en inmovilizado (DF8)</h2>
<p>Para comprar inmovilizado nuevo la empresa necesita liquidez. Las dos vías básicas:</p>
<h3>Préstamo bancario</h3>
<ul><li>Un banco aporta dinero a cambio de intereses (gasto financiero). Es recomendable que sea <strong>a largo plazo</strong>, porque el inmovilizado se recupera en muchos años (equilibrio financiero: financiar lo permanente con recursos permanentes).</li>
<li>En el balance: pasivo no corriente (la parte que vence en el próximo año, en el corriente).</li>
<li>En tesorería: entra el principal al recibirlo; salen los intereses cada año y el principal al devolverlo.</li>
<li>En la CR: solo los intereses. Devolver el principal no es gasto.</li></ul>
<h3>Ampliación de capital</h3>
<ul><li>Se aumentan los fondos propios emitiendo acciones nuevas.</li>
<li>El desembolso puede hacerse en varios años. La parte suscrita pero aún no pagada figura en el PN en negativo: <strong>accionistas por desembolsos no exigidos (ADNE)</strong>. Cuando se cobra, sale del balance y entra en tesorería.</li>
<li>Emisión <strong>a la par</strong>: al valor nominal. <strong>Sobre la par</strong>: los nuevos socios pagan más del nominal y el exceso va a <strong>prima de emisión</strong> (PN). Compensa a los antiguos socios por las reservas acumuladas.</li>
<li>No genera intereses, pero los nuevos socios tendrán derecho a dividendos.</li></ul>
<div class="steps"><p>DF-E17: se compra un inmovilizado de 6.000 um; el 50% se financia con acciones (desembolso del 50% este año y el resto el siguiente) y el 50% con un préstamo a largo plazo.</p>
<div class="step">Capital social +3.000; ADNE −1.500; entran 1.500 en tesorería.</div>
<div class="step">Préstamo L/P +3.000; entran 3.000 en tesorería.</div>
<div class="step">Inmovilizado +6.000 en el activo; si se paga el 80% este año, salen 4.800 y quedan 1.200 como proveedores de inmovilizado.</div></div>

<h2>2. Inversiones financieras</h2>
<p>Si sobra liquidez, la empresa puede comprar acciones u otros valores para obtener control de otra empresa o rendimientos.</p>
<ul><li>Según el plazo: <strong>inversiones financieras a largo plazo</strong> (activo no corriente) o <strong>a corto plazo</strong> (activo corriente).</li>
<li>La compra es un pago; los rendimientos (dividendos, intereses cobrados) son <strong>ingresos financieros</strong> en la CR y cobros en tesorería.</li></ul>
<div class="num" data-a="100" data-unit="um"><p>DF-E18: inversión financiera de 1.000 um al 10% anual. ¿Ingreso financiero del año?</p>
<div class="why"><p>10% de 1.000 = 100 um (y se cobran, si el enunciado no dice otra cosa).</p></div></div>

<h2>3. Desinversión (DF9)</h2>
<div class="key"><span class="label">Regla</span><p>Al vender un inmovilizado que ha dejado de ser útil, su valor real es el <strong>valor neto contable</strong> (IMB − AA) en el momento de la venta. La diferencia entre el precio de venta y el VNC es el resultado de la operación, que va a la cuenta de resultados.</p></div>
<ol><li>Calcula la amortización del año <strong>hasta la fecha de venta</strong> (prorrateada) e inclúyela como gasto.</li>
<li>VNC = IMB − AA anterior − amortización de este año.</li>
<li>Resultado = precio − VNC (beneficio o pérdida).</li>
<li>Balance: desaparecen el IMB y su AA. Si el precio se cobra más tarde, aparece un deudor (deudores por venta de inmovilizado).</li>
<li>Tesorería: entra el precio (si se cobra este año).</li></ol>
<div class="num" data-a="200" data-unit="um"><p>DF-E19: el IMB1 de 3.000 um ya está totalmente amortizado (AA 3.000) y se vende por 200 al contado. ¿Resultado de la venta?</p>
<div class="why"><p>VNC = 0. Resultado = 200 − 0 = +200 um de beneficio.</p></div></div>
<div class="num" data-a="-200" data-unit="um"><p>DF-E20: maquinaria de 3.000 con AA de 600 a 31/12/X1, amortización del 20% anual. Se vende el 1 de julio de X2 por 1.900. ¿Resultado (con signo)?</p>
<div class="why"><p>Amortización de X2 hasta julio: 3.000 × 20% × 6/12 = 300. VNC = 3.000 − 600 − 300 = 2.100. Resultado = 1.900 − 2.100 = −200 um (pérdida). Como se cobra en X3, en el balance de X2 aparece un deudor de 1.900.</p></div></div>
`,

/* ================================================================== */
"examen-abril": String.raw`
<h2>1. Cómo se plantea un caso de contabilidad previsional</h2>
<p>Todos los ejercicios DF-E y el parcial siguen el mismo esquema: <strong>balance inicial + lista de operaciones → CR, tesorería y balance final</strong>. Este es el método completo para no dejarte nada.</p>
<div class="key"><span class="label">Paso 0: prepara tres columnas</span><p>CR (ingresos y gastos), ET (cobros y pagos) y "pendientes para el balance". Recorre las operaciones una a una y anota su efecto en las tres.</p></div>

<h2>2. Recorrido del balance inicial</h2>
<table>
<tr><th>Partida inicial</th><th>Qué pasa durante el año</th></tr>
<tr><td>Clientes, deudores</td><td>Se cobran (entrada en ET)</td></tr>
<tr><td>Proveedores, acreedores, HP acreedora</td><td>Se pagan (salida en ET)</td></tr>
<tr><td>Resultado del año anterior</td><td>Se distribuye: IS (si no estaba ya en HP), dividendos (salida), reservas</td></tr>
<tr><td>Existencias iniciales</td><td>Entran en el cálculo del CMV (PMP)</td></tr>
<tr><td>IMB y AA</td><td>Se siguen amortizando (con el tope) o se venden</td></tr>
<tr><td>Préstamos</td><td>Intereses y devoluciones</td></tr>
<tr><td>ADNE</td><td>Se cobran si el enunciado lo dice</td></tr>
</table>

<h2>3. Recorrido de las operaciones del año</h2>
<ol>
<li><strong>Ventas</strong>: ingreso completo en CR; cobro según plazo; resto a Clientes.</li>
<li><strong>Compras</strong>: no van a la CR. Pago según plazo; resto a Proveedores. Sirven para el balance de existencias y el PMP.</li>
<li><strong>CMV</strong>: uf vendidas × coste (PMP, FIFO…). Existencias finales = uf restantes × coste.</li>
<li><strong>Personal, TSE, alquileres</strong>: gasto completo; pago según plazo; resto a Acreedores.</li>
<li><strong>Amortizaciones</strong>: de cada inmovilizado, con meses y tope. Solo CR y balance (AA).</li>
<li><strong>Compra de inmovilizado</strong>: activo completo; pago de la parte que toque; resto a Proveedores de inmovilizado.</li>
<li><strong>Venta de inmovilizado</strong>: resultado = precio − VNC en la CR; cobro en ET; desaparecen IMB y AA.</li>
<li><strong>Financiación</strong>: préstamos, ampliaciones, intereses, póliza si falta tesorería.</li>
<li><strong>Impuesto</strong>: IS = % del BAI si es positivo. Se paga el año siguiente: HP acreedora.</li></ol>

<h2>4. Cierre y comprobación</h2>
<ul><li>Tesorería final = inicial + entradas − salidas. Si es negativa (o menor que el mínimo), póliza y vuelve a calcular intereses y BAI.</li>
<li>Patrimonio neto final = capital + reservas (antiguas + nuevas) + resultado del año (± prima de emisión, − ADNE, − REA).</li>
<li>Pasivo: todo lo que ha quedado pendiente de pagar + HP por el IS + préstamos vivos.</li>
<li><strong>Comprueba que Activo = PN + Pasivo</strong>. Si no cuadra, revisa en este orden: amortizaciones (tope y meses), reservas del año anterior, pendientes de cobro/pago, IS.</li></ul>
<div class="tf" data-a="v"><p>Si el balance final no cuadra, seguro que hay un error en alguno de los tres documentos.</p>
<div class="why"><p>Es la gran ventaja del método: la igualdad Activo = PN + Pasivo es una comprobación automática de todo el trabajo.</p></div></div>
<p>En la pestaña "Resumen y práctica" tienes el examen de abril resuelto pregunta a pregunta con este método.</p>
`,

/* ================================================================== */
ratios: String.raw`
<h2>1. Qué es un ratio y cómo interpretarlo (DF10)</h2>
<p>Un <strong>ratio</strong> es el cociente entre dos magnitudes relacionadas que se quieren comparar. Cada uno ilumina un aspecto: equilibrio financiero, liquidez y solvencia, endeudamiento e independencia financiera, garantía, capitalización, gestión de activos, márgenes, rentabilidad y apalancamiento.</p>
<div class="key"><span class="label">Un ratio solo no dice nada</span><p>Hay que compararlo con: (1) los de la misma empresa en otros años (evolución); (2) los presupuestados (objetivos); (3) valores "ideales" de referencia; (4) los del sector.</p></div>
<div class="warn"><span class="label">Signos negativos</span><p>Si divides dos magnitudes negativas (pérdidas entre fondos propios negativos en una quiebra), el ratio sale positivo y parece una rentabilidad buena. Mira siempre los signos de los componentes.</p></div>

<h2>2. Ratios de liquidez (corto plazo)</h2>
<table>
<tr><th>Ratio</th><th>Fórmula</th><th>Referencia orientativa</th></tr>
<tr><td>Liquidez (solvencia a corto)</td><td>Activo corriente / Pasivo corriente</td><td>entre 1,5 y 2</td></tr>
<tr><td>Tesorería (prueba ácida)</td><td>(Realizable + Disponible) / Pasivo corriente</td><td>alrededor de 1</td></tr>
<tr><td>Disponibilidad</td><td>Disponible / Pasivo corriente</td><td>0,1–0,3</td></tr>
</table>
<p>Un valor muy alto tampoco es bueno: indica recursos ociosos (dinero parado que no rinde).</p>

<h2>3. Endeudamiento y solvencia (largo plazo)</h2>
<table>
<tr><th>Ratio</th><th>Fórmula</th><th>Qué mide</th></tr>
<tr><td>Endeudamiento</td><td>Pasivo total / (PN + Pasivo)</td><td>qué parte del activo se financia con deudas</td></tr>
<tr><td>Autonomía (independencia financiera)</td><td>PN / Pasivo</td><td>dependencia de los acreedores</td></tr>
<tr><td>Garantía (solvencia total)</td><td>Activo total / Pasivo total</td><td>si vendiéndolo todo se podría pagar todo (debe ser &gt; 1)</td></tr>
<tr><td>Calidad de la deuda</td><td>Pasivo corriente / Pasivo total</td><td>cuanto menor, mejor (deuda a más plazo)</td></tr>
<tr><td>Capacidad de devolución</td><td>(BN + Amortización) / Préstamos</td><td>qué parte de la deuda se devuelve con el cash-flow de un año</td></tr>
<tr><td>Gastos financieros sobre ventas</td><td>Gastos financieros / Ventas</td><td>peso de los intereses</td></tr>
</table>

<h2>4. Ratios de actividad y gestión</h2>
<ul><li><strong>Rotación del activo</strong> = Ventas / Activo total: cuántas um se venden por cada um invertida.</li>
<li><strong>Plazo de cobro</strong> = Clientes / Ventas × 360 (días); <strong>plazo de pago</strong> = Proveedores / Compras × 360.</li>
<li><strong>Rotación de existencias</strong> = CMV / Existencias medias; días de almacén = 360 / rotación.</li>
<li><strong>Productividad</strong> = Ventas (o valor añadido) / n.º de empleados.</li>
<li><strong>Margen sobre ventas</strong> = BAII / Ventas.</li></ul>

<h2>5. Rentabilidad y apalancamiento</h2>
<div class="formula" style="text-align:center">ROA (rentabilidad económica) = BAII / Activo total<br>ROE (rentabilidad financiera) = BN / Patrimonio neto</div>
<ul><li>La <strong>ROA</strong> mide lo que rinden los activos, independientemente de cómo se financian. Se descompone en margen × rotación: $\frac{BAII}{Ventas}\cdot\frac{Ventas}{Activo}$.</li>
<li>La <strong>ROE</strong> mide lo que ganan los socios por cada um que han aportado.</li></ul>
<div class="key"><span class="label">Apalancamiento financiero</span>
<p>$\text{AF}=\dfrac{\text{Activo}}{\text{PN}}\cdot\dfrac{\text{BAI}}{\text{BAII}}$. Si AF &gt; 1, el endeudamiento <strong>aumenta</strong> la ROE: la deuda rinde (ROA) más de lo que cuesta (interés). Si AF &lt; 1, endeudarse perjudica a los socios.</p></div>
<div class="num" data-a="0.15" data-tol="0.001" data-show="0,15 (15%)"><p>BN de 150 y patrimonio neto de 1.000. ¿ROE (en tanto por uno)?</p>
<div class="why"><p>150/1.000 = 0,15, es decir, un 15%.</p></div></div>
`,

/* ================================================================== */
costes: String.raw`
<h2>1. Contabilidad de gestión y de costes (DF12)</h2>
<p>La <strong>contabilidad de gestión</strong> (o interna) reúne técnicas contables poco normalizadas que dan información útil para tomar decisiones, más allá de la contabilidad financiera (externa, normalizada). La <strong>contabilidad de costes</strong> forma parte de ella: es un sistema de información sobre la actividad productiva, útil para gestionar, y también da datos a la financiera (por ejemplo, para valorar existencias).</p>
<p>Al ser interna, no sigue una norma: cada empresa adapta su modelo. Los tres tradicionales son:</p>
<ul><li><strong>Full-Cost</strong>: busca el coste más real posible de productos, producción y existencias, separándolo por centros de coste.</li>
<li><strong>Direct-Cost</strong>: calcula la rentabilidad de cada producto para decidir.</li>
<li><strong>ABC</strong> (activity based costing): evolución del Full-Cost que mejora el reparto de los costes indirectos usando las actividades que los generan.</li></ul>

<h2>2. Full-Cost</h2>
<p>Sostiene que todos los costes de producir y vender se pueden asignar a <strong>centros de coste</strong> (tradicionalmente: aprovisionamiento, transformación, comercial y administración) y, los de aprovisionamiento y transformación, a cada producto.</p>
<div class="def"><span class="label">Directos e indirectos</span><ul>
<li><strong>Coste directo</strong>: se puede asignar objetivamente a un producto o centro (los envases del jabón líquido son del producto jabón).</li>
<li><strong>Coste indirecto</strong>: lo comparten varios productos (la electricidad de la fábrica). Se reparte con una <strong>unidad de obra</strong> o criterio de reparto (por ejemplo, horas de funcionamiento de cada línea).</li></ul></div>
<p>Clasificación: costes industriales (aprovisionamiento y transformación; directos e indirectos) y costes de estructura (comercial y administración).</p>
<table>
<tr><th>Cuenta de resultados Full-Cost</th></tr>
<tr><td>Ingresos por ventas</td></tr>
<tr><td>− Costes industriales = <strong>Margen industrial</strong></td></tr>
<tr><td>− Costes comerciales = <strong>Margen comercial</strong></td></tr>
<tr><td>− Costes de administración = <strong>Resultado Full-Cost</strong></td></tr>
</table>
<p>Proceso: captar la información (contabilidad financiera y costes calculados) → imputar los costes a los centros (primera estadística de costes) → imputar los costes de los centros a los productos (segunda estadística) → cuenta de resultados.</p>
<div class="warn"><span class="label">La trampa del Full-Cost</span><p>Como reparte los costes fijos entre productos con criterios más o menos arbitrarios, el "coste unitario" y el "resultado por producto" dependen del reparto. Usarlos para decidir (eliminar un producto, rechazar un pedido) lleva a errores: es lo que muestran los ejercicios E2-3 y E2-5.</p></div>

<h2>3. Direct-Cost</h2>
<p>Solo se imputan a los productos los costes <strong>variables</strong> (y directos). Los fijos no se reparten: se restan en bloque del total del periodo.</p>
<div class="def"><span class="label">Fijos y variables</span><ul>
<li><strong>Variables</strong>: cambian en proporción a la actividad (materia prima, comisiones sobre ventas, pago por pieza a un autónomo, embalajes, energía de las máquinas).</li>
<li><strong>Fijos</strong>: no cambian con la actividad, dentro de un rango y a corto plazo (alquiler, sueldos fijos, amortizaciones, seguros, administración).</li>
<li>A largo plazo todos los costes son variables.</li></ul></div>
<div class="formula" style="text-align:center">Margen de contribución unitario: mc = pv − cv<br>Margen de contribución total: MC = (pv − cv)·x<br>Resultado = MC − CF</div>
<p>El margen de contribución es lo que cada unidad aporta para cubrir los costes fijos y, una vez cubiertos, para generar beneficio.</p>

<h2>4. Punto de equilibrio (umbral de rentabilidad, punto muerto)</h2>
<div class="formula" style="text-align:center">x<sub>eq</sub> = CF / (pv − cv)<br>Para un beneficio objetivo B: x = (CF + B) / (pv − cv)<br>En unidades monetarias: Ventas<sub>eq</sub> = CF / (1 − cv/pv)</div>
<p>Por debajo de $x_{eq}$ hay pérdidas; por encima, beneficios. Gráficamente: corte de la recta de ingresos $pv\cdot x$ con la de costes totales $CF+cv\cdot x$.</p>
<ul><li><strong>Margen de seguridad</strong>: cuánto pueden caer las ventas antes de entrar en pérdidas, $\frac{x-x_{eq}}{x}$.</li>
<li><strong>Varios productos</strong> con una proporción fija de ventas (E2-6): trabaja con un "lote" (por ejemplo, 4 A + 1 B) y su margen conjunto.</li></ul>
<div class="num" data-a="775" data-unit="uf"><p>CF = 3.720 um, pv = 10, cv = 5,2. Punto de equilibrio:</p>
<div class="why"><p>3.720 / 4,8 = 775 uf (E2-1).</p></div></div>

<h2>5. Decisiones a corto plazo con Direct-Cost</h2>
<table>
<tr><th>Decisión</th><th>Criterio</th></tr>
<tr><td>Aceptar un <strong>pedido especial</strong> (con capacidad ociosa)</td><td>Se acepta si el ingreso extra supera los costes variables extra + los fijos extra específicos. Los fijos de siempre no cuentan.</td></tr>
<tr><td><strong>Eliminar un producto</strong></td><td>Solo si su margen de contribución es negativo (o si los fijos que desaparecen con él superan su MC).</td></tr>
<tr><td><strong>Recurso escaso</strong> (horas, materia prima)</td><td>Prioriza por margen de contribución <strong>por unidad de recurso escaso</strong>, respetando la demanda máxima.</td></tr>
<tr><td><strong>Fabricar o comprar</strong></td><td>Compara el precio de compra con el coste variable de fabricar (más los fijos que se ahorrarían).</td></tr>
<tr><td><strong>Precio mínimo</strong> a corto plazo</td><td>El coste variable unitario (cualquier precio superior aporta margen).</td></tr>
</table>
<div class="tf" data-a="f"><p>Si un producto tiene resultado negativo en el Full-Cost, eliminarlo siempre mejora el resultado de la empresa.</p>
<div class="why"><p>Si su margen de contribución es positivo, eliminarlo empeora el resultado: los fijos que tenía asignados siguen ahí y se reparten entre los demás (E2-5).</p></div></div>
`,

/* ================================================================== */
economia: String.raw`
<h2>1. Conceptos básicos (E1)</h2>
<div class="def"><span class="label">Economía</span><p>Ciencia <strong>social</strong> que estudia cómo las personas y las sociedades utilizan recursos <strong>escasos</strong>, que tienen usos alternativos, para producir bienes y servicios y distribuirlos con el fin de satisfacer necesidades (materiales e inmateriales).</p></div>
<ul><li><strong>Escasez</strong>: las necesidades son ilimitadas y los recursos, limitados. No es lo mismo que pobreza: es un concepto relativo y afecta también a los ricos.</li>
<li><strong>Elección</strong>: la escasez obliga a decidir <strong>qué</strong> producir, <strong>cómo</strong> y <strong>para quién</strong>.</li>
<li><strong>Coste de oportunidad</strong>: lo que se renuncia al elegir; el valor de la mejor alternativa no elegida.</li>
<li><strong>Factores productivos</strong> clásicos: tierra (recursos naturales), trabajo y capital (bienes de equipo). A veces se añade la capacidad empresarial o la tecnología.</li>
<li><strong>Flujo circular de la renta</strong>: las familias venden factores a las empresas a cambio de rentas, y con ellas compran los bienes que producen las empresas.</li></ul>
<h3>Frontera de posibilidades de producción (FPP)</h3>
<p>Muestra las combinaciones máximas de dos bienes que se pueden producir con los recursos y la tecnología disponibles.</p>
<ul><li>Puntos sobre la curva: eficientes. Debajo: ineficientes (recursos parados). Encima: inalcanzables.</li>
<li>Es <strong>cóncava</strong> (curvada hacia fuera) porque el coste de oportunidad es creciente: cada vez cuesta más producir una unidad más de un bien.</li>
<li><strong>Crecimiento económico</strong>: la frontera se desplaza hacia fuera (más recursos o mejor tecnología).</li></ul>
<div class="tf" data-a="v"><p>Un punto por debajo de la frontera de posibilidades de producción indica que hay recursos desempleados o mal usados.</p>
<div class="why"><p>Se podría producir más de un bien sin producir menos del otro: es ineficiente.</p></div></div>
<h3>Sistemas económicos</h3>
<table>
<tr><th>Sistema</th><th>Quién decide</th><th>Ventajas</th><th>Inconvenientes</th></tr>
<tr><td>Economía de mercado (capitalista)</td><td>el mercado, mediante los precios ("mano invisible" de Adam Smith); propiedad privada</td><td>eficiencia, incentivos a innovar, libertad</td><td>desigualdad, crisis cíclicas, no provee bienes públicos, externalidades</td></tr>
<tr><td>Economía planificada</td><td>el Estado, con un plan central</td><td>redistribución de rentas, inversión en infraestructuras</td><td>excedentes y escasez, falta de incentivos, imposición frente a libertad, no evita la corrupción</td></tr>
<tr><td>Economía mixta</td><td>mercado + intervención pública</td><td>combina ventajas</td><td>es la más frecuente en la práctica</td></tr>
</table>
<p>Escuelas de pensamiento: clásicos y neoclásicos (el mercado se autorregula), keynesianos (el Estado debe intervenir en las crisis), monetaristas, marxistas y variantes liberales.</p>

<h2>2. Microeconomía (E2)</h2>
<p>Estudia el comportamiento de las unidades económicas individuales y los mercados donde se encuentran oferentes y demandantes. Agentes:</p>
<ul><li><strong>Economías domésticas</strong>: individuos y familias, sin intencionalidad mercantil.</li>
<li><strong>Empresas</strong>: coordinan trabajo y capital para producir con ánimo de lucro.</li>
<li><strong>Sector público</strong>: regula, produce servicios públicos y redistribuye.</li></ul>
<h3>Demanda y oferta</h3>
<div class="formula" style="text-align:center">Q<sub>A</sub><sup>d</sup> = D(P<sub>A</sub>, Y, P<sub>B</sub>, G)  — precio, renta, precios de otros bienes, gustos<br>Q<sub>A</sub><sup>o</sup> = O(P<sub>A</sub>, P<sub>B</sub>, r, z, H)  — precio, otros precios, precio de los factores, tecnología, preferencias de los productores</div>
<p>Suponiendo un <strong>mercado perfecto</strong> (muchos compradores y vendedores, cada uno insignificante) y <em>ceteris paribus</em> (todo constante salvo el precio):</p>
<ul><li>La demanda relaciona precio y cantidad de forma <strong>inversa</strong> (curva decreciente).</li>
<li>La oferta, de forma <strong>directa</strong> (curva creciente).</li>
<li><strong>Equilibrio</strong>: el precio al que la cantidad demandada iguala a la ofrecida. Por encima hay exceso de oferta (presión a bajar precios); por debajo, exceso de demanda.</li></ul>
<div class="key"><span class="label">Moverse por la curva o desplazarla</span><p>Un cambio del <strong>precio del propio bien</strong> te mueve a lo largo de la curva. Un cambio de cualquier otro factor (renta, gustos, precios de bienes relacionados, tecnología, coste de los factores) <strong>desplaza</strong> la curva entera.</p></div>
<h3>Tipos de bienes</h3>
<ul><li><strong>Normal</strong>: si sube la renta, sube su demanda. <strong>Inferior</strong>: si sube la renta, baja (se sustituye por algo mejor).</li>
<li><strong>Complementarios</strong>: se usan juntos; si sube el precio de uno, baja la demanda del otro (coche y gasolina).</li>
<li><strong>Sustitutivos</strong>: satisfacen la misma necesidad; si sube el precio de uno, sube la demanda del otro.</li></ul>
<h3>Precios máximos y mínimos</h3>
<p>Un <strong>precio máximo</strong> por debajo del equilibrio (por ejemplo, alquileres) crea exceso de demanda: escasez, colas, mercado negro. Un <strong>precio mínimo</strong> por encima (salario mínimo, precios agrícolas garantizados) crea exceso de oferta: excedentes.</p>
<h3>Elasticidad</h3>
<div class="formula" style="text-align:center">E<sub>p</sub> = (variación % de la cantidad demandada) / (variación % del precio)  (en valor absoluto)</div>
<ul><li>$E_p\gt1$: <strong>elástica</strong> (la cantidad reacciona mucho). $E_p\lt1$: <strong>inelástica</strong>. $E_p=1$: unitaria.</li>
<li>Importa porque el <strong>ingreso total</strong> (P·Q) depende de ella: si la demanda es elástica, subir el precio reduce el ingreso; si es inelástica, lo aumenta.</li>
<li>Más elástica cuando: hay sustitutivos fáciles, el bien pesa mucho en el presupuesto, no es de primera necesidad, y cuanto más tiempo se considera.</li>
<li>Otras: <strong>elasticidad cruzada</strong> (respuesta a precios de otro bien) y <strong>elasticidad renta</strong>.</li></ul>
<div class="num" data-a="2"><p>El precio sube un 5% y la cantidad demandada baja un 10%. ¿Elasticidad precio (en valor absoluto)?</p>
<div class="why"><p>10/5 = 2: demanda elástica. El ingreso total baja.</p></div></div>
<h3>Formas de competencia</h3>
<table>
<tr><th>Mercado</th><th>Características</th></tr>
<tr><td>Competencia perfecta</td><td>muchos oferentes y demandantes, producto homogéneo, información perfecta, libre entrada: nadie influye en el precio</td></tr>
<tr><td>Monopolio</td><td>un solo oferente que fija el precio; produce menos y más caro</td></tr>
<tr><td>Oligopolio</td><td>pocos oferentes que se vigilan (riesgo de acuerdos)</td></tr>
<tr><td>Competencia monopolística</td><td>muchos oferentes con productos diferenciados (marcas)</td></tr>
</table>

<h2>3. Macroeconomía (E3)</h2>
<p>Estudia el comportamiento global de la economía a través de pocas variables agregadas, para diagnosticar su salud y fijar objetivos de política económica.</p>
<h3>Los cinco indicadores</h3>
<ul><li><strong>Inflación</strong>: tasa porcentual de aumento del nivel general de precios en un periodo (se mide con índices de precios, como el IPC).</li>
<li><strong>Desempleo</strong>: parte de la población activa (en edad, condiciones y disposición de trabajar) que no tiene trabajo.</li>
<li><strong>Crecimiento</strong>: tasa de aumento del producto real (PNB a precios constantes).</li>
<li><strong>Déficit público</strong>: gastos públicos − ingresos públicos.</li>
<li><strong>Desequilibrio exterior</strong>: importaciones mayores que exportaciones (el país absorbe más recursos de los que produce).</li></ul>
<h3>Medición de la riqueza</h3>
<ul><li><strong>Producto nacional</strong>: valor de todos los bienes y servicios <strong>finales</strong> producidos en un año. Se puede calcular sumando los <strong>valores añadidos</strong> (ventas − bienes intermedios) de todas las empresas, para no contar dos veces.</li>
<li><strong>Interior</strong> (dentro de las fronteras, sea quien sea el propietario) frente a <strong>nacional</strong> (factores del país, estén donde estén): $\text{PNB}=\text{PIB}-\text{RRE}+\text{RRN}$.</li>
<li>Por el lado del gasto: $\text{PIB}=C+I+G+X-M$.</li>
<li><strong>Precios corrientes</strong>: los del año de producción. <strong>Constantes</strong>: los de un año base; eliminan el efecto de la inflación y muestran el crecimiento real.</li>
<li><strong>Renta nacional</strong> (Y): suma de las remuneraciones de los factores (salarios, rentas de la tierra, intereses, beneficios).</li>
<li><strong>Renta personal</strong>: renta nacional − beneficios no distribuidos − impuestos sobre beneficios − cotizaciones empresariales + transferencias recibidas. <strong>Renta personal disponible</strong>: renta personal − impuestos directos. Se destina a consumo o ahorro.</li></ul>
<h3>Demanda y oferta agregadas, ciclos y política</h3>
<ul><li>La estabilidad exige equilibrio entre <strong>demanda agregada</strong> y <strong>oferta agregada</strong>.</li>
<li>La economía avanza en <strong>ciclos</strong>: expansión, auge, contracción (recesión), depresión, recuperación.</li>
<li><strong>Clásicos</strong>: precios y salarios flexibles hacen que la economía se ajuste sola. La Gran Depresión de los años 30 mostró que a veces no funciona.</li>
<li><strong>Keynes</strong>: el Estado debe intervenir aumentando la demanda (gasto público, menos impuestos). El gasto inicial genera rondas de consumo: <strong>efecto multiplicador</strong>.</li>
<li>Políticas <strong>expansivas</strong> (aumentar el PIB) o <strong>restrictivas</strong> (frenar la inflación). Fiscales (gasto e impuestos) o monetarias (tipo de interés, cantidad de dinero).</li>
<li>La capacidad de intervención está limitada por el equilibrio presupuestario. Un déficit se financia con deuda pública, más impuestos o emisión de dinero.</li></ul>
<h3>El dinero</h3>
<p>Activo aceptado para comprar, pagar deudas y medir el valor. Tres funciones: <strong>medio de cambio</strong> (evita el trueque), <strong>unidad de cuenta</strong> (permite poner precios) y <strong>depósito de valor</strong> (guarda poder adquisitivo).</p>
<p>Incluye billetes, monedas y <strong>depósitos bancarios</strong>. Por eso los bancos <strong>crean dinero</strong> al conceder préstamos (el préstamo genera un depósito que a su vez se presta en parte: <strong>multiplicador monetario</strong>) y lo destruyen cuando se devuelven préstamos.</p>
<h3>Economía internacional</h3>
<ul><li>El comercio permite consumir más de lo que cada país produciría aislado. Para comprar fuera hay que vender productos nacionales o endeudarse.</li>
<li>La <strong>balanza de pagos</strong> registra todas las transacciones con el exterior (cuenta corriente, de capital y financiera).</li>
<li>El <strong>tipo de cambio</strong> es el precio en moneda nacional de una unidad de moneda extranjera. Junto con los <strong>aranceles</strong>, regula el comercio exterior: si la moneda se deprecia, las exportaciones se abaratan y las importaciones se encarecen.</li></ul>
<div class="tf" data-a="v"><p>Si el euro se deprecia frente al dólar, los productos europeos se vuelven más baratos para los estadounidenses.</p>
<div class="why"><p>Con la misma cantidad de dólares compran más euros, y por tanto más productos europeos: las exportaciones europeas se ven favorecidas.</p></div></div>
`

};
