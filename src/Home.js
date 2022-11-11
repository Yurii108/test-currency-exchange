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

    const [data, setData] = useState([]);
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
        getResource(urlCourses).then(res => setData(res));
    }, []);

    const inputCurrency = (url) => {
        const data = url.map((item, i) => {
            // `${item.cc}   ${item.txt}   ${item.rate}`
            return (
                <>
                    <option value={item.rate}>{item.txt}:  {item.cc}  {item.rate}</option>
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
                            value={leftInput}
                            onChange={onValueChange}>
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
                                value={leftInput} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled select menu</Form.Label>
                            <Form.Select>
                                {inputCurrency(data)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;