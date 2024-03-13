import React, {useState, useEffect} from "react";
import { Container, Table} from "react-bootstrap";
import axios from "axios";
import {ToWords} from 'to-words';



const TableData = ({studentId}) => {

    const[resultData, setresultData] = useState ([])
    const toWords = new ToWords();


    useEffect(() => {
        axios.get("http://localhost:3002/resultInfo")
        .then((res) => {
            console.log("res",res.data)
            let temp = res.data.filter((d) => d.RegisterId === studentId);
            console.log("temp", temp)
            setresultData(temp)
        })
        .catch((err) => console.log("err", err))
    },[studentId])

    console.log("resultData",resultData)


    const getTotalMaarks = (value) => {
        let sum = 0
        resultData.map((d) => {
            sum += parseInt(d[value])
        })
        console.log("sum", sum)
        return sum
    }

    const finalResult = () => {
        let count = 0
        resultData.map((d) => {
            if(d.result === 'FAIL') {
                count ++
            }
        })
        if (count >=1){
            return 'FAIL'
        }
        else{
            return 'PASS'
        }
    }


    const toWordsHandler = () => {
        const a = getTotalMaarks("obtained_marks")
        let text = toWords.convert(a)
        return text
    }

    const scorHandler = () => {
        let sum = 0
        resultData.map((d) => {
            sum += parseInt(d.obtained_marks)
        })
        let status;

        if (sum >= 250){
            status = "DISTINCTION"
        }
        else if (sum >= 230 && sum <250){
            status = "FIRST CLASS"
        }
        else{
            status = 'FAIL'
        }
        return status
    }


    const percentagehandler = () => {
        let max_marks = getTotalMaarks("max_marks")
        let obtained_marks = getTotalMaarks("obtained_marks")
        let x = '%'

        let percent = Math.floor((obtained_marks / max_marks) * 100)
        return [percent,x]

    }




    return(
        <Container>
            <Table className="my-5" responsive bordered>

                <thead>
                    <tr>
                        <th className="text-center">Sl No</th>
                        <th colSpan={2}>Subject
                            <th style={{padding:"0px 9rem"}}>Code</th>
                            <th style={{padding:"0px 8rem"}}>Subject</th>
                        </th>
                        <th className="text-center" colSpan={3}>Examination Marks Obtained
                            <th style={{padding:"0px 2rem"}}>Max</th>
                            <th style={{padding:"0px 2rem"}}>Min</th>
                            <th style={{padding:"0px 1rem"}}>Obtained</th>
                        </th>
                        <th className="text-center">Subjec Result</th>
                    </tr>
                </thead>

                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>{resultData.code}</td>
                        <td>{resultData.subject}</td>
                        <td>{resultData.max_marks}</td>
                        <td>{resultData.min_marks}</td>
                        <td>{resultData.obtained_marks}</td>
                        <td>{resultData.result}</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>{resultData.code}</td>
                        <td>{resultData.subject}</td>
                        <td>{resultData.max_marks}</td>
                        <td>{resultData.min_marks}</td>
                        <td>{resultData.obtained_marks}</td>
                        <td>{resultData.result}</td>
                        </tr>

                    <tr>
                        <td>3</td>
                        <td>CSE003</td>
                        <td>Python</td>
                        <td>100</td>
                        <td>35</td>
                        <td>68</td>
                        <td>Pass</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>CSE004</td>
                        <td>React</td>
                        <td>100</td>
                        <td>35</td>
                        <td>72</td>
                        <td>Pass</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>CSE005</td>
                        <td>JS</td>
                        <td>100</td>
                        <td>35</td>
                        <td>87</td>
                        <td>Pass</td>
                    </tr> */}

                    {
                    resultData.map((data,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                        
                    ))
                    }
                </tbody>

                <thead>
                    <tr>
                        <th colSpan={3}>Grand total</th>
                        <td>{getTotalMaarks ("max_marks")}</td>
                        <td>{getTotalMaarks ("min_marks")}</td>
                        <td>{getTotalMaarks ("obtained_marks")}</td>
                        <th>{finalResult()}</th>
                    </tr>
                </thead>

            </Table>

            <p><b>Total Marks Obtained [in words]:</b> {toWordsHandler()} </p>
            <p><b>Result of Semester:</b> {scorHandler()}</p>
            <p><b>Percentage: </b> {percentagehandler()} </p>
            <p><b>Date: </b> 25/04/2023</p>
           
        </Container>
    )
}

export default TableData;