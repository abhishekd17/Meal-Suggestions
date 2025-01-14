'use client'

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'  // Import useRouter for navigation

export default function Profile() {
  const { logout } = useAuth()
  const router = useRouter()  // Initialize useRouter

  // State management for form fields
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [dietaryPreferences, setDietaryPreferences] = useState('Vegetarian')
  const [age, setAge] = useState(25)
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(175)
  const [goal, setGoal] = useState('Maintain weight')
  const [loading, setLoading] = useState(false)
  const [profilePic, setProfilePic] = useState<File | null>(null)

  // Handle profile update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      console.log('Profile updated:', { name, email, dietaryPreferences, age, weight, height, goal })
      alert('Profile updated successfully!')
      setLoading(false)
    }, 2000)
  }

  // Handle profile picture change
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setProfilePic(file)
  }

  // Handle logout
  const handleLogout = () => {
    logout()
    alert('You have been logged out successfully!')
    router.push('/')  // Redirect to the home page (or login page)
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex justify-center items-center">
          <label htmlFor="profilePic" className="cursor-pointer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
              {profilePic ? (
                <img src={URL.createObjectURL(profilePic)} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                  <span className="text-gray-400">Upload Pic</span>
                </div>
              )}
            </div>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </label>
        </div>

        {/* Name Section */}
        <div>
          <label htmlFor="name" className="block text-lg mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Email Section */}
        <div>
          <label htmlFor="email" className="block text-lg mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Dietary Preferences Section */}
        <div>
          <label htmlFor="dietaryPreferences" className="block text-lg mb-1">Dietary Preferences</label>
          <input
            type="text"
            id="dietaryPreferences"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Age Section */}
        <div>
          <label htmlFor="age" className="block text-lg mb-1">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Weight Section */}
        <div>
          <label htmlFor="weight" className="block text-lg mb-1">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Height Section */}
        <div>
          <label htmlFor="height" className="block text-lg mb-1">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Goal Section */}
        <div>
          <label htmlFor="goal" className="block text-lg mb-1">Health Goal</label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Maintain weight">Maintain weight</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Muscle gain">Muscle gain</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>

      {/* Logout Button */}
      <button
        onClick={handleLogout}  // Use the handleLogout function here
        className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  )
}

