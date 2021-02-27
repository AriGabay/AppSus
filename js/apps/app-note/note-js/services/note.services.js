import { storageService } from '../../../../services/async-storage.service.js';
const gNotes = [
  {
    id: makeId(),
    type: 'noteTxt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: makeId(),
    type: 'noteTxt',
    isPinned: false,
    info: {
      txt: 'Hiiii Baby!',
    },
  },
  {
    id: makeId(),
    type: 'noteImg',
    info: {
      url: 'https://freevector-images.s3.amazonaws.com/uploads/vector/preview/37150/37150.png',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: 'rgb(255, 153, 153,0.4)',
    },
    isPinned: false,
  },
  {
    id: makeId(),
    type: 'noteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', id: makeId(), doneAt: null },
        { txt: 'Do this', id: makeId(), doneAt: 187111111 },
        { txt: 'Do !', id: makeId(), doneAt: 187111111 },
      ],
    },
    isPinned: false,
  },
  {
    id: makeId(),
    type: 'noteVideo',
    info: {
      label: 'what we watch..?',
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    isPinned: false,
  },
];

export const noteServices = {
  query,
  updateNote,
  makeId,
  saveNewNote,
  removeNote,
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
function updateNote(newNote) {
  return storageService.put(NOTES_KEY, newNote).then((res) => {});
}

function makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
function saveNewNote(newEntities) {
  return storageService.post(NOTES_KEY, newEntities).then((note) => {
    return note;
  });
}
function removeNote(id) {
  return storageService.remove(NOTES_KEY, id).then((res) => {
    return res;
  });
}
