import Link from "next/link";

export default function Register() {
    return (
        <div className="h-screen w-full flex ">
            <div className="w-full flex justify-around items-center">
                <h1 className="text-white text-4xl"><span className="text-orange-500">DNS</span> Health Checker</h1>
                <form autoComplete="off" className="bg-sky-950 p-7 flex flex-col justify-between w-[350px] rounded-xl">
                    <h1 className="text-center text-white text-3xl mb-3">Register</h1>
                    <div className="mb-2 flex flex-col gap-1 justify-center">
                        <div>
                            <label className="text-white" htmlFor="username">Username</label>
                        </div>
                        <input className="p-2 rounded bg-white/15 focus:border-white text-white" id="username" type="username" placeholder="type your username" />
                        <div>
                            <label className="text-white" htmlFor="email">Email</label>
                        </div>
                        <input className="p-2 rounded bg-white/15 focus:border-white text-white" id="email" type="email" placeholder="example@example.com" />
                    </div>
                    <div className="mb-2 flex flex-col gap-1 justify-center">
                        <div>
                            <label className="text-white" htmlFor="password">Password</label>
                        </div>
                        <input className="p-2 rounded bg-white/15 focus:border-white text-white" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span className="text-center text-white">Do you already registered?</span>
                        <div className="text-center">
                            <Link className=" text-orange-500 hover:brightness-90 hover:underline" href="/SignIn">Sign in</Link>
                        </div>
                    </div>
                    <button className="bg-orange-500 text-white p-2 rounded hover:brightness-90" type="submit">Sign Up</button>
                    <Link className="bg-orange-500 text-white text-center p-2 rounded hover:brightness-90 mt-2" href="/">Home</Link>
                </form>
            </div>
        </div>
    )
}