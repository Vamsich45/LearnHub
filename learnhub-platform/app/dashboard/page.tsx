"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, CheckCircle, Award, TrendingUp, Bell, LogOut } from "lucide-react"
import { getEmailFromStorage, clearEmailFromStorage, getProfileNameFromEmail } from "@/lib/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [userEmail, setUserEmail] = useState<string>("")
  const [profileName, setProfileName] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const email = getEmailFromStorage()
    if (email) {
      setUserEmail(email)
      setProfileName(getProfileNameFromEmail(email))
    }
  }, [])

  const handleLogout = () => {
    clearEmailFromStorage()
    router.push("/")
  }

  // 15 Free Courses
  const freeCourses = [
    {
      id: 1,
      title: "Introduction to Programming",
      instructor: "John Smith",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Programming",
      price: "Free",
      type: "free",
    },
    {
      id: 2,
      title: "HTML & CSS Basics",
      instructor: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Web Development",
      price: "Free",
      type: "free",
    },
    {
      id: 3,
      title: "Digital Marketing Basics",
      instructor: "Mike Chen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
      price: "Free",
      type: "free",
    },
    {
      id: 4,
      title: "Graphic Design Fundamentals",
      instructor: "Sarah Davis",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      price: "Free",
      type: "free",
    },
    {
      id: 5,
      title: "Business Communication",
      instructor: "Robert Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Business",
      price: "Free",
      type: "free",
    },
    {
      id: 6,
      title: "Photography Basics",
      instructor: "Lisa Anderson",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      category: "Photography",
      price: "Free",
      type: "free",
    },
    {
      id: 7,
      title: "Excel for Beginners",
      instructor: "David Brown",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Productivity",
      price: "Free",
      type: "free",
    },
    {
      id: 8,
      title: "Time Management Skills",
      instructor: "Jennifer Lee",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      category: "Personal Development",
      price: "Free",
      type: "free",
    },
    {
      id: 9,
      title: "Introduction to AI",
      instructor: "Dr. Alex Kumar",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      category: "Technology",
      price: "Free",
      type: "free",
    },
    {
      id: 10,
      title: "Public Speaking Fundamentals",
      instructor: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
      category: "Communication",
      price: "Free",
      type: "free",
    },
    {
      id: 11,
      title: "Social Media Marketing",
      instructor: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      category: "Marketing",
      price: "Free",
      type: "free",
    },
    {
      id: 12,
      title: "Basic Finance",
      instructor: "Rachel Green",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      category: "Finance",
      price: "Free",
      type: "free",
    },
    {
      id: 13,
      title: "Creative Writing",
      instructor: "James Miller",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop",
      category: "Writing",
      price: "Free",
      type: "free",
    },
    {
      id: 14,
      title: "Basic Mathematics",
      instructor: "Dr. Susan Lee",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
      category: "Mathematics",
      price: "Free",
      type: "free",
    },
    {
      id: 15,
      title: "Mindfulness & Meditation",
      instructor: "Maya Patel",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      category: "Wellness",
      price: "Free",
      type: "free",
    },
  ]

  // 10 Paid Courses
  const paidCourses = [
    {
      id: 16,
      title: "Advanced React & Next.js",
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      category: "Programming",
      price: "₹4,999",
      type: "paid",
    },
    {
      id: 17,
      title: "Full Stack Web Development",
      instructor: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Programming",
      price: "₹7,999",
      type: "paid",
    },
    {
      id: 18,
      title: "Data Science with Python",
      instructor: "Dr. Emily Davis",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop",
      category: "Data Science",
      price: "₹6,499",
      type: "paid",
    },
    {
      id: 19,
      title: "Advanced Digital Marketing",
      instructor: "Mike Chen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
      price: "₹5,499",
      type: "paid",
    },
    {
      id: 20,
      title: "UI/UX Design Mastery",
      instructor: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      price: "₹4,499",
      type: "paid",
    },
    {
      id: 21,
      title: "Cloud Computing with AWS",
      instructor: "James Wilson",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      category: "Cloud Computing",
      price: "₹8,999",
      type: "paid",
    },
    {
      id: 22,
      title: "Mobile App Development",
      instructor: "Lisa Park",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
      category: "Mobile Development",
      price: "₹6,999",
      type: "paid",
    },
    {
      id: 23,
      title: "Cybersecurity Fundamentals",
      instructor: "Dr. Kevin Zhang",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
      category: "Cybersecurity",
      price: "₹7,499",
      type: "paid",
    },
    {
      id: 24,
      title: "Advanced Excel & Analytics",
      instructor: "Rachel Thompson",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Analytics",
      price: "₹3,999",
      type: "paid",
    },
    {
      id: 25,
      title: "Project Management Professional",
      instructor: "Daniel Kumar",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      category: "Management",
      price: "₹5,999",
      type: "paid",
    },
  ]

  const allCourses = [...freeCourses, ...paidCourses]

  const handleEnroll = (course: any) => {
    if (course.type === "free") {
      router.push(`/course/${course.id}`)
    } else {
      router.push(`/payment/${course.id}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 dark:bg-black dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-blue-600">Learn</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Hub</span>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-[#121212] dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {profileName}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{profileName}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-[#121212] dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">Welcome back, {profileName}! 👋</h1>
          <p className="text-gray-600 dark:text-gray-300">Continue your learning journey and track your progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="dark:bg-black dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Courses</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{allCourses.length}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-black dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Free Courses</p>
                  <p className="text-2xl font-bold text-green-600">{freeCourses.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-black dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Paid Courses</p>
                  <p className="text-2xl font-bold text-purple-600">{paidCourses.length}</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-black dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Study Streak</p>
                  <p className="text-2xl font-bold text-orange-600">12 days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 dark:bg-black">
            <TabsTrigger value="overview" className="dark:data-[state=active]:bg-gray-700 dark:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="courses" className="dark:data-[state=active]:bg-gray-700 dark:text-white">
              My Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* All Courses Overview */}
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Available Courses</CardTitle>
                <CardDescription className="dark:text-gray-300">Explore our course catalog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allCourses.slice(0, 6).map((course) => (
                    <Card key={course.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-600">
                      <div className="relative">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge
                          className={`absolute top-2 right-2 ${course.type === "free" ? "bg-green-600" : "bg-purple-600"}`}
                        >
                          {course.type === "free" ? "FREE" : "PREMIUM"}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 dark:text-white">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 dark:text-gray-300">by {course.instructor}</p>
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-lg font-bold ${course.type === "free" ? "text-green-600" : "text-purple-600"}`}
                          >
                            {course.price}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => handleEnroll(course)}
                            className={
                              course.type === "free"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-purple-600 hover:bg-purple-700"
                            }
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            {/* Free Courses Section */}
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Free Courses ({freeCourses.length})</CardTitle>
                <CardDescription className="dark:text-gray-300">Courses available at no cost</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {freeCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-600">
                      <div className="relative">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-green-600">FREE</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 dark:text-white">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 dark:text-gray-300">by {course.instructor}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-600">{course.price}</span>
                          <Button
                            size="sm"
                            onClick={() => handleEnroll(course)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Paid Courses Section */}
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Paid Courses ({paidCourses.length})</CardTitle>
                <CardDescription className="dark:text-gray-300">Premium courses with advanced content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paidCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-600">
                      <div className="relative">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-purple-600">PREMIUM</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 dark:text-white">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 dark:text-gray-300">by {course.instructor}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-purple-600">{course.price}</span>
                          <Button
                            size="sm"
                            onClick={() => handleEnroll(course)}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            Enroll
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
