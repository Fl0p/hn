import { prisma } from '@/lib/prisma'

async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })
  return users
}

export default async function Home() {
  const users = await getUsers()

  return (
    <main className="container">
      <h1>👋 Hello World!</h1>
      <p>Next.js + TypeScript + Prisma + PostgreSQL</p>
      
      <div className="users">
        <h2>Recent Users ({users.length})</h2>
        {users.length === 0 ? (
          <p>No users yet. Add some via API!</p>
        ) : (
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <strong>{user.name || 'Anonymous'}</strong> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

