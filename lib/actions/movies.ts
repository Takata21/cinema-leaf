'use server'

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface DiscoverMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface RequestInit {
    method: string,
    headers: {
        accept: string,
        Authorization: string
    }
}
//   interface DiscoverMoviesResponse {
//     page: number;
//     results: Movie[];
//     total_pages: number;
//     total_results: number;
//   }



export async function fetchDiscoverMovies(): Promise<void> {
    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.APITOKEN || '', // Assuming APITOKEN is a string
        },
    };

    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: DiscoverMoviesResponse = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}