export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div className="box2">
            <h3>Name: {name} </h3>
            <h5>Email: {email}</h5>
        </div>
    )
}