import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState('No Result');

  return (
      <div className={styles.home}>
        <div className={styles.image}>
          <img src="./welcome.svg" alt="hero image" />
        </div>
        <div className={styles.scanner}>
          <div className={styles.scannerContainer}>
            <div className={styles.scannerDiv}>
            <QrReader
                onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
            }}
            style={{ width: '100%' }}
          />
            </div>
            <b className={styles.feedback}>{data}</b>
          </div>
        </div>
      </div>
  )
}
