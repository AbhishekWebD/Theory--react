import useCount from "../Hooks/useCount"
export function Counter2() {
    const [count, Increment, Decrement] = useCount(100)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}