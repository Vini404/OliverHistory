import  React,{useState} from  "react"
import "./styles.css"
import {Link} from "react-router-dom"
const Options=(props)=>{

    const [active,setActive] = useState(false)
   
    

    function CorrectAnswers(e,color){

      
        e.preventDefault()
       e.target.style.background=color

   
        
    }


  

    return(
        <div className="container">
        <img src={props.image}/>
     
    <h1>{props.problem}</h1>
    <button onClick={(e)=>CorrectAnswers(e,props.color1)}>{props.option1} </button>
    <button onClick={(e)=>CorrectAnswers(e,props.color2)}>{props.option2} </button>
    <button onClick={(e)=>CorrectAnswers(e,props.color3)}> {props.option3} </button> 
    
        <Link className="Link" to={`/${props.nextpage}`}>
        <button id="button">Prosseguir </button>
        </Link>
      
      
    </div>
    )
}

export default Options