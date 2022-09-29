const addToDb = (breakTime) => {
    localStorage.setItem("breakTime", breakTime);
};

const getData = () => {
    const breakTime = localStorage.getItem("breakTime");
    return breakTime;
};

export { addToDb, getData };
