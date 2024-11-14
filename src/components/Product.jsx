import styles from './Product.module.css'

export default function Produit() {
    console.log(styles)
    return (
        <div className={styles.card}>
        <h1>Produit 1</h1>
        <p className={styles.header1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, illo nobis necessitatibus aut a ratione eos magnam commodi at, cum sequi et ducimus, reiciendis facilis dolore eius animi. Aliquid, modi!</p>
        </div>
    )
}