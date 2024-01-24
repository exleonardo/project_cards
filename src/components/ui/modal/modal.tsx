import { PropsWithChildren } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  open: boolean
  setOpen?: (value: boolean) => void
  title?: string
} & PropsWithChildren

export const Modal = ({ children, open, setOpen, title }: Props) => (
  <Dialog.Root onOpenChange={setOpen} open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay} />
      <div className={s.root}>
        <Dialog.Content className={s.window}>
          <Card className={s.card}>
            <div className={s.header}>
              <Dialog.Title asChild>
                <Typography variant={'h2'}>{title}</Typography>
              </Dialog.Title>

              <Dialog.Close asChild>
                <button className={s.button}>
                  <Icon name={'cross'} width={'22px'} />
                </button>
              </Dialog.Close>
            </div>
            <div className={s.content}>{children}</div>
          </Card>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  </Dialog.Root>
)

export default Modal