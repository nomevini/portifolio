import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "Início"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Início</Link>
							</li>
							<li
								className={
									active === "sobre"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">Sobre</Link>
							</li>
							<li
								className={
									active === "projetos"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projetos</Link>
							</li>
							<li
								className={
									active === "contatos"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contato</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
