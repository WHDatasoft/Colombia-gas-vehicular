import ServicesClients from "./ServicesClients"

const MainServices = () => {

    const serviteckServices = [
        'Cambio de aceite.',
        'Cambio de aceite Wolf.',
        'Frenos.',
        'Suspensión.',
        'Cambio correa.',
        'Sincronización. ',
        'Clutch.',
        'Caja (Mantenimiento y reparación).',
        'Motor (Mantenimiento y reparación).',
        'Aditivos, químicos y bombillos.',
    ]

    const colombiagasServices = [
        'Conversión a GNV.',
        'Mantenimiento.',
        'Revisión anual.',
        'Prueba hidrostática.',
        'Venta de repuestos.',
        'Análisis de gases.',
    ]

    return <main className="container">

        {/* <ServicesClients
			background="serviteck"
			serviceList={serviteckServices}
			icon="serviteck-icon"
			whatsapp="whatsapp-left"
			color
			id="serviteck"
			whatsappUrl="https://wa.me/message/QKZG4E6O2X7VH1"
		/> */}

        <ServicesClients
            background="colombiagas"
            serviceList={colombiagasServices}
            icon="colombiagas-icon"
            whatsapp="whatsapp-right"
            reverse
            id="colombiagas"
            whatsappUrl="https://wa.me/message/NF2C4CFYJIJBG1"
        />

        <style jsx>{`

			main {
                justify-items: center;
				display: grid;
				grid-template-columns: 1fr;
				gap: 1rem;
				position: relative;
			}


			@media screen and (max-width: 900px) {
				main {
					grid-template-columns: 1fr;
				}
				
			}

		`}</style>
    </main>
}

export default MainServices