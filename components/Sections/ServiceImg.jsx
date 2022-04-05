const ServiceImg = ({ img, title, paragraph }) => {
    return <section>

        <img src={`/img/beneficios/${img}`} alt="" />
        {
            title
                ?
                <h3>{title}</h3>
                :
                ''
        }
        {
            paragraph
                ?
                <p>{paragraph}</p>
                :
                ''
        }

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

			h3, p {
				height: var(--height);
				background: white url('/img/banner/banner-fondo-oscuro.webp') no-repeat right;
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

			p {
				font-size: 1rem;
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

			@media screen and (max-width: 500px) {
				p {
					font-size: .8rem;
				}
			}
			
			@media screen and (max-width: 400px) {
				p {
					font-size: .7rem;
				}
			}
			
			@media screen and (max-width: 340px) {
				p {
					font-size: .6rem;
				}
			}

		
		`}</style>
    </section>
}

export default ServiceImg