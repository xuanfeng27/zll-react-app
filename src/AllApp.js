/**
 * Created by zll on 2018/3/31.
 */
import  React, { Component } from 'react'
import App from './container/App'
import SliderCon from './container/SliderCon'
class AllApp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<main>
            <App/>
            <SliderCon/>
        </main>)
    }
}

export default AllApp