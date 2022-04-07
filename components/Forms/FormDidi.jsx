
import FormEmail from './FormEmail';

const FormDidi = () => {

    return <div className="form-wrapper" >

        <div className="icon">
            <img className="cabeza" src="/icon/cabeza-didi.svg" alt="icono de una mano agarrando un celular" loading="eager" />
            <img className="manubrio" src="/icon/manubrio-didi.svg" alt="icono de una mano agarrando un celular" loading="eager" />
        </div>

        <FormEmail didi advertising setIsEnable={() => { }} />

        <style jsx>{`

			.form-wrapper {
				font-size: 1rem;
				position: relative;
				z-index: 1;
				display: grid;
				justify-items: center;
				align-items: center;
				background-color: var(--blue-transparent);
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