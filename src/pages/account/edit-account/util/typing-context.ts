import {Dispatch, SetStateAction, createContext} from 'react'

const TypingContext = createContext<{
  isTyping: boolean
  setIsTyping: Dispatch<SetStateAction<boolean>>
}>({isTyping: false, setIsTyping: () => {}})

export default TypingContext
