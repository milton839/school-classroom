import { useEffect, useState } from "react";
// import Student from "../Student/Student";
import StudentsTable from "./StudentsTable";

const Students = () => {
  const [students, setStudents] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("./public/data.JSON")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const class1 = students.filter((t) => t.class == 1);
  const class2 = students.filter((t) => t.class == 2);
  const class3 = students.filter((t) => t.class == 3);
  const class4 = students.filter((t) => t.class == 4);
  const class5 = students.filter((t) => t.class == 5);
  return (
    <div>
        <div>Search Data</div>
      <StudentsTable cls={class1} classNumber={1} />
      <StudentsTable cls={class2} classNumber={2} />
      <StudentsTable cls={class3} classNumber={3} />
      <StudentsTable cls={class4} classNumber={4} />
      <StudentsTable cls={class5} classNumber={5} />
    </div>
  );
};

export default Students;
