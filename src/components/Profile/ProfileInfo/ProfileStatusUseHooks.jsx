import React, { useState } from "react";

const ProfileStatusUseHooks = (props) => {
  const [editMote, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activatedEditMode = () => {
    setEditMode(true);
  };
  const deActivatedEditMode = () => {
    setEditMode(false);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    // props.updateStatus(status);
  };

  return (
    <>
      <div>
        {!editMote ? (
          <span onClick={activatedEditMode}>{status}</span>
        ) : (
          <input
            type="text"
            onChange={onStatusChange}
            // value={status}
            autoFocus={true}
            onBlur={deActivatedEditMode}
          />
        )}
      </div>
    </>
  );
};

export default ProfileStatusUseHooks;
