'use client'

import { useState, useEffect } from 'react'

interface MealHistoryItem {
  id: number
  name: string
  date: string
  calories: number
  nutrients: string
}

export default function MealHistory() {
  const [mealHistory, setMealHistory] = useState<MealHistoryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch meal history
    setTimeout(() => {
      setMealHistory([
        { id: 1, name: 'Grilled Chicken Salad', date: '2024-03-01', calories: 350, nutrients: 'Protein, Vitamin C' },
        { id: 2, name: 'Vegetarian Stir Fry', date: '2024-03-02', calories: 300, nutrients: 'Fiber, Iron' },
        { id: 3, name: 'Salmon with Roasted Vegetables', date: '2024-03-03', calories: 400, nutrients: 'Omega-3, Vitamin D' },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const deleteMeal = (id: number) => {
    // Here you would typically make an API call to delete the meal from history
    setMealHistory(mealHistory.filter(meal => meal.id !== id))
    console.log('Deleted meal with id:', id)
  }

  if (loading) {
    return <div className="text-center">Loading meal history...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Meal History</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Meal</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Calories</th>
            <th className="border p-2">Nutrients</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mealHistory.map((meal) => (
            <tr key={meal.id}>
              <td className="border p-2">{meal.name}</td>
              <td className="border p-2">{meal.date}</td>
              <td className="border p-2">{meal.calories}</td>
              <td className="border p-2">{meal.nutrients}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteMeal(meal.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

