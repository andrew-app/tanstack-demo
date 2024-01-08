
import React, { useState, useEffect, useTransition } from "react";
import axios  from "axios";

export const getUsers = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [isError, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/users')
      setUsers(response.data);
      
    }
    catch (error) {
      console.error(error);
      setError(true);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return { users, isLoading, isError }
}