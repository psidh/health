import Image from "next/image"

export default function Card(props: {
  image: string
  title: string
  color: string
}) {
  console.log(`border-[${props.color}]`)

  return (
    <div
      className={`bg-${props.color} rounded-xl border border-[${props.color}] p-6`}
    >
      <img
        src={props.image}
        alt={props.title}
        className="object-cover w-full h-1/2"
      />
      <h1 className="text-2xl my-4 font-medium">{props.title}</h1>
    </div>
  )
}
