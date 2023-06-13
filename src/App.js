import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
