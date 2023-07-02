import React, { Component } from 'react';
import './Galery.css';
import Cards1 from '../../Components/Cards/Cards1';
import Cards2 from '../../Components/Cards/Cards2';

class Galeria extends Component {

  render() {
    return (
      <>
        <div className='gallery-content'>
          <div>
            <h1>
              Hello Gallery
            </h1>
          </div>
          <section>
            <div>
              <Cards1 />
            </div>
            <div>
              <Cards2 />
            </div>
            <div>
              <Cards1 />
            </div>
            <div>
              <Cards1 />
            </div>
          </section>
        </div>

      </>
    );
  };
}

export default Galeria;
