import React, { useEffect, useState } from "react";

const ProfileStatusUseHooks = (props) => {
  const [editMote, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activatedEditMode = () => {
    setEditMode(true);
  };
  const deActivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
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
            value={status}
            autoFocus={true}
            onBlur={deActivatedEditMode}
          />
        )}
      </div>
    </>
  );
};

export default ProfileStatusUseHooks;
