const breadsLoaded = (newBreads)=>{
    return{
        type: 'BREADS_LOADED',
        payload: newBreads
    };
};

export {
    breadsLoaded
}