import { useEffect, useState } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";

function App() {

 // useEffect (() => {
   // console.log("Ejecucion cada vez que se renderiza el componente");
  //})
  const [user, setUser] = useState({})

  useEffect(() =>{
    console.log("Ejecucion con cada cambio de la variable reactiva user");
  }, [user])
  //let number = 0;

  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  let myPlaceholder ="Escribe aquí";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  }

  const condition = true;

 

 
  const handleLogin = (userInfo) => {
  setUser(userInfo);
};

const [showMovies, setShowMovies] = useState(true);

// useEffect (() => {
   // console.log("Ejecucion cada vez que se renderiza el componente");
  //})

  //useEffect(() =>{
   // console.log("Ejecucion con cada cambio de la variable reactiva user");
 // }, [user])

  const addOne = () => {
    //number++;
    setNumber(number + 1)
    console.log(number);

  }

    const sayHello = () => {
      console.log("Hello!");

    }
    const handleChange = (e) => {
      console.log(e.target.value);

    }
  return (
    <>
    <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
        <main className="main-content">
         {user.username && <h2>Hola {user.username} </h2>}

         <MovieList></MovieList>

         <Login handleLogin={handleLogin}></Login>

         <button onClick={() => setShowMovies(!showMovies)}>
          Toggle Movies
          </button>
         {showMovies && <MovieList/>}

         {condition && <h2>La condicion se cumple</h2>}
          {!condition && <h2>La condicion no se cumple</h2>}

         <h2 onClick={addOne}>Number: {number}</h2>

         <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange} />

         <br>
         </br>

     <ButtonComponent></ButtonComponent>
    </main>
   
    </>
  )
}

export default App;
