import { Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
		</Routes>
	);
}

export default App;
