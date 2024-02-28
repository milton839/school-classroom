/* eslint-disable react/prop-types */
import Student from "../Student/Student"

// eslint-disable-next-line react/prop-types
const StudentsTable = ({cls, classNumber}) => {
    console.log(cls)
  return (
    <div>
        <div className="overflow-x-auto m-10">
        <h2>Class-0{classNumber}</h2>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {cls?.map((cls) => (
              <Student key={cls.id} student={cls} />
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default StudentsTable