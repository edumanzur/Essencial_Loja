import "./style.css"
import Terno from '../../assets/Terno_Home.png'
import Colete from '../../assets/colete.png'
import Polo from '../../assets/polo.png'
import Filtro from '../../assets/Filtro.png'

export default function Product() {
    return (
        <>
            <main id="prod">
                <div id="filtro">
                    <div id="filt">
                        <button className="bot" id="esq">Populares</button>
                        <button id="fil"><img src={Filtro} alt="Filtro" /></button>
                        <button className="bot" id="dir">Recentes</button>
                    </div>
                    
                </div>
                <div id="produtos">
                    <img src={Terno} alt="Terno" className="produto"/>
                    <img src={Colete} alt="Colete" className="produto"/>
                    <img src={Polo} alt="Polo" className="produto"/>
                </div>
            </main>
        </>
    )
}
