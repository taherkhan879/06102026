import './index.css'
const CourseCard = ({courseName, duration, category}) => {
  return (
    <div className="course-banner">
      <div className="course-banner-info">
        <h1 className="course-banner-name">{courseName}</h1>
        <p className="course-banner-duration">Duration: {duration}</p>
        <p className="course-banner-category">category: {category}</p>
      </div>
    </div>
  )
}

export default CourseCard
// Write your code here
