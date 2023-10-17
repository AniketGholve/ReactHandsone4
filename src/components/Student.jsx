import { Link } from 'react-router-dom'
import data from './Data.js'
const Student = () => {
  console.log(data)
  return (
    <div>
      <div className='heading'>
        <h1>Student Details</h1>
        <button>Add New Student</button>
      </div>
      <div className='studentTable'>
        <table className='' border={1} cellPadding={30}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link>Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student