export const messages = [
  {
    userId: 1,
    fromSelf: true,
    message: 'jjuud kjikiuiu sjjiuiu',
    image: 'assets/stream.png',
  },
  {
    userId: 1,
    fromSelf: false,
    message: 'jtitorito oieroirtit',
    image: '',
  },
];

export const getAllMessages = currentUser => {
  return messages.map(message => message.userId === currentUser);
};
