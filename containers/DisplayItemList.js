import { connect } from 'react-redux'
import { changeStatus } from '../actions'
import ItemList from '../components/ItemList'

const getAvailableItems = (list, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return list
    case 'SHOW_OUTOFSTOCK':
      return list.filter(t => t.OutOfStock)
    case 'SHOW_AVAILABLE':
      return list.filter(t => !t.OutOfStock)
    default:
      throw new Error('Unknown filter: ')
  }
}

const mapStateToProps = (state) => {
    return {
      list : getAvailableItems(state.list, state.display)
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      onItemClick: (id) => {
        dispatch(changeStatus(id))
      }
    }
}
  
const DisplayItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)
  
export { DisplayItemList}
