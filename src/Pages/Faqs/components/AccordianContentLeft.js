import React, { useState } from "react";
import { Collapse } from "reactstrap";

const AccordianContentLeft = () => {
  const [isCollapseFirst, setIsCollapseFirst] = useState(true);
  const toggleFirst = () => setIsCollapseFirst(!isCollapseFirst);

  const [isCollapseSecond, setIsCollapseSecond] = useState(false);
  const toggleSecond = () => setIsCollapseSecond(!isCollapseSecond);

  const [isCollapseThird, setIsCollapseThird] = useState(false);
  const toggleThird = () => setIsCollapseThird(!isCollapseThird);

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingone">
          <button
            className="accordion-button"
            onClick={toggleFirst}
            type="button"
          >
            1. How much are the advertising fees?
          </button>
        </h2>
        <Collapse isOpen={isCollapseFirst} id="buying-one">
          <div className="accordion-body">
            1. Temporary adoption: 25.  <br />
2. Mating: 30. <br />
3. Free rescue. <br />
4. Sale: 30. <br />
5. Adoption: 20. <br />
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingtwo">
          <button
            className="accordion-button"
            onClick={toggleSecond}
            type="button"
          >
           How to post ad ? in the website
          </button>
        </h2>
        <Collapse isOpen={isCollapseSecond} id="buying-two">
          <div className="accordion-body">
            You can post ad from home page icon post ad Button.
          </div>
        </Collapse>
      </div>

    </React.Fragment>
  );
};

export default AccordianContentLeft;
