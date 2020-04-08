import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export const useDarkMode = (so) =>
{



  const [isDark, setIsDark] = useLocalStorage('isDark', so)
  console.log("LocalStorage",localStorage.getItem('isDark'))
  useEffect(() =>
  {
    console.log("isDark", isDark)
    console.log("LocalStorage inside useEffect",localStorage.getItem('isDark'))

    if (JSON.parse(localStorage.getItem('isDark'))===true){
      // add dark mode to body element
      document.body.classList.add("dark-mode")
    }
    else{
      // remove dark from body element if it exists
      document.body.classList.remove("dark-mode")
    }
  },[isDark])

  return [isDark, setIsDark]
}