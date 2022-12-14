import { BrowserRouter } from "react-router-dom";
import Scroll from "./components/Scroll";
import { FormProvider } from "./context/FormContext";
import { Router } from "./Router";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Scroll />
        <Router />
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
