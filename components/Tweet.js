import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


function Tweet() {
    return (
        <div className={styles.container}>
            <div className={styles.userSide}>
                <div className={styles.hihihi}>
                <div className={styles.user}>
                    <div className={styles.pic}>
                        <img className={styles.image} src="possum-screaming.png" />
                    </div>
                    <div className={styles.blblb}>
                        <p className={styles.word}> Name</p>
                        <p className={styles.word}> @Name</p>
                    </div>
                </div>
                <button>Logout</button>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.home}>
                    <h2>Home</h2>
                    <input className={styles.input} placeholder="let's tweeet"></input>
                    <div className={styles.send}>
                        <p className={styles.mort}>/280</p>
                        <p className={styles.mort}>Tweet</p>
                    </div>
                </div>
                <div className={styles.tweetsContainer}>
                    <div className={styles.tweet}>
                        <div className={styles.userInfos}>
                            <img />
                            <span>Name</span>
                            <span>@Name</span>
                            <span>Time</span>
                        </div>
                        <div className={styles.text}>
                            <p>text of tweet #aaaaaah</p>
                        </div>
                        <div className={styles.LikeBtn}>
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faHeart} />
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faTrash} />
                        </div>
                    </div>
                    <div className={styles.tweet}>
                        <div className={styles.userInfos}>
                            <img />
                            <span>Name</span>
                            <span>@Name</span>
                            <span>Time</span>
                        </div>
                        <div className={styles.text}>
                            <p>text of tweet #aaaaaah</p>
                        </div>
                        <div className={styles.LikeBtn}>
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faHeart} />
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faTrash} />
                        </div>
                    </div>
                    <div className={styles.tweet}>
                        <div className={styles.userInfos}>
                            <img />
                            <span>Name</span>
                            <span>@Name</span>
                            <span>Time</span>
                        </div>
                        <div className={styles.text}>
                            <p>text of tweet #aaaaaah</p>
                        </div>
                        <div className={styles.LikeBtn}>
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faHeart} />
                            <FontAwesomeIcon color="rgb(0, 0, 0)" icon={faTrash} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.trends}>

                <h2>Trends!!</h2>

                <div className={styles.hahahaha}>
                <div className={styles.hihihih}>
                    <p>#hackathon</p>
                    <p>2 Tweets</p>
                </div>
                <div className={styles.hihihih}>
                    <p>#hackathon</p>
                    <p>2 Tweets</p>
                </div>
                <div className={styles.hihihih}>
                    <p>#hackathon</p>
                    <p>2 Tweets</p>
                </div>
                <div className={styles.hihihih}>
                    <p>#hackathon</p>
                    <p>2 Tweets</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Tweet;

