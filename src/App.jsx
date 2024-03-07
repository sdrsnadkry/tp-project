import { logo } from "./assets/images";
import Login from "./login";

const App = () => {
  return (
    <div className="h-screen">
      <header className="pt-8 pl-10">
        <div className="flex">
          <img src={logo} alt="logo" />
        </div>
      </header>

      <Login />
    </div>
  );
};

export default App;
