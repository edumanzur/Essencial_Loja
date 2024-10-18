import "./style.css"
import esquerda from '../../assets/seta_esquerda.png'
import direita from '../../assets/seta_direita.png'
import roupas from '../../assets/roupas.png'
import calcas from '../../assets/calças.png'
import cinto from '../../assets/cinto.png'

export default function Footer() {
    return (
        <>
            <footer id="foot">
                <img src={esquerda} alt="Seta para a esquerda" />
                <img src={roupas} alt="Roupas Simples" className="img_foot" id="item1"/>
                <img src={calcas} alt="Calças Jeans" className="img_foot"/>
                <img src={cinto} alt="Cinto" className="img_foot"/>
                <img src={direita} alt="Seta para a direita" />
            </footer>
        </>
    )
}