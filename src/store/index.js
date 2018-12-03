import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//development only
window.store = store

export default store
