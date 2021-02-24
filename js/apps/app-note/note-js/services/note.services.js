import { storageService } from '../../../../services/async-storage.service.js';
const gNotes = [
  {
    id: _makeId(),
    type: 'noteTxt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: _makeId(),
    type: 'noteTxt',
    isPinned: true,
    info: {
      txt: 'Hiiii Baby!',
    },
  },
  {
    id: _makeId(),
    type: 'noteImg',
    info: {
      url: 'https://freevector-images.s3.amazonaws.com/uploads/vector/preview/37150/37150.png',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: _makeId(),
    type: 'noteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
        { txt: 'Do !', doneAt: 187111111 },
      ],
    },
  },
  {
    id: _makeId(),
    type: 'noteVideo',
    info: {
      label: 'what we watch..?',
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  },
];

export const noteServices = {
  query,
  // remove,
  // save,
  // getEmptyCar,
  // getById,
  // getNextCarId
};
const NOTES_KEY = 'notes';

function query() {
  return storageService.query(NOTES_KEY).then((notes) => {
    if (!notes.length) {
      storageService.postMany(NOTES_KEY, gNotes);
      return Promise.resolve(gNotes);
    } else {
      return Promise.resolve(notes);
    }
  });
}

function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
