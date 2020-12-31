import ReactCardFlip from "react-card-flip";
import styles from './Card.module.css'

const Cards = (props)=>{
    return (
        <div className={styles.wrapper}>
            <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
                {/*back card*/}
                <div className={styles.futPlayerCard}>
                    <img className="w-8/12 center mt-36 mr-14" src="/images/fifa21black.png" alt="logo fifa 21" />
                </div>
                {/*front card*/}
                <div className={styles.futPlayerCard}>
                    <div className={styles.playerCardTop}>
                        <div className={styles.playerInfoTop}>
                            <p className="text-4xl">{props.card.general}</p>
                            <img className="h-6 mt-2" src={props.card.country} alt="picture country" />
                            <img className="h-10 mt-2" src={props.card.club} alt="picture club" />
                        </div>
                        <img className="w-9/12" src={props.card.picture} alt="picture player" />
                    </div>
                    <div className={styles.playerCardBottom}>
                        <p className={styles.playerName}>{props.card.name}</p>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.playerInfoBottom}>
                            <span className="mr-12"><span className="font-bold">{props.card.vitesse} </span>PAC</span><span ><span className="font-bold">{props.card.drible} </span> DRI</span><br />
                            <span className="mr-11"><span className="font-bold">{props.card.tir} </span> SHO</span><span><span className="font-bold">{props.card.defense} </span> DEF</span><br />
                            <span className="mr-12"><span className="font-bold">{props.card.passe} </span> PAS</span><span><span className="font-bold">{props.card.physique} </span> PHY</span>
                        </div>
                    </div>
                    {props.victory ? <p className={styles.victoryWord}>Victoire !</p> : null}
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Cards