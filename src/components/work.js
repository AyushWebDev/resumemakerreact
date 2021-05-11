import React from 'react';
import {isAuthenticated,getWork} from '../user/auth';

class Work extends React.Component{
    constructor(){
        super();
        this.state={
            work: []
        }
    }
    componentDidMount(){
        const getWorkDetails=async (id)=>{
            const data=await getWork(id);
            console.log(data);
            if(data.error){
                console.log(data.error);
            }
            else{
                this.setState({
                    work: data.work
                })
            }
        }
        const id=this.props.match.params.id;
        getWorkDetails(id);
    }
    render(){
        return(
            <div> 
                edu
                {
                    this.state.work.map((w,key)=>(
                        <ul>
                            <li>{w.title}</li>
                            <li>{w.year.start} {w.year.end}</li>
                            <li>{w.description}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}


export default Work;