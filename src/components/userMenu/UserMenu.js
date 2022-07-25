import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operations";
import { authSelectors } from "../../redux/auth/auth-selectors";
import defaultAvatar from './defaultAvatar.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;


return (
    <div className={ styles.userMenu }>
    <img src={avatar} alt="avatar" width="32"  />
    <span className={styles.userName}>Helo, my friend {name}</span>
    <Stack spacing={2} direction="row">
      <Button type="button"
        variant="contained"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}>
      Logout
      </Button>
    </Stack>
  </div>
);
}