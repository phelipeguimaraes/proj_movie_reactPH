import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
    <p>Criado por <Link to='https://www.linkedin.com/in/phelipe-guimar%C3%A3es-8bb80a215/' target='_blank'>Phelipe Guimarães</Link> © 2025</p>
    <span><Link to='https://github.com/phelipeguimaraes' target='_blank'>GitHub</Link></span>
  </footer>
  )
}

export default Footer