import React from 'react'
import { Container } from '../components/container'
import { ArtistList } from '../components/artistList'
import { MoodImage } from '../components/moodImage'
import tape from '../images/tape-large.jpeg'
import { AboutSection } from '../components/AboutSection/AboutSection'
// import { BackToTop } from '../components/backToTop'
import { KnownArtist } from '../types/KnownArtits'
import { Episode } from '../types/Episode'
import * as indexStyles from './randomEpisode.module.scss'

export interface EpisodesByArtist {
  totalCount: number
  group: [{ artistName: string; edges: Episode[] }]
}

export interface KnownArtists {
  totalCount: number
  edges: KnownArtist[]
}

interface RandomEpisodeProps {
  data: {
    episodesByArtist: EpisodesByArtist
    knownArtists: KnownArtists
  }
}

export const RandomEpisodeApp = ({ data }: RandomEpisodeProps) => {
  const { episodesByArtist, knownArtists } = data
  return (
    <div>
      <Container>
        <div className={indexStyles.episodeOverlay}>
          <h2 id="episoden">Zufallsgenerator</h2>
          <p>
            Was sollen wir heute hören? Im Moment stehen{' '}
            <strong>{episodesByArtist.totalCount} Hörspiele</strong> von{' '}
            <strong>{episodesByArtist.group.length} Interpreten</strong> zur
            Auswahl.
          </p>
          <p>
            Klicke auf eine bestimmte Kachel oder lass dich einfach überraschen!
          </p>
          <ArtistList
            episodesByArtist={episodesByArtist}
            knownArtists={knownArtists}
          />
        </div>
        <MoodImage image={tape}>
          <AboutSection />
        </MoodImage>
      </Container>
    </div>
  )
}
