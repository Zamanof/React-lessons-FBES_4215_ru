export default class RMService{
    _base_url = 'https://rickandmortyapi.com/api/'

    async getResource(url){
        const result =
            await fetch(`${this._base_url}${url}`)
        if (!result.ok){
            throw new Error(`Error: Status code ${result.status}`)
        }
        return await result.json()
    }

    async getEpisodeById(id){
        const episode = await this.getResource(`episode/${id}`)
        return await episode
    }

    async getOMDBData(season, episode){
        const omdbData =
            await fetch(`https://www.omdbapi.com/?t=Rick&Morty&Season=${season}&Episode=${episode}&apikey=124df000`)
        return await omdbData.json()
    }

    async getCharacterByID(id){
        const character =
            await this.getResource(`character/${id}`)
        return character
    }
}