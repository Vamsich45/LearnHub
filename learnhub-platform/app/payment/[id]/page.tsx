"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, CreditCard, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PaymentPage({ params }: { params: { id: string } }) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  // Mock course data - in real app, fetch based on params.id
  const course = {
    id: params.id,
    title: "Advanced React & Next.js",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    price: "₹4,999",
    originalPrice: "₹6,999",
    duration: "8 weeks",
    lessons: 32,
    description: "Master React and Next.js to build scalable web applications with modern best practices.",
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to course content after successful payment
      router.push(`/course/${params.id}`)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="border-b bg-white dark:bg-black dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <ArrowLeft className="h-6 w-6 text-gray-600 dark:text-white" />
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-xl font-bold text-blue-600">Learn</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Hub</span>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600 dark:text-white">Secure Payment</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Course Details */}
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Course Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium dark:text-white">Duration:</span>
                      <p className="text-gray-600 dark:text-gray-300">{course.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">Lessons:</span>
                      <p className="text-gray-600 dark:text-gray-300">{course.lessons} lessons</p>
                    </div>
                  </div>

                  <Separator className="dark:border-gray-600" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="dark:text-white">Course Price:</span>
                      <span className="line-through text-gray-500">{course.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-white">Discount:</span>
                      <span className="text-green-600">-₹2,000</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="dark:text-white">Total:</span>
                      <span className="text-purple-600">{course.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Payment Information</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Complete your purchase to access the course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <Label className="dark:text-white">Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger className="dark:bg-black dark:border-gray-600 dark:text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-black dark:border-gray-600">
                      <SelectItem value="card" className="dark:text-white">
                        Credit/Debit Card
                      </SelectItem>
                      <SelectItem value="upi" className="dark:text-white">
                        UPI
                      </SelectItem>
                      <SelectItem value="netbanking" className="dark:text-white">
                        Net Banking
                      </SelectItem>
                      <SelectItem value="wallet" className="dark:text-white">
                        Digital Wallet
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="dark:text-white">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="dark:text-white">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="dark:bg-black dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="dark:text-white">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="dark:bg-black dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="dark:text-white">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* UPI Payment */}
                {paymentMethod === "upi" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="upiId" className="dark:text-white">
                        UPI ID
                      </Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@paytm"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Net Banking */}
                {paymentMethod === "netbanking" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="dark:text-white">Select Bank</Label>
                      <Select>
                        <SelectTrigger className="dark:bg-black dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Choose your bank" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-black dark:border-gray-600">
                          <SelectItem value="sbi" className="dark:text-white">
                            State Bank of India
                          </SelectItem>
                          <SelectItem value="hdfc" className="dark:text-white">
                            HDFC Bank
                          </SelectItem>
                          <SelectItem value="icici" className="dark:text-white">
                            ICICI Bank
                          </SelectItem>
                          <SelectItem value="axis" className="dark:text-white">
                            Axis Bank
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Digital Wallet */}
                {paymentMethod === "wallet" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="dark:text-white">Select Wallet</Label>
                      <Select>
                        <SelectTrigger className="dark:bg-black dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Choose your wallet" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-black dark:border-gray-600">
                          <SelectItem value="paytm" className="dark:text-white">
                            Paytm
                          </SelectItem>
                          <SelectItem value="phonepe" className="dark:text-white">
                            PhonePe
                          </SelectItem>
                          <SelectItem value="gpay" className="dark:text-white">
                            Google Pay
                          </SelectItem>
                          <SelectItem value="mobikwik" className="dark:text-white">
                            MobiKwik
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <Separator className="dark:border-gray-600" />

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="font-medium dark:text-white">Billing Address</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="dark:text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="dark:text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="dark:text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="dark:bg-black dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="dark:text-white">
                      Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="dark:bg-black dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="dark:text-white">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="Mumbai"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="dark:text-white">
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        placeholder="400001"
                        className="dark:bg-black dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  size="lg"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {isProcessing ? "Processing Payment..." : `Pay ${course.price}`}
                </Button>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
