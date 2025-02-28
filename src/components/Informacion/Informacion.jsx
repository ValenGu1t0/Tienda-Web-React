

function Informacion() {

  return (

    <section className="flex flex-col flex-wrap items-center justify-center my-4 p-8 bg-gray-200">
            
            <div className="flex flex-row w-full items-center justify-center gap-2">
                <img className="max-w-12" src="../src/assets/img/envios.png" alt="envios" />
                <div className="flex flex-col p-4"><h3 className="font-bold textsm">Envíos</h3><p className="text-sm">Envíos a todo el mundo vía Correo Argentino</p></div>
            </div>

            <div className="flex flex-row w-full items-center justify-center gap-2">
                <img className="max-w-12" src="../src/assets/img/credit.png" alt="pagos" />
                <div className="flex flex-col p-4"><h3 className="font-bold textsm">Pagos</h3><p className="text-sm">Pagá con Crédito o Débito mediante MercadoPago</p></div>
            </div>

            <div className="flex flex-row w-full items-center justify-center gap-2">
                <img className="max-w-12" src="../src/assets/img/seguridad.png" alt="seguridad" />
                <div className="flex flex-col p-4"><h3 className="font-bold textsm">Seguridad</h3><p className="text-sm">Las transacciones de todo el sitio son 100% Seguras</p></div>
            </div>

            <div className="flex flex-row w-full items-center justify-center gap-2">
                <img className="max-w-12" src="../src/assets/img/devolucion.png" alt="devoluciones" />
                <div className="flex flex-col p-4"><h3 className="font-bold textsm">Devoluciones</h3><p className="text-sm">¿No te llegó lo que esperabas? ¡Contactanos!</p></div>
            </div>
        </section>

    )

}

export default Informacion;