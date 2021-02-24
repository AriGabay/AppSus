import { storageService } from '../../../../services/async-storage.service.js';
const MAIL_KEY = 'mailsDB'
const MAIL_SENT = 'sentMailsDB'
const gMails = [
  {
    from: 'AppSus',
    id: 'Ha2Kl4',
    subject: 'Welcome to AppSus Mail!',
    body: 'Congrats! We are so happy to have you aboard... Please enjoy your stay.',
    isRead: true,
    sentAt: 1651133930594
  },
  {
    from: 'Bituah Leumi',
    id: 'huJ28',
    subject: 'Taxes',
    body: 'Hello Shlomo, We are happy to inform you that you are a very lucky man!, You have won a tax free life!',
    isRead: false,
    sentAt: 1551133930594
  },
  {
    from: 'Miphal Hapice',
    id: 'mkAp2',
    subject: 'Wassap? Its harela',
    body: 'Hey there, I need your bank acc. There is a new deposit waiting just for you!, Call me.!',
    isRead: true,
    sentAt: 1651134332594
  },
  {
    from: 'Apple',
    id: 'MlkM9',
    subject: 'Conference Meeting',
    body: 'Tomorrow at 18:00 we are meeting at our offices. All of our employees will be waiting At 17:30 at the conferece room for your brief.',
    isRead: false,
    sentAt: 1599563912318
  },
  {
    from: 'Shufersal',
    id: 'aUJ12',
    subject: 'Delivery',
    body: 'Your Delivery will arrive To your house between the hours 8:00 - 10:00 Please make sure that someone is home.',
    isRead: false,
    sentAt: 1661272920810
  }, {
    from: 'Linkedin',
    id: 'Ai2P3l',
    subject: 'New connection',
    body: 'You have a new connection alert! Meet Eliezer Ben Yehude, QA Human Recruiter',
    isRead: true,
    sentAt: 1491242120210
  }, {
    from: 'Facebook',
    id: 'Pw0m2',
    subject: 'Come Back',
    body: 'Hello there, We havent seen you in our app for a few weeks. Come back!',
    isRead: false,
    sentAt: 1623451229671
  }, {
    from: 'Paolo Groppi',
    id: 'o1M2g',
    subject: 'Sprint Delivery',
    body: 'Hey Yoni And Ary, you guys are the best! your project is the best from all off my teams!',
    isRead: true,
    sentAt: 1627893457122
  },
]

export const mailService = {
  query,
  getmailById,
  addMail,
  updateMailState
}


function updateMailState(state, id) {
  getmailById(id)
    .then(mail => {
      mail.isRead = state
      storageService.put(MAIL_KEY, mail)
    })

}

function addMail(mail) {

  let mailToSave =
  {
    from: 'yonibar1999@gmail.com',
    to: mail.to,
    id: _makeId(),
    subject: mail.subject,
    sentAt: Date.now(),
    body: mail.body
  }
  console.log('before');
  let sentMails = storageService.query(MAIL_SENT)
    .then(mails => {
      if (!mails.length || !mails) {
        mails = []
      }
      mails.push(mailToSave)
      storageService.post(MAIL_SENT, mails)
    })


  // console.log('x');
  // mails.push(mailToSave)
  // console.log(mails);
  // })
}

function query() {
  return storageService.query(MAIL_KEY)
    .then(mails => {
      if (!mails.length) {
        storageService.postMany(MAIL_KEY, gMails)
        return Promise.resolve(gMails)
      } else {
        return Promise.resolve(mails)
      }
    })
}
function getmailById(mailId) {
  return storageService.get(MAIL_KEY, mailId)
}

function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

