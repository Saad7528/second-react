import { useState } from "react"

export default function Batsman() {
    const [run, setRun] = useState(0)

    const handleSingle = () =>{

        const newRun = run + 1;
        setRun(newRun)
    }
    const handleFour = () => {
        const newRun = run + 4;
        setRun(newRun)
    }

    const handleSix = () => {
        const newRun = run + 6;
        setRun(newRun);
    }

    return(
        <div className="batsman">
            <h2>Batsman: </h2>
            {
                run > 50 && <p>Congrats</p>
            }
            <h1>Scor: {run}</h1>
            
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

            
        </div>

    )
}