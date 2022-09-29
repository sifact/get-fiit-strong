import React from "react";
import "./Break.css";

const Break = ({ addBreak }) => {
    const breakTimes = ["10m", "20m", "30m", "40m", "50m"];
    return (
        <div className="break-container">
            <h2>Add A Break</h2>
            <div className="info" style={{ padding: "1.5rem" }}>
                {breakTimes.map((breakTime) => (
                    <span
                        key={breakTime}
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        {breakTime}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Break;
