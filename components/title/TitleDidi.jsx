const TitleDidi = () => {
	return <div className="container">

		<h1>
			<span>
				ALIANZA DIDI
			</span>
			<span className="point"></span>
			<span>serviteck</span>
			<span className="point"></span>
			<span>Colombiagas Vehicular</span>
		</h1>

		<div className="title">
			<span>
				ALIANZA DIDI
			</span>
			<span className="point"></span>
			<span>serviteck</span>
			<span className="point"></span>
			<span>Colombiagas Vehicular</span>

		</div >


		<style jsx>{`

			.container {
				background-color: white;
				display: grid;
				grid-template-columns: 100vw 100vw;
				position: relative;
				margin-bottom: 2rem;
				animation: move-right-didi 15s linear forwards infinite;
			}

			h1, .title {
				font-size: 2rem;
				background-color: white;
				color: var(--orange);
				text-align: center;
				padding: 1rem 0;
				text-transform: uppercase;
			}

			.point {
				display: inline-block;
				height: 1rem;
				width: 1rem;
				background-color: var(--orange);
				margin: 0 1rem;
				border-radius: 50%;
			}

			@keyframes move-right-didi {
				from {
					left: 0%;
				}

				to {
					left: -100%;
				}
			}

			

		`}</style>
	</div>
}

export default TitleDidi