const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'You Are Beautiful',
        artist: 'James Blunt',
        url: 'http://www.ytmp3.cn/down/53969.mp3',
        cover: 'http://pjvbe4vjy.bkt.clouddn.com/james.jpg',
      },
      {
        name: "Let Her Go",
        artist: 'Passenger',
        url: 'http://www.ytmp3.cn/down/49652.mp3',
        cover: 'http://pjvbe4vjy.bkt.clouddn.com/passenger.jpg',
      },
      {
        name: 'Without You',
        artist: 'Avicii',
        url: 'http://www.ytmp3.cn/down/51095.mp3',
        cover: 'http://pjvbe4vjy.bkt.clouddn.com/avicii.png',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://pjvbe4vjy.bkt.clouddn.com/%E9%A3%8E%E7%AD%9D%E8%AF%AF.jpg',
      }
    ]
});