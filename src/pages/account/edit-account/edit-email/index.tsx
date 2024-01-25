import {useState} from 'react'
import TypingContext from '../util/typing-context'
import EditEmailContent from './edit-email-content'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'

const EditEmail = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const {data:curUser} = useFetchAuthProfile()

  return (
    <TypingContext.Provider value={{isTyping, setIsTyping}}>
      {curUser && <EditEmailContent defaultEmail={curUser.email} />}
    </TypingContext.Provider>
  )
}

export default EditEmail
