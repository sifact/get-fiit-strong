import React, { useState } from "react";
import "./Profile.css";
import image from "./image/hero.jpg";
import Break from "../Break/Break";
import ExerciseDetail from "../ExerciseDetail/ExerciseDetail";

const Profile = ({ singleExe }) => {
    const [x, setX] = useState(0);

    const addBreak = (e) => {
        setX(e.target.outerText);
    };
    return (
        <div className="profile-wrapper">
            <div className="address">
                <img src={image} alt="" />
                <div>
                    <h4>Moshiur Sifat</h4>
                    <p>Mymensingh, Trisal</p>
                </div>
            </div>

            <div className="info">
                <div>
                    <span>
                        <h2>75</h2> <small>kg</small>
                    </span>
                    <span>
                        <p>weight</p>
                    </span>
                </div>
                <div>
                    <span>
                        <h2>5.5</h2>
                    </span>
                    <span>
                        <p>height</p>
                    </span>
                </div>
                <div>
                    <span>
                        <h2>24</h2> <small>yrs</small>
                    </span>
                    <span>
                        <p>age</p>
                    </span>
                </div>
            </div>
            <Break addBreak={addBreak} />
            <ExerciseDetail singleExe={singleExe} x={x} />
            <button className="btn btn-primary">Activity Completed</button>
        </div>
    );
};

export default Profile;
