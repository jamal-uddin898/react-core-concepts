import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jamal', 'Shakil', 'Alomgir', 'Salman']
  const products = [
    {name:' Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
       </ul>
       {
         products.map(product => <Product product={product}></Product>)
       }
       <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border: '2px solid pink', width: '200px'}}>
      <h3>My name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
