import { MouseEventHandler, ReactNode, TouchEventHandler } from 'react'
import styles from './style.module.css'
import { Button } from '../button/button'
import { CrossIcon } from '../icons/crossIcon'
import { createPortal } from 'react-dom'

type TModalProps = {
  children: ReactNode
  closeModal: TouchEventHandler<HTMLDivElement | HTMLButtonElement>
  closeModalClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const modal = document.getElementById('modal') as HTMLDivElement

export const Modal = ({children, closeModal, closeModalClick}: TModalProps) => {
  return createPortal (
    <div className={styles.modalContainer}>
      <div className={styles.modalbutton}>
        <Button onTouchStart={closeModal} onClick={closeModalClick}>
          <CrossIcon/>
        </Button>
      </div>
      {children}
    </div>,
    modal
  )
}
