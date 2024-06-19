import Header from "components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import Introduction from "./components/Section/Introduction"
import Skills from "./components/Section/Skills"
import Work from "components/Section/Work"
import Project from "components/Section/Project"
const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Introduction />
            <Skills />
            <Work />
            <Project />
        </>
    )
}

export default App
