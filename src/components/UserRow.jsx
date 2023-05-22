import { NavLink } from "react-router-dom"

export const UserRow = ({id, username, email, send, update})=> {

    return(
        <tr key={id}>
        <td>{ id}</td>
        <td>{ username}</td>
        <td>{ email}</td>
        <td><button type="button" className="btn btn-secondary btn-sm" onClick={() => update({id, username, email})}>update</button></td>
        <td><NavLink 
        className={'btn btn-secondary btn-sm'}
        to={'/users/edit/' + id}>update route</NavLink></td>
        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => send(id)}>remove</button></td>
        
    </tr>
    )
}