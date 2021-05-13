import { useParams } from "react-router-dom";
import works from "data/works";
import { useState, useEffect } from "react";

const StudyCase = () => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    const foundProject = works.find(
      (work) => `${work.client}-study-case` === project
    );
    setCurrentProject(foundProject);
  }, [project]);

  return (
    <div className="StudyCase my-3 text-center">
      {currentProject !== undefined && (
        <>
          <h1>{currentProject.title}</h1>
          <p>{currentProject.description}</p>
        </>
      )}
      {currentProject === undefined && <p>Ce projet n'existe pas...</p>}
    </div>
  );
};

export default StudyCase;
