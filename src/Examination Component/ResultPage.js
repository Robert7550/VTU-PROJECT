import React from "react";
import { Link } from "react-router-dom";
import { Row, Col,Form } from 'react-bootstrap'
import TableData from "./TableData";



const ResultPage = () =>{
    return(
        <>
        <br/>
            <Link to='/result/loginpage' className="btn btn-dark">Go Back</Link>

            <Row className="justify-content-center">
                <Col sm={12} md={6}>                
                <h4>Visvesvaraya Technological University, Belagavi</h4>
                <h6 style={{marginLeft:'2.5rem'}}>VII - Semester B.E Examination Result, Nov / Dec - 2024</h6>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label><b> Student Name: </b></Form.Label>
                        <Form.Label style={{marginLeft:"5rem"}}> Vimal Raj S </Form.Label> <br/>
                        <Form.Label><b> Father's/Mother's Name: </b></Form.Label>
                        <Form.Label style={{marginLeft:"0.8rem"}}>Selva Raj</Form.Label> <br/> 
                        <Form.Label><b>Cllege Name: </b></Form.Label>
                        <Form.Label style={{marginLeft:"5.9rem"}}>Don Bosco College</Form.Label>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <Form.Label style={{float:"right"}}><b>Register No:</b> 1ST31CS661</Form.Label>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <TableData/>
            </Row>
            
        </>
    )
}

export default ResultPage;