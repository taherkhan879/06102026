import CourseCard from '../CourseCard'
import './index.css'

const CoursePage = () => (
  <div className="courses-container">
    <CourseCard
      courseName="HTML & CSS Fundamentals"
      duration="6 Weeks"
      category="Web Development"
    />
    <CourseCard
      courseName="JavaScript Essentials"
      duration="8 Weeks"
      category="Web Development"
    />
  </div>
)

export default CoursePage
// Write your code here
//
// Import the CourseCard component and use it inside this CoursePage component.
//
// Render two CourseCard components with the following props:
//
// 1. courseName="HTML & CSS Fundamentals" duration="6 Weeks" category="Web Development"
// 2. courseName="JavaScript Essentials" duration="8 Weeks" category="Web Development"
