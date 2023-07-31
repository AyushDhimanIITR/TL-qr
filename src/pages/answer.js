import Home from '@/components/home'
import React, {useContext} from 'react'
import styles from "./styles.module.css";
import RightAnsCard from '@/components/AnswerCard';
import CorrectAnsCard from '@/components/correctAnsCard';
import { Answer } from '@/context/context';

const Main = () => {
    
    const isCorrect = useContext(Answer);
    // console.log(isCorrect.message);
    
  return (
    <main className={styles.mainCont}>
     {
        isCorrect.message==='Wrong'? <RightAnsCard/>: <CorrectAnsCard/>
     }
    
    Made with ❤️ by Tinkering Lab
    </main>
  )
}

export default Main