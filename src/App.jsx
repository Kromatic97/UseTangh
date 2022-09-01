import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { getUsers } from './store/slices/users.slice'

function App() {
  
  //dispatch de la informacion//
  const dispatch = useDispatch()
  
  useEffect(() => {
    //se importa el getUsers del clousure o tunkhg
    dispatch(getUsers())
  }, [])
  
  const users = useSelector(state => state.users)


  return (
    <div className="App">
      <h1>User</h1>
      {
        users?.results.map(user => (
          <div key={user.email}>
            <img src={user.picture.large} alt=""/>
            <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>

          </div>
        ))
      }
    </div>
  )
}

export default App
