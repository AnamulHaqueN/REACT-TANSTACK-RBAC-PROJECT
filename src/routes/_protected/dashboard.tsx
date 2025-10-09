import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../../context/AuthContext'

export const Route = createFileRoute('/_protected/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const {user} = useAuth();
  console.log(user);
  return (
    <div className="p-10">
      {user?
      (<>
      <h2 className='text-4xl font-bold mb-2'>Wellcome to {user?.username}</h2>
      <p className="text-white-800">
        Role: Your role is {user?.role}
      </p>
      </>):
      (<>
      <h2 className='text-4xl font-bold mb-2'>Wellcome to Guest User</h2>
      <p className="text-white-800">
        Role: No role assigned to you
      </p>
      </>)
      }
      
    </div>
  )
}
