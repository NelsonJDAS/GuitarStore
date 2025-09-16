import { useEffect, useState } from "react";
import Guitar from "./Guitar";

const ListaGuitarras = ({funcion, cart}) => {
    const [userLoad, setUserLoad] = useState(false)

    useEffect(() => {
        setUserLoad(true)
    }, [])

    return (
        <main className={`container-fluid w-90 mt-5 ${userLoad ? "animacion activo" : "animacion"}`}>
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    <Guitar addToCart={funcion} cart={cart} nombre="Lukather" img="/img/guitarra_01.jpg" descripcion="Sonido potente y versátil, ideal para cualquier estilo musical." precio={299.99} id="1" />

                    <Guitar addToCart={funcion} cart={cart} nombre="SRV" img="/img/guitarra_02.jpg" descripcion="Diseño clásico con acabados premium y una calidad de sonido excepcional." precio={349.99} id="2" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Borland" img="/img/guitarra_03.jpg" descripcion="Perfecta para solos y riffs, con una gran estabilidad en la afinación." precio={279.99} id="3" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Vai" img="/img/guitarra_04.jpg" descripcion="Cuerpo ligero y cómodo, ideal para largas sesiones de práctica." precio={399.99} id="4" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Thompson" img="/img/guitarra_05.jpg" descripcion="Sonido cálido y resonante, con un sustain impresionante." precio={259.99} id="5" />

                    <Guitar addToCart={funcion} cart={cart} nombre="White" img="/img/guitarra_06.jpg" descripcion="Excelente calidad de construcción con una electrónica impecable." precio={319.99} id="6" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Cobain" img="/img/guitarra_07.jpg" descripcion="Tonos profundos y expresivos, perfecta para rock y grunge." precio={289.99} id="7" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Dale" img="/img/guitarra_08.jpg" descripcion="Una joya vintage con un sonido inigualable y gran versatilidad." precio={369.99} id="8" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Krieger" img="/img/guitarra_09.jpg" descripcion="Materiales de alta calidad que garantizan un sonido envolvente." precio={409.99} id="9" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Campbell" img="/img/guitarra_10.jpg" descripcion="Diseñada para músicos exigentes que buscan lo mejor." precio={459.99} id="10" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Reed" img="/img/guitarra_11.jpg" descripcion="Una combinación perfecta entre potencia y sensibilidad sonora." precio={299.99} id="11" />

                    <Guitar addToCart={funcion} cart={cart} nombre="Hazel" img="/img/guitarra_12.jpg" descripcion="Versatilidad total, ideal para cualquier tipo de escenario." precio={329.99} id="12" />

                </div>
            </main>
    );
};

export default ListaGuitarras;