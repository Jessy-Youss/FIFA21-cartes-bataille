import { Route } from 'react-router-dom';
import Players from './components/Players/Players'
import Game from './components/Game/Game'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Players}></Route>
            <Route path="/game" component={Game}></Route>
        </div>
    )
}

export default Routes