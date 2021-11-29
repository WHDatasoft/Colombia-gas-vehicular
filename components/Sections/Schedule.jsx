const Schedule = () => {
	return <section className="container">

		<div className="schedule-wrapper">
			<h2>Horario de atención</h2>
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
				background-color: var(--blue-opacity);
				border-top-left-radius: 50%;
				border-bottom-left-radius: 50%;
				border: 1px solid white;
				border-right: none;
				display: grid;
				align-items: center;
				padding-right: calc(2rem * var(--size));
				padding-left: calc(5rem * var(--size));
				padding:  calc(7rem * var(--size)) calc(2rem * var(--size)) calc(7rem * var(--size)) calc(5rem * var(--size));
				justify-self: flex-end;
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
					--size: 0.7;
				}
			}

			@media screen and (max-width: 460px) {
				:global(:root) {
					--size: 0.65;
				}
			}

		`}</style>
	</section>
}

export default Schedule