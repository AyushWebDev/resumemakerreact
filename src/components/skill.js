import React from 'react';
import {isAuthenticated,getSkill} from '../user/auth';

class Skill extends React.Component{
    constructor(){
        super();
        this.state={
            skill: []
        }
    }
    componentDidMount(){
        const getAchDetails=async (id)=>{
            const data=await getSkill(id);
            console.log(data);
            if(data.error){
                console.log(data.error);
            }
            else{
                this.setState({
                    skill: data.skills
                })
            }
        }
        const id=this.props.match.params.id;
        getAchDetails(id);
    }
    render(){
        return(
            <div> 
                edu
                {
                    this.state.skill.map((s,key)=>(
                        <ul>
                            <li>{s.title}</li>
                            <li>{s.rate}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Skill;
