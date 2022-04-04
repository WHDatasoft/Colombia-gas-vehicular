import TitleRight from "../title/TitleRight"

const Graphyc = ({ title, subtitle, mainList, secondList, video }) => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q']
    return <article>

        <TitleRight
            title={title}
        />

        <div className="wrapper-section">
            <h2>{subtitle}</h2>
            <section>
                <video src={`/video/${video}.mp4`} autoPlay loop></video>
                <ul className="main-list">
                    {
                        mainList.map((text, index) => (
                            <li key={text}>
                                <p>
                                    <span>{alphabet[index]}</span>
                                    {text}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <div className="line"></div>
                <ul className="second-list">
                    {
                        secondList.map(text => (
                            <li key={text}>{text}</li>
                        ))
                    }
                </ul>
            </section>
        </div>

        <style jsx>{`

			.title {
				display: grid;
				grid-template-columns: 1fr auto;
			}

			.title img {
				height: 1rem;
				transform-origin: center;
				transform: rotate(-90deg);
				justify-self: flex-end;
				align-self: center;
			}

			h2 {
				position: relative;
				background-color: var(--blue);
				padding: 1rem 3rem 1rem 1rem;
				color: white;
				font-weight: 600;
				margin-bottom: .7rem;
			}

			h2:before {
				content: "";
				position: absolute;
				height: 120%;
				top: -20%;
				right: 0;
				border-style: solid;
				border-color: transparent var(--blue) transparent transparent;
				border-width: 5px 2rem 5px 0;
			}

			.wrapper-section  {
				position: relative;
				background-color: var(--smoth-green);
				margin-bottom: 3rem;
				padding: 2rem;
			}

			h2 {
				text-align: center;
				color: var(--blue);
				font-weight: 800;
				font-size: 1.2rem;
				margin-bottom: 2rem;
			}

			section {
				display: grid;
				grid-template-columns: 1fr auto 2px auto;
				grid-column-gap: 2rem;
				align-items: center; 
			}

			video {
				justify-self: center;
				height: 14rem;
			}

			.main-list {
				margin-left: 2rem;
			}

			.main-list li {
				padding: .4rem 0;
				max-width: 23rem;
				position: relative;
			}

			.main-list li span {
				color: var(--blue);
				font-weight: 700;
				position: absolute;
				left: -2rem;
				top: 50%;
				transform: translateY(-50%);
			}

			.line {
				height: 100%;
				width: 100%;
				background-color: var(--blue);
			}

			.second-list {
				margin-left: 2rem;
			}

			.second-list li {
				padding: 1rem 0;
				position: relative;
			}

			.second-list li:before {
				position: absolute;
				content: "";
				height: 1rem;
				width: 1rem;
				left: -2rem;
				border-radius: 50%;
				background-color: var(--light-green)

			}

			@media screen and (max-width: 1325px) {

				video {
					height: 11rem
				}

			}

			@media screen and (max-width: 1130px) {

				video {
					grid-row: 1/4;
				}

				section {
					grid-template-columns: 1fr auto;
				}

				.line {
					margin: 1rem 0;
					height: 2px;
					width: 100%;
					background-color: var(--blue);
				}

			}
			
			@media screen and (max-width: 860px) {

				video {
					grid-row: 1/2;
					grid-column: 1/4;
				}

				section {
					grid-template-columns: auto 2px auto;
					grid-row-gap: 2rem;
					padding: 2rem;
				}

				.line {
					height: 100%;
					width: 100%;
					background-color: var(--blue);
				}

			}

			@media screen and (max-width: 625px) {

				.main-list, .second-list {
					font-size: .8rem;
				}

			}

			@media screen and (max-width: 530px) {

				video {
					width: 100%;
				}

			}

		`}</style>
    </article>
}

export default Graphyc