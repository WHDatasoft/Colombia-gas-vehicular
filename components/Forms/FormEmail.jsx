import axios from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";


const FormEmail = ({ didi, setIsEnable }) => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        from: didi ? 'DIDI' : 'Colombiagas',
        check: false
    });

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = async data => {

        const URL = '/api/email'
        try {
            const response = await axios.post(URL, { ...data, from: 'Colombiagas' })
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

    }

    // const onChange = e => {
    //     setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
    // }

    // const onClick = e => {
    //     setData(Object.assign({}, data, { [e.target.name]: !data.check }))
    // }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cuidemos el medio ambiente juntos.</h2>
        <p >Colombiagas Vehicular te ofrece diferentes alternativas para la conversión de tu vehículo a Gas Natural</p>
        <label>
            <h4>Nombre</h4>
            <input {...register("name", { required: true })} type="text" />
            {errors.name && <span>El nombre es requerido</span>}
        </label>
        <label>
            <h4>Teléfono</ h4>
            <input {...register("phone", { required: true })} type="number" />
            {errors.phone && <span>El número de teléfono es requerido</span>}
        </label>
        <label>
            <h4>Correo electrónico</h4>
            <input {...register("email", { required: true })} type="email" />
            {errors.email && <span>El correo es requeriod</span>}
        </label>
        <div className="terminos">
            <input type="checkbox" {...register("check", { required: true })} />
            <p className="left">Acepto Terminos y condiciones.</p>
            {errors.check && <span>Es necesario aceptar terminos y condiciones</span>}
            <a href="/download/terminos-y-condiciones-colombia-gas-vehicular.pdf" download>Leer terminos y condiciones</a>
        </div>
        <button>Contactar</button>

        <style jsx>{`

			form {
				font-size: 1rem;
				display: inline-grid;
				grid-row-gap: .6em;
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
                position: relative;
            }

			input {
				${didi ? 'border: 1px solid var(--orange)' : ''}
			}

            span {
                position: absolute;
                font-size: .8rem;
                bottom: -1.2rem;
                left: 0;
                width: 100%;
                text-align: center;
                color: #e67c8c;
            }

            h4 {
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
                grid-column: 1/3;
				color: var(--light-orange);
				text-decoration: underline;
				display: block;
				place-items: center;
				padding: 0 1rem;
			}

			.terminos {
                margin-bottom: 1.5rem;
                position: relative;
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
                margin-left: .5rem;
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