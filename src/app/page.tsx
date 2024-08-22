import ThemeSwitch from "@/app/ThemeSwitch"
import Card from "@/components/Card"

export default function page() {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black flex flex-col items-center justify-center h-[100vh]">
      <div className="border border-neutral-700 rounded-full py-3 px-6">
        Health Matrix
      </div>
      <div className="flex items-center justify-center space-x-6">
        <Card image="/graph.svg" title="Anaytics" color="#ECAA00" />
        <Card image="/heart.svg" title="Your Data" color="#72C862" />
        <Card image="/apple.svg" title="Diet Plan" color="#FAFFEE" />
      </div>
    </div>
  )
}
