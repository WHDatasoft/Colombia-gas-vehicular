const SlideIcons = () => {
	return <>
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
				width: 80vw;
				
			}

			h2 {
				color: white;
				text-align: center;
				font-size: 2.5rem;
				margin-bottom: 2rem;
				padding: 0 1rem;
				align-self: flex-end;
			}

			h4 {
				color: white;
				margin-top: .5rem;
				text-align: center;
				font-size: 1.5rem;
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

			}

			@media screen and (max-width: 730px) {

				.fondo {
					background-color: unset;
				}

				.icons div:nth-child(3) {
					grid-column: 1/3;
				}

				.icons {
					grid-template-columns: 1fr 1fr;
					grid-row-gap: 1rem;
				}

			}
			
			@media screen and (max-width: 500px) {

				.icon {
					height: 8rem;
				}

					h2 {
					margin-bottom: 1rem;
				}

			}

			@media screen and (max-width: 370px) {

				.icon {
					height: 6rem;
				}
				
			}



		`}</style>
	</>
}

export default SlideIcons