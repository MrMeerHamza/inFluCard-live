"use client"

import styles from './Navbar.module.css';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        setProgress(30)

        setTimeout(() =>{
            setProgress(70)
        }, 100)

        setTimeout(() =>{
            setProgress(100)
        }, 400)

    }, [pathname])

    useEffect(() => {

        setTimeout(() =>{
            setProgress(0)
        }, 500)

    })

    return (
        <nav className={styles.navbar}>
            <NextTopLoader/>
            <div className={styles.logo}><Link className={styles.log} href="/">INFLUCARD</Link></div>
            <div className={styles.container}>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/faqs">FAQs</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
