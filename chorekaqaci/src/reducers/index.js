const initialState = {
    breads : []
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'BREADS_LOADED':
            return{
                breads: action.payload
            };
        default:
            return state;
    }
};

export default reducer