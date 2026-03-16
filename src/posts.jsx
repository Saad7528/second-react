import { use } from "react";
import Post from './post'

export default function Posts({postsFetchPromise}){

    const posts = use(postsFetchPromise)
    console.log(posts);
    return(
        <div className="batsman"> 
            <h2>All Posts is here: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}