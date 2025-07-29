'use client'

import { useEffect, useState } from 'react'
import { UserProfile } from '../types/UserProfile'

export default function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/users/profile', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized')
        return res.json()
      })
      .then(json => {
        console.log('User profile:', json)
        setProfile(json.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return { profile, loading }
}
