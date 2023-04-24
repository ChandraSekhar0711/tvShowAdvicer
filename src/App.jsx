import React, { useEffect, useState } from "react";
import s from "./style.module.css"
import "./App.css";
import { TVShowAPI } from "./api/tv-shows.js"
import { BACKDROP_BASE_URL } from "./api/config";
import { TvShowDetails } from "./components/TVShowDetails/TvShowDetails";
import { ShowRecommendation } from "./components/ShowRecommendations/ShowRecommendation";
import { Logo } from "./components/Logo/Logo";
import { TvShowList } from "./components/TvShowList/TvShowList";
import { Genres } from "./components/Genres/Genres";


function App() {
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendations, setRecommendations] = useState();
    const [genresList, setGenresList] = useState();
    async function fetchPopular() {
        const popularShow = await TVShowAPI.fetchPopulars();
        //console.log(popularShow[0].backdrop_path);
        if (popularShow.length > 0) {
            setCurrentTVShow(popularShow[0]);
        }
    }
    useEffect(() => {
        fetchPopular();
    }, []);

    const searchShow = (event) => {
        const show = event.target.value;
        async function showSearch() {
            const search = await TVShowAPI.searchShows(show);
            if (search.length > 0) {
                setCurrentTVShow(search[0]);
                //setRecommendations(search.slice(0, 10));
            }
        }
        showSearch();
    }
    //console.log(currentTVShow);
    async function fetchRecommendations(showId) {
        const recommendationList = await TVShowAPI.getRecommendations(showId);
        //console.log(recommendationList);
        if (recommendationList.length > 0) {
            //console.log("genresList:\t", genresList);
            setRecommendations(recommendationList.slice(0, 10));
        }
    }

    function updateRecommendations(tvShow) {
        //console.log(tvShow);
        setCurrentTVShow(tvShow);
    }
    useEffect(() => {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow])

    //console.table(recommendations);

    function getGenreItems(genre) {
        //console.log(genre.id);
        fetchGenreList(genre.id)
    }
    async function fetchGenreList(id) {
        const list = await TVShowAPI.getGenreList(id);
        //console.log(list);
        if (list.length > 0) {
            //console.log(list[0])

            setCurrentTVShow(list[0])
            setGenresList(list)
            //console.log("genreList:", genresList);
            //setRecommendations(list.slice(0, 10));
        }
    }

    //console.log("genreList:",genresList.length);
    return (
        <div className={s.main_container}
            style={{
                background: currentTVShow
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black",

            }}
        >

            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={""} title="What2Watch" subtitle="Find A Show What You Like" />
                    </div>

                    <div className="col-md-12 col-lg-4">
                        <input style={{ width: "70%", opacity: 0.2 }} type="Search" onChange={searchShow} />
                    </div>

                    <div className={s.genredetails}>
                        <Genres onGenreClick={getGenreItems} />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TvShowDetails tvShow={currentTVShow} />}
            </div>
            <div className={s.recommended_tv_shows}>
                {recommendations && <TvShowList
                    onClickShow={updateRecommendations}
                    tvShowList={recommendations} />}
            </div>

            

        </div>
    );
}

export default App;