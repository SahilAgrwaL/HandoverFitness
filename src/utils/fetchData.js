export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '80213fbaf5msh848fb9069ee8a87p15d156jsn573f74ab5542',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }; 

  export const youtubeOptions = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    // // params: {
    //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
    // },
    headers: {
      'X-RapidAPI-Key': '80213fbaf5msh848fb9069ee8a87p15d156jsn573f74ab5542',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData=async(url, options)=>{
        const response = await fetch (url, options);
        const data = await response.json();
        
        return data;
}