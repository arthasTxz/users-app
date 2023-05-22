import { UserContext } from "./UserContext"
import { useUser } from "../hooks/useUser"

export const UserProvider = ({children}) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        recibirDatos,
        handlerRemoveUser,
        handlerUserSelected,
        handlerOpen,
        handlerClose
    } = useUser()


    return(
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                recibirDatos,
                handlerRemoveUser,
                handlerUserSelected,
                handlerOpen,
                handlerClose
            }
        }>
            {children}
        </UserContext.Provider>
    )

}