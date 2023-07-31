import Home from '@/components/home'
import React, {useContext} from 'react'
import styles from "./styles.module.css";
import RightAnsCard from '@/components/AnswerCard';
import CorrectAnsCard from '@/components/correctAnsCard';
import { Answer } from '@/context/context';

const Main = () => {
    
    const ctx = useContext(Answer);
    // console.log(ctx.message.slice(0,5));
    const isTrue = ctx.message.slice(0,5);
    
  return (
    <main className={styles.mainCont}>
     {
        isTrue==='Wrong'? <RightAnsCard/>: <CorrectAnsCard/>
     }
    
    Made with ❤️ by Tinkering Lab
    </main>
  )
}

export default Main