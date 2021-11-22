const Services = ({ title, text }) => {
	return <section>
		{
			title
				?
				<h3>{title}</h3>
				:
				''
		}
		<p>{text}</p>

		<style jsx>{`

			section {
				position: relative;
				background: white url('/img/banner/banner-fondo-oscuro.png') no-repeat;
				background-size: cover;
				text-align: center;
				color: white;
				padding: 2rem;
				margin-bottom: 2rem;
			}

			h3 {
				font-size: 1.7rem;
				font-weight: 700;
				margin-bottom: 2rem;
			}

			p {
				width: 40rem;
				margin: auto;
			}


		`}</style>
	</section>
}

export default Services