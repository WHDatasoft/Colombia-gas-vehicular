const FormEmail = () => {

	const onSubmit = e => {
		e.preventDefault();
	}

	return <div className="form-wrapper">

		<img src="/icon/phone.svg" alt="icono de una mano agarrando un celular" loading="eager" />
		<form onSubmit={onSubmit}>
			<h1>COMUNÍCATE CON NOSOTROS</h1>
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Celular" />
			<button>Enviar</button>
		</form>

		<style jsx>{`

			.form-wrapper {
				font-size: 1rem;
				position: relative;
				z-index: 1;
				display: grid;
				justify-items: center;
				align-items: center;
			}

			img {
				padding: 3em 0;
				width: 9em;
				display: block;
				transform-origin: top center;
				animation: rotate 2s infinite alternate-reverse ease-in-out;
			}

			h1 {
				color: white;
				font-size: 1.5em;
				text-align: center;
			}

			form {
				display: inline-grid;
				grid-row-gap: 1.5em;
			}

			button, input {
				padding: .8em;
			}

			button {
				justify-self: center;
				padding: .8em 1.5em; 
			}

			@keyframes rotate {
				from {
					transform: rotate(-10deg)
				}

				to {
					transform: rotate(10deg)
				}
			}

			@media screen and (max-width: 360px) {
				.form-wrapper {
					font-size: .8rem;
				}
			}


		`}</style>
	</div>
}

export default FormEmail