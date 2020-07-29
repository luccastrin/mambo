import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {FiPlus} from "react-icons/fi";

import logoImg from "../assets/logo-mambo.svg";

function Header({onOpen}) {
	return (
		<>
			<header id="header">
				<div className="header-top">
					<div className="container">
						<ul>
							<li>
								<a href="/">Fale conosco</a>
							</li>
							<li>
								<a href="/">Nossas lojas</a>
							</li>
							<li>
								<a href="/">Política de trocas</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="header-bottom">
					<div className="container">
						<Link to="/">
							<div className="logo">
								<img src={logoImg} alt="Logo" />
							</div>
						</Link>

						<div className="search-shopping">
							<input
								type="text"
								placeholder="Procure aqui suas compras!"
							/>
							<div className="fa-search">
								<FaSearch className="search" />
							</div>
						</div>

						<div className="add-product">
							<a href="#/">
								<FiPlus onClick={onOpen} />
							</a>
							<p>Adicionar produto</p>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
