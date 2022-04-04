import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
   page: {
      background: '#D3D3D3',
      width: '100%'
   }
})

export default function Layout({ children }) {
   const classes = useStyles()

   return (
      <div>
         {/* app bar */}

         {/* side drawer */}

         <div className={classes.page}>
            {children}
         </div>
         
      </div>
   )
}
   

 
