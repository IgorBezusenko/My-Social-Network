import React from "react";
import s from "./Post.module.css";

type PropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};
export default Post;
