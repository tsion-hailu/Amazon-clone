import React, { useContext,useEffect } from "react";
import "./App.css";
import {Type} from "./Utility/action.type"
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const[{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
if(authUser){
  //  console.log(authUser);
  dispatch({
    type:Type.SET_USER,
    user:authUser,
  })
}else{
dispatch({
  type: Type.SET_USER,
  user: null,
});
}
 
})

  },[])
  return (
    <div className="App">
      <Routing/>
     
    </div>
  );
}

export default App;
//  <div>
//    <button on onClick={() => increament(item)}>
//      +
//    </button>
//    <span>{item.amount}</span>
//    <button on onClick={() => decreament(item.id)}>
//      -
//    </button>
//  </div>;