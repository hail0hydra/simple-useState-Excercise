//-------------------------------------
//
// CHALLENGE - MASTERING useState in REACT
//
//-------------------------------------

import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

const App = () => {
    return (
        <div style={{color: 'white'}}>
            <h1 style={{marginLeft:'34%'}}>Exercise useState()</h1>
            <br/>
            <Counter />
            <br/>
            <br/>
            <TodoList />
            <br/>
            <br/>
            <Profile />
            <br/>
            <br/>
            <ShoppingList />
        </div>
    )
}

export default App

// @Axsh
