# Mi Libro de Recetas

Libro de recetas virtual (HTML + CSS + JS, sin build ni servidor propio), repartido en dos archivos para que sea más fácil de editar: `index.html` (estructura y estilos) y `script.js` (la lógica de la app). Incluye:

- Pantalla de inicio con selector de tipo de comida (Desayuno, Vermut, Comida, Merienda, Cena, Todos) e imágenes personalizables por categoría.
- Pestañas de filtro (País, Sano, Frío o caliente, Tiempo de preparación) + buscador.
- Ficha de receta con imagen, descripción, ingredientes en checklist, método de preparación y comensales ajustables (escala las cantidades).
- Formulario "Crear receta" con contenido por idioma: nombre, descripción, ingredientes y pasos se guardan por separado en español, inglés y húngaro.
- Descarga en PDF (receta suelta o libro completo, con filtro por país/tipo/sano/etc.) usando la función de imprimir del navegador.
- Selector de idioma ES / EN / HU para toda la interfaz.
- **Características (etiquetas libres)**: al crear una receta puedes añadir tus propias palabras clave (p. ej. "picante", "vegetariano", "cumpleaños", "sin gluten…") y luego buscar por ellas o por el nombre del plato, todo desde el mismo buscador.
- **Cuenta y nube (Supabase)**: inicio de sesión con email y contraseña; todas las recetas se guardan en una base de datos real y son las mismas para todos los que inicien sesión — es un recetario familiar compartido, no uno distinto por dispositivo.

## Antes de subirlo: configura tu base de datos (Supabase)

La web necesita una base de datos gratuita en [supabase.com](https://supabase.com) para poder guardar las recetas. Si ya la creaste con mi ayuda anterior, salta directamente al paso 4.

1. Crea una cuenta en [supabase.com](https://supabase.com) y un proyecto nuevo (elige una contraseña de base de datos y guárdala en un lugar seguro, no la necesitarás para la web).
2. Dentro del proyecto, ve a **SQL Editor** → **New query**, pega esto y pulsa **Run**:

   ```sql
   create table recipes (
     id bigint generated always as identity primary key,
     meal_types text[] default '{}',
     country text,
     healthy boolean default false,
     temp text,
     prep_time integer,
     servings integer default 4,
     image text,
     emoji text,
     i18n jsonb default '{}'::jsonb,
     tags text[] default '{}',
     created_at timestamptz default now()
   );

   create table app_settings (
     id text primary key,
     meal_images jsonb default '{}'::jsonb,
     updated_at timestamptz default now()
   );

   alter table recipes enable row level security;
   alter table app_settings enable row level security;

   create policy "recipes shared read"   on recipes for select to authenticated using (true);
   create policy "recipes shared insert" on recipes for insert to authenticated with check (true);
   create policy "recipes shared update" on recipes for update to authenticated using (true);
   create policy "recipes shared delete" on recipes for delete to authenticated using (true);

   create policy "settings shared read"   on app_settings for select to authenticated using (true);
   create policy "settings shared insert" on app_settings for insert to authenticated with check (true);
   create policy "settings shared update" on app_settings for update to authenticated using (true);
   ```

   **Si ya habías ejecutado este SQL antes** (en una entrega anterior) y solo te falta la columna nueva de características, en vez de todo lo anterior ejecuta solo esto:

   ```sql
   alter table recipes add column if not exists tags text[] default '{}';
   ```

3. Ve a **Settings → API**. Copia el **Project URL** y la clave **anon public** (nunca uses la `service_role`, esa es secreta).
4. Abre `script.js` (NO `index.html`) con un editor de texto y busca `SUPABASE_URL` (Ctrl+F / Cmd+F) — verás estas dos líneas:

   ```js
   const SUPABASE_URL = "PEGA_AQUI_TU_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_SUPABASE_ANON_KEY";
   ```

   Sustituye los textos entre comillas por tu Project URL y tu clave anon, y guarda el archivo.

Con eso, la primera persona que se registre en la web verá las 3 recetas de ejemplo cargarse automáticamente en la base de datos, y a partir de ahí todo lo que cree cualquier usuario logueado se guarda y comparte con el resto.

## Cómo verlo en local

Abre `index.html` directamente con doble clic (`script.js` tiene que estar en la misma carpeta), o desde una terminal:

```bash
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

## Cómo publicarlo con GitHub Pages (gratis)

1. Crea un repositorio nuevo en GitHub (o usa uno que ya tengas, p. ej. `recipe-book`).
2. Sube los **tres archivos** (`index.html`, `script.js` y `README.md`) a la raíz del repositorio: **Add file → Upload files** → arrastra los tres a la vez → **Commit changes**. Los tres deben quedar en la misma carpeta (la raíz), no en subcarpetas.
3. Ve a **Settings → Pages** en el repositorio.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`, y guarda.
5. GitHub te dará una URL del tipo `https://tu-usuario.github.io/recipe-book/` — la web estará online en un par de minutos.

Cada vez que quieras actualizar la web (por ejemplo, después de rellenar `SUPABASE_URL` en `script.js`), entra en el repositorio → **Add file → Upload files** → sube la nueva versión del archivo que hayas cambiado → confirma que quieres reemplazarlo → **Commit changes**. La web se actualiza sola en un par de minutos.

## Cómo actualizarla con GitHub Desktop

Si ya tienes el repositorio clonado en GitHub Desktop, es incluso más rápido que subir archivos desde el navegador:

1. En GitHub Desktop, ve a **Repository → Show in Explorer/Finder** (o el botón que abre la carpeta local del repo) para ver dónde está esa carpeta en tu ordenador.
2. Copia los archivos nuevos que te he enviado (`index.html`, `script.js` y, si ha cambiado, `README.md`) dentro de esa carpeta, sustituyendo a los que ya había (incluso mismo nombre, se sobrescriben solos al copiar y confirmar "reemplazar").
3. Vuelve a GitHub Desktop: en la pestaña **Changes** verás los archivos modificados listados automáticamente.
4. Abajo a la izquierda, escribe una frase corta describiendo el cambio (p. ej. "Añadir búsqueda por características") en el campo de resumen.
5. Pulsa **Commit to main**.
6. Pulsa **Push origin** (arriba) para subir el cambio a GitHub.

En un par de minutos la web en GitHub Pages recoge el cambio automáticamente — no hace falta hacer nada más en Settings → Pages, eso ya quedó configurado la primera vez.

## Sobre el guardado de datos (nube compartida)

Ya no se usa el almacenamiento del navegador: los datos viven en tu proyecto de Supabase (plan gratuito), no en el dispositivo. Esto significa:

- Todos los que inicien sesión ven y pueden editar las mismas recetas — pensado para que la familia entera comparta un único recetario, desde cualquier móvil u ordenador.
- Las fotos se comprimen automáticamente antes de guardarse (igual que antes), así que ocupan poco espacio en la base de datos.
- El plan gratuito de Supabase incluye 500 MB de base de datos — de sobra para miles de recetas con foto.

### Importante: quién puede entrar

Mientras el registro esté abierto, cualquier persona que descubra la URL de tu web puede crear una cuenta y ver/editar todas las recetas (es un recetario compartido, no hay recetas privadas por usuario). Si quieres cerrarlo una vez que toda la familia se haya registrado:

1. En Supabase, ve a **Authentication → Settings** (o **Providers**, según la versión).
2. Desactiva la opción que permite **registro de nuevos usuarios** ("Allow new users to sign up" / "Enable sign ups").

Con eso, solo podrán iniciar sesión las cuentas que ya existan; nadie nuevo podrá registrarse aunque tenga el enlace.
