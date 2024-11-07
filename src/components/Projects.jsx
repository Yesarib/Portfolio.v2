import { FaStar } from "react-icons/fa"
import { getProjectsArray } from "../constans"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const getProjects = async() => {
      const response = await getProjectsArray();
      console.log(response);
      
      setProjects(response)
    }

    getProjects();
  },[])
  return (
    <div id="projects" className="w-full flex flex-col justify-start items-start mt-20">
      <h1 className="text-two font-bold tracking-widest font-nunito"> Projects </h1>
      <div className="w-full ">
        {projects && projects.map((project) => {
          return (
            <a
              key={project.id} 
              className="w-full lg:w-[90%] flex mt-6 hover:border hover:border-[#242e47] hover:bg-[#3a4869] hover:bg-opacity-5 hover:rounded-xl lg:space-x-10 lg:mb-12"
              href={project?.project_detail?.html_url}
              target="_blank"
            >
              <div className="w-full lg:w-1/4 lg:h-1/4 flex justify-start items-start lg:mt-4 lg:ml-2 text-gray-400">
                <img src={project.project_image} alt={project.id} className="rounded-xl"/>
              </div>
              <div className="w-full flex flex-col justify-start items-start lg:mt-4 lg:ml-2 lg:mb-4 text-gray-300 ml-4 ">
                <h2 className="text-white font-bold"> {project?.project_detail?.name} </h2>
                <p className="mt-2"> {project?.project_detail?.description} </p>
                  {project?.project_detail?.stargazers_count === 0 ? null: (
                    <div className="flex justify-center items-center space-x-1 mt-2">
                      <FaStar className=""/>
                      <div>
                        {project?.project_detail?.stargazers_count}                        
                      </div>
                    </div>
                  )}
                  <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-1 mt-4">
                    {project?.project_detail?.topics.map((topic,i) => {
                      return (
                        <div key={i} className="w-full h-8 text-center items-center justify-center rounded-3xl border border-[#3a4869] mt-1">
                          {topic.substring(0,15)}
                        </div>
                      )
                    })}
                  </div>
                  
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Projects