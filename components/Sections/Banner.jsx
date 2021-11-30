import Link from 'next/link'

const Banner = ({ children, imgPerson, fondo, icon, text, personSize }) => {
	return <main>

		<div className="back">
			<Link href="/servicios">
				<a>
					<div className="icon">
						<img src={`/icon/${icon}`} alt="" />
						<p>{text}</p>
					</div>
				</a>
			</Link>
		</div>

		<img className="gnv" src="/img/banner/gnv.png" alt="" loading="eager" />
		<img className="person" src={`/img/banner/${imgPerson}`} alt="" loading="eager" />
		<div className="text">
			{children}
		</div>


		<style jsx>{`

			main {
				position: relative;
				display: grid;
				grid-template-columns: 4fr 1fr 4fr;
				background: white url('/img/banner/${fondo}') no-repeat;
				background-position: right;
				background-size: cover;
				padding: 0 10rem;
				justify-items: center;
			}

			.back {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				background-color: var(--blue);
				height: 80%;
				display: grid;
				place-items: center;
				border-radius: 0 1rem 1rem 0;
				z-index: 1;
			}

			.back:before, .back:after  {
				content: "";
				position: absolute;
				height: 2rem;
				width: 100%;
				background-color: var(--blue);
				right: .7rem;
				z-index: -1;
			}

			.back:before {
				top: 0;
				transform-origin: top right;
				transform: rotate(17.5deg);
			}

			.back:after  {
				bottom: -2rem;
				transform-origin: top left;
				transform: rotate(-17.5deg);
			}

			p {
				width: 5rem;
				text-align: center;
				color: white;
				font-size: .9rem;
				padding: 0 1rem;
			}

			.gnv {
				width: 17rem;
				align-self: center;
			}

			.person {
				margin-top: 2rem;
				width: ${11 * (personSize ? personSize : 1)}rem;
				align-self: flex-end;
			}

			.text {
				align-self: center;
			}

			.icon img {
				display: block;
				margin: auto;
				width: 6rem;
			}

			@media screen and (max-width: 1400px) {

				main {
					grid-template-columns: 3fr 1fr 4fr;
				}
			}

			@media screen and (max-width: 1200px) {

				main {
					grid-template-columns: 2fr 1fr 4fr;
					padding-left: 7.5rem; 
				}
				.gnv {
					width: 13rem;
				}
			}

			@media screen and (max-width: 970px) {

				main {
					grid-template-columns: 2fr 4fr;
					padding: 0 7.5rem; 
				}

				.gnv {
					display: none;
				}

				.text, .person {
					z-index: 1;
				}
			}

			@media screen and (max-width: 735px) {

				main {
					padding-right: 2rem; 
					background-position: left;
				}

			}
			

			@media screen and (max-width: 625px) {

				main {
					grid-template-columns: auto 1fr;
					padding-left: 5.5rem; 
				}

				.person {
					width: ${8 * (personSize ? personSize : 1)}rem;
				}

				.icon img {
					width: 4rem;
					margin-bottom: .3rem;
				}

				p {
					width: 3rem;
					font-size: .5rem;
					padding: 0 1rem;
				}

				.back:after  {
					bottom: -1.4rem;
					transform-origin: top left;
					transform: rotate(-17.5deg);
				}

			}

			@media screen and (max-width: 410px) {

				.icon img {
					width: 3rem;
				}

				.back:after  {
					bottom: -0.92rem;
					transform: rotate(-17.5deg);
				}

				p {
					width: 2.5rem;
					font-size: .4rem;
					padding: 0 .5rem;
				}

				main {
					padding-left: 3.5rem; 
					padding-right: 1rem;
				}

				.person {
					width: ${8 * (personSize ? personSize : 1)}rem;
				}
			}

		`}</style>
	</main>
}

export default Banner