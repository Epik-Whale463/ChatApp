import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('b231b010-d419-47d1-9c79-0fdc348991d1', props.user.username, props.user.secret);
    return (
        <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage