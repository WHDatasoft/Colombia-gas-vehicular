import Link from 'next/link'

const Nav = () => {

	const linkList = [
		{ title: 'Inicio', url: '/' },
		{ title: '¿Quiénes somos?', url: '/quienes-somos' },
		{
			title: 'servicios', url: '/servicios',
			list: [
				{ title: 'instalación GNV', url: '/servicios/instalacion-gnv' },
				{ title: 'Prueba hidrostática', url: '/servicios/prueba-hidrostatica' },
				{ title: 'Mantenimiento', url: '/servicios/mantenimiento' },
				{ title: 'Revisión anual', url: '/servicios/revision-anual' },
				{ title: 'venta de repuestos', url: '/servicios/venta-de-repuestos' },
			]
		},
		{
			title: 'Beneficios', url: '/beneficios',
			list: [
				{ title: 'Programa de salud', url: '/beneficios/programa-de-salud' },
				{ title: 'ahorro', url: '/beneficios/ahorro' },
				{ title: 'combustible', url: '/beneficios/combustible' },
				{ title: 'garantia', url: '/beneficios/garantia' },
			]

		},
		{ title: 'Clientes', url: '/clientes' },
		{ title: 'Debes saber', url: '/debes-saber' },
		{ title: 'Contáctenos', url: '/contactenos' },
	]

	return <nav>

		<ul className="main-link-list">
			{
				linkList.map(mainLink => (
					<li key={mainLink.title} className="main-link" >
						<Link href={mainLink.url}>
							<a>
								<span>
									{mainLink.title}
								</span>
							</a>
						</Link>
						{
							mainLink.list
								?

								<ul className="second-link-list">
									{
										mainLink.list.map(secondLink => (
											<li key={secondLink.title} className="second-link">
												<Link href={secondLink.url}>
													<a>{secondLink.title}</a>
												</Link>
											</li>
										))
									}
								</ul>
								:
								null
						}
					</li>
				))
			}

		</ul>

		<style jsx>{`

			.main-link-list {
				display: grid;
				grid-template-columns: repeat(${linkList.length}, auto);
				height: 100%;
				border-right: 1px solid var(--orange);
			}

			.main-link {
				height: 100%;
				border-left: 1px solid var(--orange);
				position: relative;
				color: var(--blue);
			}

			.main-link:hover {
				background: var(--orange);
				color: white;
			}

			.main-link > a {
				align-items: center;
				display: grid;
				padding: 0 1rem;
				height: 100%;
				text-transform: capitalize;
			}

			.second-link-list {
				background-color: var(--orange);
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				visibility: hidden;
			}

			.main-link:hover .second-link-list {
				visibility: visible;
			}

			.second-link a {
				display: block;
				padding: 1rem 1rem;
				text-align: center;
				text-transform: capitalize;
			}

			.second-link:hover {
				background-color: var(--light-orange);
			}


		`}</style>
	</nav>
}

export default Nav