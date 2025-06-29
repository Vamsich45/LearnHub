"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Star, CheckCircle, Globe, Smartphone, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [showAllCourses, setShowAllCourses] = useState(false)

  const allFeaturedCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      rating: 4.8,
      students: 1234,
      duration: "12 weeks",
      level: "Beginner",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      category: "Programming",
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
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      category: "Programming",
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing",
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
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop",
      category: "Data Science",
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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      category: "Design",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Business",
    },
    {
      id: 7,
      title: "Mobile App Development",
      instructor: "Lisa Park",
      rating: 4.6,
      students: 980,
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
      category: "Mobile Development",
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      instructor: "Dr. Kevin Zhang",
      rating: 4.8,
      students: 756,
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹7,499",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
      category: "Cybersecurity",
    },
    {
      id: 9,
      title: "Cloud Computing with AWS",
      instructor: "James Wilson",
      rating: 4.7,
      students: 1345,
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      category: "Cloud Computing",
    },
  ]

  const displayedCourses = showAllCourses ? allFeaturedCourses : allFeaturedCourses.slice(0, 3)

  const categories = [
    { name: "Programming", count: 45, icon: "💻" },
    { name: "Design", count: 32, icon: "🎨" },
    { name: "Marketing", count: 28, icon: "📈" },
    { name: "Business", count: 41, icon: "💼" },
    { name: "Data Science", count: 23, icon: "📊" },
    { name: "Photography", count: 19, icon: "📸" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-black">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:bg-black/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-blue-600">Learn</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Hub</span>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Your Learning Partner</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/courses"
                className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                Courses
              </Link>
              <button
                onClick={() => scrollToSection("about-section")}
                className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact-section")}
                className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                >
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

      {/* Hero Section */}
      <section
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat dark:bg-black"
        style={{
          backgroundImage: "url('/images/young.avif')",
        }}
      >
        {/* Add overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Center for
            <span className="text-blue-400 block">Skill Enhancement</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Unlock your potential with our comprehensive online learning platform. Learn at your own pace, earn
            certificates, and advance your career with expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Start Learning Today
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8 py-3"
            >
              Browse Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-white/80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-white/80">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Why Choose LearnHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Our platform offers everything you need for a comprehensive learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Learn Anywhere</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Access courses on any device - computer, tablet, or smartphone. Learn from anywhere with an internet
                  connection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Self-Paced Learning</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Learn at your own pace with flexible scheduling. Our platform remembers your progress and lets you
                  continue where you left off.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Earn Certificates</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Receive digital certificates upon course completion. Add them to your portfolio and showcase your new
                  skills.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Interactive Learning</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Engage with instructors and fellow learners through discussion forums, live webinars, and
                  collaborative projects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Expert Instructors</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Learn from industry professionals and experienced educators who bring real-world knowledge to every
                  course.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="dark:text-white">Mobile Optimized</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Seamless experience across all devices with our responsive design and mobile-friendly interface.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Explore Categories</h2>
            <p className="text-gray-600 dark:text-white">Discover courses across various fields and industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href="/login">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer dark:bg-black dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-white">{category.count} courses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Featured Courses</h2>
              <p className="text-gray-600 dark:text-gray-300">Popular courses chosen by our learning community</p>
            </div>
            <Link href="/courses">
              <Button
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                View All Courses
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
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
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">{course.title}</h3>
                  <p className="text-gray-600 mb-3 dark:text-gray-300">by {course.instructor}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
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
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">About LearnHub</h2>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
              Your trusted partner in skill enhancement and professional development
            </p>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 mb-6 dark:text-gray-300">
                  At LearnHub, we believe that education should be accessible, engaging, and transformative. Our mission
                  is to democratize learning by providing high-quality courses that empower individuals to achieve their
                  personal and professional goals.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">What We Offer</h3>
                <ul className="text-gray-600 space-y-2 dark:text-gray-300">
                  <li>• Over 500+ courses across multiple disciplines</li>
                  <li>• Expert instructors from industry and academia</li>
                  <li>• Flexible learning schedules that fit your lifestyle</li>
                  <li>• Interactive content and hands-on projects</li>
                  <li>• Certificates to showcase your achievements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Why Choose Us</h3>
                <p className="text-gray-600 mb-6 dark:text-gray-300">
                  With over 10,000 satisfied learners and a 95% success rate, LearnHub has established itself as a
                  leading online learning platform. We combine cutting-edge technology with proven educational
                  methodologies to deliver an exceptional learning experience.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Our Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a vibrant community of learners, instructors, and industry professionals. Engage in discussions,
                  collaborate on projects, and build lasting connections that extend beyond the classroom. At LearnHub,
                  learning is not just individual—it's collaborative.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Our Commitment</h3>
              <p className="text-gray-600 text-lg dark:text-gray-300">
                We are committed to continuously improving our platform, expanding our course offerings, and supporting
                our learners every step of the way. Your success is our success, and we're here to help you unlock your
                full potential through the power of learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of learners who have already transformed their careers with LearnHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Started Free
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact-section" className="bg-gray-900 text-white py-12 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-xl font-bold text-blue-400">Learn</span>
                  <span className="text-xl font-bold text-white">Hub</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Your center for skill enhancement and professional development.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Browse Courses
                  </Link>
                </li>
                <li>
                  <Link href="/instructors" className="hover:text-white transition-colors">
                    Become Instructor
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about-section")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
