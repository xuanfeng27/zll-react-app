/**
 * Created by zll on 2018/3/31.
 */

import Counter from '../components/Counter'
import {connect} from 'react-redux'
import increaseAction from '../action'

function mapStateToProps(state) {
    return {
        value:state.payload
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:()=>dispatch(increaseAction)
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App;