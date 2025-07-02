export const programmingTerms = [
  {
    id: "1",
    term: "Algoritmo",
    definition:
      "Un procedimiento o fórmula paso a paso para resolver un problema. En programación, los algoritmos se utilizan para realizar cálculos, procesamiento de datos y tareas de razonamiento automatizado.",
    category: "Algoritmos",
    example: "Algoritmo de búsqueda binaria para encontrar un elemento en un array ordenado",
  },
  {
    id: "2",
    term: "API",
    definition:
      "Interfaz de Programación de Aplicaciones: un conjunto de reglas y protocolos que permite que diferentes aplicaciones de software se comuniquen entre sí.",
    category: "Desarrollo Web",
    example: "Endpoints de API REST como GET /usuarios o POST /pedidos",
  },
  {
    id: "3",
    term: "Array",
    definition:
      "Una estructura de datos que almacena múltiples elementos del mismo tipo de forma secuencial, accesibles por posiciones de índice.",
    category: "Estructuras de Datos",
    example: "let numeros = [1, 2, 3, 4, 5]",
  },
  {
    id: "4",
    term: "Booleano",
    definition:
      "Un tipo de dato que solo puede tener uno de dos valores: verdadero o falso. Nombrado en honor al matemático George Boole.",
    category: "Tipos de Datos",
    example: "let estaActivo = true; let estaCompleto = false;",
  },
  {
    id: "5",
    term: "Bug",
    definition:
      "Un error, fallo o defecto en un programa de computadora que hace que produzca resultados incorrectos o inesperados.",
    category: "Depuración",
    example: "Error de off-by-one que causa un índice de array fuera de los límites",
  },
  {
    id: "6",
    term: "Clase",
    definition:
      "Un plano o plantilla para crear objetos en la programación orientada a objetos. Define propiedades y métodos que tendrán los objetos de esa clase.",
    category: "POO",
    example:
      "class Coche { constructor(marca, modelo) { this.marca = marca; this.modelo = modelo; } }",
  },
  {
    id: "7",
    term: "Compilador",
    definition:
      "Un programa que traduce el código fuente escrito en un lenguaje de programación de alto nivel a código máquina u otro lenguaje de programación.",
    category: "Conceptos de Programación",
    example: "Compilador GCC que convierte código C++ a código máquina ejecutable",
  },
  {
    id: "8",
    term: "CSS",
    definition:
      "Hojas de Estilo en Cascada: un lenguaje de hojas de estilo utilizado para describir la presentación y el estilo de los documentos HTML.",
    category: "Desarrollo Web",
    example: ".boton { background-color: blue; color: white; }",
  },
  {
    id: "9",
    term: "Base de Datos",
    definition:
      "Una colección organizada de información o datos estructurados, generalmente almacenados electrónicamente en un sistema informático y gestionados por un sistema de gestión de bases de datos (SGBD).",
    category: "Bases de Datos",
    example: "MySQL, PostgreSQL, MongoDB",
  },
  {
    id: "10",
    term: "Depuración",
    definition:
      "El proceso de encontrar y corregir errores o fallos en el código de un programa de computadora.",
    category: "Depuración",
    example:
      "Uso de sentencias console.log() o puntos de interrupción para rastrear la ejecución del programa",
  },
  {
    id: "11",
    term: "Función",
    definition:
      "Un bloque de código reutilizable que realiza una tarea específica. Las funciones pueden aceptar parámetros de entrada y devolver valores de salida.",
    category: "Conceptos de Programación",
    example: "function sumar(a, b) { return a + b; }",
  },
  {
    id: "12",
    term: "Git",
    definition:
      "Un sistema de control de versiones distribuido que se utiliza para rastrear los cambios en el código fuente durante el desarrollo de software.",
    category: "Herramientas",
    example: "git commit -m 'Añadir nueva funcionalidad' && git push origin main",
  },
  {
    id: "13",
    term: "HTML",
    definition:
      "Lenguaje de Marcado de Hipertexto: el lenguaje de marcado estándar utilizado para crear páginas web y aplicaciones web.",
    category: "Desarrollo Web",
    example: "<h1>Hola Mundo</h1><p>Esto es un párrafo.</p>",
  },
  {
    id: "14",
    term: "IDE",
    definition:
      "Entorno de Desarrollo Integrado: una aplicación de software que proporciona instalaciones completas para el desarrollo de software, incluido un editor de código, un depurador y herramientas de automatización de compilación.",
    category: "Herramientas",
    example: "Visual Studio Code, IntelliJ IDEA, Eclipse",
  },
  {
    id: "15",
    term: "JavaScript",
    definition:
      "Un lenguaje de programación interpretado de alto nivel que se utiliza principalmente para el desarrollo web para crear páginas web interactivas y dinámicas.",
    category: "Lenguajes de Programación",
    example:
      "document.getElementById('miBoton').addEventListener('click', manejarClick);",
  },
  {
    id: "16",
    term: "JSON",
    definition:
      "Notación de Objetos de JavaScript: un formato de intercambio de datos ligero y basado en texto que es fácil de leer y escribir para los humanos.",
    category: "Formatos de Datos",
    example: '{ "nombre": "Juan", "edad": 30, "ciudad": "Nueva York" }',
  },
  {
    id: "17",
    term: "Bucle",
    definition:
      "Una construcción de programación que ejecuta repetidamente un bloque de código mientras una condición especificada sea verdadera.",
    category: "Conceptos de Programación",
    example: "for (let i = 0; i < 10; i++) { console.log(i); }",
  },
  {
    id: "18",
    term: "Objeto",
    definition:
      "Una estructura de datos que contiene datos (propiedades) y código (métodos). En la programación orientada a objetos, los objetos son instancias de clases.",
    category: "POO",
    example:
      "let persona = { nombre: 'Alicia', edad: 25, saludar() { console.log('¡Hola!'); } }",
  },
  {
    id: "19",
    term: "React",
    definition:
      "Una biblioteca de JavaScript para construir interfaces de usuario, particularmente aplicaciones web. Utiliza una arquitectura basada en componentes y un DOM virtual.",
    category: "Frameworks",
    example:
      "function Bienvenida(props) { return <h1>¡Hola, {props.nombre}!</h1>; }",
  },
  {
    id: "20",
    term: "Recursión",
    definition:
      "Una técnica de programación en la que una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños y similares.",
    category: "Algoritmos",
    example:
      "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
  },
  {
    id: "21",
    term: "SQL",
    definition:
      "Lenguaje de Consulta Estructurado: un lenguaje de programación diseñado para gestionar y manipular bases de datos relacionales.",
    category: "Bases de Datos",
    example: "SELECT * FROM usuarios WHERE edad > 18 ORDER BY nombre;",
  },
  {
    id: "22",
    term: "Cadena",
    definition:
      "Un tipo de dato que se utiliza para representar texto, que consiste en una secuencia de caracteres.",
    category: "Tipos de Datos",
    example: "let saludo = '¡Hola, Mundo!'; let nombre = \"Alicia\";",
  },
  {
    id: "23",
    term: "Variable",
    definition:
      "Una ubicación de almacenamiento con nombre en la memoria de la computadora que contiene un valor que se puede cambiar durante la ejecución del programa.",
    category: "Conceptos de Programación",
    example: "let contador = 0; const PI = 3.14159; var mensaje = 'Hola';",
  },
  {
    id: "24",
    term: "Framework",
    definition:
      "Una estructura de código preescrita que proporciona una base para desarrollar aplicaciones de software, ofreciendo componentes reutilizables y formas estandarizadas de construir y desplegar aplicaciones.",
    category: "Frameworks",
    example:
      "React, Angular, Vue.js para frontend; Express.js, Django, Rails para backend",
  },
];