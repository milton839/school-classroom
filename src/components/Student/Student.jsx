/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Student = ({student}) => {
    const {id, name, email, gender, grade, percentage} = student
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{grade}</td>
      <td>{percentage}</td>
    </tr>
  );
};

export default Student;
