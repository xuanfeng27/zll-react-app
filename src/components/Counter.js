/**
 * Created by zll on 2018/3/31.
 */
import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.value
        }
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    componentDidMount () {
        this.props.onIncreaseClick()
    }

    handleClick = () => {
        this.props.onIncreaseClick()
    }
    shouldComponentUpdate(nextProps, nextState) {
       if(this.props.value.length == nextProps.value.length && JSON.stringify(this.props.value) == JSON.stringify(nextProps.value)){
            return false
       }
       return true
    }
    render(){
        const {value} = this.props
        console.log('========')
        return(<main>
            <button onClick={this.handleClick}>again</button>
            { value.length>0?value.map((item,idx)=><p key = {idx}>{item.id}</p>):''}
        </main>)
    }
}
export default Counter;