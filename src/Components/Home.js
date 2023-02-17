import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Button, Card, Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../Redux/Reducer/Teams";

const Home=()=>{
    

    const dispatch = useDispatch();
    const [forms, setForms] = useState({
        hostName:'',
        opponentName:'',
        tossWon:'',
        optedTo:'',
        overs:''
    })

    const onChangeHandler=(e)=>{
        let {name,value} = e.target;
        setForms({
            ...forms,
            [name]: value
        })
    }

    const startMatch=()=>{
        dispatch(addItem(forms))
    }

    const hostTeam = forms.hostName ? forms.hostName : "Host Team";
    const opponentTeam = forms.opponentName ? forms.opponentName : "Opponent Team";
    return(
        <>
            <Navbar bg="success">
                <Container className="white">
                    <Navbar.Brand>Valentine's Cricket</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <p className="label">Teams</p>
                <Card>
                    <Card.Body>
                    <input type="text" placeholder={hostTeam} autoComplete="off" name ="hostName" className="mb-3" onChange={onChangeHandler}/>
                    <input type="text" placeholder={opponentTeam} autoComplete="off" name="opponentName" onChange={onChangeHandler}/>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="mt-3">
                <p className="label">Toss won by?</p>
                <Card>
                    <Card.Body>
                        <input type="radio" name="tossWon" id="hostToss" value={hostTeam}  className="me-1" onChange={onChangeHandler}/>
                        <label htmlFor="exampleRadios1" className="me-3">
                            {hostTeam}
                        </label>
                        <input type="radio" name="tossWon" id="exampleRadios2" value={opponentTeam} className="me-1" onChange={onChangeHandler}/>
                        <label htmlFor="exampleRadios2">
                            {opponentTeam}
                        </label>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="mt-3">
                <p className="label">Opted to?</p>
                <Card>
                    <Card.Body>
                        <input type="radio" name="optedTo" id="exampleRadios3" value="Bat"  className="me-1" onChange={onChangeHandler}/>
                        <label htmlFor="exampleRadios3" className="me-3">
                            Bat
                        </label>
                        <input type="radio" name="optedTo" id="exampleRadios4" value="Bowl" className="me-1" onChange={onChangeHandler}/>
                        <label htmlFor="exampleRadios4">Bowl</label>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="mt-3">
                <p className="label">Overs?</p>
                <Card>
                    <Card.Body>
                    <input type="text" autoComplete="off" placeholder="12" name="overs" className="mb-3" onChange={onChangeHandler}/>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="mt-3 text-center">
                <Link to="/cricket/opening">
                    <Button variant="success" onClick={startMatch}>Continue</Button>
                </Link>
            </Container>
            {/* <p>{JSON.stringify(forms)}
                </p> */}
        </>
    )
}

export default Home;