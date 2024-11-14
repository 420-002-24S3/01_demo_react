import styles from './BusinessCard.module.css'


export default function BusinessCard() {
    return (
    <div className={styles.card}>
    <h1>Antoine Moevus</h1>
    <p>je suis prof.</p>
    </div>
    )
}

export function LeasureCard() {
    return (
    <>
    <div style={{backgroundColor: 'ivory'}}>
    <h1>Antoine Yo!</h1>
    <p>je suis en train de faire à manger.</p>
    </div>
    </>)
}


//export default BusinessCard