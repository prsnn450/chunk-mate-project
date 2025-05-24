import React from 'react';
import HomePage from './pages/HomePage';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="app">

      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;