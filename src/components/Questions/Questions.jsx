import React from "react";
import "./Questions.css";
import logo from "./logo192.png";
const Questions = () => {
    return (
        <section className="questions">
            <h1 style={{ textAlign: "center", fontSize: "35px" }}>
                Questions & Answers
            </h1>
            <div className="questions-container">
                <div className="questions-wrapper">
                    <div className="question">
                        <img
                            className="App-logo"
                            src={logo}
                            alt=""
                            style={{ width: "50px" }}
                        />
                        <h1>How Does React work?</h1>
                        <p>
                            React implements a virtual DOM that is basically a
                            DOM tree representation in JavaScript. So when it
                            needs to read or write to the DOM, it will use the
                            virtual representation of it.Then the virtual DOM
                            will try to find the most efficient way to update
                            the browser’s DOM.
                            <p></p>
                            It uses diff algorithms to counter changes. The core
                            of diff algorithms to compare two sequences and to
                            discover how the first can be transformed into the
                            second by a sequence of operations using the
                            primitives delete-subsequence, and
                            insert-subseqence.
                        </p>
                    </div>
                    <div className="question">
                        <h1>
                            What are the differences between Props and State?
                        </h1>
                        <p>
                            State: 1. states are mutable. <br />
                            2. states are associated with the individual
                            components can't be used by other components. <br />
                            3. states are initialize on component mount. <br />
                            4. states are used for rendering dynamic changes
                            within component.
                            <p></p>
                            Props: 1. props are immutable. <br />
                            2. We can pass props between components. <br />
                            3. We can pass from parent to child directly. For
                            passing from child to parent we need use concept of
                            lifting up states.
                        </p>
                    </div>
                    <div
                        className="question"
                        // style={{ transform: "translateX: 100px" }}
                    >
                        <h1>What are the uses of useEffect hook in React?</h1>
                        <p>
                            1. Dependencies argument: <br />
                            dependencies argument of useEffect(callback,
                            dependencies) let us control when the side-effect
                            runs.
                            <p></p>
                            2. Component lifecycle <br />
                            <p></p>
                            3. Side-effect cleanup: <br />
                            Some side-effects need cleanup: close a socket,
                            clear timers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
