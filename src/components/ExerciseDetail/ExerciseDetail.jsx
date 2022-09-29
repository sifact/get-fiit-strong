import React from "react";
import "./ExersiceDetail.css";

const ExerciseDetail = ({ singleExe, breakTime }) => {
    let total = 0;
    singleExe.forEach((time) => {
        const length = time.length;
        const removeLast = time.slice(0, length - 1);
        const timeInt = +removeLast;
        total += timeInt;
    });

    return (
        <div>
            <div className="exercise">
                <h4 style={{ margin: "0px" }}>Exercise time</h4>
                <p style={{ margin: "0px" }}>{total} seconds</p>
            </div>
            <div className="exercise">
                <h4 style={{ margin: "0px" }}>Break time</h4>
                <p style={{ margin: "0px" }}>
                    {" "}
                    {breakTime ? breakTime : "0 second"}
                </p>
            </div>
        </div>
    );
};

export default ExerciseDetail;
