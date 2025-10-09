import { createFileRoute, Navigate } from '@tanstack/react-router'
import ProtectedRoutes from '../../components/ProtectedRoutes'

export const Route = createFileRoute('/_protected/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProtectedRoutes allowGuest>
      <Navigate to="/dashboard"></Navigate>
    </ProtectedRoutes>
  )
}
