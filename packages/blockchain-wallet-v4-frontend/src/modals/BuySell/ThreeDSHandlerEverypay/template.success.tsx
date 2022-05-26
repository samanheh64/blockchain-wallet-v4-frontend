import React from 'react'
import styled from 'styled-components'

import { Icon } from 'blockchain-info-components'
import { FlyoutWrapper } from 'components/Flyout'

import { SuccessStateType } from '.'

const CustomFlyoutWrapper = styled(FlyoutWrapper)`
  height: 100%;
`
const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  margin-top: 16px;
`

const Success: React.FC<Props> = (props) => {
  return (
    <CustomFlyoutWrapper>
      <>
        <Icon
          cursor
          name='arrow-left'
          size='20px'
          color='grey600'
          role='button'
          onClick={props.handleBack}
        />
        <Iframe
          src={`${props.domains.walletHelper}/wallet-helper/everypay/#/paymentLink/${props.paymentLink}`}
        />
      </>
    </CustomFlyoutWrapper>
  )
}

type Props = SuccessStateType & { handleBack: () => void; paymentLink: string }

export default Success
