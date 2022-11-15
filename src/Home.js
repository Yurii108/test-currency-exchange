import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from "react";

import ArrowsSvg from './ArrowsSvg';

const Home = () => {

    const [selectOne, setSelectOne] = useState(0);
    const [selectTwo, setSelectTwo] = useState(0);
    const [turnOfRightInput, setTurnOfRightInput] = useState(false);
    const [turnOfLiftInput, setTurnOfLiftInput] = useState(false);

    const [data, setData] = useState([]);

    const [leftInput, setLeftInput] = useState(0);
    const [rightInput, setRightInput] = useState(0);

    const onValueChange = (e) => {
        setLeftInput(e.target.value);
        setTurnOfRightInput(true)
        setTurnOfLiftInput(false)
        console.log(leftInput);
    }

    const onValueChangeR = (e) => {
        setRightInput(e.target.value);
        setTurnOfRightInput(false)
        setTurnOfLiftInput(true)
        console.log(rightInput);
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

    const macthSum = (selectOne = 1, inputOne, selectTwo = 1) => {
        let sum = (selectOne * inputOne) / selectTwo

        return sum;
    }

    // function searchNeedCurr(arr, prop, value) {
    //     let result = [],
    //         copy = [...arr];
    //     for (const item of copy) {
    //         if (String(item[prop].includes(value) === true)) result.push(item);
    //     }
    //     return result;
    // }

    const inputCurrency = (url) => {

        let listSeveralCurr = [
            {
                "r030": 1244, "txt": "Українська гривня", "rate": 1, "cc": "UAH", "exchangedate": "14.11.2022"
            },
        ];

        for (let name of url) {
            if (name.cc === 'EUR') listSeveralCurr.push(name);
            if (name.cc === 'USD') listSeveralCurr.push(name);
            if (name.cc === 'INR') listSeveralCurr.push(name);
            if (name.cc === 'PLN') listSeveralCurr.push(name);
            if (name.cc === 'CZK') listSeveralCurr.push(name);
        }

        const data = listSeveralCurr.map((item) => {

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
                            <Form.Label>I have</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                value={turnOfLiftInput ?
                                    macthSum(selectTwo, rightInput, selectOne) : null}
                                onChange={onValueChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose the currency</Form.Label>
                            <Form.Select
                                onChange={writeChoosedSelectOne}>

                                {inputCurrency(data)}
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <ArrowsSvg />
                    </Col>

                    <Col xs={5} md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label>I will have</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                value={turnOfRightInput ?
                                    macthSum(selectOne, leftInput, selectTwo) : null}
                                onChange={onValueChangeR} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose the currency</Form.Label>
                            <Form.Select
                                onChange={writeChoosedSelectTwo}
                            >
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