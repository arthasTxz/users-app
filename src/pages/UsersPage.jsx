
import { UserModalForm } from "../components/UserModalForm"
import { UsersList } from "../components/UsersList"

export const UsersPage = ({
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    recibirDatos,
    handlerRemoveUser,
    handlerUserSelected,
    handlerOpen,
    handlerClose

}) => {

    return (
        <>
            {
                !visibleForm || 
                <UserModalForm 
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                recibirDatos={recibirDatos}
                handlerClose={handlerClose}/>
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    {/*            
                {!visibleForm ||  
                <div className="col">
                    <UserForm 
                    enviarDatos={recibirDatos}
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerClose={handlerClose}/> 
                </div>} */}


                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpen}>
                            Nuevo Usuario
                        </button>}
                        {users.length === 0 ?
                            <div className="alert alert-warning">No hay usuarios en el sistema</div>
                            :
                            <UsersList users={users}
                                remove={handlerRemoveUser}
                                update={handlerUserSelected} />}

                    </div>
                </div>
            </div>
        </>
    )
}