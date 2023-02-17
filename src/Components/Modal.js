import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import {newBowler, clearThisOver, updateOvers} from '../Redux/Reducer/Teams'

const ModalPopUp = (props) => { 
    const dispatch = useDispatch();
    const [show, setShow] = useState(props.modalShow);
    const [inputVal, setInputVal] = useState('');

    var players = useSelector((state)=> state.teams.players);
    const {overs} = players.payload
    // console.log('overs', overs)
    // const handleClose = () => setShow(false);
    const handleClose=()=>{
        props.modalHide(false);
        dispatch(newBowler(inputVal))
        dispatch(updateOvers());
        dispatch(clearThisOver());
    }
    const bowlerNameHandler=(e)=>{
        // console.log('ee', e.target.value);
        setInputVal(e.target.value)
    }
    return (
        <>
            <Modal show={props.modalShow} >
                <Modal.Header >
                    <Modal.Title>New Bowler Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="enter name" onChange={bowlerNameHandler}/>
                    {overs.map((item)=>{
                        return <ul key={item.id}>
                            <li>{item.name}</li>
                        </ul>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button variant="primary" onClick={handleClose}>
                        Enter
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalPopUp;