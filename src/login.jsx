import { loginImage, apple, google, facebook } from "./assets/images";

function Login() {
    return (
        <div className="h-screen">
            <section className="flex justify-center items-center mt-10 ">
                <div className="flex max-w-[1086px] p-5 ">
                    <div className="flex-1 p-14 relative mr-10">
                        <div className=" mt-24 mr-[58px]">
                            <div className="flex mt-5 mb-7 ">
                                <h1 className="flex text-5xl	font-bold">Sign in to </h1>
                            </div>

                            <div className="flex justify-center mb-8">
                                <h1 className="text-4xl font-semibold">Lorem Ipsum is simply</h1>
                            </div>

                            <div className="">
                                <p className="text-base">If you dont have an account register  </p>
                                <p>You can  <span className="text-base text-[#4d47c3] font-semibold">Register here !</span> </p>
                            </div>
                        </div>

                        <div className="absolute bottom-[-150px] right-[-150px]">
                            <img className="loginImage" src={loginImage} alt="login image" />
                        </div>

                    </div>

                    <div className="flex-1 p-14">

                        <div className="mt-5 mb-7">
                            <h3 className="flex text-3xl	font-semibold">Sign in</h3>
                        </div>

                        <div className="">
                            <input className="bg-[#f0efff] p-4 mb-4 rounded w-full" type="text" placeholder="Enter name or username" />
                        </div>

                        <div>
                            <input className="bg-[#f0efff] p-4 mb-4 rounded w-full" type="password" placeholder="Password" />
                        </div>

                        <p className="text-[#cccccc] mb-4 text-right	">Forgot password ?</p>

                        <div className="flex">
                            <button className="bg-[#4d47c3] text-white p-3 mb-4 w-full font-semibold rounded shadow-lg shadow-indigo-500/50">Login</button>
                        </div>

                        <p className="text-[#cccccc] text-center	">or continue with</p>

                        <div className="flex space-x-4 justify-center mt-4 ">
                            <img className="w-10" src={apple} alt="apple" />
                            <img className="w-10" src={google} alt="google" />
                            <img className="w-10" src={facebook} alt="facebook" />
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Login;