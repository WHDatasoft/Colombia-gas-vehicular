import Link from 'next/link'

const NavServices = () => {
	return <nav className="container">

		<ul>
			<li>
				<Link href="/servicios/instalacion-gnv">
					<a>
						<img src="/icon/servicio1.svg" alt="" />
						<span>Instalación de GNV</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/servicios/prueba-hidrostatica">
					<a>
						<img src="/icon/servicio2.svg" alt="" />
						<span>Prueba Hodristática</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/servicios/mantenimiento">
					<a>
						<img src="/icon/servicio3.svg" alt="" />
						<span>Mantenimiento</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/servicios/revision-anual">
					<a>
						<img src="/icon/servicio4.svg" alt="" />
						<span>Revisión anual</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/servicios/venta-de-repuestos">
					<a>
						<img src="/icon/servicio5.svg" alt="" />
						<span>Venta de repuestos</span>
					</a>
				</Link>
			</li>
		</ul>

		<style jsx>{`

			.container {
				
			}

			img {
				height: 12rem;
			}

			a {
				display: grid;
				grid-template-rows: auto auto;
				place-items: center;
				
			}

			img {
				transition: transform .5s;
			}

			a:hover img {
				animation: rotate 2s infinite alternate;
			}

			ul {
				height: 70vh;
				display: grid;
				align-items: center;
				grid-template-columns: repeat(5, 1fr);
				margin: 0 4rem;
			}

			span {
				display: block;
				margin-top: 2rem; 
				color: white;
				font-weight: 600;
			}

			@keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				50% {
					transform: rotate(-10deg);
				}

				to {
					transform: rotate(10deg);
				}
			}

		`}</style>
	</nav>
}

export default NavServices