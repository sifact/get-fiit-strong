import React from "react";
import "./ExersiceDetail.css";

const ExerciseDetail = () => {
    return (
        <div>
            <div className="exercise">
                <h4 style={{ margin: "0px" }}>Exercise time</h4>
                <p style={{ margin: "0px" }}>0 seconds</p>
            </div>
            <div className="exercise">
                <h4 style={{ margin: "0px" }}>Break time</h4>
                <p style={{ margin: "0px" }}>0 seconds</p>
            </div>
        </div>
    );
};

export default ExerciseDetail;
