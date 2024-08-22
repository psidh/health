import Card1 from "@/components/Card1"
import Card2 from "@/components/Card2"
import Card3 from "@/components/Card3"

export default function page() {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black flex flex-col items-start justify-start py-16 px-32">
      <h1 className="my-4 text-4xl font-semibold">Welcome, Philkhana!</h1>
      <h2 className="my-4 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis, </h2>

      <div className=" flex items-center justify-center space-x-6">
        <Card1 /> 
        <Card2 /> 
        <Card3 /> 
      </div>
    </div>
  )
}
