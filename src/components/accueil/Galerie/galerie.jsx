import React from "react"
import Heading from "../../common/Heading"
import { Media } from "../../images"
import "./galerie.css"

const Galerie = () => {

  return (
    <>
      
        <div className='container' id="lolo">
          <Heading title='Notre galérie photo' subtitle='Pour un aperçu de notre Hôtel' />
          
          <div className="media-container" id="lili">
            {
                Media.map((file, index)=>(
                    <div className="media" key={index} id="lulu">
                    
                        {
                            file.type === 'image'
                            ? <img src={file.url} alt=""/>
                            : <video src={file.url} muted/>
                        }
                    </div>
                ))
            }
          </div>

        
        </div>
      
    </>
  )
}

export default Galerie
