const SlideIcons = () => {
	return <>

		<img src="/img/colombiagas/tercera.jpg" alt="" loading="lazy" />
		<div className="fondo">
			<h2>OBJETIVOS CLAVES</h2>
			<div className="icons">
				<div>
					<img className="icon" src="/icon/car.svg" alt="" />
					<h4>Garantía</h4>
				</div>
				<div>
					<img className="icon" src="/icon/money.svg" alt="" />
					<h4>Ahorro</h4>
				</div>
				<div>
					<img className="icon" src="/icon/green.svg" alt="" />
					<h4>Cuidado</h4>
				</div>
			</div>
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

			.icon {
				display: block;
				margin: auto;
				height: 15rem;
				width: auto;
			}

			.icons {
				box-sizing: border-box;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				justify-items: center;
				padding-bottom: 3%;
				padding-top: 2rem;
				width: 80vw;
				
			}

			h2 {
				padding-top: 3%;
				text-align: center;
			}

			h4 {
				margin-top: .5rem;
				text-align: center;
			}

			@media screen and (max-width: 1300px) {
				.icon {
					height: 11rem;
				}
			}

			@media screen and (max-width: 1070px) {

				.icon {
					height: 10rem;
				}

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

				.icon {
					height: 6rem;
				}

			}

			@media screen and (max-width: 730px) {

				.fondo {
					font-size: 1rem;
					font-weight: 600;
				}

			}

			
			@media screen and (max-width: 500px) {

				.icon {
					height: 4.5rem;
				}

				.icons {
					grid-template-columns: 1fr 1fr;
					padding-top: 1rem;
					grid-row-gap: 1rem;
				}

				.icons div:nth-child(3) {
					grid-column: 1/3;
				}

			}



		`}</style>
	</>
}

export default SlideIcons