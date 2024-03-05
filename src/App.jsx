import { loginImage, logo } from "./assets/images";

const App = () => {
  return (
    <div className="h-screen ">
      <header className="pt-8 pl-11">
        <img src={logo} alt="Logo" />
      </header>

      <section className="flex justify-center">
        <div className=" max-w-[1086px] flex">
          <div className=" flex-1">
            <h1>Sign in to</h1>
            <h2>Lorem Ipsum is simply</h2>

            <p>If you do not have an account register </p>
            <p>You can Register Here </p>

            <img src={loginImage} alt="Login Image" />
          </div>
          <div className="flex-1">
            <h4>Sign In</h4>
            <input type="text" placeholder="Enter name or username" />
            <input type="password" placeholder="Password" />

            <button>Login</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
