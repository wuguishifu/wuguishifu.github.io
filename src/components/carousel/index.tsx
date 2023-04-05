import {useState} from "react";
import 'remixicon/fonts/remixicon.css';
import styles from './index.module.css';

export default function Carousel({pages}: { pages: { imageUrl: string }[] }) {
    const [index, setIndex] = useState<number>(0);

    const next = () => setIndex(index => index + 1 === pages.length ? 0 : index + 1);
    const previous = () => setIndex(index => index - 1 === -1 ? pages.length - 1 : index - 1);

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
            <i className={`ri-arrow-left-s-line ${styles.carouselButton}`} onClick={previous}/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2em 0'}}>
                <img className={styles.carouselImage} src={pages[index].imageUrl} alt={pages[index].imageUrl}/>
                <Bullets index={index} num={pages.length}/>
            </div>
            <i className={`ri-arrow-right-s-line ${styles.carouselButton}`} onClick={next}/>
        </div>
    );
};

function Bullets({index, num}: { index: number, num: number }) {
    const bullets = [];
    for (let i = 0; i < num; i++) {
        bullets.push(<div
            className={styles.carouselBullet}
            style={{backgroundColor: index === i ? 'white' : 'transparent'}}
        />);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '30%'}}>
            {bullets}
        </div>
    );
}