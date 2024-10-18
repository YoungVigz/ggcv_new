import NavBar from "./sections/NavBar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {

  return (
    <main className="max-w-7xl mx-auto relative text-white">
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default App
