import React, { useEffect, useState, useContext } from 'react'
import styles from "./home.module.css";
import Image from 'next/image';
import logo from "./Assets/logo.svg"
import OTPInput from 'react-otp-input';
import Link from 'next/link';
import {Answer} from "@/context/context"


const Card = () => {
  const context = useContext(Answer);
  const [otp, setOtp] = useState("");
  const [ques, setQues] = useState([]);
  const { message, setMessage } = useContext(Answer);

  // console.log(otp);
  useEffect(() => {
    let x = Math.floor((Math.random() * 20));
    
    const res = fetch("/api/server")
      .then((res) => res.json())
      .then((data) => setQues(data.ques[x]))
  }, []);

  const ans = ques.answer;
  let ansLen = ans ? ans.length : 0;
  let len = ansLen;
  // console.log(ans, otp);

  const handleClick = () => {
    if(otp.toLowerCase() === ans.toLowerCase()) {
      setMessage(otp)
    }else{
      setMessage("Wrong")
    }
  }
  
  
  return (
    <>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className={styles.title}>
          <p>{ques.question}</p>
          {/* <input type="text" /> */}
          <OTPInput value={otp} onChange={setOtp}
            numInputs={len} renderSeparator={<span>&nbsp;</span>}
            shouldAutoFocus
            inputStyle={{height:"24px", width:"20px", borderRadius:"5px", border:"1px solid black"}}
            containerStyle={{ overflow: "auto", width: "90vw", justifyContent: "center", }}
            renderInput={(p) => <input {...p} />} />
          <Link href="/answer">
            <button onClick={handleClick}>Submit</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card