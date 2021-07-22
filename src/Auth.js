import React,{useState} from 'react'
import {auth} from './firebase'
import './Auth.css'
export default function Auth({toggle,signInOrSignUp}) {
    const [userSignUpDetails,setUserSignUpDetails]=useState({email:"",password:""})
    const [error,setError]=useState("")
    const handleChange=(e)=>{
        setUserSignUpDetails({...userSignUpDetails,[e.target.name]:e.target.value})
    }


    const signUp=(e)=>{
        e.preventDefault()
        // alert(userSignUpDetails.password)
        if (userSignUpDetails.email.length!=0 & userSignUpDetails.password.length!=0){
        auth.createUserWithEmailAndPassword(userSignUpDetails.email,userSignUpDetails.password)
        .then((user)=>console.log(user))
        .then(()=>toggle())
        .catch(error=>setError(error.message))
        
        }
        else{
            alert("enter something")
        }
    }



    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(userSignUpDetails.email,userSignUpDetails.password)
        .then(()=>toggle())
        .catch(error=>setError(error.message))
        
    }





    return (
        <div className="main">
            <form>
            
                
            
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} name="email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} name="password"/>
                </div>
                
                
                <div style={{color:"red",fontSize:"13px;",marginLeft:"5vw",marginRight:"3vw"}}>{error}</div>





                <div className="button-group">
                
                {signInOrSignUp?<button className="btn btn-primary" onClick={signUp}>signUp</button>:<button className="btn btn-primary"  onClick={signIn}>signIn</button>}
                
                </div>
            </form>

            


            
        </div>
    )
}
