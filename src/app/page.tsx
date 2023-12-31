import TypewriterTitle from "@/components/TypewritterTitle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-100 to to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI<span className="text-green-600 font-bold"> Note Taking </span> Assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          AI Powered
          <TypewriterTitle/>
        </h2>
        <div className="mt-8"></div>
        
      </div>
    </div>
  )
}
