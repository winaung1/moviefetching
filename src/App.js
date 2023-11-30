import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Details } from "./components/Details/Details";
import { Nav } from "./components/Nav";
import { Mylist } from "./components/MyList/Mylist";
import movieGenres from "./components/GenreIds";

export const AppProvider = createContext()

function App() {
  const [myList, setMyList] = useState([])
  const [myGen, setMyGen] = useState(28)


  const removeFromList = (id) => {
    const newList = myList.filter(itemList => itemList.id !== id)
    setMyList(newList)
  }


  const getGenreType = (item) => {
    setMyGen(movieGenres[item])
  }



  const values = {myList, setMyList, removeFromList, getGenreType, myGen}

  return (
  <div>
    <AppProvider.Provider value={values}>
    <Nav/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/components/Details/Details" element={<Details />} />
          <Route path="/components/MyList/Mylist" element={<Mylist />} />
      </Routes>
    </BrowserRouter>
    </AppProvider.Provider>
  </div>
  );
}

export default App;
