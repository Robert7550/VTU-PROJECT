import React, {useState, useEffect} from "react";
import { Link, redirect, useParams } from "react-router-dom";
import { Row, Col,Form } from 'react-bootstrap'
import TableData from "./TableData";
import axios from "axios";



const ResultPage = () =>{
    const[studentData,setStudentData] = useState([])

    const value = useParams()
    console.log("value",value)

    useEffect(() => {
        axios.get("http://localhost:3001/studentInfo")
        .then((res) => {
            res.data.map((d) => {
                if (d.RegisterId === value.id){
                    setStudentData(d)
                }
            })
        })
        .catch((err) => console.log("err", err))
    },[])
    
    console.log("data",studentData)


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
                        <Form.Label><b> StudentName: </b></Form.Label>
                        <Form.Label style={{marginLeft:"5rem"}}> {studentData.Student_Name} </Form.Label> <br/>
                        <Form.Label><b> Father's/Mother's Name: </b></Form.Label>
                        <Form.Label style={{marginLeft:"0.8rem"}}>  {studentData.Father_Name}  </Form.Label> <br/> 
                        <Form.Label><b>Cllege Name: </b></Form.Label>
                        <Form.Label style={{marginLeft:"5.9rem"}}>  {studentData.College}  </Form.Label>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <Form.Label style={{float:"right"}}><b>Register No:</b> {studentData.RegisterId} </Form.Label>
                    </Form.Group>
                </Col>
            </Row>


            <Row>
                <TableData studentId = {studentData.RegisterId}/>
            </Row>
            
        </>
    )
}

export default ResultPage;













// const ResultPage = () =>{
//     return(
//         <>
//         <br/>
//             <Link to='/result/loginpage' className="btn btn-dark">Go Back</Link>

//             <Row className="justify-content-center">
//                 <Col sm={12} md={6}>                
//                 <h4>Visvesvaraya Technological University, Belagavi</h4>
//                 <h6 style={{marginLeft:'2.5rem'}}>VII - Semester B.E Examination Result, Nov / Dec - 2024</h6>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label><b> Student Name: </b></Form.Label>
//                         <Form.Label style={{marginLeft:"5rem"}}> Vimal Raj S </Form.Label> <br/>
//                         <Form.Label><b> Father's/Mother's Name: </b></Form.Label>
//                         <Form.Label style={{marginLeft:"0.8rem"}}>Selva Raj</Form.Label> <br/> 
//                         <Form.Label><b>Cllege Name: </b></Form.Label>
//                         <Form.Label style={{marginLeft:"5.9rem"}}>Don Bosco College</Form.Label>
//                     </Form.Group>
//                 </Col>

//                 <Col>
//                     <Form.Group>
//                         <Form.Label style={{float:"right"}}><b>Register No:</b> 1ST31CS661</Form.Label>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <TableData/>
//             </Row>
            
//         </>
//     )
// }

// export default ResultPage;