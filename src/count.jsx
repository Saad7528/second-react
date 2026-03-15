import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        // console.log('clicked');
        const newCount = count + 2;
        setCount(newCount)


    }

    const counterStyle = {
        border: '2px solid yellow',
        padding: '20px'
    }

    return(
        <div style={counterStyle}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
    
}