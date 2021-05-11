import React from 'react';
import {isAuthenticated,getAch} from '../user/auth';

class Achievement extends React.Component{
    constructor(){
        super();
        this.state={
            achievement: []
        }
    }
    componentDidMount(){
        const getAchDetails=async (id)=>{
            const data=await getAch(id);
            console.log(data);
            if(data.error){
                console.log(data.error);
            }
            else{
                this.setState({
                    achievement: data.achievements
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
                    this.state.achievement.map((ach,key)=>(
                        <ul>
                            <li>{ach.title}</li>
                            <li>{ach.description}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Achievement;
