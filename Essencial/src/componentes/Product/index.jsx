import "./style.css"
import Terno from '../../assets/Terno_Home.png'
import Colete from '../../assets/colete.png'
import Polo from '../../assets/polo.png'
import Filtro from '../../assets/Filtro.png'

export default function Product() {
    const filtro = () => {
        let caixa = document.getElementById('parte')
        if(caixa.style.display == 'none') {
            caixa.style.display = 'flex'
        } else {
            caixa.style.display = 'none'
        }
    }

    return (
        <>
            <main id="prod">
                <div id="filtro">
                    <div id="filt">
                        <button className="bot" id="esq">Populares</button>
                        <button id="fil" onClick={filtro}><img src={Filtro} alt="Filtro" /></button>
                        <button className="bot" id="dir">Recentes</button>
                    </div>
                </div>
                <div id="parte">
                    <div id="espaco"></div>
                    <div id="filtragem">
                        <div className="form">
                            <label>Camisas</label>
                            <input type="checkbox" />
                        </div>
                        <div className="form">
                            <label>Calças</label>
                            <input type="checkbox" />
                        </div>
                        <button id="botao-filtrar" type="submit">Filtrar</button>
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
