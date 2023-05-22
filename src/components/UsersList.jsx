import { UserRow } from "./UserRow"

export const UsersList = ({users, remove, update})=> {

    return (
       
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update route</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({id, username, email}) => (
                      <UserRow key={id} id={id} username={username} email={email} send={remove} update={update}/>
                    ))
                }
            </tbody>

        </table>
   
    )
}