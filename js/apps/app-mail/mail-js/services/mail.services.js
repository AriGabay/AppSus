import { storageService } from '../../../../services/async-storage.service.js';
const MAIL_KEY = 'mailsDB';
const gMails = [
  {
    from: 'AppSus',
    id: 'Ha2Kl4',
    subject: 'Welcome to AppSus Mail!',
    body: 'Congrats! We are so happy to have you aboard... Please enjoy your stay.',
    isRead: true,
    sentAt: 1651133930594,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Bituah Leumi',
    id: 'huJ28',
    subject: 'Taxes',
    body: 'Hello Shlomo, We are happy to inform you that you are a very lucky man!, You have won a tax free life!',
    isRead: false,
    sentAt: 1551133930594,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Miphal Hapice',
    id: 'mkAp2',
    subject: 'Wassap? Its harela',
    body: 'Hey there, I need your bank acc. There is a new deposit waiting just for you!, Call me.!',
    isRead: true,
    sentAt: 1651134332594,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Apple',
    id: 'MlkM9',
    subject: 'Conference Meeting',
    body:
      'Tomorrow at 18:00 we are meeting at our offices. All of our employees will be waiting At 17:30 at the conferece room for your brief.',
    isRead: false,
    sentAt: 1599563912318,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Shufersal',
    id: 'aUJ12',
    subject: 'Delivery',
    body:
      'Your Delivery will arrive To your house between the hours 8:00 - 10:00 Please make sure that someone is home.',
    isRead: false,
    sentAt: 1661272920810,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Linkedin',
    id: 'Ai2P3l',
    subject: 'New connection',
    body: 'You have a new connection alert! Meet Eliezer Ben Yehude, QA Human Recruiter',
    isRead: true,
    sentAt: 1491242120210,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Facebook',
    id: 'Pw0m2',
    subject: 'Come Back',
    body: 'Hello there, We havent seen you in our app for a few weeks. Come back!',
    isRead: false,
    sentAt: 1623451229671,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Paolo Groppi',
    id: 'o1M2g',
    subject: 'Sprint Delivery',
    body: 'Hey Yoni And Ary, you guys are the best! your project is the best from all off my teams!',
    isRead: true,
    sentAt: 1627893457122,
    isDeleted: false,
    isStar: false,
  },
];

export const mailService = {
  query,
  getmailById,
  addMail,
  updateMailState,
  deleteMail,
  starMail,
};

function updateMailState(state, id) {
  getmailById(id).then((mail) => {
    mail.isRead = state;
    storageService.put(MAIL_KEY, mail);
  });
}
function deleteMail(mail) {
  return storageService.put(MAIL_KEY, mail).then((mails) => {
    return Promise.resolve(mails);
  });
  // storageService.remove(MAIL_KEY, id)
  //   .then(res => {
  //     console.log(res)
  //   })
  // return Promise.resolve(mails)
}

function starMail(mail) {
  return storageService.put(MAIL_KEY, mail).then((mails) => {
    return Promise.resolve(mails);
  });
}

function addMail(mail) {
  let mailToSave = {
    from: 'yonibar1999@gmail.com',
    to: mail.to,
    subject: mail.subject,
    sentAt: Date.now(),
    body: mail.body,
    isSent: true,
    isDeleted: false,
    isStar: false,
  };
  console.log(mailToSave);
  storageService.query(MAIL_KEY).then((mails) => {
    console.log(mails, 'before');
    mails.push(mailToSave);
    console.log(mails, 'after');
    storageService.post(MAIL_KEY, mailToSave);
  });
}

function query() {
  return storageService.query(MAIL_KEY).then((mails) => {
    if (!mails.length) {
      storageService.postMany(MAIL_KEY, gMails);
      return Promise.resolve(gMails);
    } else {
      return Promise.resolve(mails);
    }
  });
}
function getmailById(mailId) {
  return storageService.get(MAIL_KEY, mailId);
}

function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
