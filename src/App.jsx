import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import data from "./data"


function App() {
  return (
    <div className="">
        <Nav data = {data}></Nav>
        <div>
            <Quotes></Quotes>
        </div>
    </div>
  );
}

export default App;
