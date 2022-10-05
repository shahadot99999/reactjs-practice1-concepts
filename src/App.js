import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <article className={"blog"}>We are <p style={{ backgroundColor: 'lightblue', margin: '15px', border: '4px solid salmon' }}>very sorry </p> to wait. You know we are mad to learn <h2 style={{ backgroundColor: 'black', margin: '15px', border: '4px solid salmon' }}>Programing Hero Course</h2>. We are trying to hard to gain knowledge. </article>

      <Blog heading="We are happy" author="wilamson"></Blog>
      <Blog heading="We are addited React" author="Benjamin"></Blog>
      <Blog heading="We are mad web development" author="Francis"></Blog>

      <Mobile></Mobile>

      <TodoPosts></TodoPosts>

    </div>
  );
}

function Blog(props) {
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '15px', border: '4px solid salmon' }}>
      <h1>Heading:{props.heading}</h1>
      <p>Author: {props.author}</p>
    </div>
  )
}

const mobileStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function Mobile() {
  const [battery, setBattery] = useState(100)
  const batteryPower = () => {
    const newBatteryPower = battery - 10;

    if (battery > 0) {
      setBattery(newBatteryPower);

    }


  }
  return (
    <div style={mobileStyle}>
      <h3>Mobile Charge:{battery}</h3>
      <button onClick={batteryPower}>Battery Down</button>
    </div>
  )
}

function TodoPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Post:{posts.length}</h1>
      {
        posts.map(post => <Post id={post.id} title={post.title}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroudColor: 'lightgray', margin: '15px', border: '4px solid salmon' }}>
      <h2>Id:{props.id} </h2>
      <h3>Title:{props.title} </h3>
    </div>
  )
}

export default App;
