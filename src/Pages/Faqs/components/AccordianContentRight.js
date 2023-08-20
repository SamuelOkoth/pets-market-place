import React, { useState } from "react";
import { Collapse } from "reactstrap";

const AccordianContentRight = () => {
  //Collapse Tab

  const [isCollapseFourth, setIsCollapseFourth] = useState(true);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const [isCollapseSixth, setIsCollapseSixth] = useState(false);
  const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);
  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfour">
          <button
            className="accordion-button"
            onClick={toggleFourth}
            type="button"
          >
            Can the ad be modified or deleted?
          </button>
        </h2>
        <Collapse isOpen={isCollapseFourth} id="general-four">
          <div className="accordion-body">
            Yes, via ad settings
          </div>
        </Collapse>
      </div>

     <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfour">
          <button
            className="accordion-button"
            onClick={toggleFifth}
            type="button"
          >
           what types of ads is there?  
          </button>
        </h2>
        <Collapse isOpen={isCollapseFifth} id="general-four">
          <div className="accordion-body">
       Temporary adoption: <br />
 Mating:  <br />
Free rescue. <br />
 Sale:  <br />
Adoption: <br />
          </div>
        </Collapse>
      </div>

     
    </React.Fragment>
  );
};

export default AccordianContentRight;
