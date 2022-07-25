import { useState } from "react";
import { useDispatch } from "react-redux";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { authOperations } from "../../../redux/auth/auth-operations";
import Container from "../../container/Container";
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
           case 'password':
                return setPassword(value);
        
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(authOperations.register({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <Container>
                <h1>RegisterPage</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Name
                        <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}                        
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                    </label>

                    <label className={styles.label}>
                        Email
                    <input
                        className={styles.input} type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                    </label>

                    <label className={styles.label}>
                        Password
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                    </label>

                   <Stack spacing={2} direction="row">
                        <Button type="submit"
                            variant="contained"                           
                            >  Register                          
                        </Button>
                    </Stack>
                </form>
            </Container>
        </div>
    );

}