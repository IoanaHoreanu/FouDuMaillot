import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import BrandPresentation from "../components/Presentation";
import Temoinage from "../components/Temoinage";
import "../styles/Home.css";

function Home() {
    return (
        <><header>
            <Navbar />
        </header>
        <main>
            <BrandPresentation />
            <Temoinage />
        </main>
        <footer>
            <Footer />
        </footer></>
    )
}

export default Home;