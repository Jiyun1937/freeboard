import React from 'react'
import styled from '@emotion/styled'

const Container = styled.main`
  padding-bottom: 300px;
  #wrapper {
    width: 1200px;
    margin: 0 auto;
  }
`

export const Layout = ({ children }) => {
  return (
    <Container>
      <section id='wrapper'>{children}</section>
    </Container>
  )
}
