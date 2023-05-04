import { Get_Product_Success, Patch_product_success, Product_Failure, Product_Req, Product_Success, Delete_product_success } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Product_Req:
            return { ...state, isLoading: true }
        case Product_Success: {
            return { ...state, isLoading: false }
        }
        case Product_Failure: {
            return { ...state, isLoading: false, isError: true }
        }
        case Get_Product_Success: {
            return { ...state, isLoading: false, products: payload }
        }
        case Patch_product_success: {
            return { ...state, isLoading: false, }
        }
        case Delete_product_success: {
            const updatedProducts = state.products.filter(product => product.id !== payload)
            return { ...state, isLoading: false, products: updatedProducts }
        }
        default: {
            return { ...state }
        }
    }
}
