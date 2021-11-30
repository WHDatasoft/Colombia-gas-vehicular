const Icons = () => {
	return <section>

		<div className="content">
			<img src="/logo/logo-blanco.png" alt="" className="logo" />
		</div>
		<div className="content">
			<img src="/icon/didi.svg" alt="" className="didi" />
		</div>
		<div className="content">
			<img src="/icon/servitek.svg" alt="" className="servitek" />
		</div>

		<style jsx>{`

			section {
				font-size: 1rem;
				display: grid;
				grid-template-columns: auto auto auto;
				place-items: center;
				padding: 0 4rem;
				margin-bottom: 4rem;
			}

			.content {
				display: grid;
				place-items: center;
				width: 15em;
				height: 15em;
				border-radius: 50%;
				border: 3px solid var(--orange);
				animation: rotate 3s infinite alternate ease-in-out;
				transform-origin: center center;
			}

			.logo {
				width: 12em;
			}

			.servitek {
				width: 8em;
			}

			.didi {
				width: 12em;
			}

			@keyframes rotate {
				from {
					transform: rotate(-15deg)
				}

				to {
					transform: rotate(15deg)
				}
			}

			@media screen and (max-width: 1050px) {
				
				section {
					font-size: .8rem;
				}

			}

			@media screen and (max-width: 835px) {
				
				section {
					grid-template-columns: auto;
					grid-row-gap: 2rem;
				}

			}

			@media screen and (max-width: 350px) {
				
				section {
					font-size: .6rem;
				}

			}

		`}</style>
	</section>
}

export default Icons