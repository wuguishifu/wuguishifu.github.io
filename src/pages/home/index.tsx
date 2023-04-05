import styles from './index.module.css';
import Navbar from "../../components/navbar";
import Chibi from '../../assets/chibi/chibi-reflected.png'

export default function HomePage() {
    function handleShowMe() {
        console.log('hello world please show me something cool');
    }

    return (
        <div className={styles.content}>
            <Navbar showHome={false}/>
            <div className={styles.twoColumn}>
                <div className={styles.column} style={{paddingLeft: '10%'}}>
                    <div className={styles.title1}>Hey there!</div>
                    <div className={styles.title2}>I'm <span className={'blue'}>Bo Bramer.</span></div>
                    <div className={styles.paragraph}>I build educational apps and websites.</div>
                    <div className={styles.paragraph}>Ask me about chemistry!</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className={styles.button} onClick={handleShowMe}>Show me something cool!</div>
                    </div>
                </div>
                <div className={styles.column}>
                    <img src={Chibi} className={styles.graphic} alt={'chibi bo'}/>
                </div>
            </div>
        </div>
    );
}