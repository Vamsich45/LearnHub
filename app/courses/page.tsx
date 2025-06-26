"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Users, Star, Clock, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      rating: 4.8,
      students: 1234,
      duration: "12 weeks",
      level: "Beginner",
      price: "₹2,999",
      originalPrice: "₹4,999",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Programming",
      description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    },
    {
      id: 2,
      title: "Advanced React & Next.js",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 856,
      duration: "8 weeks",
      level: "Advanced",
      price: "₹4,999",
      originalPrice: "₹6,999",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      category: "Programming",
      description: "Master React and Next.js to build scalable web applications.",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Mike Chen",
      rating: 4.7,
      students: 2103,
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹2,499",
      originalPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Complete guide to digital marketing strategies and tools.",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Emily Davis",
      rating: 4.8,
      students: 1567,
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹3,999",
      originalPrice: "₹5,999",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop",
      category: "Data Science",
      description: "Learn Python programming for data analysis and machine learning.",
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      instructor: "Alex Rodriguez",
      rating: 4.6,
      students: 892,
      duration: "6 weeks",
      level: "Beginner",
      price: "₹2,299",
      originalPrice: "₹3,499",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      description: "Master the fundamentals of user interface and user experience design.",
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "Jennifer Wilson",
      rating: 4.7,
      students: 1345,
      duration: "8 weeks",
      level: "Advanced",
      price: "₹3,499",
      originalPrice: "₹4,999",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Business",
      description: "Develop strategic thinking and leadership skills for business success.",
    },
  ]

  const categories = ["all", "Programming", "Design", "Marketing", "Business", "Data Science"]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">LearnHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/courses" className="text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
          <p className="text-gray-600 text-lg">Discover your next skill with our comprehensive course catalog</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
          <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">{course.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">by {course.instructor}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">View Course</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  )
}
