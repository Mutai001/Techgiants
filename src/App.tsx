import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
