import React from 'react';
import {BrowserRouter,Switch,Route,withRouter} from 'react-router-dom';
import SignUp from "./user/signup";
import SignIn from "./user/signin";
import Profile from './user/profile';
import Edu from './editComponents/edu';
import Work from './editComponents/work';
import Achievement from './editComponents/achievement';
import Skill from './editComponents/skill';
import HomePage from './Homepage/HomePage';


class App extends React.Component{
  

  render()
  {
    return(
        <BrowserRouter>
        
            
              <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                
                <Route path="/editEdu/:id" component={Edu}></Route>
                <Route path="/editWork/:id" component={Work}></Route>
                <Route path="/editAch/:id" component={Achievement}></Route>
                <Route path="/editSkill/:id" component={Skill}></Route>
                <Route path="/profile/:userid" component={Profile}></Route>
              </Switch>
          
        </BrowserRouter>
    )
  } 
}
export default App;