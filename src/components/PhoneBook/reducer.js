export const reducer = (state, action)=>{
    switch(action.type){
        case 'DATA_LOAD_SUCCESS' : {
            const {data: users} = action
            const usersMap = new Map()
            users.forEach(user=>{
                const {name:{last}} = user;
                const firstLetter = last.charAt(0).toLowerCase()
                const letterArray = usersMap.has(firstLetter) ? usersMap.get(firstLetter) : []
                letterArray.push(user) 
                usersMap.set(firstLetter, letterArray)
            })
         
            return{
                ...state,
                users: usersMap
            }
        }
        case 'DATA_LOAD_ERROR' : {
            const {error} = action
            return{
                ...state,
                error
            }
        }
        default: return state
    }
}