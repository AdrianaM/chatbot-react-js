import React from 'react';
import { Alert } from 'reactstrap';

const ChatbotHeader = props => {
    return (
        <div className='chatbot-header'>
            <Alert color='dark'>
                <b>PICKLE CHAT</b>
            </Alert>
        </div>
    )
}

export default ChatbotHeader;