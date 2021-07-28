import React, {useEffect, useState} from "react";


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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log('close WS')
            setTimeout(createChannel, 3000)

        }

        function createChannel() {
            // if (ws !== null) {
            //     ws.removeEventListener('close', closeHandler)
            //     ws.close()
            // }
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    )
}
const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        const onMessageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        };

        wsChannel?.addEventListener('message', onMessageHandler)

        return () => {
            wsChannel?.removeEventListener('message', onMessageHandler)
        }
    }, [wsChannel])

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m: any, index) => <Message message={m} key={index}/>)}
        </div>
    )
}
const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={message.photo} alt={"avatar"}/>
            <b>{message.userName}</b>
            <p>{message.message}</p>
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyState, setReadyState] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => {
            setReadyState('ready')
        }
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
        console.log(message)
        wsChannel?.send(message)
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={wsChannel === null || readyState !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage