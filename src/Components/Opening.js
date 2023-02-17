import React, { useEffect, useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem, playersList } from "../Redux/Reducer/Teams";

const Opening = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list = useSelector((state) => state.teams.list);

    const [openingList, setOpeningList] = useState({
        striker:'',
        nonStriker: '',
        bowlerName:''
    })
    let batsmanObj = {
        id:1,
        runs:0,
        balls:0,
        dots:0,
        ones:0,
        twos:0,
        threes:0,
        fours:0,
        fives:0,
        sixes:0,
        strikeRate:0.00,
        striker:true,
        out:false,
        overs: 0,
        maidens:0,
        runsGiven:0,
        wickets:0,
        economyRate:0.00
    }
    let bowlerObj = {
        ...batsmanObj,
        id:101,
        wideGiven: 0,
        noBallsGiven:0
    }

    const onHandleChange = (e) => {
        let { name, value } = e.target;
        setOpeningList({
            ...openingList,
            [name]: value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let batsmanArray = [];
        let bowlerArray = [];
        batsmanArray.push({
            name: openingList.striker,
            ...batsmanObj,
        },
        {
            name: openingList.nonStriker,
            ...batsmanObj,
            id:batsmanObj.id + 1,
            striker: false
        });
        bowlerArray.push({
            name: openingList.bowlerName,
            ...bowlerObj
        })
        let scoreObj = {
            ...openingList,
            batsman:batsmanArray,
            bowler:bowlerArray,
            thisOver:{
                id:0,
                name:'',
                runsGiven:0,
                wide:0,
                noBall:0,
                byes:0,
                legByes:0,
                extras:0,
                data:[]
            },
            overs:[],
            extras: {
                wide:0,
                noBalls:0,
                byes:0,
                legByes:0
            }
        }
        // console.log('newobj', scoreObj);
        dispatch(playersList(scoreObj));
        navigate('/cricket/scorecard');
        
    }
    return (
        <form className="white-bg" onSubmit={submitHandler}>
            <Navbar bg="success">
                <Container className="white">
                    <Navbar.Brand>
                        <Link to="/cricket">
                            <i className="bi bi-arrow-left me-2"></i>
                        </Link>
                        Select Opening players</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <p><b className="text-danger">{list.payload.tossWon}</b> won the toss and choose to <em className="text-danger">{list.payload.optedTo}</em></p>
            </Container>
            <Container>
                <p className="label">Striker</p>
                <input type="text" placeholder="Striker" autoComplete="off" name="striker" className="mb-4" onChange={onHandleChange} />
                <p className="label">Non-striker</p>
                <input type="text" placeholder="Non-striker" autoComplete="off" name="nonStriker" className="mb-4" onChange={onHandleChange} />
                <p className="label mt-3">Bowler</p>
                <input type="text" placeholder="Bowler name" autoComplete="off" name="bowlerName" className="mb-4" onChange={onHandleChange} />
            </Container>
            <Container className="mt-3 text-center">
                <Button type="submit" variant="success">Start Match</Button>
            </Container>
        </form>
    )
}



export default Opening