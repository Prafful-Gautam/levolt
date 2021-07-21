import {ADD_ESSAY, FETCH_ALL_ESSAY, UPDATE_ESSAY, FETCH_SINGLE_ESSAY} from './type'

let initialState = {
    

}

const essayReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_ALL_ESSAY:
            return {
                ...state,
                state: payload
            }
        case FETCH_SINGLE_ESSAY:
            return { 
                state: payload
            } 
            
        default:
            return state         
    }
}

export default essayReducer;