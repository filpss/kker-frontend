import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col justify-center items-center">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
