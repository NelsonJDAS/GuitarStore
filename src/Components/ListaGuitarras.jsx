import { useEffect, useState } from "react";
import Guitar from "./Guitar";

const ListaGuitarras = ({estado}) => {
    const [userLoad, setUserLoad] = useState(false)

    useEffect(() => {
        setUserLoad(true)
    }, [])

    return (
        <main className={`container-fluid w-90 mt-5 ${userLoad ? "animacion activo" : "animacion"}`}>
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    <Guitar nombre="Lukather" img="./public/img/guitarra_01.jpg" descripcion="Sonido potente y versátil, ideal para cualquier estilo musical." precio="$299.99" />

                    <Guitar nombre="SRV" img="./public/img/guitarra_02.jpg" descripcion="Diseño clásico con acabados premium y una calidad de sonido excepcional." precio="$349.99" />

                    <Guitar nombre="Borland" img="./public/img/guitarra_03.jpg" descripcion="Perfecta para solos y riffs, con una gran estabilidad en la afinación." precio="$279.99" />

                    <Guitar nombre="Vai" img="./public/img/guitarra_04.jpg" descripcion="Cuerpo ligero y cómodo, ideal para largas sesiones de práctica." precio="$399.99" />

                    <Guitar nombre="Thompson" img="./public/img/guitarra_05.jpg" descripcion="Sonido cálido y resonante, con un sustain impresionante." precio="$259.99" />

                    <Guitar nombre="White" img="./public/img/guitarra_06.jpg" descripcion="Excelente calidad de construcción con una electrónica impecable." precio="$319.99" />

                    <Guitar nombre="Cobain" img="./public/img/guitarra_07.jpg" descripcion="Tonos profundos y expresivos, perfecta para rock y grunge." precio="$289.99" />

                    <Guitar nombre="Dale" img="./public/img/guitarra_08.jpg" descripcion="Una joya vintage con un sonido inigualable y gran versatilidad." precio="$369.99" />

                    <Guitar nombre="Krieger" img="./public/img/guitarra_09.jpg" descripcion="Materiales de alta calidad que garantizan un sonido envolvente." precio="$409.99" />

                    <Guitar nombre="Campbell" img="./public/img/guitarra_10.jpg" descripcion="Diseñada para músicos exigentes que buscan lo mejor." precio="$459.99" />

                    <Guitar nombre="Reed" img="./public/img/guitarra_11.jpg" descripcion="Una combinación perfecta entre potencia y sensibilidad sonora." precio="$299.99" />

                    <Guitar nombre="Hazel" img="./public/img/guitarra_12.jpg" descripcion="Versatilidad total, ideal para cualquier tipo de escenario." precio="$329.99" />

                </div>
            </main>
    );
};

export default ListaGuitarras;