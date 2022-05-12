import {MEDIA_DATA, USER_DATA} from '../constrants/constrants'

export const actionReducer =(data)=>{
    return {
        type: USER_DATA,
        payload: data
    }
}

export const mediaReducer =(data)=>{
    return{
        type: MEDIA_DATA,
        payload: data
        
    }
}