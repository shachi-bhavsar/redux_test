const display = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_AVAILIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  export default display
  