import { useState } from 'react'
// import './App.css'

function App() {

  const [text, setText]=useState('Ready?')
  console.log(text);

  const [isClicked, setIsClicked]=useState(false)
  const [bodyChange, setBodyChange]=useState(false)
  const [newText, inputChanged]=useState('')
  const [userName, setUserName]=useState('')

function changeTitle(event){
  setText(`Hello `)
  setUserName(newText)
  event.preventDefault();
}

function changeColor(){
  setIsClicked(true);
  
}

function changeColorBack(){
  setIsClicked(false);
  
}

// function bodyChange(){
//   setBodyChange(true);
  
// }
function handleInputChange(event){
  inputChanged(event.target.value)
  console.log(`input changed`)
}


  return (
    <form onSubmit= {changeTitle}>

    <div style={{backgroundColor: bodyChange? "red":"green"}}>
      <h1 style={{backgroundColor: isClicked? "lightgreen":"gray"} }>{text}{userName}</h1>
      <p>To be updated: {newText}</p>
      <input type="text" className='userInput' placeholder="Enter your Name:" onChange={handleInputChange}></input>
      <br />
      <br />
      <button type="submit"
              onClick={changeTitle} 
              onMouseOver={changeColor}
              onMouseOut={changeColorBack}>submit</button>
    </div>
    </form>
  )
}

export default App
