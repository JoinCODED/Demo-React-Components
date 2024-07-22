import "./App.css";
import cookies from "./cookies";

function App() {
  const cookiesList = cookies.map((cookie) => (
    <div key={cookie.id} className="cookie-item">
      <img src={cookie.image} className="cookie-image" />
      <p>{cookie.name}</p>
      <p>{cookie.price}</p>
    </div>
  ));
  return (
    <div className="App App-header">
      <h1>Cookies</h1>
      <div className="cookie-list">{cookiesList}</div>
    </div>
  );
}

export default App;
