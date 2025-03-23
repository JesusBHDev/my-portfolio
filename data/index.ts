export const navItems = [
  { name: "Presentacion", link: "#presentacion" },
  { name: "Proyectos", link: "#projects" },
  { name: "Mas", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Desarrollo de aplicaciones web 🌐🚀",
    description: "💻✨",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Una aplicacion disponible en cualquier dispositivo",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mis tecnologias mas utilizadas",
    description: "IA 😀",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "💻 Pasión por la programación desde el primer día 🚀",
    description:
      "A lo largo del camino, he explorado múltiples lenguajes y tecnologías. 🔥",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Aplicaciones web y mas",
    description: "De todo un poco😉",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Necesitas ayuda en algo",
    description: "📧",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Desarrollo de Backend",
    des: "Implementación de APIs REST utilizando el patrón MVC, con métodos GET, DELETE y UPDATE para la base de datos de MongoDB, ademas de convertir la aplicacion en una PWA de ReactJs.",

    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/node.webp", "/mongo.webp", "/firebase.webp"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Mi Portafolio 🧰",
    des: "Lo desarrolle con NextJS, Framer Motion y Sentry, para probar un framework Nuevo lo ire mejorando mas",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/git.webp", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "Video Juego en unity 2D",
    des: "No se como!!!🤣 pero pude desarrollar un videojuego en unity 2D te invito a desacargarlo y jugarlo en pc",
    img: "/p3.svg",
    iconLists: ["/unity.webp", "/c.webp", "/git.webp", "/git.webp", "/git.webp"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Python",
    des: "Desarrolle modelos de aprendizaje y desarrolle un modelo de recomendaciones con regla de asociacion",
    img: "/p4.svg",
    iconLists: ["/python.png", "/jupiter.png", "/git.webp", "/git.webp", "/git.webp"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Desarrolle aplicaciones IOT en Arduino con el lenguaje C++ y programando LA ESP32 Wi-Fi & Bluetooth",
    name: "Internet de las cosas",
    title: "IOT",
  },
  {
    quote:
      "Desarrolle aplicaciones con interfaz en Java, vi los conceptos basicos de Pilas, colas, arreglos, Matrices, Arboles, Nodos 🫠",
    name: "Java",
    title: "Estructura de datos",
  },
  {
    quote:
      "He trabajado con Laravel para hacer un catalogo de productos",
    name: "Laravel",
    title: "Framework",
  },
 
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo de aplicaciones web",
    desc: "Realizar diferentes tipos de aplicaciones web",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Reparacion de sotfware",
    desc: "Instalacion de windows instalacion de programas",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Reparaciones de sotware",
    desc: "Recuperacion de cuenta, Activacion de windows ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Ayuda",
    desc: "Necesitas ayuda en algo?",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
