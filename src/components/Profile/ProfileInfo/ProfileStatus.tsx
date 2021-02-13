import React, { ChangeEvent } from "react";

type PropsType = { status: string; updateStatus: (newStatus: string) => void };
type StateType = { editMode: boolean; status: string };

class ProfileStatus extends React.Component<PropsType, StateType> {
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

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

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
