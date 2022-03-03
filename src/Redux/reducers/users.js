import * as type from '../types';

 const initialstate= {
     users:[],
 }
 export default function users(state= initialstate,action)
 {
     switch(action.type)
     {
         case type.GET_USERS:
             return{
                 ...state,
                 users: action.payload
             }
             default:
                 return state
     }
 }