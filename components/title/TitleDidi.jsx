const TitleDidi = () => {
	return <div className="container">

		<h1>
			<div className="word">
				<span className="point first"></span>
				<span>
					ALIANZA DIDI
				</span>
			</div>
			<div className="word">
				<span className="point"></span>
				<span>serviteck</span>
			</div>
			<div className="word">
				<span className="point"></span>
				<span className="colombiagas">Colombiagas Vehicular</span>
			</div>
		</h1>

		<div className="title">
			<span className="point first"></span>
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
				width: 200%;
				background-color: white;
				display: grid;
				grid-template-columns: 1fr 1fr;
				position: relative;
				margin-bottom: 2rem;
				animation: move-right-didi 15s linear forwards infinite;
			}

			h1, .title {
				font-size: 2rem;
				background-color: white;
				color: var(--orange);
				text-align: center;
				padding: 1rem;
				text-transform: uppercase;
			}

			.word {
				display: inline-block;
				white-space: pre;
			}

			.point {
				display: inline-block;
				height: 1rem;
				width: 1rem;
				background-color: var(--orange);
				margin: 0 1rem;
				border-radius: 50%;
				transform: translateY(-20%);
			}

			.first {
				display: none;
			}

			.colombiagas {
				white-space: normal;
			}

			@keyframes move-right-didi {
				from {
					left: 0%;
				}

				to {
					left: -100%;
				}
			}

			@media screen and (max-width: 900px) {
				.container {
					animation: none;
				}


				.first {
					display: inline-block;
				}

				h1, .title {
					font-size: 1.5rem;
					line-height: 2rem;
				}

				.point {
					transform: translateY(-0%);
				}

			}

			

		`}</style>
	</div>
}

export default TitleDidi