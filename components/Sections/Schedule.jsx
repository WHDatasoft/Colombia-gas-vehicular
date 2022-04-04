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
				--size: 1
			}

			section {
				position: relative;
				z-index: 1;
				border-top-left-radius: 50%;
				border-bottom-left-radius: 50%;
				border-right: none;
				display: grid;
				align-items: center;
				padding:  calc(7rem * var(--size)) calc(2rem * var(--size)) calc(7rem * var(--size)) calc(5rem * var(--size));
				justify-self: center;
			}

			h2 {
				text-align: center;
				font-size: calc(2.5rem * var(--size));
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

			@media screen and (max-width: 650px) {
				:global(:root) {
					--size: 0.9;
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
					padding:  2em 0;
					justify-self: center;
					width: 100%;
				}
			}

			@media screen and (max-width: 460px) {
				:global(:root) {
					--size: 0.8;
				}
			}

			@media screen and (max-width: 400px) {
				
				:global(:root) {
					--size: 0.65;
				}
				

			}

		`}</style>
    </section>
}

export default Schedule