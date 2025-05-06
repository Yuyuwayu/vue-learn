import axios from 'axios'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

export default function useLogin() {
    const router = useRouter()

    const login = async (username, password) => {
        console.log('Login attempt:', username, password)

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                username,
                password
            }, {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            const data = response.data
            if (data && data.token) {
                Cookies.set('token', data.token, {
                    expires: 7,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'Strict'
                })

                await Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    text: data.message || 'Selamat datang kembali!',
                    timer: 2000,
                    showConfirmButton: false
                })

                router.push('/dashboard')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal',
                    text: data.message || 'Periksa kembali username atau password.',
                })
            }

        } catch (error) {
            const message = error.response?.data?.message || 'Terjadi kesalahan pada server.'
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: message,
            })
            console.error('Login error:', error)
        }
    }

    return { login }
}
