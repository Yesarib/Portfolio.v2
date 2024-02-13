import { myTechs } from "../constans"


const Tech = () => {
  return (
    <div className="w-full flex flex-col mt-8 text-secondary justify-start items-start">
      <h1 className="text-three tracking-wider font-nunito text-center"> My Techs </h1>
      <div className='w-11/12 grid grid-cols-3 lg:grid-cols-6 gap-4 mt-4'>
        {myTechs.map((tech) => {
          return (
            <div key={tech.id} className='w-full flex flex-col items-center'>
              <img className="w-12 h-12" src={tech.img} alt={tech.id} />
              <p className="text-three mt-1 text-center"> {tech.title} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tech
