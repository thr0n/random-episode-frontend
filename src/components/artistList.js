import React from 'react'
import { Link } from 'gatsby'
import { ArtistTile } from './artistTile'
import listStyles from './artistList.module.scss'
import { chooseRandomEpisodeUrl } from '../common/util'
import { myContext } from '../../provider'

export const ArtistList = props => {
  const onTileClick = ({ context, id, isActive }) => {
    const updatedSelection = context.artistSelection.map(artist => {
      return artist.node.id === id ? { ...artist, isActive: !isActive } : artist
    })
    context.setArtistSelection(updatedSelection)

    const filteredEpisodes = filterEpisodes(
      updatedSelection
        .filter(artist => artist.isActive)
        .map(artist => artist.node.name)
    )
    const flattenedEpisodes = flattenEpisodes(filteredEpisodes)
    context.setRandomEpisodeUrl(chooseRandomEpisodeUrl(flattenedEpisodes))
  }

  const filterEpisodes = selectedArtistNames =>
    props.episodesByArtist
      .filter(artist => selectedArtistNames.includes(artist.artistName))
      .flat()

  const flattenEpisodes = episodes => episodes.map(e => e.edges).flat()

  return (
    <myContext.Consumer>
      {context => {
        if (context.artistSelection.length === 0) {
          context.setArtistSelection(
            props.knownArtists.map(artist =>
              Object.assign(artist, { isActive: true })
            )
          )
          context.setRandomEpisodeUrl(
            chooseRandomEpisodeUrl(flattenEpisodes(props.episodesByArtist))
          )
        }

        return (
          <>
            <Link to={context.randomEpisodeUrl}>Lets go</Link>
            <div className={listStyles.wrapper}>
              {context.artistSelection.map((artist, index) => {
                return (
                  <div>
                    <div key={index} className={listStyles.artistTile}>
                      <ArtistTile
                        artistId={artist.node.id}
                        artistName={artist.node.name}
                        artistImage={artist.node.image}
                        onClick={() =>
                          onTileClick({
                            context,
                            id: artist.node.id,
                            isActive: artist.isActive
                          })
                        }
                        isActive={artist.isActive}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )
      }}
    </myContext.Consumer>
  )
}
