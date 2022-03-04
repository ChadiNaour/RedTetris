import React from "react";
const Login = () => {
    return (
        <div class="font-sans" style={{height: "70vh"}}>
            <div class="flex justify-center items-center" style={{height: "100%"}}>
                <div class="relative sm:max-w-sm w-full">
                    <div class="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" style={{backgroundColor: "#fad390"}}></div>
                    <div class="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6 justify-center items-center" style={{backgroundColor: " #f9253c"}}></div>
                    <div class="relative w-full rounded-3xl  px-6 py-12 bg-gray-100 shadow-md">
                        <label for="" class="block mt-2 text-sm text-gray-700 text-start font-semibold">
                            Enter your username
                        </label>
                        <form method="#" action="#" class="mt-4">

                            <div>
                                <input type="text" placeholder="Username" class="mt-1 px-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;