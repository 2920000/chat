import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import './App.css'
function App() {
  const [input,setInput]=useState('')
  const [list,setList]=useState([])
  const [userName,setUserName]=useState('')
  const handleAdd=(e)=>{
    e.preventDefault()
    setList([...list,{name:userName,message:input}])
    setInput('')
  }
  useEffect(()=>{
 setUserName(prompt('Mời bạn nhập tên để Chat'));
  },[])
  console.log(list)
  return (
    <Container>
     <Title>Chat with me</Title>
     <Name>Welcome {userName}</Name>
     <Form>
        <input  value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button disabled={!input} onClick={handleAdd}>ADD</button>
     </Form>
    {list.map((item)=><SubMessage className={userName!==item.name?'right':'left'} >{item.name} <Text >{item.message}</Text></SubMessage>)}
    </Container>
  )
}
const Container=styled.div`
max-width:400px;
position:relative;
margin: auto;

`
const Form =styled.form`
text-align:center;
margin:20px 0;
`
const Title =styled.div`
text-align:center;
font-size:30px;

`
const Name=styled.div`
text-align:center;

`
const SubMessage=styled.div`
margin-top:15px;

`
const Text= styled.span`
position:relative;
padding:3px 7px;
border:1px solid gray;
border-radius:9px;
top:10px;


`
export default App
