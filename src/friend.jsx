export default function Friend({friend}) {
    const {name, email, phone} = friend;
    return(
        <div className="batsman">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}