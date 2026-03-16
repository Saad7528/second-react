export default function Post({post}) {

    const {title, body} = post;

    return(
        <div className="batsman">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}