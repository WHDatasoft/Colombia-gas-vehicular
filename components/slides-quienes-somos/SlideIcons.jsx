const SlideIcons = () => {
	return <>
		<div>
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
				color: white;
				text-align: center;
				font-size: 2.5rem;
				margin-bottom: 2rem;
				padding: 0 1rem;
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

				.icons div:nth-child(3) {
					grid-column: 1/3;
				}

				.icons {
					grid-template-columns: 1fr 1fr;
					padding-top: 1rem;
					grid-row-gap: 1rem;
				}

			}
			
			@media screen and (max-width: 500px) {

				.icon {
					height: 8rem;
				}

				.icons div:nth-child(3) {
					grid-column: 1/2;
				}

				.icons {
					grid-template-columns: 1fr;
					padding-top: 1rem;
					grid-row-gap: 1rem;
				}

			}



		`}</style>
	</>
}

export default SlideIcons