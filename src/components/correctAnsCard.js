import React from 'react'
import logo from "./Assets/logoColor.svg"
import Image from 'next/image'
import styles from "./home.module.css"
import img from "./Assets/success.png"
import Link from 'next/link'

const CorrectAnsCard = () => {
    
    return (
        <>
            <div className={styles.correctCard}>
                <div className={styles.correctCardLogo}>
                    <Image src={logo} alt="logo" width={100} height={100} />
                    <Image src={img} alt="img" width={200} height={140} />
                </div>
                <div className={styles.lightCardBody}>
                    <p className={styles.bodyText}>You are</p>
                    <p className={styles.answer}>CORRECT</p>
                    <p className={styles.tagLine}>Want to explore more about techy stuffs</p>
                    <Link href="https://www.instagram.com/p/CvmzBp3omcO/?igshid=MzRlODBiNWFlZA==">
                    <button>Know More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CorrectAnsCard