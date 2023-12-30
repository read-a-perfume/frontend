import { useParams } from "react-router-dom"

const useUserIdParam = () => {
    const {userId} = useParams()
    
    return userId === undefined ? 1 : userId
}

export default useUserIdParam