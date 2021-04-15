import React from 'react'
import { Container } from '@material-ui/core'

export default function MainLayout({ children }) {
  return (
    <Container
      maxWidth="xl"
      disableGutters
    >
      <main>
        <div>
          {children}
        </div>
      </main>
    </Container>
  )
}
