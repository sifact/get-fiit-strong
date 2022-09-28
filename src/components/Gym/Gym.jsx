import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import "./Gym.css";

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);
    return (
        <div className="exercise-wrapper">
            <div className="exercises-container">
                {exercises.map((exercise) => (
                    <Exercise key={exercise.id} exercise={exercise} />
                ))}
            </div>
            <Profile />
        </div>
    );
};

export default Gym;
