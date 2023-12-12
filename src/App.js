import {
	BrowserRouter as Router,
	Routes,
	Route,
	HashRouter,
} from 'react-router-dom';
import { GoogleSearch } from './components/api/GoogleSearch';
import { Hoax } from './components/api/Hoax';
import { Hate } from './components/api/Hate';
import NavigationBar from './components/NavigationBar';
import CekBerita from './components/page/CekBerita';
import SearchPage from './components/page/search/SearchPage';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lapor from './components/page/Lapor';

function App() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState(
		sessionStorage.getItem('searchTerm') || ''
	);
	const [searchData, setSearchData] = useState(
		JSON.parse(sessionStorage.getItem('searchData')) || {}
	);
	const [hoaxData, setHoaxData] = useState(
		sessionStorage.getItem('hoaxData') || {}
	);
	const [hateData, setHateData] = useState(
		sessionStorage.getItem('hateData') || {}
	);

	useEffect(() => {
		sessionStorage.setItem('searchTerm', searchTerm);
		sessionStorage.setItem('searchData', JSON.stringify(searchData));
		sessionStorage.setItem('hoaxData', hoaxData);
		sessionStorage.setItem('hateData', hateData);
		// Stringify hoaxData before storing
	}, [searchTerm, searchData, hoaxData, hateData]);

	const setSearch = async (term) => {
		setSearchData({ items: [] });
		setSearchTerm(term);
		const searches = await GoogleSearch(term);
		setSearchData(searches);
		const hoax = await Hoax(term); // Fetch hoax data
		setHoaxData(hoax); // Set hoax data in state
		const hate = await Hate(term);
		setHateData(hate);
		sessionStorage.removeItem('searchData');
		sessionStorage.setItem('searchTerm', term);
		sessionStorage.setItem('searchData', JSON.stringify(searches));
		sessionStorage.setItem('hoaxData', hoax); // Store stringified hoax data in session storage
		sessionStorage.setItem('hateData', hate);
		navigate(`/search?q=${term}`);
	};

	return (
		<Routes>
			<Route path="/" element={<NavigationBar />} />
			<Route
				exact
				path="/cekberita"
				element={<CekBerita setSearch={setSearch} />}
			/>
			<Route
				exact
				path="/search"
				element={
					<SearchPage
						searchData={searchData}
						setSearch={setSearch}
						hoaxData={hoaxData}
						hateData={hateData}
					/>
				}
			/>
			<Route exact path="/lapor" element={<Lapor />} />
		</Routes>
	);
}

export default function WrappedApp() {
	return (
		<HashRouter basename="/">
			<App />
		</HashRouter>
	);
}
