const SelectedDataReducer=(state=[],action)=>{
    switch(action.type){
        case 'SelectedData':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default SelectedDataReducer;