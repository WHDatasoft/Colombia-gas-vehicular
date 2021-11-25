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
				position: relative;
				z-index: 1;
				display: grid;
				justify-items: center;
				align-items: center;
			}

			img {
				padding: 3rem 0;
				width: 9rem;
				display: block;
				transform-origin: top center;
				animation: rotate 2s infinite alternate-reverse ease-in-out;
			}

			h1 {
				color: white;
				font-size: 1.5rem;
			}

			form {
				display: inline-grid;
				grid-row-gap: 1.5rem;
			}

			button, input {
				padding: .8rem;
			}

			button {
				justify-self: center;
				padding: .8rem 1.5rem; 
			}

			@keyframes rotate {
				from {
					transform: rotate(-10deg)
				}

				to {
					transform: rotate(10deg)
				}
			}


		`}</style>
	</div>
}

export default FormEmail