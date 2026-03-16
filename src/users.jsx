import { use } from "react"

export default function Users({fetchUsers}) {


    const users = use(fetchUsers);
    console.log(users.length);

    return(
        <div className="batsman">
            <h2>Users: {users.length}</h2>
        </div>


    )
}