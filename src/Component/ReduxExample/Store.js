import {createStore} from  'redux'



const initialState = {
    count : 0
}


//action type

const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'


//action creater

const increament = () =>({type: INCREAMENT})
const decreament = ()=> ({type: DECREAMENT})


const counterReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case INCREAMENT:
          return {...state, count: state.count+1}
        case DECREAMENT:
          return {...state, count: state.count-1}
          default:
        return state
  }
   
}

const store = createStore(counterReducer)


export  {increament, decreament, store} ;