import React from "react"

const Notification = ({message,col}) => {
    if (message === null)
        return null;
    
    return (<div style={col} className="notif">
        {message}
    </div>)
}

export default Notification;