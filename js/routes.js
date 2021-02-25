import mailApp from '../js/apps/app-mail/mail-js/pages/mail-app.cmp.js';
import mailMain from '../js/apps/app-mail/mail-js/pages/mail-main.cmp.js';
import mailDetails from '../js/apps/app-mail/mail-js/pages/mail-details.cmp.js';
import mailCompose from './apps/app-mail/mail-js/cmps/mail-compose.cmp.js';
import mailSent from '../js/apps/app-mail/mail-js/pages/mail-sent-list.cmp.js';
import mailHome from '../js/apps/app-mail/mail-js/pages/mail-home.cmp.js';
import mailTrashed from '../js/apps/app-mail/mail-js/pages/mail-trashed.cmp.js';

// import noteEdit from './apps/app-note/note-js/pages/note-edit.cmp.js';

import homePage from '../js/pages/main-home-page.cmp.js';
import noteApp from '../js/apps/app-note/note-js/pages/note-app.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/mail',
    component: mailMain,
    children: [
      // {
      //   path: '/mail',
      //   component: mailHome
      // },
      {
        path: '/mail',
        component: mailApp,
      },
      {
        path: '/mail/compose',
        component: mailCompose,
      },
      {
        path: '/mail/sent',
        component: mailSent,
      },
      {
        path: '/mail/trashed',
        component: mailTrashed,
      },
      {
        path: '/mail/:mailId?',
        component: mailDetails,
      },
    ],
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
