const data = {
  comics: [
    {
      id: 0,
      owner: 0,
      title: '유미의 세포들',
      descriptions: '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ',
      imageUrl: '/static/example/featured.jpg',
      likes: 102,
      status: 'OPEN',
      cuts: [
        {
          id: 0,
          parent: null,
          title: '유미의 세포들 #0',
          descriptions: '',
          imageUrl: '/static/example/single_01.jpg'
        },
        {
          id: 1,
          parent: 0,
          title: '유미의 세포들 #1',
          descriptions: '',
          imageUrl: '/static/example/single_02.jpg'
        },
        {
          id: 2,
          parent: 0,
          title: '유미의 세포들 #2',
          descriptions: '',
          imageUrl: '/static/example/single_03.jpg'
        },
        {
          id: 3,
          parent: 0,
          title: '유미의 세포들 #3',
          descriptions: '',
          imageUrl: '/static/example/single_04.jpg'
        },
        {
          id: 4,
          parent: 2,
          title: '유미의 세포들 #4',
          descriptions: '',
          imageUrl: '/static/example/single_05.jpg'
        },
        {
          id: 5,
          parent: 2,
          title: '유미의 세포들 #5',
          descriptions: '',
          imageUrl: '/static/example/single_06.jpg'
        },
        {
          id: 6,
          parent: 3,
          title: '유미의 세포들 #6',
          descriptions: '',
          imageUrl: '/static/example/single_07.jpg'
        },
        {
          id: 7,
          parent: 6,
          title: '유미의 세포들 #7',
          descriptions: '',
          imageUrl: '/static/example/single_08.jpg'
        }
      ]
    },
    {
      id: 1,
      owner: 1,
      title: '유미의 세포들',
      descriptions: '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ',
      imageUrl: '/static/example/featured.jpg',
      cuts: []
    }
  ],
  users: [
    {
      id: 0,
      email: 'reumia@gmail.com',
      name: 'REUMIA'
    },
    {
      id: 1,
      email: 'zzo.skt@sk.com',
      name: 'ZZOMAN'
    }
  ]
}

export default data
