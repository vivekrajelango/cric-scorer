import React, { useEffect, useRef } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {swapBatsman, updateExtras} from '../Redux/Reducer/Teams';

const Extras = () => {
    const dispatch = useDispatch();
    const wideRef = useRef();
    const noBallRef = useRef();
    var players = useSelector((state)=> state.teams.players);
    const {batsman, bowler, thisOver} = players.payload;

    useEffect(()=>{
        wideRef.current.checked = false;
        noBallRef.current.checked = false;
    },[batsman])

    const swapBatsmanHandler=()=>{
        dispatch(swapBatsman())
    }
    const updateExtraRuns=(e)=>{
        const val = e.target.value;
        if(val==='wide'){
            wideRef.current.checked = true;
            noBallRef.current.checked = false;
        } else if(val==='noBall'){
            wideRef.current.checked = false;
            noBallRef.current.checked = true;
        }
        dispatch(updateExtras({
            extraType:val,
            runs: 1
        }))
    }
    return (
        <Container className="px-2 mt-2">
            <Card>
                <Card.Body className="py-1 px-2 extras">
                    <section>
                        <input type="checkbox" ref={wideRef} id="wide" value="wide" onChange={updateExtraRuns}/>
                        <label htmlFor="exampleRadios3">
                            Wide
                        </label>
                    </section>
                    <section>
                        <input type="checkbox" ref={noBallRef} name="optedTo" id="exampleRadios4" value="noBall" onChange={updateExtraRuns} />
                        <label htmlFor="exampleRadios4">No Ball</label>
                    </section>
                    <section>
                        <input type="checkbox" name="optedTo" id="exampleRadios4" value="byes"/>
                        <label htmlFor="exampleRadios4">Byes</label>
                    </section>
                    <section>
                        <input type="checkbox" name="optedTo" id="exampleRadios4" value="legByes"  />
                        <label htmlFor="exampleRadios4">Leg Byes</label>
                    </section>
                    <section>
                        <input type="checkbox" name="optedTo" id="exampleRadios4" value="Bowl" />
                        <label htmlFor="exampleRadios4">Wicket</label>
                    </section>
                    {/* <section>

                    </section> */}
                    <section>
                        <Button className="me-2" variant="success" size="sm">Retire</Button>
                        <Button className="me-2" variant="success" size="sm" onClick={swapBatsmanHandler}>Swap Batsman</Button>
                        <Button variant="success" size="sm">Extras</Button>
                    </section>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Extras;