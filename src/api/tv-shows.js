import axios from "axios";
import { Fake_Populars, Fake_Recommendations } from "./Fake_Populars.js";
import { BASE_URL, API_KEY_PARAM } from "./config";
import { genre } from "./genres.js";
export class TVShowAPI {
  static async fetchPopulars() {
    //request the API
    //console.log(`${BASE_URL}movie/popular${API_KEY_PARAM}`)
    const result = await axios(`${BASE_URL}movie/popular${API_KEY_PARAM}`);
    //return the response
    //console.log(result.data.results)
    //console.log(Fake_Populars[0].backdrop_path);
    return result.data.results;
  }

  static async searchShows(param) {
    const result = await axios(
      `${BASE_URL}search/multi${API_KEY_PARAM}&query=${param}`
    );
    //console.log(result.data.results);
    return result.data.results;
  }

  static async getRecommendations(tvShowId) {
    //console.log(`${BASE_URL}movie/${tvShowId}${API_KEY_PARAM}`);
    const result = await axios(
      `${BASE_URL}movie/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    //console.log(result.data.results);
    //console.log(Fake_Recommendations);
    return result.data.results;
  }

  static async getGenreList(id) {
    console.log(`${BASE_URL}/discover/movie${API_KEY_PARAM}&with_genres=${id}`);
    const result = await axios(
      `${BASE_URL}/discover/movie${API_KEY_PARAM}&with_genres=${id}`
    );
    //console.log(result.data.results);
    return result.data.results;
  }
}
