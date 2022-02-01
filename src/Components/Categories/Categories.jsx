import React from "react";
import "./Categories.css";
import Slide from 'react-reveal/Slide';

class Categories extends React.Component {
  render() {
    return (
      <>
      
        <div className="CategoriesContainer">
          <div className="lf">
          <Slide bottom>
          <h2>Life & Style</h2>
        </Slide>
            
          </div>

          <div className="Wellness">
            <Slide bottom>
            <h2>Wellness</h2>
            </Slide>
            
          </div>

          <div className="Pets">
            <Slide bottom>
            <h2 >Pets </h2>

            </Slide>
            
          </div>
        </div>
      </>
    );
  }
}
export default Categories;
