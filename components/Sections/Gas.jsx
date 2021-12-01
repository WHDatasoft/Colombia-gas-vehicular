const Gas = ({ cilindro, metros, reemplazo, rango, cilindroNum, carNum }) => {
	return <section>
		<div className="table-wrapper">
			<table>
				<tr>
					<th>
						<h5>CILINDRO</h5>
					</th>
					<th>
						<h5>METROS</h5>
					</th>
					<th>
						<h5>REEMPLAZO DE GALONES</h5>
					</th>
				</tr>
				<tr>
					<td>
						<p>{cilindro}</p>
					</td>
					<td>
						<p>{metros}</p>
					</td>
					<td>
						<p>{reemplazo} galones</p>
					</td>
				</tr>
			</table>
			<p className="result">VEHÍCULOS CON CILINDRAJE DE {rango}</p>
		</div>

		<article className="figure">
			<div className="gas-wrapper">
				<img src={`/img/beneficios/ahorro/${cilindroNum}.svg`} alt="" className="gas-img" />
			</div>
			<div className="car-wrapper">
				<img src={`/img/beneficios/ahorro/${carNum}.png`} alt="" className="car-img" />
			</div>

		</article>

		<style jsx>{`

			section {
				display: grid;
				grid-template-columns: 1fr 1fr;
				padding: 0 12rem 0 5rem;
				margin-bottom: 5rem;
				place-items: center;
			}

			.table-wrapper {
				display: grid;
				grid-row-gap: 1rem;
			}

			table {
				text-align: center;
			}

			th {
				background-color: var(--blue);
				color: white;
				padding: .5rem 1rem;
				border: 2px solid var(--blue);
			}

			td {
				color: var(--blue);
				background-color: white;
				padding: .5rem 1rem;
				border: 2px solid var(--blue);
			}

			.result {
				text-align: center;
				color: white;
			}

			

			.figure {
				position: relative;
				background-color: #fff3;
				display: grid;
				grid-template-columns: 1fr 1fr;
				place-items: center;
				padding: 2rem;
			}

			.gas-img {
				height: 7rem;
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
				background-color: var(--intermediate-gren);
				padding: 1rem;
				border-radius: 50%;
				height: 14rem;
				width: 14rem;
				display: grid;
				place-items: center;
				right: -8rem;
			}

		`}</style>
	</section>
}

export default Gas