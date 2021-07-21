import React, {useEffect, useState} from 'react'
import Form from "react-bootstrap/Form";
import {getSingleEssay, updateEssay} from '../store/essay/action';
import {useDispatch, useSelector} from "react-redux"
import { useHistory, useParams } from "react-router-dom";



function UpdateEssay() {
    const dispatch = useDispatch();
    const {essay_id} = useParams();
    console.log('essay_id :>> ', essay_id);
     const essayDetails = useSelector((state) => state.state)
    console.log('essayDetails :>> ', essayDetails);
  
    const [formState, setFormState] = useState({essay_id: null,author:null, title: null, body: null})
    useEffect(() => {
        dispatch(getSingleEssay(essay_id))
        if(essayDetails&&essayDetails.length > 0){
            const {author, title, body, essay_id} = essayDetails[0];
            setFormState(()=> ({
                essay_id: essay_id,
                author: author,
                title: title,
                body: body
            }))
            console.log('formState :>> ', formState);
        }
    },[])
    useEffect(() => {
        console.log('formState :>> ', formState);
    },[formState])
    const handleSubmit = (e) => {
        dispatch(updateEssay(formState));
    }
    return (
        <div className="container-sm">
        Update Essay


      <Form model="user">
          <label className="form-label" htmlFor="name">Auther Name</label>
          <input type="text" className="form-control" id="name" value={formState.author} onChange={(e) => setFormState({...formState, author: e.target.value})} placeholder="Author name"/>

          <label className="form-label" htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={formState.title} onChange={(e) => setFormState({...formState, title: e.target.value})} placeholder="Enter title"/>

          <label className="form-label" htmlFor="essay">Essay</label>
          <textarea type="text" className="form-control" id="essay" value={formState.body} onChange={(e) => setFormState({...formState, body: e.target.value})} placeholder="Enter Essay"/>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

</Form>
    </div>
    )
}

export default UpdateEssay
