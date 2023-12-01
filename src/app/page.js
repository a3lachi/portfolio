import styles from './page.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.landing}>
                    <div style={{ fontFamily:'Verdana' , opacity:'0.5'}}>Hello! I am</div>
                    <div style={{ fontFamily:'Verdana'  , fontWeight:'bold' , fontSize:'2.5em'}}>AALACHI MOHAMED</div>
                    <div style={{ fontFamily:'Verdana' , fontSize:'3.5em' }}>a SOFTWARE ENGINEER</div>

                    <div style={{ display:'flex' , justifyContent:'center' , marginTop:'20px'}} >
                        <div className={styles.arrow}><img src="./arrow.svg" width={20} style={{ marginRight:'15px' }} /></div>
                        <div style={{ fontFamily:'Courier New' }}>Know more</div>
                    </div>
                </div>
            </div>

        
        </main>
    </>
  )
}
