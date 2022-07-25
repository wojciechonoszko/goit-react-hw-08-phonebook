import React from 'react';
import phoneBook from './phoneBook.png';
import styles from './HomePage.module.css';

const HomePage = () => (
    <div className={styles.homePageTitle}>
        <h1>            
            <img src={phoneBook} alt="phoneBook" />
            Phonebook
        </h1>
    </div>
);

export default HomePage;