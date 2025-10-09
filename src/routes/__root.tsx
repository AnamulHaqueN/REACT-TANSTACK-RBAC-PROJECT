import { createRootRoute, Outlet } from '@tanstack/react-router'
import * as React from 'react'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  )
}
