import React, {useState} from 'react';
import ItemList from "../item-list";
import CharacterDetails from "../character-details";

const EpisodesPage = ({getData}) => {
    console.log("page", getData)
    const [selectedCharacter, setSelectedCharacter] = useState(3)
    const onCharacterSelected = (id)=>{
        setSelectedCharacter(id)
    }
    return (
        <div>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onCharacterSelected={onCharacterSelected}
                    getData = {getData}/>
                </div>
                <div className="col-md-6">
                    <CharacterDetails selectedId={selectedCharacter}/>
                </div>

            </div>
        </div>
    );
};

export default EpisodesPage;


