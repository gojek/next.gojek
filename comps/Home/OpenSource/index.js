import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import Link from '../../Common/link';
import CardAnimation from '../../Culture/CardAnimation';

import { opensourceProjects, projects } from '../data';
import Card from './card';

function Projects(props) {
  return (
    <div className="container open-source py-5">
      {/* <div className="row">
        <div className="col-md-4 my-auto">
          <h1 className="heading pb-5">We ❤️ open source. </h1>
          <p className="text-lead pb-5 pr-5">
            As firm believers in the pursuit of a collective quest for excellence, the tools we
            build are diligently open-sourced so others can learn from us, just as we have from the
            community.
          </p>

          <Link href="#" text="Check them out" color="text-green-light" />
        </div>
        <div className="col-md-8 position-relative outer"> */}
      <CardAnimation data={projects} />
      {/* </div>
      </div> */}
    </div>
  );
}

export default Projects;
