import React, {ChangeEvent, useState} from "react";
import {Spinner} from "../../common/spinner/spinner";
import ProfileStatusUseHooks from "./ProfileStatusUseHooks";
import userIcon from "../../../assets/image/user.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxFrom} from "./ProfileData/ProfileDataFrom";
import {ProfileType} from "../../../types/types";
import styles from "./ProfileInfo.module.css";

type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>,
}

const ProfileInfo: React.FC<PropsType> = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        saveProfile,
    }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Spinner/>;
    }

    const onPhotosChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };
    return (
        <div>
            <div className={styles.profileInfo}>
                <img src="https://theinpaint.com/images/example-1-2.jpg" alt="cover"/>
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.profilePhoto}>
                    <img src={profile.photos.large || userIcon} alt="cover"/>
                    {isOwner && <input onChange={onPhotosChange} type={"file"}/>}
                </div>

                <ProfileStatusUseHooks status={status} updateStatus={updateStatus}/>

                <div>
                    {editMode ? (
                        <ProfileDataReduxFrom
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
