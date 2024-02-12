import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './button-footer.module.scss'

type Props = {
  className?: string
  fullWidth?: boolean
  onClickCancel?: () => void
  onClickConfirm?: () => void
  option?: number
  titleCancel?: string
  titleConfirm?: string
}
export const ButtonFooter = ({
  className,
  fullWidth = false,
  onClickCancel,
  onClickConfirm,
  option = 1,
  titleCancel = 'Cancel',
  titleConfirm = 'Save',
}: Props) => {
  const classes = clsx(option == 1 && s.buttonSingle, option === 2 && s.buttonGroup, className)

  return (
    <div className={classes}>
      {option === 2 && (
        <Button fullWidth={fullWidth} onClick={onClickCancel} variant={'secondary'}>
          <Typography variant={'subtitle2'}>{titleCancel}</Typography>
        </Button>
      )}
      <Button fullWidth={fullWidth} onClick={onClickConfirm}>
        <Typography variant={'subtitle2'}>{titleConfirm}</Typography>
      </Button>
    </div>
  )
}
