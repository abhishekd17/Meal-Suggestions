'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

interface Meal {
  id: number
  name: string
  calories: number
  vitamins: string[]
  description: string
  dietType: string // e.g., 'vegetarian', 'vegan', 'non-vegetarian'
  goal: string // e.g., 'lose weight', 'gain muscle', 'maintain weight'
  allergens: string[] // e.g., 'gluten', 'dairy'
}

export default function MealSuggestions() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  
  // User inputs
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([])
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [goal, setGoal] = useState('')
  const [pastMeals, setPastMeals] = useState('')
  const [vitaminDeficiency, setVitaminDeficiency] = useState('')

  // Simulate fetching meals based on user inputs
  useEffect(() => {
    fetchMealSuggestions()
  }, [dietaryRestrictions, goal, pastMeals, weight, age, vitaminDeficiency])

  const fetchMealSuggestions = async () => {
    setLoading(true)

    // Example static meals, replace with actual data or AI model
   const allMeals: Meal[] = [
  { id: 1, name: 'Grilled Chicken Salad', calories: 350, vitamins: ['A', 'C', 'E'], description: 'A light and nutritious salad with grilled chicken, mixed greens, and a variety of colorful vegetables.', dietType: 'non-vegetarian', goal: 'maintain weight', allergens: [] },
  { id: 2, name: 'Vegetarian Stir Fry', calories: 300, vitamins: ['B', 'C', 'K'], description: 'A flavorful mix of seasonal vegetables stir-fried with tofu and served over brown rice.', dietType: 'vegetarian', goal: 'lose weight', allergens: [] },
  { id: 3, name: 'Salmon with Roasted Vegetables', calories: 400, vitamins: ['D', 'B12', 'Omega-3'], description: 'Oven-baked salmon fillet served with a medley of roasted root vegetables and herbs.', dietType: 'non-vegetarian', goal: 'gain muscle', allergens: [] },
  { id: 4, name: 'Vegan Buddha Bowl', calories: 450, vitamins: ['A', 'C', 'D'], description: 'A nourishing bowl filled with roasted veggies, quinoa, avocado, and a tahini dressing.', dietType: 'vegan', goal: 'maintain weight', allergens: ['gluten'] },
  { id: 5, name: 'Eggplant Parmesan', calories: 500, vitamins: ['A', 'C', 'K'], description: 'Crispy breaded eggplant slices topped with marinara sauce and melted cheese, served with a side of pasta.', dietType: 'vegetarian', goal: 'maintain weight', allergens: ['gluten', 'dairy'] },
  { id: 6, name: 'Chicken and Vegetable Skewers', calories: 450, vitamins: ['A', 'B6', 'C'], description: 'Grilled chicken and seasonal vegetables skewered and char-grilled to perfection.', dietType: 'non-vegetarian', goal: 'gain muscle', allergens: [] },
  { id: 7, name: 'Quinoa & Black Bean Salad', calories: 350, vitamins: ['A', 'C', 'E'], description: 'A hearty salad with quinoa, black beans, corn, and a zesty lime vinaigrette.', dietType: 'vegan', goal: 'maintain weight', allergens: ['gluten'] },
  { id: 8, name: 'Beef Stir Fry', calories: 600, vitamins: ['A', 'C', 'B12'], description: 'Stir-fried beef with bell peppers, onions, and a savory soy sauce glaze, served over jasmine rice.', dietType: 'non-vegetarian', goal: 'gain muscle', allergens: ['soy'] },
  { id: 9, name: 'Vegan Tacos', calories: 400, vitamins: ['A', 'C', 'K'], description: 'Corn tortillas filled with seasoned black beans, lettuce, avocado, and salsa.', dietType: 'vegan', goal: 'lose weight', allergens: ['gluten'] },
  { id: 10, name: 'Chicken Caesar Salad', calories: 500, vitamins: ['A', 'C', 'E'], description: 'Grilled chicken breast on a bed of romaine lettuce, with Caesar dressing, croutons, and parmesan.', dietType: 'non-vegetarian', goal: 'maintain weight', allergens: ['gluten', 'dairy'] },
  { id: 11, name: 'Lentil Soup', calories: 250, vitamins: ['A', 'C', 'K'], description: 'A comforting, protein-packed soup made with lentils, carrots, tomatoes, and spices.', dietType: 'vegan', goal: 'lose weight', allergens: [] },
  { id: 12, name: 'Shrimp & Avocado Salad', calories: 350, vitamins: ['A', 'C', 'D'], description: 'A refreshing salad with shrimp, avocado, cucumber, and a tangy lemon vinaigrette.', dietType: 'non-vegetarian', goal: 'maintain weight', allergens: ['shellfish'] },
  { id: 13, name: 'Vegetarian Chili', calories: 450, vitamins: ['A', 'C', 'K'], description: 'A hearty chili made with beans, tomatoes, and a variety of spices. A perfect vegan comfort food.', dietType: 'vegetarian', goal: 'lose weight', allergens: [] },
  { id: 14, name: 'Tofu Stir Fry', calories: 350, vitamins: ['A', 'C', 'K'], description: 'A vegan stir fry with tofu, bell peppers, snap peas, and a soy-ginger sauce, served over rice.', dietType: 'vegan', goal: 'maintain weight', allergens: ['soy'] },
  { id: 15, name: 'Grilled Steak with Asparagus', calories: 600, vitamins: ['B12', 'A', 'C'], description: 'Juicy grilled steak served with a side of roasted asparagus and garlic butter.', dietType: 'non-vegetarian', goal: 'gain muscle', allergens: [] }
];


    // Filtering meals based on user inputs
    const filteredMeals = allMeals.filter(meal => {
      // Dietary restrictions
      if (dietaryRestrictions.length && !dietaryRestrictions.includes(meal.dietType)) return false;

      // Goal-based meal selection
      if (goal && meal.goal !== goal) return false;

      // Vitamin deficiency (example logic, you can adjust this further)
      if (vitaminDeficiency && !meal.vitamins.includes(vitaminDeficiency)) return false;

      return true
    })

    setMeals(filteredMeals)
    setLoading(false)
  }

  const addToMealHistory = (meal: Meal) => {
    // Implement add to meal history functionality
    console.log('Added to meal history:', meal)
    alert(`${meal.name} added to meal history!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">AI-Powered Meal Suggestions</h1>

      {/* User Inputs for meal suggestion */}
      <div className="grid gap-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-1/3">
            <label>Dietary Restrictions</label>
            <select multiple value={dietaryRestrictions} onChange={e => setDietaryRestrictions([...e.target.selectedOptions].map(option => option.value))} className="w-full border rounded-md">
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label>Goal</label>
            <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full border rounded-md">
              <option value="lose weight">Lose Weight</option>
              <option value="gain muscle">Gain Muscle</option>
              <option value="maintain weight">Maintain Weight</option>
            </select>
          </div>
        </div>

        {/* Other input fields like age, weight, etc., can go here */}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <Card key={meal.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle>{meal.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-2">{meal.description}</p>
                <p className="font-semibold">Calories: {meal.calories}</p>
                <p className="mb-4">Vitamins: {meal.vitamins.join(', ')}</p>
                <Button
                  onClick={() => addToMealHistory(meal)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Add to Meal History
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

