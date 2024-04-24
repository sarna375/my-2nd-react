import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border:'3px solid yellow',borderRadius:'10px', margin:'20px', padding:'10px'}}>
            <h3>Counter : {count} </h3>
            <button style={{margin:'10px'}} onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}