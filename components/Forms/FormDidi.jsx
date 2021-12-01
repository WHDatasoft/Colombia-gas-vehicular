import axios from 'axios'
import { useState } from 'react';

const FormDidi = () => {

	const [data, setData] = useState({
		name: '',
		phone: '',
		from: 'DIDI'
	});

	const onSubmit = async e => {
		e.preventDefault();

		const { name, phone } = data
		const URL = '/api/email'
		try {
			const response = await axios.post(URL, { name, phone })
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const onChange = e => {
		setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
	}

	return <div className="form-wrapper">

		<div className="icon">
			<img className="cabeza" onChange={onChange} src="/icon/cabeza-didi.svg" alt="icono de una mano agarrando un celular" loading="eager" />
			<img className="manubrio" onChange={onChange} src="/icon/manubrio-didi.svg" alt="icono de una mano agarrando un celular" loading="eager" />
		</div>
		<form onSubmit={onSubmit}>
			<h3>COMUNÍCATE CON NOSOTROS</h3>
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
				background-color: #CEE7D3;
				padding: 2rem; 
			}

			.icon {
				display: grid;
				justify-items: center;
				gap: 1rem;
				margin-bottom: 2em;
			}

			.cabeza, .manubrio {
				
				width: 8em;
				display: block;
				transform-origin: center center;
				animation: rotate 2s infinite alternate-reverse ease-in-out;
			}

			.cabeza {
				width: 4.5em;
			}

			h3 {
				color: var(--orange);
				font-size: 2em;
				text-align: center;
				font-weight: 100;
			}

			form {
				display: inline-grid;
				grid-row-gap: 1.5em;
			}

			button, input {
				padding: .8em;
			}

			input {
				border: 1px solid var(--orange);
			}

			button {
				background-color: var(--orange);
				color: white;
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

export default FormDidi