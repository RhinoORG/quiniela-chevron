import create from 'zustand'
import { persist } from 'zustand/middleware'

import { UserRecovery } from '../types'

interface Store {
  user: {
    user: UserRecovery['body'] | null
    setUser: (user: UserRecovery['body']) => void
    removeUser: () => void
  }
}

const userStoreRecovery = create<Store['user']>()(
  persist((set) => ({
    user: null,
    setUser: (user: UserRecovery['body']) => set({ user: user }),
    removeUser: () => set({ user: null })
  }),
  {
    name: 'user-storage'
  })
)

export { userStoreRecovery }