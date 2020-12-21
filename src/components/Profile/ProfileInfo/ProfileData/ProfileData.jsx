import styles from "../ProfileInfo.module.css";
import React from "react";

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}>edit</button>}</div>
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        {profile.lookingForAJob}
      </div>
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b> :
        {Object.keys(profile.contacts).map((itemKey) => {
          return (
            <Contacts
              key={itemKey}
              title={itemKey}
              value={profile.contacts[itemKey]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contacts = ({ title, value }) => {
  return (
    <div className={styles.profileContacts}>
      {value && (
        <div>
          <b>{title}</b>: {value}
        </div>
      )}
    </div>
  );
};
