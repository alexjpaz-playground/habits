
let data = {};

// https://www.fluentin3months.com/common-spanish-words/
// while IFS= read -r line; do echo "[\"$line],"; done < in | sed 's/ – “/","/' | sed 's/”]/"]/' | pbcopy
//
data.phrases = {};

data.phrases.common = [
    ["Hola","Hello"],
    ["Adiós","Goodbye"],
    ["Por favor","Please"],
    ["Gracias","Thank you"],
    ["Lo siento","Sorry"],
    ["Salud","Bless you (after someone sneezes)"],
    ["Sí","Yes"],
    ["No","No"],
    ["¿Quién?","Who?"],
    ["¿Qué?","What?"],
    ["¿Por qué?","Why?"],
    ["¿Dónde?","Where?"],
    ["Buenos días","Good morning"],
    ["Buenas tardes","Good afternoon"],
    ["Buenas noches","Good evening"],
    ["Hola, me llamo Juan","Hello, my name is John"],
    ["Me llamo…","My name is…"],
    ["¿Cómo te llamas?","What’s your name?"],
    ["Mucho gusto","Nice to meet you"],
    ["¿Cómo estás?","How are you?"],
    ["Estoy bien, gracias","I’m well thank you"],
    ["Disculpa. ¿Dónde está el baño?","Excuse me. Where is the bathroom?"],
    ["¿Qué hora es?","What time is it?"],
    ["¿Cómo se dice ‘concert’ en español?","How do you say ‘concert’ in Spanish?"],
    ["Estoy perdido/a","I am lost"],
    ["Yo no comprendo","I do not understand"],
    ["Por favor, habla más despacio","Would you speak slower, please"],
    ["Te extraño","I miss you"],
    ["Te quiero","I love you"],
    ["Despacito","Slowly"],
    ["Mi Gente","My people"],
    ["Bailando","Dancing"],
    ["Bésame mucho","Kiss me a lot"],
    ["Gasolina","Gasoline"],
    ["La Bicicleta","The bicycle"],
    ["Sin Pijama","Without pajamas"],
    ["Bella","Beautiful"],
    ["Clandestino","Clandestine or secret"],
    ["No Me Acuerdo","I don’t remember"],
];

data.misc = {};

data.misc.connectors = [
    ["Que", "That”, “Which"],
    ["Como", "Like”, “As"],
    ["Pero", "But"],
    ["Porque", "Because"],
    ["Entonces", "So”, “Then"],
    ["Pues", "Well then"],
    ["Aunque", "Although"],
    ["Mientras", "While"],
    ["Además", "Besides that"],

]

data.misc.adjective_adverbs = [
    ["Todo", "All”, “every"],
    ["Alguno", "Some"],
    ["Más", "More"],
    ["Menos", "Less"],
    ["Muy", "Very"],
    ["Mucho", "A lot"],
    ["Otro", "Other"],
    ["Casi", "Almost"],
    ["Mismo", "Same"],
    ["Así", "Like this"],
    ["También", "Also"],
    ["Hasta", "Until, Even"],
    ["Grande", "Large"],
    ["Pequeño", "Small"],
    ["Bien", "Well"],
    ["Poco", "A little bit"],
    ["Siempre", "Always"],
    ["Nunca", "Never"],
    ["Cada", "Each"],
    ["Nuevo", "New"],
    ["Antigua", "Old"],
    ["Bueno", "Good"],
    ["Mal", "Bad"],
    ["Alto", "High"],
    ["Bajo", "Low"],
    ["Lejos", "Far"],
    ["Cerca", "Near"],
    ["Hermosa", "Beautiful"],
    ["Feo", "Ugly"],
    ["Difícil", "Difficult"],
    ["Fácil", "Easy"],
];


data.verbs = {};

data.verbs.common = [
    ["Ser", "To be (permanent)"],
    ["Estar", "To be (non-permanent)"],
    ["Haber", "To have”, “To exist"],
    ["Tener", "To have”, “To own"],
    ["Hacer", "To do”, “To make"],
    ["Poder", "Can do"],
    ["Ver", "To see"],
    ["Ir", "To go"],
    ["Dar", "To give"],
    ["Saber", "To know"],
    ["Querer", "To want”, “To love"],
    ["Creer", "To believe"],
    ["Hablar", "To talk"],
    ["Llevar", "To carry"],
    ["Encontrar", "To find"],
    ["Gustar", "To like"],
    ["Decir", "To tell"],
    ["Venir", "To come"],
    ["Pensar", "To think"],
    ["Entender", "To understand"],
    ["Leer", "To read"],
    ["Comer", "To eat"],
    ["Beber", "To drink"],
    ["Trabajar", "To work"],
    ["Usar", "To use"],
];

data.nouns = {};

data.nouns.things = [
    ["Cosa", "Thing"],
    ["Nada", "Nothing"],
    ["Algo", "Something"],
    ["Este/Esto/Esta", "This” or “This one"],
    ["Ese/ Eso/Esa", "That” or “That one"],
    ["Casa", "House"],
    ["Coche", "Car"],
    ["Idioma", "Language"],
    ["Agua", "Water"],
    ["Película", "Movie"],
    ["un lapiz", "pen"]
];

data.nouns.places = [
    ["Aquí", "Here"],
    ["Allí", "There"],
    ["Ahora", "Now"],
    ["Sitio", "Place"],
    ["Escuela", "School"],
    ["Tienda", "Shop"],
    ["Baño", "Bathroom"],
    ["Ciudad", "City"],
    ["País", "Country"],
]

data.nouns.people = [
    ["Hombre", "Man"],
    ["Mujer", "Woman"],
    ["Chico/Chica", "Boy”/”Girl"],
    ["Amigo", "Friend"],
    ["Persona", "Person"],
    ["Familia", "Family"],
];

data.nouns.time = [
    ["Vez", "One time"],
    ["Hoy", "Today"],
    ["Mañana", "Tomorrow"],
    ["Ayer", "Yesterday"],
    ["Hora", "Hour"],
    ["Año", "Year"],
    ["Día", "Day"],
    ["Semana", "Week"],
    ["Antes", "Before"],
    ["Después", "After"],
    ["Tiempo", "Time or Weather"],
];

data.nouns.other = [

];


data.nouns.food = [
    ["apple", "una manzana"],
    ["apricot", "un albaricoque"],
    ["banana", "un plátano"],
    ["blackberry", "una zarzamora"],
    ["blueberry", "un arándano"],
    ["cherry", "una cereza"],
    ["grape", "una uva"],
    ["grapefruit", "una toronja"],
    ["lemon", "un limón"],
    ["lime", "una lima"],
    ["orange", "una naranja"],
    ["peach", "un melocotón"],
    ["pear", "una pera"],
    ["plum", "una ciruela"],
    ["raspberry", "una frambuesa"],
    ["strawberry", "una fresa"],
    ["Vegetables", "  Las Verduras"],
    ["artichoke", "la alcachofa"],
    ["asparagus", "los espárragos"],
    ["beans", "las judías"],
    ["carrot", "la zanahoria"],
    ["celery", "el apio"],
    ["corn", "la mazorca"],
    ["cucumber", "el pepino"],
    ["eggplant", "la berenjena"],
    ["lettuce", "la lechuga"],
    ["mushroom", "el champiñón"],
    ["onion", "la cebolla"],
    ["peas", "los guisantes"],
    ["potato", "la patata"],
    ["radish", "el rábano"],
    ["spinach", "las espinacas"],
    ["tomato", "el tomate"],
    ["Dairy", "products   Productos lácteos"],
    ["butter", "la mantequilla"],
    ["buttermilk", "el suero de leche"],
    ["cheese", "el queso"],
    ["cream", "la nata"],
    ["cottage", "cheese el requesón"],
    ["egg", "el huevo"],
    ["ice", "cream el helado"],
    ["milk", "la leche"],
    ["yogurt", "el yogur"],
    ["Meat", "  La carne"],
    ["anchovy", "la anchoa"],
    ["beef", "la carne"],
    ["chicken", "el pollo"],
    ["fish", "el pescado"],
    ["ham", "el jamón"],
    ["lamb", "el cordero"],
    ["pork", "el cerdo"],
    ["rabbit", "el conejo"],
    ["roast", "beef el rosbif"],
    ["sausage", "la salchicha"],
    ["steak", "el biftec"],
    ["turkey", "el pavo"],
    ["veal", "la ternera"],
    ["Dessert", "  El postre"],
    ["cake", "el pastel"],
    ["candy", "el dulce"],
    ["cheese", "el queso"],
    ["chocolate", "el chocolate"],
    ["cookie", "la galleta"],
    ["custard", "las natillas"],
    ["fruit", "la fruta"],
    ["ice", "cream el helado"],
    ["pie", "la tarta"],
    ["vanilla", "la vainilla"],
    ["Et", "cetera"],
    ["bread", "el pan"],
    ["fries", "las (patatas) fritas"],
    ["jam", "la mermelada"],
    ["mayonnaise", "la mayonesa"],
    ["mustard", "la mostaza"],
    ["omelet", "la tortilla (in Spain)"],
    ["pepper", "la pimienta"],
    ["rice", "el arroz"],
    ["salt", "la sal"],
    ["sugar", "el azúcar"],
    ["toast", "el pan tostado"],
];




export default data;
