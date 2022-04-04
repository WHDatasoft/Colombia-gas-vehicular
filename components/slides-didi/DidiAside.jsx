import ServiceLink from "../link/ServiceLink"

const DidiAside = ({ mainTitle, secondTitle, link, img, posImg }) => {
    return <>

        <h3>{mainTitle}</h3>
        <h4>{secondTitle}</h4>
        <img src={img} alt="" className="final" />
        {
            link
                ?
                <ServiceLink
                    url={link}
                />
                :
                ''
        }

        <style jsx>{`

			:global(:root) {
				--scale: 1
			}

			h4, h3 {
				text-align: center;
			}

			h3 {
				color: white;
				font-size: calc(4em * var(--scale));
				font-weight: 600;
			}

			h4 {
				box-sizing: border-box;
				color: var(--light-green);
				background-color: white;
				padding: calc(.5em * var(--scale)) calc(1em * var(--scale));
				font-size: calc(1.7em * var(--scale));
				width: 90%;

			}

			img {
				height: ${img === '/icon/servitek.svg' ? '8rem' : '5rem'};
				${posImg ? `grid-row: ${posImg}` : ''}
			}

			@media screen and (max-width: 1250px) {

				:global(:root) {
					--scale: 0.8;
				}
				

			}

			@media screen and (max-width: 1100px) {

				:global(:root) {
					--scale: 0.6;
				}
				
			}

			@media screen and (max-width: 870px) {

				:global(:root) {
					--scale: 0.5;
				}

			}


		`}</style>



        <style jsx>{`

			.container {
				
			}

		`}</style>
    </>
}

export default DidiAside