/**
 * Created by zll on 2018/3/31.
 */
import {connect} from 'react-redux'
import Slider from '../components/Slider'



function mapStateToProps(state) {
    return {
        msg: state.payload
    }
}


const SliderCon = connect(
    mapStateToProps,
)(Slider)

export default SliderCon;