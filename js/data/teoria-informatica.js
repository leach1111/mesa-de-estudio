THEORY.informatica = {

/* ================================================================== */
basicos: String.raw`
<h2>1. Algoritmo, programa y compilación</h2>
<ul><li>Un <strong>algoritmo</strong> es una secuencia finita y ordenada de pasos no ambiguos que resuelve un problema.</li>
<li>Un <strong>programa</strong> es un algoritmo escrito en un lenguaje de programación (C++ en esta asignatura).</li>
<li>El <strong>compilador</strong> traduce el código fuente (.cpp) a código máquina ejecutable. Si hay errores de sintaxis, no genera el ejecutable: hay que leer el primer mensaje de error y la línea que indica.</li>
<li>Tipos de errores: de <strong>compilación</strong> (sintaxis, tipos), de <strong>ejecución</strong> (división entre 0, fichero que no existe) y <strong>lógicos</strong> (el programa funciona pero da un resultado incorrecto: los más difíciles de encontrar).</li></ul>
<div class="tip"><span class="label">Cómo diseñar un programa</span><ol><li>Entiende qué datos entran y qué resultados salen (pon un ejemplo a mano).</li><li>Piensa el algoritmo en castellano.</li><li>Tradúcelo a C++ por partes y compílalo a menudo.</li><li>Prueba con casos límite (0, negativos, un solo dato).</li></ol></div>

<h2>2. Estructura de un programa C++</h2>
<pre class="cpp">
#include <iostream>      // entrada/salida por consola
#include <fstream>       // ficheros
#include <cmath>         // funciones matemáticas
#include <string>        // cadenas de texto
using namespace std;     // para escribir cout en vez de std::cout

const int MAX = 100;     // constantes globales

struct Persona {         // tipos definidos por el programador
    string nombre;
    int edad;
};

int doble(int x);        // cabeceras de los subprogramas

int main() {             // aquí empieza la ejecución
    int a;               // declaraciones
    cin >> a;            // instrucciones
    cout << doble(a) << endl;
    return 0;            // fin correcto (opcional en main)
}

int doble(int x) {       // definiciones de los subprogramas
    return 2 * x;
}
</pre>
<p>Cada instrucción acaba en <code>;</code>. Los bloques van entre <code>{ }</code>. Los comentarios: <code>// hasta final de línea</code> o <code>/* varias líneas */</code>. C++ distingue mayúsculas de minúsculas: <code>Edad</code> y <code>edad</code> son variables distintas.</p>

<h2>3. Variables, tipos y constantes</h2>
<div class="def"><span class="label">Variable</span><p>Un nombre asociado a un espacio de memoria que guarda un valor de un tipo concreto. Hay que <strong>declararla</strong> antes de usarla (<code>int n;</code>) y conviene <strong>inicializarla</strong>: una variable sin inicializar contiene "basura".</p></div>
<table>
<tr><th>Tipo</th><th>Guarda</th><th>Ejemplos</th><th>Notas</th></tr>
<tr><td><code>int</code></td><td>enteros</td><td><code>0</code>, <code>-17</code></td><td>rango aproximado ±2·10⁹</td></tr>
<tr><td><code>float</code></td><td>reales (precisión simple)</td><td><code>3.5f</code></td><td>unos 7 dígitos</td></tr>
<tr><td><code>double</code></td><td>reales (precisión doble)</td><td><code>3.5</code>, <code>1e-3</code></td><td>unos 15 dígitos; es el que conviene usar</td></tr>
<tr><td><code>char</code></td><td>un carácter</td><td><code>'a'</code>, <code>'\n'</code></td><td>comillas simples; es un código ASCII</td></tr>
<tr><td><code>bool</code></td><td>lógico</td><td><code>true</code>, <code>false</code></td><td>se imprime 1 / 0</td></tr>
<tr><td><code>string</code></td><td>texto</td><td><code>"hola"</code></td><td>comillas dobles; necesita <code>#include &lt;string&gt;</code></td></tr>
</table>
<p><strong>Identificadores</strong> válidos: letras, dígitos y <code>_</code>, sin empezar por dígito, sin espacios ni acentos, y que no sean palabras reservadas (<code>int</code>, <code>while</code>…).</p>
<p><strong>Constantes</strong>: <code>const double G = 9.81;</code>. Su valor no puede cambiar; usarlas hace el programa más legible y fácil de modificar.</p>

<h2>4. Asignación y operadores</h2>
<p><code>x = expresión;</code> evalúa la expresión de la derecha y guarda el resultado en <code>x</code> (lo de la izquierda siempre es una variable). <code>x = x + 1</code> no es una ecuación: significa "el nuevo valor de x es el antiguo más 1".</p>
<table>
<tr><th>Tipo</th><th>Operadores</th></tr>
<tr><td>Aritméticos</td><td><code>+ - * /</code> y <code>%</code> (resto, solo enteros)</td></tr>
<tr><td>Relacionales</td><td><code>== != &lt; &gt; &lt;= &gt;=</code> (dan <code>bool</code>)</td></tr>
<tr><td>Lógicos</td><td><code>&amp;&amp;</code> (y, <code>and</code>), <code>||</code> (o, <code>or</code>), <code>!</code> (no, <code>not</code>)</td></tr>
<tr><td>Compuestos</td><td><code>x += 3</code> es <code>x = x + 3</code>; igual <code>-= *= /= %=</code></td></tr>
<tr><td>Incremento</td><td><code>x++</code>, <code>++x</code>, <code>x--</code>, <code>--x</code> (suman o restan 1)</td></tr>
</table>
<div class="warn"><span class="label">x++ frente a ++x</span><p>Solos en una línea hacen lo mismo. Dentro de una expresión, <code>x++</code> usa el valor <strong>antiguo</strong> y luego incrementa; <code>++x</code> incrementa primero. Con <code>int i = 3;</code>, <code>cout &lt;&lt; i++;</code> imprime 3 (y después i vale 4).</p></div>
<h3>Precedencia (de más a menos)</h3>
<ol><li><code>( )</code></li><li><code>!</code>, <code>++</code>, <code>--</code>, signo <code>-</code></li><li><code>* / %</code></li><li><code>+ -</code></li><li><code>&lt; &lt;= &gt; &gt;=</code></li><li><code>== !=</code></li><li><code>&amp;&amp;</code></li><li><code>||</code></li><li><code>=</code> y compuestos</li></ol>
<p>Los operadores del mismo nivel se evalúan de izquierda a derecha. En caso de duda, pon paréntesis.</p>
<div class="num" data-a="4"><p>¿Cuánto vale <code>2 + 3 * 4 % 5</code>?</p>
<div class="why"><p><code>*</code> y <code>%</code> tienen la misma precedencia, de izquierda a derecha: <code>3*4 = 12</code>, <code>12 % 5 = 2</code>, y <code>2 + 2 = 4</code>.</p></div></div>
<div class="num" data-a="15"><p>¿Qué vale <code>x</code> tras <code>int x = 5; x += 3; x *= 2; x--;</code>?</p>
<div class="why"><p>5 → 8 → 16 → 15.</p></div></div>

<h2>5. Conversiones de tipo</h2>
<ul><li><strong>Implícitas</strong>: en una operación entre <code>int</code> y <code>double</code>, el <code>int</code> se convierte a <code>double</code>. Al asignar un real a un entero, se <strong>trunca</strong> (se pierden los decimales, no se redondea).</li>
<li><strong>Explícitas</strong> (casting): <code>double(n)</code> o <code>(double) n</code>; <code>int(3.99)</code> vale 3.</li>
<li>Entre <code>char</code> e <code>int</code>: <code>int('A')</code> = 65 y <code>char(66)</code> = <code>'B'</code>.</li></ul>
<div class="mc"><p>¿Qué vale <code>7 / 2 * 2.0</code>?</p><ul><li data-ok>6</li><li>7</li><li>7.0 exactamente por la conmutatividad</li><li>3.5</li></ul>
<div class="why"><p>De izquierda a derecha: <code>7 / 2</code> es división entera, 3. Después <code>3 * 2.0 = 6.0</code>.</p></div></div>

<h2>6. Funciones de la biblioteca &lt;cmath&gt;</h2>
<table>
<tr><th>Función</th><th>Calcula</th></tr>
<tr><td><code>sqrt(x)</code></td><td>raíz cuadrada</td></tr>
<tr><td><code>pow(x, y)</code></td><td>$x^y$ (en C++ <code>^</code> no es potencia)</td></tr>
<tr><td><code>abs(x)</code>, <code>fabs(x)</code></td><td>valor absoluto</td></tr>
<tr><td><code>sin, cos, tan, atan</code></td><td>trigonométricas (en <strong>radianes</strong>)</td></tr>
<tr><td><code>exp(x)</code>, <code>log(x)</code>, <code>log10(x)</code></td><td>$e^x$, $\ln x$, $\log_{10}x$</td></tr>
<tr><td><code>round</code>, <code>floor</code>, <code>ceil</code></td><td>redondear, por abajo, por arriba</td></tr>
</table>
<div class="tf" data-a="f"><p>En C++, <code>2^3</code> vale 8.</p>
<div class="why"><p><code>^</code> es el "o exclusivo" bit a bit (2^3 = 1). Para potencias se usa <code>pow(2, 3)</code>, o <code>x*x</code> para cuadrados.</p></div></div>

<h2>7. Entrada y salida por consola</h2>
<pre class="cpp">
int a; double b; string nom; char c;
cin >> a >> b;            // lee separando por espacios o saltos de línea
cin >> nom;               // lee UNA palabra (hasta el primer espacio)
getline(cin, nom);        // lee una línea entera (con espacios)
cin >> c;                 // lee un carácter (saltándose espacios)
cout << "a = " << a << endl;  // endl: salto de línea
cout << fixed << setprecision(2) << b;   // 2 decimales (#include <iomanip>)
</pre>
<div class="tip"><span class="label">Leer fechas y horas con separadores</span><p>Para "25/10/2026" lee el separador en un <code>char</code>: <code>cin &gt;&gt; d &gt;&gt; c &gt;&gt; m &gt;&gt; c &gt;&gt; a;</code>. Es lo que hace el ejercicio de días entre fechas.</p></div>
<p><code>fixed</code> y <code>setprecision</code> afectan a todos los <code>cout</code> posteriores, no solo al siguiente.</p>

<h2>8. Caracteres y strings</h2>
<ul><li>Las letras y los dígitos son consecutivos en ASCII: <code>'a'</code>…<code>'z'</code> (97–122), <code>'A'</code>…<code>'Z'</code> (65–90), <code>'0'</code>…<code>'9'</code> (48–57).</li>
<li>¿Es minúscula?: <code>c &gt;= 'a' &amp;&amp; c &lt;= 'z'</code>. A mayúscula: <code>c - 'a' + 'A'</code>. Dígito a número: <code>c - '0'</code>.</li>
<li>Strings: <code>s.length()</code> (longitud), <code>s[i]</code> (carácter $i$, empezando en 0), <code>s1 + s2</code> (concatenar), <code>==</code> y <code>&lt;</code> (comparación alfabética).</li></ul>

<h2>9. Tuplas (struct)</h2>
<p>Agrupan varios datos relacionados, posiblemente de tipos distintos, bajo un mismo nombre. Cada dato es un <strong>campo</strong>.</p>
<pre class="cpp">
struct Punto {
    double x, y;
};

double distancia(Punto a, Punto b) {
    return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
}

int main() {
    Punto a = {0, 0}, b = {3, 4};    // inicialización de todos los campos
    cout << distancia(a, b);         // 5
    a.x = a.x + 2;                   // acceso a un campo con el punto
    Punto c = b;                     // se puede copiar entera
}
</pre>
<ul><li>Se declaran fuera de <code>main</code>, antes de usarlas, y acaban con <code>};</code>.</li>
<li>Se pueden pasar a subprogramas (por valor o por referencia) y devolver como resultado de una función.</li>
<li><code>cin &gt;&gt; p</code> no funciona con una tupla entera: lee campo a campo, <code>cin &gt;&gt; p.x &gt;&gt; p.y</code>.</li></ul>
`,

/* ================================================================== */
alternativas: String.raw`
<h2>1. Composición secuencial y alternativa</h2>
<p>Por defecto las instrucciones se ejecutan una tras otra (composición <strong>secuencial</strong>). La composición <strong>alternativa</strong> permite elegir qué hacer según una condición.</p>

<h2>2. if, if-else y cadenas else-if</h2>
<pre class="cpp">
if (condicion) {
    // solo si la condición es cierta
}

if (condicion) {
    // si es cierta
} else {
    // si es falsa
}

if (nota >= 9) cout << "Excelente";
else if (nota >= 7) cout << "Notable";
else if (nota >= 5) cout << "Aprobado";
else cout << "Suspenso";
</pre>
<p>En la cadena solo se ejecuta la <strong>primera</strong> rama cuya condición se cumple; las siguientes ya no se miran. Por eso en el ejemplo basta <code>nota &gt;= 7</code> para el notable: si llegamos ahí, ya sabemos que <code>nota &lt; 9</code>.</p>
<div class="key"><span class="label">La condición</span><p>Cualquier expresión <code>bool</code>. Puede ser una variable booleana: <code>if (encontrado)</code> equivale a <code>if (encontrado == true)</code>, y <code>if (!encontrado)</code> a <code>if (encontrado == false)</code>.</p></div>

<h2>3. Alternativas anidadas</h2>
<p>Un <code>if</code> dentro de otro. Cuidado con a qué <code>if</code> pertenece cada <code>else</code>: <strong>se asocia al <code>if</code> más cercano sin <code>else</code></strong>, independientemente de la sangría. Usa llaves para evitar ambigüedades.</p>
<pre class="cpp">
if (a > 0) {
    if (b > 0) cout << "primer cuadrante";
    else cout << "cuarto cuadrante";
} else {
    if (b > 0) cout << "segundo cuadrante";
    else cout << "tercer cuadrante";
}
</pre>

<h2>4. switch</h2>
<p>Alternativa múltiple según el valor de una expresión <strong>entera o char</strong> (no real ni string):</p>
<pre class="cpp">
switch (nota) {
    case 10:
    case 9:  cout << "Excelente"; break;
    case 8:
    case 7:  cout << "Notable"; break;
    default: cout << "Otro";
}
</pre>
<div class="warn"><span class="label">El break</span><p>Sin <code>break</code>, la ejecución continúa con las instrucciones del <code>case</code> siguiente. Se aprovecha para agrupar casos (9 y 10), pero olvidarlo es un error frecuente.</p></div>

<h2>5. Condiciones compuestas</h2>
<ul><li>"$x$ entre 1 y 10": <code>x &gt;= 1 &amp;&amp; x &lt;= 10</code> (nunca <code>1 &lt;= x &lt;= 10</code>).</li>
<li>"$x$ fuera del intervalo": <code>x &lt; 1 || x &gt; 10</code>, que es la negación por De Morgan.</li>
<li><strong>Evaluación en cortocircuito</strong>: en <code>A &amp;&amp; B</code>, si A es falsa no se evalúa B; en <code>A || B</code>, si A es cierta no se evalúa B. Permite escribir <code>n != 0 &amp;&amp; s / n &gt; 5</code> sin riesgo de dividir entre 0.</li>
<li>Para reales, no compares con <code>==</code> (errores de redondeo): usa <code>fabs(a - b) &lt; 1e-9</code>.</li></ul>
<div class="mc"><p>¿Qué condición dice "el año NO es bisiesto"?</p>
<ul><li data-ok><code>(a % 4 != 0 || a % 100 == 0) &amp;&amp; a % 400 != 0</code></li><li><code>a % 4 != 0 &amp;&amp; a % 100 == 0 || a % 400 != 0</code></li><li><code>a % 4 != 0</code></li><li><code>!(a % 4 == 0) || a % 400 == 0</code></li></ul>
<div class="why"><p>Bisiesto: <code>(a%4==0 &amp;&amp; a%100!=0) || a%400==0</code>. Negando con De Morgan: <code>!(…) &amp;&amp; a%400!=0</code>, y <code>!(a%4==0 &amp;&amp; a%100!=0)</code> es <code>a%4!=0 || a%100==0</code>.</p></div></div>

<h2>6. Errores típicos (laboratorio 3)</h2>
<ul><li><code>if (x = 0)</code>: asignación en lugar de comparación.</li>
<li><code>if (x &lt; y &lt; z)</code>: compila pero compara un bool con z.</li>
<li><code>if (cond);</code> con punto y coma: el if queda vacío y el bloque siguiente se ejecuta siempre.</li>
<li>Olvidar las llaves cuando la rama tiene más de una instrucción.</li></ul>
`,

/* ================================================================== */
iterativas: String.raw`
<h2>1. Para qué sirve iterar</h2>
<p>La composición <strong>iterativa</strong> repite un bloque de instrucciones mientras se cumple una condición. Sin ella no podríamos tratar una cantidad de datos que no conocemos de antemano.</p>

<h2>2. Las tres instrucciones</h2>
<h3>while</h3>
<pre class="cpp">
while (condicion) {
    // cuerpo: se repite mientras la condición sea cierta
}
</pre>
<p>La condición se evalúa <strong>antes</strong> de cada vuelta: el cuerpo puede ejecutarse 0 veces.</p>
<h3>do-while</h3>
<pre class="cpp">
do {
    // cuerpo: al menos una vez
} while (condicion);
</pre>
<p>La condición se evalúa <strong>después</strong>: el cuerpo se ejecuta al menos una vez. Útil para validar entradas ("pide el dato hasta que sea correcto") y para contar cifras (el 0 tiene una cifra).</p>
<h3>for</h3>
<pre class="cpp">
for (inicializacion; condicion; actualizacion) {
    // cuerpo
}
// equivale a:
inicializacion;
while (condicion) {
    // cuerpo
    actualizacion;
}
</pre>
<p>Se usa cuando se conoce el número de vueltas. La variable declarada en la inicialización solo existe dentro del <code>for</code>.</p>
<div class="num" data-a="1"><p>¿Qué vale <code>n</code> tras <code>int n = 0; do { n++; } while (n &lt; 0);</code>?</p>
<div class="why"><p>El cuerpo se ejecuta una vez (n = 1) y después la condición <code>1 &lt; 0</code> es falsa.</p></div></div>

<h2>3. Diseñar un bucle</h2>
<div class="key"><span class="label">Cuatro preguntas</span><ol>
<li><strong>Inicialización</strong>: ¿qué valores deben tener las variables antes de empezar? (contadores a 0, productos a 1, máximo al primer dato).</li>
<li><strong>Condición</strong>: ¿cuándo hay que seguir? (mientras queden datos, mientras no se encuentre, mientras <code>n != 0</code>).</li>
<li><strong>Cuerpo</strong>: ¿qué se hace con cada elemento?</li>
<li><strong>Avance</strong>: ¿qué cambia para acercarse al final? (leer el siguiente dato, <code>i++</code>, <code>n /= 10</code>). Si nada cambia, el bucle es infinito.</li></ol></div>
<div class="tip"><span class="label">Traza a mano</span><p>Para entender o depurar un bucle, haz una tabla con una columna por variable y una fila por vuelta. Es justo lo que piden las preguntas "¿qué imprime?".</p></div>

<h2>4. Esquemas de recorrido y de búsqueda</h2>
<p>Casi todos los problemas encajan en uno de estos dos esquemas.</p>
<h3>Recorrido: tratar todos los elementos</h3>
<pre class="cpp">
// suma y media de números leídos hasta el centinela 0
int x, n = 0;
double suma = 0;
cin >> x;
while (x != 0) {
    suma += x;
    n++;
    cin >> x;
}
if (n > 0) cout << "Media: " << suma / n << endl;
</pre>
<h3>Búsqueda: parar en cuanto se encuentra</h3>
<pre class="cpp">
// ¿hay algún número negativo en la secuencia?
int x;
bool encontrado = false;
cin >> x;
while (x != 0 && !encontrado) {
    if (x < 0) encontrado = true;
    else cin >> x;
}
if (encontrado) cout << "Hay un negativo: " << x;
</pre>
<p>La búsqueda tiene doble condición de parada: se acaban los datos o se encuentra lo buscado. Después del bucle, el booleano dice cuál de las dos pasó.</p>

<h2>5. Patrones con números (problemas tipo III)</h2>
<table>
<tr><th>Tarea</th><th>Idea</th></tr>
<tr><td>Recorrer las cifras</td><td><code>while (n != 0) { c = n % 10; …; n /= 10; }</code></td></tr>
<tr><td>Contar cifras</td><td><code>do { cont++; n /= 10; } while (n != 0);</code></td></tr>
<tr><td>Invertir un número</td><td><code>inv = inv * 10 + n % 10;</code></td></tr>
<tr><td>Construir un número cifra a cifra desde la derecha</td><td><code>nuevo += cifra * pot; pot *= 10;</code></td></tr>
<tr><td>Posición de la cifra (desde la derecha)</td><td>contador <code>pos</code> que empieza en 1 y crece en cada vuelta</td></tr>
<tr><td>Divisores de n</td><td><code>for (d = 1; d &lt;= n; d++) if (n % d == 0) …</code></td></tr>
<tr><td>¿Es primo?</td><td>búsqueda de un divisor entre 2 y $\sqrt n$</td></tr>
<tr><td>Máximo común divisor (Euclides)</td><td><code>while (b != 0) { r = a % b; a = b; b = r; }</code> (el mcd queda en a)</td></tr>
</table>

<h2>6. Bucles anidados</h2>
<p>Un bucle dentro de otro: el interior se ejecuta completo en cada vuelta del exterior. Por ejemplo, para recorrer todos los números de un rango y, para cada uno, sus cifras.</p>
<pre class="cpp">
for (int f = 1; f <= 3; f++) {
    for (int c = 1; c <= f; c++) cout << "*";
    cout << endl;
}
</pre>
<pre class="out">
*
**
***
</pre>
<div class="num" data-a="6"><p>¿Cuántos asteriscos imprime el código anterior?</p><div class="why"><p>1 + 2 + 3 = 6.</p></div></div>
`,

/* ================================================================== */
ficheros: String.raw`
<h2>1. Por qué ficheros</h2>
<p>Los datos de la consola se pierden al acabar el programa y teclearlos es lento. Un fichero de texto guarda datos de forma permanente: se puede leer como si fuera el teclado y escribir como si fuera la pantalla.</p>

<h2>2. Abrir, leer y escribir</h2>
<pre class="cpp">
#include <fstream>

ifstream fin("datos.txt");        // abre para LEER (debe existir)
ofstream fout("salida.txt");      // abre para ESCRIBIR (lo crea o lo vacía)

if (!fin.is_open()) {             // comprobación recomendable
    cout << "No se puede abrir datos.txt" << endl;
    return 1;
}

int a; double b;
fin >> a >> b;                    // igual que cin
fout << a + b << endl;            // igual que cout

fin.close();                      // opcional: se cierran solos al acabar
fout.close();
</pre>
<ul><li>El nombre del objeto (<code>fin</code>, <code>coutF</code>, <code>entrada</code>…) lo eliges tú.</li>
<li>El fichero se busca en la carpeta del proyecto (en Code::Blocks, junto al .cbp).</li>
<li><code>ofstream</code> borra el contenido anterior. Para añadir al final: <code>ofstream fout("f.txt", ios::app);</code>.</li></ul>

<h2>3. Leer hasta el final del fichero</h2>
<div class="key"><span class="label">El esquema que hay que saber</span>
<pre class="cpp">
while (fin >> campo1 >> campo2 >> campo3) {
    // tratar el registro (una línea)
}
</pre>
<p>La expresión <code>fin &gt;&gt; …</code> vale "cierto" si la lectura ha ido bien y "falso" cuando ya no quedan datos (o hay un error de formato). Así el bucle para justo después del último registro.</p></div>
<div class="warn"><span class="label">El error del eof</span><p>El esquema <code>while (!fin.eof()) { fin &gt;&gt; x; … }</code> suele procesar el último dato <strong>dos veces</strong> (o un dato basura), porque <code>eof</code> solo se activa después de intentar leer más allá del final. Usa el esquema de arriba.</p></div>
<h3>Ficheros con cabecera o con número de registros</h3>
<pre class="cpp">
int n;
fin >> n;                        // primera línea: cuántos registros hay
for (int i = 0; i < n; i++) {
    fin >> nombre >> nota;
    // ...
}
</pre>
<h3>Leer líneas con espacios</h3>
<p><code>getline(fin, linea);</code> lee una línea entera en un <code>string</code>. Si antes has leído con <code>&gt;&gt;</code>, queda pendiente el salto de línea: usa <code>fin.ignore();</code> antes del <code>getline</code>.</p>

<h2>4. Estructura típica de un problema tipo II</h2>
<ol><li>Abrir el fichero de entrada (y el de salida, si lo hay).</li>
<li>Inicializar contadores, acumuladores, máximos.</li>
<li><code>while (fin &gt;&gt; …)</code>: para cada registro, calcular lo que pida (normalmente llamando a un subprograma), escribir en el fichero de salida y actualizar contadores.</li>
<li>Después del bucle: calcular porcentajes y medias (cuidado con dividir entre 0) y mostrar los resultados finales por pantalla.</li></ol>
<div class="tf" data-a="v"><p>Para escribir números en un fichero con el formato "(4,4) a (2,3)", basta con encadenar los textos y números con <code>&lt;&lt;</code>.</p>
<div class="why"><p>Exactamente igual que con <code>cout</code>: <code>fout &lt;&lt; "(" &lt;&lt; f1 &lt;&lt; "," &lt;&lt; c1 &lt;&lt; ") a (" …</code>.</p></div></div>
<div class="mc"><p>Cada línea de un fichero es <code>JORGE 0825 430.6</code> (nombre, hora hhmm, kilómetros). ¿Qué declaración y lectura son correctas?</p>
<ul><li data-ok><code>string nom; int t; double km;</code> y <code>fin &gt;&gt; nom &gt;&gt; t &gt;&gt; km</code></li><li><code>char nom; int t; int km;</code></li><li><code>string nom, t, km;</code> y luego hacer cuentas con t</li><li><code>int nom; double t, km;</code></li></ul>
<div class="why"><p>El nombre es una palabra (<code>string</code>), la hora se trata como entero para usar <code>/100</code> y <code>%100</code>, y los kilómetros tienen decimales. (<code>0825</code> se lee como el entero 825.)</p></div></div>
`,

/* ================================================================== */
subprogramas: String.raw`
<h2>1. Por qué subprogramas</h2>
<ul><li><strong>Diseño descendente</strong>: dividir un problema grande en problemas pequeños, cada uno resuelto por un subprograma.</li>
<li><strong>Reutilización</strong>: escribir una vez y llamar muchas veces (por ejemplo, <code>esPrimo</code> para cada número del fichero).</li>
<li><strong>Legibilidad</strong> y facilidad para encontrar errores: cada subprograma se prueba por separado.</li></ul>

<h2>2. Funciones</h2>
<pre class="cpp">
tipo_resultado nombre(tipo1 param1, tipo2 param2) {
    // declaraciones locales e instrucciones
    return expresion;        // devuelve el resultado y TERMINA la función
}
</pre>
<ul><li>Devuelven <strong>un único valor</strong> y se usan dentro de expresiones: <code>x = 2 * cuadrado(a) + 1;</code>.</li>
<li>Todos los caminos deben acabar en un <code>return</code> del tipo correcto.</li>
<li>Al ejecutarse <code>return</code>, la función termina inmediatamente (aunque haya un bucle en marcha). Se aprovecha en búsquedas: <code>if (n % d == 0) return false;</code>.</li></ul>
<h2>3. Acciones (procedimientos)</h2>
<pre class="cpp">
void nombre(int dato, double & resultado1, bool & resultado2) {
    // ...
}
</pre>
<ul><li>Tipo <code>void</code>: no devuelven valor y se llaman como una instrucción: <code>nombre(5, r, ok);</code>.</li>
<li>Comunican los resultados a través de parámetros <strong>por referencia</strong>.</li>
<li>Pueden usar <code>return;</code> (sin valor) para terminar antes.</li></ul>

<h2>4. Parámetros: por valor y por referencia</h2>
<div class="key"><span class="label">La diferencia</span>
<p><strong>Por valor</strong> (<code>int a</code>): el subprograma recibe una <strong>copia</strong>. Si la modifica, el original no cambia. Para datos de entrada.</p>
<p><strong>Por referencia</strong> (<code>int &amp; a</code>): el parámetro es <strong>otro nombre</strong> de la variable original. Si se modifica, cambia fuera. Para resultados (salida) o datos que se modifican (entrada/salida).</p></div>
<ul><li>En la llamada, a un parámetro por referencia se le debe pasar una <strong>variable</strong> (no un número ni una expresión).</li>
<li>Los tipos de los argumentos deben coincidir en número, orden y tipo con los parámetros.</li>
<li>Los nombres no tienen por qué coincidir: lo que cuenta es la <strong>posición</strong>.</li></ul>
<div class="steps"><p>Traza de una llamada por referencia.</p>
<div class="step"><code>void intercambia(int &amp; a, int &amp; b) { int aux = a; a = b; b = aux; }</code></div>
<div class="step">En <code>main</code>: <code>int x = 1, y = 2; intercambia(x, y);</code>. Dentro, <code>a</code> ES <code>x</code> y <code>b</code> ES <code>y</code>.</div>
<div class="step">Después de la llamada, <code>x = 2</code> e <code>y = 1</code>. Si los parámetros fueran por valor, se intercambiarían las copias y <code>x</code>, <code>y</code> no cambiarían.</div></div>

<h2>5. Ámbito de las variables</h2>
<ul><li>Las variables declaradas dentro de un subprograma (y sus parámetros) son <strong>locales</strong>: solo existen mientras se ejecuta y no se ven desde fuera.</li>
<li>Dos subprogramas pueden tener variables con el mismo nombre sin interferir.</li>
<li>Una variable declarada dentro de un bloque <code>{ }</code> (por ejemplo, en un <code>for</code>) solo existe dentro de él.</li>
<li>Evita las variables globales: las constantes globales sí son buena práctica.</li></ul>
<div class="tf" data-a="v"><p>Si en <code>main</code> hay una variable <code>n</code> y en una función otra variable local <code>n</code>, modificar la de la función no afecta a la de <code>main</code>.</p>
<div class="why"><p>Son dos variables distintas en memoria que casualmente se llaman igual.</p></div></div>

<h2>6. Cabeceras (prototipos)</h2>
<p>El compilador lee de arriba abajo: un subprograma debe estar declarado antes de usarse. Dos opciones: definirlo antes de <code>main</code>, o escribir antes su <strong>cabecera</strong> terminada en <code>;</code> y definirlo después.</p>
<pre class="cpp">
bool esPrimo(int n);                        // cabecera
void estadisticas(int n, double & m, int & c);

int main() { /* ... usa esPrimo y estadisticas ... */ }

bool esPrimo(int n) { /* definición */ }
</pre>
<p>La cabecera y la definición deben coincidir exactamente en tipo, nombre y parámetros (incluidos los <code>&amp;</code>).</p>

<h2>7. Cómo decidir el diseño</h2>
<table>
<tr><th>Necesitas…</th><th>Usa</th></tr>
<tr><td>Un solo resultado (número, bool)</td><td>Función: <code>double area(double r)</code></td></tr>
<tr><td>Saber si algo cumple una propiedad</td><td>Función <code>bool</code>: <code>bool esTenebroso(int t)</code></td></tr>
<tr><td>Dos o más resultados</td><td>Acción con parámetros <code>&amp;</code>: <code>void esValido(…, bool &amp; valido, bool &amp; fuera)</code></td></tr>
<tr><td>Modificar los datos que recibes</td><td>Acción con parámetros <code>&amp;</code>: <code>void intercambia(int &amp; a, int &amp; b)</code></td></tr>
<tr><td>Solo mostrar algo</td><td>Acción con parámetros por valor</td></tr>
</table>
`,

/* ================================================================== */
"problemas-parcial": String.raw`
<h2>1. Formato del parcial</h2>
<table>
<tr><th>Ejercicio</th><th>Puntos</th><th>Qué piden</th></tr>
<tr><td>Tipo I</td><td>3</td><td>Completar un programa con huecos <code>#1#</code>, <code>#2#</code>… Cada hueco es un símbolo, una parte de instrucción o una instrucción entera.</td></tr>
<tr><td>Tipo II</td><td>4</td><td>Programa completo: lee un fichero, usa subprogramas, escribe un fichero de salida y muestra estadísticas por pantalla.</td></tr>
<tr><td>Tipo III</td><td>3</td><td>Un subprograma numérico (cifras, divisores, propiedades de números).</td></tr>
</table>

<h2>2. Estrategia para el tipo I</h2>
<ol><li>Lee el enunciado y el programa entero antes de rellenar nada.</li>
<li>Busca "huérfanos": variables usadas pero no declaradas, ficheros escritos pero no abiertos, subprogramas sin cabecera, bibliotecas que faltan (<code>fstream</code>, <code>cmath</code>).</li>
<li>Comprueba los tipos: si una variable se usa con <code>%</code>, es <code>int</code>; si se le asigna algo con decimales, <code>double</code>.</li>
<li>En las llamadas, cuenta los parámetros y mira cuáles deben ser <code>&amp;</code> (los que el subprograma modifica).</li>
<li>Los huecos repetidos (mismo número) llevan lo mismo.</li>
<li>Haz una traza rápida con el ejemplo del enunciado para comprobar.</li></ol>

<h2>3. Estrategia para el tipo II</h2>
<ol><li>Escribe primero el esqueleto: <code>#include</code>, cabeceras, <code>main</code> con la apertura de ficheros y el bucle <code>while (fin &gt;&gt; …)</code>.</li>
<li>Decide qué subprogramas hacen falta según lo que se calcula por registro y lo que se calcula al final.</li>
<li>Antes del bucle, inicializa contadores y acumuladores; dentro, actualízalos; después, calcula medias y porcentajes.</li>
<li>Respeta el formato de salida del enunciado (espacios, textos, saltos de línea).</li>
<li>Aunque no te salga una parte, escribe el resto: se puntúa por partes.</li></ol>

<h2>4. Estrategia para el tipo III</h2>
<ol><li>Descompón la propiedad en funciones pequeñas (por ejemplo: <code>tiene9</code>, <code>sumaDivImpares</code>, <code>sumaPosImpares</code>).</li>
<li>Decide la cabecera: ¿cuántos resultados? ¿qué parámetros se modifican?</li>
<li>Prueba con el ejemplo numérico del enunciado haciendo la traza a mano.</li>
<li>Cuidado con casos especiales: rango con $a\gt b$, número 0, números negativos.</li></ol>
<div class="tf" data-a="v"><p>En un ejercicio tipo III, si el rango $[a,b]$ puede venir con $a\gt b$, lo más sencillo es intercambiar $a$ y $b$ al principio.</p>
<div class="why"><p>Así el resto del código puede suponer $a\le b$ (es lo que hace la solución de los números tenebrosos).</p></div></div>

<h2>5. Lista de errores que más puntos cuestan</h2>
<ul><li>División entera al calcular medias o porcentajes.</li>
<li>Olvidar inicializar contadores o acumuladores.</li>
<li>Usar <code>=</code> en vez de <code>==</code>.</li>
<li>Parámetros de salida sin <code>&amp;</code>.</li>
<li>Bucles infinitos por no avanzar (no leer el siguiente dato, no hacer <code>n /= 10</code>).</li>
<li>Leer el fichero con <code>eof()</code> y procesar el último registro dos veces.</li>
<li>Olvidar <code>#include &lt;fstream&gt;</code> o <code>&lt;cmath&gt;</code>.</li></ul>
<p>En la pestaña "Resumen y práctica" tienes los problemas de parcial resueltos y probados.</p>
`

};
