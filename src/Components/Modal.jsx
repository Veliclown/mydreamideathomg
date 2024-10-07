import React from "react"
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.css';


function Modal({isOpen, isClosed}){
    return(
        <CSSTransition
        in={isOpen}
        timeout={300}
        classNames='okno'
        unmountOnExit
        >
            <div className={styles.okno}>
            <div className={styles.vidjet}>
                <h1>Вилли вонка</h1>
                <button onClick={isClosed}>Закрити</button>
            </div>
            </div>
        </CSSTransition>
    )

}
export default Modal