const ServiceImg = ({ img, title }) => {
	return <section>

		<img src={`/img/beneficios/combustible/${img}`} alt="" />
		<h3>{title}</h3>

		<style jsx>{`

			section {
				background: white url('/img/banner/banner-fondo-oscuro.png') no-repeat;
				background-size: cover;
				position: relative;
				display: grid;
				grid-template-columns: auto 1fr;
				margin-bottom: 2rem;
			}

			img {
				height: 13rem;
			}

			h3 {
				text-align: center;
				align-self: center;
				font-weight: 700;
				color: white;
				font-size: 1.7rem;
			}

		`}</style>
	</section>
}

export default ServiceImg