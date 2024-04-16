import data from "./data";
import { useState } from "react";

export default function Accordian(){
    const [selected, setSelected] = useState(null)
    function singleClicked(getItemId){
     setSelected(getItemId===selected ? null :getItemId)
     
    }
    return (
        <>
        <div className="wrapper">
            <div className="accordian">
                <h1>My Accordian App</h1>
                {
                    data && data.length > 0 ? (
                     data.map((item)=>(
                        <div onClick={()=>singleClicked(item.id)} className="title">

                            <h3>
                                {item.question}
                            </h3>
                            <span>+</span>
                            {
                            selected === item.id ? <div className="context"><h5 color="red">
                                {
                                    item.ans
                                }
                            </h5></div> : null
                        }
                        </div>
                      
                        
                     ))

                    )

                    :(
                       <h1>NO Data Founds</h1>
                    )

                }
            </div>
        </div>
        </>
    )
}