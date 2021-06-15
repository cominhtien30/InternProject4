import React from 'react';
import { Alert  } from 'diginet-core-ui/components';

const success = (props) => {
    const {notify}=props;
    return (
        <>
             <Alert
                size='medium'
                style={{width:"50%",margin:"auto"}}
                color="success"
                autoDisappear
                horizontal="center"
                duration={5}
                onClose={function noRefCheck(){}}
                text={`${notify} thành công`}
                vertical="bottom"
      />
        </>
    );
}

export default success;
