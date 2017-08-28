import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import NextMinyanim from '@/views/NextMinyanim'
import Houses from '@/views/Houses'

export default [
    { path: '/', component: Welcome },
    { path: '/login', component: Login },
    { path: '/next-minyanim', component: NextMinyanim },
    { path: '/shiva-houses', component: Houses }
]
