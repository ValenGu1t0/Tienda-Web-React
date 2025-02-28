

function Inicio() {

  return (

    <main>
        {/* Imagen de Portada */}
        <img className="block w-full" src="../src/assets/img/portada.webp" alt="Imagen Portada"/>

        {/* Inicio de la Página + Presentación */}
        <section className="flex flex-col justify-center items-center text-justify p-8 gap-6 w-full">
                <img id="ubicacion" className="hidden mr-4 max-w-14" src="../src/assets/img/d20.png" alt="icono pagina"/>
                <h2 className="h2 text-3xl font-bold">Somos Cartones y Mazmorras</h2>
                <p>Ubicada en el corazón de Buenos Aires, nuestra tienda nació de la pasión por los juegos y las historias que los unen. Desde hace más de 5 años, hemos sido el punto de encuentro para entusiastas del Trading Card Game y juegos de mesa, creando un espacio donde las estrategias y la diversión cobran vida. Fundada por un grupo de amigos con amor por la cultura geek, nuestra misión siempre ha sido ofrecer no solo los mejores productos, sino también experiencias inolvidables para nuestra comunidad. <br/><br/> En nuestra tienda encontrarás una amplia selección de cartas coleccionables, juegos de mesa para todas las edades y niveles, además de un espacio dedicado para torneos y eventos temáticos. Nos enorgullece ser un lugar donde principiantes y expertos se sienten como en casa. Ya sea que busques expandir tu colección, aprender un nuevo juego o simplemente disfrutar una tarde entre amigos, estamos aquí para ayudarte a crear recuerdos épicos.</p>
                <img className="w-full" src="../src/assets/img/ubi.webp" alt="mapa lugar"/>
        </section>
    </main>
  )

}

export default Inicio;