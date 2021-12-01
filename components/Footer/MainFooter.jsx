import NavSocial from "../social/NavSocial"

const MainFooter = () => {
	return <footer>

		<NavSocial responsive />

		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5832112317794!2d-74.07712684958241!3d4.6681516965924725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9affbcbf0bd5%3A0x6383d3abdb90b2cf!2sColombia%20Gas%20Vehicular!5e0!3m2!1ses-419!2sco!4v1637293785155!5m2!1ses-419!2sco" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>


		<div className="info">
			<h5>Colombia Gas Vehicular S.A.S</h5>
			<p><span>NIT:</span> 900.112.735-0</p>
			<p>Cra 51 No. 71c - 27 Bogotá, D.C Colombia</p>
			<p><span>TEL:</span> 4748800</p>
			<p><span>CEL:</span> 3134229281 - 3232230740</p>
		</div>

		<style jsx>{`

			footer {
				margin-top: 1rem;
			}

			iframe {
				display: block;
				margin: auto;
				border: none;
				position: relative;
				z-index: 1;
				box-shadow: 15px 15px 25px -5px #3339;
				margin-bottom: 2rem;
			}


			.info {
				background-color: white;
				text-align: center;
				padding: 2em 1rem;
				color: var(--blue);
			}

			h5, span {
				font-weight: 600;
			}

		`}</style>
	</footer>
}

export default MainFooter