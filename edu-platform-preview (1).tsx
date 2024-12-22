import React, { useState } from 'react';
import { Book, LineChart, PenTool, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart as RechartLineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area } from 'recharts';

const data = {
  coursesData: [
    { id: 1, title: 'Mathematics 101', instructor: 'Dr. Smith', progress: 75 },
    { id: 2, title: 'Physics Fundamentals', instructor: 'Prof. Johnson', progress: 45 },
    { id: 3, title: 'Computer Science Basics', instructor: 'Dr. Williams', progress: 90 }
  ],
  progressData: [
    { month: 'Jan', Mathematics: 65, Physics: 45, ComputerScience: 78 },
    { month: 'Feb', Mathematics: 70, Physics: 52, ComputerScience: 82 },
    { month: 'Mar', Mathematics: 75, Physics: 58, ComputerScience: 85 },
    { month: 'Apr', Mathematics: 78, Physics: 62, ComputerScience: 88 },
    { month: 'May', Mathematics: 82, Physics: 68, ComputerScience: 90 }
  ],
  exams: [
    {
      id: 1,
      courseId: 1,
      title: 'Mathematics Midterm',
      duration: '120 minutes',
      questions: [
        {
          id: 1,
          text: 'What is the derivative of x²?',
          options: ['x', '2x', '2', 'x²'],
          correctAnswer: '2x'
        },
        {
          id: 2,
          text: 'Solve for x: 2x + 5 = 13',
          options: ['x = 4', 'x = 8', 'x = 3', 'x = 6'],
          correctAnswer: 'x = 4'
        },
        {
          id: 3,
          text: 'What is the integral of 2x?',
          options: ['x²', 'x² + C', '2x² + C', 'x'],
          correctAnswer: 'x² + C'
        },
        {
          id: 4,
          text: 'Find the limit of (x² - 1)/(x - 1) as x approaches 1',
          options: ['1', '2', '0', 'undefined'],
          correctAnswer: '2'
        },
        {
          id: 5,
          text: 'What is the solution to ln(x) = 2?',
          options: ['e', 'e²', '2e', '2'],
          correctAnswer: 'e²'
        }
      ]
    },
    {
      id: 2,
      courseId: 2,
      title: 'Physics Comprehensive Exam',
      duration: '90 minutes',
      questions: [
        {
          id: 1,
          text: 'What is the unit of force?',
          options: ['Newton', 'Joule', 'Watt', 'Pascal'],
          correctAnswer: 'Newton'
        },
        {
          id: 2,
          text: 'Calculate the work done when a force of 10N moves an object 5m in the direction of the force.',
          options: ['50 Joules', '15 Joules', '25 Joules', '40 Joules'],
          correctAnswer: '50 Joules'
        },
        {
          id: 3,
          text: 'What is the relationship between frequency (f) and period (T)?',
          options: ['f = T', 'f = 1/T', 'f = T²', 'f = 2T'],
          correctAnswer: 'f = 1/T'
        },
        {
          id: 4,
          text: 'A car accelerates from 0 to 60 m/s in 10 seconds. What is its acceleration?',
          options: ['6 m/s²', '10 m/s²', '3 m/s²', '30 m/s²'],
          correctAnswer: '6 m/s²'
        }
      ]
    },
    {
      id: 3,
      courseId: 3,
      title: 'Computer Science Fundamentals',
      duration: '90 minutes',
      questions: [
        {
          id: 1,
          text: 'What is the time complexity of binary search?',
          options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
          correctAnswer: 'O(log n)'
        },
        {
          id: 2,
          text: 'Which data structure operates on a LIFO principle?',
          options: ['Queue', 'Stack', 'Tree', 'Graph'],
          correctAnswer: 'Stack'
        },
        {
          id: 3,
          text: 'What is the output of: console.log(2 + "2")?',
          options: ['4', '22', 'NaN', 'Error'],
          correctAnswer: '22'
        },
        {
          id: 4,
          text: 'Which sorting algorithm has the best average time complexity?',
          options: ['Bubble Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'],
          correctAnswer: 'Quick Sort'
        }
      ]
    },
    {
      id: 4,
      courseId: 1,
      title: 'Mathematics Practice Quiz',
      duration: '45 minutes',
      questions: [
        {
          id: 1,
          text: 'Simplify: (x² + 2x + 1) - (x² - 2x + 4)',
          options: ['4x - 3', '4x + 3', '4x - 5', '4x + 5'],
          correctAnswer: '4x - 3'
        },
        {
          id: 2,
          text: 'What is the domain of f(x) = √(x - 1)?',
          options: ['x ≥ 0', 'x ≥ 1', 'x > 1', 'x ≤ 1'],
          correctAnswer: 'x ≥ 1'
        },
        {
          id: 3,
          text: 'If sin(θ) = 0.6, what is cos(θ)?',
          options: ['0.6', '0.8', '0.5', '0.4'],
          correctAnswer: '0.8'
        }
      ]
    },
    {
      id: 5,
      courseId: 2,
      title: 'Physics Lab Assessment',
      duration: '60 minutes',
      questions: [
        {
          id: 1,
          text: 'When measuring voltage in a circuit, how should the voltmeter be connected?',
          options: ['In series', 'In parallel', 'Both ways work', 'Neither way works'],
          correctAnswer: 'In parallel'
        },
        {
          id: 2,
          text: 'What is the equivalent resistance of two 4Ω resistors in parallel?',
          options: ['8Ω', '4Ω', '2Ω', '1Ω'],
          correctAnswer: '2Ω'
        },
        {
          id: 3,
          text: 'Which law states that the induced EMF is proportional to the rate of change of magnetic flux?',
          options: ["Ohm's Law", "Faraday's Law", "Coulomb's Law", "Newton's Law"],
          correctAnswer: "Faraday's Law"
        }
      ]
    }
  ]
};

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">EduPlatform</div>
        <div className="flex space-x-6">
          {[
            { id: 'dashboard', icon: User, label: 'Dashboard' },
            { id: 'courses', icon: Book, label: 'Courses' },
            { id: 'exams', icon: PenTool, label: 'Exams' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex items-center space-x-2 hover:text-blue-300 ${
                currentPage === id ? 'text-blue-300' : ''
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Book className="w-8 h-8 text-blue-500" />
          <CardTitle>{course.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <p className="text-right mt-2 text-sm text-gray-600">{course.progress}% Complete</p>
      </CardContent>
    </Card>
  );
};

const ExamQuestion = ({ question, selectedAnswer, onSelectAnswer, showResults }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => !showResults && onSelectAnswer(option)}
              className={`p-3 border rounded cursor-pointer transition-colors
                ${selectedAnswer === option ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}
                ${showResults ?
                  option === question.correctAnswer ? 'border-green-500 bg-green-50' :
                  selectedAnswer === option ? 'border-red-500 bg-red-50' : ''
                  : ''
                }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center
                  ${selectedAnswer === option ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'}
                `}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ExamSession = ({ exam, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const calculateScore = () => {
    const correctAnswers = exam.questions.filter((q, index) => 
      answers[index] === q.correctAnswer
    ).length;
    return Math.round((correctAnswers / exam.questions.length) * 100);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{exam.title}</CardTitle>
            <div className="text-sm text-gray-600">Duration: {exam.duration}</div>
          </div>
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">
                  Question {currentQuestionIndex + 1} of {exam.questions.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <ExamQuestion
                question={exam.questions[currentQuestionIndex]}
                selectedAnswer={answers[currentQuestionIndex]}
                onSelectAnswer={handleAnswer}
                showResults={false}
              />

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  Previous
                </button>
                {currentQuestionIndex === exam.questions.length - 1 ? (
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Submit Exam
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIndex(i => Math.min(exam.questions.length - 1, i + 1))}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Exam Complete!</h2>
                <p className="text-xl">Your Score: {calculateScore()}%</p>
              </div>

              {exam.questions.map((question, index) => (
                <ExamQuestion
                  key={question.id}
                  question={question}
                  selectedAnswer={answers[index]}
                  showResults={true}
                />
              ))}

              <button
                onClick={onClose}
                className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Return to Exam List
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const ExamsPage = () => {
  const [activeExam, setActiveExam] = useState(null);

  return (
    <div className="container mx-auto p-6">
      {!activeExam ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Available Exams</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.exams.map(exam => (
              <Card key={exam.id}>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Duration: {exam.duration}</p>
                  <p className="text-gray-600 mb-4">Questions: {exam.questions.length}</p>
                  <button
                    onClick={() => setActiveExam(exam)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    Start Exam
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <ExamSession exam={activeExam} onClose={() => setActiveExam(null)} />
      )}
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            {/* Top Row - Performance Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartLineChart data={data.progressData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Mathematics" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Physics" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="ComputerScience" stroke="#ffc658" />
                      </RechartLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Study Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { day: 'Mon', hours: 4 },
                        { day: 'Tue', hours: 3 },
                        { day: 'Wed', hours: 5 },
                        { day: 'Thu', hours: 2 },
                        { day: 'Fri', hours: 4 },
                        { day: 'Sat', hours: 6 },
                        { day: 'Sun', hours: 3 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="hours" fill="#8884d8" name="Study Hours" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assignment Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { week: 'W1', completed: 85, pending: 15 },
                        { week: 'W2', completed: 75, pending: 25 },
                        { week: 'W3', completed: 90, pending: 10 },
                        { week: 'W4', completed: 95, pending: 5 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="completed" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Completed" />
                        <Area type="monotone" dataKey="pending" stackId="1" stroke="#ffc658" fill="#ffc658" name="Pending" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row - Detailed Analytics */}
            {/* Bottom Row - Analytics and Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Performance by Subject</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={[
                        { subject: 'Quizzes', Mathematics: 80, Physics: 65, ComputerScience: 90 },
                        { subject: 'Assignments', Mathematics: 75, Physics: 70, ComputerScience: 85 },
                        { subject: 'Participation', Mathematics: 70, Physics: 75, ComputerScience: 95 },
                        { subject: 'Projects', Mathematics: 85, Physics: 60, ComputerScience: 88 },
                        { subject: 'Midterms', Mathematics: 78, Physics: 72, ComputerScience: 82 }
                      ]}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Mathematics" dataKey="Mathematics" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Physics" dataKey="Physics" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Radar name="Computer Science" dataKey="ComputerScience" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                        <Legend />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: 'Calculus: Understanding Derivatives',
                        duration: '15:30',
                        instructor: 'Dr. Smith',
                        thumbnail: '/api/placeholder/320/180',
                        progress: 0
                      },
                      {
                        id: 2,
                        title: 'Physics: Forces and Motion',
                        duration: '12:45',
                        instructor: 'Prof. Johnson',
                        thumbnail: '/api/placeholder/320/180',
                        progress: 30
                      },
                      {
                        id: 3,
                        title: 'Data Structures: Binary Trees',
                        duration: '18:20',
                        instructor: 'Dr. Williams',
                        thumbnail: '/api/placeholder/320/180',
                        progress: 75
                      }
                    ].map(video => (
                      <div key={video.id} className="flex flex-col space-y-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="relative">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-32 object-cover rounded"
                          />
                          {video.progress > 0 && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                              <div 
                                className="h-full bg-blue-600" 
                                style={{ width: `${video.progress}%` }}
                              />
                            </div>
                          )}
                        </div>
                        <h3 className="font-semibold text-base">{video.title}</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{video.instructor}</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.coursesData.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        );
      case 'exams':
        return <ExamsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderContent()}
    </div>
  );
};

export default App;