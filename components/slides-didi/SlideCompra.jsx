import ClientMain from "../Sections/ClientMain"

const SlideCompra = () => {
	return <>

		<ClientMain
			urlImg="car-aside"
			backgroundColor="#1c580dAA"
			rowGap="3"
		>
			<h3>Compra del SOAT</h3>
			<h2>5% DE DESCUENTO</h2>
			<img src="/logo/logo-blanco.png" alt="" className="final" />


		</ClientMain>

		<style jsx>{`

			h2, h3 {
				text-align: center;
			}

			h3 {
				color: white;
				font-size: 5rem;
				font-weight: 600;
				max-width: 540px;
				letter-spacing: 0.2rem;
			}

			h2 {
				box-sizing: border-box;
				color: var(--light-green);
				background-color: white;
				padding: .5rem 1rem;
				font-size: 2rem;
				letter-spacing: 0.1rem;
				width: 80%;

			}

			img {
				height: 5rem;
			}

		`}</style>
	</>
}

export default SlideCompra