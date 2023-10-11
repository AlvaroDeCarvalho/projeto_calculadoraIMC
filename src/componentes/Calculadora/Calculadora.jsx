import styles from './Calc.module.css'

const Calculadora = ({peso, altura}) => {
    return(
    <>
    
    <h3 className={styles.imc}>SEU IMC É DE: <b className={styles.resultado}>{isNaN(parseFloat(peso)/parseFloat(altura)) ? '' : parseFloat(peso)/parseFloat(altura)}</b></h3>
    
    </>
    )
}

export default Calculadora