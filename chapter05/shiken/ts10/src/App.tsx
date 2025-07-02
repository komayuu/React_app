import React from "react";
import Course from './Course';

interface Courses {
  id: number;
  name: string;
  release: Date;
}

const App: React.FC = () => {
  const courses: Courses[] = [
    {id: 1, name: "Vue", release: new Date(2023, 2, 10)},
    {id: 2, name: "Augular", release: new Date(2023, 2, 17)},
    {id: 3, name: "React", release: new Date(2023, 3, 24)},
  ];

  return (
    <div>
      <ul>
        {courses.map((course) =>
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            release={course.release}
          />
        )}
      </ul>
    </div>
  );
};

export default App;