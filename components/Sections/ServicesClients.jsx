const ServicesClients = ({ background, icon, serviceList, color, reverse, whatsapp }) => {
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
							<li>
								{service}
							</li>
						))
					}
				</ul>
			</section>
		</div>

		<footer>

			<a className="whatsapp" href="http://" target="_blank" rel="noopener noreferrer">
				<img src={`/icon/${whatsapp}.svg`} alt="icono de contacto por whatsapp" />
			</a>

			<a className="ver-mas" href="">
				Ver más
			</a>

		</footer>

		<style jsx>{`

			.content {
				background: url("/img/clientes/${background}.png");
				background-size: cover;
				margin: 0 1rem;
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
				place-items: center;
				padding: 1rem;
				
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
				padding: .5rem;
				color: ${color ? 'var(--light-blue)' : 'var(--light-green)'};
				width: 20rem;
			}

		`}</style>
	</article>
}

export default ServicesClients