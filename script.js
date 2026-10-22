// --- BASE DE DATOS DE RECETAS (1 - 55) CON PREPARACIONES COMPLETAS ---
const recetas = [
    // --- COMIDAS PERUANAS (1 - 20) ---
    {
        id: 1,
        nombre: "Lomo saltado",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/e7mpy4.png",
        ingredientes: ["500 g de carne de res", "1 cebolla roja", "2 tomates", "2 papas grandes", "2 cdas. de sillao", "1 cda. de vinagre", "aceite", "sal", "pimienta", "arroz blanco", "culantro"],
        pasos: [
            "Pela y corta las papas en bastones y fríelas en abundante aceite caliente hasta que estén doradas y crujientes. Escurre sobre papel absorbente.",
            "Corta la carne en tiras gruesas y sazónala con sal, pimienta y un toque de comino.",
            "Corta la cebolla y los tomates en gajos o plumas gruesas, retirando las semillas del tomate.",
            "Calienta un wok o sartén grande a fuego muy alto con un chorro de aceite hasta que empiece a humear.",
            "Agrega la carne y saltéala rápidamente a fuego alto hasta que esté dorada por fuera pero jugosa por dentro.",
            "Incorpora la cebolla y saltea durante un minuto. Agrega el tomate, el sillao y el vinagre, mezclando todo a fuego vivo.",
            "Añade las papas fritas y un poco de culantro picado fresco. Mezcla rápidamente unos segundos.",
            "Sirve de inmediato acompañado de una porción de arroz blanco bien caliente."
        ]
    },
    {
        id: 2,
        nombre: "Ají de gallina",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/rtnjg0.png",
        ingredientes: ["1 pechuga de pollo", "3 ajíes amarillos", "2 panes o 6 galletas de soda", "½ taza de leche evaporada", "1 cebolla", "2 dientes de ajo", "50 g de queso parmesano", "30 g de pecanas", "aceite", "sal"],
        pasos: [
            "Sancocha la pechuga de pollo en una olla con agua, sal y verduras al gusto. Retírala, deja enfriar y deshiláchala finamente.",
            "Remoja el pan o las galletas de soda en la leche evaporada y un poco del caldo de pollo. Licúa hasta obtener una crema suave.",
            "Limpia los ajíes amarillos retirando venas y semillas. Sancóchalos 5 minutos y licúalos con un poco de aceite.",
            "En una olla, prepara un aderezo sofríendo la cebolla picada en cuadritos finos y el ajo molido hasta que transparente.",
            "Agrega la pasta de ají amarillo sofríela por un par de minutos hasta que suelte aroma.",
            "Incorpora la mezcla de pan licuado y cocina a fuego bajo removiendo constantemente.",
            "Agrega el pollo deshilachado y un poco más de caldo si la mezcla está muy espesa.",
            "Añade el queso parmesano rallado y las pecanas picadas. Mezcla bien hasta lograr una consistencia cremosa y suave.",
            "Sirve caliente sobre rodajas de papa sancochada, acompañado de arroz blanco, huevo duro y aceituna negra."
        ]
    },
    {
        id: 3,
        nombre: "Arroz con pollo",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/gky92y.png",
        ingredientes: ["4 presas de pollo", "2 tazas de arroz", "1 taza de culantro licuado", "1 cebolla", "2 dientes de ajo", "1 ají amarillo", "arvejas", "zanahoria", "caldo de pollo"],
        pasos: [
            "Sazona las presas de pollo con sal y pimienta. Doralas en una olla con aceite caliente y retíralas.",
            "En la misma olla, sofríe la cebolla picada finamente, el ajo y el ají amarillo licuado.",
            "Agrega el culantro licuado y cocina el aderezo durante 5 a 8 minutos a fuego medio.",
            "Suma el arroz previamente lavado, las arvejas y la zanahoria picada en cubitos.",
            "Vierte el caldo de pollo caliente (en proporción igual al arroz) y coloca las presas de pollo reservadas.",
            "Tapa la olla, reduce el fuego al mínimo cuando empiece a hervir y cocina durante 20 minutos hasta que el arroz esté graneado y el pollo tierno.",
            "Sirve caliente con una buena porción de salsa criolla."
        ]
    },
    {
        id: 4,
        nombre: "Ceviche",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/k7k55c.png",
        ingredientes: ["500 g de pescado fresco", "8 limones", "1 cebolla roja", "1 ají limo", "culantro fresco", "sal", "camote sancochado", "choclo sancochado"],
        pasos: [
            "Corta el pescado fresco en cubos de 2 cm y colócalos en un tazón de vidrio o metal previamente enfriado.",
            "Añade sal fina y mezcla suavemente para que la carne absorba el sabor.",
            "Pica el ají limo y el culantro finamente y agrégalos al tazón.",
            "Exprime el jugo de los limones justo en el momento, sin presionar demasiado la cáscara para evitar el amargor.",
            "Agrega la cebolla corta en pluma fina y mezcla todo suavemente durante un minuto.",
            "Sirve de inmediato acompañado de rodajas de camote sancochado, choclo desgranado y cancha serrana."
        ]
    },
    {
        id: 5,
        nombre: "Causa limeña",
        categoria: "Comidas Peruanas",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/vsmikj.png",
        ingredientes: ["1 kg de papa amarilla", "3 ajíes amarillos licuados", "limón", "aceite", "sal", "palta", "pollo deshilachado con mayonesa"],
        pasos: [
            "Sancocha las papas amarillas en agua con sal hasta que estén bien suaves.",
            "Pélalas y prénsalas inmediatamente mientras continúen calientes hasta obtener una masa homogénea.",
            "Deja enfriar la papa y sazónala con la pasta de ají amarillo, jugo de limón, un chorro de aceite y sal al gusto. Amasa hasta integrar.",
            "Mezcla el pollo sancochado y deshilachado con mayonesa, sal y pimienta.",
            "En un molde o pyrex, coloca una primera capa de masa de papa.",
            "Añade una capa de láminas de palta y encima el pollo preparado.",
            "Cubre con otra capa de masa de papa, prensa suavemente y decora con huevo duro sancochado y aceitunas."
        ]
    },
    {
        id: 6,
        nombre: "Papa a la huancaína",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/63519f.png",
        ingredientes: ["papas sancochadas", "200 g queso fresco", "2 ajíes amarillos", "leche evaporada", "4 galletas de soda", "aceite", "sal"],
        pasos: [
            "Retira las venas y semillas a los ajíes amarillos. Saltea los trozos en una sartén con un poco de aceite por unos minutos.",
            "Coloca en la licuadora el queso fresco en trozos, los ajíes salteados, las galletas de soda, un chorrito de aceite y la leche evaporada.",
            "Licúa todo a velocidad media ajustando la cantidad de leche hasta conseguir una textura cremosa, brillante y espesa.",
            "Sazona con sal al gusto y licúa unos segundos más.",
            "Corta las papas sancochadas en rodajas y acomódalas sobre hojas de lechuga lavadas.",
            "Cubre generosamente las papas con la salsa huancaína y decora con rodajas de huevo duro y aceituna negra."
        ]
    },
    {
        id: 7,
        nombre: "Anticuchos",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/bgebmf.png",
        ingredientes: ["1 kg corazón de res", "4 cdas. ají panca", "ajo molido", "vinagre tinto", "comino", "orégano", "sal y pimienta"],
        pasos: [
            "Limpia el corazón de res retirando toda la grasa y membrana dura. Córtalo en trozos cuadrados medianos.",
            "Mezcla en un tazón el ají panca, ajo, vinagre tinto, comino, orégano, sal, pimienta y un toque de aceite.",
            "Agrega el corazón a la marinada y déjalo reposar al menos 3 a 4 horas (idealmente desde la noche anterior).",
            "Ensarta de 3 a 4 trozos de corazón marinado en cada palito de anticucho.",
            "Pasa los anticuchos a una parrilla bien caliente o plancha, broceando continuamente con la marinada sobrante mezclada con aceite.",
            "Cocina de 2 a 3 minutos por lado cuidando que queden dorados por fuera y jugosos por dentro.",
            "Sirve calientes acompañados de papas sancochadas doradas a la parrilla, choclo y salsa de ají."
        ]
    },
    {
        id: 8,
        nombre: "Seco de pollo",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/v4mamo.png",
        ingredientes: ["4 presas de pollo", "1 taza culantro licuado", "cebolla", "ajo", "zanahoria", "arvejas", "caldo de pollo"],
        pasos: [
            "Sazona las presas de pollo con sal y pimienta. Dorálas en una olla con aceite caliente y retíralas.",
            "En el mismo aceite, haz un aderezo con la cebolla picada fina y el ajo molido hasta que estén dorados.",
            "Agrega la pasta de culantro licuado y sofríe durante 5 minutos a fuego medio.",
            "Regresa las presas de pollo a la olla e incorpora la zanahoria en rodajas y las arvejas.",
            "Vierte media taza de caldo o agua, tapa la olla y deja cocinar a fuego bajo por 25 minutos.",
            "Verifica la sazón y sirve acompañado de arroz blanco y frejoles."
        ]
    },
    {
        id: 9,
        nombre: "Carapulcra",
        categoria: "Comidas Peruanas",
        tiempo: "50 min",
        imagen: "https://files.catbox.moe/9mal9j.png",
        ingredientes: ["500 g papa seca tostada", "500 g carne de cerdo", "ají panca", "cebolla", "ajo", "maní molido", "caldo de carne"],
        pasos: [
            "Tuesta la papa seca en una sartén sin aceite hasta que tome un tono dorado. Remójala en agua por una hora y escúrrela.",
            "Corta el cerdo en trozos y dóralo en una olla grande con aceite. Retira la carne.",
            "Prepara un aderezo sustancioso sofríendo bastante cebolla picada, ajo y ají panca molido.",
            "Incorpora la papa seca hidratada y revuelve con el aderezo.",
            "Agrega el cerdo doradoy vierte caldo de carne caliente hasta cubrir la mezcla.",
            "Cocina a fuego lento moviendo periódicamente para evitar que la papa se pegue al fondo.",
            "Cuando la papa esté suave y cremosa, agrega el maní tostado y molido. Mezcla 5 minutos más y sirve con arroz chaufa o sopa seca."
        ]
    },
    {
        id: 10,
        nombre: "Arroz chaufa",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/cbkodj.png",
        ingredientes: ["3 tazas arroz cocido frío", "2 huevos", "250 g pechuga de pollo", "sillao", "cebolla china", "aceite vegetal"],
        pasos: [
            "Corta el pollo en cubitos pequeños, sazónalo con sal, pimienta y un chorrito de sillao.",
            "Bate los huevos y cocina una tortilla delgada en la sartén. Retírala y córtala en trozos chicos.",
            "Calienta un wok o sartén grande a fuego muy alto con un chorro de aceite. Saltea el pollo hasta que esté bien dorado.",
            "Añade el arroz frío (preparado un día antes para mejor textura) desgranándolo bien en la sartén.",
            "Sofríe el arroz a fuego vivo moviendo constantemente. Vierte el sillao hasta conseguir un color parejo.",
            "Agrega la tortilla cortada, un toque de aceite de ajonjolí si deseas y la cebolla china picada.",
            "Mezcla rápidamente por 30 segundos más y sirve bien caliente."
        ]
    },
    {
        id: 11,
        nombre: "Tallarines verdes",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/68enzi.webp",
        ingredientes: ["500 g tallarines", "albahaca", "espinaca", "queso fresco", "leche evaporada", "pecanas", "aceite"],
        pasos: [
            "Cocina los tallarines en abundante agua hirviendo con sal hasta que estén al dente. Escurre y reserva.",
            "Pasa la espinaca y albahaca por agua hirviendo unos segundos (blanqueado) y luego escúrrelas.",
            "Coloca en la licuadora las hojas blanqueadas, el queso fresco, las pecanas, un chorro de aceite y la leche evaporada.",
            "Licúa hasta obtener una crema espesa y uniforme.",
            "Sazona la salsa verde con sal y pimienta al gusto y caliéntala un minuto en una sartén grande.",
            "Agrega los tallarines cocidos a la sartén y mezcla bien hasta que la pasta quede impregnada de la salsa.",
            "Sirve acompañado de apanado de res, bistec o milanesa de pollo."
        ]
    },
    {
        id: 12,
        nombre: "Pollo a la brasa",
        categoria: "Comidas Peruanas",
        tiempo: "1 hr 10 min",
        imagen: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600",
        ingredientes: ["1 pollo entero", "sillao", "vinagre tinto", "ajo molido", "comino", "orégano", "cerveza negra"],
        pasos: [
            "Limpia bien el pollo y sécalo con papel absorbente.",
            "En un tazón, mezcla el sillao, vinagre tinto, ajo molido, sal, pimienta, comino, orégano molido, romero y la cerveza negra.",
            "Baña el pollo con este aderezo asegurándote de sazonar también debajo de la piel y dentro de la cavidad.",
            "Deja marinar en el refrigerador durante al menos 8 horas para concentrar los sabores.",
            "Precalienta el horno a 200°C. Coloca el pollo sobre una rejilla en una bandeja para hornear.",
            "Hornea por unos 50 a 60 minutos, barnizándolo ocasionalmente con los jugos de la marinada.",
            "Cuando la piel esté bien dorada y crocante y la carne cocida, retira y deja reposar 5 minutos.",
            "Trocea y sirve con papas fritas y ensalada fresca."
        ]
    },
    {
        id: 13,
        nombre: "Pachamanca",
        categoria: "Comidas Peruanas",
        tiempo: "1 hr 30 min",
        imagen: "https://files.catbox.moe/w3jdkx.webp",
        ingredientes: ["carnes de pollo y cerdo", "huacatay", "chincho", "papas", "camotes", "choclos", "habas"],
        pasos: [
            "Licúa las hierbas aromáticas (huacatay, chincho, culantro) con ají panca, ajo, vinagre, chicha de jora, sal y comino.",
            "Corta las carnes en trozos medianos y colócalas en la marinada durante unas 4 horas.",
            "Lava bien las papas, camotes, choclos y habas manteniendo su cáscara.",
            "En una olla grande o de barro, coloca una base de panca de choclo o plantas aromáticas.",
            "Acomoda primero las carnes mas duras, luego las papas y camotes, y arriba los choclos y habas.",
            "Baña con el resto de la marinada y cubre con abundante panca de choclo para sellar el vapor.",
            "Tapa herméticamente y cocina a fuego muy bajo durante aproximadamente 1 hora y 15 minutos.",
            "Sirve caliente separando los ingredientes por raciones."
        ]
    },
    {
        id: 14,
        nombre: "Rocoto relleno",
        categoria: "Comidas Peruanas",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/y54jx2.webp",
        ingredientes: ["6 rocotos grandes", "500 g carne picada o molida", "cebolla", "queso fresco", "leche", "huevos", "pasas y maní"],
        pasos: [
            "Corta la tapa superior de los rocotos y limpia las venas y semillas con una cuchara.",
            "Hierve los rocotos en agua con azúcar y vinagre unos 3 a 4 minutos. Repite el proceso 3 veces cambiando el agua para bajar el picor.",
            "Prepara el relleno sofríendo la cebolla picada fina con ajo y ají panca.",
            "Agrega la carne y cocina bien. Añade comino, sal, pimienta, maní picado, pasas y huevo duro picado.",
            "Rellena los rocotos firmemente hasta el borde con la mezcla de carne.",
            "Acomoda los rocotos en un molde, coloca una lámina gruesa de queso fresco sobre cada uno y tápalos con sus gorritos.",
            "Bate los huevos con la leche evaporada, sal y viértelo en el fondo del molde.",
            "Hornea a 180°C durante 30 minutos hasta gratinar el queso y sirve acompañado de pastel de papa."
        ]
    },
    {
        id: 15,
        nombre: "Tacu tacu",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/hpardb.webp",
        ingredientes: ["2 tazas arroz cocido", "2 tazas frejoles cocidos del día anterior", "cebolla", "ají amarillo", "aceite"],
        pasos: [
            "En una sartén, sofríe cebolla picada fina, ajo y una cucharada de pasta de ají amarillo.",
            "Agrega los frejoles chancando la mitad con un tenedor para dar textura.",
            "Incorpora el arroz cocido y mezcla todo bien hasta integrar completamente.",
            "Calienta un chorro de aceite en una sartén antiadherente a fuego medio.",
            "Vierte una porción de la mezcla de arroz y frejoles, dándole forma ovalada tipo sábana gruesa.",
            "Dorar por varios minutos hasta formar una costra crujiente por fuera y suave por dentro. Voltea con cuidado.",
            "Sirve acompañado de lomo saltado, huevo frito o plátano frito."
        ]
    },
    {
        id: 16,
        nombre: "Aguadito de pollo",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/1cvvgc.webp",
        ingredientes: ["4 presas de pollo", "1 taza culantro licuado", "½ taza arroz", "papas amarillas", "zanahoria", "arvejas", "caldo"],
        pasos: [
            "Sazona y dora ligeramente las presas de pollo en una olla grande con aceite.",
            "Sofríe cebolla picada, ajo, ají amarillo y el culantro licuado en el mismo aceite durante 5 minutos.",
            "Regresa el pollo a la olla y vierte abundante caldo de pollo o agua caliente.",
            "Agrega el arroz lavado, las arvejas, la zanahoria picada en cubos y pimientos en tiras.",
            "Deja hervir a fuego medio durante 15 a 20 minutos.",
            "Añade las papas amarillas cortadas por la mitad y cocina hasta que estén suaves y el caldo tome consistencia de sopa espesa.",
            "Sirve caliente con un toque de limón."
        ]
    },
    {
        id: 17,
        nombre: "Cau cau",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/nya1mz.png",
        ingredientes: ["500 g mondongo limpio", "500 g papa blanca en cubos", "palillo o palillo amarillo", "hierbabuena", "arvejas"],
        pasos: [
            "Sancocha el mondongo en agua con un atado de hierbabuena y leche para atenuar el olor. Retira, deja enfriar y córtalo en cubitos.",
            "En una olla, prepara un aderezo sofríendo cebolla picada, ajo, ají amarillo licuado y palillo fino.",
            "Incorpora el mondongo picado y mezcla bien con el aderezo.",
            "Agrega las papas cortadas en cubitos pequeños, las arvejas y vierte caldo o agua hasta cubrirlos apenas.",
            "Cocina tapado a fuego medio hasta que las papas estén cocidas y suaves.",
            "Apaga el fuego, agrega abundante hierbabuena picada fresca y revuelve.",
            "Servir acompañado de arroz blanco bien caliente."
        ]
    },
    {
        id: 18,
        nombre: "Olluquito con carne",
        categoria: "Comidas Peruanas",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/uxunqm.png",
        ingredientes: ["700 g olluco picado en tiras", "300 g carne de res en tiras", "ají panca", "cebolla", "perejil picado"],
        pasos: [
            "Lava bien el olluco cortado en tiras finas.",
            "Saltea la carne cortada en tiras delgadas en una sartén con aceite y reserva.",
            "En la misma olla, sofríe la cebolla picada, ajo y ají panca molido.",
            "Incorpora el olluco sin añadir agua (el olluco soltará sus propios jugos).",
            "Tapa la olla y cocina a fuego bajo moviendo de vez en cuando durante 15 a 20 minutos.",
            "Reincorpora la carne salteada con todos sus jugos y cocina 5 minutos más.",
            "Decora con perejil fresco picado y sirve con arroz blanco."
        ]
    },
    {
        id: 19,
        nombre: "Estofado de pollo",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/qsrqx8.webp",
        ingredientes: ["4 presas de pollo", "tomate licuado", "zanahoria", "papas", "arvejas", "pasas y vino tinto"],
        pasos: [
            "Sazona el pollo con sal, pimienta y comino. Doralo en una olla con aceite caliente y reserva.",
            "Sofríe en la olla la cebolla picada, el ajo, ají panca y el tomate licuado.",
            "Agrega un chorro de vino tinto y deja evaporar el alcohol por un minuto.",
            "Coloca nuevamente el pollo en la olla, añade las papas en rodajas gruesas, la zanahoria en rodajas y las arvejas.",
            "Agrega las pasas e hilos de caldo o agua.",
            "Tapa y cocina a fuego medio-bajo durante 25 minutos hasta que las verduras y el pollo estén bien cocidos.",
            "Sirve bien caliente acompañado de arroz blanco."
        ]
    },
    {
        id: 20,
        nombre: "Chanfainita",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/1sv2fo.png",
        ingredientes: ["500 g bofe de res sancochado", "1 kg papa blanca en cubitos", "ají panca", "hierbabuena", "comino"],
        pasos: [
            "Sancocha el bofe en agua con sal y hierbabuena hasta que quede tierno. Deja enfriar y córtalo en cubitos chicos.",
            "Haz un aderezo fuerte sofríendo bastante cebolla picada, ajo, ají panca molido, sal y comino.",
            "Incorpora el bofe picado al aderezo y remueve por 3 minutos.",
            "Agrega la papa picada en cubos finos y cubre con el caldo de la cocción del bofe.",
            "Tapa y cocina a fuego medio hasta que las papas estén suaves.",
            "Finaliza espolvoreando hierbabuena picada finamente.",
            "Sirve con mote sancochado o cancha y un chorro de salsa de crema a la huancaína."
        ]
    },

    // --- DESAYUNOS (21 - 35) ---
    {
        id: 21,
        nombre: "Pan con chicharrón",
        categoria: "Desayunos",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/jz8xzz.png",
        ingredientes: ["panceta de cerdo", "camote frito", "salsa criolla (cebolla y limón)", "pan francés"],
        pasos: [
            "Corta la panceta de cerdo en trozos medianos y colócala en una olla con agua y sal.",
            "Sancocha hasta que el agua se evapore por completo a fuego medio.",
            "Deja que el cerdo se dore en su propia grasa reducida moviendo constantemente hasta que quede crujiente por fuera.",
            "Fríe rodajas de camote en abundante aceite hasta que estén doradas y reserva.",
            "Prepara una salsa criolla picando la cebolla roja en pluma, lavándola bien y sazonando con limón, sal y ají limo.",
            "Abre el pan francés, coloca una base de camote frito, trozos jugosos de chicharrón y salsa criolla encima.",
            "Sirve bien caliente."
        ]
    },
    {
        id: 22,
        nombre: "Tamales",
        categoria: "Desayunos",
        tiempo: "1 hr",
        imagen: "https://files.catbox.moe/gpbxlo.png",
        ingredientes: ["masa de maíz", "carne de cerdo o pollo", "ají panca", "hoja de plátano", "aceituna y huevo duro"],
        pasos: [
            "Prepara un aderezo con ají panca, ajo, comino, manteca y sal.",
            "Mezcla la masa de maíz con el aderezo sazonado agregando un poco de caldo hasta obtener una textura suave.",
            "Suaviza las hojas de plátano pasándolas brevemente sobre el fuego.",
            "Extiende una porción de masa sobre la hoja, coloca en el centro un trozo de carne sazonada, una aceituna negra y un corte de huevo duro.",
            "Cubre con más masa, dobla las hojas de plátano cuidadosamente formando un paquete y amarra firmemente con pabilo.",
            "Cocina al vapor en una olla con poca agua durante 45 a 60 minutos.",
            "Deja reposar 5 minutos antes de abrir y sirve con salsa criolla."
        ]
    },
    {
        id: 23,
        nombre: "Pan con palta",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/o4pni8.png",
        ingredientes: ["2 panes frescos", "1 palta madura", "sal", "gotas de limón"],
        pasos: [
            "Corta la palta por la mitad, retira la pepa y extrae la pulpa suave con una cuchara.",
            "Coloca la palta en un plato y machácala ligeramente con un tenedor manteniendo algunos trozos.",
            "Agrega una pizca de sal fina y unas gotas de limón fresco.",
            "Abre los panes por la mitad (puedes tostarlos ligeramente si prefieres).",
            "Rellena los panes generosamente con la mezcla de palta y sirve inmediatamente."
        ]
    },
    {
        id: 24,
        nombre: "Pan con huevo",
        categoria: "Desayunos",
        tiempo: "10 min",
        imagen: "https://files.catbox.moe/7flpt3.png",
        ingredientes: ["2 panes", "2 huevos", "aceite", "sal"],
        pasos: [
            "Calienta una sartén antiadherente a fuego medio con un chorrito de aceite.",
            "Rompe los huevos cuidadosamente en la sartén.",
            "Cocínalos fritos dejando la yema tierna o revueltos según prefieras, añadiendo sal al gusto.",
            "Abre el pan por la mitad y coloca el huevo caliente recién preparado.",
            "Sirve de inmediato acompañado de un café pasadito caliente."
        ]
    },
    {
        id: 25,
        nombre: "Avena con frutas",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/v9yz8c.png",
        ingredientes: ["1 taza avena en hojuelas", "2 tazas leche", "1 plátano", "fresas", "canela y miel"],
        pasos: [
            "En una olla, calienta la leche con una rajita de canela a fuego medio.",
            "Agrega las hojuelas de avena y cocina moviendo de manera constante durante 5 a 8 minutos hasta que espese.",
            "Retira la rajita de canela y sirve la avena caliente en un tazón.",
            "Pica el plátano y las fresas en rodajas y acomódalas sobre la avena.",
            "Espolvorea canela en polvo y vierte un hilo de miel de abeja al gusto."
        ]
    },
    {
        id: 26,
        nombre: "Quinua con leche",
        categoria: "Desayunos",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/drfmyi.jpg",
        ingredientes: ["1 taza quinua lavada", "3 tazas leche", "canela en rama y clavo", "azúcar y vainilla"],
        pasos: [
            "Lava bien la quinua varias veces bajo el chorro de agua fría frotándola con las manos para quitar el amargor.",
            "Cocina la quinua en una olla con dos tazas de agua, canela y clavo de olor durante 15 minutos hasta que reviente el grano.",
            "Vierte la leche y agrega azúcar al gusto junto con unas gotas de esencia de vainilla.",
            "Cocina a fuego lento moviendo constantemente durante 10 minutos más hasta lograr una consistencia cremosa.",
            "Sirve en taza caliente espolvoreado con canela molida."
        ]
    },
    {
        id: 27,
        nombre: "Yogur con granola",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/ma45na.png",
        ingredientes: ["2 tazas yogur natural o de vainilla", "1 taza granola", "frutas variadas (fresa, arándanos, plátano)"],
        pasos: [
            "Lava y pica las frutas frescas en cubitos delgados.",
            "En un vaso alto o tazón, vierte una capa de yogur en el fondo.",
            "Añade una capa de granola crocante y una capa de frutas picadas.",
            "Repite el proceso agregando otra capa de yogur, granola y frutas encima.",
            "Sirve fresco y de inmediato."
        ]
    },
    {
        id: 28,
        nombre: "Tortilla de verduras",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/as3pz4.png",
        ingredientes: ["3 huevos", "½ tomate", "espinaca picada", "½ zanahoria rallada", "aceite y sal"],
        pasos: [
            "Lava y pica el tomate en cuadritos, corta la espinaca en tiras finas y ralla la zanahoria.",
            "En un tazón, bate los 3 huevos con un tenedor hasta espumar ligeramente.",
            "Incorpora las verduras picadas al tazón con los huevos y sazona con sal y pimienta.",
            "Calienta una sartén con un chorrito de aceite a fuego medio.",
            "Vierte la mezcla y cocina durante 3 a 4 minutos hasta que la base esté firme.",
            "Voltea la tortilla con ayuda de un plato y cocina el otro lado por 2 minutos más.",
            "Sirve caliente."
        ]
    },
    {
        id: 29,
        nombre: "Sándwich de pollo",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/9t9qjl.png",
        ingredientes: ["200 g pollo sancochado y deshilachado", "mayonesa", "hojas de lechuga", "tomate en rodajas", "panes"],
        pasos: [
            "Sancocha la pechuga de pollo, déjala enfriar y deshiláchala finamente.",
            "Mezcla el pollo en un tazón con dos cucharadas de mayonesa, sal y pimienta.",
            "Lava bien las hojas de lechuga y corta el tomate en rodajas delgadas.",
            "Abre el pan por la mitad.",
            "Coloca una hoja de lechuga, rodajas de tomate y encima una porción generosa de la mezcla de pollo con mayonesa.",
            "Cierra el pan y sirve."
        ]
    },
    {
        id: 30,
        nombre: "Pan con queso",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/pozhyu.png",
        ingredientes: ["2 panes", "150 g queso fresco, andino o paria"],
        pasos: [
            "Corta el queso fresco o andino en lonchas gruesas.",
            "Abre los panes por la mitad.",
            "Coloca las tajadas de queso dentro del pan.",
            "Si lo deseas caliente, pasa el pan armado por una sartén o tostadora un par de minutos hasta que el queso se ablande ligeramente.",
            "Sirve caliente."
        ]
    },
    {
        id: 31,
        nombre: "Huevos revueltos",
        categoria: "Desayunos",
        tiempo: "8 min",
        imagen: "https://files.catbox.moe/snz7x4.png",
        ingredientes: ["3 huevos", "1 cda mantequilla o aceite", "sal y pimienta"],
        pasos: [
            "Rompe los huevos en un recipiente y bátelos suavemente con un tenedor añadiendo sal y pimienta.",
            "Derrite la mantequilla en una sartén antiadherente a fuego bajo.",
            "Vierte los huevos batidos.",
            "Remueve constantemente con una espátula de silicona haciendo movimientos suaves desde los bordes hacia el centro.",
            "Retira del fuego justo cuando estén cuajados pero sigan cremosos y jugosos.",
            "Sirve inmediatamente acompañados de tostadas."
        ]
    },
    {
        id: 32,
        nombre: "Panqueques con frutas",
        categoria: "Desayunos",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/1rq0kr.png",
        ingredientes: ["1 taza harina", "1 huevo", "1 taza leche", "1 cda azúcar", "frutas y miel de maple"],
        pasos: [
            "En un tazón, mezcla la harina, el azúcar, una pizca de sal y polvo de hornear.",
            "Agrega el huevo, la leche y la mantequilla derretida. Bate con batidor de varillas hasta obtener una masa fluida y sin grumos.",
            "Calienta una sartén antiadherente engrasada con un poquito de mantequilla a fuego medio.",
            "Vierte un cucharón de mezcla en el centro formando un círculo.",
            "Cocina hasta que aparezcan burbujas en la superficie, voltea con una espátula y dora el otro lado por un minuto.",
            "Sirve formando una torre, decora con frutas frescas picadas y vierte miel encima."
        ]
    },
    {
        id: 33,
        nombre: "Tostadas con mermelada",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/2k5c7v.png",
        ingredientes: ["4 rebanadas de pan de molde", "mantequilla", "mermelada de fresa o naranja"],
        pasos: [
            "Coloca las rebanadas de pan en una tostadora o sobre una sartén caliente a fuego medio.",
            "Tuesta por ambos lados hasta que adquieran un tono dorado y textura crocante.",
            "Unta inmediatamente una capa suave de mantequilla sobre las tostadas calientes para que se derrita.",
            "Agrega encima una cucharada generosa de mermelada extendiéndola de forma pareja.",
            "Sirve acompañadas de un jugo o té."
        ]
    },
    {
        id: 34,
        nombre: "Ensalada de frutas",
        categoria: "Desayunos",
        tiempo: "10 min",
        imagen: "https://files.catbox.moe/crd7ip.png",
        ingredientes: ["papaya", "plátano", "fresas", "uvas", "miel de abeja y yogur (opcional)"],
        pasos: [
            "Lava meticulosamente todas las frutas frescas.",
            "Pela la papaya y el plátano. Retira las semillas de la papaya.",
            "Corta todas las frutas en cubitos de tamaño uniforme y colócalas en un tazón amplio.",
            "Mezcla suavemente para integrar las frutas sin maltratarlas.",
            "Sirve en pocillos individuales, agregando si deseas un chorro de miel de abeja, algarrobina o un toque de yogur natural por encima."
        ]
    },
    {
        id: 35,
        nombre: "Batido de frutas",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/m6bige.png",
        ingredientes: ["1 plátano maduro", "1 taza de fresas", "1 taza de leche fría", "1 cda de miel"],
        pasos: [
            "Lava bien las fresas y retírales las hojas verdes.",
            "Pela el plátano y córtalo en trozos.",
            "Coloca el plátano, las fresas, la leche fría y la miel dentro del vaso de la licuadora.",
            "Licúa a velocidad alta durante 1 a 2 minutos hasta obtener una bebida cremosa, uniforme y sin grumos.",
            "Vierte en vasos altos y sirve helado."
        ]
    },

    // --- COMIDAS EXTRANJERAS (36 - 55) ---
    {
        id: 36,
        nombre: "Pizza italiana 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/66iqpu.png",
        ingredientes: ["500 g harina de trigo", "300 ml agua tibia", "7 g levadura seca", "salsa de tomate", "queso mozzarella", "albahaca fresca"],
        pasos: [
            "Mezcla la harina con la levadura, agua tibia y sal. Amasa firmemente durante 10 minutos hasta lograr una masa lisa.",
            "Deja reposar la masa en un tazón cubierto durante 1 hora hasta que duplique su tamaño.",
            "Estira la masa con las manos sobre una superficie enharinada dándole forma circular.",
            "Extiende una capa delgada de salsa de tomate natural sobre la base.",
            "Cubre con queso mozzarella troceado y unas gotas de aceite de oliva.",
            "Hornea en horno precalentado a máxima temperatura (230°C - 250°C) durante 10 a 12 minutos hasta que la masa esté crujiente y el queso burbujee.",
            "Decora con hojas de albahaca fresca al salir del horno."
        ]
    },
    {
        id: 37,
        nombre: "Sushi japonés 🇯🇵",
        categoria: "Comidas Extranjeras",
        tiempo: "50 min",
        imagen: "https://files.catbox.moe/edyg5u.png",
        ingredientes: ["arroz para sushi", "vinagre de arroz", "láminas de alga nori", "pescado apto para consumo en crudo (salmón/atún)", "palta y pepino"],
        pasos: [
            "Lava el arroz varias veces hasta que el agua salga transparente. Cocínalo y aderézalo caliente con vinagre de arroz, azúcar y sal. Deja enfriar.",
            "Coloca una lámina de alga nori sobre un esterilla de bambú (makisu).",
            "Extiende una capa fina e igualada de arroz para sushi sobre el alga, dejando un borde libre arriba.",
            "Coloca bastones delgados de pescado fresco, palta y pepino en el centro de forma horizontal.",
            "Enrolla firmemente presionando con la esterilla para darle forma cilíndrica.",
            "Corta el rollo en 8 bocados iguales usando un cuchillo muy afilado y ligeramente humedecido.",
            "Sirve con salsa de soya, wasabi y jengibre encurtido."
        ]
    },
    {
        id: 38,
        nombre: "Tacos mexicanos 🇲🇽",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/4t60tt.png",
        ingredientes: ["tortillas de maíz", "500 g carne de res o cerdo picada", "cebolla", "cilantro", "limón", "salsa picante"],
        pasos: [
            "Sazona la carne picada finamente con comino, ajo en polvo, sal y pimienta.",
            "Cocina la carne a fuego alto en una sartén caliente hasta que esté dorada y jugosa.",
            "Calienta las tortillas de maíz en un comal o sartén seca hasta que queden flexibles.",
            "Coloca una porción generosa de carne caliente en el centro de cada tortilla doblada.",
            "Añade encima cebolla picada en cuadritos pequeños y abundante cilantro fresco picado.",
            "Acompaña con rodajas de limón y salsa verde o roja mexicana al gusto."
        ]
    },
    {
        id: 39,
        nombre: "Hamburguesa 🇺🇸",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/07k3sn.png",
        ingredientes: ["500 g carne molida de res", "panes de hamburguesa", "queso cheddar", "lechuga", "tomate", "salsas"],
        pasos: [
            "Divide la carne molida sin amasar demasiado y forma discos gruesos sazonando únicamente la superficie con sal y pimienta.",
            "Calienta una sartén o plancha a fuego alto con unas gotas de aceite.",
            "Cocina las hamburguesas de 3 a 4 minutos por lado sin aplastarlas para conservar los jugos.",
            "Coloca una lámina de queso cheddar sobre la carne en el último minuto y tapa la sartén para derretirlo.",
            "Pasa los panes cortados por la plancha para dorar la cara interna.",
            "Arma la hamburguesa colocando lechuga, tomate, la carne con queso fundido y las salsas de tu preferencia."
        ]
    },
    {
        id: 40,
        nombre: "Pasta carbonara 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/syto9x.png",
        ingredientes: ["400 g spaghetti", "150 g panceta o guanciale", "3 yemas y 1 huevo entero", "100 g queso pecorino/parmesano", "pimienta negra molida"],
        pasos: [
            "Cocina la pasta en abundante agua hirviendo con sal hasta que esté al dente.",
            "Mientras tanto, corta la panceta en tiras y fríela en una sartén a fuego medio hasta que esté crujiente. Apaga el fuego.",
            "En un tazón, bate los huevos con el queso rallado y abundante pimienta negra recién molida.",
            "Escurre la pasta reservando media taza del agua caliente de cocción.",
            "Vierte la pasta inmediatamente sobre la sartén con la panceta y mezcla bien.",
            "Agrega la mezcla de huevo y queso fuera del fuego, moviendo rápidamente e incorporando un chorrito del agua reservada para crear una salsa cremosa sin cuajar el huevo.",
            "Sirve de inmediato."
        ]
    },
    {
        id: 41,
        nombre: "Paella española 🇪🇸",
        categoria: "Comidas Extranjeras",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/hnpji9.png",
        ingredientes: ["2 tazas arroz bomba", "mariscos variados", "trozos de pollo", "azafrán o palillo", "pimiento rojo", "caldo de pescado"],
        pasos: [
            "En una paellera con aceite de oliva, dora los trozos de pollo sazonados y retira.",
            "Sofríe el pimiento rojo cortado en tiras junto con ajo picado y tomate rallado.",
            "Agrega el arroz bomba y saltea por 2 minutos para que absorba los sabores.",
            "Vierte el caldo de pescado bien caliente impregnado con azafrán en hebras.",
            "Distribuye el arroz de forma pareja en la paellera y no vuelvas a remover.",
            "Cocina a fuego vivo 10 minutos, luego baja el fuego y acomoda los mariscos y el pollo encima.",
            "Cocina 8 minutos más hasta que el líquido se absorba. Deja reposar 5 minutos cubierta con un paño antes de servir."
        ]
    },
    {
        id: 42,
        nombre: "Lasaña italiana 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "50 min",
        imagen: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
        ingredientes: ["láminas de pasta para lasaña", "500 g carne molida", "salsa de tomate (bolognesa)", "salsa bechamel", "queso mozzarella rallado"],
        pasos: [
            "Prepara un tuco de carne cocinando la carne molida con cebolla, ajo, hierbas aromáticas y abundante salsa de tomate.",
            "En una fuente para horno engrasada, coloca una fina capa de salsa en el fondo.",
            "Cubre con láminas de pasta para lasaña precocidas.",
            "Agrega una capa generosa de salsa bolognesa con carne y encima una capa de salsa bechamel.",
            "Repite las capas de pasta, carne y bechamel hasta llenar el molde.",
            "Cubre la última capa con abundante queso mozzarella y parmesano rallado.",
            "Hornea a 180°C durante 30 a 35 minutos hasta que la pasta esté suave y la superficie dorada y gratinada."
        ]
    },
    {
        id: 43,
        nombre: "Ramen japonés 🇯🇵",
        categoria: "Comidas Extranjeras",
        tiempo: "45 min",
        imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
        ingredientes: ["fideos ramen", "caldo concentrado de cerdo/pollo", "huevo hanki sancochado tierno", "panceta de cerdo (chashu)", "cebolla china y alga nori"],
        pasos: [
            "Hierve el caldo concentrado sazonándolo con salsa de soya, pasta miso y jengibre rallado.",
            "Cocina los fideos ramen en una olla con agua hirviendo según las instrucciones del empaque y escúrrelos.",
            "En un tazón hondo, coloca una base de fideos recién cocidos.",
            "Vierte el caldo de ramen hirviendo hasta cubrir los fideos.",
            "Acomoda encima láminas de panceta de cerdo cocida, medio huevo sancochado con yema blanda, cebolla china picada fina y un trozo de alga nori.",
            "Sirve extremadamente caliente."
        ]
    },
    {
        id: 44,
        nombre: "Pad Thai tailandés 🇹🇭",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600",
        ingredientes: ["fideos de arroz planos", "camarones o pollo", "salsa de tamarindo", "brotes de soya", "huevo", "maní tostado picado"],
        pasos: [
            "Remoja los fideos de arroz planos en agua tibia hasta que estén flexibles.",
            "Mezcla la pasta de tamarindo con salsa de pescado y azúcar para preparar la salsa base.",
            "En un wok muy caliente con aceite, saltea los camarones o tiras de pollo hasta cocinar.",
            "Empuja la proteína a un lado, rompe un huevo en la sartén y revuélvelo.",
            "Añade los fideos escurridos y la salsa preparada, salteando a fuego alto durante 2 minutos.",
            "Agrega los brotes de soya y el maní tostado picado.",
            "Servir con una rodaja de limón al lado para exprimir."
        ]
    },
    {
        id: 45,
        nombre: "Burritos mexicanos 🇲🇽",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",
        ingredientes: ["tortillas grandes de trigo", "frijoles refritos", "carne molida o pollo sazonado", "queso rallado", "guacamole"],
        pasos: [
            "Calienta ligeramente las tortillas grandes de trigo para que estén flexibles.",
            "Extiende una cucharada generosa de frijoles refritos calientes en el centro de la tortilla.",
            "Agrega una capa de carne o pollo sazonado, queso rallado y una porción de guacamole fresco.",
            "Dobla los bordes laterales hacia el centro para cerrar las puntas.",
            "Enrolla la tortilla firmemente desde la base hacia arriba formando un cilindro hermético.",
            "Dora el burrito en una sartén a fuego medio por ambos lados para sellar y servir."
        ]
    },
    {
        id: 46,
        nombre: "Crepes francesas 🇫🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600",
        ingredientes: ["1 taza harina", "2 huevos", "1 y ½ tazas leche", "1 cda mantequilla derretida", "relleno dulce (manjar/nutella)"],
        pasos: [
            "Coloca la harina, huevos, leche, mantequilla derretida y una pizca de sal en la licuadora.",
            "Licúa hasta obtener una masa líquida y fluida sin grumos.",
            "Engrasa una sartén antiadherente con un poco de mantequilla a fuego medio.",
            "Vierte una pequeña porción de mezcla y gira la sartén inmediatamente para distribuir una capa delgada.",
            "Cocina durante 1 minuto hasta que los bordes se despeguen, voltea y cocina 30 segundos más.",
            "Rellena con manjar blanco, Nutella o frutas picadas, dobla en abanico y sirve."
        ]
    },
    {
        id: 47,
        nombre: "Curry de pollo indio 🇮🇳",
        categoria: "Comidas Extranjeras",
        tiempo: "35 min",
        imagen: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600",
        ingredientes: ["500 g pechuga de pollo en cubos", "2 cdas curry en polvo", "400 ml leche de coco", "cebolla, ajo y tomate triturado"],
        pasos: [
            "Sofríe cebolla picada, ajo y jengibre rallado en una sartén grande con aceite.",
            "Añade las especias de curry en polvo y revuelve un minuto para liberar los aromas.",
            "Agrega los cubos de pechuga de pollo y dóralos ligeramente.",
            "Incorpora el tomate triturado y vierte la leche de coco.",
            "Tapa la sartén y cocina a fuego lento durante 20 minutos hasta que la salsa espese y el pollo quede sumamente suave.",
            "Sirve caliente acompañado de arroz basmati o pan naan."
        ]
    },
    {
        id: 48,
        nombre: "Falafel libanés 🇱🇧",
        categoria: "Comidas Extranjeras",
        tiempo: "30 min",
        imagen: "https://cdn.thelebanesedish.com/static/recipe/zjpOIMBPMfrX9UZqhgw8/lebanese-falafel-79003be62f159bb821fb1e53c02041f7-960-q60.jpg",
        ingredientes: ["250 g garbanzos secos (remojados desde la noche anterior)", "1 cebolla", "ajo", "cilantro y perejil fresco", "comino y aceite"],
        pasos: [
            "Escurre los garbanzos remojados sin cocinar y colócalos en un procesador de alimentos.",
            "Agrega la cebolla, ajos, abundante cilantro, perejil, comino, sal y una cucharada de harina.",
            "Tritura todo hasta obtener una pasta granulada pero moldeable.",
            "Forma bolitas o croquetas aplastadas con la masa.",
            "Fríe las bolitas en abundante aceite bien caliente hasta que estén crujientes y de color dorado oscuro.",
            "Escurre sobre papel absorbente y sirve dentro de pan pita con salsa de yogur o tahini."
        ]
    },
    {
        id: 49,
        nombre: "Pollo Kung Pao chino 🇨🇳",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600",
        ingredientes: ["500 g pechuga de pollo en cubos", "½ taza maní tostado", "salsa de soya", "chiles secos picantes", "pimiento verde y ajo"],
        pasos: [
            "Sazona el pollo en cubos con una cucharada de salsa de soya y fécula de maíz.",
            "En un wok muy caliente con aceite, saltea los chiles secos y el ajo picado unos segundos.",
            "Incorpora el pollo y saltea a fuego alto hasta que cambie de color.",
            "Agrega el pimiento verde cortado en cubos y sofríe por 2 minutos más.",
            "Vierte salsa de soya, un chorrito de vinagre de arroz y azúcar para formar la salsa.",
            "Añade el maní tostado, mezcla todo por 30 segundos y sirve caliente con arroz blanco."
        ]
    },
    {
        id: 50,
        nombre: "Arepas venezolanas 🇻🇪",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.GosEQi2Mzf-cL4XDchz1DwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        ingredientes: ["2 tazas harina de maíz precocida", "2 y ½ tazas agua tibia", "1 cdita sal", "queso o carne desmechada para rellenar"],
        pasos: [
            "En un tazón, mezcla el agua tibia con la sal.",
            "Añade la harina de maíz precocida poco a poco mientras amasas con la mano continuamente.",
            "Amasa bien durante 3 a 5 minutos hasta lograr una textura suave, homogénea y sin grietas. Deja reposar 5 minutos.",
            "Forma bolas de masa medianas y aplástalas con las palmas creando discos de 1.5 cm de grosor.",
            "Cocina las arepas en una budare o sartén caliente engrasada durante 5 minutos por lado.",
            "Hornea a 200°C por 10 minutos más hasta que al darles un golpe sonar hueco.",
            "Corta por un borde para abrir y rellena generosamente con queso o carne desmechada."
        ]
    },
    {
        id: 51,
        nombre: "Feijoada brasileña 🇧🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "1 hr 20 min",
        imagen: "https://img.freepik.com/premium-photo/prato-de-feijoada-gourmet-bem-temperado-com-coentro_1172687-2819.jpg?w=900",
        ingredientes: ["500 g frijoles negros", "300 g carne de cerdo y tocino", "chorizos", "cebolla, ajo y hojas de laurel"],
        pasos: [
            "Remoja los frijoles negros en agua durante la noche anterior.",
            "Cocina los frijoles en una olla grande con agua limpia y hojas de laurel a fuego medio.",
            "En una sartén, dora el tocino picado, los chorizos en rodajas y la carne de cerdo troceada.",
            "Suma cebolla y ajo picados al sofrito de las carnes.",
            "Vierte todo el contenido de la sartén dentro de la olla con frijoles.",
            "Cocina a fuego lento durante 45 minutos a 1 hora moviendo ocasionalmente hasta que los frijoles estén tiernos y el caldo espeso.",
            "Sirve con arroz blanco, farofa y rodajas de naranja."
        ]
    },
    {
        id: 52,
        nombre: "Fish and Chips británico 🇬🇧",
        categoria: "Comidas Extranjeras",
        tiempo: "30 min",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.JgFep5hO58uJ6Pj7_lH1YQHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        ingredientes: ["500 g filete de pescado blanco", "1 taza harina", "1 taza cerveza muy fría o agua con gas", "papas amarillas gruesas"],
        pasos: [
            "Pela las papas y córtalas en bastones gruesos. Fríelas en aceite a fuego medio hasta que estén suaves pero no doradas. Retira.",
            "Mezcla la harina con polvo de hornear, sal, pimienta y vierte la cerveza congelada o agua con gas batiendo ligeramente hasta obtener una masa fluida.",
            "Pasa los filetes de pescado por harina seca y luego sumérgelos en la masa de cerveza.",
            "Fríe el pescado de inmediato en aceite abundante y bien caliente hasta que el empanizado esté doradito y super crocante.",
            "Da una segunda fritura rápida a las papas a fuego muy alto para dorarlas.",
            "Sirve bien caliente acompañado de salsa tártara y vinagre."
        ]
    },
    {
        id: 53,
        nombre: "Moussaka griega 🇬🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "1 hr",
        imagen: "https://images.unsplash.com/photo-1621841957884-1210fe19d66d?w=600",
        ingredientes: ["2 berenjenas grandes", "500 g carne molida de cordero/res", "salsa de tomate", "salsa bechamel", "queso rallado"],
        pasos: [
            "Corta las berenjenas en rodajas gruesas, agrégales sal y déjalas reposar 20 minutos para eliminar amargor. Pásalas por la sartén con aceite hasta dorar.",
            "Prepara la carne cocinando la carne molida con cebolla, ajo, tomate triturado y un toque de canela.",
            "En un pyrex, acomoda una capa de rodajas de berenjena en la base.",
            "Cubre con todo el guiso de carne molida preparado.",
            "Coloca otra capa de berenjena encima.",
            "Baña todo con abundante salsa bechamel cremosa y cubre con queso rallado.",
            "Hornea a 180°C durante 35 a 40 minutos hasta gratinar la capa superior."
        ]
    },
    {
        id: 54,
        nombre: "Bibimbap coreano 🇰🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "35 min",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/047/378/579/small_2x/bibimbap-with-rice-vegetables-and-egg-in-bowl-photo.jpeg",
        ingredientes: ["2 tazas arroz cocido", "tiras de carne de res marinada", "zanahoria, espinaca, champiñones", "1 huevo frito", "pasta gochujang"],
        pasos: [
            "Saltea por separado en una sartén con aceite de ajonjolí la zanahoria cortada en tiras, los champiñones en láminas y la espinaca.",
            "Cocina las tiras de carne de res con ajo y salsa de soya.",
            "Fríe un huevo a la plancha manteniendo la yema líquida.",
            "Sirve una base de arroz blanco caliente en un tazón amplio.",
            "Acomoda ordenadamente en sectores forming un círculo sobre el arroz cada una de las verduras preparadas y la carne.",
            "Coloca el huevo frito en el centro y una cucharada de pasta picante gochujang.",
            "Mezcla todo vigorosamente justo antes de comer."
        ]
    },
    {
        id: 55,
        nombre: "Empanadas argentinas 🇦🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "40 min",
        imagen: "https://imag.bonviveur.com/empanadas-argentinas-de-carne-foto-cerca.jpg",
        ingredientes: ["12 discos de masa para empanadas", "400 g carne picada a cuchillo", "2 cebollas grandes", "huevo duro y aceitunas"],
        pasos: [
            "Sofríe las cebollas picadas finamente en bastante aceite hasta que estén transparentes.",
            "Agrega la carne picada sazonando con pimentón dulce, comino y sal. Cocina rápidamente sin secar la carne.",
            "Deja enfriar el pino de carne completamente. Agrega huevo duro picado y aceitunas.",
            "Coloca una porción de relleno frío en el centro de cada disco de masa.",
            "Humedece los bordes con agua, dobla por la mitad y realiza el repulgue tradicional en los bordes para cerrar.",
            "Acomoda las empanadas en una bandeja y barnízalas con huevo batido.",
            "Hornea a 200°C durante 15 a 20 minutos hasta que estén bien doradas."
        ]
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let favoritos = JSON.parse(localStorage.getItem('pikachef_favs')) || [];
let categoriaActual = 'Todas';
let busquedaTexto = '';

// --- ELEMENTOS DEL DOM ---
const recipesGrid = document.getElementById('recipes-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeModal = document.getElementById('recipe-modal');
const closeModalBtn = document.getElementById('close-modal');
const favCountSpan = document.getElementById('fav-count');

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorFavoritos();
    renderizarRecetas();
    configurarEventos();
});

// --- EVENTOS DE INTERFAZ ---
function configurarEventos() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            busquedaTexto = e.target.value.toLowerCase().trim();
            renderizarRecetas();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active', 'bg-amber-500', 'text-slate-900');
                b.classList.add('bg-slate-800', 'text-slate-300', 'border', 'border-slate-700');
            });
            btn.classList.add('active', 'bg-amber-500', 'text-slate-900');
            btn.classList.remove('bg-slate-800', 'text-slate-300', 'border', 'border-slate-700');

            categoriaActual = btn.getAttribute('data-category');
            renderizarRecetas();
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', cerrarModal);
    }

    if (recipeModal) {
        recipeModal.addEventListener('click', (e) => {
            if (e.target === recipeModal) cerrarModal();
        });
    }
}

// --- RENDERIZADO DE TARJETAS DE RECETAS ---
function renderizarRecetas() {
    if (!recipesGrid) return;
    recipesGrid.innerHTML = '';

    const filtradas = recetas.filter(receta => {
        const coincideCategoria = categoriaActual === 'Todas' || receta.categoria === categoriaActual;
        const coincideBusqueda = receta.nombre.toLowerCase().includes(busquedaTexto) ||
            receta.ingredientes.some(ing => ing.toLowerCase().includes(busquedaTexto));
        return coincideCategoria && coincideBusqueda;
    });

    if (filtradas.length === 0) {
        recipesGrid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <p class="text-xl">No se encontraron recetas que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    filtradas.forEach(receta => {
        const esFavorito = favoritos.includes(receta.id);
        const card = document.createElement('div');
        card.className = 'bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg';

        card.innerHTML = `
            <div>
                <div class="relative h-48 overflow-hidden">
                    <img src="${receta.imagen}" alt="${receta.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <button onclick="toggleFavorito(event, ${receta.id})" class="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-900 p-2 rounded-full transition-transform active:scale-90">
                        ${esFavorito ? '❤️' : '🤍'}
                    </button>
                    <span class="absolute bottom-3 left-3 bg-slate-900/80 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                        ⏱️ ${receta.tiempo}
                    </span>
                </div>
                <div class="p-5">
                    <span class="text-xs text-amber-500 font-bold uppercase tracking-wider">${receta.categoria}</span>
                    <h3 class="text-xl font-bold text-white mt-1">${receta.nombre}</h3>
                    <p class="text-slate-400 text-sm mt-2 line-clamp-2">Ingredientes: ${receta.ingredientes.join(', ')}</p>
                </div>
            </div>
            <div class="p-5 pt-0">
                <button onclick="abrirModal(${receta.id})" class="w-full bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white font-medium py-2.5 rounded-xl transition-all text-sm cursor-pointer">
                    Ver Receta Completa
                </button>
            </div>
        `;

        recipesGrid.appendChild(card);
    });
}

// --- MANEJO DEL MODAL ---
function abrirModal(id) {
    const receta = recetas.find(r => r.id === id);
    if (!receta) return;

    document.getElementById('modal-img').src = receta.imagen;
    document.getElementById('modal-category').innerText = receta.categoria;
    document.getElementById('modal-title').innerText = receta.nombre;
    document.getElementById('modal-time').querySelector('span').innerText = receta.tiempo;

    const modalIngredients = document.getElementById('modal-ingredients');
    modalIngredients.innerHTML = '';
    receta.ingredientes.forEach(ing => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2';
        li.innerHTML = `<span class="text-amber-400">•</span> ${ing}`;
        modalIngredients.appendChild(li);
    });

    const modalSteps = document.getElementById('modal-steps');
    modalSteps.innerHTML = `
        <div class="flex gap-2 mb-4">
            <button onclick="leerRecetaCompleta()" class="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm cursor-pointer">
                🔊 Escuchar Receta Completa
            </button>
            <button id="btn-detener-voz" onclick="detenerVoz()" class="bg-red-600/20 hover:bg-red-600/40 text-red-400 font-semibold py-2.5 px-4 rounded-xl border border-red-500/30 flex items-center justify-center gap-2 transition-all hidden text-sm cursor-pointer">
                ⏹️ Detener
            </button>
        </div>
        <div id="steps-list" class="space-y-4"></div>
    `;

    const stepsList = document.getElementById('steps-list');
    receta.pasos.forEach((paso, index) => {
        const p = document.createElement('p');
        p.className = 'text-sm text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50';
        p.innerHTML = `<strong class="text-amber-400 block mb-1">Paso ${index + 1}:</strong> ${paso}`;
        stepsList.appendChild(p);
    });

    detenerVoz();
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    detenerVoz();
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// --- SISTEMA DE FAVORITOS ---
function toggleFavorito(event, id) {
    event.stopPropagation();
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    localStorage.setItem('pikachef_favs', JSON.stringify(favoritos));
    actualizarContadorFavoritos();
    renderizarRecetas();
}

function actualizarContadorFavoritos() {
    if (favCountSpan) {
        favCountSpan.innerText = favoritos.length;
    }
}

// --- CONTROL DE MÚSICA DE FONDO ---
let audioCtx = null;
let synthTimer = null;
let musicaSonando = false;
const bgMusicElement = document.getElementById('bg-music');

function initSynthAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playAmbientTone() {
    if (!audioCtx || !musicaSonando) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const notes = [261.63, 329.63, 392.00, 523.25, 440.00];
        const freq = notes[Math.floor(Math.random() * notes.length)];
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 3.2);
    } catch (e) {
        console.log(e);
    }
}

function toggleMusicaFondo() {
    initSynthAudio();
    const btnText = document.getElementById('bg-music-text');
    const btnIcon = document.getElementById('bg-music-icon');

    if (musicaSonando) {
        musicaSonando = false;
        if (bgMusicElement) bgMusicElement.pause();
        if (synthTimer) clearInterval(synthTimer);
        if (btnText) btnText.innerText = "Música: OFF";
        if (btnIcon) btnIcon.innerText = "🎵";
    } else {
        musicaSonando = true;
        if (btnText) btnText.innerText = "Música: ON";
        if (btnIcon) btnIcon.innerText = "🔊";

        if (bgMusicElement) {
            bgMusicElement.volume = 0.3;
            bgMusicElement.play().catch(() => {
                synthTimer = setInterval(playAmbientTone, 2000);
            });
        } else {
            synthTimer = setInterval(playAmbientTone, 2000);
        }
    }
}

document.addEventListener('click', function primerToque() {
    if (!musicaSonando) {
        toggleMusicaFondo();
    }
}, { once: true });

function pausarMusicaParaVoz() {
    if (musicaSonando && bgMusicElement) {
        bgMusicElement.pause();
    }
}

function reanudarMusicaDespuesDeVoz() {
    if (musicaSonando && bgMusicElement) {
        bgMusicElement.play().catch(() => {});
    }
}

// --- SÍNTESIS DE VOZ (TEXT-TO-SPEECH) ---
function leerRecetaCompleta() {
    detenerVoz();
    pausarMusicaParaVoz();

    const titulo = document.getElementById('modal-title').innerText;
    const pasos = Array.from(document.querySelectorAll('#steps-list p'))
                       .map(el => el.innerText)
                       .join('. ');

    const textoALeer = `${titulo}. Preparación paso a paso: ${pasos}`;

    if ('speechSynthesis' in window) {
        const mensaje = new SpeechSynthesisUtterance(textoALeer);
        mensaje.lang = 'es-ES';
        mensaje.rate = 0.95;

        const btnDetener = document.getElementById('btn-detener-voz');
        if (btnDetener) btnDetener.classList.remove('hidden');

        mensaje.onend = () => {
            if (btnDetener) btnDetener.classList.add('hidden');
            reanudarMusicaDespuesDeVoz();
        };

        mensaje.onerror = () => {
            if (btnDetener) btnDetener.classList.add('hidden');
            reanudarMusicaDespuesDeVoz();
        };

        window.speechSynthesis.speak(mensaje);
    }
}

function detenerVoz() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    const btnDetener = document.getElementById('btn-detener-voz');
    if (btnDetener) btnDetener.classList.add('hidden');
    reanudarMusicaDespuesDeVoz();
}