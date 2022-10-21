// component
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

// styles
import "./reset.css";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <div className="body-container">
        <Nav />
        <Main />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
