import Home from '@/components/home'
import React from 'react'
import styles from "./styles.module.css";
import Card from '@/components/card';
import RightAnsCard from '@/components/AnswerCard';
import CorrectAnsCard from '@/components/correctAnsCard';

export const metadata = {
  title: 'Tinkering Lab Quiz',
  description: 'Tinkering Lab Student Body ',
}

const Main = () => {
  return (
    <main className={styles.mainCont}>
      <Card />  
    {/* <RightAnsCard /> */}
    {/* <CorrectAnsCard /> */}
    Made with ❤️ by Tinkering Lab
    </main>
  )
}

export default Main