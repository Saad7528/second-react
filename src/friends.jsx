import { use } from "react"
import Friend from './friend'

export default function Friends({friendPromise}) {

    const fetchFriend = use(friendPromise)
    console.log(fetchFriend);

    return(
        <div className="batsman">
            <h2>Friends: {fetchFriend.length}</h2>
            {
                fetchFriend.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}