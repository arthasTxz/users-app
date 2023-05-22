import { useEffect, useState } from "react"
import Swal from "sweetalert2"


export const UserForm = ({userSelected, enviarDatos, initialUserForm, handlerClose })=> {

    const [userForm, setUserForm] = useState(initialUserForm)

    useEffect(()=> {
        setUserForm({...userSelected, password: ''})
    }, [userSelected])

    const {id, username, password, email} = userForm

    const onInputChange = ({target})=> {
        const { name, value} = target
        setUserForm({
            ...userForm,
            [name]: value
        })
    }


    return (
        <form>
            <input type="text" 
            className="form-control my-3 w-75" 
            placeholder="Username" 
            name="username"
            value={username}
            onChange={onInputChange}/>
            {id !== 0|| <input 
            className="form-control my-3 w-75" 
            placeholder="Password" 
            type='password'
            value={password}
            onChange={onInputChange}
            name="password"/>}
           
            <input type="text" 
            className="form-control my-3 w-75" 
            value={email}
            onChange={onInputChange}
            placeholder="Email" 
            name="email"/>
            <input type="hidden"
            name="id"
            value={id} />
            <button
            className="btn btn-primary"
            onClick={(event) => {
                event.preventDefault()
                if( !username || (!password && id === 0) || !email){
                    Swal.fire(
                        'Error de valiacion',
                        'Debe completar los campos del formulario?',
                        'error'
                      )
                    return
                }
                enviarDatos(userForm)
                setUserForm(initialUserForm)
                }}>{id !== 0?"Editar":"Crear"}</button>

                { !handlerClose || <button
                className="btn btn-primary mx-2"
                onClick={() => {
                    // event.preventDefault()
                    handlerClose()
                    setUserForm(initialUserForm)
                    }}>
                    Cerrar
                </button>}
                
        </form>
    )
}