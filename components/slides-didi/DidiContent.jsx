const DidiContent = () => {
    return <>

        <div className="title">
            <h3>
                <span className="big-text">Conoce los descuentos</span>
                <span className="small-text">que tenemos preparados para ti</span>
            </h3>
        </div>
        <img src="/icon/servitek.svg" alt="" className="final" />



        <style jsx>{`

			h3 {
				color: white;
				display: grid;
				justify-items: center;
				text-align: center;
			}

			.title {
				font-size: 1rem;
			}

			.big-text {
				font-size: 5.5em;
			}

			.small-text {
				font-size: 2em;
			}

			img {
				height: 8rem;
			}

			@media screen and (max-width: 1250px) {

				.title {
					font-size: .8rem;
				}

			}

			@media screen and (max-width: 1100px) {

				.title {
					font-size: .6rem;
				}

			}

			@media screen and (max-width: 870px) {

				.title {
					font-size: .5rem;
				}

			}

			

		`}</style>
    </>
}

export default DidiContent