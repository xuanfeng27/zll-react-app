/**
 * Created by zll on 2018/3/31.
 */

const init ={
    isFetch : false,
    fetched:false,
    err:null,
    payload:[]
}

const counter =(state=init,action)=>{

    switch (action.type){
        case 'GET_USER_START':
            // return {...state,isFetch:true}
            return Object.assign({},state,{isFetch : true})
            break;
        case 'RECEIVE_USERS':
           // return {...state,isFetch:false,fetched:true,payload:action.payload}
            return Object.assign({},state, {fetched: true, payload:action.payload})
            break;
        case 'ERR':
            return {...state,err:action.err}
            break;
        default:
            return state;
    }
}
export default counter;