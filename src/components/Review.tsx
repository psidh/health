"use client"
import Button from "@mui/material/Button/Button"
import Progress from "./Progress"

export default function Review() {
  return (
    <div className="px-8 md:px-12 py-16 flex flex-col items-center justify-start">
      <h2 className="text-purple-900 text-3xl md:text-5xl my-16 font-medium text-center">
        Testimonials
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-20 w-full items-center md:space-x-12">
        <img
          src="/review.svg"
          alt="Discover Diets"
          className="my-12 md:mt-0 md:w-[40%]"
        />
        <div className="w-full md:w-[50%]">
          <p className="mb-12 text-2xl font-light leading-relaxed text-neutral-600">
            "Healtrust Has Been A Lifesaver For Me. The Ability To Consult With
            A Doctor Anytime, Anywhere Has Made Managing My Health So Much
            Easier. The Doctors Are Knowledgeable And Compassionate, And I
            Always Feel Heard And Cared For..."
          </p>
          <h3 className="mb-12 text-2xl font-medium">John Doe</h3>
          <Progress />
          <Button
            variant="contained"
            className="bg-purple-100 mt-12 text-purple-900 py-3 px-8 font-medium hover:bg-purple-200 hover:shadow-none shadow-none"
          >
            View All
          </Button>
        </div>
      </div>
      <div className="p-8 flex bg-purple-600 text-white flex-col md:flex-row rounded-3xl justify-between items-start space-y-12 md:space-y-0">
        <div className="w-full md:w-[60%]">
          <h3 className="font-semibold text-3xl mb-6">
            Master your wellness, Live Fully
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, qui!
            Recusandae suscipit quis, ratione accusamus reprehenderit doloremque
            quisquam ea eos repellat sit!
          </p>
        </div>
        <Button
          variant="contained"
          className="bg-purple-100 text-purple-900 py-3 px-8 font-medium hover:bg-purple-200 hover:shadow-none shadow-none"
        >
          Receive Your Quote
        </Button>
      </div>
    </div>
  )
}
