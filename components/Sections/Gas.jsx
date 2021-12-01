const Gas = ({ cilindro, metros, reemplazo, rango, cilindroNum, carNum }) => {
	return <section>
		<div className="table-wrapper">
			<table>
				<tr>
					<th>
						<h5>GAS</h5>
					</th>
					<th>
						<h5>EN METROS</h5>
					</th>
					<th>
						<h5>EN GALONES</h5>
					</th>
				</tr>
				<tr>
					<td>
						<p>{cilindro} Litros</p>
					</td>
					<td>
						<p>{metros} m³</p>
					</td>
					<td>
						<p>{reemplazo} galones</p>
					</td>
				</tr>
			</table>
			<p className="result">VEHÍCULOS CON CILINDRAJE DE <span className="range">{rango}</span></p>
		</div>

		<article className="figure-wrapper">
			<div className="gas-wrapper">
				<img src={`/img/beneficios/ahorro/${cilindroNum}.svg`} alt="" className="gas-img" />
			</div>
			<div className="car-wrapper">
				<img src={`/img/beneficios/ahorro/${carNum}.png`} alt="" className="car-img" />
			</div>

		</article>

		<style jsx>{`

			section {
				font-size: 1rem;
				display: grid;
				grid-template-columns: 1fr 1fr;
				padding: 0 12em 0 5em;
				margin-bottom: 5em;
				place-items: center;
			}

			.table-wrapper {
				display: grid;
				grid-row-gap: 2em;
			}

			table {
				text-align: center;
				font-size: 1.2em;
			}

			th {
				vertical-align: middle;
				background-color: var(--blue);
				color: white;
				padding: 1em 2em;
				border: 2px solid var(--blue);
			}

			td {
				color: var(--blue);
				background-color: white;
				padding: .5em 1em;
				border: 2px solid var(--blue);
			}

			.range {
				font-weight: 600;
			}

			.result {
				font-weight: 100;
				font-size: 1.5em;
				text-align: center;
				color: white;
				padding: 0 1em;
			}

			

			.figure-wrapper {
				position: relative;
				background-color: #fff3;
				display: grid;
				grid-template-columns: 1fr;
				padding: 2em;
				padding-right: 10em;
			}

			.gas-img {
				height: 7em;
			}

			.car-img {
				height: 100%;
				width: 100%;
				object-fit: contain;
				background: white;
				border-radius: 50%;
				border: 2px solid var(--blue);
			}

			.car-wrapper {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				background-color: var(--intermediate-gren);
				padding: 1em;
				border-radius: 50%;
				height: 14em;
				width: 14em;
				display: grid;
				place-items: center;
				right: -8em;
			}

			@media screen and (max-width: 1500px) {
				section {
					font-size: .9rem;
				}
			}

			@media screen and (max-width: 1350px) {
				section {
					font-size: .8rem;
				}
			}

			@media screen and (max-width: 1200px) {
				section {
					font-size: .7rem;
				}
			}

			@media screen and (max-width: 1050px) {
				section {
					font-size: 1rem;
					grid-template-columns: 1fr;
					padding: 0 5em;
					grid-row-gap: 2em;	
					margin-bottom: 10em;
				}

				.figure-wrapper {
					padding: 2em;
					grid-row-gap: 2em;
				}

				.car-wrapper {
					justify-self: center;
					position: relative;
					top: auto;
					right: auto;
					transform: translate(0);
				}
			}

			@media screen and (max-width: 570px) {
				section {
					font-size: .8rem;
					padding: 0;
				}

				.gas-wrapper {
					justify-self: center;
				}

				.table-wrapper, .figure-wrapper {
					width: 100%
				}

			}

			@media screen and (max-width: 570px) {

				section {
					font-size: .7rem;
				}

			}

			@media screen and (max-width: 330px) {

				section {
					font-size: .6rem;
				}

			}

		`}</style>
	</section>
}

export default Gas