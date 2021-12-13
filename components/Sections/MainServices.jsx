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
		'Prueba hidrostática.Venta de repuestos.',
		'Análisis de gases.',
	]

	return <main className="container">

		<ServicesClients
			background="serviteck"
			serviceList={serviteckServices}
			icon="serviteck-icon"
			whatsapp="whatsapp-left"
			color
		/>

		<ServicesClients
			background="colombiagas"
			serviceList={colombiagasServices}
			icon="colombiagas-icon"
			whatsapp="whatsapp-right"
			reverse
		/>

		<style jsx>{`

			main {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 1rem;
				position: relative;
			}

		`}</style>
	</main>
}

export default MainServices