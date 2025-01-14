'use client'

import Link from 'next/link'
import { useAuth } from './context/AuthContext'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function Home() {
  //const { isLoggedIn } = useAuth()

  return (
  <div className="text-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-900/5 to-purple-900/5">
    <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Welcome to SmartPlates</h1>
    <p className="text-xl sm:text-2xl mb-8 text-blue-600/80">AI-powered meal suggestions for a healthier you</p>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/An%20advanced%20digital%20interface%20displaying%20a%20futuristic%20AI-powered%20meal%20recommendation%20platform%20with%20vibrant,%20dynamic%20graphics%20of%20a%20personalized%20meal%20suggestion%20based%20on%20user%20preferences,%20including%20vegan,%20keto,%20and%20bala.png-Cp2o8b3EdrkwAobhb2C3rRXccz3MZM.jpeg"
        alt="AI-Powered Meal Planning Interface"
        className="rounded-lg shadow-2xl w-[500px] h-[500px] object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="max-w-md text-left">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">Revolutionizing Meal Planning</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Experience the future of nutrition with SmartPlates. Our AI analyzes your mood, health goals, and dietary needs to craft perfect meal plans that nourish both body and mind.
        </p>
        <Link href="/input-preferences" passHref>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </div>
  </div>
)
}

