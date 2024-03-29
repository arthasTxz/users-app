import { useReducer, useState } from "react"
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    }
]

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}


export const useUser = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visibleForm, setVisibleForm] = useState(false)
    const navigate = useNavigate()

    const recibirDatos = (user) => {
        dispatch({
            type: user.id === 0?'addUser':'updateUser',
            payload: user
        })

        Swal.fire(
            user.id === 0?'Usuario Creado': 'Usuario Actualizado',
            user.id === 0?'El usuario ha sido creado con exito!': 'El usuario ha sido actualizado con exito!',
            'success'
          )

        handlerClose()
        navigate('/users')
    }

    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                })
                Swal.fire(
                'Usuario Eliminado!',
                'El usuario ha sido eliminado con exito!',
                'success'
              )
            }
          })
    }

    const handlerUserSelected = (user) => {
        setVisibleForm(true)
        setUserSelected({...user})
    }

    const handlerOpen = () => {
        setVisibleForm(true)
    }

    const handlerClose = () => {
        setVisibleForm(false)
        setUserSelected(initialUserForm)
    }

    return {
        users, 
        userSelected, 
        initialUserForm,
        visibleForm,
        recibirDatos,
        handlerRemoveUser,
        handlerUserSelected,
        handlerOpen,
        handlerClose,

    }
}