import React from 'react';
import styles from './UserCard.module.css'
const UserCard = (props) => {
    return (
        <li className={styles['user-card']}>
           {props.children} 
        </li>
    );
}

export default UserCard;
