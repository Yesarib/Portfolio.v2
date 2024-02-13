import { links } from "../constans"

const Footer = () => {
  return (
    <div className="w-full flex lg:justify-center lg:items-center lg:fixed bottom-0 lg:mb-16">
      <div className="lg:flex lg:items-center space-x-10 grid grid-cols-7">
        {links.map((link) => {
          return (
            <div key={link.id} className="w-full">
              <a href={link.link}>
                <link.icon className="w-8 h-8 text-gray-500"/>

              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footer