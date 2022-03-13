import React from 'react'
import img from './images/img.jpg'
function About() {
  return (
    
<section class="relative  bg-blueGray-50">
<div class="container mx-auto">
  <div class="flex flex-wrap items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-yellow-500">
        <img src={img} alt="" />
        <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
            <polygon points="-30,95 583,95 583,65" class="text-yellow-500 fill-current"></polygon>
          </svg>
          <h4 class="text-xl font-bold text-white">
            Great for your awesome project
          </h4>
          <p class="text-md font-light mt-2 text-white">
            Putting together a page has never been easier than matching
            together pre-made components. From landing pages presentation
            to login areas, you can easily customise and built your pages.
          </p>
        </blockquote>
      </div>
    </div>

    <div class="w-full md:w-6/12 px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 px-4">
          <div class="relative flex flex-col mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i class="fas fa-sitemap"></i>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Great team</h6>
              <p class="mb-4 text-blueGray-500">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non reiciendis soluta sit omnis quo?
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <h6 class="text-xl mb-1 font-semibold">
                Many international awards
              </h6>
              <p class="mb-4 text-blueGray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium veniam inventore tenetur fugiat architecto eos delectus sunt quia, nihil nisi!
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i class="fas fa-newspaper"></i>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Awesome locations</h6>
              <p class="mb-4 text-blueGray-500">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut excepturi similique, odit velit incidunt iusto asperiores laudantium. Ratione voluptate quidem incidunt earum doloremque impedit.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i class="fas fa-file-alt"></i>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Great salary</h6>
              <p class="mb-4 text-blueGray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, tempora facere alias nihil dolorem error quasi blanditiis saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
  )
}

export default About