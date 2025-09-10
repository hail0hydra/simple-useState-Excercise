import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    const [freq, setFreq] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
        setFreq(prevFreq => prevFreq + 1)
    }

    const reset = ()=> {
        setCount(0)
        setFreq(prevFreq => prevFreq + 1)
    }

    const decrement = ()=> {
        setCount((prevCount) => prevCount - 1)
        setFreq(prevFreq => prevFreq + 1)
    }

    return (
        <div style={{background: '#717171', padding: 50, borderRadius: 18}}>
            <h1>Counter: {count}</h1>
            <p>you clicked {freq} times!</p>
            <button style={{padding: 5}} onClick={increment}>Increment</button>
            <button style={{padding: 5}} onClick={reset}>Reset</button>
            <button style={{padding: 5}} onClick={decrement}>Decrement</button>

        </div>
    )
}

export default Counter
