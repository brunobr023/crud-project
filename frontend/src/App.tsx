// src/App.jsx
import { useEffect, useState } from 'react';
import { api } from './services/api.ts';

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    api.get('/teste').then(res => setMensagem(res.data));
  }, []);

  return <h1>{mensagem}</h1>;
}

export default App;