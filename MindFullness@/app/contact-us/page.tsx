'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', { name, email, message })
    alert('Thank you for your message. We will get back to you soon!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center py-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 opacity-80 z-0 animate-wave"></div>
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out z-10">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-6">Contact Us</h1>
        <p className="text-center text-gray-500 mb-8">We’d love to hear from you! Please fill out the form below to reach out.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 transform hover:scale-105">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

