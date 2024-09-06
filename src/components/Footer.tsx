import React from "react"

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-36 bg-neutral-900 text-neutral-400 p-8 space-x-0 md:space-x-12">
      <div className="mb-12 md:mb-0">
        <h3 className="text-2xl font-semibold mb-6">Support Us</h3>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio
          saepe architecto dolorum, ex atque dolor neque a consequuntur adipisci
          nemo animi eos commod.
        </p>
        <div className="flex space-x-6 ">
          <input
            type="text"
            title="Email"
            placeholder="Enter a Email Address"
            className="py-4 px-6 bg-neutral-600 rounded-xl"
          />
          <button className="px-6 py-4 bg-purple-600 text-white rounded-xl">
            Submit
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between w-full md:w-[50%]">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-medium text-white">Health Matrix</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-xl font-medium text-white">For Doctors</h4>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}
