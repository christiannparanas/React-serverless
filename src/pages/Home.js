import React from 'react';
import CTA from '../styled/CTA'; 
import {Accent, StyledTitle} from '../styled/Accent'

export default function Home() {
   return (
      <div>
         <StyledTitle>Ready to type?</StyledTitle>
         <CTA to="/game">Click or type <Accent>'s'</Accent> to start</CTA>
      </div>
   )
}
