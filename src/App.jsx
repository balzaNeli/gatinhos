
import { useState } from 'react';
import './App.css';

function App() {
  const [catUrl, setCatUrl] = useState('https://cataas.com/cat');
  const [isLoading, setIsLoading] = useState(true);

  const fetchNewCat = () => {
    setIsLoading(true);
    setCatUrl(`https://cataas.com/cat?t=${Date.now()}`);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="container">
      <main className="content">
        <h1 className="title">Gatinhos</h1>
        <div className="image-wrapper">
          {isLoading && <div className="loader">Carregando...</div>}
          <img
            src={catUrl}
            alt="Um gato aleatório"
            className={`cat-image ${isLoading ? 'hidden' : ''}`}
            onLoad={handleImageLoad}
          />
        </div>
        <button className="fetch-button" onClick={fetchNewCat} disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Mais um gatinho!'}
        </button>
      </main>
    </div>
  );
}

export default App;
