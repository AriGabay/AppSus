import { storageService } from '../../../app-main/main-js/services/async-storage.service.js';
const gNotes = [
  {
    type: 'NoteTxt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    type: 'NoteImg',
    info: {
      url: 'http://some-img/me',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    type: 'NoteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
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
  return storageService.query(NOTES_KEY);
}
