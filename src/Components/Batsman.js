import React from "react";
import { Container, Navbar, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const Batsman=()=>{
    const players = useSelector((state)=> state.teams.players);
    console.log('players-bat', players);
    const {batsman} = players.payload;
    // console.log('striker', batsman[0]);
    return(
        <Container className="px-2">
            <Card>
                <Card.Body className="py-1 px-2 main">
                    <Table>
                        <thead>
                            <tr>
                            <th>Batsman</th>
                            <th>R</th>
                            <th>B</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                            </tr>
                        </thead>
                        <tbody>
                           {batsman.map((item)=>{
                            const runs = 
                                (item.dots)*0+
                                (item.ones)*1+
                                (item.twos)*2+
                                (item.threes)*3+
                                (item.fours)*4+
                                (item.fives)*5+
                                (item.sixes)*6

                            const balls = 
                                (item.dots)*1+
                                (item.ones)*1+
                                (item.twos)*1+
                                (item.threes)*1+
                                (item.fours)*1+
                                (item.fives)*1+
                                (item.sixes)*1
                                
                            const strikeRate = ((runs/balls)*100).toFixed(2)

                            return <tr key={item.id}>
                                <td>{item.name}{item.striker ? "*" : ''}</td>
                                <td>{runs}</td>
                                <td>{balls}</td>
                                <td>{item.fours}</td>
                                <td>{item.sixes}</td>
                                <td>{strikeRate==='NaN' ? '0.00' : strikeRate}</td>
                            </tr>
                           })}
                            
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>

        
    )
}

export default Batsman;