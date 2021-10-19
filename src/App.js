import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search/search';
import { Students } from './components/students/students';
import { fetchStudents } from './services/fetchStudents';

function App() {

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);


  useEffect(() => {
    fetchStudents()
      .then(data => {
        setStudents(data)
      })
  }, [])


  useEffect(() => {
    setFilteredStudents(students)
  }, [students])


  return (
    <div className="App">
      <Search students={students} filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents} />
      <Students filteredStudents={filteredStudents} />
    </div>
  );
}

export default App;
