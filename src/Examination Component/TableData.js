import React from "react";
import { Container, Table} from "react-bootstrap";



const TableData = () => {
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
                    <tr>
                        <td>1</td>
                        <td>CSE001</td>
                        <td>Java</td>
                        <td>100</td>
                        <td>35</td>
                        <td>65</td>
                        <td>Pass</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>CSE002</td>
                        <td>CSS</td>
                        <td>100</td>
                        <td>35</td>
                        <td>55</td>
                        <td>Pass</td>
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
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <th colSpan={3}>Grand total</th>
                        <td>500</td>
                        <td></td>
                        <td>350</td>
                        <th>Pass</th>
                    </tr>
                </thead>

            </Table>

            <p><b>Total Marks Obtained [in words]:</b> Thre Hundred and Fifty</p>
            <p><b>Result of Semester:</b> Pass</p>
            <p><b>Percentage: </b> 70%</p>
            <p><b>Date: </b> 25/04/2023</p>
           
        </Container>
    )
}

export default TableData;