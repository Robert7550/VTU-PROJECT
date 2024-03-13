import React,{ useState } from "react";
import { Row, Col,Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const ResultLoginPage = () => {
    const [inPut,setinPut] = useState('')
    const [message,setMessage] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        if (inPut === ''){
            setMessage("Please Enter the Register Number...")
        }
        else{
            axios.get('http://localhost:3001/studentInfo')
            .then((response) => {
                console.log('res',response.data)
                response.data.map((data) => {
                    if (data.RegisterId === inPut ){
                        navigate(`/resultpage/${inPut}`)
                    }
                    else{
                        setMessage("Invalid Register Id")
                    }
                })
            })
            .catch((err) => console.log('err',err))
        }
    }

    const changeHandler = (e) => {
        setinPut(e.target.value)
        setMessage('')
    }

    return(
        <>
            <br/>
            <Link to='/' className="btn btn-dark">Go Back</Link>

            <Row className="text-center"> 
                <Col>
                    <h3>Check your Result here...</h3>
                </Col>
            </Row>
            {/* <br/> */}
            <Row className="mt-3">
                <Col style={{marginLeft:'25rem'}}>
                    <Form onSubmit={submitHandler}>
                        <Form.Label>Enter your Register No:</Form.Label>
                        <br/>
                        <Form.Control type="text" placeholder="Register No" style={{width:'45%'}} 
                        value={inPut}
                        onChange={changeHandler}/> 
                        <span className="text-danger text-center">{message}</span> 
                        <br/><br/>
                        <Button type="submit">Get Result</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default ResultLoginPage;