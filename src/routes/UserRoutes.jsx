import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navabar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/registerPage"
import { useUser } from "../hooks/useUser"

export const UserRoutes = ({login, handlerLogout}) => {

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
        <>
         <Navabar login={login} handlerLogout={handlerLogout}/>
        <Routes>
            <Route path="users" element={ <UsersPage 
            users={users}
            userSelected={userSelected}
            visibleForm={visibleForm}
            initialUserForm={initialUserForm}
            recibirDatos={recibirDatos}
            handlerRemoveUser={handlerRemoveUser}
            handlerUserSelected={handlerUserSelected}
            handlerClose={handlerClose}
            handlerOpen={handlerOpen} /> }/>
            <Route path="users/register" element={ <RegisterPage enviarDatos={recibirDatos} 
                        initialUserForm={initialUserForm} />} />
            <Route path="users/edit/:id" 
            element={ <RegisterPage 
                        users={users}
                        enviarDatos={recibirDatos} 
                        initialUserForm={initialUserForm} />} />
            <Route path="/" element={ <Navigate to={'/users'} />}/>
        </Routes>
        </>
    )
}