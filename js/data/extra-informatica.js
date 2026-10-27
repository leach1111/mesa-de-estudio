EXTRA.informatica = [

{ t: "basicos", after: "3. Variables", html: String.raw`
<h3 class="visual-h">Visualízalo: una variable es una caja con nombre</h3>
<p>Cada variable reserva un espacio en la memoria del ordenador, con un <strong>nombre</strong>, un <strong>tipo</strong> (que decide qué cabe dentro y cuánto ocupa) y un <strong>valor</strong>. Después de <code>int n = 5; double x = 2.5; char c = 'A'; bool ok = true;</code> la memoria se puede imaginar así:</p>
<div class="mem"><div class="frame"><h5>Memoria de main</h5>
<div class="var"><b>n</b><span>5</span><small>int · 4 bytes</small></div>
<div class="var"><b>x</b><span>2.5</span><small>double · 8 bytes</small></div>
<div class="var"><b>c</b><span>'A' (65)</span><small>char · 1 byte</small></div>
<div class="var"><b>ok</b><span>1</span><small>bool</small></div></div></div>
<h3>Desbordamiento (overflow)</h3>
<p>Como un <code>int</code> ocupa 4 bytes, solo puede guardar valores entre $-2\,147\,483\,648$ y $2\,147\,483\,647$ (constantes <code>INT_MIN</code> e <code>INT_MAX</code> de <code>&lt;climits&gt;</code>). Si un cálculo se pasa, el resultado "da la vuelta" y sale un número sin sentido, <strong>sin ningún mensaje de error</strong>. Lo vimos en el laboratorio 5:</p>
<pre class="cpp">
int x = INT_MAX;
cout << x + 1;            // -2147483648  (¡ha dado la vuelta!)

int f = 1;
for (int i = 1; i <= 13; i++) f = f * i;
cout << f;                // 1932053504, pero 13! = 6227020800

long long g = 1;          // entero de 8 bytes: hasta unos 9·10^18
for (int i = 1; i <= 13; i++) g = g * i;
cout << g;                // 6227020800 (correcto)
</pre>
<div class="tip"><span class="label">Cómo evitarlo</span><p>Si los números pueden crecer mucho (factoriales, potencias, productos), usa <code>long long</code> o <code>double</code>. En el examen, divide antes de multiplicar cuando puedas: <code>a / mcd * b</code> en lugar de <code>a * b / mcd</code>.</p></div>
`},
{ t: "basicos", after: "4. Asignación", html: String.raw`
<h3 class="visual-h">Traza: intercambiar dos variables</h3>
<p>Para intercambiar los valores de <code>a</code> y <code>b</code> hace falta una variable auxiliar. Sin ella, la primera asignación borraría uno de los valores.</p>
<div class="steps"><p>Partimos de <code>int a = 3, b = 7, aux;</code></p>
<div class="step"><code>aux = a;</code> → a = 3, b = 7, aux = 3 (guardamos el valor de a).</div>
<div class="step"><code>a = b;</code> → a = 7, b = 7, aux = 3 (a recibe el valor de b; el 3 solo está en aux).</div>
<div class="step"><code>b = aux;</code> → a = 7, b = 3, aux = 3. Intercambio completado.</div></div>
<div class="tf" data-a="f"><p>Las instrucciones <code>a = b; b = a;</code> intercambian los valores de a y b.</p>
<div class="why"><p>Tras <code>a = b</code> las dos valen lo mismo (el valor de b) y el valor original de a se ha perdido. Hace falta <code>aux</code>.</p></div></div>
`},
{ t: "basicos", after: "7. Entrada y salida", html: String.raw`
<h3>Redirección: usar ficheros sin cambiar el programa</h3>
<p>En el laboratorio 5 se ejecuta un programa que lee de <code>cin</code> tomando los datos de un fichero, sin modificar el código, usando la <strong>redirección</strong> del terminal:</p>
<pre class="out">
programa.exe < entrada.txt              (cin lee de entrada.txt)
programa.exe > salida.txt               (cout escribe en salida.txt)
programa.exe < entrada.txt > salida.txt (las dos cosas)
</pre>
<p>Es útil para probar un programa con muchos datos sin teclearlos cada vez. Para que el propio programa abra los ficheros, se usan <code>ifstream</code> y <code>ofstream</code> (tema de ficheros).</p>
`},
{ t: "basicos", after: "8. Caracteres", html: String.raw`
<h3 class="visual-h">Tabla: códigos ASCII que conviene conocer</h3>
<table class="trace">
<tr><th>Carácter</th><th>'0'</th><th>'9'</th><th>'A'</th><th>'Z'</th><th>'a'</th><th>'z'</th><th>' ' (espacio)</th></tr>
<tr><th>Código</th><td>48</td><td>57</td><td>65</td><td>90</td><td>97</td><td>122</td><td>32</td></tr>
</table>
<p>La distancia entre una minúscula y su mayúscula es siempre $97-65=32$. Por eso <code>c - 'a' + 'A'</code> convierte a mayúscula sin necesidad de memorizar los números.</p>
`},
{ t: "basicos", after: "9. Tuplas", html: String.raw`
<h3>Tuplas que contienen tuplas (laboratorio 2b)</h3>
<p>Un campo de una tupla puede ser otra tupla. Así se modelan datos con estructura, como una persona con una fecha de nacimiento:</p>
<pre class="cpp">
struct tFecha {
    int dia, mes, any;
};
struct tPersona {
    string nombre;
    tFecha nacimiento;        // un campo que es otra tupla
};

int main() {
    tPersona p = {"Ana", {12, 3, 2006}};   // llaves dentro de llaves
    cout << p.nombre << " " << p.nacimiento.dia << "/" << p.nacimiento.mes;
    p.nacimiento.any = 2007;               // se encadenan los puntos
}
</pre>
<p>La tupla interior (<code>tFecha</code>) debe declararse <strong>antes</strong> que la que la usa. Por convenio, en la asignatura los nombres de tipo empiezan por <code>t</code>.</p>
`},

{ t: "alternativas", after: "2. if, if-else", html: String.raw`
<h3 class="visual-h">Diagrama de flujo de un if-else</h3>
<div class="flow">
<div class="fb">instrucciones anteriores</div><div class="ar"></div>
<div class="fb dec">¿condición?</div>
<div class="row"><div class="col"><div class="lab">cierta</div><div class="ar"></div><div class="fb">bloque del <code>if</code></div></div>
<div class="col"><div class="lab">falsa</div><div class="ar"></div><div class="fb">bloque del <code>else</code></div></div></div>
<div class="ar"></div><div class="fb">el programa continúa (los dos caminos se juntan)</div>
</div>
<p>Solo se ejecuta <strong>uno</strong> de los dos bloques. Sin <code>else</code>, si la condición es falsa no se hace nada y se continúa.</p>
<h3>Indentación (laboratorio 4)</h3>
<p>Indentar es desplazar hacia la derecha las instrucciones que están dentro de un bloque. Al compilador le da igual, pero a las personas no: un código bien indentado deja ver de un vistazo qué depende de qué.</p>
<div class="blocks" style="grid-template-columns:1fr 1fr">
<div class="bk"><b>Mal indentado</b>
<pre class="cpp">
if (a > b) {
cout << a;
if (a > 0)
cout << " positivo";
} else
cout << b;
</pre></div>
<div class="bk"><b>Bien indentado</b>
<pre class="cpp">
if (a > b) {
    cout << a;
    if (a > 0)
        cout << " positivo";
} else {
    cout << b;
}
</pre></div></div>
<p>Regla: cada <code>{</code> aumenta un nivel (4 espacios o un tabulador) y cada <code>}</code> lo reduce. En Code::Blocks, el menú <em>Plugins → Source code formatter</em> lo hace automáticamente.</p>
`},

{ t: "iterativas", after: "2. Las tres instrucciones", html: String.raw`
<h3 class="visual-h">Diagramas de flujo de los tres bucles</h3>
<div class="blocks" style="grid-template-columns:repeat(auto-fit,minmax(230px,1fr))">
<div class="bk"><b>while</b>
<div class="flow" style="margin:.6em auto">
<div class="loop" data-l="se repite"><div class="fb dec">¿condición?</div><div class="lab">cierta ↓ · falsa → sale</div><div class="ar"></div><div class="fb">cuerpo</div><div class="lab">vuelve a la condición ↑</div></div>
</div><small>La condición va primero: el cuerpo puede no ejecutarse nunca.</small></div>
<div class="bk"><b>do-while</b>
<div class="flow" style="margin:.6em auto">
<div class="loop" data-l="se repite"><div class="fb">cuerpo</div><div class="ar"></div><div class="fb dec">¿condición?</div><div class="lab">cierta: vuelve arriba ↑ · falsa → sale</div></div>
</div><small>El cuerpo va primero: se ejecuta al menos una vez.</small></div>
<div class="bk"><b>for</b>
<div class="flow" style="margin:.6em auto">
<div class="fb">inicialización (una vez)</div><div class="ar"></div>
<div class="loop" data-l="se repite"><div class="fb dec">¿condición?</div><div class="lab">cierta ↓ · falsa → sale</div><div class="ar"></div><div class="fb">cuerpo</div><div class="ar"></div><div class="fb">actualización (<code>i++</code>)</div></div>
</div><small>Es un while con la inicialización y la actualización "empaquetadas".</small></div>
</div>
`},
{ t: "iterativas", after: "3. Diseñar un bucle", html: String.raw`
<h3 class="visual-h">Traza paso a paso: suma de las cifras de 4072</h3>
<p>Así se hace una traza: una columna por variable, una fila por vuelta, y se evalúa la condición antes de cada vuelta.</p>
<div class="steps"><p><code>int n = 4072, s = 0; while (n != 0) { s += n % 10; n /= 10; }</code></p>
<div class="step">Antes de empezar: n = 4072, s = 0. ¿n != 0? Sí.</div>
<div class="step">Vuelta 1: n % 10 = 2 → s = 2; n = 407. ¿n != 0? Sí.</div>
<div class="step">Vuelta 2: n % 10 = 7 → s = 9; n = 40. ¿n != 0? Sí.</div>
<div class="step">Vuelta 3: n % 10 = 0 → s = 9; n = 4. ¿n != 0? Sí.</div>
<div class="step">Vuelta 4: n % 10 = 4 → s = 13; n = 0. ¿n != 0? No: el bucle termina con s = 13.</div></div>
<table class="trace"><tr><th>vuelta</th><th>n (antes)</th><th>n % 10</th><th>s</th><th>n (después)</th></tr>
<tr><td>1</td><td>4072</td><td>2</td><td>2</td><td>407</td></tr><tr><td>2</td><td>407</td><td>7</td><td>9</td><td>40</td></tr>
<tr><td>3</td><td>40</td><td>0</td><td>9</td><td>4</td></tr><tr><td>4</td><td>4</td><td>4</td><td>13</td><td>0</td></tr></table>
<div class="num" data-a="4"><p>¿Cuántas vueltas da el bucle anterior con <code>n = 9001</code>?</p><div class="why"><p>Una por cifra: 9001 → 900 → 90 → 9 → 0. Cuatro vueltas (y la suma vale 10).</p></div></div>
`},

{ t: "ficheros", after: "3. Leer hasta el final", html: String.raw`
<h3 class="visual-h">Visualízalo: el cursor de lectura</h3>
<p>Un <code>ifstream</code> lleva un "cursor" que avanza a medida que se lee. Cada <code>fin &gt;&gt; x</code> se salta los espacios y saltos de línea, lee el siguiente dato y deja el cursor justo después.</p>
<div class="mem"><div class="frame" style="min-width:320px"><h5>alumnos.txt</h5>
<div class="var"><b>1</b><span>Ana 7.5</span><small>← vuelta 1: nom = "Ana", nota = 7.5</small></div>
<div class="var"><b>2</b><span>Luis 4.0</span><small>← vuelta 2</small></div>
<div class="var"><b>3</b><span>Marta 9.2</span><small>← vuelta 3</small></div>
<div class="var ref"><b>fin</b><span>EOF</span><small>← la lectura falla: el while termina</small></div></div></div>
<p>Con <code>while (fin &gt;&gt; nom &gt;&gt; nota)</code>, el bucle da exactamente tres vueltas: en la cuarta la lectura falla (fin de fichero) y la condición es falsa <strong>antes</strong> de procesar nada.</p>
`},

{ t: "subprogramas", after: "3. Acciones", html: String.raw`
<h3>Equivalencia entre funciones y acciones (laboratorio 8)</h3>
<p>Toda función se puede reescribir como una acción que devuelve el resultado en un parámetro por referencia, y al revés (si la acción tiene un único resultado):</p>
<div class="blocks" style="grid-template-columns:1fr 1fr">
<div class="bk"><b>Función</b>
<pre class="cpp">
float vabs(float x) {
    if (x < 0) return -x;
    return x;
}
// uso:
y = vabs(-2.5);
</pre></div>
<div class="bk"><b>Acción equivalente</b>
<pre class="cpp">
void vabs(float x, float & r) {
    if (x < 0) r = -x;
    else r = x;
}
// uso:
vabs(-2.5, y);
</pre></div></div>
<p>La función es más cómoda cuando hay un solo resultado, porque se puede usar dentro de expresiones (<code>z = 2 * vabs(a) + 1</code>). Las acciones también sirven para <strong>leer datos</strong> (una acción <code>leerPunto(double &amp; x, double &amp; y)</code>) o <strong>mostrar resultados</strong> (una acción con parámetros por valor que hace <code>cout</code>).</p>
`},
{ t: "subprogramas", after: "4. Parámetros", html: String.raw`
<h3 class="visual-h">Visualízalo: valor frente a referencia en la memoria</h3>
<p>Llamada <code>f(x, y)</code> con <code>void f(int a, int &amp; b)</code> y, en <code>main</code>, <code>x = 1</code>, <code>y = 1</code>:</p>
<div class="mem">
<div class="frame"><h5>main</h5><div class="var"><b>x</b><span>1</span></div><div class="var"><b>y</b><span>1 → 2</span></div></div>
<div class="frame"><h5>f (mientras se ejecuta)</h5><div class="var"><b>a</b><span>1 → 2</span><small>copia de x</small></div><div class="var ref"><b>b</b><span>→ y</span><small>otro nombre de y</small></div></div>
</div>
<p><code>a</code> es una caja nueva que se rellena con una copia de <code>x</code>: modificarla no afecta a <code>x</code>, y desaparece al terminar <code>f</code>. <code>b</code> no es una caja nueva: es una etiqueta pegada a la caja de <code>y</code>, así que <code>b = b + 1</code> cambia <code>y</code>.</p>
`}
];
