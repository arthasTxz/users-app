import { UserContext } from "./UserContext"
import { useUser } from "../hooks/useUser"

export const UserProvider = ({children}) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        recibirDatos,
        handlerRemoveUser,
        handlerUserSelected,
        handlerOpen,
        handlerClose,
        getUsers
    } = useUser()


    return(
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                errors,
                recibirDatos,
                handlerRemoveUser,
                handlerUserSelected,
                handlerOpen,
                handlerClose,
                getUsers
            }
        }>
            {children}
        </UserContext.Provider>
    )

}