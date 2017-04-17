/**
 * Created by Administrator on 2017/4/16.
 */
import Home from './components/Home.vue';
import News from './components/News.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Detail from './components/Detail.vue';

export default {
    'home': {
        component: Home,
        subRoutes: {
            'login': {
                component: Login
            },
            'register': {
                component: Register
            }
        }
    },
    'news': {
        component: News,
        subRoutes: {
            'detail/:id': {
                component: Detail
            }
        }
    }
}