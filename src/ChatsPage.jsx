import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="chats" style={{
            height: "100vh",
        }}>
            <PrettyChatWindow
                projectId='b0d8a7cd-1fd1-40d6-be6c-e058930bde90'
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage;