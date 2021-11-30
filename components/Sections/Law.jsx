const Law = () => {
	return <section>

		<h2>LEY 2128</h2>
		<h3>Art. 13 y Art 14</h3>

		<br />
		<br />

		<p>
			<span>ARTÍCULO 13.</span> {' '} TRANSPORTE PÚBLICO DE PASAJEROS. A partir de los doce (12) meses siguientes a la fecha de entrada en vigencia de la presente Ley y por el término de los diez (10) años siguientes, las ciudades que cuenten con Sistemas de Transporte Estratégico, Integrado o Masivo deberán implementar políticas públicas, programas y acciones tendientes a garantizar que por lo menos el treinta por ciento (30%) de los vehículos utilizados para la operación de las flotas, operen con motores dedicados a gas combustible, cuando se pretenda aumentar la capacidad transportadora de los sistemas; cuando se requiera reemplazar un vehículo por destrucción total o parcial que imposibilite su utilización o reparacióny cuando requiera reemplazarse al finalizar su vida útil.
		</p>

		<br />

		<p>
			<span>PARÁGRAFO 1.</span> {' '} Los pliegos de condiciones de los contratos que tengan por objeto la concesión para la operación de estos Sistemas de Transporte Estratégico, Integrado o Masivo, deberán contener la obligación para el oferente 5 2128 de cumplir con el porcentaje establecido en el presente artículo. Para aquel oferente que proponga un porcentaje superior a lo establecido en el presente artículo, se le otorgará mayorpuntaje dentro de los criterios de calificación en el proceso licitatorio.
		</p>
		<p>
			<span>PARÁGRAFO 2.</span> {' '} Los vehículos Dedicados a gas combustible, que se vinculen a los sistemas de transporte en virtud de la presente Ley, podrán acceder a los beneficios de portar todo tipo de Publicidad Exterior Visual - PEV, con el objeto de favorecer los modelos financieros para la adquisición de vehículos a gas combustible. Las autoridades territoriales y municipales expedirán el estatuto local de PEV para que los sistemas de transporte puedan instalarla en los respectivos vehículos.
		</p>
		<p>
			<span>PARÁGRAFO 3.</span> {' '} La anterior disposición sólo aplicará para los segmentos de vehículos a gas combustible que para la fecha en que se compren o contraten, tengan una oferta comercial en Colombia.
		</p>

		<br />

		<p>
			<span>ARTÍCULO 14.</span> {' '} INICIATIVA PÚBLICA DE USO DE VEHÍCULOS A GAS COMBUSTIBLE. Dentro de los doce (12) meses siguientes a la fecha de entrada en vigencia de la presente Ley, el Gobierno l\Iacional, los municipios de categoría 1 y especial y los prestadores del servicio público de transporte, deberán cumplir con una cuota mínima del treinta por ciento (30%) de vehículos convertidos o dedicados a gas combustible en los vehículos que anualmentesean comprados o contratados para su uso, teniendo en cuenta las necesidades de cada entidad.
		</p>

		<br />

		<p>
			<span>PARÁGRAFO 1.</span> {' '} La anterior disposición sólo aplicará para los segmentos de vehículos a gas combustible que para la fecha en que se compren o contraten, tengan una oferta comercial en Colombia.
		</p>
		<p>
			<span>PARÁGRAFO 2.</span> {' '} Para garantizar el cumplimiento de la meta dispuesta en el presente artículo, los l\1inisterios de Ambiente y Desarrollo Sostenible, Transporte y Hacienda y Crédito Público, deberán estructurar un programa con sus respectivasestrategias para el logro de la iniciativa pública establecida.
		</p>
		<p>
			<span>PARÁGRAFO 3.</span> {' '} La Contraloría General de la República será la entidad encargada de hacer seguimiento y control al cumplimiento del presente artículo.
		</p>
		<div className="law">

			<a href="/download/ley-2128-del-4-de-agosto-de-2021.pdf" download>CONSULTAR LEY COMPLETA</a>

		</div>

		<style jsx>{`

			section {
				position: relative;
				background: rgb(94,175,127);
				background: linear-gradient(90deg, rgba(94,175,127,1) 0%, rgba(139,201,125,1) 100%);
				border: .7rem solid white;
				padding: 2rem 4rem;
			}

			h2, h3 {
				color: var(--blue);
				text-align: center;
				font-weight: 800;
			}

			span {
				font-weight: 800;
				color: var(--blue);
			}

			p {
				line-height: 1.2rem;
				color: #444;
				text-align: justify;
				margin: .3rem 0;
			}

			.law {
				display: grid;
				justify-items: center;
			}

			a {
				display: block;
				margin:  2rem auto;
				padding: .5rem 2rem;
				border-radius: 1rem;
				color: var(--blue);
				font-weight: 600;
				background-color: white;
				text-align: center;
			}

		`}</style>
	</section>
}

export default Law