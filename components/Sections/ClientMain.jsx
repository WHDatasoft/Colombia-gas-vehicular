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
				height: 100%;
				position: relative;
			}

			header {
				height: 100%;
				width: 40%;
				background-color: ${backgroundColor};
				position: relative;
				display: grid;
				place-items: center;
				justify-content: center;
			}

			.cuadro {
				position: absolute;
				height: 80%;
				width: 7rem;
				border: 2px solid white;
				right: 0;
				top: 50%;
				transform: translate(60%, -50%);
				
			}

			.hoja-circle {
				width: 6rem;
			}

			.content {
				display: grid;
				justify-items: center;
				grid-row-gap: ${rowGap}rem;
			}

		`}</style>
	</section>
}

export default ClientMain