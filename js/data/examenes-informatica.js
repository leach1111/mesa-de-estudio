EXAMS.informatica = [

/* ==================================================================== */
{ title: "Examen parcial de prueba 1",
  sub: "Fundamentos de Informática · C++: iteración, ficheros y subprogramas",
  desc: "Completar un programa de mcd y mcm, informe de temperaturas desde fichero y números capicúa en un rango.",
  dur: "1 h 50 min", pts: "10 puntos (3 + 4 + 3)",
  instr: "<p>Escribe el código en C++ como en los laboratorios. En el problema 1, cada hueco <code>#n#</code> puede ser un símbolo, parte de una instrucción o una instrucción entera. No se pueden usar vectores.</p>",
  exam: String.raw`
<h2>Problema 1 · Tipo I <span class="pts">(3 puntos)</span></h2>
<p>El programa lee parejas de enteros positivos hasta que se introduce la pareja <code>0 0</code>. Para cada pareja escribe su máximo común divisor (algoritmo de Euclides) y su mínimo común múltiplo. Completa los huecos.</p>
<pre class="cpp">
#include <iostream>
#1#
int mcd(int a, int b);
int main() {
    int a, b, m;
    cin >> a >> b;
    while (#2#) {
        m = mcd(a, b);
        cout << "mcd = " << m << " mcm = " << #3# << endl;
        #4#
    }
}
int mcd(int a, int b) {
    int r;
    while (#5#) {
        r = a % b;
        #6#
        b = r;
    }
    #7#
}
</pre>
<p>Ejemplo: con la entrada <code>12 18  7 5  0 0</code> se escribe <code>mcd = 6 mcm = 36</code> y <code>mcd = 1 mcm = 35</code>.</p>

<h2>Problema 2 · Tipo II <span class="pts">(4 puntos)</span></h2>
<p>El fichero <code>temperaturas.txt</code> contiene en cada línea una ciudad (una palabra), el día del mes y las temperaturas máxima y mínima de ese día:</p>
<pre class="out">
Lleida 3 12.5 -2.0
Sevilla 3 36.0 21.5
Girona 4 9.0 -4.5
Barcelona 4 18.0 11.0
</pre>
<p>Escribe un programa que genere el fichero <code>informe.txt</code> con, para cada línea, la ciudad, el día y la amplitud térmica (máxima − mínima), añadiendo la palabra <code>helada</code> si la mínima es negativa y <code>calor</code> si la máxima es de 35 °C o más. Al final, debe mostrar por pantalla la amplitud media, la ciudad y el día con mayor amplitud, y el porcentaje de registros con helada.</p>
<p>Debes usar una acción <code>analiza</code> que, a partir de la máxima y la mínima, devuelva la amplitud y si hay helada y calor.</p>
<p>Para el ejemplo, la pantalla mostraría:</p>
<pre class="out">
Amplitud media: 12.375
Mayor amplitud: 14.5 en Lleida (dia 3)
Registros con helada: 50%
</pre>

<h2>Problema 3 · Tipo III <span class="pts">(3 puntos)</span></h2>
<p>Un número es <strong>capicúa</strong> si se lee igual de izquierda a derecha que de derecha a izquierda (por ejemplo, 121 o 7).</p>
<ol class="parts">
<li>Escribe una función <code>invertido</code> que devuelva el número con las cifras al revés (1230 → 321).</li>
<li>Escribe una función <code>capicua</code> que diga si un número es capicúa.</li>
<li>Escribe un subprograma que, dados dos enteros $a$ y $b$ (no necesariamente con $a\le b$), calcule cuántos capicúas hay en el intervalo $[a,b]$ y cuál es el mayor (−1 si no hay ninguno).</li>
</ol>
<p>Ejemplo: con $a=200$ y $b=100$ hay 10 capicúas (101, 111, …, 191) y el mayor es 191.</p>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<table>
<tr><th>Hueco</th><th>Solución</th></tr>
<tr><td>#1#</td><td><code>using namespace std;</code></td></tr>
<tr><td>#2#</td><td><code>!(a == 0 && b == 0)</code> &nbsp;(o <code>a != 0 || b != 0</code>)</td></tr>
<tr><td>#3#</td><td><code>a / m * b</code> &nbsp;(dividir primero evita desbordamientos)</td></tr>
<tr><td>#4#</td><td><code>cin >> a >> b;</code> &nbsp;(leer la siguiente pareja al final del bucle)</td></tr>
<tr><td>#5#</td><td><code>b != 0</code></td></tr>
<tr><td>#6#</td><td><code>a = b;</code></td></tr>
<tr><td>#7#</td><td><code>return a;</code></td></tr>
</table>
<p class="crit">Criterio: 3 puntos / 7 huecos. Un error típico en #2# es escribir <code>a != 0 && b != 0</code>: pararía con parejas como <code>0 5</code>.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<pre class="cpp">
#include <iostream>
#include <fstream>
using namespace std;

void analiza(double tmax, double tmin, double & amp, bool & helada, bool & calor) {
    amp = tmax - tmin;
    helada = tmin < 0;
    calor = tmax >= 35;
}

int main() {
    ifstream fin("temperaturas.txt");
    ofstream fout("informe.txt");
    string ciudad, ciudadMax;
    int dia, diaMax = 0, n = 0, nHelada = 0;
    double tmax, tmin, amp, suma = 0, ampMax = -1;
    bool hel, cal;
    while (fin >> ciudad >> dia >> tmax >> tmin) {
        analiza(tmax, tmin, amp, hel, cal);
        fout << ciudad << " " << dia << " " << amp;
        if (hel) fout << " helada";
        if (cal) fout << " calor";
        fout << endl;
        n++;
        suma += amp;
        if (hel) nHelada++;
        if (amp > ampMax) { ampMax = amp; ciudadMax = ciudad; diaMax = dia; }
    }
    if (n > 0) {
        cout << "Amplitud media: " << suma / n << endl;
        cout << "Mayor amplitud: " << ampMax << " en " << ciudadMax << " (dia " << diaMax << ")" << endl;
        cout << "Registros con helada: " << 100.0 * nHelada / n << "%" << endl;
    }
}
</pre>
<p>Fichero <code>informe.txt</code> generado:</p>
<pre class="out">
Lleida 3 14.5 helada
Sevilla 3 14.5 calor
Girona 4 13.5 helada
Barcelona 4 7
</pre>
<p class="crit">Criterio: lectura correcta del fichero hasta el final (1), acción con parámetros por referencia (1), escritura del informe (1), estadísticas finales sin división entera y protegidas con n &gt; 0 (1). Con empate (Lleida y Sevilla, 14,5) se queda el primero porque se compara con &gt;.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<pre class="cpp">
int invertido(int n) {
    int inv = 0;
    while (n > 0) {
        inv = inv * 10 + n % 10;
        n = n / 10;
    }
    return inv;
}

bool capicua(int n) {
    return n == invertido(n);
}

void capicuasRango(int a, int b, int & cuantos, int & mayor) {
    if (a > b) { int aux = a; a = b; b = aux; }
    cuantos = 0;
    mayor = -1;
    for (int n = a; n <= b; n++)
        if (capicua(n)) {
            cuantos++;
            mayor = n;          // al recorrer en orden creciente, el último es el mayor
        }
}
</pre>
<p class="crit">Probado: (200, 100) → 10 y 191; (10, 99) → 9 y 99.</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen parcial de prueba 2",
  sub: "Fundamentos de Informática · C++: formato de salida, notas y divisores",
  desc: "Completar un programa que pasa segundos a hh:mm:ss, cálculo de notas desde fichero y clasificación de números perfectos, abundantes y deficientes.",
  dur: "1 h 50 min", pts: "10 puntos (3 + 4 + 3)",
  instr: "<p>Escribe el código en C++. En el problema 1, cada hueco <code>#n#</code> puede ser un símbolo, parte de una instrucción o una instrucción entera. No se pueden usar vectores.</p>",
  exam: String.raw`
<h2>Problema 1 · Tipo I <span class="pts">(3 puntos)</span></h2>
<p>El programa lee del fichero <code>tiempos.txt</code> duraciones en segundos (una por línea) y escribe en <code>formato.txt</code> cada una en el formato <code>hh:mm:ss</code>, con dos cifras en cada campo. Al final muestra la duración media. Completa los huecos.</p>
<pre class="cpp">
#include <iostream>
#1#
using namespace std;
void convierte(int total, int & h, int & m, int & s);
#2#
int main() {
    ifstream fin("tiempos.txt");
    #3#
    int t, h, m, s, n = 0, suma = 0;
    while (#4#) {
        convierte(t, h, m, s);
        escribe2(fout, h); fout << ":";
        escribe2(fout, m); fout << ":";
        escribe2(fout, s); fout << endl;
        n++;
        suma = suma + t;
    }
    if (n > 0) cout << "Media: " << #5# << " s" << endl;
}
void convierte(int total, int & h, int & m, int & s) {
    h = total / 3600;
    m = #6#;
    s = #7#;
}
void escribe2(ofstream & f, int x) {
    if (#8#) f << "0";
    f << x;
}
</pre>
<p>Ejemplo: 3725 → <code>01:02:05</code>; 59 → <code>00:00:59</code>.</p>

<h2>Problema 2 · Tipo II <span class="pts">(4 puntos)</span></h2>
<p>El fichero <code>notas.txt</code> contiene en cada línea el DNI de un estudiante y sus notas del parcial, del final y del laboratorio:</p>
<pre class="out">
11111111A 6.5 7.0 8.0
22222222B 9.0 3.5 10.0
33333333C 4.0 5.0 6.0
44444444D 2.0 3.0 5.0
</pre>
<p>La nota de la asignatura es $0{,}3\cdot P+0{,}5\cdot F+0{,}2\cdot L$, pero si la nota del final es menor que 4, la nota de la asignatura no puede superar el 4.</p>
<p>Escribe un programa que genere <code>resultados.txt</code> con el DNI, la nota y la palabra <code>APROBADO</code> o <code>SUSPENDIDO</code> (aprobado con nota ≥ 5), y que muestre por pantalla el porcentaje de aprobados, la nota media y la mejor nota con su DNI. Usa una función <code>notaFinal</code>.</p>
<p>Para el ejemplo:</p>
<pre class="out">
Aprobados: 25%
Nota media: 4.7625
Mejor nota: 7.05 (11111111A)
</pre>

<h2>Problema 3 · Tipo III <span class="pts">(3 puntos)</span></h2>
<p>Los divisores propios de $n$ son sus divisores menores que $n$ (los de 12 son 1, 2, 3, 4, 6). Un número es <strong>perfecto</strong> si es igual a la suma de sus divisores propios (6 = 1 + 2 + 3), <strong>abundante</strong> si la suma es mayor (12) y <strong>deficiente</strong> si es menor (8).</p>
<ol class="parts">
<li>Escribe una función que calcule la suma de los divisores propios de $n\ge1$.</li>
<li>Escribe un subprograma que, dados $a$ y $b$ (en cualquier orden), cuente cuántos números de $[a,b]$ son perfectos, cuántos abundantes y cuántos deficientes.</li>
</ol>
<p>Ejemplo: en $[1,30]$ hay 2 perfectos (6 y 28), 5 abundantes (12, 18, 20, 24 y 30) y 23 deficientes.</p>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<table>
<tr><th>Hueco</th><th>Solución</th></tr>
<tr><td>#1#</td><td><code>#include <fstream></code></td></tr>
<tr><td>#2#</td><td><code>void escribe2(ofstream & f, int x);</code> &nbsp;(cabecera: se usa en main antes de definirse)</td></tr>
<tr><td>#3#</td><td><code>ofstream fout("formato.txt");</code></td></tr>
<tr><td>#4#</td><td><code>fin >> t</code></td></tr>
<tr><td>#5#</td><td><code>double(suma) / n</code> &nbsp;(evitar la división entera)</td></tr>
<tr><td>#6#</td><td><code>(total % 3600) / 60</code></td></tr>
<tr><td>#7#</td><td><code>total % 60</code></td></tr>
<tr><td>#8#</td><td><code>x < 10</code></td></tr>
</table>
<p class="crit">Observa que <code>escribe2</code> recibe el fichero <strong>por referencia</strong>: los flujos no se pueden copiar.</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<pre class="cpp">
#include <iostream>
#include <fstream>
using namespace std;

double notaFinal(double p, double f, double l) {
    double nota = 0.3 * p + 0.5 * f + 0.2 * l;
    if (f < 4 && nota > 4) nota = 4;
    return nota;
}

int main() {
    ifstream fin("notas.txt");
    ofstream fout("resultados.txt");
    string dni, dniMejor;
    double p, f, l, nota, suma = 0, mejor = -1;
    int n = 0, aprobados = 0;
    while (fin >> dni >> p >> f >> l) {
        nota = notaFinal(p, f, l);
        fout << dni << " " << nota << " ";
        if (nota >= 5) { fout << "APROBADO" << endl; aprobados++; }
        else fout << "SUSPENDIDO" << endl;
        n++;
        suma += nota;
        if (nota > mejor) { mejor = nota; dniMejor = dni; }
    }
    if (n > 0) {
        cout << "Aprobados: " << 100.0 * aprobados / n << "%" << endl;
        cout << "Nota media: " << suma / n << endl;
        cout << "Mejor nota: " << mejor << " (" << dniMejor << ")" << endl;
    }
}
</pre>
<pre class="out">
11111111A 7.05 APROBADO
22222222B 4 SUSPENDIDO
33333333C 4.9 SUSPENDIDO
44444444D 3.1 SUSPENDIDO
</pre>
<p class="crit">El caso 22222222B comprueba el tope: $0{,}3\cdot9+0{,}5\cdot3{,}5+0{,}2\cdot10=6{,}45$, pero como el final es menor que 4, queda en 4.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<pre class="cpp">
int sumaDivisoresPropios(int n) {
    int s = 0;
    for (int d = 1; d <= n / 2; d++)     // ningún divisor propio supera n/2
        if (n % d == 0) s += d;
    return s;
}

void clasifica(int a, int b, int & perf, int & abund, int & defic) {
    if (a > b) { int aux = a; a = b; b = aux; }
    perf = 0; abund = 0; defic = 0;
    for (int n = a; n <= b; n++) {
        int s = sumaDivisoresPropios(n);
        if (s == n) perf++;
        else if (s > n) abund++;
        else defic++;
    }
}
</pre>
<p class="crit">Probado: (30, 1) → 2 perfectos, 5 abundantes y 23 deficientes. Para $n=1$, la suma es 0 y es deficiente.</p>
</div>
`},

/* ==================================================================== */
{ title: "Examen parcial de prueba 3",
  sub: "Fundamentos de Informática · C++: caracteres, horas y potencias",
  desc: "Completar un contador de vocales y consonantes, horas de llegada de vuelos desde fichero y números de Armstrong.",
  dur: "1 h 50 min", pts: "10 puntos (3 + 4 + 3)",
  instr: "<p>Escribe el código en C++. En el problema 1, cada hueco <code>#n#</code> puede ser un símbolo, parte de una instrucción o una instrucción entera. No se pueden usar vectores ni la función <code>pow</code>.</p>",
  exam: String.raw`
<h2>Problema 1 · Tipo I <span class="pts">(3 puntos)</span></h2>
<p>El programa lee carácter a carácter el fichero <code>texto.txt</code> (con <code>fin >> c</code>, que se salta los espacios y saltos de línea) y cuenta las vocales, las consonantes y los dígitos, sin distinguir mayúsculas de minúsculas. También muestra el porcentaje de otros caracteres. Completa los huecos.</p>
<pre class="cpp">
#include <iostream>
#include <fstream>
using namespace std;
#1#
int main() {
    ifstream fin("texto.txt");
    #2#
    int vocales = 0, consonantes = 0, digitos = 0, total = 0;
    while (fin >> c) {
        total++;
        if (c >= 'A' && c <= 'Z') c = #3#;
        if (#4#) vocales++;
        else if (#5#) consonantes++;
        else if (c >= '0' && c <= '9') #6#
    }
    cout << "Vocales: " << vocales << endl;
    cout << "Consonantes: " << consonantes << endl;
    cout << "Digitos: " << digitos << endl;
    if (total > 0) cout << "Otros: " << #7# << "%" << endl;
}
bool esVocal(char c) {
    return #8#;
}
</pre>
<p>Ejemplo: con el texto <code>Hola Mundo 2026! C++ es OK.</code> se obtienen 6 vocales, 8 consonantes, 4 dígitos y un 18,18 % de otros.</p>

<h2>Problema 2 · Tipo II <span class="pts">(4 puntos)</span></h2>
<p>El fichero <code>vuelos.txt</code> contiene en cada línea el código del vuelo, el aeropuerto de origen, la hora de salida en formato <code>hhmm</code> y la duración en minutos:</p>
<pre class="out">
IB3456 BCN 2235 135
VY1010 MAD 0705 80
UX7001 PMI 1950 245
</pre>
<p>Escribe un programa que genere <code>llegadas.txt</code> con el código, el origen y la hora de llegada en formato <code>hh:mm</code>, añadiendo <code>+1</code> si llega al día siguiente. Al final muestra por pantalla la duración media, el vuelo más largo y cuántos vuelos llegan al día siguiente. Usa una acción <code>llegada</code> que calcule la hora y el minuto de llegada y si es al día siguiente.</p>
<p>Para el ejemplo, <code>llegadas.txt</code> queda:</p>
<pre class="out">
IB3456 BCN 00:50 +1
VY1010 MAD 08:25
UX7001 PMI 23:55
</pre>

<h2>Problema 3 · Tipo III <span class="pts">(3 puntos)</span></h2>
<p>Un número de $k$ cifras es <strong>de Armstrong</strong> si es igual a la suma de sus cifras elevadas a $k$. Por ejemplo, $153=1^3+5^3+3^3$.</p>
<ol class="parts">
<li>Escribe una función <code>potencia(b, e)</code> que calcule $b^e$ para enteros $e\ge0$ (sin <code>pow</code>).</li>
<li>Escribe una función <code>armstrong(n)</code>.</li>
<li>Escribe un subprograma que, dados $a$ y $b$ (en cualquier orden), devuelva cuántos números de Armstrong hay en $[a,b]$ y el mayor (−1 si no hay).</li>
</ol>
<p>Ejemplo: en $[100,999]$ hay 4 (153, 370, 371 y 407) y el mayor es 407.</p>
`,
  sol: String.raw`
<h2>Problema 1</h2>
<div class="ans">
<table>
<tr><th>Hueco</th><th>Solución</th></tr>
<tr><td>#1#</td><td><code>bool esVocal(char c);</code></td></tr>
<tr><td>#2#</td><td><code>char c;</code></td></tr>
<tr><td>#3#</td><td><code>c - 'A' + 'a'</code></td></tr>
<tr><td>#4#</td><td><code>esVocal(c)</code></td></tr>
<tr><td>#5#</td><td><code>c >= 'a' && c <= 'z'</code> &nbsp;(las vocales ya se han descartado)</td></tr>
<tr><td>#6#</td><td><code>digitos++;</code></td></tr>
<tr><td>#7#</td><td><code>100.0 * (total - vocales - consonantes - digitos) / total</code></td></tr>
<tr><td>#8#</td><td><code>c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'</code></td></tr>
</table>
<p class="crit">En el ejemplo, los "otros" son ! + + . (4 de 22 caracteres leídos, porque <code>fin >> c</code> se salta los espacios).</p>
</div>

<h2>Problema 2</h2>
<div class="ans">
<pre class="cpp">
#include <iostream>
#include <fstream>
using namespace std;

void llegada(int hhmm, int dur, int & h, int & m, bool & sig) {
    int minutos = hhmm / 100 * 60 + hhmm % 100 + dur;   // minutos desde las 00:00
    sig = minutos >= 24 * 60;
    minutos = minutos % (24 * 60);
    h = minutos / 60;
    m = minutos % 60;
}

int main() {
    ifstream fin("vuelos.txt");
    ofstream fout("llegadas.txt");
    string cod, orig, codMax;
    int hora, dur, h, m, n = 0, suma = 0, durMax = -1, nSig = 0;
    bool sig;
    while (fin >> cod >> orig >> hora >> dur) {
        llegada(hora, dur, h, m, sig);
        fout << cod << " " << orig << " ";
        if (h < 10) fout << "0";
        fout << h << ":";
        if (m < 10) fout << "0";
        fout << m;
        if (sig) { fout << " +1"; nSig++; }
        fout << endl;
        n++;
        suma += dur;
        if (dur > durMax) { durMax = dur; codMax = cod; }
    }
    if (n > 0) {
        cout << "Duracion media: " << double(suma) / n << " min" << endl;
        cout << "Vuelo mas largo: " << codMax << " (" << durMax << " min)" << endl;
        cout << "Llegan al dia siguiente: " << nSig << endl;
    }
}
</pre>
<pre class="out">
Duracion media: 153.333 min
Vuelo mas largo: UX7001 (245 min)
Llegan al dia siguiente: 1
</pre>
<p class="crit">Clave: pasar todo a minutos desde medianoche. La hora <code>0705</code> se lee como el entero 705.</p>
</div>

<h2>Problema 3</h2>
<div class="ans">
<pre class="cpp">
int potencia(int b, int e) {
    int p = 1;
    for (int i = 0; i < e; i++) p = p * b;
    return p;
}

int numCifras(int n) {
    int c = 0;
    do { c++; n = n / 10; } while (n != 0);
    return c;
}

bool armstrong(int n) {
    int k = numCifras(n), s = 0, x = n;
    while (x > 0) {
        s += potencia(x % 10, k);
        x = x / 10;
    }
    return s == n;
}

void armstrongRango(int a, int b, int & cuantos, int & mayor) {
    if (a > b) { int aux = a; a = b; b = aux; }
    cuantos = 0;
    mayor = -1;
    for (int n = a; n <= b; n++)
        if (armstrong(n)) { cuantos++; mayor = n; }
}
</pre>
<p class="crit">Probado: (999, 100) → 4 y 407. En [1, 9999] hay 16 (los 9 de una cifra, 153, 370, 371, 407, 1634, 8208 y 9474).</p>
</div>
`}
];
