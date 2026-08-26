# Mi Libro de Recetas

Libro de recetas virtual (HTML + CSS + JS, sin build ni servidor propio), repartido en dos archivos para que sea más fácil de editar: `index.html` (estructura y estilos) y `script.js` (la lógica de la app). Incluye:

- Pantalla de inicio con selector de tipo de comida (Desayuno, Vermut, Comida, Merienda, Cena, Todos) e imágenes personalizables por categoría.
- Pestañas de filtro (País, Sano, Frío o caliente, Tiempo de preparación) + buscador.
- Ficha de receta con imagen, descripción, ingredientes en checklist, método de preparación y comensales ajustables (escala las cantidades).
- Formulario "Crear receta" con contenido por idioma: nombre, descripción, ingredientes y pasos se guardan por separado en español, inglés y húngaro.
- Descarga en PDF (receta suelta o libro completo, con filtro por país/tipo/sano/etc.) usando la función de imprimir del navegador.
- Selector de idioma ES / EN / HU para toda la interfaz.
- **Características (etiquetas libres)**: al crear una receta puedes añadir tus propias palabras clave (p. ej. "picante", "vegetariano", "cumpleaños", "sin gluten…") y luego buscar por ellas o por el nombre del plato, todo desde el mismo buscador.
- **Nube compartida, sin login (Supabase)**: todas las recetas se guardan en una base de datos real; se abre directamente en cualquier móvil u ordenador y ya se ve/edita el mismo recetario, sin tener que crear ninguna cuenta ni escribir email o contraseña.

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

   create policy "recipes public read"   on recipes for select to anon, authenticated using (true);
   create policy "recipes public insert" on recipes for insert to anon, authenticated with check (true);
   create policy "recipes public update" on recipes for update to anon, authenticated using (true);
   create policy "recipes public delete" on recipes for delete to anon, authenticated using (true);

   create policy "settings public read"   on app_settings for select to anon, authenticated using (true);
   create policy "settings public insert" on app_settings for insert to anon, authenticated with check (true);
   create policy "settings public update" on app_settings for update to anon, authenticated using (true);
   ```

   **Si ya habías ejecutado el SQL de una entrega anterior** (cuando la web pedía email y contraseña), tus políticas actuales dicen `to authenticated` — con eso, ahora que la web ya no pide login, Supabase rechazaría todas las peticiones. Ejecuta esto para ponerlas al día (borra las políticas antiguas y crea las nuevas, sin tocar tus recetas ya guardadas):

   ```sql
   drop policy if exists "recipes shared read" on recipes;
   drop policy if exists "recipes shared insert" on recipes;
   drop policy if exists "recipes shared update" on recipes;
   drop policy if exists "recipes shared delete" on recipes;
   drop policy if exists "settings shared read" on app_settings;
   drop policy if exists "settings shared insert" on app_settings;
   drop policy if exists "settings shared update" on app_settings;

   create policy "recipes public read"   on recipes for select to anon, authenticated using (true);
   create policy "recipes public insert" on recipes for insert to anon, authenticated with check (true);
   create policy "recipes public update" on recipes for update to anon, authenticated using (true);
   create policy "recipes public delete" on recipes for delete to anon, authenticated using (true);

   create policy "settings public read"   on app_settings for select to anon, authenticated using (true);
   create policy "settings public insert" on app_settings for insert to anon, authenticated with check (true);
   create policy "settings public update" on app_settings for update to anon, authenticated using (true);

   alter table recipes add column if not exists tags text[] default '{}';
   ```

3. Ve a **Settings → API**. Copia el **Project URL** y la clave **anon public** (nunca uses la `service_role`, esa es secreta).
4. Abre `script.js` (NO `index.html`) con un editor de texto y busca `SUPABASE_URL` (Ctrl+F / Cmd+F) — verás estas dos líneas:

   ```js
   const SUPABASE_URL = "PEGA_AQUI_TU_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_SUPABASE_ANON_KEY";
   ```

   Sustituye los textos entre comillas por tu Project URL y tu clave anon, y guarda el archivo.

Con eso, en cuanto alguien abra la web por primera vez se cargarán solas las 3 recetas de ejemplo en la base de datos, y a partir de ahí todo lo que cree o edite cualquier persona que abra el enlace se guarda y se ve igual desde cualquier otro móvil u ordenador — sin ningún paso de login.

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

## Sobre el guardado de datos (nube compartida, sin login)

Ya no se usa el almacenamiento del navegador: los datos viven en tu proyecto de Supabase (plan gratuito), no en el dispositivo. Esto significa:

- Cualquiera que abra el enlace de la web ve y puede editar las mismas recetas al instante — sin crear cuenta, sin escribir email ni contraseña. Perfecto para que tú y tu novia (o cualquiera de la familia) lo tengáis siempre sincronizado entre móviles.
- Las fotos se comprimen automáticamente antes de guardarse, así que ocupan poco espacio en la base de datos.
- El plan gratuito de Supabase incluye 500 MB de base de datos — de sobra para miles de recetas con foto.

### Importante: quién puede entrar

Al no haber login, **cualquier persona que descubra la URL de tu web puede ver, crear, editar o borrar cualquier receta** — no hay ninguna barrera. Para un recetario familiar esto suele ser aceptable (nadie va a adivinar la dirección exacta de tu GitHub Pages), pero ten en cuenta que no es privado: si compartes el enlace con alguien, esa persona tiene el mismo control que tú sobre todas las recetas.

Si más adelante prefieres añadir una barrera de entrada (una contraseña compartida, o cuentas individuales), dímelo y lo añadimos — es un cambio más grande que requiere tocar tanto la web como la configuración de Supabase.
