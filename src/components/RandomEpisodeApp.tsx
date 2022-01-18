import React from 'react'
import { EpisodesByArtist } from 'src/types/Episode'
import { KnownArtists } from 'src/types/KnownArtits'
import { AboutSection } from './AboutSection/AboutSection'
import { ArtistList } from './ArtistList/ArtistList'
import { Container } from './Container'
import { MoodImage } from './MoodImage/MoodImage'
import * as indexStyles from './randomEpisode.module.scss'

interface RandomEpisodeProps {
  episodesByArtist: EpisodesByArtist
  knownArtists: KnownArtists
}

export const RandomEpisodeApp = ({
  episodesByArtist,
  knownArtists
}: RandomEpisodeProps) => (
  <div>
    <Container>
      <div className={indexStyles.episodeOverlay}>
        <h2 id="episoden">Zufallsgenerator</h2>
        <p>
          Was sollen wir heute hören? Im Moment stehen{' '}
          <strong>{episodesByArtist.episodeCount} Hörspiele</strong> von{' '}
          <strong>{episodesByArtist.artistCount} Interpreten</strong> zur
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
      <MoodImage image="tape-sized">
        <AboutSection />
      </MoodImage>
    </Container>
  </div>
)
