/**
 * Created by zll on 2018/3/31.
 */

import axios from 'axios'

const increaseAction = (dispatch)=>{
    dispatch({type:'GET_USER_START'})
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((res)=>{
            dispatch({type:'RECEIVE_USERS',payload:res.data})
        })
        .catch((err)=>{
            dispatch({type:'ERR',err:err})
        })
}
export default increaseAction;