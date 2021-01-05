const candidateReducer=(state=[],action)=>{
    switch(action.type){
        case 'UpdateData':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default candidateReducer;