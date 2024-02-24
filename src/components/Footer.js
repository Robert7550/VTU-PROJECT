import React from "react";
import { Row,Col } from "react-bootstrap";


const Footer = () =>{
    const curentYear = new Date().getFullYear()
    return(
        <footer>
            <Row className="text-center">
                <Col>
                    VTU &copy; {curentYear}
                </Col>
            </Row>
        </footer>
    )
}

export default Footer