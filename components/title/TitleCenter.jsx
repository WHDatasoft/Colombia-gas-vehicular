const TitleCenter = ({ title }) => {
	return <div className="container">

		<h2>{title}</h2>

		<style jsx>{`

			h2 {
				font-size: 1.5rem;
				position: relative;
				color: white;
				text-align: center;
				padding: 1.5rem;
				background-color: var(--orange);
				margin-bottom: 2rem;
			}

		`}</style>
	</div>
}

export default TitleCenter