import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      <Header/>
      <Container>
        <main>
          <Outlet/>
        </main>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
