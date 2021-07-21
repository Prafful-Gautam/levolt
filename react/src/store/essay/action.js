import EssayServices  from "../../apiServices/EssayServices";
import {ADD_ESSAY, FETCH_ALL_ESSAY, UPDATE_ESSAY, FETCH_SINGLE_ESSAY} from './type'
import {toast} from "react-toastify"
export const addEssay = (payload) => async (dispatch) => {
    try {
        console.log(`payload`, payload)
        const insertEssay = await EssayServices.AddEssay(payload)
        console.log(`insertEssay`, insertEssay)
        toast.success('essay added successfully')
    } catch (error) {
        console.log(`error`, error)
        toast.error('Internal error')
    }
}
export const getAllEssay = (payload) => async (dispatch) => {
    try {
        const essay = await EssayServices.GetAllEssay()
        dispatch({type: FETCH_ALL_ESSAY, payload: essay.data.getAllEssay});
        toast.success('essay fetch complete')
    } catch (error) {
        console.log(`error`, error)
        toast.error('error while fetching')

    }
}

export const getSingleEssay = (payload) => async (dispatch) => {
    try {
        console.log(`payload`, payload)
       const essay = await EssayServices.GetSingleEssay(payload)
       dispatch({type: FETCH_SINGLE_ESSAY, payload: essay.data.getSingleEssay})
       toast.success('essay fetch') 
    } catch (error) {
        console.log(`error`, error)
        toast.error('error while fetching single essay')
    }
}
export const updateEssay = (payload) => async (dispatch) => {
    try {
       const essay = await EssayServices.UpdateEssay(payload)
       toast.success('essay update successful')
    } catch (error) {
        console.log(`error`, error)
        toast.error('error while update')
    }
}