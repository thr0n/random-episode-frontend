import React, { useState } from 'react';

const defaultState = {
  artistSelection: [],
  setArtistSelection: () => {},
  randomEpisodeUrl: null,
  setRandomEpisodeUrl: () => {}
}

export const myContext = React.createContext(defaultState);

const Provider = props => {
  const [artistSelection, setArtistSelection] = useState([]);
  const [randomEpisodeUrl, setRandomEpisodeUrl] = useState(null);

  return (
    <myContext.Provider value={{
      artistSelection,
      setArtistSelection: (currentSelection) => setArtistSelection(currentSelection),
      randomEpisodeUrl,
      setRandomEpisodeUrl: (newValue) => setRandomEpisodeUrl(newValue)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
