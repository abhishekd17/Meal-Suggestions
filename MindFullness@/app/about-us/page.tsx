'use client'

import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center py-8 relative">
      {/* Animation background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 opacity-80 z-0 animate-wave"></div>

      {/* Box with content */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out z-10 opacity-100 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About MindFullness</h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            SmartPlates is an innovative platform dedicated to improving mental health through personalized nutrition. We believe that what you eat plays a crucial role in how you feel, and our mission is to help you make informed dietary choices that support your mental well-being.
          </p>
          <p>
            Our team of experts, including nutritionists, psychologists, and data scientists, work together to provide AI-powered meal suggestions tailored to your unique needs, preferences, and mental health goals.
          </p>
          <p>
            At SmartPlates , we understand that everyone's journey to better mental health is different. That's why we offer personalized recommendations based on factors such as your dietary restrictions, current mood, and specific health objectives.
          </p>
          <p>
            We're committed to using the latest research in nutritional psychiatry to inform our recommendations, ensuring that you receive science-backed suggestions to support your mental health through food.
          </p>
          <p>
            Join us on this journey to better mental health, one meal at a time. Let SmartPlates be your companion in discovering the powerful connection between food and mood.
          </p>
        </div>
      </div>
    </div>
  )
}

