import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './feedback.css'

const Feedback = () => {

    const [message, setMessage] = useState('');
    const [savedMessage, setSavedMessage] = useState('');

    useEffect(() => {
        const storedMessage = localStorage.getItem('savedMessage');
        if (storedMessage) {
            setSavedMessage(storedMessage);
        }
    }, []);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const saveMessage = () => {
        localStorage.setItem('savedMessage', message);
        setSavedMessage(message); // Update saved message state
        setMessage(''); // Clear the message input after saving
    };
    
    return (
        <div className='fdbk-body'>
            <div className="fdbk-1">
                <div className="fdbk-head">
                    <h1>Share your feedback</h1>
                </div>
                <Form>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Some instrudction for submiting feedback</Form.Label>
                        <Form.Control placeholder='Submint your response...' 
                        value={message} onChange={handleMessageChange}
                        className='fdbk-ta' as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Button onClick={saveMessage} className='fdbk-btn' variant="outline-secondary">Submit</Button>
            </div>
        </div>
    )
}

export default Feedback