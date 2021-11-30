const Row = () => {
	return <div>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<style jsx>{`

			img {
				display: block;
				height: 2rem;
				margin: 1rem auto;
				animation: move 1s infinite alternate-reverse;
			}

			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}

		`}</style>
	</div>
}

export default Row