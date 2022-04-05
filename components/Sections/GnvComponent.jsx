const GnvComponent = () => {
    return <section>

        <picture>
            <img src="/img/servicios/componentes.webp" alt="" />

        </picture>



        <ul>
            <li>1. Cilindro.</li>
            <li>2. Proteccion de Cilindro.</li>
            <li>3. Válvula decilindro.</li>
            <li>4. Tubería.</li>
            <li>5. Válvula de llenado.</li>
            <li>6. Manómetro.</li>
            <li>7. Regulador.</li>
            <li>8. Filtro de gas.</li>
            <li>9. Sensor MAP.</li>
            <li>10. Inyectores de gas.</li>
            <li>11. Computadora.</li>
            <li>12. Llave conmutadora</li>
        </ul>

        <style jsx>{`

			section {
				background-color: white;
				position: relative;
				display: grid;
				grid-template-columns: 1fr auto;
				margin-bottom: 4rem;
			}

			picture {
				height: 100%;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: contain;
				justify-self: center;
				margin: auto;
				box-sizing: border-box;
				padding: 0 4rem;
			}

			ul {
				display: grid;
				grid-template-rows: repeat(12, 1fr);
				grid-gap: .5rem; 
			}

			li {
				background-color: var(--light-green);
				color: white;
				font-size: 1.5rem;
				padding: 1rem;
				display: grid;
				padding-right: 20rem;
				align-items: center;
			}

			@media screen and (max-width: 1600px) {


				li {
					padding-right: 10rem;
				}
				
			}

			@media screen and (max-width: 1450px) {


				li {
					padding-right: 5rem;
				}
				
			}

			@media screen and (max-width: 1300px) {


				li {
					font-size: 1rem;
				}
				
			}

			@media screen and (max-width: 1080px) {


				section {
					grid-template-columns: 1fr;
				}

				ul {
					grid-template-columns: repeat(3, 1fr);
					grid-template-rows: auto;
					padding: 0 4rem 1rem 4rem;
				}

				li {
					padding-right: 1rem;
					font-size: 1rem;
				}

				img {
					padding: 2rem 4rem;
				}
				
			}

			@media screen and (max-width: 750px) {

				ul {
					grid-template-columns: repeat(2, 1fr);
				}

				li {
					font-size: 1rem;
				}
				
			}

			@media screen and (max-width: 540px) {

				ul {
					grid-template-columns: 1fr;
				}

				img, ul {
					padding: 1rem;
				}

				li {
					font-size: 1rem;
				}
				
			}

		`}</style>
    </section>
}

export default GnvComponent