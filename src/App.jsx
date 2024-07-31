import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
