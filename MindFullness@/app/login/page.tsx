'use client'

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', email, password)
    login()
    router.push('/')
  }

  const handleOAuthLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`)
    // Replace the following line with API call to handle OAuth login
    login()
    router.push('/')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <button 
          onClick={() => handleOAuthLogin('Google')} 
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Continue with Google
        </button>
        <button 
          onClick={() => handleOAuthLogin('Apple')} 
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900">
          Continue with Apple
        </button>
        <button 
          onClick={() => handleOAuthLogin('Facebook')} 
          className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900">
          Continue with Facebook
        </button>
      </div>

      <p className="mt-4 text-center">
        Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
      </p>
    </div>
  )
}

