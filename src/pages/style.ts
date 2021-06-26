import styled from 'styled-components'

const CenterCard = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: translateX(-64px);
  }
`

const CardGroup = styled.div`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
`

const ImageCard = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: contents;
  }
`
export { CenterCard, CardGroup, ImageCard }
