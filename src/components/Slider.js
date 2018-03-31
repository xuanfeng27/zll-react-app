/**
 * Created by zll on 2018/3/31.
 */
import React,{Component} from 'react'
class Slider extends Component {
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.value.length === nextProps.value.length && JSON.stringify(this.props.value) === JSON.stringify(nextProps.value)){
            return false
        }
        return true
    }
    render(){
        return(<h1>Slider</h1>)
    }
}

export default Slider;