import AsideForm from '../Sections/AsideForm'
import FormEmail from './FormEmail'

const FormCol = () => {


    return <div className="form-wrapper">

        <AsideForm />

        <FormEmail setIsEnable={() => { }} />

        <style jsx>{`

			.form-wrapper {
				font-size: 1rem;
				position: relative;
				z-index: 1;
				display: grid;
				justify-items: center;
				align-items: center;
                grid-template-columns: auto auto;
                
			}

			img {
				padding: 3em 0;
				width: 9em;
				display: block;
				transform-origin: top center;
				animation: rotate 2s infinite alternate-reverse ease-in-out;
			}
			
			@keyframes rotate {
				from {
					transform: rotate(-10deg)
				}

				to {
					transform: rotate(10deg)
				}
			}

            @media screen and (max-width: 1100px) {
				.form-wrapper {
					grid-template-columns: auto;
                    grid-gap: 2rem;
				}
			}

			@media screen and (max-width: 360px) {
				
			}


		`}</style>
    </div>
}

export default FormCol