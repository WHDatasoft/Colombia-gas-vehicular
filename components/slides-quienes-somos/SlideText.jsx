const SlideText = () => {
	return <>

		<p>Somos un centro especializado en instalación de gas
			natural vehicular, con más de 15 años de trayectoria,
			pertenecemos a la red de talleres de GAS VANTI y estamos
			certificados por BUREAUVERITAS e ICONTEC.
			Lo que nos hace una marca segura, de calidad y
			comprometida con sus clientes.
		</p>

		<style jsx>{`

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.fondo {
				padding: 0;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				position: absolute;
				z-index: 3;
				background-color: var(--blue-transparent);
				color: white;
				font-size: 2rem;
				text-align: justify
			}

			p {
				color: white;
				padding: 0 20%;
				font-size: 2rem;
				text-align: center;
				line-height: 3rem;
			}

			@media screen and (max-width: 900px) {

				p {
					padding: 0 15%;
					font-size: 1.5rem;
					line-height: 2.5rem;
				}

			}

			@media screen and (max-width: 550px) {

				p {
					padding: 0 10%;
					font-size: 1rem;
					line-height: 2rem;
				}

			}

			@media screen and (max-width: 730px) {


			}

		`}</style>
	</>
}

export default SlideText