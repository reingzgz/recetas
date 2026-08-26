# Mi Libro de Recetas

Libro de recetas virtual (HTML + CSS + JS, sin build ni servidor propio), repartido en varios archivos para que sea más fácil de editar: `index.html` (estructura y estilos), `script.js` (la lógica de la app — dentro de `script.zip`) y los archivos para poder instalarla como app en el móvil (`manifest.json`, `service-worker.js` y la carpeta `icons/` — dentro de `pwa-files.zip`; ver más abajo por qué van comprimidos). Incluye:

- Pantalla de inicio con selector de tipo de comida (Desayuno, Vermut, Comida, Merienda, Cena, Todos) e imágenes personalizables por categoría.
- Pestañas de filtro (País, Sano, Frío o caliente, Tiempo de preparación) + buscador.
- Ficha de receta con imagen, descripción, ingredientes en checklist, método de preparación y comensales ajustables (escala las cantidades).
- Formulario "Crear receta" con contenido por idioma: nombre, descripción, ingredientes y pasos se guardan por separado en español, inglés y húngaro.
- **Traducción automática**: si solo rellenas la receta en un idioma, un botón "🌐 Traducir automáticamente" genera el nombre, la descripción, los ingredientes y los pasos en los otros dos idiomas por ti. Es una traducción automática (no perfecta) — conviene revisarla antes de guardar.
- Descarga en PDF (receta suelta o libro completo, con filtro por país/tipo/sano/etc.) usando la función de imprimir del navegador.
- Selector de idioma ES / EN / HU para toda la interfaz.
- **Características (etiquetas libres)**: al crear una receta puedes añadir tus propias palabras clave (p. ej. "picante", "vegetariano", "cumpleaños", "sin gluten…") y luego buscar por ellas o por el nombre del plato, todo desde el mismo buscador.
- **Guardado automático en este dispositivo**: cada receta se guarda sola en el navegador de tu móvil/ordenador (sin cuentas, sin login, sin nada externo que configurar) — funciona nada más abrir la web.
- **Sincronización online manual, vía tu propio GitHub**: un panel al final de la pantalla de inicio ("Sincronización online") te deja subir una copia de tus datos a un archivo dentro de tu repositorio de GitHub, y traerla de vuelta en otro dispositivo. No hay servidor ni base de datos externa — usa tu cuenta de GitHub y un token que generas tú. Además, dos botones en la barra de arriba — "☁️ Subir a la nube" y "⬇️ Traer de la nube" — te dejan subir o traer tus datos desde cualquier pantalla, sin volver a Inicio.
- **Confirmación antes de eliminar**: al borrar una receta, la app te pregunta primero para evitar borrados accidentales.
- **Botón "Atrás" de verdad**: ya no te lleva siempre a Inicio — te devuelve a la pantalla anterior (de una receta a la lista con tus filtros intactos, o de editar una receta de vuelta a esa misma receta).
- **Instalable como app en el móvil**: puedes "Añadir a pantalla de inicio" y se abre a pantalla completa con su propio icono, sin la barra del navegador — ver la sección de más abajo.

## Cómo funciona el guardado (sin nada que configurar)

En cuanto abres la web, ya funciona: crea, edita o borra recetas con normalidad y se van guardando solas en ese navegador. No hace falta ninguna cuenta ni clave para esto — es justo lo que ya tenías al principio.

Eso sí: por defecto, cada dispositivo tiene **su propia copia**. Si quieres que lo que creas en tu móvil aparezca también en el de tu novia (u otro dispositivo), usa la sincronización online de abajo.

## Sincronización online: cómo tener lo mismo en varios móviles/ordenadores

Al final de la pantalla de inicio hay un apartado llamado **"Sincronización online"** con estos campos: Usuario/organización, Repositorio, Rama y Token de GitHub, y tres botones: **Guardar estos datos de conexión**, **Subir mis datos a la nube** y **Traer datos de la nube**.

Así se usa:

1. **Usuario/organización**: tu nombre de usuario de GitHub (en tu caso, `reingzgz`).
2. **Repositorio**: el nombre del repositorio donde tienes publicada la web (en tu caso, `recetas`).
3. **Rama**: dejar `main` tal cual, salvo que sepas que usas otra.
4. **Token de GitHub**: hace falta crear uno (una especie de contraseña específica para esto). Pasos:
   - Ve a [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta) (o navega manualmente: tu foto de perfil → **Settings** →, al final del menú izquierdo, **Developer settings** → **Personal access tokens** → **Fine-grained tokens**).
   - Pulsa **Generate new token**.
   - En **Repository access**, elige **Only select repositories** y selecciona tu repositorio (`recetas`).
   - En **Permissions → Repository permissions**, busca **Contents** y ponlo en **Read and write**.
   - Pulsa **Generate token** al final y copia el token que empieza por `github_pat_...` — solo se muestra una vez, cópialo ya.
5. Pega ese token en el campo **Token de GitHub** de la web, pulsa **Guardar estos datos de conexión** (así no tienes que volver a escribirlo cada vez en ese dispositivo) y luego **Subir mis datos a la nube**.
6. En el otro móvil/ordenador, abre la misma web, rellena los mismos datos (usuario, repositorio, rama y el mismo token) y pulsa **Traer datos de la nube** — sus recetas se sustituirán por las que subiste desde el primer dispositivo.

Importante: **no es automático ni en tiempo real**. Cada dispositivo decide cuándo pulsar "Subir" o "Traer". Si los dos editáis recetas a la vez sin sincronizar entre medias, el que suba en último lugar sobrescribe lo del otro — para evitar líos, lo más simple es que uno suba y el otro traiga después de cada cambio importante, en vez de editar los dos a la vez sin avisaros.

El token se guarda únicamente en el navegador de ese dispositivo (nunca se envía a ningún sitio salvo a GitHub directamente) — si compartes el móvil o el ordenador con alguien, ten en cuenta que quedará guardado ahí.

Ahora hay además dos botones en la barra de arriba, visibles en cualquier pantalla (no solo en Inicio): **"☁️ Subir a la nube"** y **"⬇️ Traer de la nube"** — así puedes subir o traer tus datos sin tener que volver primero a la pantalla de inicio. Ambos usan la configuración que hayas guardado con "Guardar estos datos de conexión"; si todavía no la has guardado, te avisan para que vayas a Inicio a rellenarla una vez. El botón de traer, al sustituir todos tus datos locales, te pide confirmación antes de continuar.

Si antes te salía a veces un error como "sync/datos.json does not match…" al subir, ya está arreglado: se debía a que el navegador podía servir una copia en caché de los datos de GitHub al comprobar la versión actual del archivo antes de subir. Ahora se fuerza siempre a comprobar la versión real, y si aun así hay un choque (por ejemplo, dos subidas casi a la vez), la app reintenta sola una vez en vez de darte el error directamente.

## Traducción automática de recetas

Vimos que una receta que creaste tú (Tortitas) solo tenía contenido en español, así que al cambiar la web a húngaro salía en español con un aviso de "todavía sin traducción" — eso es normal, pasa porque solo la rellenaste en un idioma. Para no tener que escribir cada receta 3 veces, ahora el formulario "Crear receta" tiene un botón **"🌐 Traducir automáticamente"** justo debajo de las pestañas ES/EN/HU.

Cómo funciona:

1. Rellena la receta normalmente en el idioma que prefieras (nombre, descripción, ingredientes, pasos).
2. Pulsa **"🌐 Traducir automáticamente"**. La app usa un servicio de traducción gratuito para generar el contenido en los otros dos idiomas.
3. Cambia a las pestañas EN y HU para revisar el resultado — la traducción es automática, así que puede tener algún fallo o sonar un poco raro en ciertas frases; edítala a mano donde haga falta antes de guardar.
4. Guarda la receta como siempre.

Algunas cosas a tener en cuenta:

- **Solo rellena los idiomas que estén vacíos** — si ya has escrito algo en inglés o húngaro, no lo toca ni lo sobrescribe.
- **Necesita conexión a internet** en el móvil/ordenador en ese momento (usa un servicio externo, [MyMemory](https://mymemory.translated.net/), gratuito y sin necesidad de cuenta ni clave). Si no hay conexión o el servicio falla, te avisa para que rellenes esa parte a mano.
- Es opcional: si prefieres escribir tú misma el contenido en cada idioma, simplemente no pulses el botón.

## Cómo tenerla como una app en el móvil

Preguntaste si podías tenerla "en formato app" y si eso significaba peor almacenamiento — la respuesta corta es que no, es al revés: el almacenamiento es exactamente el mismo (sigue siendo el `localStorage` del navegador, ver arriba), y al ser una app "instalada" el sistema operativo tiende a ser más cuidadoso y no borrarlo por falta de espacio, al contrario que con una pestaña normal que a veces sí se puede limpiar.

No hace falta subirla a ninguna tienda de aplicaciones ni pagar nada: cualquier página web se puede "instalar" así, y ahora esta además lleva su propio icono (el mismo libro amarillo del logo) y abre a pantalla completa, sin la barra de direcciones del navegador — se siente como una app normal, pero sigue siendo la misma web de siempre por debajo.

**En Android (Chrome):**
1. Abre tu web (`https://reingzgz.github.io/recetas/`) en Chrome.
2. Toca los tres puntos de arriba a la derecha → **Añadir a pantalla de inicio** (o puede que te salga solo un aviso "Instalar app" abajo — pulsa ahí directamente).
3. Confirma con **Instalar**. Te aparecerá un icono nuevo en el cajón de apps / pantalla de inicio, igual que cualquier otra app.

**En iPhone (Safari — tiene que ser Safari, no Chrome):**
1. Abre tu web en Safari.
2. Toca el icono de compartir (el cuadrado con la flecha hacia arriba).
3. Baja hasta **Añadir a pantalla de inicio** y confirma.

Una vez instalada, sigue siendo tu web de siempre: los datos de cada dispositivo siguen guardándose solos ahí, y para tener lo mismo en varios móviles sigues usando el panel de Sincronización online o los botones ☁️/⬇️ de la barra de arriba, exactamente igual que antes.

## Por qué algunos archivos van en `.zip`

Muchos navegadores bloquean la descarga directa de archivos `.js` porque los tratan como "ejecutables" (sobre todo en Windows, donde un `.js` se puede llegar a ejecutar con doble clic). Por eso `script.js` va dentro de `script.zip`, y el nuevo `service-worker.js` (necesario para poder instalar la app, ver arriba) va dentro de `pwa-files.zip` junto con `manifest.json` y la carpeta `icons/` — todo junto para que sea un solo archivo a descomprimir. Descomprímelos y usa los archivos de dentro con normalidad, tanto en local como al subirlos a GitHub.

## Cómo verlo en local

Descomprime `script.zip` y `pwa-files.zip` junto a `index.html`, de forma que queden en la misma carpeta: `index.html`, `script.js`, `manifest.json`, `service-worker.js` y la carpeta `icons/` (con sus 5 archivos dentro, sin renombrarla ni moverla). Luego abre `index.html` directamente con doble clic, o desde una terminal:

```bash
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

## Cómo publicarlo con GitHub Pages (gratis)

1. Crea un repositorio nuevo en GitHub (o usa uno que ya tengas).
2. Descomprime `script.zip` y `pwa-files.zip` para tener `script.js`, `manifest.json`, `service-worker.js` y la carpeta `icons/` a mano. Sube todo a la raíz del repositorio: **Add file → Upload files** → arrastra `index.html`, `script.js`, `manifest.json`, `service-worker.js`, `README.md` y la carpeta `icons/` completa (con sus 5 archivos) a la vez → **Commit changes**. Los `.zip` NO se suben, solo su contenido ya descomprimido, y `icons/` debe quedar como una subcarpeta dentro de la raíz (GitHub la crea sola si arrastras la carpeta entera).
3. Ve a **Settings → Pages** en el repositorio.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`, y guarda.
5. GitHub te dará una URL del tipo `https://tu-usuario.github.io/tu-repo/` — la web estará online en un par de minutos.

Cada vez que quieras actualizar la web, entra en el repositorio → **Add file → Upload files** → sube la nueva versión del archivo que hayas cambiado → confirma que quieres reemplazarlo → **Commit changes**. La web se actualiza sola en un par de minutos.

## Cómo actualizarla con GitHub Desktop

Si ya tienes el repositorio clonado en GitHub Desktop, es incluso más rápido que subir archivos desde el navegador:

1. En GitHub Desktop, ve a **Repository → Show in Explorer/Finder** (o el botón que abre la carpeta local del repo) para ver dónde está esa carpeta en tu ordenador.
2. Descomprime `script.zip` y `pwa-files.zip` para tener `script.js`, `manifest.json`, `service-worker.js` y la carpeta `icons/`. Copia todos los archivos nuevos que te he enviado (`index.html`, `script.js`, `manifest.json`, `service-worker.js`, la carpeta `icons/` y, si ha cambiado, `README.md`) dentro de esa carpeta, sustituyendo a los que ya había (mismo nombre, se sobrescriben solos al copiar y confirmar "reemplazar").
3. Vuelve a GitHub Desktop: en la pestaña **Changes** verás los archivos modificados listados automáticamente.
4. Abajo a la izquierda, escribe una frase corta describiendo el cambio en el campo de resumen.
5. Pulsa **Commit to main**.
6. Pulsa **Push origin** (arriba) para subir el cambio a GitHub.

En un par de minutos la web en GitHub Pages recoge el cambio automáticamente — no hace falta hacer nada más en Settings → Pages, eso ya quedó configurado la primera vez.

## Sobre la privacidad

Como no hay ningún login en la web en sí, cualquiera que tenga tu enlace de GitHub Pages puede crear/editar/borrar recetas en su propio dispositivo — pero esos cambios se quedan en su navegador, no llegan a los tuyos a menos que tú mismo pulses "Traer datos de la nube" usando exactamente tu usuario/repositorio/token. Para que alguien pudiera "tocar" tus datos en GitHub necesitaría tu token, que tú generas y guardas solo en tus propios dispositivos — no se comparte por defecto en ningún sitio.
