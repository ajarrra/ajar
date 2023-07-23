import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../api/fetchUsers'

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res)
    })
  }, [])

  return (
    <div>
      wer
    </div>
  )
}

export default UsersPage