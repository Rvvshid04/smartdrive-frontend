// src/pages/StudentDash.jsx
import React, { useState } from 'react';
import StudentDashboardNavbar from '../components/StudentDashNavbar';
import RegisteredFooter from '../components/RegisteredFooter';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { FaUserCircle, FaTrophy, FaMedal, FaAward, FaChevronDown, FaChevronUp, FaCheckCircle, FaClock, FaBook, FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const StudentDash = () => {
    const [leaderboardPeriod, setLeaderboardPeriod] = useState('daily');
    const [showAllStudents, setShowAllStudents] = useState(false);
    const { theme } = useTheme();
    
    const upcomingLessons = [
        { id: 1, title: 'Basic Car Controls', date: '2024-03-15', time: '10:00 AM' },
        { id: 2, title: 'Parking Techniques', date: '2024-03-17', time: '2:00 PM' },
    ];

    const progressStats = [
        { label: 'Theory Progress', value: 75 },
        { label: 'Practical Progress', value: 60 },
        { label: 'Overall Progress', value: 68 },
    ];

    const courses = [
        {
            id: 1,
            title: 'Road Rules Basics',
            description: 'Learn the fundamental rules of the road and traffic regulations',
            image: '/path/to/road-rules.jpg',
            progress: 75,
            grade: 82
        },
        {
            id: 2,
            title: 'Traffic Signs Mastery',
            description: 'Comprehensive guide to understanding traffic signs and signals',
            image: '/path/to/traffic-signs.jpg',
            progress: 60,
            grade: 78
        },
        {
            id: 3,
            title: 'Safe Driving Practices',
            description: 'Essential techniques for safe and defensive driving',
            image: '/path/to/safe-driving.jpg',
            progress: 45,
            grade: 88
        }
    ];

    // Leaderboard data
    const leaderboardData = {
        daily: [
            { id: 1, name: 'Sarah Johnson', points: 850, rank: 1, avatar: null },
            { id: 2, name: 'Michael Chen', points: 780, rank: 2, avatar: null },
            { id: 3, name: 'Emily Rodriguez', points: 720, rank: 3, avatar: null },
            { id: 4, name: 'David Wilson', points: 690, rank: 4, avatar: null },
            { id: 5, name: 'Jessica Lee', points: 650, rank: 5, avatar: null },
            { id: 6, name: 'Robert Taylor', points: 620, rank: 6, avatar: null },
            { id: 7, name: 'Amanda Brown', points: 590, rank: 7, avatar: null },
            { id: 8, name: 'James Wilson', points: 570, rank: 8, avatar: null },
            { id: 9, name: 'Sophia Martinez', points: 550, rank: 9, avatar: null },
            { id: 10, name: 'Daniel Anderson', points: 530, rank: 10, avatar: null },
        ],
        weekly: [
            { id: 1, name: 'Michael Chen', points: 5200, rank: 1, avatar: null },
            { id: 2, name: 'Sarah Johnson', points: 4800, rank: 2, avatar: null },
            { id: 3, name: 'David Wilson', points: 4500, rank: 3, avatar: null },
            { id: 4, name: 'Emily Rodriguez', points: 4200, rank: 4, avatar: null },
            { id: 5, name: 'Jessica Lee', points: 3900, rank: 5, avatar: null },
            { id: 6, name: 'Robert Taylor', points: 3700, rank: 6, avatar: null },
            { id: 7, name: 'Amanda Brown', points: 3500, rank: 7, avatar: null },
            { id: 8, name: 'James Wilson', points: 3300, rank: 8, avatar: null },
            { id: 9, name: 'Sophia Martinez', points: 3100, rank: 9, avatar: null },
            { id: 10, name: 'Daniel Anderson', points: 2900, rank: 10, avatar: null },
        ],
        monthly: [
            { id: 1, name: 'David Wilson', points: 18500, rank: 1, avatar: null },
            { id: 2, name: 'Michael Chen', points: 17200, rank: 2, avatar: null },
            { id: 3, name: 'Sarah Johnson', points: 16800, rank: 3, avatar: null },
            { id: 4, name: 'Emily Rodriguez', points: 15500, rank: 4, avatar: null },
            { id: 5, name: 'Jessica Lee', points: 14200, rank: 5, avatar: null },
            { id: 6, name: 'Robert Taylor', points: 13800, rank: 6, avatar: null },
            { id: 7, name: 'Amanda Brown', points: 13200, rank: 7, avatar: null },
            { id: 8, name: 'James Wilson', points: 12800, rank: 8, avatar: null },
            { id: 9, name: 'Sophia Martinez', points: 12200, rank: 9, avatar: null },
            { id: 10, name: 'Daniel Anderson', points: 11800, rank: 10, avatar: null },
        ]
    };

    // Get rank icon based on position
    const getRankIcon = (rank) => {
        switch(rank) {
            case 1:
                return <FaTrophy className="text-yellow-500 text-xl" />;
            case 2:
                return <FaMedal className="text-gray-400 text-xl" />;
            case 3:
                return <FaAward className="text-amber-600 text-xl" />;
            default:
                return null;
        }
    };

    // Get displayed students based on showAllStudents state
    const getDisplayedStudents = () => {
        const students = leaderboardData[leaderboardPeriod];
        return showAllStudents ? students : students.slice(0, 5);
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            <StudentDashboardNavbar />
            <Breadcrumbs />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8`}>Welcome back, Student!</h1>

                {/* Student Overview Card */}
                <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-md p-6 mb-8 border`}>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Student Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Personal Information</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <FaUserCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Student ID: <span className="font-medium">STU-2024-001</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaGraduationCap className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Program: <span className="font-medium">Standard Driving Course</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaClock className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Enrollment Date: <span className="font-medium">January 15, 2024</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaBook className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Courses Enrolled: <span className="font-medium">3</span></span>
                                </li>
                            </ul>
                                </div>
                        <div>
                            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Progress Summary</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Theory Progress: <span className="font-medium text-green-600">{progressStats[0].value}%</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Practical Progress: <span className="font-medium text-green-600">{progressStats[1].value}%</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Overall Progress: <span className="font-medium text-green-600">{progressStats[2].value}%</span></span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Average Grade: <span className="font-medium text-green-600">82.7/100</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Upcoming Lessons */}
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Upcoming Lessons</h2>
                    <div className="space-y-4">
                        {upcomingLessons.map(lesson => (
                            <div key={lesson.id} className={`flex items-center justify-between p-4 border rounded-lg ${theme === 'dark' ? 'border-gray-700 hover:border-green-500' : 'border-gray-200 hover:border-green-500'} transition-colors duration-300`}>
                                <div>
                                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{lesson.title}</h3>
                                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{lesson.date} at {lesson.time}</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Book a Session */}
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Book a Session</h2>
                    <Link to="/student/book-session" className="bg-blue-500 text-white rounded-md p-2">
                        Book a Session
                    </Link>
                </div>

                {/* New My Courses and Grades Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* My Courses Section */}
                    <div className="lg:col-span-2">
                        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>My Courses</h2>
                        <div className="space-y-4">
                            {courses.map(course => (
                                <Link 
                                    key={course.id}
                                    to={`/student/booking/${course.id}`}
                                    className={`block ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-102`}
                                >
                                    <div className="flex p-4">
                                        <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                            <img 
                                                src={course.image} 
                                                alt={course.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4 flex-grow">
                                            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-1`}>
                                                {course.title}
                                            </h3>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                                                {course.description}
                                            </p>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Grades Report Section */}
                    <div className="lg:col-span-1">
                        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Grades Report</h2>
                        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
                            <div className="space-y-4">
                                {courses.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`p-4 border rounded-lg ${theme === 'dark' ? 'border-gray-700 hover:border-green-500' : 'border-gray-200 hover:border-green-500'} transition-all duration-300`}
                                    >
                                        <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-2`}>{course.title}</h4>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Completion:</span>
                                                <span className="ml-2 text-sm font-medium text-green-600">
                                                    {course.progress}%
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Grade:</span>
                                                <span className="ml-2 text-sm font-medium text-green-600">
                                                    {course.grade}/100
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Leaderboards Section */}
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Student Leaderboards</h2>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => {
                                    setLeaderboardPeriod('daily');
                                    setShowAllStudents(false);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                    leaderboardPeriod === 'daily' 
                                        ? 'bg-green-600 text-white' 
                                        : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Daily
                            </button>
                            <button 
                                onClick={() => {
                                    setLeaderboardPeriod('weekly');
                                    setShowAllStudents(false);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                    leaderboardPeriod === 'weekly' 
                                        ? 'bg-green-600 text-white' 
                                        : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Weekly
                            </button>
                            <button 
                                onClick={() => {
                                    setLeaderboardPeriod('monthly');
                                    setShowAllStudents(false);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                    leaderboardPeriod === 'monthly' 
                                        ? 'bg-green-600 text-white' 
                                        : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}>
                                <tr>
                                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                        Rank
                                    </th>
                                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                        Student
                                    </th>
                                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={`${theme === 'dark' ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                                {getDisplayedStudents().map((student, index) => (
                                    <tr key={student.id} className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mr-2`}>{index + 1}</span>
                                                {getRankIcon(index + 1)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    {student.avatar ? (
                                                        <img className="h-10 w-10 rounded-full" src={student.avatar} alt={student.name} />
                                                    ) : (
                                                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                                            <FaUserCircle className="h-8 w-8 text-green-600" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-4">
                                                    <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{student.points.toLocaleString()} pts</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {/* Show More/Less Button */}
                        {leaderboardData[leaderboardPeriod].length > 5 && (
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={() => setShowAllStudents(!showAllStudents)}
                                    className={`flex items-center px-4 py-2 ${theme === 'dark' ? 'bg-gray-700 text-green-400 hover:bg-gray-600' : 'bg-green-100 text-green-700 hover:bg-green-200'} rounded-md transition-colors duration-300`}
                                >
                                    {showAllStudents ? (
                                        <>
                                            <span>Show Less</span>
                                            <FaChevronUp className="ml-2" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Show More</span>
                                            <FaChevronDown className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <RegisteredFooter />
        </div>
    );
};

export default StudentDash;