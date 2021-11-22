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

			section {
				position: relative;
				z-index: 1;
				background-color: var(--blue-opacity);
				border-top-left-radius: 50%;
				border-bottom-left-radius: 50%;
				border: 1px solid white;
				display: grid;
				align-items: center;
				padding-right: 2rem;
				padding-left: 5rem;
				padding:  7rem 2rem 7rem 5rem;
				justify-self: flex-end;
			}

			h2 {
				text-align: center;
				font-size: 2.5rem;
				color: var(--light-orange);
				margin-bottom: .5rem;
			}

			.schedule-wrapper {
				
			}

			.schedule {
			}

			ul {
				color: white;
				display: grid;
				grid-template-columns: repeat(7, 4.2rem);
				font-size: .7rem;
			}

			li {
				border: 1px solid white;
				display: grid;
				place-items: center;
				padding: .7rem .5rem;
				text-transform: capitalize;
			}

			.close {
				background-color: var(--light-orange);
			}

			.size {
				font-size: 2rem;
			}

		`}</style>
	</section>
}

export default Schedule