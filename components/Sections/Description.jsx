const Description = ({ title, textList, icon, left, right, children }) => {
	return <section>

		<h3>{title}</h3>
		{
			textList.map((text, index) => (
				<div key={Math.random()}>
					<p>{text}</p>
					{textList.length - 1 !== index ? <br /> : ''}
				</div >
			))
		}

		{
			children
		}
		{
			icon
				?
				<img src={`/icon/${icon}`} alt="" />
				:
				null
		}

		<style jsx>{`

			section {
				margin: 2.5rem 0;
				background-color: var(--smoth-green);
				padding: 5rem 9rem;
				position: relative
			}

			h3 {
				font-size: 1.5rem;
				position: absolute;
				top: 0;
				left: 50%;
				background-color: var(--blue);
				color: white;
				transform: translate(-50%, -30%);
				padding: 1rem 3rem;
				border-radius: 1rem;
				text-align: center;
			}

			p {
				font-weight: 0;
				line-height: 1.3rem;
				color: #222;
				text-align: justify;
			}

			
			img {
				height: 2rem;
				position: absolute;
				bottom: 0;	
				${right ? 'right: 7rem' : ''}
				${left ? 'left: 7rem' : ''}
			}

			@media screen and (max-width: 625px) {

				section {
					padding: 4rem 3rem;
				}

			}
		

		`}</style>
	</section>
}

export default Description