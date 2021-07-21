import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {getAllEssay} from '../store/essay/action';

function GetAllEssay() {
    const history = useHistory();
    const dispatch = useDispatch();
    const addEssay = () => history.push('/add-essay')
    const getEssay = () => dispatch(getAllEssay());
    const essayLists = useSelector(state => state.state);
     console.log('essayLists :>> ', essayLists);
    useEffect(() => {
        dispatch(getAllEssay())
    },[])
    return (
        <div>
            GetAllEssay
            {/* <button onClick={getEssay}>Fetch</button> */}
            <button onClick={addEssay}>Add Essay</button>
            <table  class="table" style={{width: '100%'}}>
                
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>author</th>
                        <th>Essay</th>
                        </tr>
                </thead>
                <tbody>
                        {essayLists?.map(m => {
                            return(
                    <tr key={m.essay_id} onClick={()=> history.push(`/update-essay/${m.essay_id}`)}>
                 <td>{m.essay_id}</td>
                 <td>{m.title}</td>
                 <td>{m.author}</td>
                 <td>{m.body}</td>
                    </tr>
                        )})}
                </tbody>
            
            </table>
        </div>
    )
}

export default GetAllEssay
