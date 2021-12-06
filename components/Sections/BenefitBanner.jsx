const BenefitBanner = ({ icon, title, titleComplement, subtitle, background, scaleSubtitle, light }) => {
	return <main>

		<main>
			<img className="background-img" src={`/img/beneficios/${background}`} alt="no esta" />
			<div className="content">
				<img className="icon" src={`/icon/${icon}`} alt="" />
				<hgroup>
					<h1>
						{
							titleComplement
								?
								<>
									<span className="first">{title}</span>
									<span className="second">{titleComplement}</span>
								</>
								:
								<span>{title}</span>

						}
					</h1>
					<h2>{subtitle}</h2>
				</hgroup>
			</div>
		</main>

		<img className="row" src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<style jsx>{`

			main {
				position: relative;
			}

			.background-img {
				width: 100%;
				height: 75vh;
				object-fit: cover;
				pointer-events: none;
			}

			.content {
				padding: 1rem;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 97%;
				height: 93%;
				box-sizing: border-box;
				background-color: var(--blue-transparent);
				display: grid;
				place-items: center;
			}

			.icon {
				height: 8rem;
				align-self: flex-end;
				margin-bottom: 2rem;
			}

			hgroup {
				align-self: flex-start;
				color: white;
				text-align: center;
				display: grid;
				justify-items: center;
			}

			h1 {
				display: grid;
				font-size: 8rem;
				font-weight: 900;
				border-bottom: .3rem solid var(--orange);
				margin-bottom: .4rem;
			}

			.second {
				font-size: 4.4rem;
				font-weight: ${light ? '100' : '600'}
			}




			h2 {
				font-size: ${scaleSubtitle ? `${scaleSubtitle}rem` : '1.5rem'};
			}

			.row {
				display: block;
				height: 2rem;
				margin: 1.5rem auto;
				animation: move 1s infinite alternate-reverse;
			}

			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}

			@media screen and (max-width: 850px) {

				h1 {
					font-size: 4rem;
				}

				.second {
					font-size: 3.7rem;
				}

			}

			@media screen and (max-width: 650px) {

				h1 {
					font-size: 3.5rem;
				}

				.second {
					font-size: 3.2rem;
				}

			}

			@media screen and (max-width: 550px) {

				h1 {
					font-size: 3rem;
				}

				.second {
					font-size: 2.5rem;
				}

				.icon {
					height: 6rem;
				}

			}

			@media screen and (max-width: 430px) {

				h1 {
					font-size: 2.5rem;
				}

				.second {
					font-size: 2rem;
				}

				.icon {
					height: 5rem;
				}

			}
				
			}

		`}</style>
	</main>
}

export default BenefitBanner