const SlideText = () => {
	return <>

		<img src="/img/colombiagas/slide-segunda.png" alt="" />
		<div className="fondo">
			<p>Somos un centro especializado en instalación de gas
				natural vehicular, con más de 15 años de trayectoria,
				pertenecemos a la red de talleres de GAS VANTI y estamos
				certificados por BUREAUVERITAS e ICONTEC.
				Lo que nos hace una marca segura, de calidad y
				comprometida con sus clientes.
			</p>
		</div>

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
				box-sizing: border-box;
				padding: 10% 15%;
				width: 80vw;	
			}

			@media screen and (max-width: 1070px) {

				.fondo {
					font-size: 1.7rem;
					line-height: 1.5rem;
				}

			}

			@media screen and (max-width: 730px) {

				.fondo {
					font-size: 1.3rem;
					font-weight: 600;
				}

			}

			@media screen and (max-width: 730px) {

				.fondo {
					font-size: 1rem;
					font-weight: 600;
				}

			}

		`}</style>
	</>
}

export default SlideText