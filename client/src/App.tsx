import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notification";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="body">
      {/* <Notification /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
