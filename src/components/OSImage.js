import React from 'react';
import styles from '@site/src/css/os.module.css';

export default function OSImage({children, os}) {

  return (
    <span className={styles[os]} style={{marginLeft: "10px", color: 'white', verticalAlign: 'text-bottom', backgroundPositionY: 'bottom'}}>{children}</span>
  );
}