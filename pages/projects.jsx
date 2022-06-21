import React from 'react';
import {withLayout} from '../components/layout';

function Projects() {
  return (
    <>
      <div className="container mx-auto">
        <h4 className="text-center"> coming soon </h4>
      </div>
    </>
  );
}

export default withLayout(Projects, {useHeader: true});
