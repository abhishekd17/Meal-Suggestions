'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

interface FoodItem {
  id: number
  name: string
  calories: number
  nutrients: string
  price: number
}

export default function FoodCart() {
  const [cartItems, setCartItems] = useState<FoodItem[]>([])
  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [totalAmount, setTotalAmount] = useState(0)
  const [deliveryCharge] = useState(1) // Delivery charge for Cash on Delivery
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  // Mock data for cart items
  useEffect(() => {
    const mockCartItems: FoodItem[] = [
      { id: 1, name: 'Grilled Chicken Salad', calories: 350, nutrients: 'Protein, Vitamin C', price: 10 },
      { id: 2, name: 'Vegetarian Stir Fry', calories: 300, nutrients: 'Fiber, Iron', price: 8 },
      { id: 3, name: 'Salmon with Roasted Vegetables', calories: 400, nutrients: 'Omega-3, Vitamin D', price: 12 },
    ]
    setCartItems(mockCartItems)
  }, [])

  // Calculate total amount (food cost + delivery charge if Cash on Delivery)
  const calculateTotalAmount = () => {
    const totalFoodCost = cartItems.reduce((sum, item) => sum + item.price, 0)
    let total = totalFoodCost
    if (paymentMethod === 'Cash on Delivery') {
      total += deliveryCharge
    }
    setTotalAmount(total)
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method)
    calculateTotalAmount() // Recalculate the total when payment method changes
  }

  const handleSubmitOrder = () => {
    if (address && paymentMethod) {
      setIsOrderComplete(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Food Cart</h1>
      
      {/* Show cart items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your food cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Calories: {item.calories}</p>
                <p>Nutrients: {item.nutrients}</p>
                <p>Price: ${item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Step 1: Address Input */}
      {!isOrderComplete && cartItems.length > 0 && (
        <div>
          <Label htmlFor="address" className="text-lg font-semibold">Delivery Address</Label>
          <Input
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your full delivery address"
            className="mt-1"
          />
          <Button
            onClick={() => {
              if (address) {
                // Proceed to payment method selection
                calculateTotalAmount()
              } else {
                alert('Please enter your delivery address.')
              }
            }}
            className="mt-4 bg-blue-500 text-white w-full"
          >
            Next: Select Payment Method
          </Button>
        </div>
      )}

      {/* Step 2: Payment Method Selection */}
      {address && !isOrderComplete && cartItems.length > 0 && (
        <div className="mt-8">
          <Label className="text-lg font-semibold">Payment Method</Label>
          <Select value={paymentMethod} onValueChange={handlePaymentMethodChange}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
              <SelectItem value="QR Code">QR Code</SelectItem>
              <SelectItem value="Cash on Delivery">Cash on Delivery</SelectItem>
            </SelectContent>
          </Select>

          {paymentMethod && (
            <div className="mt-6">
              <p>Total Amount: ${totalAmount}</p>
              {paymentMethod === 'Cash on Delivery' && (
                <p className="text-red-500">A $1 delivery charge will be added for Cash on Delivery.</p>
              )}

              <Button onClick={handleSubmitOrder} className="mt-4 bg-green-500 text-white w-full">
                Confirm and Proceed to Payment
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Display Payment Options Details */}
      {isOrderComplete && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>
          <p>Your order has been confirmed with the following details:</p>
          <p>Address: {address}</p>
          <p>Payment Method: {paymentMethod}</p>
          <p>Total Amount: ${totalAmount}</p>

          {paymentMethod === 'Bank Transfer' && (
            <div>
              <h3 className="mt-4">Bank Details:</h3>
              <p>Account Number: 123-456-789</p>
              <p>Bank Name: ABC Bank</p>
            </div>
          )}

          {paymentMethod === 'QR Code' && (
            <div>
              <h3 className="mt-4">Scan QR Code to Pay:</h3>
              {/* Display your QR code here */}
              <img src="path_to_your_qr_code_image" alt="QR Code" className="mt-4" />
            </div>
          )}

          {paymentMethod === 'Cash on Delivery' && (
            <div>
              <h3 className="mt-4">Cash on Delivery</h3>
              <p>Pay $1 extra as delivery charge when the order arrives.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

