/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

import logo from "./pass.svg"
// import { useState } from 'react'
// import Authmodal from '../../Home/Authmodal'

const Signup = () => {

    // const [isOpen, setIsOpen] = useState(true)
    // const [Comp, setComp] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async function (e) {
        e.preventDefault()
        if (password !== cpassword) {
            alert("Password and Confirm Password doesn't match")
        } else {
            await signup(username, email, password)
        }
    }

    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                {/* <!-- login container --> */}
                <div class="bg-gray-200 flex rounded-2xl shadow-lg p-2 px-2 justify-center">
                    {/* <!-- form --> */}
                    <div class="md:w-1/2 px-1 md:pl-px p-2 items-center">
                        <h2 class="font-bold text-4xl text-brightRed text-center">Sign Up</h2>
                        <p class="text-sm mt-4 text-[#002D74] text-center">If you are not a member, Please Sign Up</p>



                        <form action="" class="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input required value={username} onChange={(e) => setUsername(e.target.value)} class="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Username" />
                            <input required value={email} onChange={(e) => setEmail(e.target.value)} class="p-2 rounded-xl border" type="email" name="email" placeholder="Email" />
                            <div class="relative">
                                <input required value={password} onChange={(e) => setPassword(e.target.value)} class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                            <div class="relative">
                                <input required value={cpassword} onChange={(e) => setCpassword(e.target.value)} class="p-2 rounded-xl border w-full" type="password" name="cpassword" placeholder="Confirm Password" />
                            </div>
                            <button disabled={isLoading} class="bg-brightRed rounded-xl text-white py-2 hover:scale-105 duration-300">Sign Up</button>
                            {error && <div className='error'>{error}</div>}
                        </form>



                        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr class="border-gray-400" />
                            <p class="text-center text-sm">OR</p>
                            <hr class="border-gray-400" />
                        </div>

                        <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            Login with Google
                        </button>

                        <div class="mt-2 text-sm border-b border-brightRed py-4 text-[#002D74] text-center">
                            <p>Forgot your password?</p>
                        </div>

                        <div class="mt-2 text-sm flex justify-between items-center text-[#002D74]">
                            <p>Already have an account?</p>
                            <Link to="/login"><button class="py-2 px-5 bg-brightRed border rounded-xl hover:scale-110 duration-300 text-white">Login</button></Link>
                        </div>
                    </div>

                    {/* <!-- image --> */}
                    <div class="md:block hidden w-1/2 pl-px items-center">
                        <img class="rounded-2xl" src={logo} />
                    </div>
                    <Link to="/">
                        <button class="bg-brightRedLight rounded-xl text-white py-2 hover:scale-105 duration-300">Back to Home</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Signup