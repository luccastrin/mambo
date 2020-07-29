import React, {useState} from "react";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import carouselImage from "../../assets/carousel-image.png";
import imageSection from "../../assets/image-section.png";
import carneImg from "../../assets/carne.png";
import starts from "../../assets/starts.svg";
import singleImg from "../../assets/image.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import "./style.scss";

function Index() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	function handleModalOpen() {
		setIsModalVisible(true);
		console.log("aberto!");
	}

	function handleModalClose() {
		setIsModalVisible(false);
	}

	return (
		<>
			<Header onOpen={handleModalOpen} />

			<section id="carousel-section">
				<div className="container">
					<Carousel>
						<div>
							<img src={carouselImage} alt="Imagem do carousel" />
							<p className="legend">Legend 1</p>
						</div>
						<div>
							<img src={carouselImage} alt="Imagem do carousel" />
							<p className="legend">Legend 2</p>
						</div>
						<div>
							<img src={carouselImage} alt="Imagem do carousel" />
							<p className="legend">Legend 3</p>
						</div>
					</Carousel>
				</div>
			</section>

			<section id="multiple-images">
				<div className="container">
					<ul>
						<li>
							<img src={imageSection} alt="Imagem da sessão" />
						</li>
						<li>
							<img src={imageSection} alt="Imagem da sessão" />
						</li>
						<li>
							<img src={imageSection} alt="Imagem da sessão" />
						</li>
					</ul>
				</div>
			</section>

			<section id="carousel-api">
				<div className="container">
					<div className="slider">
						<div className="carousel-content">
							<img
								className="product-image"
								src={carneImg}
								alt="Imagem do produto"
							/>
							<div className="alignment">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img src={starts} alt="estrelas" />
								<h3>R$16,75</h3>
								<Link to="/detalhes">Visualizar</Link>
							</div>
						</div>
						<div className="carousel-content">
							<img
								className="product-image"
								src={carneImg}
								alt="Imagem do produto"
							/>
							<div className="alignment">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img src={starts} alt="estrelas" />
								<h3>R$16,75</h3>
								<Link to="/detalhes">Visualizar</Link>
							</div>
						</div>
						<div className="carousel-content">
							<img
								className="product-image"
								src={carneImg}
								alt="Imagem do produto"
							/>
							<div className="alignment">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img src={starts} alt="estrelas" />
								<h3>R$16,75</h3>
								<Link to="/detalhes">Visualizar</Link>
							</div>
						</div>
						<div className="carousel-content">
							<img
								className="product-image"
								src={carneImg}
								alt="Imagem do produto"
							/>
							<div className="alignment">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img src={starts} alt="estrelas" />
								<h3>R$16,75</h3>
								<Link to="/detalhes">Visualizar</Link>
							</div>
						</div>
						<div className="carousel-content">
							<img
								className="product-image"
								src={carneImg}
								alt="Imagem do produto"
							/>
							<div className="alignment">
								<h2>Bovino in natura</h2>
								<h1>
									Carne Moída de Patinho Bovina Resfriada
									Bandeja
								</h1>
								<img src={starts} alt="estrelas" />
								<h3>R$16,75</h3>
								<Link to="/detalhes">Visualizar</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="single-image">
				<div className="container">
					<img src={singleImg} alt="Imagem" />
				</div>
			</section>

			<Footer />

			{isModalVisible ? <Modal onClose={handleModalClose} /> : null}
		</>
	);
}

export default Index;
