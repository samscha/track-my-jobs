import React from 'react';
import withSizes from 'react-sizes';

import Ahref from './meta/Ahref';

import { response, flex, font } from '../css/meta/index';

const style = isMobile => ({
  fontSize: font.getTitleSize(isMobile),
  margin: '10px 0 10px 0',
  textAlign: 'center',
});

const Construction = ({ isMobile }) => {
  return (
    <div className="Construction">
      <div className="ConstructionTitle" style={style(isMobile)}>
        We're under construction!
      </div>

      <div className="ConstructionMain" style={flex.center}>
        <ul style={{ listStyle: 'none', margin: '0 auto', padding: '0' }}>
          <li style={{ textAlign: 'center' }}>
            <Ahref
              link="https://github.com/samscha/track-my-jobs"
              text="Github"
            />
          </li>

          <li style={{ textAlign: 'center' }}>
            <Ahref
              link="mailto:chasamuels@gmail.com"
              text="Email"
              target="null"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: response.isMobile(width),
});

export default withSizes(mapSizesToProps)(Construction);
