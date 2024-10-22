import "./style.css"
import esquerda from '../../assets/seta_esquerda.png'
import direita from '../../assets/seta_direita.png'
import roupas from '../../assets/roupas.png'
import calcas from '../../assets/calças.png'
import cinto from '../../assets/cinto.png'

export default function Footer() {
    const passar = () => {
        let tudo = document.getElementById('itens');
        let itens = Array.from(tudo.children);
        if (itens.length > 0) {
            let x = itens.shift();
            tudo.appendChild(x);
        }
    }
    const passar2 = () => {
        let tudo = document.getElementById('itens');
        let itens = Array.from(tudo.children);
        if (itens.length > 0) {
            let x = itens.pop();
            tudo.insertBefore(x, tudo.firstChild); 
        }
    }
    return (
        <>
            <footer id="foot">
                <button onClick={passar} className="setas"><img src={esquerda} alt="Seta para a esquerda" id="esq" className="seta"/></button>
                <div id="itens">
                    <img src={roupas} alt="Roupas Simples" className="img_foot" id="item1"/>
                    <img src={calcas} alt="Calças Jeans" className="img_foot" id="item2"/>
                    <img src={cinto} alt="Cinto" className="img_foot" id="item3"/>
                </div>
                <button className="setas" onClick={passar2}><img src={direita} alt="Seta para a direita" id="dir" className="seta"/></button>
            </footer>
        </>
    )
}