import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search/search';
import { Students } from './components/students/students';
import { fetchStudents } from './services/fetchStudents';

function App() {

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetchStudents()
      .then(data => {
        setStudents(data.map((student) => {
          return {
            ...student,
            tags: []
          }
        }))
      })
  }, [])



  useEffect(() => {
    setFilteredStudents(students)
  }, [students])


  return (
    <div className="App">
      <Search students={students} setStudents={setStudents} searchQuery={searchQuery} setSearchQuery={setSearchQuery} students={students} filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents} />
      <Students students={students} setStudents={setStudents} filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents} newTag={newTag} setNewTag={setNewTag} searchTag={searchTag} setSearchTag={setSearchTag} />
    </div>
  );
}

export default App;
