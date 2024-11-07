import { experiences } from "../constans"

const Experience = () => {
  return (
    <div id="experience" className="w-full flex flex-col justify-start items-start mt-20 lg:mt-0">
      <h1 className="text-two font-bold tracking-widest font-nunito"> Experience </h1>
      <div className="w-full ">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="w-[99%] flex flex-col mt-6 hover:border hover:border-[#242e47] hover:bg-[#3a4869] hover:bg-opacity-5 hover:rounded-xl ">
              <div className="w-[98%] flex justify-start items-start lg:flex-row lg:mt-4 lg:ml-2 text-gray-400">
                <div className="lg:w-1/4">
                  {experience.date}
                </div>
                <div className="lg:w-3/4 ml-6 lg:ml-0">
                  <h2 className="text-white text-lg font-bold"> {experience.title} </h2>
                  <h3 className="text-gray-300 text-lg font-semibold"> {experience.company} </h3>
                  {experience.details.map((detail,i) => (
                    <ul key={i} className="lg:list-disc lg:ml-6 lg:w-4/5">
                      <li className="text-gray-300 text-justify mt-2"> {detail} </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience