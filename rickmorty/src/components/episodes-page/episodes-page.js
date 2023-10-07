import React, {useState} from 'react';
import ItemList from "../item-list";
import CharacterDetails from "../character-details";

const EpisodesPage = ({getData}) => {
    const [selectedEpisode, setSelectedEpisode] = useState(3)
    const onEpisodeSelected = (id)=>{
        setSelectedEpisode(id)
    }
    return (
        <div>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onEpisodeSelected={onEpisodeSelected}
                    getData = {getData}/>
                </div>
                <div className="col-md-6">
                    <CharacterDetails selectedId={selectedEpisode}/>
                </div>
            </div>
        </div>
    );
};

export default EpisodesPage;


