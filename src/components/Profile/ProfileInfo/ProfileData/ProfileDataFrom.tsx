import React from "react";
import {createField, GetStringKeys, Input, TextArea,} from "../../../common/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import styles from "../../../common/FormControls/FormControls.module.css";
import {ProfileType} from "../../../../types/types";

type PropsType = { profile: ProfileType }

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataFrom: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {
        handleSubmit,
        profile,
        error
    }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>

            {error && <div className={styles.formSomeError}>{error}</div>}

            <div>
                <b>Full name: </b>
                {createField<ProfileTypeKeys>(Input, [], "fullName", "Full name")}
            </div>

            <div>
                <b>Looking for a job: </b>
                {createField<ProfileTypeKeys>(Input, [], "lookingForAJob", "", {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills: </b>
                {createField<ProfileTypeKeys>(TextArea, [], "lookingForAJobDescription", "My skills")}
            </div>

            <div>
                <b>About me: </b>{createField<ProfileTypeKeys>(TextArea, [], "aboutMe", "About me")}
            </div>
            <div>
                <b>Contacts: </b>
                {Object.keys(profile.contacts).map((itemKey) => {
                    return (
                        <div key={itemKey}>
                            <b>{itemKey}:</b>
                            {createField(Input, [], "contacts." + itemKey, itemKey)}
                        </div>
                    );
                })}
            </div>
        </form>
  );
};

export const ProfileDataReduxFrom = reduxForm<ProfileType, PropsType>({
    form: "edit-profile",
})(ProfileDataFrom);
