import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from "../notes";

function App() {
    return (
        <>
        <Header />
        <Note notes={notes}/>
        <Footer />
        </>
    )
}
export default App;