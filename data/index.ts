export const navItems = [
  { name: "Presentacion", link: "#presentacion" },
  { name: "Proyectos", link: "#projects" },
  { name: "Mas", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {// el cMPO spareImg SON SOLO CUADRITOS sobre la imagen 
    id: 1,
    title: "Me gusta programar aplicaciones de cualquier tipo, pero he trabajado mas con aplicaciones web",
    description: "Ingeniero en Desarrollo de Software",    
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponible en un navegador y conexion a internet",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "A lo largo del camino, he explorado múltiples lenguajes y tecnologías. 🔥",
    description: "IA 😀",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Amable, carismatico, alegre en busca de la soluciono de bugs",
    description:"",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute inset-0 w-full h-full object-cover",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "imagen1.webp",
    spareImg: "",
  },
  {
    id: 6,
    title: "Necesitas ayuda en algo",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "text-black dark:text-white",
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
      "He trabajado con IoT utilizando el IDE de Arduino para la placa de desarrollo ESP32. Implementé sensores como el ultrasonido, temperatura,  así como actuadores como motores, LEDs y pantallas LCD. Tengo conocimientos básicos en el desarrollo y control de estos dispositivos. y envio de datos en wifi aun tengo mis herramientas tal vez arme algo ¿¿¿¿???",
    name: "IoT y Arduino",
    title: "Desarrollo de Hardware",
  },
  {
    quote:
      "Tengo experiencia en el desarrollo de aplicaciones utilizando .NET Framework, incluyendo aplicaciones Windows Forms (PWF) y servicios básicos de Windows.",
    name: "Desarrollo con .NET",
    title: ".NET Framework",
  },
  {
    quote:
      "He desarrollado aplicaciones con interfaz gráfica en Java y estudiado estructuras de datos fundamentales como pilas, colas, arreglos, matrices, árboles y nodos. También tengo conocimientos básicos",
    name: "Java y Estructuras de Datos",
    title: "Desarrollo en Java",
  },
  {
    quote:
      "Poseo conocimientos en comandos básicos de Linux en distribuciones como Debian y Ubuntu. he utilizando un poquito de Cisco Packet Tracer, aunque actualmente no lo utilizo con frecuencia.",
    name: "Linux y Redes",
    title: "Administración de Sistemas",
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
