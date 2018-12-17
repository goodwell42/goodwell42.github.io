const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'You Are Beautiful',
        artist: 'James Blunt',
        url: 'http://www.ytmp3.cn/down/53969.mp3',
        cover: 'http://www.yinyuetai.com/fanclub/photo-detail/8896/154821',
      },
      {
        name: "Let Her Go",
        artist: 'Passenger',
        url: 'http://www.ytmp3.cn/down/49652.mp3',
        cover: ' ',
      },
      {
        name: 'Without You',
        artist: 'Avicii',
        url: 'http://www.ytmp3.cn/down/51095.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});