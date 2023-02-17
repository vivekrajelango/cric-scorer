import React from "react";
import { Container, Card, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";


const ThisOvers=()=>{
    const players = useSelector((state)=> state.teams.players);
    const {thisOver} = players.payload;
    // console.log('ss', thisOver)
    // const wide = thisOver.wide;

    const renderSwitch=(item)=>{
        switch(true){ 
            case (item.wide===1): 
                return item.runs+'w';
                break
            case (item.noBall===1): 
                return item.runs+'nb';
                break
            default: 
                return item.runs
        }
    }
    return(
        <Container className="px-2 mt-2">
            <Card>
                <Card.Body className="py-1 px-2 ">
                    <small>This Over: </small>
                    {thisOver.data.map((item, index)=>{
                        return <Badge className="me-1" bg="success" key={index}>
                            {renderSwitch(item)}
                            {/* {item.wide ? item.runs +'w' : item.runs} */}
                        </Badge>
                    })}
                    
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ThisOvers;