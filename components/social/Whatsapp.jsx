

const Whatsapp = () => {

    return <div className="wrapper">

        <div className="message">
            <p>Chatea con nosotros</p>
        </div>
        <button>
            <a href="https://wa.me/573134304711">
                <img src="/icon/whatsapp.svg" alt="icono de contacto por whatsapp" />
            </a>

        </button>

        <style jsx>{`

			.wrapper {
				position: fixed;
				z-index: 10;
				right: 1rem;
				bottom: 1rem;
			}

			button {
				background-color: unset;
			}

			img {
				height: 7rem;
                padding: 1.5rem;
                box-sizing: border-box;
			}

			.message {
                text-align: center;
				position: absolute;
				background-color: white;
				border-radius: 1rem;
				padding: .5rem 1rem;
				top: -2rem;
				width: 10rem;
				animation: enter 10s 1s forwards;
                border: 1px solid var(--dark-blue);
                right: -30rem;
			}

			@keyframes enter {
				from {
					right: -30rem;
				}
				
				10% {
					right: 2rem;
				}

				15% {
					right: -2rem;
				}

				20% {
					right: 0;
				}

				90% {
					transform: scale(1);
					opacity: 1;
					right: 0;
				}

				99% {
					transform: scale(1.3);
					opacity: 0;
					right: 0;
					visibility: none;
				}

				to {
					right: -30rem;
				}
			}

			@media screen and (max-width: 730px) {

				.wrapper {
					right: 0rem;
					bottom: 0rem;
				}

				img {
					height: 7rem;
				}

				

			}

		`}</style>

    </div>
}

export default Whatsapp
