const ModeofOperation=(state=[],action)=>{
    switch(action.type){
        case 'ModeOfOperation':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default ModeofOperation;