import React from "react";
import "./Break.css";

const Break = ({ addBreak }) => {
    return (
        <div className="break-container">
            <h2>Add A Break</h2>
            <div className="info" style={{ padding: "1.5rem" }}>
                <div>
                    <span
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        10s
                    </span>
                </div>
                <div>
                    <span
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        20s
                    </span>
                </div>
                <div>
                    <span
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        30s
                    </span>
                </div>
                <div>
                    <span
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        40s
                    </span>
                </div>
                <div>
                    <span
                        onClick={(e) => {
                            addBreak(e);
                        }}
                    >
                        50s
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Break;
