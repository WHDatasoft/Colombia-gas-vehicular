const PayTable = () => {
	return <section>

		<p>Adicionalmente cada cliente tiene un valor a financiar preaprobado hasta 24 meses según el estrato:</p>

		<table>
			<tr>
				<th>
					<h3>Plazo</h3>
				</th>
				<th>
					<h3>Estrato</h3>
				</th>
				<th>
					<h3>Valor 2020</h3>
				</th>
			</tr>
			<tr>
				<td rowspan="6">
					<span className="weight-bold">De 1 a 36 meses</span>
				</td>
				<td>
					<span>Estrato 1</span>
				</td>
				<td>
					<span>$ 1.866.196</span>
				</td>
			</tr>
			<tr>
				<td>
					<span>Estrato 2</span>
				</td>
				<td>
					<span>$ 1.791.491</span>
				</td>
			</tr>
			<tr>
				<td>
					<span>Estrato 3</span>
				</td>
				<td>
					<span>$ 3.345.553</span>
				</td>
			</tr>
			<tr>
				<td>
					<span>Estrato 4</span>
				</td>
				<td>
					<span>$ 3.345.553</span>
				</td>
			</tr>
			<tr>
				<td>
					<span>Estrato 5</span>
				</td>
				<td>
					<span>$ 3.772.526</span>
				</td>
			</tr>
			<tr>
				<td>
					<span>Estrato 6</span>
				</td>
				<td>
					<span>$ 3.772.526</span>
				</td>
			</tr>
		</table>

		<p>Para ampliar esta información comunícate al 4748800.</p>


		<style jsx>{`

			section {
				font-size: 1rem;
				padding: 0 5em;
			}
			
			table {
				margin: auto;
				background-color: white;
				color: #444;
				width: 100%;
			}

			td, th {
				vertical-align: middle;
				padding: 1.5em;
				border: 2px solid var(--blue);
				text-align: center;
			}

			th, .weight-bold {
				font-weight: 600;
				font-size: 1.4em;
			}

			td {
				font-size: 1.2em;
			}

			p {
				text-align: center;
				color: white;
				font-size: 1.5em;
				margin: 3em;
			}

			@media screen and (max-width: 730px) {
				section {
					padding: 0;
				}
			}

			@media screen and (max-width: 520px) {
				section {
					font-size: .9rem;
				}
			}

			@media screen and (max-width: 460px) {
				section {
					font-size: .8rem;
				}

				td, th {
					padding: 1em;
				}
			}

			@media screen and (max-width: 380px) {
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

export default PayTable