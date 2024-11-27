'use client'

import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import cx from 'classnames'

export default function Menu () {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return(
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href='/news'>ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href='/members'>メンバー</Link>
          </li>
          <li className={styles.item}>
            <Link href='/contact'>お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src='/close.svg'
            alt='閉じる'
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image
          src='/menu.svg'
          alt='メニュー'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}