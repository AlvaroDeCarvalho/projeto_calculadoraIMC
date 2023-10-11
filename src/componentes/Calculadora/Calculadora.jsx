import { useState, useEffect } from 'react';
import styles from './Calc.module.css';

const Calculadora = ({ peso, altura }) => {
    const imc = parseFloat(peso) / parseFloat(altura);
    const [classificacao, setClassificacao] = useState('');

    useEffect(() => {
        if (!isNaN(imc)) {
            if (imc <= 18.5) {
                setClassificacao('a baixo do peso');
            } else if (imc >= 18.5 && imc <= 24.9) {
                setClassificacao('eutrofia');
            } else if (imc >= 25 && imc <= 29.9) {
                setClassificacao('Sobrepeso');
            } else {
                setClassificacao('obeso');
            }
        }
    }, [imc]);

    return (
        <>
            <div className={styles.imc}>
                <h3>SEU IMC É DE: <b className={styles.resultado}>{isNaN(imc) ? '' : imc}</b></h3>
                <p className={styles.classificacaoImc}>{classificacao}</p>
            </div>
        </>
    );
};

export default Calculadora;
