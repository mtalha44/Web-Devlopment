import { useState } from 'react';
import users from './users.json';
import "./DataTable.css"

export default function DataTable() {
  const [message, setMessage] = useState('Data Table');
  const [incId, setIncId] = useState(0);
  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: 'ID', key: 'id' },
              { label: 'Name', key: 'name' },
              { label: 'Age', key: 'age' },
              { label: 'Occupation', key: 'occupation' },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id + incId}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div> 
        <select name="Show" id="">
            <option value="" onClick = { () => setIncId(5)} >show 5</option>
            <option value="" onClick = { () => setIncId(10)}>show 10</option>
            <option value="" onClick = { () => setIncId(20)}>show 20</option>
        </select>
      </div>
    </div>
  );
}
