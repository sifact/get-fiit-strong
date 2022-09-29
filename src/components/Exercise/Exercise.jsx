import React, { useState } from "react";
import "./Exercise.css";

const Exercise = ({ exercise, updateTime }) => {
    // console.log(exercise);
    const { img, name, description, age, time, id } = exercise;
    let toggle = false;
    if (id === 2) {
        toggle = "card-transform";
    }
    if (id === 5) {
        toggle = "card-transform";
    }

    if (id === 3) {
        toggle = "card-transform-lg";
    }
    if (id === 6) {
        toggle = "card-transform-lg";
    }
    return (
        <div className={toggle ? `card ${toggle}` : "card"}>
            <img src={img} alt="" />
            <div className="card-content">
                <h1 style={{ marginTop: "0px", marginBottom: "0px" }}>
                    {name}
                </h1>
                <p>{description}</p>
                <p> For age: {age}</p>
                <p style={{ marginBottom: "20px", marginTop: "2px" }}>
                    Time required: {time}
                </p>
            </div>

            <button
                onClick={() => {
                    updateTime(time);
                }}
                className="submit-btn btn"
            >
                Add to cart
            </button>
        </div>
    );
};

export default Exercise;
