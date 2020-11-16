import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
              value={this.props.status}
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
