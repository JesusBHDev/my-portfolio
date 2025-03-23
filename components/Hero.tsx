import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            {/* Este es codigo hace que se vean las luces que se muestran hasta arriba*/}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            {/* Este es el fondod cuadriculado de la pagina*/}
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">

                <div className="absolute pointer-events-none inset-0 flex items-center 
                justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

            </div>
            {/* Es el texto sobre el fondo de cuadradriculas arriba pequeño*/}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Mexicano 🌮
                    </p>
                    {/* aqui se coloca el texto que ira apareciendo en la pantalla caambiara de color con la funcion renderWords */}
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Hola Bienvenido Me llamo Jesus Ivan soy Ing en programacion ❤️🧑‍💻 ' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl '>
                    DevShadow
                    </p>
                    <a href="#about">
                        {/* posicion del icono del boton*/}
                        <MagicButton
                            title="¿Que es lo que hago?"
                            icon={<FaLocationArrow />}
                            position='left'

                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero