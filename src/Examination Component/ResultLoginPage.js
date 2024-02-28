import React from "react";
import { Row, Col,Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ResultLoginPage = () => {
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
                    <Form>
                        <Form.Label>Enter your Register No:</Form.Label>
                        <br/>
                        <Form.Control type="text" placeholder="Register No" style={{width:'45%'}} /> 
                        <br/>
                        <Button type="submit">Get Result</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default ResultLoginPage;