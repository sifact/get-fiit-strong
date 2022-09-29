import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import "./Gym.css";

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [singleExe, setSingleExe] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);

    const updateTime = (exercise) => {
        const newArray = [...singleExe, exercise];
        setSingleExe(newArray);
    };
    return (
        <main className="gym-section">
            <div className="exercise-wrapper">
                <div className="exercises-container">
                    {exercises.map((exercise) => (
                        <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            updateTime={updateTime}
                        />
                    ))}
                </div>
                <Profile singleExe={singleExe} />
            </div>
        </main>
    );
};

export default Gym;
