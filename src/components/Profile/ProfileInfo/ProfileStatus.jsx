import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.editMode ? (
            <span onClick={this.activatedEditMode}>{this.props.status}</span>
          ) : (
            <input
              type="text"
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deActivatedEditMode}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
