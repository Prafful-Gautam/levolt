import { Switch, Route,BrowserRouter } from "react-router-dom";
import AddEssay from './components/AddEssay';
import GetAllEssay from './components/GetAllEssay';
import UpdateEssay from "./components/UpdateEssay";
import { useSelector, useDispatch } from "react-redux";

const Router = () => {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={GetAllEssay}/>
            <Route exact path="/add-essay" component={AddEssay}/>
            <Route exact path="/update-essay/:essay_id" component={UpdateEssay}/>
        </Switch>
        </BrowserRouter>
    )
};
export default Router;