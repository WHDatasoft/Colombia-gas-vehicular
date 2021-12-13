const ClientMain = ({ urlImg, backgroundColor, children, rowGap }) => {
	return <section>

		<header>
			<div className="cuadro"></div>
			<div className="content">
				<img src="/icon/hoja-circle.svg" alt="" className="hoja-circle" />
				{
					children
				}
			</div>
		</header>

		<style jsx>{`

			section {
				background: url('/img/clientes/${urlImg}.jpg') center 20%;
				background-size: cover;
				background-position: 70%;
				height: 40rem;
				position: relative;
			}

			header {
				height: 100%;
				width: 45%;
				background-color: ${backgroundColor};
				position: relative;
				display: grid;
				place-items: center;
				justify-content: center;
			}

			.cuadro {
				position: absolute;
				height: 80%;
				width: 7em;
				border: 2px solid white;
				right: 0;
				top: 50%;
				transform: translate(60%, -50%);
				
			}

			.hoja-circle {
				width: 7em;
			}

			.content {
				font-size: 1rem;
				display: grid;
				justify-items: center;
				grid-row-gap: ${rowGap}em;
				padding: 4em;
			}

			@media screen and (max-width: 870px) {
				header {
					width: 50%;
				}

			}

			@media screen and (max-width: 715px) {
				.cuadro {
					display: none;
				}
			}

			@media screen and (max-width: 550px) {
				header {
					width: 100%;
				}

				.content {
					padding: 2rem;
				}

				.hoja-circle {
					width: 6em;
				}
			}

		`}</style>
	</section>
}

export default ClientMain