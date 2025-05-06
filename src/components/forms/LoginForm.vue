<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-white to-purple-300 px-4">
    <form @submit.prevent="handleSubmit" class="w-full max-w-md space-y-6 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50"><h1 class="text-3xl font-bold text-center text-gray-900 drop-shadow">Login</h1>

      <div>
        <label class="block text-sm font-semibold text-gray-800 mb-1">Username</label>
        <input
            v-model="username"
            type="text"
            placeholder="Enter your Username"
            class="w-full px-4 py-2 rounded-lg bg-white/80 placeholder-gray-500 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-800 mb-1">Password</label>
        <input
            v-model="password"
            type= "password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 rounded-lg bg-white/80 placeholder-gray-500 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button type="submit"
              class="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-100 transition duration-300">
        Sign In
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

const username = ref('')
const password = ref('')
const { login } = useLogin()

const handleSubmit = () => {
  login(username.value, password.value)
}
</script>
