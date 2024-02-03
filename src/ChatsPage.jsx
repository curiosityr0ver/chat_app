import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="chats" style={{
            height: "100vh",
        }}>

            <PrettyChatWindow
                projectId={`${process.env.REACT_APP_PROJECT_ID}`}
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage;