'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function InputPreferences() {
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([])
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [goal, setGoal] = useState('')
  const [mood, setMood] = useState('')
  const [pastMeals, setPastMeals] = useState('')
  const [vitaminDeficiency, setVitaminDeficiency] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Log the data
    console.log('Preferences:', { dietaryRestrictions, age, gender, weight, height, activityLevel, goal, mood, pastMeals, vitaminDeficiency })
    router.push('/meal-suggestions')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Personalize Your Meal Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dietary Restrictions */}
            <div>
              <Label className="text-lg font-semibold">Dietary Restrictions</Label>
              <Select
                value={dietaryRestrictions}
                onValueChange={(value) => setDietaryRestrictions(value)}
                multiple
              >
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select your dietary restrictions" />
                </SelectTrigger>
                <SelectContent>
                  {['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Nut-free'].map((restriction) => (
                    <SelectItem key={restriction} value={restriction}>
                      {restriction}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Age */}
            <div>
              <Label htmlFor="age" className="text-lg font-semibold">Age</Label>
              <Input
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="mt-1"
              />
            </div>

            {/* Gender */}
            <div>
              <Label htmlFor="gender" className="text-lg font-semibold">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Weight (kg) */}
            <div>
              <Label htmlFor="weight" className="text-lg font-semibold">Weight (kg)</Label>
              <Input
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="mt-1"
              />
            </div>

            {/* Height (cm) */}
            <div>
              <Label htmlFor="height" className="text-lg font-semibold">Height (cm)</Label>
              <Input
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="mt-1"
              />
            </div>

            {/* Activity Level */}
            <div>
              <Label htmlFor="activityLevel" className="text-lg font-semibold">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedentary">Sedentary</SelectItem>
                  <SelectItem value="Lightly active">Lightly active</SelectItem>
                  <SelectItem value="Moderately active">Moderately active</SelectItem>
                  <SelectItem value="Very active">Very active</SelectItem>
                  <SelectItem value="Super active">Super active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Health Goal */}
            <div>
              <Label htmlFor="goal" className="text-lg font-semibold">Goal</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Weight loss">Weight loss</SelectItem>
                  <SelectItem value="Weight gain">Weight gain</SelectItem>
                  <SelectItem value="Maintain weight">Maintain weight</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mood */}
            <div>
              <Label htmlFor="mood" className="text-lg font-semibold">Current Mood</Label>
              <Input
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="E.g., Stressed, Happy, Tired"
                className="mt-1"
              />
            </div>

            {/* Recent Meals */}
            <div>
              <Label htmlFor="pastMeals" className="text-lg font-semibold">Recent Meals</Label>
              <Input
                id="pastMeals"
                value={pastMeals}
                onChange={(e) => setPastMeals(e.target.value)}
                placeholder="E.g., Grilled chicken, Salad, Pasta"
                className="mt-1"
              />
            </div>

            {/* Vitamin Deficiency */}
            <div>
              <Label htmlFor="vitaminDeficiency" className="text-lg font-semibold">Vitamin Deficiency</Label>
              <Select value={vitaminDeficiency} onValueChange={setVitaminDeficiency}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select vitamin deficiency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Vitamin A">Vitamin A</SelectItem>
                  <SelectItem value="Vitamin B12">Vitamin B12</SelectItem>
                  <SelectItem value="Vitamin D">Vitamin D</SelectItem>
                  <SelectItem value="Vitamin C">Vitamin C</SelectItem>
                  <SelectItem value="Iron">Iron</SelectItem>
                  <SelectItem value="Calcium">Calcium</SelectItem>
                  <SelectItem value="None">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Get AI-Powered Meal Suggestions
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

