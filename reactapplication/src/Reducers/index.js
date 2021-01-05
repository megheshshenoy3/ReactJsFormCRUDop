import candidateReducer from './UpdateData.js';
import SelectedDataReducer from './SelectedData';
import ModeOfOperation from './OperationMode'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    candidateinfo:candidateReducer,
    selectedData:SelectedDataReducer,
    operationMode:ModeOfOperation
})
export default allReducers;