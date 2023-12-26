
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import First1 from './components/First1';
import Second1 from './components/Second1';
import Third1 from './components/Third1';
import Fourth1 from './components/Fourth1';
import Student from './components/Student';
import Student1 from './components/Student1';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <First1/>
      <Second1/>
      <Third1/>
      <Fourth1/>
      <Student name={"Chirag"} address={"Noida"} scores={40}/>
      <Student1 name={"Chirag"} address={"Noida"} scores={40}/>
      <Display name={"Animesh"} address={"Delhi"}/>
      <button onClick={SayHello}> Say Hello</button>
      <button onClick={SayBye}> Say Bye</button>
    </div>
  );
}

function SayHello() {
  alert("Hello");
}

function SayBye() {
  alert("Bye");
}

export default App;
