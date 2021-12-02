const NavSocial = ({ responsive }) => {
	return <nav>

		<ul>
			<li>
				<a href="https://www.instagram.com/colombiagas_vehicular/?hl=es" target="_blank" rel="noopener noreferrer">
					<img src="/icon/instagram.svg" alt="" />
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/colombiagasvehicular.parati" target="_blank" rel="noopener noreferrer">
					<img src="/icon/facebook.svg" alt="" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/VehicularGas" target="_blank" rel="noopener noreferrer">
					<img src="/icon/twitter.svg" alt="" />
				</a>
			</li>
			<li>
				<a href="tel:+573232230714">
					<img src="/icon/social-phone.svg" alt="" />
				</a>
			</li>
			<li>
				<a href="https://g.page/ColombiaGasVehicular?share" target="_blank" rel="noopener noreferrer">
					<img src="/icon/location.svg" alt="" />
				</a>
			</li>
		</ul>

		<style jsx>{`

			nav {
				font-size: 1rem;
				background-color: var(--blue-opacity);
				position: fixed;
				z-index: 4;
				padding: .5em;
				border-top-right-radius: 2em;
				border-bottom-right-radius: 2em;
				top: 50%;
				left: 0;
			}

			img {
				width: 2.5em;
			}

			ul {
				display: grid;
				grid-template-rows: repeat(1fr, 5);
				grid-row-gap: .3em;
			}

			li {
				transition: transform .5s;
			}

			li:hover {
				transform: scale(1.1);
			}

			@media screen and (max-width: 730px) {
				nav {
					font-size: 1.5rem;
					display: ${responsive ? 'grid' : 'none'};
					position: relative;
					border-radius: 0;
					background-color: unset;
					margin-bottom: 2rem;
				}

				ul {
					margin: auto;
					display: block;
				}

				li {
					display: inline-block;
					margin: .5rem;
				}

			}

			@media screen and (max-width: 730px) {
				nav {
					font-size: 1rem;
				}
			}

		`}</style>
	</nav>
}

export default NavSocial