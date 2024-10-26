import { useState } from "react"
import styles from "./Calc.module.css"

const Formulario = () => {

    const[altura, setAltura] = useState(0);
    const[peso, setPeso] = useState(0);
    const imc = peso / (altura ** 2);

    const calculoImc = () => {
        if(imc >= 1) {
            return (
                <h2>
                    Seu IMC é de : {imc.toFixed(1)}%
                </h2>
            )
        }
    }

    return(
        <div className="container">
        <h1>Calculadora de IMC com React</h1>
        <form className={styles.form}>
            <label>Digite a altura</label>
            <input className={styles.input} type="number" onChange={evento => setAltura(evento.target.value)} />
            <label>Digite o peso</label>
            <input className={styles.input} type="number" onChange={evento => setPeso(evento.target.value)}  />
        </form>
        {calculoImc()}
        <img className={styles.tb} src="src/images/tabela-IMC.png" alt="Tabela de IMC" />
        </div>
    )
}

export default Formulario