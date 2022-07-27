
const UserCard = ({user}) => {
    return(
        <div className="user-card">
            <img src={`https://robohash.org/${user.id}.png`} alt={`user-${user.id}-img`}/>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </div>
    )
}

export default UserCard;