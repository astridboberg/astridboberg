'use client';

import { usePathname } from 'next/navigation';
import styles from '../assets/scss/layout.module.scss'

export default function Wrapper({children}) {
  const pathname = usePathname();

  return (
    <>
    <body id={styles.wrapper} className={pathname == '/' ? 'home' : 'page'}>
    {children}
    </body>
    </>
    );
  }