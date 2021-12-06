const Footer = () => {
	return <footer>
		<div className="image"></div>
		<div className="content">
			<p className="phone">
				<a href="tel:+573134229281">313 422 9281</a>
				{' '}
				-
				{' '}
				<a href="tel:+573232230714">323 223 0740</a>
			</p>
			<br />
			<p className="direcction">CRA 51 # 71 c 27 Bogotá, D.C Colombia</p>
			<br />

			<ul className="email">
				<li>
					<h5>Gerencia</h5>
					<a href="mailto:gerencia@colombiagasvehicular.co">gerencia@colombiagasvehicular.co</a>
				</li>
				<li>
					<h5>Servicio al cliente</h5>
					<a href="mailto:servicioalcliente@colombiagasvehicular.co">servicioalcliente@colombiagasvehicular.co</a>
				</li>
				<li>
					<h5>Marketing</h5>
					<a href="mailto:marketing@colombiagasvehicular.co">marketing@colombiagasvehicular.co</a>
				</li>
			</ul>
		</div>
		<br />

		<style jsx>{`

			footer {
				position: relative;
				z-index: 1;
				display: grid;
				grid-template-columns: 1fr 3fr 1fr;
				justify-content: center;
				border: 1px solid white;
				padding: 2rem;
				grid-column-gap: 2rem;
			}

			.phone {
				font-weight: 900;
				font-size: 2rem;
				color: white;
				margin-bottom: 0rem;
			}

			p {
				color: white;
				text-align: center;
				font-weight: 600;
				margin-bottom: 1.5rem;
			}

			h5 {
				color: white;
				font-weight: 600;
				margin-bottom: .5rem;
			}

			ul {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 1rem;
			}

			li {
				text-align: center;
			}

			.email li a {
				color: white;
				text-align: center;
				margin-bottom: .5rem;
			}

			.image {
				border: 1px solid white;
			}

			@media screen and (max-width: 1190px) {

				ul {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
				}

			}

			@media screen and (max-width: 780px) {
				
				footer {
					grid-template-columns: 1fr;
					
				}

				.image {
					justify-self: center;
					width: 5rem;
					height: 5rem;
					margin-bottom: 2rem;
				}
				
			}

		`}</style>
	</footer>
}

export default Footer