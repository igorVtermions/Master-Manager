import { BtnStyle } from './styles'

export default function Btn({children, ...props}) {
  return (
    <BtnStyle {...props}>{children}</BtnStyle>
  )
}
