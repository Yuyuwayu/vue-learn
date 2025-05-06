import axios from 'axios'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

export default function useLogin() {
    const router = useRouter()

    const login = async (username, password) => {
        console.log('Login attempt:', username, password)

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                username: username,
                password: password
            }, {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'

                }
            })
            const data = response.data
            if (data && data.token) {
                Cookies.set('token', data.token, { expires: 7, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' })
                alert(data.message)
                console.log('Token:', data.token)
                router.push('/dashboard')
            } else {
                alert(data.message)
            }

        } catch (error) {
            const message = error.response?.data?.message
            alert(message)
            console.error('Login error:', error)
        }
    }

    return { login }
}
