import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRuns, updateBalls, updateOvers, swapBatsman } from "../Redux/Reducer/Teams";
import Modal from "./Modal";

const Runs=()=>{
    const dispatch = useDispatch();
    const [circle, setCircle] = useState('circle');
    const [modalShow, setModalShow] = useState(false);
    var players = useSelector((state)=> state.teams.players);
    const {batsman, bowler, thisOver} = players.payload
    // var batsmanArr = players.payload.batsman;
    // var bowlerArr = players.payload.bowler;
    // var thisOver = players.payload.thisOver;

    // const [batsman,setBatsman] = useState(batsmanArr);
    const [player1, setPlayers] = useState(players)
    // console.log('batsmanArr', batsman);

    const modalHideHandler=(param)=>{
        setModalShow(false);
    }
    const updateRunHandler=(name, runs)=>{
        //updating Batting Runs
        let striker = batsman.find((item)=>item.striker==true)
        let strikerId = striker.id;
        dispatch(updateRuns({
            strikerId:strikerId,
            name:name,
        }));

        //Updating Bowling Runs
        let bowlerId = bowler.find((item)=>item.id);
        let bowlerName = bowler.find((item)=>item.name);
        // let runsGivenByBowler = bowler.find((item)=>item.runsGiven);
        // console.log('bowlerId', runsGivenByBowler.runsGiven);
        // debugger
        if(bowler[0].overs>=0.5){
            setModalShow(true);
            setCircle('circleDisable');
            // dispatch(updateOvers())
        } 
        const wide = thisOver.wide ? thisOver.wide : 0
        const noBall = thisOver.noBall ? thisOver.noBall : 0;
        dispatch(updateBalls({
            runs:runs,
            bowlerId: bowlerId?.id,
            bowlerName: bowlerName?.name,
            wide: wide,
            noBall: noBall,
        }));
        // else {
        //     dispatch(updateBalls({
        //         runs:runs,
        //         bowlerId: bowlerId.id}));
        // }
        
        //Swapping batsman
        if(name==="ones" || name==="threes" || name==="fives"){
            dispatch(swapBatsman())
        }
    }
    return(
        <>
        <Container className="px-2 mt-2">
            <Card>
                <Card.Body className="p-2 runs">
                <section className={circle} onClick={()=>updateRunHandler("dots", 0)}>
                    0
                </section>
                <section className={circle} onClick={()=>updateRunHandler("ones", 1)}>
                    1
                </section>
                <div className={circle} onClick={()=>updateRunHandler("twos", 2)}>
                    2
                </div>
                <div className={circle} onClick={()=>updateRunHandler("threes", 3)}>
                    3
                </div>
                {/* <div className="circle overs">
                    Overs
                </div> */}
                <div className={circle} onClick={()=>updateRunHandler("fours", 4)}>
                    4
                </div>
                <div className={circle} onClick={()=>updateRunHandler("fives", 5)}>
                    5
                </div>
                <div className={circle} onClick={()=>updateRunHandler("sixes", 6)}>
                    6
                </div>
                <div className="circle">
                    undo
                </div>
                <div className="circle">
                    Reset
                </div>
                </Card.Body>
            </Card>
        </Container>
        <Modal modalShow={modalShow} modalHide={modalHideHandler}/>
        </>
    )
}

export default Runs;