import "./style.css"
import terno from '../../assets/Terno_Cadastro.png'

export default function Cadastrar() {
    return (
        <>
            <main id="cad">
                <div id="cadastrar-se">
                    <h1 id="palavra">Cadastre-se</h1>
                    <img src={terno} alt="Terno" id="terninho"/>
                </div>
                <div id="informacoes">
                    <form action="" id="tabela">
                        <input type="text" placeholder="E-mail" className="inputs" required />
                        <input type="password" placeholder="Senha" className="inputs" required />
                        <input type="password" placeholder="Confirmar Senha" className="inputs" required />
                        <button id="cadas">Cadastrar-se</button>
                    </form>
                </div>
            </main>
        </>
    )
}