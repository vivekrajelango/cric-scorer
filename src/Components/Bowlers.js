import React from "react";
import { Container, Navbar, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const Bowlers=()=>{
    const players = useSelector((state)=> state.teams.players);
    // console.log('players-bow', players);
    const {bowler, thisOver} = players.payload;
    if(thisOver.length){
        const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.runs);
        var totalRunsByThisOver = thisOver.reduce(reducer,0);
        // console.log('totalrun', totalRuns);
    }
    
    return(
        <Container className="px-2">
            <Card>
                <Card.Body className="py-1 px-2 main">
                    <Table>
                        <thead>
                            <tr>
                            <th>Bowler</th>
                            <th>O</th>
                            <th>M</th>
                            <th>R</th>
                            <th>W</th>
                            <th>ER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bowler.map((item, i)=>{
                                const overs = (item.overs).toFixed(1);
                                const totalRuns = item.runsGiven + totalRunsByThisOver ? totalRunsByThisOver : 0;
                                // const runsGiven = item.runsGiven +
                                const economy = (totalRuns/item.overs)*0.6;
                                return <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{overs}</td>
                                    <td>{item.maidens}</td>
                                    <td>{item.runsGiven+item.wideGiven+item.noBallsGiven}</td>
                                    <td>{item.wickets}</td>
                                    <td>{economy.toFixed(2)}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>

        
    )
}

export default Bowlers;