import React from 'react';

const Hero = () => {
  return (
    <main class="bg-white font-open-sans">
    <header class="h-24 sm:h-32 flex items-center">
        <div class="container mx-auto pl-8 flex items-center justify-between">
            <div class="uppercase text-yellow-700 flex flex-col items-center">
                <div class="text-2xl">HR Porto</div>
                <small class="tracking-widest">we create greatness</small>
            </div>
            <div class="flex items-center">
                <nav class="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                    <a href="#" class="py-2 px-8 hover:underline">
                        Home
                    </a>
                    <a href="#" class="py-2 px-8 hover:underline">
                        Services
                    </a>
                    <a href="#" class="py-2 px-8 hover:underline">
                        About
                    </a>
                    <a href="#" class="py-2 px-8 hover:underline">
                        Contact
                    </a>
                    <a href="#" class="py-2 px-8 hover:underline">
                        FAQ
                    </a>
                </nav>
                <button class="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8">
                    <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                    <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                    <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                </button>
            </div>
        </div>
    </header>
    <div class="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 class="text-center lg:text-left text-3xl sm:text-5xl font-light text-yellow-700 leading-tight mb-4">Our recruiting strategy <strong class="font-black text-3xl sm:text-4xl block">hit your hiring plan</strong></h1>
            <p class="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">You must be able to convey information via phone, email, and in person. You want to make sure your tone is always professional but friendly.</p>
            <a href="#" class="bg-yellow-400 hover:bg-yellow-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">Apply Now</a>
            <div class="mt-16 lg:mt-24 flex">
                <span class="w-12 h-1 mx-1 bg-yellow-400"></span>
                <span class="w-12 h-1 mx-1 bg-yellow-200"></span>
                <span class="w-12 h-1 mx-1 bg-yellow-200"></span>
            </div>
        </div>
        <div class="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8">
            
        </div>
    </div>
</main>
  )
}

export default Hero;