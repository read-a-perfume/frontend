import {useState} from 'react'
import TypingContext from '../util/typing-context'
import EditEmailContent from './edit-email-content'
import {useQuery} from '@tanstack/react-query'
import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {fetchUserProfile} from 'src/store/server/auth/queries'

const EditEmail = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const {data: curUser} = useQuery(authQueryKeys.userProfile, () =>
    fetchUserProfile(),
  )

  return (
    <TypingContext.Provider value={{isTyping, setIsTyping}}>
      {curUser && <EditEmailContent defaultEmail={curUser.email} />}
    </TypingContext.Provider>
  )
}

export default EditEmail
