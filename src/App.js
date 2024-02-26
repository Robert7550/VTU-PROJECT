import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screen component/HomeScreen";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      <Header/>
      <Container>
        <main>
          <HomeScreen/>
        </main>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
