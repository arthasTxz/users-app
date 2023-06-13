export const usersReducer = (state=[], action) => {
    switch (action.type){
        case 'addUser':
            return [
                ...state,
                {
                    ...action.payload,
                    // id: new Date().getTime()
                }
            ];
        case 'removeUser':
        return state.filter( (element) => element.id !== action.payload)
        case 'updateUser':
            return state.map( (element)=> {
                if(element.id === action.payload.id){
                    return {
                        ...action.payload,
                        password: element.password

                    }
                }
                return element
            })
         case 'loadingUsers':
                return action.payload;
        default:
            return state

    }
}