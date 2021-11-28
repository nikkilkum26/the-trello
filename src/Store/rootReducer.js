import {combineReducers} from 'redux'
import myWorkspaceReducer from './myWorkspace/myWorkspaceReducer'

const reducer =combineReducers({
    workspace:myWorkspaceReducer
})

export default reducer