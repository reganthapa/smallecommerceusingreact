
export const cardreducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'ADD_TO_CART':
        return {...state,cartlist:payload.products}

        case 'REMOVE_FROM_CART':
        return{...state,cartlist:payload.products}

        case 'UPDATE_TOTAL':
        return  {...state,total:payload.totalprice} 


        default: 
        throw new Error("case not found")            
    }


}