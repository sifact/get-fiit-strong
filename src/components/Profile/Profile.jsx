import React, { useEffect, useState } from "react";
import "./Profile.css";
import image from "./image/hero.jpg";
import Break from "../Break/Break";
import ExerciseDetail from "../ExerciseDetail/ExerciseDetail";
import { addToDb, getData } from "../../utilities/storage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ singleExe }) => {
    const [breakTime, setBreakTime] = useState(0);

    const notify = () => {
        toast.success("Successfully done today's task :)", {
            position: toast.POSITION.BOTTOM_CENTER,
            backgroundColor: "green",
        });
    };

    useEffect(() => {
        const storedData = getData();
        if (storedData) {
            setBreakTime(storedData);
        }
    }, []);
    const addBreak = (e) => {
        const breakTime = e.target.outerText;

        setBreakTime(breakTime);
        addToDb(breakTime);
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
            <ExerciseDetail singleExe={singleExe} breakTime={breakTime} />
            <button className="submit-btn" onClick={notify}>
                Activity Completed
            </button>
            <ToastContainer />
        </div>
    );
};

export default Profile;
