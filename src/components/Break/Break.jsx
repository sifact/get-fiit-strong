import React from "react";
import "./Break.css";

const Break = () => {
    return (
        <div className="break-container">
            <h2>Add A Break</h2>
            <div className="info" style={{ padding: "1.5rem" }}>
                <div>
                    <span>10s</span>
                </div>
                <div>
                    <span>20s</span>
                </div>
                <div>
                    <span>30s</span>
                </div>
                <div>
                    <span>40s</span>
                </div>
                <div>
                    <span>50s</span>
                </div>
            </div>
        </div>
    );
};

export default Break;
