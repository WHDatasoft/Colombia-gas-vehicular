import axios from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2'


const FormEmail = ({ didi, setIsEnable, advertising }) => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        message: '',
        from: didi ? 'DIDI' : advertising ? 'Publicidad Pop-Up' : 'Colombiagas',
        check: false
    });

    const onSubmit = async e => {
        e.preventDefault();

        if (data.check) {

            const { name, phone, message, from } = data
            const URL = '/api/email'
            try {
                const response = await axios.post(URL, { name, phone, message, from })
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }

            const form = document.getElementsByTagName('form')[0]
            form.reset()

            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Mensaje enviado correctamente, pronto nos comunicaremos contigo',
                showConfirmButton: true,
                confirmButtonColor: 'var(--dark-green)',
                color: 'var(--blue)'
            })

            setIsEnable(false)

        } else {
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                text: 'Debes aceptar los terminos y condiciones',
                showConfirmButton: false,
                timer: 2500,
                color: 'var(--blue)'
            })
        }

    }

    const onChange = e => {
        setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
    }

    const onClick = e => {
        setData(Object.assign({}, data, { [e.target.name]: !data.check }))
    }

    return <form onSubmit={onSubmit}>
        <h1>!CONUNÍCATE CON NOSOTROS</h1>
        <p>Cuidamos tu vehiculo, protejemos el medio ambiente juntos.</p>
        <p>Colomgiagas Vehicular te ofrece diferentes alternativas para mantenerte en contacto con nostros</p>
        <input onChange={onChange} type="text" placeholder="Nombre" name="name" />
        <input onChange={onChange} type="text" placeholder="Celular" name="phone" />
        <textarea onChange={onChange} name="message" placeholder="Dejanos tu mensaje..."></textarea>
        <div className="terminos">
            <input type="checkbox" onChange={onClick} name="check" />
            <p>Acepto Terminos y condiciones.</p>
        </div>
        <a href="/download/terminos-y-condiciones-colombia-gas-vehicular.pdf" download>Leer terminos y condiciones</a>
        <button>Enviar</button>

        <style jsx>{`

			form {
				font-size: 1rem;
				display: inline-grid;
				grid-row-gap: 1.5em;
                margin-bottom: 2rem;
			}

			h1 {
				${didi ? 'color: var(--orange);' : 'color: white;'}
				font-size: 1.5em;
				text-align: center;
			}

            p {
                color: white;
                text-align: center;
                width: 25rem;
                margin: auto;
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

			a {
				color: var(--light-orange);
				text-decoration: underline;
				height: 100%;
				display: grid;
				place-items: center;
				padding: .1rem .5rem;
			}

			.terminos {
				text-align: center;
				display: grid;
				grid-template-columns: auto 1fr;
				align-items: center;
				color: ${didi ? 'var(--orange);' : 'white'};
				padding: 0 1rem;
				box-sizing: border-box;
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