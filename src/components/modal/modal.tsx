import { ReactNode, TouchEventHandler } from 'react'
import styles from './style.module.css'
import { Button } from '../button/button'
import { CrossIcon } from '../icons/crossIcon'
import { createPortal } from 'react-dom'

type TModalProps = {
  children: ReactNode
  closeModal: TouchEventHandler<HTMLDivElement | HTMLButtonElement>
}

const modal = document.getElementById('modal') as HTMLDivElement

export const Modal = ({children, closeModal}: TModalProps) => {
  return createPortal (
    <div className={styles.modalContainer}>
      <div className={styles.modalbutton}>
        <Button onTouchStart={closeModal}>
          <CrossIcon/>
        </Button>
      </div>
      {children}
    </div>,
    modal
  )
}
