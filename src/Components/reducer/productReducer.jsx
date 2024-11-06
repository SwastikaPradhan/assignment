const ProductReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true,
        };
    }

    if(action.type === "SET_SINGLE_LOADING"){
        return {
            ...state,
            isSingleLoading:true,
            singleProduct:action.payload,
            
        }
    }

    if (action.type === "MY_API_DATA") {
        const featureData = action.payload.filter((curElem) => {
            return curElem.featured === true;
        });
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
        };
    }

    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }

    // Return the current state for unrecognized actions
    return state;
};

export default ProductReducer;
