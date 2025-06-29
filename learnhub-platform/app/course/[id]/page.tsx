"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  GraduationCap,
  Play,
  CheckCircle,
  Clock,
  Users,
  Star,
  Download,
  ArrowLeft,
  PlayCircle,
  FileText,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function CoursePage({ params }: { params: { id: string } }) {
  const [activeLesson, setActiveLesson] = useState(1)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  // Mock course data - in real app, fetch based on params.id
  const course = {
    id: params.id,
    title: "Introduction to Programming",
    instructor: "John Smith",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    rating: 4.8,
    students: 2500,
    duration: "6 weeks",
    lessons: 24,
    description: "Learn the fundamentals of programming with hands-on exercises and real-world projects.",
    price: "Free",
    type: "free",
    modules: [
      {
        id: 1,
        title: "Getting Started",
        lessons: [
          { id: 1, title: "Introduction to Programming", duration: "10:30", type: "video" },
          { id: 2, title: "Setting Up Your Environment", duration: "15:45", type: "video" },
          { id: 3, title: "Your First Program", duration: "12:20", type: "video" },
          { id: 4, title: "Quiz: Basic Concepts", duration: "5:00", type: "quiz" },
        ],
      },
      {
        id: 2,
        title: "Variables and Data Types",
        lessons: [
          { id: 5, title: "Understanding Variables", duration: "18:30", type: "video" },
          { id: 6, title: "Data Types Explained", duration: "22:15", type: "video" },
          { id: 7, title: "Working with Numbers", duration: "16:40", type: "video" },
          { id: 8, title: "Strings and Text", duration: "14:25", type: "video" },
          { id: 9, title: "Practice Exercise", duration: "30:00", type: "exercise" },
        ],
      },
      {
        id: 3,
        title: "Control Structures",
        lessons: [
          { id: 10, title: "If Statements", duration: "20:10", type: "video" },
          { id: 11, title: "Loops and Iteration", duration: "25:30", type: "video" },
          { id: 12, title: "Switch Statements", duration: "12:45", type: "video" },
          { id: 13, title: "Coding Challenge", duration: "45:00", type: "exercise" },
        ],
      },
      {
        id: 4,
        title: "Functions",
        lessons: [
          { id: 14, title: "Introduction to Functions", duration: "19:20", type: "video" },
          { id: 15, title: "Parameters and Arguments", duration: "17:35", type: "video" },
          { id: 16, title: "Return Values", duration: "15:50", type: "video" },
          { id: 17, title: "Function Practice", duration: "35:00", type: "exercise" },
        ],
      },
      {
        id: 5,
        title: "Arrays and Objects",
        lessons: [
          { id: 18, title: "Working with Arrays", duration: "23:15", type: "video" },
          { id: 19, title: "Array Methods", duration: "21:40", type: "video" },
          { id: 20, title: "Introduction to Objects", duration: "18:55", type: "video" },
          { id: 21, title: "Object Properties and Methods", duration: "16:30", type: "video" },
        ],
      },
      {
        id: 6,
        title: "Final Project",
        lessons: [
          { id: 22, title: "Project Overview", duration: "8:20", type: "video" },
          { id: 23, title: "Building Your Project", duration: "60:00", type: "exercise" },
          { id: 24, title: "Project Review and Next Steps", duration: "12:40", type: "video" },
        ],
      },
    ],
  }

  const currentLesson = course.modules.flatMap((module) => module.lessons).find((lesson) => lesson.id === activeLesson)

  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0)
  const progressPercentage = (completedLessons.length / totalLessons) * 100

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-4 w-4" />
      case "quiz":
        return <FileText className="h-4 w-4" />
      case "exercise":
        return <Award className="h-4 w-4" />
      default:
        return <Play className="h-4 w-4" />
    }
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
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-300">Progress</p>
                <p className="font-medium dark:text-white">{Math.round(progressPercentage)}% Complete</p>
              </div>
              <div className="w-32">
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Course Content */}
          <div className="lg:col-span-3">
            {/* Course Header */}
            <Card className="mb-6 dark:bg-black dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2 dark:text-white">{course.title}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">by {course.instructor}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-600">FREE</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video Player / Lesson Content */}
            <Card className="mb-6 dark:bg-black dark:border-gray-700">
              <CardContent className="p-0">
                <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayCircle className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{currentLesson?.title}</h3>
                    <p className="text-gray-300">Duration: {currentLesson?.duration}</p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Play Lesson
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold dark:text-white">{currentLesson?.title}</h2>
                    <Button
                      onClick={() => currentLesson && markLessonComplete(currentLesson.id)}
                      variant="outline"
                      className="dark:border-gray-600 dark:text-white"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark Complete
                    </Button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Learn the fundamentals of programming in this comprehensive lesson.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="dark:bg-black">
                <TabsTrigger value="overview" className="dark:data-[state=active]:bg-gray-700 dark:text-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="notes" className="dark:data-[state=active]:bg-gray-700 dark:text-white">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="resources" className="dark:data-[state=active]:bg-gray-700 dark:text-white">
                  Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="dark:bg-black dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Course Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card className="dark:bg-black dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Lesson Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Take notes while watching the lesson. Your notes will be saved automatically.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card className="dark:bg-black dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Downloadable Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600">
                        <div>
                          <p className="font-medium dark:text-white">Course Slides</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">PDF - 2.5 MB</p>
                        </div>
                        <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600">
                        <div>
                          <p className="font-medium dark:text-white">Code Examples</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">ZIP - 1.2 MB</p>
                        </div>
                        <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Curriculum Sidebar */}
          <div className="lg:col-span-1">
            <Card className="dark:bg-black dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Course Curriculum</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {completedLessons.length} of {totalLessons} lessons completed
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="multiple" className="w-full">
                  {course.modules.map((module) => (
                    <AccordionItem
                      key={module.id}
                      value={`module-${module.id}`}
                      className="border-gray-200 dark:border-gray-700"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{module.title}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {module.lessons.length} lessons
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="space-y-2">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                                activeLesson === lesson.id
                                  ? "bg-blue-50 dark:bg-blue-900/20"
                                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
                              }`}
                              onClick={() => setActiveLesson(lesson.id)}
                            >
                              <div className="flex-shrink-0">
                                {completedLessons.includes(lesson.id) ? (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                  getLessonIcon(lesson.type)
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p
                                  className={`text-sm font-medium truncate ${
                                    activeLesson === lesson.id ? "text-blue-600" : "dark:text-white"
                                  }`}
                                >
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
