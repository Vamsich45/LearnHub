"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Star, Clock, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

export default function AllCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const freeCourses = [
    {
      id: 1,
      title: "Introduction to Programming",
      instructor: "John Smith",
      rating: 4.5,
      students: 2500,
      duration: "6 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Programming",
      description: "Learn the fundamentals of programming with hands-on exercises.",
    },
    {
      id: 2,
      title: "HTML & CSS Basics",
      instructor: "Emma Wilson",
      rating: 4.6,
      students: 3200,
      duration: "4 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Web Development",
      description: "Master the building blocks of web development.",
    },
    {
      id: 3,
      title: "Digital Marketing Basics",
      instructor: "Mike Chen",
      rating: 4.4,
      students: 1800,
      duration: "5 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Introduction to digital marketing strategies and tools.",
    },
    {
      id: 4,
      title: "Graphic Design Fundamentals",
      instructor: "Sarah Davis",
      rating: 4.3,
      students: 1500,
      duration: "4 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      description: "Learn the basics of graphic design and visual communication.",
    },
    {
      id: 5,
      title: "Business Communication",
      instructor: "Robert Johnson",
      rating: 4.5,
      students: 2100,
      duration: "3 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Business",
      description: "Improve your professional communication skills.",
    },
    {
      id: 6,
      title: "Photography Basics",
      instructor: "Lisa Anderson",
      rating: 4.4,
      students: 1200,
      duration: "5 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Learn the fundamentals of photography and composition.",
    },
    {
      id: 7,
      title: "Excel for Beginners",
      instructor: "David Brown",
      rating: 4.6,
      students: 2800,
      duration: "4 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Productivity",
      description: "Master Excel basics for data management and analysis.",
    },
    {
      id: 8,
      title: "Time Management Skills",
      instructor: "Jennifer Lee",
      rating: 4.7,
      students: 1900,
      duration: "2 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      category: "Personal Development",
      description: "Learn effective time management techniques.",
    },
    {
      id: 9,
      title: "Introduction to AI",
      instructor: "Dr. Alex Kumar",
      rating: 4.5,
      students: 1600,
      duration: "6 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      category: "Technology",
      description: "Understand the basics of artificial intelligence.",
    },
    {
      id: 10,
      title: "Public Speaking Fundamentals",
      instructor: "Maria Garcia",
      rating: 4.4,
      students: 1400,
      duration: "3 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
      category: "Communication",
      description: "Build confidence in public speaking and presentations.",
    },
  ]

  const paidCourses = [
    {
      id: 11,
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
      id: 12,
      title: "Full Stack Web Development",
      instructor: "Michael Rodriguez",
      rating: 4.8,
      students: 1200,
      duration: "16 weeks",
      level: "Intermediate",
      price: "₹7,999",
      originalPrice: "₹9,999",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Programming",
      description: "Complete full-stack development course from frontend to backend.",
    },
    {
      id: 13,
      title: "Data Science with Python",
      instructor: "Dr. Emily Davis",
      rating: 4.8,
      students: 1567,
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹6,499",
      originalPrice: "₹8,999",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop",
      category: "Data Science",
      description: "Learn Python programming for data analysis and machine learning.",
    },
    {
      id: 14,
      title: "Advanced Digital Marketing",
      instructor: "Mike Chen",
      rating: 4.7,
      students: 2103,
      duration: "10 weeks",
      level: "Advanced",
      price: "₹5,499",
      originalPrice: "₹7,499",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Advanced digital marketing strategies and campaign optimization.",
    },
    {
      id: 15,
      title: "UI/UX Design Mastery",
      instructor: "Alex Rodriguez",
      rating: 4.6,
      students: 892,
      duration: "12 weeks",
      level: "Advanced",
      price: "₹4,499",
      originalPrice: "₹6,499",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
      description: "Master advanced UI/UX design principles and tools.",
    },
    {
      id: 16,
      title: "Cloud Computing with AWS",
      instructor: "James Wilson",
      rating: 4.7,
      students: 1345,
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹8,999",
      originalPrice: "₹11,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      category: "Cloud Computing",
      description: "Learn AWS cloud services and architecture patterns.",
    },
    {
      id: 17,
      title: "Mobile App Development",
      instructor: "Lisa Park",
      rating: 4.6,
      students: 980,
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹6,999",
      originalPrice: "₹8,999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
      category: "Mobile Development",
      description: "Build cross-platform mobile apps with React Native.",
    },
    {
      id: 18,
      title: "Cybersecurity Fundamentals",
      instructor: "Dr. Kevin Zhang",
      rating: 4.8,
      students: 756,
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹7,499",
      originalPrice: "₹9,499",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
      category: "Cybersecurity",
      description: "Learn cybersecurity principles and ethical hacking.",
    },
    {
      id: 19,
      title: "Advanced Excel & Analytics",
      instructor: "Rachel Thompson",
      rating: 4.5,
      students: 1234,
      duration: "8 weeks",
      level: "Advanced",
      price: "₹3,999",
      originalPrice: "₹5,499",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Analytics",
      description: "Master advanced Excel features and data analytics.",
    },
    {
      id: 20,
      title: "Project Management Professional",
      instructor: "Daniel Kumar",
      rating: 4.7,
      students: 1456,
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹5,999",
      originalPrice: "₹7,999",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      category: "Management",
      description: "Prepare for PMP certification and master project management.",
    },
    {
      id: 21,
      title: "Blockchain Development",
      instructor: "Chris Anderson",
      rating: 4.6,
      students: 567,
      duration: "16 weeks",
      level: "Advanced",
      price: "₹9,999",
      originalPrice: "₹12,999",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      category: "Blockchain",
      description: "Learn blockchain development and smart contracts.",
    },
    {
      id: 22,
      title: "Advanced Photography",
      instructor: "Sophie Martin",
      rating: 4.5,
      students: 678,
      duration: "8 weeks",
      level: "Advanced",
      price: "₹4,299",
      originalPrice: "₹5,999",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Master advanced photography techniques and post-processing.",
    },
    {
      id: 23,
      title: "Financial Analysis & Modeling",
      instructor: "Robert Chen",
      rating: 4.7,
      students: 890,
      duration: "10 weeks",
      level: "Advanced",
      price: "₹6,299",
      originalPrice: "₹8,299",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      category: "Finance",
      description: "Learn financial modeling and investment analysis.",
    },
    {
      id: 24,
      title: "Content Creation & Video Editing",
      instructor: "Maya Patel",
      rating: 4.4,
      students: 1123,
      duration: "6 weeks",
      level: "Intermediate",
      price: "₹3,799",
      originalPrice: "₹4,999",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop",
      category: "Content Creation",
      description: "Create engaging content and master video editing.",
    },
    {
      id: 25,
      title: "Advanced Business Strategy",
      instructor: "Jennifer Wilson",
      rating: 4.8,
      students: 1345,
      duration: "12 weeks",
      level: "Advanced",
      price: "₹8,499",
      originalPrice: "₹10,999",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Business",
      description: "Develop strategic thinking and leadership skills for business success.",
    },
  ]

  const allCourses = [...freeCourses, ...paidCourses]

  const getCurrentCourses = () => {
    switch (activeTab) {
      case "free":
        return freeCourses
      case "paid":
        return paidCourses
      default:
        return allCourses
    }
  }

  const categories = [
    "all",
    "Programming",
    "Design",
    "Marketing",
    "Business",
    "Data Science",
    "Web Development",
    "Photography",
    "Productivity",
    "Personal Development",
    "Technology",
    "Communication",
    "Cloud Computing",
    "Mobile Development",
    "Cybersecurity",
    "Analytics",
    "Management",
    "Blockchain",
    "Finance",
    "Content Creation",
  ]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = getCurrentCourses().filter((course) => {
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

        {/* Course Type Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="all">All Courses ({allCourses.length})</TabsTrigger>
            <TabsTrigger value="free">Free ({freeCourses.length})</TabsTrigger>
            <TabsTrigger value="paid">Paid ({paidCourses.length})</TabsTrigger>
          </TabsList>
        </Tabs>

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

            <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Showing {filteredCourses.length} courses</p>
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
                  <Badge className={course.price === "Free" ? "bg-green-600" : "bg-blue-600"}>
                    {course.price === "Free" ? "FREE" : "PAID"}
                  </Badge>
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
                    <span
                      className={`text-2xl font-bold ${course.price === "Free" ? "text-green-600" : "text-blue-600"}`}
                    >
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                    )}
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button
                      className={
                        course.price === "Free" ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                      }
                    >
                      {course.price === "Free" ? "Enroll Free" : "View Course"}
                    </Button>
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
