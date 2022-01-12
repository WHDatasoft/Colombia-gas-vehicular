import FormEmail from './FormEmail'

const FormAdvertising = ({ setIsEnable }) => {


	return <div className="form-wrapper">

		<FormEmail setIsEnable={setIsEnable} />

		<style jsx>{`

			.form-wrapper {
				box-sizing: border-box;
				padding: 3rem 4rem;
				border-radius: .2rem;
				background-color: var(--dark-green);
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

export default FormAdvertising