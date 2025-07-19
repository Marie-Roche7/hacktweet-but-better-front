import styles from '../styles/Home.module.css';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useState } from 'react';

function Home() {

const [step, setStep] = useState("main")

  function changeStep(steps) {
    setStep(steps)
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.center}>
          {(() => {
            if (step === "main") {
              return (
                <Main changeStep={changeStep}/>
              )
            } else if (step === "signUp") {
              return (
                <SignUp changeStep={changeStep}/>
              )
            } else if (step === "signIn") { 
              return (
                <SignIn changeStep={changeStep}/>
              )
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Home;