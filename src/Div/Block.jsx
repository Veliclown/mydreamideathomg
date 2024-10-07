import React from 'react'
import styles from './Block.module.css'

function Block({children}){
    return(
    <div>
        {React.Children.map(children, deti =>(
            <div className={styles.divblockmain}>{deti}</div>
        ))}
    </div>
    )
}
export default Block