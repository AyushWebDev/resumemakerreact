import React from 'react';
import {isAuthenticated,getEdu} from '../user/auth';

class Edu extends React.Component{
    constructor(){
        super();
        this.state={
            education: []
        }
    }
    componentDidMount(){
        const getEduDetails=async (id)=>{
            const data=await getEdu(id);
            console.log(data);
            if(data.error){
                console.log(data.error);
            }
            else{
                this.setState({
                    education: data.education
                })
            }
        }
        const id=this.props.match.params.id;
        getEduDetails(id);
    }
    render(){
        return(
            <div> 
                edu
                {
                    this.state.education.map((edu,key)=>(
                        <ul>
                            <li>{edu.title}</li>
                            <li>{edu.year.start} {edu.year.end}</li>
                            <li>{edu.institute}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Edu;
