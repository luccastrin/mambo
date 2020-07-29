import React from "react";

function Modal({onClose}) {
	return (
		<>
			<section id="modal">
				<div className="container">
					<form>
						<ul>
							<li>
								<h2>Informações do produto</h2>
							</li>
							<li>
								<h3>
									Escolha aqui as características do produto a
									ser cadastrado.
								</h3>
							</li>
							<li>
								<input
									type="text"
									placeholder="Característica do produto"
								/>
							</li>
							<li>
								<input
									type="text"
									placeholder="Nome do produto"
								/>
							</li>
							<li>
								<select>
									<option value="">Orgânico</option>
									<option value="">Processado</option>
								</select>
							</li>
							<li>
								<input
									type="text"
									placeholder="Valor do produto"
								/>
							</li>
							<li>
								<textarea placeholder="Descrição do produto"></textarea>
							</li>
							<li>
								<input type="file" />
							</li>
							<li>
								<button type="submit">Cadastrar</button>
								<a onClick={onClose} href="#/">
									Fechar
								</a>
							</li>
						</ul>
					</form>
				</div>
			</section>
		</>
	);
}

export default Modal;
