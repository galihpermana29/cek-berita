import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import React from 'react';
import logo from '../../../assets/logo.png';
import './Search.css';

const HeaderSearch = () => {
	return (
		<Container>
			<div className="nav-head">
				<Navbar expand="lg">
					<Navbar.Brand href="/" className="nav-guardian">
						<Image src={logo} className="logo"></Image>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0 nav-left"
							style={{ maxHeight: '100px' }}
							navbarScroll>
							<Nav.Link href="/" className="tentang">
								TENTANG
							</Nav.Link>
							<Nav.Link href="/#/cekberita" className="cekberita">
								CEK BERITA
							</Nav.Link>
						</Nav>
						<Nav className="justify-content-center lapor-bg">
							<Nav.Link href="/#/lapor" className="lapor-link">
								LAPOR BERITA
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</Container>
	);
};

export default HeaderSearch;
