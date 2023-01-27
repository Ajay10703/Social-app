import React from 'react'
import { SideBtn2 } from './Data'
const Sidebar2 = () => {
  return (
    <div id="extra-btns">
        {SideBtn2.map((btns2) => (
          <div className="btns mt-3 ml-4">
            <i className={btns2.icon}></i><span className='ml-3'>{btns2.name}</span>

          </div>
        ))}
      </div>
  )
}

export default Sidebar2