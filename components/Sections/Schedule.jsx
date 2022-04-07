const Schedule = () => {
    return <section className="container">

        <div className="schedule-wrapper">
            <h2>Horario de atención</h2>
            <br />
            <div className="schedule">
                <ul className="size">
                    <li>D</li>
                    <li>L</li>
                    <li>M</li>
                    <li>W</li>
                    <li>J</li>
                    <li>V</li>
                    <li>S</li>
                </ul>
                <ul>
                    <li className="close">cerrado</li>
                    <li>7:30 am</li>
                    <li>7:30 am</li>
                    <li>7:30 am</li>
                    <li>7:30 am</li>
                    <li>7:30 am</li>
                    <li>8:00 am</li>
                </ul>
                <ul>
                    <li className="close">cerrado</li>
                    <li>12:30 am</li>
                    <li>12:30 am</li>
                    <li>12:30 am</li>
                    <li>12:30 am</li>
                    <li>12:30 am</li>
                    <li></li>
                </ul>
                <ul>
                    <li className="close">cerrado</li>
                    <li className="close">cerrado</li>
                    <li className="close">cerrado</li>
                    <li className="close">cerrado</li>
                    <li className="close">cerrado</li>
                    <li className="close">cerrado</li>
                    <li>1:00 pm</li>
                </ul>
                <ul>
                    <li className="close">cerrado</li>
                    <li>1:30 pm</li>
                    <li>1:30 pm</li>
                    <li>1:30 pm</li>
                    <li>1:30 pm</li>
                    <li>1:30 pm</li>
                    <li className="close">cerrado</li>
                </ul>
                <ul>
                    <li className="close">cerrado</li>
                    <li>5:00 pm</li>
                    <li>5:00 pm</li>
                    <li>5:00 pm</li>
                    <li>5:00 pm</li>
                    <li>5:00 pm</li>
                    <li className="close">cerrado</li>
                </ul>
            </div>
        </div>


        <style jsx>{`

			:global(:root) {
				--size: 1.5
			}

			section {
				position: relative;
				z-index: 1;
				border-right: none;
				display: grid;
				align-items: center;
				padding:  2rem;
                box-sizing: border-box;
				justify-self: center;
			}

			h2 {
				text-align: center;
				font-size: calc(1.5rem * var(--size));
				color: var(--light-orange);
				margin-bottom: calc(0.5rem * var(--size));
			}

			ul {
				color: white;
				display: grid;
				grid-template-columns: repeat(7, calc(4.2rem * var(--size)));
				font-size: calc(0.7rem * var(--size));
			}

			li {
				border: 1px solid white;
				display: grid;
				place-items: center;
				padding: calc(0.7rem * var(--size)) calc(0.5rem * var(--size));
				text-transform: capitalize;
			}

			.close {
				background-color: var(--light-orange);
			}

			.size {
				font-size: calc(2rem * var(--size));
			}

			@media screen and (max-width: 920px) {
				:global(:root) {
					--size: 1.3;
				}

				section {
					position: relative;
					z-index: 1;
					background-color: var(--blue-opacity);
					border-radius: 0;
					border: none;
					display: grid;
					align-items: center;
					justify-items: center;
					justify-self: center;
					width: 100%;
				}
			}

            @media screen and (max-width: 740px) {
				:global(:root) {
					--size: 1.1;
				}
			}

            @media screen and (max-width: 670px) {
				:global(:root) {
					--size: 0.9;
				}
			}

			@media screen and (max-width: 580px) {
				:global(:root) {
					--size: 0.8;
				}
			}

			@media screen and (max-width: 490px) {
				
				:global(:root) {
					--size: 0.65;
				}

                section {
                    padding: .5rem;
                }
			}

            @media screen and (max-width: 380px) {
				
				:global(:root) {
					--size: 0.55;
				}

                section {
                    padding: .5rem;
                }
				

			}

		`}</style>
    </section>
}

export default Schedule