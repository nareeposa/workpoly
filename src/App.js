import React from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>Welcome To Restaurant Chiang Mai</h1>
        <p>อาหารไทยอร่อย!</p>
      </main>
      <main className="container mt-4">
          <Home/>
      </main>
      <main className="container mt-4">
          <Menu/>
      </main>
      <Footer />
    </div>
  );
}


export default App;