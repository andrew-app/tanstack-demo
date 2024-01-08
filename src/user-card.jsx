import { getUsers } from './get-users'
export const UserCard = () => {
    const { users, isLoading, isError } = getUsers();


    if(isLoading || !users) {
        <div>
            Loading...
        </div>
    }
    if(isError) {
        <div>
            Error Fetching Users
        </div>
    }

    return (
        <div>
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                {user.name}
            </li>
            ))}
        </ul>
        </div>
    )
}