import React from "react"
import { companyLogos } from "../constants"

const Companylogo = ({ className }) => {
  return (
    <div className={`${className || ""}`}>
      <h5 className="tagline mb-6 text-n-1/50 text-center">
        Helping people creating an beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={logo} key={index} width={134} height={128}></img>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Companylogo
