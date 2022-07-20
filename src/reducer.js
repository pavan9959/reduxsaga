const initial={
    count:0
}

const Reducer=(state=initial,action)=>{
    switch(action.type){
        case "INCREMENT":{
            console.log(action,"at reducera")
            return {...state,count:state.count+action.payload}
        }
        default:{
            return state
        }
    }
}

export default Reducer