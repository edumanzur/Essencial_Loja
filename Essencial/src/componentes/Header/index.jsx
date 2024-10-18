import "./style.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header id="cabeca">
                <Link to='/'><h1 id="titulo">ESSENCIAL</h1></Link>
                <div id="botoes">
                    <Link to='/Produtos'><button className="botao">Produtos</button></Link>
                    <Link to='/Cadastro'><button className="botao">Cadastrar</button></Link>
                </div>
            </header>
        </>
    )
}