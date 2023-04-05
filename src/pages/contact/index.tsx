import styles from './index.module.css';
import Navbar from "../../components/navbar";

export default function ContactPage() {
    return (
        <div className={styles.content}>
            <Navbar showHome={true}/>
            <div className={styles.main}>
                <h1 className={styles.title}>Need to get in contact?</h1>
                <a style={{marginTop: 100}} className={styles.link} href={'mailto:bramer.bo@gmail.com'} id={styles.link1}>bramer.bo@gmail.com</a>
                <a className={styles.link} href={'/contact'} id={styles.link2}>https://bo-bramer.com/contact</a>
            </div>
        </div>
    );
};