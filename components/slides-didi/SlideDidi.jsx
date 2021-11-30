import ClientMain from "../Sections/ClientMain"

const SlideDidi = () => {
	return <>

		<ClientMain
			urlImg="phone"
			backgroundColor="#000000AA"
			rowGap="3"
		>
			<div className="title">
				<h2>
					<span className="big-text">Conoce los descuentos</span>
					<span className="small-text">que tenemos preparados para ti</span>
				</h2>
			</div>
			<img src="/icon/servitek.svg" alt="" className="final" />



		</ClientMain>

		<style jsx>{`

			h2 {
				color: white;
				display: grid;
				justify-items: center;
				text-align: center;
			}

			.title {
				font-size: 1rem;
			}

			.big-text {
				font-size: 5.5em;
			}

			.small-text {
				font-size: 2em;
			}

			img {
				height: 8rem;
			}

			@media screena and (max-width: 1450px) {

				.title {
					font-size: .8rem;
				}

			}

		`}</style>
	</>
}

export default SlideDidi