import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Button from './../Button/Button';

const SocialMedia = () => (
  <div>
    <Button variant='small'>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook
    </Button>
    <Button variant='small'>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook
    </Button>
    <Button variant='small'>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook
    </Button>
    <Button variant='small'>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook
    </Button>
    <Button variant='small'>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook
    </Button>
  </div>
);

export default SocialMedia;
