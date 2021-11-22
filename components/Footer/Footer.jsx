const Footer = () => {
	return <footer>
		<div className="image"></div>
		<div className="content">
			<p className="phone">
				<a href="tel:+573134229281">3134229281</a>
				{' '}
				-
				{' '}
				<a href="tel:+573232230714">3232230714</a>
			</p>
			<br />
			<p className="direcction">CRA 51 # 71 c 27 Bogotá, D.C Colombia</p>
			<br />
			<div className="email">
				<a href="mailto:gerencia@colombiagasvehicular.co">gerencia@colombiagasvehicular.co</a>
				<a href="mailto:comercialcolombiagas1@gmail.com">comercialcolombiagas1@gmail.com</a>
			</div>
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
				color: var(--orange);
			}

			p {
				color: white;
				text-align: center;
				font-weight: 600;
			}

			.email > a {
				color: white;
				font-weight: 600;
				text-align: center;
				display: block;
				margin-bottom: .5rem;
			}

			.image {
				border: 1px solid white;
			}

		`}</style>
	</footer>
}

export default Footer