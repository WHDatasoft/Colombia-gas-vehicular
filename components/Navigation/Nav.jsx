import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Nav = ({ setEnableNav, enableNav }) => {

	const router = useRouter()

	const [linkSelected, setLinkSelected] = useState('')
	const [submenu, setSubmenu] = useState(false)
	const [submenuActive, setSubmenuActive] = useState('');



	useEffect(() => {
		setLinkSelected(router.asPath)
	}, [])

	const close = () => {
		setEnableNav(false)
		setSubmenu(false)
		setSubmenuActive('')
	}

	const goBack = () => {
		setSubmenu(false)
		setSubmenuActive('')
	}

	const linkList = [
		{ title: 'Inicio', url: '/' },
		{ title: '¿Quiénes somos?', url: '/quienes-somos' },
		{
			title: 'servicios', url: '/servicios',
			list: [
				{ title: 'instalación GNV', url: '/servicios/instalacion-gnv' },
				{ title: 'Mantenimiento', url: '/servicios/mantenimiento' },
				{ title: 'Revisión anual', url: '/servicios/revision-anual' },
				{ title: 'Prueba hidrostática', url: '/servicios/prueba-hidrostatica' },
				{ title: 'venta de repuestos', url: '/servicios/venta-de-repuestos' },
			]
		},
		{
			title: 'Beneficios', url: '/beneficios',
			list: [
				{ title: 'Programa de salud', url: '/beneficios/programa-de-salud' },
				{ title: 'ahorro', url: '/beneficios/ahorro' },
				{ title: 'combustible', url: '/beneficios/combustible' },
				{ title: 'beneficios medio ambientales', url: '/beneficios/beneficios-medio-ambientales' },
				{ title: 'financianción', url: '/beneficios/financiacion' },
			]

		},
		{
			title: 'Clientes', url: '/clientes',
			list: [
				{ title: 'Alianza DIDI', url: '/clientes/alianza-didi' }
			]
		},
		{ title: 'Debes saber', url: '/debes-saber' },
		{ title: 'Contáctenos', url: '/contactenos' },
	]

	return <div className="wrapper">
		<div className="background-nav" onClick={close}></div>
		<nav>

			<button className="close" onClick={close}>
				<svg viewBox="0 0 352 512">
					<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
				</svg>
			</button>
			{
				submenu
					?
					<button className="return" onClick={goBack}>
						<svg viewBox="0 0 448 512">
							<path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
						</svg>
					</button>
					:
					''
			}

			<ul className="main-link-list">
				{
					linkList.map(mainLink => (
						<li key={mainLink.title} className={`main-link ${linkSelected === mainLink.url || '/' + router.asPath.split('/')[1] === mainLink.url ? 'selected-first' : ''}`} >
							<>
								{
									submenu
										?
										''
										:
										<>
											{
												(mainLink.title === 'servicios' && enableNav) || (mainLink.title === 'Beneficios' && enableNav) || (mainLink.title === 'Clientes' && enableNav)
													?
													<button className="handle-submenu" onClick={() => {
														setSubmenu(true)
														setSubmenuActive(mainLink.title)
													}}>{mainLink.title}</button>
													:
													<Link href={mainLink.url}>
														<a>
															<span>
																{mainLink.title}
															</span>
														</a>
													</Link>

											}
										</>
								}
							</>
							{
								mainLink.list
									?

									<ul className={submenuActive === mainLink.title ? 'second-link-list-responsive' : 'second-link-list'}>
										{
											enableNav
												?
												<li key={mainLink.title} className={`main-link ${linkSelected === mainLink.url || '/' + router.asPath.split('/')[1] === mainLink.url ? 'selected-first' : ''}`} >
													<Link href={mainLink.url}>
														<a>{mainLink.title}</a>
													</Link>
												</li>
												:
												''
										}
										{

											mainLink.list.map(secondLink => (

												<li key={secondLink.title} className={`second-link ${router.asPath === secondLink.url ? 'selected-second' : ''}`} >
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

		</nav>

		<style jsx>{`

			.background-nav {
				display: none;
			}

			.wrapper {
				position: relative;
				z-index: 1000;

			}

			nav {
				height: 100%;
			}

			.close {
				display: none;
			}

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
				padding: 1rem 2rem;
				text-align: center;
				text-transform: capitalize;
			}

			.selected-first {
				background: var(--orange);
				color: white
			}

			.selected-second {
				background-color: var(--light-orange)
			}

			.second-link:hover {
				background-color: var(--light-orange);
			}

			.handle-submenu {
				color: white;
				background-color: unset;
				display: none;
			}

			@media screen and (max-width: 1080px) {

				.background-nav {
					display: block;
					height: 100%;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}

				.close, .return {
					box-sizing: border-box;
					padding: 1rem;
					display: grid;
					position: absolute;
					top: 1rem;
					right: 2rem;
					height: 4rem;
					width: 4rem;
					place-items: center;
					color: white;
					background-color: unset;
				}

				.close {
					transition: opacity 0.5s;
					opacity: ${enableNav ? '1' : '0'};
				}

				.return {
					left: 2rem;
				}

				.wrapper {
					position: fixed;
					width: 100%;
					min-height: 100vh;
					background-color: var(--blue-transparent);
					top: 0;
					left: 0;
					transition: transform .5s, opacity .5s;
					opacity: ${enableNav ? '1' : '0'};
					transform: translateY(${enableNav ? '0' : '-100'}%);
					display: grid;
					place-items: center;
				}

				nav {
					display: grid;
					place-items: center;
					z-index: 1;
					height; fit-content;
					padding: 1rem;
				}

				.main-link-list {
					display: grid;
					grid-template-columns: none;
					place-items: center;
					height: auto;
					border: none;
					text-align: center;
				}

				.main-link {
					color: white;
					height: auto;
					border: none;
					margin: .5rem 0;
					font-size: 1.3rem;
					padding: .2rem 0;
				}

				a {
					font-size: 1.5rem;
				}

				.main-link > a {
					padding: 0;
					font-size: 1.5rem;
				}
				.handle-submenu {
					display: block;
					font-size: 1.5rem;
				}

				.main-link:hover .second-link-list {
					visibility: hidden;
				}

				.main-link:hover, .second-link:hover {
					background-color: unset;
				}

				.selected-first {
					background: unset
				}

				.selected-second {
					background-color: unset
				}

			}


		`}</style>
	</div>
}

export default Nav