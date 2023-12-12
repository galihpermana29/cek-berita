import { Navbar, Container, Nav, Image, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import '../style/landingPage.css';
import logo from '../assets/logo.png';
import hp from '../assets/hp.png';
import ai from '../assets/ai.png';
import lapor from '../assets/lapor.png';
import GreenButton from '../assets/green_button.png';
import RedButton from '../assets/red_button.png';
import Wave from 'react-wavify';

const NavigationBar = () => {
	return (
		<div className="myBG">
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

				<div className="body-guardian">
					<Row>
						<Col lg={7} className="col-left">
							<div className="text-bold">
								<div className="pemilu">PEMILU DAMAI</div>
								<div className="indo">INDONESIA EMAS</div>
							</div>
							<div className="text-thin">
								<div className="melangkah">
									“Melangkah Bersama: Indonesia Emas 2045, Sebuah
								</div>
								<div className="perjalanan">
									Perjalanan Menuju Persatuan dan Kesatuan”
								</div>
							</div>
						</Col>
						<Col lg={4} className="col-right">
							<Image src={hp} className="hp"></Image>
						</Col>
					</Row>
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
				className="wave"
			/>
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
				className="wave2"
			/>
			<Container>
				<div>
					<div className="section2-title">FITUR UNGGULAN</div>
					<hr className="line-title" />
				</div>
				<div className="card-fitur">
					<Row>
						<Col>
							<Card style={{ width: '18rem' }} className="fitur1">
								<Card.Body>
									<Card.Title>
										<Image src={ai}></Image>
									</Card.Title>
									<Card.Subtitle className="mb-2 title-cek">
										Cek Berita
									</Card.Subtitle>
									<Card.Text>
										Fitur pengecekan berita berbasis AI untuk mengetahui berita
										hoax dan hate speech selama Pemilu.
									</Card.Text>
									<Card.Link href="cekberita" className="gr-button">
										<Image src={GreenButton}></Image>
									</Card.Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }} className="fitur2">
								<Card.Body>
									<Card.Title>
										<Image src={lapor}></Image>
									</Card.Title>
									<Card.Subtitle className="mb-2 title-lapor">
										Lapor Berita
									</Card.Subtitle>
									<Card.Text>
										Sarana masyarakat untuk melaporkan berita hoax dan hate
										speech selama Pemilu
									</Card.Text>
									<Card.Link href="cekberita" className="gr-button">
										<Image src={RedButton}></Image>
									</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
				<div className="indo-bebas">
					"Indonesia Emas, Terbebas dari Hoax dan Hate Speech."
				</div>
			</Container>
			<div className="footer">Guardian AI 2023</div>
		</div>
	);
};

export default NavigationBar;
