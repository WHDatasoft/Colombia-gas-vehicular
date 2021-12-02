import axios from 'axios'
import { useState } from 'react';


const FormEmail = ({ didi }) => {

	const [data, setData] = useState({
		name: '',
		phone: '',
		message: '',
		from: didi ? 'DIDI' : 'Colombiagas'
	});

	const onSubmit = async e => {
		e.preventDefault();

		const { name, phone, message, from } = data
		const URL = '/api/email'
		try {
			const response = await axios.post(URL, { name, phone, message, from })
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const onChange = e => {
		setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
	}

	return <form onSubmit={onSubmit}>
		<h3>COMUNÍCATE CON NOSOTROS</h3>
		<input onChange={onChange} type="text" placeholder="Nombre" name="name" />
		<input onChange={onChange} type="text" placeholder="Celular" name="phone" />
		<textarea onChange={onChange} name="message" placeholder="Dejanos tu mensaje..."></textarea>
		<button>Enviar</button>

		<style jsx>{`

			form {
				font-size: 1rem;
				display: inline-grid;
				grid-row-gap: 1.5em;
			}

			h3 {
				${didi ? 'color: var(--orange);' : 'color: white;'}
				font-size: 1.5em;
				text-align: center;
			}

			button, input, textarea {
				padding: .8em;
			}

			input {
				${didi ? 'border: 1px solid var(--orange)' : ''}
			}

			textarea {
				${didi ? 'border: 1px solid var(--orange);' : ''}
				font-size: 1rem;
				height: 6rem;
			}

			button {
				${didi ? 'background-color: var(--orange);' : ''}
				${didi ? 'color: white;' : ''}
				justify-self: center;
				padding: .8em 1.5em; 
			}

			@media screen and (max-width: 360px) {
				form {
					font-size: .7rem;
				}
			}

		`}</style>
	</form>
}

export default FormEmail