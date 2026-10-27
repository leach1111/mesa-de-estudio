# Mesa de estudio

## Publicar
Sin el modo IA online: arrastra esta carpeta a app.netlify.com/drop (o, si ya tienes el sitio creado, a la zona de
"Production deploys" de tu proyecto). No hace falta configurar nada: todo es gratis.

## Asistente de estudio (botón abajo a la derecha)
Tres modos: **Buscar en apuntes** y **IA local** funcionan con Netlify Drop. **IA online** usa una API gratuita
(Groq o Gemini) y necesita publicar la web desde GitHub y configurar la clave: lee **GUIA-API-GRATIS.md**.

- **Buscar en apuntes**: busca en todos los apuntes al instante y te enseña los apartados que
  responden a tu duda, con enlace directo. Funciona en cualquier navegador y dispositivo.
- **IA local (beta)**: un modelo de lenguaje pequeño (Qwen 2.5) que se ejecuta dentro de tu navegador
  con WebGPU. Gratis, sin cuentas ni servidores y privado. Redacta respuestas a partir de los apartados que
  encuentra el buscador y te los enlaza como fuentes.
  - Requisitos: Chrome o Edge actualizados (mejor en ordenador, con 4 GB de RAM libres o más).
  - La primera vez descarga el modelo (≈1,1 GB el recomendado, ≈0,4 GB el ligero) y queda guardado
    en el navegador para las siguientes visitas. Descárgalo con wifi.
  - Es un modelo pequeño: puede equivocarse. Comprueba siempre con los apuntes enlazados.
- **Explícamelo**: selecciona cualquier trozo de los apuntes, de un examen o del código y pulsa el botón
  «Explícamelo» que aparece debajo. La IA local lo explica con más detalle (idea clave, paso a paso,
  ejemplo, error típico y truco para recordarlo), usando como contexto el apartado donde está el texto.
  Sin IA, te muestra los apartados de los apuntes que tratan ese concepto.
- El asistente no funciona abriendo index.html directamente desde el ordenador (file://) en modo IA;
  el modo buscador sí.

## Exámenes de prueba
Cada asignatura tiene 3 exámenes de prueba con su solucionario (menú lateral → "Exámenes de prueba").
Se ven como una hoja de examen y el botón "Imprimir / guardar PDF" genera un A4 limpio para hacerlo a mano.
