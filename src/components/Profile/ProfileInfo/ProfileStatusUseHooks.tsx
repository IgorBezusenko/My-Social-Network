import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
  status: string
  updateStatus:(status:string)=>void
}

const ProfileStatusUseHooks:React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
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
  const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div>
        {!editMode ? (
          <div>
            <b>Status:</b> <span onClick={activatedEditMode}>{status}</span>
          </div>
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
