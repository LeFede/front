import styles from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode[] | React.ReactNode
  onAccept: () => void
  onCancel: () => void
  onClose: () => void
  onOutsideClick: () => void
  open: boolean
  title: string
  leftButton: string
  rightButton: string
}

export const Modal = ({
  children,
  onAccept,
  onCancel,
  onClose,
  onOutsideClick,
  open,
  title,
  leftButton,
  rightButton,
}: ModalProps) => {
  return (
    <>
      <dialog id="modal-example" open={open} className={styles.dialog}>
        <div className={styles.bg} onClick={onOutsideClick}></div>
        <article className={styles.modal}>
          {onClose != null && (
            <a
              href="#close"
              aria-label="Close"
              className="close"
              data-target="modal-example"
              onClick={onClose}
            ></a>
          )}

          <h3>{title}</h3>

          {children}

          <footer>
            {onCancel != null && (
              <a
                href="#cancel"
                role="button"
                className="secondary"
                data-target="modal-example"
                onClick={onCancel}
              >
                {leftButton}
              </a>
            )}

            {onAccept != null && (
              <a
                href="#confirm"
                role="button"
                data-target="modal-example"
                onClick={onAccept}
              >
                {rightButton}
              </a>
            )}
          </footer>
        </article>
      </dialog>
    </>
  )
}
