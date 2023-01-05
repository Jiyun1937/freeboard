import React from 'react'
const Container = styled.main`
  #wrapper {
    width: 1200px;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <section id='wrapper'>{children}</section>
    </Container>
  )
}

export default Layout
