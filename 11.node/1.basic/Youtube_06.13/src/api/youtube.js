import axios from 'axios';

export default class Youtube {
  constructor() {
//constructor는 생성할때 아무것도 적지 않아도 된다.
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/uoutube/v3',
      params: { key: Process.env.REACT_APP_YOUTUBE_API_KEY },
    })
  }

  async search(keyword) { //함수 앞에 #은 프라이빗 함수이다. 외부에서는 함수 호출을 못한다.
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
}

  async #searchByKeyword(keyword) {
    return this.httpClient
    .get('search', {params: {
      part: 'snippet',
      maxResults: 25,
      type:'video',
      q: keyword
      },
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return this.httpClient
    .get('videos', {params: {
      part: 'snippet',
      maxResults: 25,
      chart: 'mostPopular',
      },
    }).then((res) => res.data.items);
  }
}