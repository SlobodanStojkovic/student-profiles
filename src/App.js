import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search/search';
import { Students } from './components/students/students';
import { fetchStudents } from './services/fetchStudents';

function App() {

  
  const [students, setStudents] = useState([]);

  useEffect(() => {
      fetchStudents()
          .then(data => {
              setStudents(data)
              console.log(students)
          })
  }, [])

  return (
    <div className="App">
      <Search />
      <Students students={students}/>
    </div>
  );
}

export default App;
