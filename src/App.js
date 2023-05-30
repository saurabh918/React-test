import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import RoutesComponent from "./routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <RoutesComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
