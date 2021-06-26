import React from 'react'
import styled from 'styled-components'
import {  Card, CardHeader, CardBody, Text, Button, Link, Flex, ArrowDownIcon } from 'floki-uikit'
import Container from 'components/Container'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
// import FAQ from './FAQ'

const Wrapper = styled.div`
  max-width: 436px;
  width: 100%;
  z-index: 5;
`

const ArrowSeparator = () => (
  <Flex justifyContent="center" my="24px">
    <ArrowDownIcon color="textSubtle" width="24px" />
  </Flex>
)

const Migration = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FirstCard />
          <ArrowSeparator />
          <SecondCard />
          <ArrowSeparator />
          <Card mb="32px">
            <CardHeader>
              <Text bold>Add Liquidity to new Liquidity Pools</Text>
              <Text small color="textSubtle">
                Stake your tokens in the updated Liquidity Pools
              </Text>
            </CardHeader>
            <CardBody>
              <Text mb="24px">Any new liquidity you add will use the updated system by default. Simple!</Text>
              <Button as={Link} external href="https://exchange.flokidoge.com/#/pool" style={{ width: '100%' }}>
                Add liquidity
              </Button>
            </CardBody>
          </Card>
          <ArrowSeparator />
          <Card>
            <CardHeader>
              <Text bold>Stake in New Farms</Text>
              <Text small color="textSubtle">
                Stake your updated LP tokens in Floki farms
              </Text>
            </CardHeader>
            <CardBody>
              <Text mb="24px">
                If you are able to stake in a farm with your new LP tokens, that means it’s the updated type. Stake as
                usual and you’re done!
              </Text>
              <Button as={Link} external href="https://flokidoge.com/farms" style={{ width: '100%' }}>
                Go to farms
              </Button>
            </CardBody>
          </Card>
        </Wrapper>
      </Container>
      {/* <FAQ /> */}
    </>
  )
}

export default Migration
