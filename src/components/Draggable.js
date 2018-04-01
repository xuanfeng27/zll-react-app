/**
 * Created by zll on 2018/4/1.
 */
import React,{Component} from 'react'
import '../App.css'

class Draggable extends Component {
    constructor(props){
        super(props)
        this.state = {
            canMove: false
        }
    }

    handleDown = (e)=>{
        let point = e.touches ? e.touches[0]:e;
        this.startX = point.pageX - this.wrap.offsetLeft;
        this.startY = point.pageY - this.wrap.offsetTop;
        this.state.canMove = true;
    }

    handleMove = (e)=>{
        let point = e.touches ? e.touches[0]:e;
        let deltaX = point.pageX - this.startX;
        let deltaY = point.pageY - this.startY;
        if(this.state.canMove){
            this.wrap.style.left = deltaX +'px';
            this.wrap.style.top = deltaY +'px';
        }
    }

    handleUp = (e)=>{
        this.state.canMove = false;
    }

    render(){
        return(<div
            className="drag"
            ref={(wrap)=>{this.wrap = wrap}}
            onMouseDown={this.handleDown}
            onMouseMove={this.handleMove}
            onMouseUp={this.handleUp}
        >Draggable</div>)
    }
}

export default Draggable;