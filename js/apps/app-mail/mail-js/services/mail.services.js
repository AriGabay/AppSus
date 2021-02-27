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
    isStar: true,
  },
  {
    from: 'Bituah Leumi',
    id: 'huJ28',
    subject: 'Taxes',
    body: 'Hello Shlomo, We are happy to inform you that you are a very lucky man!, You have won a tax free life!',
    isRead: false,
    sentAt: 1551133930594,
    isDeleted: true,
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
    isStar: true,
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
    isStar: true,
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
    from: 'linkedin',
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
    sentAt: 158742353179,
    isDeleted: false,
    isStar: false,
  },
  {
    from: 'Rotem Carmon',
    id: 'u2mLv',
    subject: 'Course Schedule',
    body:
      'Good luck our course, Every day from 8:30 - 04:30, if you wont die untill the end we guarantee 60% of our people will reach their 40s ',
    isRead: false,
    sentAt: 1614108454162,
    isDeleted: true,
    isStar: false,
  },
  {
    from: 'linkedin',
    id: '0M2sN',
    subject: 'New job alert!',
    body: 'New Job alert neer Kfar Tavor, Come on and give a shot!',
    isRead: false,
    sentAt: 1649529583452,
    isDeleted: true,
    isStar: false,
  },
  {
    from: 'Instagram',
    id: 'U27Ka',
    subject: 'Congratz!',
    body: 'You have reached 1M Followers!',
    isRead: false,
    sentAt: 1667407149549,
    isDeleted: false,
    isStar: true,
  },
  {
    from: 'Puki ben david',
    id: 'p0M2K',
    subject: 'Hello',
    body: 'Hey bro, im surfing at New Zealand, wanna join?! here is my phone number((555)-929-4992), call Me',
    isRead: false,
    sentAt: 1540973124606,
    isDeleted: true,
    isStar: false,
  },
];

export const mailService = {
  query,
  getmailById,
  addMail,
  updateMailState,
  updateMail,
  starMail,
  deleteMail,
};

function updateMailState(state, id) {
  getmailById(id).then((mail) => {
    mail.isRead = state;
    storageService.put(MAIL_KEY, mail);
  });
}
function updateMail(mail) {
  return storageService.put(MAIL_KEY, mail).then((mails) => {
    return Promise.resolve(mails);
  });
}

function deleteMail(mail) {
  return storageService.remove(MAIL_KEY, mail.id).then((res) => Promise.resolve());
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
  storageService.query(MAIL_KEY).then((mails) => {
    mails.push(mailToSave);
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
