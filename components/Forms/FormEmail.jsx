import axios from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2'


const FormEmail = ({ didi, setIsEnable }) => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        from: didi ? 'DIDI' : 'Colombiagas',
        check: false
    });

    const onSubmit = async e => {
        e.preventDefault();

        if (data.check) {

            const { name, phone, message, from } = data
            const URL = '/api/email'
            try {
                const response = await axios.post(URL, { name, phone, email, from })
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
        <h2>Cuidemos el medio ambiente juntos.</h2>
        <p >Colombiagas Vehicular te ofrece diferentes alternativas para la conversión de tu vehículo a Gas Natural</p>
        <label>
            <span>Nombre</span>
            <input onChange={onChange} type="text" name="name" />
        </label>
        <label>
            <span>Teléfono</ span>
            <input onChange={onChange} type="number" name="phone" />
        </label>
        <label>
            <span>Correo electrónico</span>
            <input onChange={onChange} type="email" name="email" />
        </label>
        <div className="terminos">
            <input type="checkbox" onChange={onClick} name="check" />
            <p className="left">Acepto Terminos y condiciones.</p>
        </div>
        <a href="/download/terminos-y-condiciones-colombia-gas-vehicular.pdf" download>Leer terminos y condiciones</a>
        <button>Contactar</button>

        <style jsx>{`

			form {
				font-size: 1rem;
				display: inline-grid;
				grid-row-gap: .5em;
                margin-bottom: 2rem;
                padding: 2rem;
                max-width: 30rem;
                border: 1px solid white;
                
			}

			h2 {
				${didi ? 'color: var(--orange);' : 'color: white;'}
				font-size: 1.3em;
				text-align: center;
                margin-bottom: 1rem;
			}

            p {
                color: white;
                margin: auto;
                text-align: justify;
                line-height: 1.5rem;
            }

			button, input, textarea {
				padding: .8em;
			}

            label {
                display: grid;
            }

			input {
				${didi ? 'border: 1px solid var(--orange)' : ''}
			}

            span {
                color: white;
                margin: 1rem;
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
				display: block;
				place-items: center;
				padding: 0 1rem;
                margin-bottom: 1rem;
			}

			.terminos {
                margin-top: 1rem;
				text-align: center;
				display: grid;
				grid-template-columns: auto auto;
                align-items: center;
                justify-content: flex-start;
				color: ${didi ? 'var(--orange);' : 'white'};
                padding-left: 1rem;
			}

            .left {
                margin-left: 1rem;
            }

             @media screen and (max-width: 1100px) {
				form {
					grid-row: 1/2;
				}
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