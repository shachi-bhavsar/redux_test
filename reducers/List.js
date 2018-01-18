const list = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IN_LIST':
            return [
                ...state,
                { 
                    id : action.id, 
                    desc : action.desc, 
                    OutOfStock : false
                }
            ];
        case 'CHANGE_STATUS':
            return state.map ( item =>
                (item.id === action.id) 
                ? {...item, OutOfStock : ! item.OutOfStock}
                : item
            )
        default:
            return state
    }
}
export default list