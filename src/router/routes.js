import Hello from '@/views/Hello'
import NextMinyanim from '@/views/NextMinyanim'

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes will then be loaded by the application's router. Each route
| points to a Vue component which is rendered into `router-view`.
|
*/

const routes = [
    { path: '/', component: Hello },
    { path: '/next-minyanim', component: NextMinyanim }
]

export default routes
