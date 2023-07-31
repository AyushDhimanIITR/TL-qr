import React, { useState } from 'react'
import styles from "./home.module.css";

import Card from './card';


const Home = () => {
  const ans = true;
  return (
    <div className={styles.mainCont}>
      <Card />  

    Made with ❤️ by Tinkering Lab
    </div>
  )
}

export default Home