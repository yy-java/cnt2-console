import AppList from 'module/appList/index.vue';
import ProfileList from 'module/profileList/index.vue';
import Configs from 'module/config/index.vue';
import UserList from 'module/user/index.vue';
import Login from 'module/login.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/applist',
    component: AppList,
  },
  {
    path: '/userlist',
    component: UserList,
  },
  {
    path: '/profiles/:app',
    component: ProfileList,
  },
  {
    path: '/configs/:app/:profile',
    component: Configs,
  },
  {
    path: '*',
    redirect: '/applist',
  },
];

export default routes;
