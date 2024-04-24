import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);


    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);

    }

    const teamStyle = {
        border: '3px solid red',
        margin: '20px',
        padding: '10px',
        borderRadius:'10px'
    }

    const style1 = {
        margin: '10px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button style={style1} onClick={handleRemove}>Remove</button>
        </div>
    )
}