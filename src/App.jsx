
import "./App.css";

function App() {
  fetch('/public/data.JSON')
  .then(res=>res.json())
  .then(data=>console.log(data))

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
