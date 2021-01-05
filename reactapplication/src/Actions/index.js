export const UpdateData=(data)=>{
    return{
        type:'UpdateData',
        payload:data
    };
};
export const SelectData=(data)=>{
    return{
        type:'SelectedData',
        payload:data
    };
};
export const OperationMode=(data)=>{
    return{
        type:'ModeOfOperation',
        payload:data
    };
};