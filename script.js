/* ================= I18N ================= */
const STRINGS = {
  es:{
    appTitle:"Mi Libro de Recetas", back:"Inicio",
    heroTitle:"¿Qué te apetece cocinar hoy?",
    heroSub:"Guarda tus recetas favoritas, organízalas y descárgalas en PDF cuando quieras.",
    createRecipe:"Crear receta", whatToEat:"¿Qué quiero comer?",
    downloadBook:"Descargar libro completo en PDF", download:"Descargar",
    tab_all:"Todos", tab_country:"País", tab_healthy:"Sano", tab_temp:"Frío o caliente", tab_time:"Tiempo de preparación",
    searchPh:"Buscar por nombre o característica…",
    meal_desayuno:"Desayuno", meal_vermut:"Vermut", meal_comida:"Comida", meal_merienda:"Merienda", meal_cena:"Cena", meal_todos:"Todos",
    recipesCount:"recetas", noResults:"No hay recetas que coincidan con estos filtros todavía.",
    servings:"Comensales", ingredients:"Ingredientes", method:"Método de preparación",
    edit:"Editar", delete:"Eliminar", downloadRecipe:"Descargar PDF",
    fieldName:"Nombre del plato", fieldMealType:"Tipo de comida", fieldCountry:"País", fieldTemp:"Frío o caliente",
    tempNA:"No aplica", cold:"Frío", hot:"Caliente",
    fieldPrepTime:"Tiempo de preparación (min)", fieldServings:"Número de comensales", fieldHealthy:"¿Es una receta sana?",
    fieldTags:"Características", tagsHint:"Añade palabras sueltas para poder buscar luego por ellas (p. ej. picante, vegetariano, cumpleaños, sin gluten…).",
    ph_tag:"Escribe una característica y pulsa Enter", addTag:"Añadir",
    fieldImage:"Imagen del plato", imageHint:"Haz clic para subir una foto del plato",
    fieldInfo:"Información / descripción", fieldIngredients:"Ingredientes", addIngredient:"Añadir ingrediente",
    fieldMethod:"Método de preparación", addStep:"Añadir paso", save:"Guardar receta", cancel:"Cancelar",
    ing_name:"Ingrediente", ing_qty:"Cantidad", ing_unit:"Unidad",
    downloadTitle:"Descargar en PDF", chooseValue:"Elige el valor", generate:"Generar PDF",
    scope_all:"Todo el libro", scope_meal:"Por tipo de comida", scope_country:"Por país",
    scope_healthy:"Solo recetas sanas", scope_temp:"Por frío o caliente", scope_time:"Por tiempo de preparación",
    bookTitle:"Mi Libro de Recetas", min:"min", people:"personas", noImageYet:"Sin foto todavía",
    fastMin:"Menos de 15 min", medMin:"15–30 min", slowMin:"30–60 min", verySlowMin:"Más de 60 min",
    ph_country:"España, México, Turquía…", ph_info:"Un poco sobre el origen o el plato…",
    changeImage:"Cambiar imagen", fieldContentLang:"Contenido en",
    formLangHint:"El nombre, la descripción, los ingredientes y los pasos son específicos de cada idioma — rellena solo los que necesites. El resto de datos (país, tiempo, comensales, imagen…) se comparten entre idiomas.",
    nameRequiredAlert:"Escribe al menos el nombre del plato en algún idioma.",
    langName_es:"español", langName_en:"inglés", langName_hu:"húngaro",
    fallbackNotice:"Mostrando en {lang} — todavía no hay traducción a este idioma.",
    authNotConfigured:"Base de datos no configurada (falta SUPABASE_URL)",
    cloudLoadError:"No se han podido cargar las recetas. Comprueba tu conexión e inténtalo de nuevo.",
    cloudSaveError:"No se ha podido guardar. Comprueba tu conexión e inténtalo de nuevo."
  },
  en:{
    appTitle:"My Recipe Book", back:"Home",
    heroTitle:"What are you in the mood to cook today?",
    heroSub:"Save your favourite recipes, organise them and download them as a PDF whenever you like.",
    createRecipe:"Create recipe", whatToEat:"What do I want to eat?",
    downloadBook:"Download full book as PDF", download:"Download",
    tab_all:"All", tab_country:"Country", tab_healthy:"Healthy", tab_temp:"Hot or cold", tab_time:"Prep time",
    searchPh:"Search by name or characteristic…",
    meal_desayuno:"Breakfast", meal_vermut:"Vermouth", meal_comida:"Lunch", meal_merienda:"Snack", meal_cena:"Dinner", meal_todos:"All",
    recipesCount:"recipes", noResults:"No recipes match these filters yet.",
    servings:"Servings", ingredients:"Ingredients", method:"Method",
    edit:"Edit", delete:"Delete", downloadRecipe:"Download PDF",
    fieldName:"Dish name", fieldMealType:"Meal type", fieldCountry:"Country", fieldTemp:"Hot or cold",
    tempNA:"N/A", cold:"Cold", hot:"Hot",
    fieldPrepTime:"Prep time (min)", fieldServings:"Number of servings", fieldHealthy:"Is this a healthy recipe?",
    fieldTags:"Characteristics", tagsHint:"Add loose keywords so you can search by them later (e.g. spicy, vegetarian, birthday, gluten-free…).",
    ph_tag:"Type a characteristic and press Enter", addTag:"Add",
    fieldImage:"Dish photo", imageHint:"Click to upload a photo of the dish",
    fieldInfo:"Information / description", fieldIngredients:"Ingredients", addIngredient:"Add ingredient",
    fieldMethod:"Method", addStep:"Add step", save:"Save recipe", cancel:"Cancel",
    ing_name:"Ingredient", ing_qty:"Amount", ing_unit:"Unit",
    downloadTitle:"Download as PDF", chooseValue:"Choose the value", generate:"Generate PDF",
    scope_all:"Whole book", scope_meal:"By meal type", scope_country:"By country",
    scope_healthy:"Healthy recipes only", scope_temp:"By hot or cold", scope_time:"By prep time",
    bookTitle:"My Recipe Book", min:"min", people:"people", noImageYet:"No photo yet",
    fastMin:"Under 15 min", medMin:"15–30 min", slowMin:"30–60 min", verySlowMin:"Over 60 min",
    ph_country:"Spain, Mexico, Turkey…", ph_info:"A little about the origin or the dish…",
    changeImage:"Change image", fieldContentLang:"Content language",
    formLangHint:"Name, description, ingredients and steps are language-specific — fill in only the ones you need. Everything else (country, time, servings, photo…) is shared across languages.",
    nameRequiredAlert:"Please enter the dish name in at least one language.",
    langName_es:"Spanish", langName_en:"English", langName_hu:"Hungarian",
    fallbackNotice:"Showing in {lang} — no translation for this language yet.",
    authNotConfigured:"Database not configured (missing SUPABASE_URL)",
    cloudLoadError:"Couldn't load the recipes. Check your connection and try again.",
    cloudSaveError:"Couldn't save. Check your connection and try again."
  },
  hu:{
    appTitle:"Receptkönyvem", back:"Kezdőlap",
    heroTitle:"Mihez lenne kedved ma főzni?",
    heroSub:"Mentsd el kedvenc recepteidet, rendszerezd őket, és töltsd le PDF-ben bármikor.",
    createRecipe:"Recept létrehozása", whatToEat:"Mit szeretnék enni?",
    downloadBook:"Teljes könyv letöltése PDF-ben", download:"Letöltés",
    tab_all:"Mind", tab_country:"Ország", tab_healthy:"Egészséges", tab_temp:"Hideg vagy meleg", tab_time:"Elkészítési idő",
    searchPh:"Keresés név vagy jellemző alapján…",
    meal_desayuno:"Reggeli", meal_vermut:"Vermut", meal_comida:"Ebéd", meal_merienda:"Uzsonna", meal_cena:"Vacsora", meal_todos:"Mind",
    recipesCount:"recept", noResults:"Egyelőre nincs recept ezekkel a szűrőkkel.",
    servings:"Adagok", ingredients:"Hozzávalók", method:"Elkészítés",
    edit:"Szerkesztés", delete:"Törlés", downloadRecipe:"PDF letöltése",
    fieldName:"Étel neve", fieldMealType:"Étkezés típusa", fieldCountry:"Ország", fieldTemp:"Hideg vagy meleg",
    tempNA:"Nem releváns", cold:"Hideg", hot:"Meleg",
    fieldPrepTime:"Elkészítési idő (perc)", fieldServings:"Adagok száma", fieldHealthy:"Egészséges recept?",
    fieldTags:"Jellemzők", tagsHint:"Adj hozzá szabad kulcsszavakat, hogy később ezek alapján is kereshess (pl. csípős, vegetáriánus, szülinapi, gluténmentes…).",
    ph_tag:"Írj be egy jellemzőt, majd nyomj Entert", addTag:"Hozzáadás",
    fieldImage:"Étel fotója", imageHint:"Kattints ide fotó feltöltéséhez",
    fieldInfo:"Leírás", fieldIngredients:"Hozzávalók", addIngredient:"Hozzávaló hozzáadása",
    fieldMethod:"Elkészítés", addStep:"Lépés hozzáadása", save:"Recept mentése", cancel:"Mégse",
    ing_name:"Hozzávaló", ing_qty:"Mennyiség", ing_unit:"Egység",
    downloadTitle:"Letöltés PDF-ben", chooseValue:"Válaszd ki az értéket", generate:"PDF generálása",
    scope_all:"Teljes könyv", scope_meal:"Étkezés típusa szerint", scope_country:"Ország szerint",
    scope_healthy:"Csak egészséges receptek", scope_temp:"Hideg/meleg szerint", scope_time:"Elkészítési idő szerint",
    bookTitle:"Receptkönyvem", min:"perc", people:"fő", noImageYet:"Még nincs fotó",
    fastMin:"15 perc alatt", medMin:"15–30 perc", slowMin:"30–60 perc", verySlowMin:"60 percnél több",
    ph_country:"Spanyolország, Mexikó, Törökország…", ph_info:"Néhány szó az étel eredetéről…",
    changeImage:"Kép módosítása", fieldContentLang:"Tartalom nyelve",
    formLangHint:"A név, a leírás, a hozzávalók és a lépések nyelvenként külön szerkeszthetők — csak azokat töltsd ki, amelyekre szükséged van. A többi adat (ország, idő, adagok, fotó…) minden nyelv között közös.",
    nameRequiredAlert:"Add meg az étel nevét legalább egy nyelven.",
    langName_es:"spanyol", langName_en:"angol", langName_hu:"magyar",
    fallbackNotice:"{lang} nyelven jelenik meg — erre a nyelvre még nincs fordítás.",
    authNotConfigured:"Az adatbázis nincs beállítva (hiányzik a SUPABASE_URL)",
    cloudLoadError:"Nem sikerült betölteni a recepteket. Ellenőrizd a kapcsolatot, és próbáld újra.",
    cloudSaveError:"Nem sikerült menteni. Ellenőrizd a kapcsolatot, és próbáld újra."
  }
};
const MEAL_TYPES = ["desayuno","vermut","comida","merienda","cena"];
const MEAL_EMOJI = {desayuno:"🥐",vermut:"🍹",comida:"🍲",merienda:"🍪",cena:"🍽️",todos:"📚"};

/* ================= SAMPLE DATA (in-memory only for this preview) ================= */
/* Each recipe's editable content (name/info/ingredients/steps) is stored per language in `i18n`.
   Fields that don't change with language (country, temp, servings, image...) live at the top level. */
const CONTENT_LANGS = ["es","en","hu"];
function emptyContent(){ return {name:"",info:"",ingredients:[],steps:[]}; }

/* Starter recipes: inserted into the shared cloud book automatically the first time it's empty. */
const STARTER_RECIPES = [
    {
      mealTypes:["merienda"], country:"Argentina", healthy:false, temp:"",
      prepTime:75, servings:12, image:"", emoji:"🍪", tags:["dulce","postre","para compartir"],
      i18n:{
        es:{
          name:"Alfajores",
          info:"Los alfajores son dulces tradicionales, principalmente de origen español y latinoamericano, que consisten en dos o más tapas de masa unidas por un relleno, comúnmente dulce de leche, y a menudo recubiertos de coco.",
          ingredients:[
            {name:"Maicena",qty:2,unit:"tazas"},{name:"Harina",qty:2,unit:"tazas"},
            {name:"Polvo para hornear",qty:1,unit:"pizca"},{name:"Bicarbonato",qty:1,unit:"pizca"},
            {name:"Vainilla",qty:1,unit:"pizca"},{name:"Ralladura de limón",qty:1,unit:"pizca"},
            {name:"Huevo",qty:1,unit:""},{name:"Yema de huevo",qty:1,unit:""},
            {name:"Coco rallado",qty:1,unit:"cda"},{name:"Mantequilla",qty:100,unit:"g"},
            {name:"Dulce de leche",qty:200,unit:"g"}
          ],
          steps:[
            "En un bowl mezclar la mantequilla a temperatura ambiente con el azúcar, la vainilla, el limón y los huevos.",
            "En otro bowl mezclar la harina, maicena, polvo para hornear y bicarbonato, con un poco de sal.",
            "Tamizar la mezcla de harina sobre la de mantequilla y mezclar hasta lograr una masa quebradiza.",
            "Amasar sobre la mesa y dejar reposar 1 hora en la nevera.",
            "Estirar la masa entre dos filminas y cortar formas circulares.",
            "Hornear a 180°C durante 12 minutos, sin que cojan color.",
            "Unir de a pares con dulce de leche y rebozar el borde en coco rallado."
          ]
        },
        en:{
          name:"Alfajores",
          info:"Alfajores are traditional sweets, mainly of Spanish and Latin American origin, made from two or more layers of dough joined by a filling — usually dulce de leche — and often coated in coconut.",
          ingredients:[
            {name:"Cornstarch",qty:2,unit:"cups"},{name:"Flour",qty:2,unit:"cups"},
            {name:"Baking powder",qty:1,unit:"pinch"},{name:"Baking soda",qty:1,unit:"pinch"},
            {name:"Vanilla",qty:1,unit:"pinch"},{name:"Lemon zest",qty:1,unit:"pinch"},
            {name:"Egg",qty:1,unit:""},{name:"Egg yolk",qty:1,unit:""},
            {name:"Shredded coconut",qty:1,unit:"tbsp"},{name:"Butter",qty:100,unit:"g"},
            {name:"Dulce de leche",qty:200,unit:"g"}
          ],
          steps:[
            "In a bowl, mix room-temperature butter with sugar, vanilla, lemon zest and the eggs.",
            "In another bowl, mix the flour, cornstarch, baking powder and baking soda with a pinch of salt.",
            "Sift the flour mixture over the butter mixture and combine until you get a crumbly dough.",
            "Knead on the table and let it rest for 1 hour in the fridge.",
            "Roll out the dough between two sheets of plastic wrap and cut out circles.",
            "Bake at 180°C (350°F) for 12 minutes, without letting them brown.",
            "Sandwich pairs together with dulce de leche and roll the edge in shredded coconut."
          ]
        },
        hu:{
          name:"Alfajores",
          info:"Az alfajores hagyományos, elsősorban spanyol és latin-amerikai eredetű édesség, amely két vagy több tésztalapból áll, amelyeket krém — általában dulce de leche — köt össze, és gyakran kókusszal szórják meg.",
          ingredients:[
            {name:"Kukoricakeményítő",qty:2,unit:"csésze"},{name:"Liszt",qty:2,unit:"csésze"},
            {name:"Sütőpor",qty:1,unit:"csipet"},{name:"Szódabikarbóna",qty:1,unit:"csipet"},
            {name:"Vanília",qty:1,unit:"csipet"},{name:"Citromhéj",qty:1,unit:"csipet"},
            {name:"Tojás",qty:1,unit:""},{name:"Tojássárgája",qty:1,unit:""},
            {name:"Reszelt kókusz",qty:1,unit:"evőkanál"},{name:"Vaj",qty:100,unit:"g"},
            {name:"Dulce de leche",qty:200,unit:"g"}
          ],
          steps:[
            "Egy tálban keverjük össze a szobahőmérsékletű vajat a cukorral, a vaníliával, a citromhéjjal és a tojásokkal.",
            "Egy másik tálban keverjük össze a lisztet, a keményítőt, a sütőport és a szódabikarbónát egy csipet sóval.",
            "Szitáljuk a lisztes keveréket a vajas keverékre, és keverjük össze, amíg morzsás tésztát nem kapunk.",
            "Gyúrjuk össze az asztalon, majd pihentessük 1 órát a hűtőben.",
            "Nyújtsuk ki a tésztát két fólia között, és szaggassunk ki köröket.",
            "Süssük 180°C-on 12 percig, ügyelve, hogy ne barnuljanak meg.",
            "Ragasszuk össze párban dulce de lechével, és forgassuk a szélüket reszelt kókuszba."
          ]
        }
      }
    },
    {
      mealTypes:["comida","cena"], country:"Turquía", healthy:false, temp:"caliente",
      prepTime:90, servings:6, image:"", emoji:"🫓", tags:["especiado","horno","para compartir"],
      i18n:{
        es:{
          name:"Pide Lahmacun",
          info:"Es un tipo de pan plano turco, similar a una pizza, con forma de barco y cubierto con diversos ingredientes como carne picada, queso o huevos.",
          ingredients:[
            {name:"Harina",qty:500,unit:"g"},{name:"Sal",qty:1,unit:"cdta"},{name:"Azúcar",qty:1,unit:"cdta"},
            {name:"Levadura seca",qty:7,unit:"g"},{name:"Agua tibia",qty:300,unit:"ml"},{name:"Aceite de oliva",qty:2,unit:"cda"},
            {name:"Carne de cordero picada",qty:300,unit:"g"},{name:"Cebolla",qty:1,unit:"ud"},
            {name:"Tomate",qty:2,unit:"ud"},{name:"Pimiento verde",qty:1,unit:"ud"},{name:"Ajo",qty:2,unit:"dientes"},
            {name:"Pasta de tomate",qty:1,unit:"cda"},{name:"Pimentón dulce",qty:1,unit:"cdta"},{name:"Comino molido",qty:0.5,unit:"cdta"}
          ],
          steps:[
            "Disuelve la levadura con azúcar en agua tibia y deja reposar 10 minutos hasta que espume.",
            "Mezcla la harina y la sal, haz un hueco y añade la levadura, el resto del agua y el aceite.",
            "Amasa hasta obtener una masa suave y elástica; deja reposar 1 hora hasta que doble su tamaño.",
            "Mezcla la carne con la cebolla, tomate, pimiento, ajo, pasta de tomate y especias.",
            "Precalienta el horno al máximo. Divide la masa en bolas y extiéndelas finas en forma ovalada.",
            "Cubre cada base con una capa fina de relleno de carne.",
            "Hornea 8-12 minutos hasta que la masa esté crujiente y la carne bien cocida.",
            "Sirve caliente con rodajas de limón."
          ]
        },
        en:{
          name:"Pide Lahmacun",
          info:"A Turkish flatbread, similar to a pizza, shaped like a boat and topped with ingredients such as minced meat, cheese or eggs.",
          ingredients:[
            {name:"Flour",qty:500,unit:"g"},{name:"Salt",qty:1,unit:"tsp"},{name:"Sugar",qty:1,unit:"tsp"},
            {name:"Dry yeast",qty:7,unit:"g"},{name:"Warm water",qty:300,unit:"ml"},{name:"Olive oil",qty:2,unit:"tbsp"},
            {name:"Minced lamb",qty:300,unit:"g"},{name:"Onion",qty:1,unit:""},
            {name:"Tomato",qty:2,unit:""},{name:"Green pepper",qty:1,unit:""},{name:"Garlic",qty:2,unit:"cloves"},
            {name:"Tomato paste",qty:1,unit:"tbsp"},{name:"Sweet paprika",qty:1,unit:"tsp"},{name:"Ground cumin",qty:0.5,unit:"tsp"}
          ],
          steps:[
            "Dissolve the yeast with sugar in warm water and let it rest 10 minutes until foamy.",
            "Mix the flour and salt, make a well and add the yeast mixture, the rest of the water and the oil.",
            "Knead until you get a soft, elastic dough; let it rest 1 hour until it doubles in size.",
            "Mix the meat with the onion, tomato, pepper, garlic, tomato paste and spices.",
            "Preheat the oven to its highest setting. Divide the dough into balls and roll them out thin in an oval shape.",
            "Cover each base with a thin layer of the meat filling.",
            "Bake for 8–12 minutes until the dough is crisp and the meat is fully cooked.",
            "Serve hot with lemon wedges."
          ]
        },
        hu:{
          name:"Pide Lahmacun",
          info:"Török lepénykenyér, ami a pizzához hasonlít, csónak alakú, és darált hússal, sajttal vagy tojással a tetején sütik.",
          ingredients:[
            {name:"Liszt",qty:500,unit:"g"},{name:"Só",qty:1,unit:"tk"},{name:"Cukor",qty:1,unit:"tk"},
            {name:"Szárított élesztő",qty:7,unit:"g"},{name:"Langyos víz",qty:300,unit:"ml"},{name:"Olívaolaj",qty:2,unit:"evőkanál"},
            {name:"Darált bárányhús",qty:300,unit:"g"},{name:"Hagyma",qty:1,unit:"db"},
            {name:"Paradicsom",qty:2,unit:"db"},{name:"Zöldpaprika",qty:1,unit:"db"},{name:"Fokhagyma",qty:2,unit:"gerezd"},
            {name:"Paradicsompüré",qty:1,unit:"evőkanál"},{name:"Édes pirospaprika",qty:1,unit:"tk"},{name:"Őrölt kömény",qty:0.5,unit:"tk"}
          ],
          steps:[
            "Oldjuk fel az élesztőt cukorral langyos vízben, és hagyjuk 10 percig pihenni, amíg habzani nem kezd.",
            "Keverjük össze a lisztet a sóval, csináljunk egy mélyedést, és adjuk hozzá az élesztős keveréket, a maradék vizet és az olajat.",
            "Gyúrjuk simára, rugalmasra; hagyjuk 1 órát kelni, amíg megduplázódik a mérete.",
            "Keverjük össze a húst a hagymával, paradicsommal, paprikával, fokhagymával, paradicsompürével és a fűszerekkel.",
            "Melegítsük elő a sütőt a legmagasabb fokozatra. Osszuk gombócokra a tésztát, és nyújtsuk ki vékonyra, ovális formára.",
            "Kenjünk vékony réteg húsos tölteléket minden alapra.",
            "Süssük 8–12 percig, amíg a tészta ropogós és a hús átsül.",
            "Melegen tálaljuk citromkarikákkal."
          ]
        }
      }
    },
    {
      mealTypes:["comida","cena"], country:"Argentina", healthy:false, temp:"caliente",
      prepTime:60, servings:14, image:"", emoji:"🥟", tags:["horno","fiesta","para compartir"],
      i18n:{
        es:{
          name:"Empanadas caseras",
          info:"La empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce y cocida al horno o frita. Plato tradicional de la mayoría de las cocinas latinoamericanas.",
          ingredients:[
            {name:"Harina de trigo",qty:500,unit:"g"},{name:"Sal",qty:1,unit:"cdta"},
            {name:"Manteca derretida",qty:100,unit:"g"},{name:"Agua tibia",qty:200,unit:"ml"},
            {name:"Vinagre o jugo de limón",qty:1,unit:"cdta"},{name:"Carne picada",qty:400,unit:"g"},
            {name:"Cebolla",qty:2,unit:"ud"},{name:"Huevo duro",qty:2,unit:"ud"},{name:"Aceituna verde",qty:12,unit:"ud"},
            {name:"Pimentón dulce",qty:1,unit:"cdta"},{name:"Comino",qty:0.5,unit:"cdta"}
          ],
          steps:[
            "Mezcla la harina con la sal, la manteca derretida, el agua y el vinagre hasta formar una masa lisa.",
            "Deja reposar la masa 30 minutos tapada.",
            "Rehoga la cebolla, añade la carne picada y las especias, cocina hasta dorar.",
            "Deja enfriar el relleno y añade el huevo duro picado y las aceitunas.",
            "Estira la masa y corta discos; rellena y cierra en repulgue.",
            "Hornea a 200°C 20-25 minutos o fríe hasta dorar."
          ]
        },
        en:{
          name:"Homemade empanadas",
          info:"An empanada is a thin pastry — shortcrust or puff dough — filled with a savoury or sweet preparation and baked or fried. A traditional dish across most Latin American cuisines.",
          ingredients:[
            {name:"Wheat flour",qty:500,unit:"g"},{name:"Salt",qty:1,unit:"tsp"},
            {name:"Melted lard",qty:100,unit:"g"},{name:"Warm water",qty:200,unit:"ml"},
            {name:"Vinegar or lemon juice",qty:1,unit:"tsp"},{name:"Minced meat",qty:400,unit:"g"},
            {name:"Onion",qty:2,unit:""},{name:"Hard-boiled egg",qty:2,unit:""},{name:"Green olives",qty:12,unit:""},
            {name:"Sweet paprika",qty:1,unit:"tsp"},{name:"Cumin",qty:0.5,unit:"tsp"}
          ],
          steps:[
            "Mix the flour with the salt, melted lard, water and vinegar until you get a smooth dough.",
            "Let the dough rest for 30 minutes, covered.",
            "Sauté the onion, add the minced meat and spices, and cook until browned.",
            "Let the filling cool and add the chopped hard-boiled egg and the olives.",
            "Roll out the dough and cut discs; fill and seal with a braided edge.",
            "Bake at 200°C (400°F) for 20–25 minutes, or fry until golden."
          ]
        },
        hu:{
          name:"Házi empanada",
          info:"Az empanada vékony tészta — omlós vagy leveles —, amelyet sós vagy édes töltelékkel töltenek meg, majd sütőben vagy olajban sütnek. Hagyományos étel a legtöbb latin-amerikai konyhában.",
          ingredients:[
            {name:"Búzaliszt",qty:500,unit:"g"},{name:"Só",qty:1,unit:"tk"},
            {name:"Olvasztott zsír",qty:100,unit:"g"},{name:"Langyos víz",qty:200,unit:"ml"},
            {name:"Ecet vagy citromlé",qty:1,unit:"tk"},{name:"Darált hús",qty:400,unit:"g"},
            {name:"Hagyma",qty:2,unit:"db"},{name:"Kemény tojás",qty:2,unit:"db"},{name:"Zöld olívabogyó",qty:12,unit:"db"},
            {name:"Édes pirospaprika",qty:1,unit:"tk"},{name:"Kömény",qty:0.5,unit:"tk"}
          ],
          steps:[
            "Keverjük össze a lisztet a sóval, az olvasztott zsírral, a vízzel és az ecettel, amíg sima tésztát nem kapunk.",
            "Hagyjuk pihenni a tésztát 30 percig, letakarva.",
            "Pirítsuk meg a hagymát, adjuk hozzá a darált húst és a fűszereket, és süssük, amíg megpirul.",
            "Hagyjuk kihűlni a tölteléket, majd adjuk hozzá az apróra vágott tojást és az olívabogyót.",
            "Nyújtsuk ki a tésztát, vágjunk ki korongokat, töltsük meg és zárjuk le fonott szegéllyel.",
            "Süssük 200°C-on 20–25 percig, vagy süssük ki olajban aranybarnára."
          ]
        }
      }
    }
];

const state = {
  lang:"es",
  recipes:[],
  mealImages:{},
  currentMeal:null, currentTab:"todos", chipFilter:null, search:"",
  activeRecipeId:null, editingId:null,
  ingredientDraft:[], stepDraft:[], tagDraft:[],
  contentDraft:{}, formContentLang:"es"
};

function t(key){ return (STRINGS[state.lang] && STRINGS[state.lang][key]) || key; }
/* Returns {lang, data} — the recipe's content in the requested language, falling back to
   whichever language actually has text if the current one is still empty. */
function getContent(r, lang){
  lang = lang || state.lang;
  const order = [lang, ...CONTENT_LANGS.filter(l=>l!==lang)];
  for(const l of order){
    if(r.i18n[l] && r.i18n[l].name && r.i18n[l].name.trim()!==""){
      return {lang:l, data:r.i18n[l]};
    }
  }
  return {lang:null, data:emptyContent()};
}

/* ================= SUPABASE (shared cloud database, open access — no login) =================
   1) Create a free project at supabase.com
   2) Run the setup SQL (see the guide) to create the `recipes` and `app_settings` tables,
      with policies open to everyone (no login/account needed on either side).
   3) Paste your Project URL and anon public key below — Settings → API in your Supabase project.
      The anon key is meant to be public/embedded in client code; never paste the "service_role" key here. */
const SUPABASE_URL = "PEGA_AQUI_TU_SUPABASE_URL";
const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_SUPABASE_ANON_KEY";
const supabaseClient = (typeof window.supabase !== "undefined" && SUPABASE_URL.indexOf("http") === 0)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

function saveLangPreference(){ try{ localStorage.setItem("recetario_lang", state.lang); }catch(err){} }
function loadLangPreference(){ try{ return localStorage.getItem("recetario_lang"); }catch(err){ return null; } }

/* ---- Cloud data (shared cookbook: everyone who opens the site reads/writes the same tables, no login) ---- */
function rowToRecipe(row){
  return {
    id: row.id,
    mealTypes: row.meal_types || [],
    country: row.country || "",
    healthy: !!row.healthy,
    temp: row.temp || "",
    prepTime: row.prep_time,
    servings: row.servings || 4,
    image: row.image || "",
    emoji: row.emoji || "🍽️",
    i18n: row.i18n || {},
    tags: row.tags || []
  };
}
function recipeToRow(r){
  return {
    meal_types: r.mealTypes, country: r.country, healthy: r.healthy, temp: r.temp,
    prep_time: r.prepTime, servings: r.servings, image: r.image, emoji: r.emoji, i18n: r.i18n,
    tags: r.tags || []
  };
}
async function seedStarterRecipes(){
  const { error } = await supabaseClient.from("recipes").insert(STARTER_RECIPES.map(recipeToRow));
  if(error) console.error("No se pudieron crear las recetas de ejemplo:", error);
}
async function loadCloudData(){
  try{
    const { data: recipeRows, error: recErr } = await supabaseClient.from("recipes").select("*").order("id");
    if(recErr) throw recErr;
    if(recipeRows.length === 0){
      await seedStarterRecipes();
      return loadCloudData();
    }
    state.recipes = recipeRows.map(rowToRecipe);

    const { data: settingsRow, error: setErr } = await supabaseClient.from("app_settings").select("*").eq("id","shared").maybeSingle();
    if(setErr) throw setErr;
    state.mealImages = (settingsRow && settingsRow.meal_images) || {};
  }catch(err){
    console.error("Error cargando datos de la nube:", err);
    alert(t("cloudLoadError"));
  }
}
/* Downscale + re-encode an uploaded photo before turning it into a data URL, so a phone photo
   of a few MB becomes a compact image before it's stored in the database. */
function compressImage(file, maxDim, quality){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = (e)=>{
      const img = new Image();
      img.onload = ()=>{
        let w = img.width, h = img.height;
        if(w > maxDim || h > maxDim){
          if(w > h){ h = Math.round(h * maxDim / w); w = maxDim; }
          else { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ================= NAVIGATION ================= */
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("backBtn").style.display = (id==="screen-home") ? "none" : "flex";
  window.scrollTo(0,0);
}
function goHome(){
  state.currentMeal=null; state.activeRecipeId=null; state.editingId=null;
  renderHome(); showScreen("screen-home");
}
function openMeal(meal){
  state.currentMeal=meal; state.currentTab="todos"; state.chipFilter=null; state.search="";
  renderList(); showScreen("screen-list");
}
function openRecipe(id){
  state.activeRecipeId=id; renderDetail(id); showScreen("screen-detail");
}
function openForm(editId){
  state.editingId = editId || null;
  renderForm(editId); showScreen("screen-form");
}

/* ================= LANGUAGE ================= */
function setLang(l){
  state.lang=l;
  document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.toggle("active", b.dataset.lang===l));
  saveLangPreference();
  applyStaticI18n();
  const active = document.querySelector(".screen.active").id;
  if(active==="screen-home") renderHome();
  else if(active==="screen-list") renderList();
  else if(active==="screen-detail") renderDetail(state.activeRecipeId);
  else if(active==="screen-form") refreshFormI18n();
}
/* Re-translate the create/edit form in place, without wiping whatever the user has already typed. */
function refreshFormI18n(){
  document.getElementById("formTitle").textContent = state.editingId ? t("edit") : t("createRecipe");
  document.querySelectorAll(".mt-label").forEach(span=>{
    span.textContent = t("meal_"+span.dataset.meal);
  });
  renderIngredientRows();
  renderStepRows();
}
function applyStaticI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(STRINGS[state.lang][key]!==undefined) el.textContent = STRINGS[state.lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(STRINGS[state.lang][key]!==undefined) el.placeholder = STRINGS[state.lang][key];
  });
  document.getElementById("searchInput").placeholder = t("searchPh");
}

/* ================= HOME ================= */
function renderHome(){
  const grid = document.getElementById("mealGrid");
  grid.innerHTML="";
  MEAL_TYPES.concat(["todos"]).forEach(m=>{
    const count = m==="todos" ? state.recipes.length : state.recipes.filter(r=>r.mealTypes.includes(m)).length;
    const div = document.createElement("div");
    div.className = "meal-card" + (m==="todos"?" all":"");
    div.onclick = ()=>openMeal(m);
    const visual = state.mealImages[m]
      ? `<img class="meal-card-img" src="${state.mealImages[m]}">`
      : `<div class="emoji">${MEAL_EMOJI[m]}</div>`;
    div.innerHTML = `<button type="button" class="meal-edit-btn" title="${t('changeImage')}" onclick="event.stopPropagation(); openMealImagePicker('${m}')">✏️</button>${visual}<div class="label">${t("meal_"+m)}</div><div class="count">${count} ${t("recipesCount")}</div>`;
    grid.appendChild(div);
  });
  applyStaticI18n();
}
function openMealImagePicker(m){
  window._mealImageEditKey = m;
  document.getElementById("mealImageInput").click();
}
async function onMealImageSelect(e){
  const file = e.target.files[0];
  const key = window._mealImageEditKey;
  e.target.value = "";
  if(!file || !key) return;
  try{
    state.mealImages[key] = await compressImage(file, 300, 0.8);
    renderHome();
    const { error } = await supabaseClient.from("app_settings")
      .upsert({ id: "shared", meal_images: state.mealImages, updated_at: new Date().toISOString() }, { onConflict: "id" });
    if(error) throw error;
  }catch(err){
    console.error("No se pudo guardar la imagen en la nube:", err);
    alert(t("cloudSaveError"));
  }
}

/* ================= LIST ================= */
const TABS = ["todos","country","healthy","temp","time"];
function renderList(){
  document.getElementById("listTitle").textContent = state.currentMeal ? t("meal_"+state.currentMeal) : t("meal_todos");
  document.getElementById("listSub").textContent = t("whatToEat");
  document.getElementById("searchInput").value = state.search;

  const tabsRow = document.getElementById("tabsRow");
  tabsRow.innerHTML="";
  const tabDefs = [["todos","tab_all"],["country","tab_country"],["healthy","tab_healthy"],["temp","tab_temp"],["time","tab_time"]];
  tabDefs.forEach(([key,label])=>{
    const btn = document.createElement("button");
    btn.className = "tab" + (state.currentTab===key?" active":"");
    btn.textContent = t(label);
    btn.onclick = ()=>{ state.currentTab=key; state.chipFilter=null; renderList(); };
    tabsRow.appendChild(btn);
  });

  renderChips();
  renderRecipeGrid();
}
function baseFiltered(){
  return state.recipes.filter(r=> !state.currentMeal || state.currentMeal==="todos" || r.mealTypes.includes(state.currentMeal));
}
function renderChips(){
  const chipRow = document.getElementById("chipRow");
  chipRow.innerHTML="";
  const pool = baseFiltered();
  let options = [];
  if(state.currentTab==="country"){
    options = [...new Set(pool.map(r=>r.country).filter(Boolean))];
  } else if(state.currentTab==="healthy"){
    options = ["healthy"];
  } else if(state.currentTab==="temp"){
    options = ["frio","caliente"];
  } else if(state.currentTab==="time"){
    options = ["fast","med","slow","veryslow"];
  }
  if(!options.length){ chipRow.style.display="none"; return; }
  chipRow.style.display="flex";
  options.forEach(opt=>{
    const chip = document.createElement("button");
    chip.className = "chip" + (state.chipFilter===opt?" active":"");
    let label = opt;
    if(state.currentTab==="healthy") label = t("tab_healthy");
    else if(state.currentTab==="temp") label = t(opt==="frio"?"cold":"hot");
    else if(state.currentTab==="time") label = t(opt==="fast"?"fastMin":opt==="med"?"medMin":opt==="slow"?"slowMin":"verySlowMin");
    chip.textContent = label;
    chip.onclick = ()=>{ state.chipFilter = state.chipFilter===opt ? null : opt; renderRecipeGrid(); renderChips(); };
    chipRow.appendChild(chip);
  });
}
function timeBucket(min){
  if(min==null) return null;
  if(min<15) return "fast";
  if(min<=30) return "med";
  if(min<=60) return "slow";
  return "veryslow";
}
function matchesFilters(r){
  if(state.search){
    const q = state.search.toLowerCase();
    const name = (getContent(r).data.name || "").toLowerCase();
    const tags = (r.tags||[]).join(" ").toLowerCase();
    if(!name.includes(q) && !tags.includes(q)) return false;
  }
  if(state.currentTab==="country" && state.chipFilter && r.country!==state.chipFilter) return false;
  if(state.currentTab==="healthy" && state.chipFilter && !r.healthy) return false;
  if(state.currentTab==="temp" && state.chipFilter && r.temp!==state.chipFilter) return false;
  if(state.currentTab==="time" && state.chipFilter && timeBucket(r.prepTime)!==state.chipFilter) return false;
  return true;
}
function renderRecipeGrid(){
  const grid = document.getElementById("recipeGrid");
  const list = baseFiltered().filter(matchesFilters);
  grid.innerHTML="";
  if(!list.length){
    grid.style.display="none";
    let empty = document.getElementById("emptyState");
    if(!empty){
      empty = document.createElement("div");
      empty.id="emptyState"; empty.className="empty-state";
      grid.parentElement.appendChild(empty);
    }
    empty.style.display="block";
    empty.innerHTML = `<div class="big">🍽️</div><div>${t("noResults")}</div>`;
    return;
  } else {
    const empty = document.getElementById("emptyState");
    if(empty) empty.style.display="none";
    grid.style.display="grid";
  }
  list.forEach(r=>{
    const c = getContent(r).data;
    const card = document.createElement("div");
    card.className="recipe-card";
    card.onclick=()=>openRecipe(r.id);
    const thumb = r.image ? `<img class="thumb" src="${r.image}">` : `<div class="thumb">${r.emoji||"🍽️"}</div>`;
    let badges = "";
    if(r.country) badges += `<span class="badge">${r.country}</span>`;
    if(r.healthy) badges += `<span class="badge healthy">${t("tab_healthy")}</span>`;
    if(r.temp) badges += `<span class="badge ${r.temp==="frio"?"cold":"hot"}">${t(r.temp==="frio"?"cold":"hot")}</span>`;
    if(r.prepTime) badges += `<span class="badge">${r.prepTime} ${t("min")}</span>`;
    (r.tags||[]).slice(0,3).forEach(tag=>{ badges += `<span class="badge tag">${tag}</span>`; });
    if((r.tags||[]).length>3) badges += `<span class="badge tag">+${r.tags.length-3}</span>`;
    card.innerHTML = `${thumb}<div class="body"><h3>${c.name||"—"}</h3><div class="recipe-meta">${badges}</div></div>`;
    grid.appendChild(card);
  });
}
function onSearch(v){ state.search=v; renderRecipeGrid(); }

/* ================= DETAIL ================= */
function renderDetail(id){
  const r = state.recipes.find(x=>x.id===id);
  if(!r) return;
  if(!r._scale) r._scale = r.servings;
  const {lang:contentLang, data:c} = getContent(r);
  const wrap = document.getElementById("detailWrap");
  const banner = r.image ? `<img class="detail-banner" src="${r.image}">` : `<div class="detail-banner">${r.emoji||"🍽️"}</div>`;
  let badges = "";
  if(r.country) badges += `<span class="badge">${r.country}</span>`;
  if(r.healthy) badges += `<span class="badge healthy">${t("tab_healthy")}</span>`;
  if(r.temp) badges += `<span class="badge ${r.temp==="frio"?"cold":"hot"}">${t(r.temp==="frio"?"cold":"hot")}</span>`;
  if(r.prepTime) badges += `<span class="badge">⏱ ${r.prepTime} ${t("min")}</span>`;
  (r.tags||[]).forEach(tag=>{ badges += `<span class="badge tag">${tag}</span>`; });

  const factor = r._scale / (r.servings||1);
  const ingRows = c.ingredients.map((ing,i)=>{
    const qty = (typeof ing.qty==="number" && !isNaN(ing.qty)) ? roundNice(ing.qty*factor) : ing.qty;
    return `<tr class="ingredient-row" id="ingrow-${i}">
      <td><label class="ing-check"><input type="checkbox" onchange="toggleIngredient(${i})"><span>${ing.name}</span></label></td>
      <td>${qty!==undefined && qty!=="" ? qty : ""}</td>
      <td>${ing.unit||""}</td>
    </tr>`;
  }).join("");

  const stepRows = c.steps.map(s=>`<li>${s}</li>`).join("");
  const fallbackNote = (contentLang && contentLang!==state.lang)
    ? `<div class="lang-fallback-note">${t("fallbackNotice").replace("{lang}", t("langName_"+contentLang))}</div>` : "";

  wrap.innerHTML = `
    ${banner}
    <div class="detail-head">
      <div>
        <h1 class="detail-title">${c.name || "—"}</h1>
        <div class="detail-meta">${badges}</div>
        ${fallbackNote}
      </div>
      <div class="detail-actions">
        <button class="icon-btn" onclick="openForm(${r.id})">✏️ ${t("edit")}</button>
        <button class="icon-btn danger" onclick="deleteRecipe(${r.id})">🗑 ${t("delete")}</button>
        <button class="icon-btn primary" onclick="downloadSingleRecipe(${r.id})">⬇️ ${t("downloadRecipe")}</button>
      </div>
    </div>
    ${c.info ? `<p class="detail-desc">${c.info}</p>` : ""}
    <div class="servings-box">
      <button onclick="changeServings(${r.id},-1)">−</button>
      <div><div class="num">${r._scale}</div><div style="font-size:11px;color:var(--gray);text-align:center;">${t("servings")}</div></div>
      <button onclick="changeServings(${r.id},1)">+</button>
    </div>
    <div class="detail-columns">
      <div class="detail-section">
        <h2>${t("ingredients")}</h2>
        <table class="ingredient-table"><thead><tr><th>${t("ing_name")}</th><th>${t("ing_qty")}</th><th>${t("ing_unit")}</th></tr></thead>
        <tbody>${ingRows}</tbody></table>
      </div>
      <div class="detail-section">
        <h2>${t("method")}</h2>
        <ol class="steps-list">${stepRows}</ol>
      </div>
    </div>
  `;
}
function roundNice(n){
  const r = Math.round(n*100)/100;
  return r;
}
function changeServings(id,delta){
  const r = state.recipes.find(x=>x.id===id);
  if(!r) return;
  r._scale = Math.max(1,(r._scale||r.servings)+delta);
  renderDetail(id);
}
function toggleIngredient(i){
  document.getElementById("ingrow-"+i).classList.toggle("checked");
}
async function deleteRecipe(id){
  try{
    const { error } = await supabaseClient.from("recipes").delete().eq("id", id);
    if(error) throw error;
    state.recipes = state.recipes.filter(r=>r.id!==id);
    goHome();
  }catch(err){
    console.error("No se pudo eliminar la receta:", err);
    alert(t("cloudSaveError"));
  }
}

/* ================= FORM ================= */
function renderForm(editId){
  const mtWrap = document.getElementById("f_mealTypes");
  mtWrap.innerHTML = MEAL_TYPES.map(m=>`
    <label class="checkbox-pill"><input type="checkbox" value="${m}" class="mt-check"> <span class="mt-label" data-meal="${m}">${t("meal_"+m)}</span></label>
  `).join("");

  let recipe = null;
  if(editId){ recipe = state.recipes.find(r=>r.id===editId); }

  document.getElementById("f_country").value = recipe? recipe.country : "";
  document.getElementById("f_temp").value = recipe? (recipe.temp||"") : "";
  document.getElementById("f_time").value = recipe? (recipe.prepTime||"") : "";
  document.getElementById("f_servings").value = recipe? recipe.servings : 4;
  document.getElementById("f_healthy").checked = recipe? !!recipe.healthy : false;
  state.tagDraft = (recipe && recipe.tags) ? recipe.tags.slice() : [];
  renderTagChips();
  document.getElementById("f_tagInput").value = "";
  const img = document.getElementById("imagePreview");
  if(recipe && recipe.image){ img.src=recipe.image; img.style.display="block"; document.getElementById("imageHint").style.display="none"; window._formImage = recipe.image; }
  else { img.style.display="none"; document.getElementById("imageHint").style.display="block"; window._formImage = ""; }

  document.querySelectorAll(".mt-check").forEach(cb=>{
    cb.checked = recipe ? recipe.mealTypes.includes(cb.value) : false;
  });

  // Content (name/info/ingredients/steps) is kept separately per language.
  state.contentDraft = {};
  CONTENT_LANGS.forEach(l=>{
    const src = recipe && recipe.i18n && recipe.i18n[l];
    state.contentDraft[l] = src ? JSON.parse(JSON.stringify(src)) : emptyContent();
  });
  state.formContentLang = state.lang;
  loadContentTab(state.formContentLang);
  renderFormLangTabs();

  document.getElementById("formTitle").textContent = editId ? t("edit") : t("createRecipe");
  applyStaticI18n();
}
function renderFormLangTabs(){
  const wrap = document.getElementById("formLangTabs");
  if(!wrap) return;
  wrap.innerHTML = CONTENT_LANGS.map(l=>{
    const has = state.contentDraft[l] && state.contentDraft[l].name && state.contentDraft[l].name.trim()!=="";
    return `<button type="button" class="lang-tab-btn${state.formContentLang===l?" active":""}" onclick="switchContentLang('${l}')">${l.toUpperCase()}${has?" ✓":""}</button>`;
  }).join("");
}
function switchContentLang(l){
  commitContentTab();
  state.formContentLang = l;
  loadContentTab(l);
  renderFormLangTabs();
}
function commitContentTab(){
  const l = state.formContentLang;
  state.contentDraft[l] = {
    name: document.getElementById("f_name").value,
    info: document.getElementById("f_info").value,
    ingredients: JSON.parse(JSON.stringify(state.ingredientDraft)),
    steps: [...state.stepDraft]
  };
}
function loadContentTab(l){
  const c = state.contentDraft[l] || emptyContent();
  document.getElementById("f_name").value = c.name || "";
  document.getElementById("f_info").value = c.info || "";
  state.ingredientDraft = (c.ingredients && c.ingredients.length) ? JSON.parse(JSON.stringify(c.ingredients)) : [{name:"",qty:"",unit:""}];
  state.stepDraft = (c.steps && c.steps.length) ? [...c.steps] : [""];
  renderIngredientRows();
  renderStepRows();
}
function renderIngredientRows(){
  const wrap = document.getElementById("ingredientRows");
  wrap.innerHTML = state.ingredientDraft.map((ing,i)=>`
    <div class="dynamic-row">
      <input type="text" placeholder="${t('ing_name')}" value="${ing.name||''}" oninput="state.ingredientDraft[${i}].name=this.value">
      <input type="number" placeholder="${t('ing_qty')}" value="${ing.qty!==undefined?ing.qty:''}" oninput="state.ingredientDraft[${i}].qty=this.value===''?'':parseFloat(this.value)">
      <input type="text" placeholder="${t('ing_unit')}" value="${ing.unit||''}" oninput="state.ingredientDraft[${i}].unit=this.value">
      <button type="button" class="remove-row-btn" onclick="removeIngredientRow(${i})">✕</button>
    </div>
  `).join("");
}
function addIngredientRow(){ state.ingredientDraft.push({name:"",qty:"",unit:""}); renderIngredientRows(); }
function removeIngredientRow(i){ state.ingredientDraft.splice(i,1); if(!state.ingredientDraft.length) state.ingredientDraft.push({name:"",qty:"",unit:""}); renderIngredientRows(); }

function renderStepRows(){
  const wrap = document.getElementById("stepRows");
  wrap.innerHTML = state.stepDraft.map((s,i)=>`
    <div class="step-row">
      <div class="step-num">${i+1}</div>
      <textarea oninput="state.stepDraft[${i}]=this.value">${s||''}</textarea>
      <button type="button" class="remove-row-btn" onclick="removeStepRow(${i})">✕</button>
    </div>
  `).join("");
}
function addStepRow(){ state.stepDraft.push(""); renderStepRows(); }
function removeStepRow(i){ state.stepDraft.splice(i,1); if(!state.stepDraft.length) state.stepDraft.push(""); renderStepRows(); }

/* ---- Tags / "características": free-form keywords, shared across languages, searchable ---- */
function addTag(){
  const input = document.getElementById("f_tagInput");
  const val = (input.value||"").trim();
  if(!val) return;
  const norm = val.toLowerCase();
  if(!state.tagDraft.some(tg=>tg.toLowerCase()===norm)) state.tagDraft.push(val);
  input.value = "";
  renderTagChips();
  input.focus();
}
function removeTag(i){ state.tagDraft.splice(i,1); renderTagChips(); }
function renderTagChips(){
  const wrap = document.getElementById("tagChips");
  wrap.innerHTML = "";
  state.tagDraft.forEach((tag,i)=>{
    const chip = document.createElement("span");
    chip.className = "tag-chip";
    const label = document.createElement("span");
    label.textContent = tag;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "✕";
    btn.onclick = ()=>removeTag(i);
    chip.appendChild(label);
    chip.appendChild(btn);
    wrap.appendChild(chip);
  });
}

async function onImageSelect(e){
  const file = e.target.files[0];
  if(!file) return;
  try{
    const dataUrl = await compressImage(file, 1000, 0.78);
    window._formImage = dataUrl;
    const img = document.getElementById("imagePreview");
    img.src = dataUrl; img.style.display="block";
    document.getElementById("imageHint").style.display="none";
  }catch(err){
    console.warn("No se pudo procesar la imagen:", err);
  }
}

async function saveRecipe(e){
  e.preventDefault();
  commitContentTab();
  const i18nData = {};
  let hasAnyName = false;
  CONTENT_LANGS.forEach(l=>{
    const c = state.contentDraft[l] || emptyContent();
    const name = (c.name||"").trim();
    if(name) hasAnyName = true;
    i18nData[l] = {
      name: name,
      info: (c.info||"").trim(),
      ingredients: (c.ingredients||[]).filter(i=>i.name && i.name.trim()!==""),
      steps: (c.steps||[]).filter(s=>s && s.trim()!=="")
    };
  });
  if(!hasAnyName){
    alert(t("nameRequiredAlert"));
    return false;
  }
  addTag(); // pick up any characteristic typed but not yet confirmed with Enter/Añadir
  const mealTypes = [...document.querySelectorAll(".mt-check:checked")].map(cb=>cb.value);
  const data = {
    mealTypes: mealTypes.length?mealTypes:["comida"],
    country: document.getElementById("f_country").value.trim(),
    temp: document.getElementById("f_temp").value,
    prepTime: parseInt(document.getElementById("f_time").value)||null,
    servings: parseInt(document.getElementById("f_servings").value)||1,
    healthy: document.getElementById("f_healthy").checked,
    image: window._formImage || "",
    emoji: "🍽️",
    i18n: i18nData,
    tags: state.tagDraft.slice()
  };
  const saveBtn = document.querySelector("#recipeForm .save-btn");
  if(saveBtn) saveBtn.disabled = true;
  try{
    if(state.editingId){
      const { data: updated, error } = await supabaseClient.from("recipes")
        .update(recipeToRow(data)).eq("id", state.editingId).select().single();
      if(error) throw error;
      const idx = state.recipes.findIndex(r=>r.id===state.editingId);
      state.recipes[idx] = rowToRecipe(updated);
      openRecipe(state.editingId);
    } else {
      const { data: inserted, error } = await supabaseClient.from("recipes")
        .insert(recipeToRow(data)).select().single();
      if(error) throw error;
      const newRecipe = rowToRecipe(inserted);
      state.recipes.push(newRecipe);
      openRecipe(newRecipe.id);
    }
  }catch(err){
    console.error("No se pudo guardar la receta:", err);
    alert(t("cloudSaveError"));
  }finally{
    if(saveBtn) saveBtn.disabled = false;
  }
  return false;
}

/* ================= DOWNLOAD MODAL ================= */
let downloadContext = null;
function openDownloadModal(meal){
  downloadContext = { presetMeal: meal };
  const scopeWrap = document.getElementById("scopeOptions");
  const scopes = [["all","scope_all"],["meal","scope_meal"],["country","scope_country"],["healthy","scope_healthy"],["temp","scope_temp"],["time","scope_time"]];
  scopeWrap.innerHTML = scopes.map(([val,label],i)=>`
    <label class="radio-opt"><input type="radio" name="scopeOpt" value="${val}" ${i===0?"checked":""} onchange="onScopeChange()"> ${t(label)}</label>
  `).join("");
  document.getElementById("valueOptionsWrap").style.display="none";
  document.getElementById("downloadModal").classList.add("active");
}
function closeModal(){ document.getElementById("downloadModal").classList.remove("active"); }
function onScopeChange(){
  const scope = document.querySelector('input[name="scopeOpt"]:checked').value;
  const sel = document.getElementById("scopeValueSelect");
  const wrap = document.getElementById("valueOptionsWrap");
  let options = [];
  if(scope==="meal") options = MEAL_TYPES.map(m=>[m,t("meal_"+m)]);
  else if(scope==="country") options = [...new Set(state.recipes.map(r=>r.country).filter(Boolean))].map(c=>[c,c]);
  else if(scope==="temp") options = [["frio",t("cold")],["caliente",t("hot")]];
  else if(scope==="time") options = [["fast",t("fastMin")],["med",t("medMin")],["slow",t("slowMin")],["veryslow",t("verySlowMin")]];
  if(scope==="all" || scope==="healthy"){ wrap.style.display="none"; return; }
  wrap.style.display="block";
  sel.innerHTML = options.map(([v,l])=>`<option value="${v}">${l}</option>`).join("");
}
function generateDownload(){
  const scope = document.querySelector('input[name="scopeOpt"]:checked').value;
  const val = document.getElementById("scopeValueSelect").value;
  let list = state.recipes;
  if(scope==="meal") list = list.filter(r=>r.mealTypes.includes(val));
  else if(scope==="country") list = list.filter(r=>r.country===val);
  else if(scope==="healthy") list = list.filter(r=>r.healthy);
  else if(scope==="temp") list = list.filter(r=>r.temp===val);
  else if(scope==="time") list = list.filter(r=>timeBucket(r.prepTime)===val);
  closeModal();
  buildPrintArea(list, t("bookTitle"));
  setTimeout(()=>window.print(), 200);
}
function downloadSingleRecipe(id){
  const r = state.recipes.find(x=>x.id===id);
  if(!r) return;
  const c = getContent(r).data;
  buildPrintArea([r], c.name, true);
  setTimeout(()=>window.print(), 200);
}
function buildPrintArea(list, title, skipCover){
  const area = document.getElementById("print-area");
  let html = "";
  if(!skipCover){
    html += `<div class="p-page p-cover"><div class="p-kicker">${t("bookTitle")}</div><h1>${title}</h1></div>`;
  }
  list.forEach(r=>{
    const c = getContent(r).data;
    const servesRow = `<table class="p-serves"><tr><th colspan="2">${t("servings")}</th></tr><tr><td colspan="2">${r.servings} ${t("people")}</td></tr></table>`;
    const ingRows = c.ingredients.map(i=>`<tr><td>${i.name}</td><td>${i.qty!==undefined?i.qty:""} ${i.unit||""}</td></tr>`).join("");
    const img = r.image ? `<img src="${r.image}">` : "";
    html += `<div class="p-page p-recipe">
      <h2>${c.name||""}</h2>
      <div class="p-flex">
        <div class="p-col-left">
          <p class="p-desc">${c.info||""}</p>
          ${(r.tags&&r.tags.length) ? `<p class="p-tags">${r.tags.join(" · ")}</p>` : ""}
          ${servesRow}
          <table class="p-table"><thead><tr><th>${t("ing_name")}</th><th>${t("ing_qty")}</th></tr></thead><tbody>${ingRows}</tbody></table>
        </div>
        <div class="p-col-right">${img}</div>
      </div>
      <ol class="p-steps">${c.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    </div>`;
  });
  area.innerHTML = html;
}

/* ================= INIT ================= */
state.lang = loadLangPreference() || "es";
document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.toggle("active", b.dataset.lang===state.lang));
applyStaticI18n();
goHome();
if(supabaseClient){
  loadCloudData().then(()=>{ renderHome(); });
} else {
  const statusEl = document.getElementById("cloudStatus");
  statusEl.textContent = t("authNotConfigured");
  statusEl.style.display = "inline-block";
}
