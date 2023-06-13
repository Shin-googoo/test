import axios from 'axios';

export default class FakeYoutube {
  constructor() {
//constructor는 생성할때 아무것도 적지 않아도 된다.
  }

  async search(keyword) { //함수 앞에 #은 프라이빗 함수이다. 외부에서는 함수 호출을 못한다.
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
}

  async #searchByKeyword() {
    return axios
    .get(`/videos/search.json`)
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}