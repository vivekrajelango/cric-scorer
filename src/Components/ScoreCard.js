import React, { useEffect } from "react";
import { Container, Navbar, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Batsman from "./Batsman";
import Bowler from "./Bowlers";
import Extras from "./Extras";
import Modal from "./Modal";
import Runs from "./Runs";
import ThisOvers from "./ThisOvers";

const ScoreCard=()=>{

    const list = useSelector((state) => state.teams.list);
    // const players = useSelector((state)=> state.teams.players);
    // console.log('list', list);
    const {hostName, opponentName, optedTo, tossWon} = list.payload;
    // const {striker, nonStriker, bowler} = players[0];
    return(
        <>
        <Navbar bg="success">
            <Container className="white">
                <Navbar.Brand>
                    <Link to="/cricket">
                        <i className="bi bi-arrow-left me-2"></i>
                    </Link>
                    {hostName} v/s {opponentName}
                </Navbar.Brand>
            </Container>
        </Navbar>
        <Container className="px-2 mb-1">
            <Card>
                <Card.Body className="py-1 px-2 main">
                    <div className="">
                        <small>{optedTo==='Bat' ? tossWon : opponentName}, 1st innings</small>
                        <h4 className="m-0">0-0 <small>(0.0)</small></h4>
                    </div>
                    <div className="">
                        <small>Curr.RR</small>
                        <h5><small>0.00</small></h5>
                    </div>
                </Card.Body>
            </Card>
        </Container>
        <Batsman />
        <Bowler />
        <ThisOvers />
        <Extras />
        <Runs />
        </>
    )
}

export default ScoreCard;