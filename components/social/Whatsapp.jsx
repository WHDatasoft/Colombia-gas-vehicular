

const Whatsapp = () => {

	return <button>
		<div className="message">
			<p>Chatea con nosotros</p>
		</div>
		<a href="https://wa.me/message/NF2C4CFYJIJBG1" target="_blank" rel="noopener noreferrer">
			<img src="/icon/whatsapp.svg" alt="icono de contacto por whatsapp" />
		</a>

		<style jsx>{`

			button {
				position: fixed;
				z-index: 10;
				right: 2rem;
				bottom: 2rem;
				background-color: unset;
			}

			img {
				height: 9rem;
			}

			.message {
				position: absolute;
				background-color: white;
				border-radius: 1rem;
				padding: .5rem 1rem;
				top: -2rem;
				width: 10rem;
				animation: enter 2.5s forwards;
			}

			@keyframes enter {
				from {
					right: -30rem;
				}
				
				30% {
					right: 2rem;
				}

				40% {
					right: -2rem;
				}

				70% {
					right: 0;
				}

				90% {
					transform: scale(1);
					opacity: 1;
					right: 0;
				}

				to {
					transform: scale(1.3);
					opacity: 0;
					right: 0;
					visibility: none;
				}
			}

		`}</style>
	</button>
}

export default Whatsapp