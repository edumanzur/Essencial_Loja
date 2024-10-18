import "./style.css"
import Terno from '../../assets/Terno_Home.png'

export default function Main() {
    return (
        <>
            <main id="home">
                <div>
                    <h1 id="texto"><em>Arrume-se da<br />melhor maneira</em></h1> 
                </div> 
                <div>
                    <img src={Terno} alt="Terno"  id="terno1"/>
                </div>
            </main>
        </>
    )
}