import { useEffect, useState } from 'react'

const PREFIX = 'gamecode-' // Unique prefix that can be recognised

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)

    // Check if we have data, or if data exists then return as our default value
    if (jsonValue != null) return JSON.parse(jsonValue)

    // If the above is invalid
    if (typeof initialValue === 'function') { // Check if it's a function
      return initialValue() // return that function
    } else {
      return initialValue // Otherwise, return the initialValue
    }
  })

  // Next, get value and save it to our local storage
  useEffect(() => {
    // Anytime that our value or prefixedKey changes, put that value in the local storage
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
