import React, { useContext } from 'react'
import logo from "./Assets/logoColor.svg"
import Image from 'next/image'
import styles from "./home.module.css"
import img from "./Assets/img.png"
import Link from 'next/link'
import { Answer } from '@/context/context';

const RightAnsCard = () => {
    var ans = useContext(Answer);
    ans = ans.message.slice(5);
    // console.log(ans);
    return (
        <>
            <div className={styles.lightCard}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" width={100} height={100} />
                </div>
                <div className={styles.lightCardBody}>
                    <Image src={img} alt="img" width={160} height={130} />
                    <p className={styles.bodyText}>Answer is</p>
                    <p className={styles.answer}>{ans.charAt(0).toUpperCase()+ans.slice(1)} </p>
                    <p className={styles.tagLine}>Want to explore more about techy stuffs</p>
                    <Link href="https://www.instagram.com/ayuushd">
                        <button>Know</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RightAnsCard