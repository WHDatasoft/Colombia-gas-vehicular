const ServicesClients = ({ background, icon, serviceList, color, reverse, whatsapp, id, whatsappUrl }) => {
    return <article>
        <div className="content">
            <header>
                <img className="icon" src={`/icon/${icon}.svg`} alt="" />
                <h3>Servicios</h3>
            </header>

            <section>
                <ul>
                    {
                        serviceList.map(service => (
                            <li key={service}>
                                {service}
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>

        {/* <footer>

            <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src={`/icon/${whatsapp}.svg`} alt="icono de contacto por whatsapp" />
            </a>

            <a className="ver-mas" href={`#${id}`}>
                <span>
                    Ver más
                </span>
                <svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>

            </a>

        </footer> */}

        <style jsx>{`

            article {
                width: 100%;
            }

			.content {
				background: url("/img/clientes/${background}.jpg") no-repeat;
				background-position: center center;
				background-size: 100% auto;
				margin: 0 auto;
				transition: background 2s;
			}

			.content:hover {
				background-size: 110% auto;
			} 

			header {
				display: grid;
				justify-items: center;
				padding: 2rem 0;
			}

			h3 {
				color: white;
				font-size: 2rem;
			}

			.icon {
				height: 15rem;
			}

			footer {
				background-color: white;
				display: grid;
				grid-template-columns: ${reverse ? '1fr auto' : 'auto 1fr'};
				gap: 4rem;
				place-items: center;
				padding: 1rem 4rem;
			}

			section {
				height: 20rem;
				background-color: #0005;
				display: grid;
				place-items: center;
			}

			ul {
				text-align: center;
				color: white;
				padding: 0 1rem;
			}

			li {
				font-size: 1.2rem;
				padding: .2rem 0;
			}

			.whatsapp {
				${reverse ? 'grid-column: 2/3;' : ''}
				width: 5rem;
			}

			.ver-mas {
				${reverse ? 'grid-column: 1/2;' : ''}
				${reverse ? 'grid-row: 1/2;' : ''}
				border: 3px solid ${color ? 'var(--light-blue)' : 'var(--light-green)'};
				text-align: center;
				border-radius: 1rem;
				padding: .5rem 1rem;
				color: ${color ? 'var(--light-blue)' : 'var(--light-green)'};
				width: 100%;
				box-sizing: border-box;
				display: grid;
				grid-template-columns: 1fr auto;
				place-items: center;
			}

			a {
				transition: transform .5s;
			}

			a:hover {
				transform: scale(1.05);
			}

			svg {
				height: .6rem;
				fill: none;
				stroke: ${color ? 'var(--light-blue)' : 'var(--light-green)'};
				stroke-miterlimit: 10;
				stroke-width: 6px;
				transform: rotate(-90deg);
				transition: transform .5s;
				animation: move-right 1s infinite alternate;
			}

			@media screen and (max-width: 1200px) {
                .content {
                    background-size: auto 100%;
                }

                .content:hover {
                    background-size: auto 110%;
                } 

			}

			@media screen and (max-width: 900px) {

				
			}


			@media screen and (max-width: 600px) {


				footer {
					gap: 1rem;
					padding: 1rem;
				}
				
			}

		`}</style>
    </article>
}

export default ServicesClients