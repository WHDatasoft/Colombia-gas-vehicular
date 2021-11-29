const ServiceImg = ({ img, title }) => {
	return <section>

		<img src={`/img/beneficios/combustible/${img}`} alt="" />
		<h3>{title}</h3>

		<style jsx>{`

			:global(:root) {
				--height: 13rem;
			}

			section {
				position: relative;
				display: grid;
				grid-template-columns: auto 1fr;
				margin-bottom: 2rem;
			}

			img {
				height: var(--height);
			}

			h3 {
				height: var(--height);
				background: white url('/img/banner/banner-fondo-oscuro.png') no-repeat right;
				background-size: cover;
				text-align: center;
				align-self: center;
				font-weight: 700;
				color: white;
				font-size: 1.7rem;
				display: grid;
				place-items: center;
				padding-right: 7rem;
				padding-left: 2rem;
			}

			@media screen and (max-width: 920px) {

				img {
					height: auto;
					width: 100%;
				}

				section {
					grid-template-columns: 1fr;
					
				}

			}

		`}</style>
	</section>
}

export default ServiceImg