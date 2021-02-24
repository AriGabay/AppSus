import { storageService } from '../../../../services/async-storage.service.js';
const MAIL_KEY = 'mailsDB'
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
  },
]

export const mailService = {
  query,
  getmailById,
  // createMail
}

// function createMail(){

// }

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

