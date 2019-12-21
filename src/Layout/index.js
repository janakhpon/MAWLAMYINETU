import React from 'react'
import { Route } from 'react-router-dom'
import * as routes from '../Routes'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import PageNav from '../Components/Navbar'
import PageHome from '../Components/Home'
import PageRegister from '../Components/Register'


const DContainer = styled.div`
overflow: hidden;
margin: 1rem;
padding: 1rem;
display: flex;
border-radius: 0.1rem;
flex-flow: row wrap;
justify-content: center;
align-items: center;
align-content: center


@media all and (max-width: 800px) {
  overflow:hidden;
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
  height: 60rem;
  display: flex;
  border-radius: 0.8rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center
}

@media all and (max-width: 500px) {
  overflow:hidden;
  overflow: hidden;
  margin: 0.4rem;
  padding: 0.4rem;
  height: 40rem;
  display: flex;
  border-radius: 0.8rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center
}

`

const DCard = styled.div`
border-radius:0.2rem;
flex: 1 1 100%;
align-self: center;

@media all and (max-width: 800px){
  border-radius:0.2rem;
  flex: 1 1 auto;
  align-self: center;
}

@media all and (max-width: 500px){
  border-radius:0.2rem;
  flex: 1 1 auto;
  align-self: center;
}
`
const Layout = () => {
  return (
    <>
      <PageNav />
      <Container maxWidth="xl">
        <DContainer>
          <DCard>
            <Route
              exact
              path={routes.HOME}
              component={() => <PageHome />}
            />
            <Route
              exact
              path={routes.REGISTER}
              component={() => <PageRegister />}
            />
          </DCard>
        </DContainer>
      </Container>
    </>
  )

}

export default Layout