import React, { Component, useState, useEffect } from 'react'
function Banner() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Счетчик обновлен");
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>State: {count}</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
export default Banner
