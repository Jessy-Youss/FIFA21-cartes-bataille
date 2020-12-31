import Card from './Card/Card'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './Game.module.css'
import Confetti from 'react-confetti'

const Game = (props) => {
    const player1 = props.location.state.player1
    const player2 = props.location.state.player2
    const history = useHistory()
    let card1Data;
    let card2Data;
    const [card1, setCard1] = useState({})
    const [card2, setCard2] = useState({})
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const [victory1, setVictory1] = useState(false)
    const [victory2, setVictory2] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)

    //componentdidupdate
    useEffect(() => {
        if (isFlipped == true) {
            if (score1 == 5 || score2 == 5) {
                score1 == 5 ? setTimeout(() => { setVictory1(true) }, 1000) : setTimeout(() => { setVictory2(true) }, 1000)
            }
            else {
                setTimeout(() => {
                    setIsFlipped(false);
                }, 2500)
            }
        }
    }, [isFlipped])

    const onClickRound = async () => {
        await axios.get('http://localhost:8080/getCard').then(res => {
            card1Data = res.data[0]
            card2Data = res.data[1]
        })
        setCard1(card1Data)
        setCard2(card2Data)
        //comparaison des cartes, afin d'incrémenter le score du vainqueur
        if (card1Data.general > card2Data.general) setScore1(score1 + 1)
        else if (card1Data.general < card2Data.general) setScore2(score2 + 1)
        setIsFlipped(true)
    }

    const onClickHome = () => {
        history.push('')
    }

    return (
        <div className="text-center bg-gray-200"><br />
            <span className={styles.score}>{player1} {score1} : {score2} {player2}</span>
            <div className="flex">
                <Card isFlipped={isFlipped} card={card1} victory={victory1} />
                <img src="/images/arbitre.png" alt="picture arbitror" />
                <Card isFlipped={isFlipped} card={card2} victory={victory2} />
            </div>
            {!isFlipped ?
                <button type="button" className="w-2/12 border bg-gray-500 text-white rounded-md px-4 py-2 m-2 duration-500 select-none hover:bg-black focus:outline-none" onClick={onClickRound} >
                    Lancer la manche
            </button>
                : <div><br /></div>}
            {victory1 == true || victory2 == true ?
                <button type="button" className="w-2/12 border bg-gray-500 text-white rounded-md px-4 py-2 m-2 duration-500 select-none hover:bg-black focus:outline-none" onClick={onClickHome} >
                    Retour à l'accueil
            </button>
                : null}
            <br /><br />
            {score1 == 5 ? <Confetti style={{ width: "100%" }} confettiSource={{ x: 300, y: -10 }}></Confetti>
                : null}
            {score2 == 5 ? <Confetti style={{ width: "100%" }} confettiSource={{ x: 1100, y: -10 }}></Confetti>
                : null}
        </div>
    )
}

export default Game