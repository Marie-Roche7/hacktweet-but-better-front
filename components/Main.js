import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Link from 'next/link';

function Main(props) {


    const clickUp = () => {
        props.changeStep("signUp")
    }


    const clickIn = () => {
        props.changeStep("signIn")
    }



    return (

        <div>
            <div className={styles.mimimi}>
                <h3>SEE WHAT'S HAPPENING</h3>
                <div className={styles.lalala}>
                    <div className={styles.text}>
                        <h4>Join Hacktweet But Better !</h4>
                    </div>
                    <button onClick={() => clickUp()} className={`${styles.signup} ${styles.button}`}>Sign Up</button>
                    <div>
                        <p>Already have an account?</p>
                        <button onClick={() => clickIn()} className={`${styles.signin} ${styles.button}`}>Sign In</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;