

function Inicio() {

  return (

    <main>

        {/* Imagen de Portada */}
        <img className="block w-full" src="../src/assets/img/portada.webp" alt="Imagen Portada"/>

        {/* Inicio de la Página + Presentación */}
        <section className="flex flex-col justify-center items-center text-justify p-8 gap-6 w-full">
              <div className="flex flex-row items-center gap-2">
                <img id="ubicacion" className="flex mr-4 max-w-12" src="../src/assets/img/d20.png" alt="icono cartones y mazmorras" loading="lazy"/>
                <h2 className="h2 text-3xl font-bold">Somos Cartones y Mazmorras</h2>
              </div>
              <p className="text-lg">Ubicada en el corazón de Buenos Aires, nuestra tienda nació de la pasión por los juegos y las historias que los unen. Desde hace más de 5 años, hemos sido el punto de encuentro para entusiastas del Trading Card Game y juegos de mesa, creando un espacio donde las estrategias y la diversión cobran vida. Fundada por un grupo de amigos con amor por la cultura geek, nuestra misión siempre ha sido ofrecer no solo los mejores productos, sino también experiencias inolvidables para nuestra comunidad.</p>
              <img className="w-full" src="../src/assets/img/ubi.webp" alt="ubicacion local" loading="lazy"/>
        </section>

    </main>
  )
}

export default Inicio;