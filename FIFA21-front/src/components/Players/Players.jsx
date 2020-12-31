import { useState } from 'react'
//useHistory: permet de naviguer, en envoyant des données (state)
import { useHistory } from 'react-router-dom';

const Players = () => {
    const [player1Value, setPlayer1Value] = useState("")
    const [player2Value, setPlayer2Value] = useState("")
    const [msgError1, setMsgError1] = useState(Boolean)
    const [msgError2, setMsgError2] = useState(Boolean)
    const [msgErrorSame, setMsgErrorSame] = useState(Boolean)
    const history = useHistory()

    const OnClickReady = () => {
        if (player1Value == "") setMsgError1(true)
        else setMsgError1(false)
        if (player2Value == "") setMsgError2(true)
        else setMsgError2(false)
        if (player1Value !== "" && player1Value == player2Value) setMsgErrorSame(true)
        else if (player1Value !== "" && player2Value !== "") history.push("/game",{player1: player1Value, player2: player2Value})
    }

    return (
        <div className="bg-gray-200">
            <div className="text-center flex" >
                <Player value={player1Value} change={setPlayer1Value} player="1" msgError={msgError1} setMsgError={setMsgError1} />
                <img className="w-2/12" src="/images/duel.png" alt="picture VS" />
                <Player value={player2Value} change={setPlayer2Value} player="2" msgError={msgError2} setMsgError={setMsgError2} />
            </div>
            <div className="text-center"><br />
                <button type="button" className="w-2/12 border bg-gray-500 text-white rounded-md px-4 py-2 m-2 duration-500 select-none hover:bg-black focus:outline-none " onClick={OnClickReady}>
                    Passer au match !
                </button>
                {msgErrorSame ? <p className="text-red-600">Veuillez choisir des pseudos différents !</p> : null}
            </div><br /><br /><br />
        </div>
    )
}

const Player = (props) => {
    return (
        <div><br/>
            <p className="text-lg font-bold mr-4">Joueur {props.player}</p>
            <img className="w-9/12" src="/images/player.png" alt="picture player" />
            <span className="mr-24 font-bold">
                <label>Pseudo </label>
                <input type="text" className="border-black border rounded-r px-2 py-2 w-5/12" value={props.value}
                    onChange={(e) => { props.change(e.target.value); props.setMsgError(false) }} />
            </span>
            {props.msgError ? <p className="text-red-600 mr-8">Veuillez choisir un pseudo</p> : null}

        </div>
    )
}
export default Players