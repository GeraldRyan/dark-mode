import {useLocalStorage} from './useLocalStorage'



export const useDarkMode = (key, initialValue) =>
{
  const [person, setPerson] = useLocalStorage('person', "NeliPetkova")
  const [isDark, setIsDark] = useLocalStorage('isDark', "True")

}