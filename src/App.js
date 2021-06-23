import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
            <div className="app__header">
                <Header />
            </div>

            <div className="app__body">
                <div className="app__container">
                    <NewsFeed />
                </div>
            </div>
    </div>
  );
}

export default App;
