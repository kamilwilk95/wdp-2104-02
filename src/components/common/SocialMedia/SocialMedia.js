import React from 'react';
import styles from './SocialMedia.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';

const SocialMedia = () => (
  <div className={styles.main}>
    <Button variant='main' className={styles.facebook}>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Share
    </Button>
    <Button variant='main' className={styles.button}>
      <FontAwesomeIcon
        icon={faGooglePlusG}
        className={styles.iconRed}
      ></FontAwesomeIcon>{' '}
      Google +
    </Button>
    <Button variant='main' className={styles.button}>
      <FontAwesomeIcon icon={faTwitter} className={styles.iconBlue}></FontAwesomeIcon>{' '}
      Tweet
    </Button>
    <Button variant='main' className={styles.button}>
      <FontAwesomeIcon icon={faPinterestP} className={styles.iconRed}></FontAwesomeIcon>{' '}
      Pinterest
    </Button>
    <Button variant='main' className={styles.button}>
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className={styles.iconBlue}
      ></FontAwesomeIcon>{' '}
      Linkedin
    </Button>
  </div>
);

export default SocialMedia;
