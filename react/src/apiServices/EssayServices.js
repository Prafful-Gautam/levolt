import axios from 'axios';
import {BASE_URL} from './constant.js'

export default {
    AddEssay(payload){
       return axios.post(`${BASE_URL}/admin/essay`,payload)
    },
    UpdateEssay(payload){
        return axios.put(`${BASE_URL}/admin/essay/${payload.essay_id}`,payload)
    },
    GetAllEssay(){
        return axios.get(`${BASE_URL}/admin/essay`);
    },
    GetSingleEssay(payload){
        return axios.get(`${BASE_URL}/admin/essay/${payload}`)
    }
}