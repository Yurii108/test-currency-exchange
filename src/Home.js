import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from "react";


const Home = () => {
    // const inputUAH = 0,
    //     inputEUR = 0;

    // inputUAH.addEventListener('input', () => {
    //     const request = new XMLHttpRequest();

    //     request.open('GET', './current.json');
    //     request.setRequestHeader('content-type', 'application/json', 'charset = UTF-8');
    //     request.send();

    //     request.addEventListener('load', () => {
    //         if (request.status === 200) {
    //             console.log(request.response);
    //             const data = JSON.parse(request.response);
    //             inputEUR = +inputUAH * data.current.eur;
    //         } else {
    //             inputEUR = 'Error - Что-то случилось, попробуйте через 1 час';
    //         }
    //     });
    // });


    const [selectOne, setSelectOne] = useState(0);
    const [selectTwo, setSelectTwo] = useState(0);

    const [data, setData] = useState([]);
    // const [dataC, setCData] = useState();

    // setCData([uk, data[25], data[32], data[33], data[24], data[12], data[18], data[9], data[4]]);

    const [leftInput, setLeftInput] = useState(0);

    const onValueChange = (e) => {
        setLeftInput(e.target.value);
        console.log(leftInput);
    }



    useEffect(() => {
        let urlCourses = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

        async function getResource(url) {
            const res = await fetch(url);

            return await res.json();
        }
        getResource(urlCourses).then(data => setData(data));
    }, []);

    // const uk = {
    //     "r030": 1244, "txt": "Українська гривня", "rate": 1, "cc": "UAH", "exchangedate": "14.11.2022"
    // };

    const writeChoosedSelectOne = (e) => {
        if (e.target.value) {
            setSelectOne(e.target.value)
            console.log(selectOne)  
        }
    }

    const writeChoosedSelectTwo = (e) => {
        if (e.target.value) {
        setSelectTwo(e.target.value)
        console.log(selectTwo)  
        }
    }
   


    const macthSum = (selectOne, inputOne, selectTwo) => {
        let sum = (selectOne * inputOne) / selectTwo

        return sum;
    }

    // const macthSumTwoInput = (selectTwo, inputTwo, selectOne) => {
    //     let sum = (selectTwo * inputTwo) / selectOne

    //     return sum;
    // }


    const inputCurrency = (url) => {
        // const choosen = [url[25], url[32], url[33],
        // url[24], url[12], url[18], url[9], url[4]];


        const data = url.map((item) => {

            return (
                <>
                    <option
                        key={item.r030}
                        value={item.rate}>{`${item.txt}:  ${item.cc}  ${item.rate}`}
                    </option>
                </>
            )
        })
        return data;
    }


    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h2 style={{ marginTop: '40px', textAlign: 'center' }}>
                        Сurrency exchange</h2></Col>
                    <Col></Col>
                </Row>
                <Row style={{ marginTop: '40px' }}>
                    <Col xs={5} md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled input</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                onChange={onValueChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled select menu</Form.Label>
                            <Form.Select
                                // value={writeChoosedSelectOne}
                                onChange={writeChoosedSelectOne}>
                                <option
                                    key={12322}
                                    value={"1"}>Українська гривня: UAH
                                </option>
                                {inputCurrency(data)}
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col></Col>

                    <Col xs={5} md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled input</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                value={macthSum(selectOne, leftInput, selectTwo)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled select menu</Form.Label>
                            <Form.Select
                            // value={writeChoosedSelectTwo}
                            onChange={writeChoosedSelectTwo}
                            >
                                <option
                                    key={12322}
                                    value={'1'}>Українська гривня: UAH
                                </option>
                                {inputCurrency(data)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

// const FormCorrency = () => {

//     return (
//         <>
//             <Form.Group className="mb-3">
//                 <Form.Label>Disabled input</Form.Label>
//                 <Form.Control
//                     type="number"
//                     placeholder="0.00"
//                     onChange={onValueChange} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//                 <Form.Label>Disabled select menu</Form.Label>
//                 <Form.Select
//                     value={leftInput}
//                     onChange={onValueChange}>
//                     {inputCurrency(data)}
//                 </Form.Select>
//             </Form.Group>
//         </>
//     )

// }

export default Home;