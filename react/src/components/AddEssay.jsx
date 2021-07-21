import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import {addEssay} from '../store/essay/action'
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function AddEssay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (event) => {
       console.log('formState :>> ', formState);
        dispatch(addEssay(formState));

        history.push('/')

    }
    const [formState, setFormState] = useState({author:null, title: null, body: null})
    return (
        <div className="container-sm">
            AddEssay

          <Form model="user">
              <label class="form-label" for="name">Auther Name</label>
              <input type="text" class="form-control" id="name" onChange={(e) => setFormState({...formState, author: e.target.value})} placeholder="Author name"/>
              <label class="form-label" for="title">Title</label>
              <input type="text" class="form-control" id="title" onChange={(e) => setFormState({...formState, title: e.target.value})} placeholder="Enter title"/>
              <label class="form-label" for="essay">Essay</label>
              <textarea type="text" class="form-control" id="essay" onChange={(e) => setFormState({...formState, body: e.target.value})} placeholder="Enter Essay"/>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
   
</Form>
        </div>
    )
}

export default AddEssay
