import {IfUserType} from 'types/user.interface'
import {createContext, useState} from 'react'
import ProfileTypeContent from './protile-type-content'

interface proptype {
  data: IfUserType[]
  flag: boolean
}

interface ContextType {
  data: IfUserType[]
  flag: boolean
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TypeContext = createContext<ContextType>({
  data: [],
  flag: false,
  isOpen: false,
  setIsOpen: () => {},
})

const ProfileType = ({data, flag}: proptype) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <TypeContext.Provider value={{data, flag, isOpen, setIsOpen}}>
      <ProfileTypeContent />
    </TypeContext.Provider>
  )
}

export default ProfileType
