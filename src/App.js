import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import RoutesComponent from "./routes/Routes";
import WrapperComponent from "./components/wrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <main>
            <WrapperComponent>
              <RoutesComponent />
            </WrapperComponent>
          </main>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
