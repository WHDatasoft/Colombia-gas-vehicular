const SlideText = () => {
	return <div className="fondo">

		<p>Somos un centro especializado en instalación de gas
			natural vehicular, con más de 15 años de trayectoria,
			pertenecemos a la red de talleres de GAS VANTI y estamos
			certificados por BUREAUVERITAS e ICONTEC.
			Lo que nos hace una marca segura, de calidad y
			comprometida con sus clientes.
		</p>

		<style jsx>{`

			.fondo {
				box-sizing: border-box;
				height: calc(100%);
				background-color: var(--blue-transparent);
				color: white;
				font-size: 2rem;
				text-align: justify;
				padding: 2rem;
				display: grid;
				place-items: center;
				align-self: center;
			}

			p {
				color: white;
				font-size: 2rem;
				text-align: center;
				line-height: 3rem;
				padding: 0 10%;
			}

			@media screen and (max-width: 900px) {

				p {
					font-size: 2rem;
					line-height: 2.5rem;
				}

			}

			@media screen and (max-width: 730px) {
				.fondo {
					background-color: unset;
					padding: 0;
				}
			}

			@media screen and (max-width: 550px) {

				p {
					font-size: 1.7rem;
					line-height: 2rem;
				}

			}

			@media screen and (max-width: 450px) {

				p {
					font-size: 1.2rem;
					line-height: 2rem;
				}

			}

		`}</style>
	</ div>
}

export default SlideText