import React, { Component } from "react";

class StatusMessage extends Component {
render() {
    return (
    <div>
        {this.props.isSuccess ? (<h1>Success!</h1>) : (<h1>Error!</h1>)}
    </div>
    );
}
}

export default StatusMessage;
