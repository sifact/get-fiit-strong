import React from "react";
import "./Break.css";

const Break = ({ addBreak }) => {
    const breakTimes = ["10s", "20s", "30s", "40s", "50s"];
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
