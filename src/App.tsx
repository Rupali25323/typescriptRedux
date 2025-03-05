 import {useEffect} from "react"
import { useAppDispatch,useAppSelector } from "./redux/hooks"
import {getUsers} from "./redux/userSlice"
const App = () => {
  const dispatch=useAppDispatch()
  const user = useAppSelector(state=>state.user.data)
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  console.log(user)
  return (
    <div className="container">
     
       <div className="second-container">
        <h3>Fetch Data </h3>
        {
          user?.map((userData:any)=>(
            <>
            <h3>{userData.email}</h3>
            <h2>{userData.id}</h2>
            <h1>{userData.name}</h1>
            
            </>
          ))
        }
       </div>
    
    </div>
  )
}

export default App