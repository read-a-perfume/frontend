import {useState} from 'react'
import TypingContext from '../util/typing-context'
import EditEmailContent from './edit-email-content'
import {useQuery} from '@tanstack/react-query'
import {userQueryKeys} from 'src/react-query-keys/user.keys'
import {fetchCurUser} from 'src/store/server/user/queries'

const EditEmail = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const {data: curUser} = useQuery(userQueryKeys.me, () => fetchCurUser())

  return (
    <TypingContext.Provider value={{isTyping, setIsTyping}}>
      {curUser && <EditEmailContent defaultEmail={curUser.email} />}
    </TypingContext.Provider>
  )
}

export default EditEmail
