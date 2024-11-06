import { createContext,useContext,useEffect ,useReducer} from "react";
import axios from "axios";

import ProductReducer from "../Components/reducer/productReducer";

const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}



const AppProvider=({children})=>{

    const [state,dispatch] = useReducer(ProductReducer,initialState);

    const getProducts = async(url) => {
        dispatch ({type:"SET_LOADING"})
        try{
            const res = await axios.get(url);
           
           
            dispatch({
                type:"MY_API_DATA", payload:res.data.products
            });

            
        }catch (error){
            dispatch({type:"API_ERROR"})
        }
       
        
    };

    //Api call for single items

    const getSingleProduct = async (url) =>{
        dispatch ({type:"SET_SINGLE_LOADING"})
        try{
            const res = await axios.get(url);
            const singleproducts = await res.data;
            dispatch({
                type:"SET_SINGLE_PRODUCT", payload:singleproducts
            });
        }catch (error){
            dispatch ({type:"SET_SINGLE_ERROR"})

        }
    }

    useEffect (()=> {
        getProducts(API);
    },[]);
    return (
        <AppContext.Provider value={{...state, getSingleProduct }}>{children}</AppContext.Provider>
    )
};

//custom hooks 
const useProductContext = ()=>{
    return useContext(AppContext);
}

export { AppProvider,AppContext, useProductContext};