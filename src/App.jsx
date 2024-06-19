import { useState } from "react";
import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import data from "./data"


function App() {
    const index = Math.floor(Math.random() * data.length);
    const [category, setCategory] = useState(index)

  return (
    <div className="w-full h-[100vh] bg-slate-300 flex flex-col justify-start items-center">
        <Nav data = {data} setCategory={setCategory} ></Nav>
        <div className="w-full h-full flex justify-center items-center">
            <Quotes category={category}></Quotes>
        </div>
    </div>
  );
}

export default App;
