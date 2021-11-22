const NavSocial = () => {
	return <nav>

		<ul>
			<li>
				<a href="https://www.instagram.com/colombiagas_vehicular/?hl=es" target="_blank" rel="noopener noreferrer">
					<img src="/icon/instagram.png" alt="" />
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/colombiagasvehicular.parati" target="_blank" rel="noopener noreferrer">
					<img src="/icon/facebook.png" alt="" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/VehicularGas" target="_blank" rel="noopener noreferrer">
					<img src="/icon/twitter.png" alt="" />
				</a>
			</li>
			<li>
				<a href="tel:+573232230714">
					<img src="/icon/social-phone.svg" alt="" />
				</a>
			</li>
			<li>
				<a href="https://g.page/ColombiaGasVehicular?share" target="_blank" rel="noopener noreferrer">
					<img src="/icon/location.png" alt="" />
				</a>
			</li>
		</ul>

		<style jsx>{`

			nav {
				background-color: var(--blue-opacity);
				position: fixed;
				z-index: 10;
				padding: .5rem;
				border-top-right-radius: 2rem;
				border-bottom-right-radius: 2rem;
				top: 50%;
				left: 0;
			}

			img {
				width: 2.5rem;
			}

			ul {
				display: grid;
				grid-template-rows: repeat(1fr, 5);
				grid-row-gap: .3rem;
			}

		`}</style>
	</nav>
}

export default NavSocial