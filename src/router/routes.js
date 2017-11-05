import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import Minyanim from '@/views/Minyanim'
import Houses from '@/views/Houses'

export default [
    { path: '/', component: Welcome },
    { path: '/login', component: Login },
    { path: '/next-minyanim', component: Minyanim },
    { path: '/shiva-houses', component: Houses }
]
