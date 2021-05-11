import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './homepage.css'
import {BrowserRouter,Link} from 'react-router-dom';
import Temp from './../Images/resume-template.jpg'
import Template1 from './../Images/template1.JPG';
import Template2 from './../Images/template2.JPG';
import Template3 from './../Images/template3.JPG';
import Template4 from './../Images/template4.JPG';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {signout,isAuthenticated} from '../user/auth';
AOS.init();
var template=[
    {image:Template1,
    type:'Creative',
    text:'Land your dream job in the creative industries by using this creative resume template,\
      which will make your application stand out.',
      id:'prototype1'
    },
   {image:Template2,
    type:'College',
    text:'An updated and contemporary version of the 21st-century college resume template,\
    being an alternative to the old styles.',
    id:'prototype2'
   },
   {image:Template3,
    type:'Executive',
    text:'Executive resume sample with a contemporary approach and eye-catching design that makes sure your\
    application will be spotted first',
    id:'prototype3'
   },
   {image:Template4,
    type:'Basic',
    text:'Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process',
    id:'prototype4'
   },
]
class HomePage extends Component
{
    render()
    {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            centerMode:true,
            autoplay:true,
            autoplaySpeed:2000,
            pauseOnHover:true,
            slidesToScroll: 1
          };
        return(
           
            <div className="parallax">
                <nav class="navbar  navbar-expand-lg navbar-dark" data-aos="zoom-in" data-aos-duration="1000">
                    <p className="navbar-brand " style={{paddingTop:'10px'}}><i className="fas fa-toolbox " style={{fontSize:'24 px'}}></i>Resume Maker </p>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex flex-row-reverse " id="navb">
                        <ul class="navbar-nav  ">
                            <li class="nav-item"> 
                                <Link class="nav-link" to="/prototype2"><button className="btn"><span><i class="far fa-file"></i></span>Resume Template</button></Link>
                            </li>
                            {isAuthenticated() &&
                            <li class="nav-item"> 
                                <Link to={`/profile/${isAuthenticated().user._id}/edu/${isAuthenticated().user._id}`} class="nav-link"><button className="btn"><span><i class="fas fa-file-signature"></i></span>My Portfolio</button></Link> 
                            </li>
                            }
                            {!isAuthenticated() &&
                            <li class="nav-item"> 
                                    <Link to="/signin" class="nav-link"><button className="btn"><span><i class="fas fa-sign-in-alt"></i></span>Sign-in</button></Link> 
                            </li>
                            }
                            {isAuthenticated() &&
                            <li class="nav-item"> 
                                    
                                     <a className="nav-link" onClick={()=>signout(()=>{this.props.history.push('/')})} style={{cursor: "pointer"}}><button className="btn"><span><i class="fas fa-sign-in-alt"></i></span>Sign-out</button></a> 
                            </li>
                            }
                            <li class="nav-item"> 
                                <Link to="/signup" class="nav-link"><button className="btn"><span><i class="fas fa-user-plus"></i></span>Register</button></Link>
                            </li>
                        </ul>
                       
                    </div>
                </nav>
                <div className="container-fluid">
                    <section className="detail-holder">
                        <div className="container ">
                            <div className="row"  data-aos="zoom-in" data-aos-duration="800">
                                <h1 style={{marginTop:'150px'}}> Resume Templates</h1>
                                <p class="text-like-h3 text-bold" style={{marginTop:'175px'}} >/ Pick one from our Resume Templates</p>
                                <div className="center-text">
                                    <p><i class="fas fa-quote-left"></i>Making a resume is the first step of any job search. Not sure how to make a resume? 
                                         Our resume builder gives you resume templates to follow.<i class="fas fa-quote-right"></i></p>
                                </div>
                                <div className="col-sm-4">
                                    <img src={Temp}></img>
                                </div>
                            </div>  
                        </div>                       
                        <div className="row">
                            <div className='container'>
                            <Slider {...settings}>
                        {template.map((value,index)=>{
                            return(
                               <div className={'cl'+(index%2).toString()+' flip-box col-sm-5'} data-aos="fade-right " data-aos-duration="800">
                                   <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <img src={value.image}/>
                                        </div>
                                        <div className="flip-box-back">
                                            <h3>{value.type}</h3>
                                            <p>{value.text}</p>
                                            <p>{value.id}</p>
                                            <Link to={`/form/${value.id}`}><button>Use Me</button></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </Slider>
                        </div>
                    </div>
                    </section> 
                </div>
            </div>
    )};
}
export default HomePage;