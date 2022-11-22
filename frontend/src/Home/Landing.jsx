import React from 'react'

// import { useState } from 'react'
import { Link } from "react-router-dom";

// import Authmodal from '../Home/Authmodal'

import Logo from './img/logo.svg'
import Coding from './img/coding.svg'
import Lin from './img/linkedin.svg'
import Twt from './img/twitter.svg'
import Ins from './img/insta.svg'
import Linw from './img/linkedinw.svg'
import Twtw from './img/twitterw.svg'
import Insw from './img/instaw.svg'
import Pin from './img/pinterest.svg'
import Fb from './img/icon-facebook.svg'
import './Landing.css'

export default function Landing() {

    // const [isOpen, setIsOpen] = useState(false)
    // const [Comp, setComp] = useState(true)

    const nav = document.querySelector('.sticky');
    const menu = document.querySelector('.menu');
    const signup = document.querySelector('.signup');
    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            nav.classList.add('bg-black');
            nav.classList.add('opacity-75');
            nav.classList.remove('bg-transparent');
            menu.classList.add('text-white');
            signup.classList.add('bg-white');
            signup.classList.add('text-black');
            signup.classList.remove('bg-black');
            signup.classList.remove('text-white');
            document.querySelector(".logo").src = "img/logo-white.svg";
        }
        else {
            nav.classList.add('bg-transparent');
            nav.classList.remove('bg-black');
            nav.classList.remove('opacity-75');
            menu.classList.remove('text-white');
            signup.classList.add('bg-black');
            signup.classList.add('text-white');
            signup.classList.remove('bg-white');
            signup.classList.remove('text-black');
            document.querySelector(".logo").src = "img/logo.svg";
        }
    };


    return (
        <div>
            {/* <h1 className="text-3xl font-bold underline">Landing</h1> */}
            <nav class="sticky top-0 z-50">
                {/* <!-- flex container --> */}
                <main class="relative container mx-auto mb-8 p-6">
                    <div class="flex justify-between items-center">
                        {/* <!-- logo --> */}
                        <div class="pt-2">
                            {/* <img class="logo" src="img/logo.svg" alt=""> */}
                            <img class="logo" src={Logo} alt="" />
                        </div>
                        {/* <!-- menu items  --> */}
                        <div class="menu hidden font-semibold md:flex space-x-6">
                            <a href="#hero" class=" hover:text-brightRed">Home</a>
                            <a href="#features" class=" hover:text-brightRed">Features</a>
                            <a href="#team" class=" hover:text-brightRed">Our Team</a>
                            <a href="#hero" class=" hover:text-brightRed">Courses</a>
                            <a href="#footer" class=" hover:text-brightRed">Contact</a>
                        </div>
                        {/* <!-- buttons  --> */}
                        {/* onClick={() => { setIsOpen(true); setComp(true) }} */}
                        <div class="hidden md:flex space-x-4">
                            <Link to="/login"><button class="login bg-brightRed font-bold text-white px-4 py-2 rounded-md hover:bg-red-400">Login</button></Link>
                            {/* <Authmodal Comp={Comp} Open={isOpen} onClose={() => setIsOpen(false)} /> */}
                            <Link to="/signup"><button class="signup bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-500">Sign up</button></Link>
                            {/* <Authmodal Comp={Comp} Open={isOpen} onClose={() => setIsOpen(false)} /> */}
                        </div>
                    </div>
                </main>
            </nav>

            {/* <!-- hero section --> */}
            <div id="hero" class="mt-8">
                <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0">
                    {/* <!-- left item  tagline--> */}
                    <div class="flex flex-col mx-14 mb-32 space-y-14 md:w-1/2">
                        <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Make your Learning Reliable & Affordable.
                        </h1>
                        <p class="max-w-sm font-semibold text-lg text-center text-gray-700 md:text-left">
                            We bring you the best content available right to your screens from the free world of Youtube. So you don't need to worry paying to some random platforms.
                        </p>
                        <div class="flex justify-center md:justify-start">
                            <Link to="/signup"><button class="p-3 px-6 pt-2 font-bold text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</button></Link>
                            {/* <Authmodal Comp={Comp} Open={isOpen} onClose={() => setIsOpen(false)} /> */}
                        </div>
                    </div>
                    {/* <!-- right item  image--> */}
                    <div class="md:w-1/2">
                        <img src={Coding} alt="" />
                    </div>
                </div>
            </div>


            {/* <!-- features section --> */}
            <section id="features">
                <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    {/* <!-- what's different --> */}
                    <div class="flex flex-col space-y-12 mx-14 md:w-1/2">
                        <h2 class="text-4xl font-bold md:text-left text-center max-w-md">
                            What's different about CStube?
                        </h2>
                        <p class="max-w-sm text-center text-gray-700 md:text-left">
                            CStube is a unique e-learning platform for the computer science student community. We provide you with the best playlists available on several CS topics/domains in an easy and reliable manner to keep you away from distraction so that you can focus more on learning and developing skills rather than your wasting time watching irrelevant stuffs.
                        </p>
                    </div>

                    {/* <!-- numbered list --> */}
                    <div class="flex flex-col space-y-8 md:w-1/2">

                        {/* <!-- list item 1 --> */}
                        <div class="flex flex-col space-y-1">
                            <div class="rounded-l-full bg-red-200">
                                <div class="flex space-x-2 items-center">
                                    <div class="px-4 py-2 text-white text-lg font-bold rounded-full bg-brightRed">01</div>
                                    <h3 class="text-base font-bold">Selected quality playlists</h3>
                                </div>
                            </div>
                            <p class="text-gray-400 ml-8">
                                CStube platform gives you access to the top quality playlists available on several CS topics/domains on the Youtube based on several parameters such as ratings, likes, views, etc.
                            </p>
                        </div>

                        {/* <!-- list item 2 --> */}
                        <div class="flex flex-col space-y-1">
                            <div class="rounded-l-full bg-red-200">
                                <div class="flex space-x-2 items-center">
                                    <div class="px-4 py-2 text-white text-lg font-bold rounded-full bg-brightRed">02</div>
                                    <h3 class="text-base font-bold">Selected quality playlists</h3>
                                </div>
                            </div>
                            <p class="text-gray-400 ml-8">
                                CStube platform gives you access to the top quality playlists available on several CS topics/domains on the Youtube based on several parameters such as ratings, likes, views, etc.
                            </p>
                        </div>

                        {/* <!-- list item 3 --> */}
                        <div class="flex flex-col space-y-1">
                            <div class="rounded-l-full bg-red-200">
                                <div class="flex space-x-2 items-center">
                                    <div class="px-4 py-2 text-white text-lg font-bold rounded-full bg-brightRed">03</div>
                                    <h3 class="text-base font-bold">Selected quality playlists</h3>
                                </div>
                            </div>
                            <p class="text-gray-400 ml-8">
                                CStube platform gives you access to the top quality playlists available on several CS topics/domains on the Youtube based on several parameters such as ratings, likes, views, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Our team section --> */}
            <section id="team">
                <div class="max-w-6xl m-auto mt-32 text-center px-5">
                    <h2 class="text-4xl text-center font-bold">
                        Meet our incredible team!
                    </h2>
                    {/* <!-- each team member --> */}
                    <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
                        {/* <!-- ankur --> */}
                        <div class="flex flex-col items-center space-y-6 p-6 rounded-lg bg-veryLightGray md:w-1/3">
                            <img src="img/avatar-anisha.png" alt="" class="w-20 h-20 -mt-14" />
                            <h5 class="text-lg font-bold">Ankur</h5>
                            <div class="flex flex-row items-center space-x-5">
                                <img src={Lin} alt="" />
                                <img src={Twt} alt="" />
                                <img src={Ins} alt="" />
                            </div>
                        </div>
                        {/* <!-- snehel --> */}
                        <div class="flex-col items-center space-y-6 p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src="img/avatar-richard.png" alt="" class="w-20 h-20 -mt-14" />
                            <h5 class="text-lg font-bold">Snehel</h5>
                            <div class="flex flex-row items-center space-x-5">
                                <img src={Lin} alt="" />
                                <img src={Twt} alt="" />
                                <img src={Ins} alt="" />
                            </div>
                        </div>
                        {/* <!-- vivek --> */}
                        <div class="flex-col items-center space-y-6 p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src="img/avatar-shanai.png" alt="" class="w-20 h-20 -mt-14" />
                            <h5 class="text-lg font-bold">Vivek</h5>
                            <div class="flex flex-row items-center space-x-5">
                                <img src={Lin} alt="" />
                                <img src={Twt} alt="" />
                                <img src={Ins} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Call to action --> */}
            <section id="cta" class="bg-brightRed">
                {/* <!-- Flex Container --> */}
                <div class="container flex flex-col items-center justify-between px-6 py-12 mb-0 mx-auto my-12 space-y-12 md:py-8 md:flex-row md:space-y-0">
                    {/* <!-- Heading --> */}
                    <h2 class="text-4xl font-bold text-center text-gray-900 md:text-4xl md:max-w-xl md:text-left">
                        Simplify your learning experience with CStube
                    </h2>
                    {/* <!-- Button --> */}
                    <div>
                        <Link to="/signup"><button class="p-3 px-6 pt-2 text-brightRed font-bold bg-black rounded-full baseline hover:text-black hover:bg-white">Get Started</button></Link>
                        {/* <Authmodal Comp={Comp} Open={isOpen} onClose={() => setIsOpen(false)} /> */}
                    </div>
                </div>
            </section>


            {/* <!-- footer --> */}
            <footer class="bg-veryDarkBlue">
                <div class="container flex flex-col-reverse justify-around space-x-32 mx-auto mt-0 px-6 py-10 space-y-8 md:flex-row md:space-y-0">
                    {/* <!-- logo and social links --> */}
                    <div class="flex flex-col-reverse mt-2 items-center justify-between space-y-4 md:flex-col md:items-start md:space-y-0">
                        <div class="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy;CStube All rights reserved!
                        </div>
                        <div>  <img src="img/logo-white.svg" alt="" class="h-8" /> </div>
                        <div class="flex justify-center space-x-4">
                            <img src={Twtw} alt="" />
                            <img src={Insw} alt="" />
                            <img src={Linw} alt="" />
                            <img src={Fb} alt="" />
                            <img src={Pin} alt="" />
                        </div>
                    </div>
                    {/* <!-- list containers --> */}
                    <div class="flex justify-around space-x-32">
                        <div class="flex flex-col text-white font-bold space-y-3">
                            <a href="#hero" class="hover:text-brightRed">Home</a>
                            <a href="#features" class="hover:text-brightRed">Features</a>
                            <a href="#team" class="hover:text-brightRed">Our team</a>
                            <a href="#hero" class="hover:text-brightRed">Courses</a>
                        </div>
                        <div class="flex flex-col text-white font-bold space-y-3">
                            <a href="#hero" class="hover:text-brightRed">Careers</a>
                            <a href="#features" class="hover:text-brightRed">About us?</a>
                            <a href="#footer" class="hover:text-brightRed">Contact</a>
                        </div>
                    </div>
                    {/* <!-- input  --> */}
                    <div class="flex flex-col justify-between">
                        <form>
                            <div class="flex mx-auto space-x-3">
                                <label class="text-white text-xl font-bold block" for="">Have Queries? Mail us: </label>
                                <input type="text" class="flex-1 block px-4 rounded-lg focus:outline-zinc-800" placeholder="" />
                                <button class="px-6 py-2 bg-brightRed hover:bg-brightRedLight focus:outline-none text-white rounded-full">Send</button>
                            </div>
                        </form>
                        <div class="text-lg text-center hidden text-white md:block">
                            Copyright &copy;CStube All rights reserved!
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
