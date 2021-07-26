import React, {useEffect, useState} from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}
const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m: any, index) => <Message message={m} key={index}/>)}
        </div>
    )
}
const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={message.photo} alt={"avatar"} />
            <b>{message.userName}</b>
            <p>{message.message}</p>
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const [readyState, setReadyState] = useState<'pending' | 'ready'>('pending')

    useEffect(()=>{
        ws.addEventListener('open',()=>{
            setReadyState('ready')
        })
    },[])

    const sendMessage = () => {
        if (!message) {
            return
        }
        console.log(message)
        ws.send(message)
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={readyState !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage