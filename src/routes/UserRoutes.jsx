import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navabar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/registerPage"
import { UserProvider } from "../context/UserProvider"

export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            <UserProvider>
                <Navabar login={login} handlerLogout={handlerLogout} />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="users/register" 
                    element={<RegisterPage 
                         />} />
                    <Route path="users/edit/:id"
                        element={<RegisterPage
                             />} />
                    <Route path="/" element={<Navigate to={'/users'} />} />
                </Routes>
            </UserProvider>
        </>
    )
}