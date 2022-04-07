const AsideForm = () => {
    return <section className="container">

        <h1>Cuida tu vehículo y protege el medio ambiente</h1>
        <p>Para nostros es muy importante poder ofrecerte información especializada y personalizada.</p>
        <ul>
            <li>
                <svg viewBox="0 0 351.92 343.51">
                    <path d="M24,235.8H160v87.7c0,17.8,21.5,26.7,34.1,14.1L346.3,185.4a19.37,19.37,0,0,0,0-27.3L194.1,5.9C181.5-6.7,160,2.2,160,20v87.8H24a23.94,23.94,0,0,0-24,24v80A23.94,23.94,0,0,0,24,235.8Z" />
                </svg>
                Sabias que hay masrcas de vehículos que vienen cero kilómetros a gas natural.
            </li>
            <li>
                <svg viewBox="0 0 351.92 343.51">
                    <path d="M24,235.8H160v87.7c0,17.8,21.5,26.7,34.1,14.1L346.3,185.4a19.37,19.37,0,0,0,0-27.3L194.1,5.9C181.5-6.7,160,2.2,160,20v87.8H24a23.94,23.94,0,0,0-24,24v80A23.94,23.94,0,0,0,24,235.8Z" />
                </svg>
                Reduce tus gastos y aumenta tus ganancias.
            </li>
            <li>
                <svg viewBox="0 0 351.92 343.51">
                    <path d="M24,235.8H160v87.7c0,17.8,21.5,26.7,34.1,14.1L346.3,185.4a19.37,19.37,0,0,0,0-27.3L194.1,5.9C181.5-6.7,160,2.2,160,20v87.8H24a23.94,23.94,0,0,0-24,24v80A23.94,23.94,0,0,0,24,235.8Z" />
                </svg>
                Disminuye el 99,9% de las emiciones de mateial particulado.
            </li>
            <li>
                <svg viewBox="0 0 351.92 343.51">
                    <path d="M24,235.8H160v87.7c0,17.8,21.5,26.7,34.1,14.1L346.3,185.4a19.37,19.37,0,0,0,0-27.3L194.1,5.9C181.5-6.7,160,2.2,160,20v87.8H24a23.94,23.94,0,0,0-24,24v80A23.94,23.94,0,0,0,24,235.8Z" />
                </svg>
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

            svg {
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