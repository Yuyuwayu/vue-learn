<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-white to-purple-300 px-4">
    <LoginForm :modelValue="form" @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import useLogin from '@/composables/useLogin'
import LoginForm from '@/components/forms/LoginForm.vue'

const form = reactive({
  username: '',
  password: ''
})

const { login } = useLogin()

const handleSubmit = () => {
  login(form.username, form.password)
}
</script>
