import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';
import '../../style/cekberita.css';
import logo from '../../assets/logo.png';

const CekBerita = ({ setSearch }) => {
	const [term, setTerm] = useState('');
	const clearTerm = () => {
		setTerm('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			/^[a-zA-Z0-9].*/.test(term) ||
			/^[a-zA-Z0-9]+[" "]/.test(term) ||
			/^[" "]+[a-zA-Z0-9]/.test(term)
		) {
			setSearch(term.trim());
		}
	};

	const handleSearch = () => {
		if (
			/^[a-zA-Z0-9].*/.test(term) ||
			/^[a-zA-Z0-9]+[" "]/.test(term) ||
			/^[" "]+[a-zA-Z0-9]/.test(term)
		) {
			setSearch(term.trim());
		}
	};

	useEffect(() => {
		document.title = 'Cek Berita';
	}, []);

	return (
		<div className="mySecondBG">
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
			<Container>
				<div className="cek-body">
					<div className="page2-title">
						Verifikasi Mudah: Cek Kebenaran Beritamu!
					</div>
					<div className="page2-content">
						<div className="line1-content ">
							"Menyaring Kebenaran: Cek Hoax, Analisis Berita, dan Pemetaan
							Sentimen
						</div>
						<div className="line2-content">
							Pemilu untuk Informasi yang Akurat dan Terpercaya"
						</div>
					</div>
					<div className="search-box d-flex py-2 align-items-center ">
						<button
							type="button"
							className="btn search"
							onClick={() => handleSearch()}>
							<i className="fa fa-search"></i>
						</button>
						<form
							className="form-search text-form"
							onSubmit={(e) => handleSubmit(e)}>
							<input
								type="text"
								name="term"
								id="term"
								className="search-google"
								value={term}
								onChange={(e) => setTerm(e.target.value)}
							/>
							{term ? (
								<button
									type="button"
									className="btn closing"
									onClick={() => clearTerm()}>
									<i className="fa fa-close"></i>
								</button>
							) : (
								''
							)}
						</form>
					</div>
				</div>
			</Container>
			<Wave
				fill="#ffffff"
				paused={false}
				style={{ display: 'fixed' }}
				options={{
					height: 2,
					bones: 6,
					amplitude: 20,
					color: '#ffffff',
					speed: 0.35,
				}}
				className="wave-page2"
			/>
		</div>
	);
};
export default CekBerita;
