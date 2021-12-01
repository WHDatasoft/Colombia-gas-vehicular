import axios from 'axios'

const FormEmail = () => {

	const [data, setData] = useState({
		name: '',
		phone: '',
		from: 'Colombiagas'
	});

	const onSubmit = async e => {
		e.preventDefault();

		const { name, phone } = data
		const URL = '/api/email'
		try {
			const response = await axios.post(URL, { name, phone, from })
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const onChange = e => {
		setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
	}

	return <div className="form-wrapper">

		<img src="/icon/phone.svg" alt="icono de una mano agarrando un celular" loading="eager" />
		<form onSubmit={onSubmit}>
			<h1>COMUNÍCATE CON NOSOTROS</h1>
			<input onChange={onChange} type="text" placeholder="Nombre" name="name" />
			<input onChange={onChange} type="text" placeholder="Celular" name="phone" />
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