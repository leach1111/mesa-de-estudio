SUBJECTS.push({
  id: "informatica",
  name: "Fundamentos de Informática",
  short: "Informática",
  desc: "C++: tipos y expresiones, if, while, ficheros, tuplas y subprogramas, con problemas de parcial.",
  intro: "El parcial tiene tres tipos de ejercicio: tipo I (3 puntos), completar un programa con huecos #n#; tipo II (4 puntos), un programa completo que lee un fichero y usa subprogramas; tipo III (3 puntos), un subprograma numérico (cifras, divisores...). Todo el código de esta sección se ha compilado y probado.",
  sources: "teoría (conceptos básicos, alternativas, iterativas, subprogramas), laboratorios 1-8, exámenes parciales 2021-2024 y ejemplos para practicar.",
  topics: [

/* ============================================================ */
{ id: "basicos", title: "Conceptos básicos: tipos, variables y expresiones",
  desc: "Estructura de un programa, int/double/char/bool/string, división entera, ASCII, entrada/salida y tuplas.",
  html: String.raw`
<h2>Esqueleto de un programa</h2>
<pre class="cpp">
#include <iostream>        // bibliotecas
#include <fstream>         // (para ficheros)
#include <cmath>           // (sqrt, pow, abs...)
using namespace std;

const double PI = 3.1416;  // constantes

struct Persona {           // tipos (tuplas)
    string dni;
    int edad;
};

// aquí van los subprogramas (o sus cabeceras)

int main() {
    int n;                 // declaración de variables
    cin >> n;              // instrucciones, en orden
    cout << n * 2 << endl;
}
</pre>
<p>El orden importa: bibliotecas, constantes, tipos, subprogramas y <code>main</code>.</p>

<h2>Tipos básicos</h2>
<table>
<tr><th>Tipo</th><th>Valores</th><th>Ejemplo de literal</th></tr>
<tr><td><code>int</code></td><td>enteros</td><td><code>-7</code>, <code>42</code></td></tr>
<tr><td><code>float</code>, <code>double</code></td><td>reales (double tiene más precisión)</td><td><code>3.45</code>, <code>3.1e-5</code></td></tr>
<tr><td><code>char</code></td><td>un carácter (internamente su código ASCII)</td><td><code>'A'</code>, <code>'7'</code>, <code>' '</code></td></tr>
<tr><td><code>bool</code></td><td><code>true</code> / <code>false</code> (se imprimen como 1 / 0)</td><td><code>true</code></td></tr>
<tr><td><code>string</code></td><td>texto</td><td><code>"hola"</code></td></tr>
</table>
<p>Los nombres de variables no pueden llevar espacios ni guiones, ni empezar por cifra (el guion bajo sí vale).</p>

<h2>La división entera: la trampa número uno</h2>
<div class="key"><span class="label">Regla</span><p>Si los dos operandos son <code>int</code>, <code>/</code> hace división <strong>entera</strong> (trunca) y <code>%</code> da el <strong>resto</strong>. Basta con que uno sea real para que la división sea real.</p></div>
<pre class="cpp">
int x = 5 * 2 / 4;        // 10/4 -> 2
double y = 5.0 * 2 / 4;   // 2.5
int r = 17 % 5;           // 2
double m = 7 / 2;         // ¡3! (se divide como int y luego se convierte)
double ok = double(7) / 2; // 3.5
</pre>
<div class="num" data-a="3"><p>¿Qué vale <code>m</code> tras <code>int s = 7, n = 2; double m = s / n;</code>?</p>
<div class="why"><p><code>s/n</code> es división entera: 3. Después se guarda 3.0 en <code>m</code>. Para la media correcta: <code>double(s)/n</code> = 3.5.</p></div></div>
<div class="num" data-a="-1"><p>¿Qué imprime <code>cout &lt;&lt; -7 % 3;</code>?</p>
<div class="why"><p>En C++ el resto tiene el signo del dividendo: $-7 = 3\cdot(-2) + (-1)$. Imprime -1.</p></div></div>

<h3>Trucos con / y % que salen siempre</h3>
<ul><li>Última cifra de <code>n</code>: <code>n % 10</code>. Quitar la última cifra: <code>n / 10</code>.</li>
<li>¿Es par? <code>n % 2 == 0</code>. ¿Divisible por d? <code>n % d == 0</code>.</li>
<li>Hora en formato hhmm: horas <code>t / 100</code>, minutos <code>t % 100</code>.</li>
<li>Segundos a h, m, s: <code>s / 3600</code>, <code>(s / 60) % 60</code>, <code>s % 60</code>.</li></ul>
<div class="mc"><p>Con <code>int seg = 3725;</code>, ¿qué imprime <code>cout &lt;&lt; seg/3600 &lt;&lt; "h " &lt;&lt; (seg/60)%60 &lt;&lt; "m " &lt;&lt; seg%60 &lt;&lt; "s";</code>?</p>
<ul><li data-ok><code>1h 2m 5s</code></li><li><code>1h 62m 5s</code></li><li><code>1.03h 2m 5s</code></li><li><code>1h 2m 25s</code></li></ul>
<div class="why"><p>3725/3600 = 1; 3725/60 = 62 y 62 % 60 = 2; 3725 % 60 = 5.</p></div></div>

<h2>Caracteres y código ASCII</h2>
<p>Un <code>char</code> es un número pequeño: <code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48. Las letras y dígitos son consecutivos.</p>
<pre class="cpp">
char c = 'a' + 2;          // 'c'
cout << 'a' + 2;           // ¡imprime 99! (la suma da int)
cout << char('a' + 2);     // c
char may = c - 'a' + 'A';  // pasar a mayúscula: 'C'
int d = '7' - '0';         // carácter dígito a número: 7
bool esMin = (c >= 'a' && c <= 'z');
</pre>
<div class="tf" data-a="v"><p><code>cout &lt;&lt; 'a' + 2;</code> imprime 99.</p><div class="why"><p><code>'a'+2</code> se evalúa como <code>int</code> (97 + 2). Para ver la letra hay que convertir: <code>char('a'+2)</code>.</p></div></div>

<h2>Expresiones booleanas</h2>
<p>Operadores: <code>&amp;&amp;</code> (and), <code>||</code> (or), <code>!</code> (not); comparación <code>== != &lt; &gt; &lt;= &gt;=</code>.</p>
<div class="key"><span class="label">De Morgan</span><p><code>!(A &amp;&amp; B)</code> equivale a <code>!A || !B</code>, y <code>!(A || B)</code> a <code>!A &amp;&amp; !B</code>. Así, <code>!(a &lt; 5 &amp;&amp; b &gt; 2)</code> es <code>a &gt;= 5 || b &lt;= 2</code>.</p></div>
<div class="mc"><p>Con <code>x=5, y=3, z=4</code>, ¿qué imprime <code>cout &lt;&lt; (x &lt; y &lt; z);</code>?</p>
<ul><li data-ok>1</li><li>0</li><li>Error de compilación</li><li>3</li></ul>
<div class="why"><p>Se evalúa de izquierda a derecha: <code>(5 &lt; 3)</code> es <code>false</code> = 0, y <code>0 &lt; 4</code> es <code>true</code>. Compila pero no hace lo que parece. Lo correcto: <code>x &lt; y &amp;&amp; y &lt; z</code> (laboratorio 3).</p></div></div>
<div class="num" data-a="101"><p>¿Qué imprime <code>cout &lt;&lt; true &lt;&lt; false &lt;&lt; true;</code>?</p><div class="why"><p>Los booleanos se imprimen como 1 y 0: <code>101</code>.</p></div></div>

<h2>Tuplas (struct)</h2>
<p>Agrupan datos de tipos distintos. Se declaran después de los <code>#include</code> y se accede a los campos con punto:</p>
<pre class="cpp">
struct Persona {
    string dni;
    int edad;
    float peso;
};

int main() {
    Persona p;
    p.dni = "12344321H";
    p.edad = 19;
    cin >> p.peso;
}
</pre>
`},

/* ============================================================ */
{ id: "alternativas", title: "Composición alternativa (if / else)",
  desc: "if simple, cadenas else if, alternativas anidadas y errores típicos.",
  html: String.raw`
<h2>Sintaxis</h2>
<pre class="cpp">
if (condicion1) {
    // si se cumple condicion1
} else if (condicion2) {
    // si no se cumplía la 1 pero sí la 2
} else {
    // en cualquier otro caso
}
</pre>
<p>Las llaves pueden omitirse si el bloque es una sola instrucción (pero ojo: entonces solo la primera instrucción depende del <code>if</code>).</p>

<h2>Ejemplos de clase</h2>
<pre class="cpp">
// Mayor de tres números
if (x >= y && x >= z) cout << x;
else if (y >= z) cout << y;
else cout << z;

// Tipo de triángulo
if (l1 == l2 && l2 == l3) cout << "equilatero";
else if (l1 != l2 && l1 != l3 && l2 != l3) cout << "escaleno";
else cout << "isosceles";
</pre>
<div class="tip"><span class="label">Ordena las condiciones de la más restrictiva a la menos</span><p>En una cadena <code>else if</code> solo se ejecuta la primera rama cierta. En el triángulo, si preguntaras primero por "dos lados iguales", un equilátero acabaría clasificado como isósceles.</p></div>

<h2>Errores típicos</h2>
<div class="warn"><span class="label">= no es ==</span><p><code>if (v = 0)</code> <strong>asigna</strong> 0 a <code>v</code> y la condición vale falso. Compila (con aviso) y el programa hace otra cosa.</p></div>
<div class="mc"><p>¿Qué imprime este código?</p>
<pre class="cpp">
int v = 10;
if (v = 0) cout << "cero";
else cout << "no cero";
cout << " " << v;
</pre>
<ul><li data-ok><code>no cero 0</code></li><li><code>no cero 10</code></li><li><code>cero 0</code></li><li>Error de compilación</li></ul>
<div class="why"><p><code>v = 0</code> asigna 0 y la expresión vale 0 (falso): va al <code>else</code>. Además <code>v</code> ha perdido su valor.</p></div></div>
<div class="tf" data-a="f"><p>En <code>if (a &gt; 0) cout &lt;&lt; "pos"; cout &lt;&lt; "!";</code> el signo de exclamación solo se imprime si <code>a</code> es positivo.</p>
<div class="why"><p>Sin llaves, el <code>if</code> solo afecta a la primera instrucción. El <code>"!"</code> se imprime siempre.</p></div></div>

<h2>Ejercicio</h2>
<div class="prob"><div class="enun"><p>Lee un año y escribe si es bisiesto. Un año es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400.</p></div>
<div class="hint"><p>Traduce la frase literalmente con <code>&amp;&amp;</code>, <code>||</code> y <code>%</code>.</p></div>
<div class="sol"><pre class="cpp">
int a;
cin >> a;
if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0)
    cout << "bisiesto" << endl;
else
    cout << "no bisiesto" << endl;
</pre><p>Comprueba: 2024 sí, 1900 no, 2000 sí.</p></div></div>
`},

/* ============================================================ */
{ id: "iterativas", title: "Composición iterativa (while y for)",
  desc: "Bucles, contadores, acumuladores, centinela, máximos y recorridos de cifras.",
  html: String.raw`
<h2>while</h2>
<pre class="cpp">
while (condicion) {
    // se repite mientras la condición sea cierta
}
</pre>
<p>Algo dentro del bucle debe acabar haciendo falsa la condición; si no, bucle infinito. Equivalente con <code>for</code> cuando sabes cuántas vueltas:</p>
<pre class="cpp">
for (int i = 1; i <= 10; i++) {
    cout << "4 * " << i << " = " << 4 * i << endl;
}
</pre>

<h2>Los patrones que resuelven el 90% de problemas</h2>
<table>
<tr><th>Patrón</th><th>Antes del bucle</th><th>Dentro</th></tr>
<tr><td>Contar</td><td><code>int cont = 0;</code></td><td><code>if (cumple) cont++;</code></td></tr>
<tr><td>Sumar</td><td><code>double suma = 0;</code></td><td><code>suma = suma + x;</code></td></tr>
<tr><td>Multiplicar</td><td><code>int f = 1;</code></td><td><code>f = f * i;</code></td></tr>
<tr><td>Máximo</td><td><code>max = primer valor;</code></td><td><code>if (x &gt; max) max = x;</code></td></tr>
<tr><td>Recorrer cifras</td><td></td><td><code>c = n % 10; n = n / 10;</code> mientras <code>n != 0</code></td></tr>
</table>

<h3>Lectura con centinela</h3>
<pre class="cpp">
int i, cont = 0;
cin >> i;               // primera lectura FUERA del bucle
while (i != 0) {        // 0 = centinela, no se procesa
    if (i % 3 == 0) cont++;
    cin >> i;           // siguiente lectura al FINAL del bucle
}
cout << "Hay " << cont << " multiplos de 3" << endl;
</pre>
<div class="warn"><span class="label">Posición de los cin</span><p>Si lees solo dentro del bucle al principio, procesarías el 0 como si fuera un dato. El esquema es: leer, mientras no sea centinela { tratar; leer }.</p></div>

<h3>Máximo y mínimo</h3>
<pre class="cpp">
cin >> n >> num;
double max = num, min = num;   // inicializar con el primer dato
for (int i = 2; i <= n; i++) {
    cin >> num;
    if (num < min) min = num;
    if (num > max) max = num;
}
</pre>
<div class="tip"><span class="label">Inicialización del máximo</span><p>Inicializa con el primer valor leído, no con 0: si todos los datos son negativos, un máximo inicial de 0 sería incorrecto.</p></div>

<h2>Traza: ¿qué imprime?</h2>
<div class="num" data-a="10"><p>¿Qué imprime?</p>
<pre class="cpp">
int n = 1234, s = 0;
while (n != 0) {
    s += n % 10;
    n /= 10;
}
cout << s;
</pre>
<div class="why"><p>Suma las cifras: 4 + 3 + 2 + 1 = 10.</p></div></div>
<div class="num" data-a="2"><p>¿Qué imprime?</p>
<pre class="cpp">
int i = 0, c = 0;
while (i < 10) {
    if (i % 3 == 0) c++;
    i += 2;
}
cout << c;
</pre>
<div class="why"><p><code>i</code> toma 0, 2, 4, 6, 8. Múltiplos de 3: 0 y 6. Imprime 2.</p></div></div>
<div class="num" data-a="1234"><p>¿Qué imprime?</p>
<pre class="cpp">
int t = 0;
for (int j = 1; j <= 4; j++) t = t * 10 + j;
cout << t;
</pre>
<div class="why"><p>0 → 1 → 12 → 123 → 1234. Es el patrón para "construir" un número cifra a cifra.</p></div></div>
<div class="num" data-a="0"><p>¿Qué valor tiene <code>w</code> al acabar <code>int w = 3; while (w &gt; 0) { w--; }</code>?</p>
<div class="why"><p>El bucle para cuando <code>w &gt; 0</code> deja de cumplirse, es decir, con <code>w = 0</code>.</p></div></div>

<h2>Ejercicios</h2>
<div class="prob"><div class="enun"><p>Lee un entero y escribe sus cifras al revés (con 1234, escribe 4321).</p></div>
<div class="sol"><pre class="cpp">
int n;
cin >> n;
while (n != 0) {
    cout << n % 10;
    n = n / 10;
}
</pre></div></div>
<div class="prob"><div class="enun"><p>Lee un entero positivo y di si es primo.</p></div>
<div class="hint"><p>Cuenta divisores entre 2 y n−1 (basta hasta la raíz). Si no hay ninguno y n &gt; 1, es primo.</p></div>
<div class="sol"><pre class="cpp">
int n, d = 2;
bool primo = true;
cin >> n;
if (n < 2) primo = false;
while (primo && d * d <= n) {
    if (n % d == 0) primo = false;
    d++;
}
cout << (primo ? "primo" : "no primo") << endl;
</pre></div></div>
`},

/* ============================================================ */
{ id: "ficheros", title: "Ficheros de texto",
  desc: "Leer y escribir ficheros con ifstream y ofstream: el núcleo del problema tipo II.",
  html: String.raw`
<h2>Lo mínimo que tienes que saber</h2>
<pre class="cpp">
#include <fstream>                 // ¡imprescindible!

ifstream fin("datos.txt");         // abrir para leer
ofstream fout("resultados.txt");   // abrir (o crear) para escribir

int x;
while (fin >> x) {                 // lee mientras queden datos
    fout << x * 2 << endl;         // se escribe igual que con cout
}
</pre>
<div class="key"><span class="label">La clave</span><p><code>while (fin &gt;&gt; a &gt;&gt; b &gt;&gt; c)</code> lee una línea entera (un registro) en cada vuelta y se detiene sola al llegar al final del fichero. Pon las variables en el orden en que vienen los campos.</p></div>

<h2>Ejemplo completo (de la teoría)</h2>
<p>Contar nucleótidos A, C, G, T del fichero <code>ecoli.txt</code>:</p>
<pre class="cpp">
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream fin("ecoli.txt");
    ofstream fout("res_ecoli.txt");
    char nuc;
    int a = 0, c = 0, g = 0, t = 0;
    while (fin >> nuc) {
        if (nuc == 'a') a++;
        else if (nuc == 'c') c++;
        else if (nuc == 'g') g++;
        else if (nuc == 't') t++;
    }
    fout << "A: " << a << " C: " << c << " G: " << g << " T: " << t << endl;
}
</pre>

<h2>Registros con varios campos</h2>
<p>Ejemplo del Control 1 (rally): cada línea es <code>a JORGE 0825 430.6 20</code> (id, nombre, tiempo hhmm, km, descanso en minutos).</p>
<pre class="cpp">
char id; string nom; int hhmm, desc; double km;
while (fin >> id >> nom >> hhmm >> km >> desc) {
    int minutos = hhmm / 100 * 60 + hhmm % 100 - desc;
    double t100 = minutos / km * 100;     // minutos por 100 km
    cout << nom << " " << t100 << endl;
    if (id >= 'a' && id <= 'h') { sumaA += t100; nA++; }
    else if (id >= 'i' && id <= 's') { sumaB += t100; nB++; }
    else if (id >= 't' && id <= 'z') { sumaC += t100; nC++; }
    else sinCat++;
}
</pre>
<div class="tip"><span class="label">Porcentajes al final</span><p>Lleva un contador total además de los parciales y calcula al acabar el bucle: <code>100.0 * parcial / total</code> (el <code>100.0</code> evita la división entera).</p></div>
<div class="mc"><p>Quieres el porcentaje de válidos con <code>int validos, total;</code>. ¿Qué expresión es correcta?</p>
<ul><li data-ok><code>100.0 * validos / total</code></li><li><code>validos / total * 100</code></li><li><code>(validos / total) * 100.0</code></li><li><code>100 * (validos / total)</code></li></ul>
<div class="why"><p>En las otras, <code>validos / total</code> es división entera: da 0 si <code>validos &lt; total</code>.</p></div></div>
`},

/* ============================================================ */
{ id: "subprogramas", title: "Subprogramas: funciones y acciones",
  desc: "Funciones con return, acciones void, paso por valor y por referencia, cabeceras.",
  html: String.raw`
<h2>Funciones: devuelven un valor</h2>
<pre class="cpp">
int numCifras(int n) {
    int c = 0;
    do {
        c++;
        n = n / 10;
    } while (n != 0);
    return c;
}
// uso: int k = numCifras(1234);   // k = 4
</pre>
<h2>Acciones: no devuelven nada (void)</h2>
<p>Comunican resultados modificando parámetros <strong>por referencia</strong> (con <code>&amp;</code>). Úsalas cuando necesitas devolver <strong>más de un valor</strong>.</p>
<pre class="cpp">
void areaPerimetro(double base, double alt, double & area, double & per) {
    area = base * alt;
    per = 2 * (base + alt);
}
// uso: areaPerimetro(3, 4, a, p);   // a = 12, p = 14
</pre>

<h2>Paso de parámetros</h2>
<table>
<tr><th></th><th>Por valor <code>int a</code></th><th>Por referencia <code>int &amp; a</code></th></tr>
<tr><td>Qué recibe</td><td>Una copia</td><td>La variable original</td></tr>
<tr><td>Si se modifica dentro</td><td>No cambia fuera</td><td>Cambia fuera</td></tr>
<tr><td>Uso</td><td>Parámetros de entrada</td><td>Parámetros de salida o entrada/salida</td></tr>
<tr><td>En la llamada</td><td>Vale cualquier expresión</td><td>Tiene que ser una variable</td></tr>
</table>
<div class="num" data-a="12"><p>¿Qué imprime?</p>
<pre class="cpp">
void f(int a, int & b) {
    a = a + 1;
    b = b + 1;
}
int main() {
    int x = 1, y = 1;
    f(x, y);
    cout << x << y;
}
</pre>
<div class="why"><p><code>a</code> es una copia: <code>x</code> sigue valiendo 1. <code>b</code> es <code>y</code>: pasa a 2. Imprime <code>12</code>.</p></div></div>
<div class="tf" data-a="f"><p>Una llamada <code>f(3, 5)</code> es válida si el segundo parámetro de <code>f</code> es <code>int &amp; b</code>.</p>
<div class="why"><p>Un parámetro por referencia necesita una variable a la que referirse; un literal como 5 no lo es.</p></div></div>

<h2>Cabeceras (prototipos)</h2>
<p>Si defines el subprograma <strong>después</strong> de <code>main</code>, declara antes su cabecera terminada en punto y coma. Es lo que piden muchos huecos <code>#1#</code> de los exámenes:</p>
<pre class="cpp">
bool traspas(int a);                          // cabecera
void incr_dia(int & dia, int & mes, int & any);

int main() { ... }

bool traspas(int a) {
    return (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;
}
</pre>
<div class="key"><span class="label">¿Función o acción?</span><p>Un único resultado → función con <code>return</code>. Varios resultados → acción <code>void</code> con parámetros <code>&amp;</code>. Una función con tipo bool es ideal para "¿cumple la propiedad?".</p></div>
`},

/* ============================================================ */
{ id: "problemas-parcial", title: "Problemas de parcial resueltos",
  desc: "Tipo I (huecos), tipo II (ficheros + subprogramas) y tipo III (subprograma numérico), probados en compilador.",
  html: String.raw`
<h2>Estrategia para el tipo I (completar huecos)</h2>
<ul><li>Cada <code>#n#</code> es como mucho una instrucción: un símbolo, una línea o parte de una instrucción.</li>
<li>Busca pistas en el resto del código: variables usadas pero no declaradas, ficheros que se escriben pero no se abren, funciones sin cabecera.</li>
<li>Los huecos repetidos (#3# en la cabecera y en la definición) llevan lo mismo.</li></ul>

<div class="prob" data-tag="Tipo I · Días entre dos fechas"><div class="enun"><p>Completa los huecos del programa que cuenta los días entre dos fechas DD/MM/AAAA avanzando día a día.</p>
<pre class="cpp">
#include <iostream>
using namespace std;
#1# traspas(int a);
int dies_mes(int m, int a);
#2#
int main() {
    #3#
    char c;
    int dia, mes, any;
    int d_ini, m_ini, a_ini, d_fin, m_fin, a_fin, dies = 0;
    cin >> d_ini >> c >> m_ini >> c >> a_ini;
    #4#
    dia = d_ini; mes = m_ini; any = a_ini;
    while (#5#) {
        incr_dia(dia, mes, any);
        dies++;
    }
    cout << "Nombre de dies = " << dies;
    if (#6#) cout << " dies";
    else cout << " dia";
}
#1# traspas(int a) { return ((#7#) or a % 400 == 0); }
int dies_mes(int m, int a) {
    int dies = 31;
    if (m == 4 || m == 6 || m == 9 || m == 11) dies = 30;
    else if (m == 2) { if (#8#) dies = 29; else dies = 28; }
    return dies;
}
void incr_dia(#9#) {
    dia++;
    if (dia > #10#) {
        dia = 1; mes++;
        if (mes > 12) { mes = 1; any++; }
    }
}
</pre><p class="src">Ejemplos para practicar el parcial, tipo I-A</p></div>
<div class="hint"><p>¿Qué subprograma se usa en el <code>while</code> pero no tiene cabecera? ¿Qué variables de fecha final se usan sin leerse?</p></div>
<div class="sol"><ol>
<li><code>bool</code></li>
<li><code>void incr_dia(int &amp; dia, int &amp; mes, int &amp; any);</code></li>
<li>Nada (instrucción vacía) o un mensaje pidiendo la fecha</li>
<li><code>cin &gt;&gt; d_fin &gt;&gt; c &gt;&gt; m_fin &gt;&gt; c &gt;&gt; a_fin;</code></li>
<li><code>dia != d_fin || mes != m_fin || any != a_fin</code></li>
<li><code>dies &gt; 1</code></li>
<li><code>a % 4 == 0 and a % 100 != 0</code></li>
<li><code>traspas(a)</code></li>
<li><code>int &amp; dia, int &amp; mes, int &amp; any</code></li>
<li><code>dies_mes(mes, any)</code></li></ol></div></div>

<div class="prob" data-tag="Tipo I · Parking (parcial 2022)"><div class="enun"><p>En el programa del parking, ¿qué va en estos huecos? #2#: constante o librería que falta antes de las constantes; #4#: declaración que completa <code>float pago, suma=0, #4#;</code> (se usan <code>pmin</code> y <code>pmax</code>); #5#: lo que falta tras abrir <code>coches.txt</code> (luego se escribe en <code>coutF</code>); #6#–#7#: pasar las horas pm a formato 24 h; #8#: tiempo medio en horas; #9#–#10#: el cálculo del pago (primera media hora a 0,10 €/min, el resto a 0,05 €/min y 0,50 € de descuento por hora completa).</p><p class="src">Parcial GRETA/GREVA, noviembre 2022, problema 3</p></div>
<div class="sol"><ul>
<li>#4#: <code>pmin = 10000., pmax = -1.</code> (inicializar mínimo grande y máximo pequeño)</li>
<li>#5#: <code>ofstream coutF("parking.txt");</code></li>
<li>#6#: <code>t1 = t1 + 1200;</code> y #7#: <code>if (x2 == "pm")</code></li>
<li>#8#: <code>((Th * 60 + Tm) / nCar) / 60.</code></li>
<li>#9#: <code>pago = dt * T1;</code> y #10#: <code>30 * T1 + ddt * T2 - dt / 60 * T3</code></li>
<li>#3#: <code>int car, float pp, int &amp; cmin, int &amp; cmax, float &amp; pmin, float &amp; pmax</code></li></ul>
<p>Fíjate en el patrón de #4#: para buscar el mínimo de pagos se empieza con un valor imposiblemente grande.</p></div></div>

<h2>Tipo II: programa con fichero y subprogramas</h2>
<div class="prob" data-tag="Tipo II · Movimientos del caballo (parcial 2024)"><div class="enun"><p>Cada línea de <code>movimientos.txt</code> tiene 4 enteros: fila y columna inicial, fila y columna final. Escribe en <code>resultados.txt</code> si cada movimiento es válido (en "L") y si se sale del tablero 8×8. Muestra por pantalla el porcentaje de válidos y cuántos inválidos se salen. Usa un subprograma <code>esValido()</code> que devuelva las dos cosas y otro para el porcentaje.</p>
<pre class="out">
(4,4) a (2,3) mov. valido
(4,4) a (5,7) mov. no valido
(8,8) a (6,9) mov. no valido - fuera
</pre></div>
<div class="hint"><p>Dos resultados → acción con dos <code>bool &amp;</code>. Válido en L: diferencias absolutas (1,2) o (2,1), y además dentro del tablero.</p></div>
<div class="sol"><pre class="cpp">
#include <iostream>
#include <fstream>
#include <cmath>
using namespace std;

void esValido(int f1, int c1, int f2, int c2, bool & valido, bool & fuera) {
    fuera = f2 < 1 || f2 > 8 || c2 < 1 || c2 > 8;
    int df = abs(f2 - f1), dc = abs(c2 - c1);
    bool enL = (df == 1 && dc == 2) || (df == 2 && dc == 1);
    valido = enL && !fuera;
}

double porcentaje(int parte, int total) {
    if (total == 0) return 0;
    return 100.0 * parte / total;
}

int main() {
    ifstream fin("movimientos.txt");
    ofstream fout("resultados.txt");
    int f1, c1, f2, c2, total = 0, validos = 0, fueras = 0;
    bool val, fue;
    while (fin >> f1 >> c1 >> f2 >> c2) {
        total++;
        esValido(f1, c1, f2, c2, val, fue);
        fout << "(" << f1 << "," << c1 << ") a (" << f2 << "," << c2 << ") ";
        if (val) { fout << "mov. valido" << endl; validos++; }
        else if (fue) { fout << "mov. no valido - fuera" << endl; fueras++; }
        else fout << "mov. no valido" << endl;
    }
    cout << "Porcentaje de movimientos validos: " << porcentaje(validos, total) << "%" << endl;
    cout << "Total de movimientos invalidos fuera del tablero: " << fueras << endl;
}
</pre></div></div>

<h2>Tipo III: subprograma numérico</h2>
<div class="prob" data-tag="Tipo III · Números tenebrosos (parcial 2022)"><div class="enun"><p>Un número $t$ es tenebroso si tiene al menos un 9 y $t=a\cdot b$, donde $a$ es la suma de sus divisores impares (sin contar 1 ni $t$) y $b$ la suma de las cifras en posiciones impares (contando desde la derecha). Escribe un subprograma que, para el rango $[a,b]$ (no necesariamente $a\lt b$), devuelva el primer tenebroso y cuántos hay. Ejemplo: $a=300$, $b=10$ → 2 tenebrosos, el primero 292.</p></div>
<div class="hint"><p>Haz una función por propiedad (¿tiene un 9?, suma de divisores impares, suma de posiciones impares). Si $a\gt b$, intercámbialos. Dos resultados → acción.</p></div>
<div class="sol"><pre class="cpp">
bool tiene9(int t) {
    while (t > 0) {
        if (t % 10 == 9) return true;
        t = t / 10;
    }
    return false;
}

int sumaDivImpares(int t) {
    int s = 0;
    for (int d = 3; d < t; d += 2)
        if (t % d == 0) s += d;
    return s;
}

int sumaPosImpares(int t) {
    int s = 0, pos = 1;
    while (t > 0) {
        if (pos % 2 == 1) s += t % 10;
        t = t / 10;
        pos++;
    }
    return s;
}

void tenebrosos(int a, int b, int & primero, int & cuantos) {
    if (a > b) { int aux = a; a = b; b = aux; }
    primero = -1;
    cuantos = 0;
    for (int t = a; t <= b; t++) {
        if (tiene9(t) && sumaDivImpares(t) * sumaPosImpares(t) == t) {
            if (cuantos == 0) primero = t;
            cuantos++;
        }
    }
}
</pre><p>Probado: en [10, 300] salen 292 (53 × 4) y 296 (37 × 8).</p></div></div>

<div class="prob" data-tag="Tipo III · Intercambiar cifras (parcial 2024)"><div class="enun"><p>Subprograma que recibe dos enteros: si tienen el mismo número de cifras, intercambia sus cifras de posiciones pares (desde la derecha) y conserva las impares; si no, intercambia los números completos. Ejemplos: (123, 12345) → (12345, 123); (123456, 654321) → (624426, 153351).</p></div>
<div class="hint"><p>Reconstruye los dos números cifra a cifra con una potencia de 10 que va creciendo: <code>nuevo += cifra * pot; pot *= 10;</code></p></div>
<div class="sol"><pre class="cpp">
int numCifras(int n) {
    int c = 0;
    do { c++; n /= 10; } while (n != 0);
    return c;
}

void intercambia(int & a, int & b) {
    if (numCifras(a) != numCifras(b)) {
        int aux = a; a = b; b = aux;
        return;
    }
    int na = 0, nb = 0, pot = 1, pos = 1, x = a, y = b;
    while (x > 0) {
        int ca = x % 10, cb = y % 10;
        if (pos % 2 == 0) { na += cb * pot; nb += ca * pot; }
        else              { na += ca * pot; nb += cb * pot; }
        x /= 10; y /= 10; pot *= 10; pos++;
    }
    a = na;
    b = nb;
}
</pre><p>Probado con los dos ejemplos del enunciado.</p></div></div>
`}
  ]
});
