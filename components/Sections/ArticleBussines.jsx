const ArticleBussines = ({ img, type, bussinesName, characterList }) => {
	return <article>

		<img src={`/img/${type ? 'repuestos' : 'empresas'}/${img}`} alt="" />
		<div className="description">
			<ul>
				<li>
					<span>{type ? 'Nombre:' : 'Empresa:'}</span>
					{' '}
					<h2>{bussinesName}</h2>
				</li>
				{
					characterList.map(item => (
						<li key={item}>{item}</li>
					))
				}
			</ul>
		</div>

		<div className="title">
			<span>{type ? '' : 'Empresa:'}</span>
			{' '}
			<h2>{bussinesName}</h2>
		</div>


		<style jsx>{`

			article {
				position: relative;
				width: 20rem;
				height: 20rem;
				cursor: pointer;
				border-right: 1px solid var(--dark-green);
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: relative;
				z-index: 2;
			}

			h2 {
				display: inline;
			}

			.title {
				position: absolute;
				bottom: -2rem;
				background-color: var(--blue);
				width: 100%;
				text-align: center;
				color: white;
				font-weight: 700;
				padding: 2rem 0 .5rem 0;
				border-radius: 0 0 1.5rem 1.5rem;
				transition: bottom .5s;
				pointer-events: none;
			}

			article:hover .title {
				bottom: 0rem;
			}


			.description {
				position: absolute;
				left: 2rem;
				bottom: 0;
				box-sizing: border-box;
				background-color: var(--blue);
				width: 16rem;
				color: white;
				padding: 1rem;
				border-radius: 0 0 2rem 2rem;
				z-index: 1;
				transition: bottom .5s .5s;
				height: 8rem;
			}

			article:hover .description {
				bottom: -8rem;
			}

			.description:before, .description:after  {
				content: "";
				position: absolute;
				height: 90%;
				width:2rem;
				background-color: var(--blue);
				top: 0;
				z-index: -1;
			}

			.description:before {
				right: -2rem;
				transform-origin: top right;
				transform: rotate(17.5deg);
			}

			.description:after  {
				left: -2rem;
				transform-origin: top left;
				transform: rotate(-17.5deg);
			}
			

			li {
				padding: .15rem;
			}

			

		`}</style>
	</article>
}

export default ArticleBussines