import React, {Fragment} from 'react';
import spinner from './spinner.gif';



function Spiner() {
    return (
        <Fragment>
            <img src={spinner} alt="loading..." style={{width: '200px', margin: 'auto', display: 'block' }} />
        </Fragment>
    );
}

export default Spiner;
