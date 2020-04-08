import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export const useDarkMode = () =>
{
  // let theBody = document.getElementsByTagName('body')


  const [isDark, setIsDark] = useLocalStorage('isDark', false)
  useEffect(() =>
  {
    console.log(isDark)

    if (localStorage.getItem('isDark')===true){
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