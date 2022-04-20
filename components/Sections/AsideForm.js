const AsideForm = () => {
    return <section className="container">

        <h1>Cuida tu vehículo y protege el medio ambiente</h1>
        <p>Para nostros es muy importante poder ofrecerte información especializada y personalizada.</p>
        <ul>
            <li>
                <img src="/icon/hoja.svg" alt="" />
                Sabias que hay marcas de vehículos que vienen cero kilómetros a gas natural.
            </li>
            <li>
                <img src="/icon/hoja.svg" alt="" />
                Reduce tus gastos y aumenta tus ganancias.
            </li>
            <li>
                <img src="/icon/hoja.svg" alt="" />
                Disminuye el 99,9% de las emisiones de mateial particulado.
            </li>
            <li>
                <img src="/icon/hoja.svg" alt="" />
                Convierte tu vehículo a gas natural vehicular y ahorra hasta un 50% respecto a la gasolina corriente.
            </li>
        </ul>

        <style jsx>{`

            .container {
                display: grid;
                grid-gap: 1.5rem; 
                max-width: 35rem;
                box-sizing: border-box;
                padding: 2rem;               
            }

            h1 {
                text-align: center;
                font-size: 1.7rem;
                color: white;
            }

            p, li {
                line-height: 1.5rem;
            }

            p {
                color: white;
            }

            ul {
                display: grid;
                grid-gap: 1.5rem;
            }

            li {
                color: white;
                position: relative;
                padding-left: 3rem;
            }

            img {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                fill: var(--blue);
                height: 2rem;
            }


            @media screen and (max-width: 380px) {
				.container {
                    padding: .5rem;               
                }

			}

            

        `}</style>
    </section>
}

export default AsideForm