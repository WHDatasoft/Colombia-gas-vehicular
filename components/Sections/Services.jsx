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
				background: white url('/img/banner/banner-fondo-oscuro.webp') no-repeat right;
				background-size: cover;
				text-align: center;
				color: white;
				padding: 2rem;
				margin-bottom: 2rem;
			}

			

			p, h3 {
				height: var(--height);
				text-align: center;
				align-self: center;
				color: white;
				font-size: 1.3rem;
				display: grid;
				place-items: center;
				padding-right: 7rem;
				padding-left: 7rem;
			}

			h3 {
				font-size: 1.7rem;
				font-weight: 700;
				margin-bottom: 2rem;
			}

			@media screen and (max-width: 730px) {

				section {
					background: white url('/img/banner/banner-fondo-oscuro.webp') no-repeat center;
				}

				p, h3 {
					padding-right: 2rem;
					padding-left: 2rem;
				}

				p {
					text-align: center;
					font-size: 1rem;
				}
			}


		`}</style>
    </section>
}

export default Services