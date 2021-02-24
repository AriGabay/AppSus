import mailApp from '../js/apps/app-mail/mail-js/pages/mail-app.cmp.js';
import homePage from '../js/pages/main-home-page.cmp.js';
import noteApp from '../js/apps/app-note/note-js/pages/note-app.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/mail',
    component: mailApp,
  },
  {
    path: '/note',
    component: noteApp,
  },
  //   {
  //     path: '/book',
  //     component: bookApp,
  //   },
  // {
  // path: '/about',
  // component: about,
  // children: [
  //     {
  //         path: 'team',
  //         component: aboutTeam
  //     },
  //     {
  //         path: 'team',
  //         component: aboutTeam
  //     },
  //     {
  //         path: 'services',
  //         component: aboutServices
  //     },
  //     {
  //         path: '/',
  //         component: aboutTeam
  //     },
  // ]
  // },
  //   {
  //     path: '/car/edit/:carId?',
  //     component: carEdit,
  //   },
  //   {
  //     path: '/car/:carId',
  //     component: carDetails,
  //   },
];

export const myRouter = new VueRouter({ routes });
