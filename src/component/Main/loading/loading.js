// @flow
import * as React from 'react';
import { CircularProgress } from 'diginet-core-ui/components';

export default function Loading(props)
{

  return <div 
  style={{opacity:"0.7",background:"white",position:"fixed",zIndex:"999999",width:"100%",height:"100%"}}>
  <CircularProgress  color="#123f5f" style={{position:"fixed",margin:"auto",top:0,right:0,left:0,bottom:0}} size="md" />
  </div>
}
