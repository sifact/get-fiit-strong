import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
    console.log(exercise);
    const { img, name, description, age, time } = exercise;

    return (
        <div className="card">
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
                <button className="btn btn-secondary">Add to cart</button>
            </div>
        </div>
    );
};

export default Exercise;
