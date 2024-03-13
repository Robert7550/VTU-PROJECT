import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




const Stafflogin = () => {
    const[input,setInput] = useState("")
    const[message,setMessage] = useState("")
    const navigate = useNavigate()
    

    const submitHandler = (e) => {
        e.preventDefault()
        if (input == ''){
            setMessage("Please enter the username or password")
        }
        else{
            navigate("/")
        }
    }

    const changeHandler = (e) => {
        setInput(e.target.value)
        setMessage('')
    }



    return(
        <>
            <h1 className="text-center my-5" >Staff Login</h1>
            <Row>
                <Col>
                    <Form style={{marginLeft:'25rem'}} onSubmit={submitHandler} >
                        
                        <Form.Label>User Name:</Form.Label> <br/>

                        <Form.Control type="text" placeholder="username" style={{width:'50%'}} 
                        value={input} onChange={changeHandler} /> <br/>

                        <Form.Label>Password</Form.Label> <br/>

                        <Form.Control type="password" placeholder="password" style={{width:'50%'}} /> <br/>

                        <span style={{marginLeft:'3rem'}} className="text-danger">{message}</span> <br/> <br/>

                        <Button type="submit" style={{marginLeft:'9rem'}}> Submit </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Stafflogin;