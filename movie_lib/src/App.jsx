import { Link, Outlet } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="footer">
        <p>Criado por <Link to='https://www.linkedin.com/in/phelipe-guimar%C3%A3es-8bb80a215/' target='_blank'>Phelipe Guimarães</Link> © 2025</p>
        <span><Link to='https://github.com/phelipeguimaraes' target='_blank'>GitHub</Link></span>
      </footer>
    </>
  );
}

export default App
