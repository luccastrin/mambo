import React from "react";

import imageMeet from "../../assets/carne.png";
import imageLeaf from "../../assets/leaf.svg";
import starts from "../../assets/starts.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.scss";

function Index() {
	return (
		<>
			<Header />

			<section id="details">
				<div className="container">
					<div className="alignment-box">
						<div className="details-content">
							<img src={imageMeet} alt="Imagem produto" />

							<div className="bovino-natura">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img
									className="starts"
									src={starts}
									alt="estrelas"
								/>
								<div className="food-type">
									<img src={imageLeaf} alt="Imagem folha" />
									<p>Orgânico</p>
								</div>
								<h3>R$16,75</h3>
							</div>
						</div>
						<h4>Descrição do produto</h4>
						<h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Proin urna diam, interdum vitae velit in,
							bibendum ultrices erat. Pellentesque sed egestas
							nulla, quis tincidunt est. Fusce quis purus porta,
							porta est vel, rhoncus felis.
						</h5>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Index;
