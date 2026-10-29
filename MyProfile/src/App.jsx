
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-sky-100">
      <Header />

      <main className="w-full flex-1 px-3 sm:px-6">
        <ProfileCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
