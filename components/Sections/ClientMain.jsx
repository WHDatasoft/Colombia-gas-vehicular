const ClientMain = ({ backgroundImg, ContentAside, padding, sizeScreen, backgroundMini }) => {
	return <section>

		{
			ContentAside
		}


		<style jsx>{`

			section {
				background: url('${backgroundImg}') center 20%;
				background-size: cover;
				background-position: top 70%;
				height: ${sizeScreen ? 'calc(100vh - 8rem)' : '40rem'};
				position: relative;
				padding: ${padding ? '4rem' : '0'};
				display: grid;
				box-sizing: border-box;
				width: 100%;
			}

			@media screen and (max-width: 730px) {
				section {
					${backgroundMini ? `background: url('${backgroundMini}');` : ''}
					background-size: cover;
					background-position: top 70%;	
					padding: 0;
				}
			}

			

		`}</style>


	</section>
}

export default ClientMain