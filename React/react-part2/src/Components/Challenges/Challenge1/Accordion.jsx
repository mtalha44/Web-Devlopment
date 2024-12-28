import { useReducer, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Accordion() {
  // State for each section
  const reduce = ( state , action ) => {
        switch(action.type){
            case "Toggle" :
                return {
                    ...state,
                  [ action.section ]  : !state[ action.section ]
                }
        }
        
    } 
    //  const initializer = [ "HTML" , "CSS" , "JS" ]
    const [ collapse , dispatch ] = useReducer( reduce , {
        html : false ,
        css : false ,
        js : false
    } )

  // Function to toggle collapse for a specific section


  return (
    <div>
      {/* HTML Section */}
      <div>
        <div onClick={() => dispatch({ type: "Toggle" , section: "html" })} style={{ cursor: "pointer" }}>
          HTML{" "}
          <SlArrowDown
            className="accordion-icon"
            style={{
              transform: collapse.html ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        { collapse.html && (
         <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
         ) 
        }
      </div>

      {/* CSS Section */}
      <div>
        <div onClick={() => dispatch({type: "Toggle" , section: "css" })} style={{ cursor: "pointer" }}>
          CSS{" "}
          <SlArrowDown
            className="accordion-icon"
            style={{
              transform: collapse.css ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        {collapse.css && ( 
          <div>
            Cascading Style Sheets is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML or XML.
          </div>
        )
        }
      </div>

      {/* JavaScript Section */}
      <div>
        <div onClick={() => dispatch({type: "Toggle" , section: "js" })} style={{ cursor: "pointer" }}>
          JavaScript{" "}
          <SlArrowDown
            className="accordion-icon"
            style={{
              transform: collapse.js ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        {collapse.js && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
          )
        }
      </div>
    </div>
  );
}
