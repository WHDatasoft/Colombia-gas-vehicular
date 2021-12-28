const GnvInfo = () => {
	return <section>

		<header>
			<div className="wrapper">
				<div className="title">
					<span className="number">8</span>
					<h2>
						<span className="space">----</span> pasos para <br /> <span className="space">--</span> instalar
					</h2>
				</div>
				<img src="/icon/GNV-blue.svg" alt="" className="gnv" />
			</div>
		</header>
		<div className="transparent"></div>
		<div className="info-wrapper">
			<img src="/logo/logo-vanti.svg" alt="" className="logo-vanti" />
			<img src="/img/servicios/InfografiaGNV.jpg" alt="" className="info" />
		</div>

		<style jsx>{`

			section {
				font-size: 1rem;
				display: grid;
				grid-template-columns: auto 1rem 1fr;
			}

			header {
				background-color: var(--smoth-green);
				display: grid;
				place-items: center;
			}

			.wrapper {
				display: grid;
				place-items: center;
				grid-row-gap: 3em;
				margin: 0 10em;
			}

			.title {
				position: relative;
			}

			h2 {
				color: var(--blue);
				font-size: 3.5em;
				line-height: .8em;
				position: relative;
			}

			.number {
				font-weight: 600;
				color: white;
				font-size: 12em;
				position: absolute;
				left: 0em;
				top: -0.5em;
			}

			.space {
				color: transparent;
			}

			.gnv {
				width: 18em;
			}

			.info-wrapper {
				position: relative;
			}

			.info {
				width: 100%;
			}

			.logo-vanti {
				position: absolute;
				right: 5em;
				top: 5em;
				height: 5em;
			}

			@media screen and (max-width: 1550px) {
				section {
					font-size: 0.8rem;
				}
			}

			@media screen and (max-width: 1300px) {
				section {
					font-size: 0.7rem;
				}
			}

			@media screen and (max-width: 1150px) {
				section {
					font-size: 0.5rem;
				}

				.wrapper {
					margin: 0 8.5em;
				}
			}

			@media screen and (max-width: 1000px) {
				section {
					font-size: 0.4rem;
				}
			}

			@media screen and (max-width: 850px) {
				section {
					grid-template-columns: 1fr;
				}

				header {
					padding-bottom: 2em;
					padding-top: 8em;
				}

				.transparent {
					height: 1.5em;
				}

			}
			
			@media screen and (max-width: 450px) {

				.logo-vanti {
					right: 3em;
					top: 3em;
				}
			}

		`}</style>

	</section>
}

export default GnvInfo