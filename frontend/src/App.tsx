import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/Create';
import Cadastro from "./pages/Cadastro";
import LandingPage from "./pages/LandingPage"; 
import ProtectedRoute from './routes/ProtectedRoutes';

function App() {
  return (
    <Router>
    <Routes>
      {/* Rota inicial leva para LandingPage */}
      <Route path="/" element={<LandingPage />} />

      {/* Login público */}
      <Route path="/login" element={<Login />} />

      {/* Cadastro Público */}
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Home protegida */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Criação de usuário protegida */}
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;