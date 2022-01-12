import React from 'react'
import * as aboutSectionStyles from './aboutSection.module.scss'

export const AboutSection = () => (
  <div className={aboutSectionStyles.container}>
    <h2 id="about">Über random episode</h2>
    <p>Du kennst das doch auch!</p>
    <p>
      Du liegst eigentlich schon komplett erledigt im Bett, doch es gibt diesen
      einen Gedanken, der dich wach hält. Oder du willst endlich mal wieder das
      Bad so richtig sauber machen oder ein aufwendiges Abendessen kochen. Doch
      bevor du beginnst denkst du: "Hier fehlt doch noch etwas?!"
    </p>
    <p>
      Wenn du den Weg auf diese Website gefunden hast, fehlt dir zum Einschlafen
      oder zur Bewältigung der kleinen und großen Aufgaben des Alltags
      wahrscheinlich oft das passende Hörspiel. Und da auch ich oft nicht weiß,
      welche Folge meiner liebsten Hörspielreihe ich abspielen soll, habe ich
      "random episode" entwickelt, das mir diese schwierige Entscheidung in
      Zukunft abnehmen wird. Wenn random episode auch dir eine Hilfe sein kann -
      umso besser!
    </p>
    <p>
      Und so funktioniert's: Klicke entweder auf den "Überrasch mich"-Button und
      random episode schlägt dir aus allen bisher bekannten Hörspielen eine
      Folge vor. Mit einem Klick auf die entsprechende Hörspiel-Kachel, kannst
      du dir aber auch direkt eine Folge deiner Lieblingsreihe vorschlagen
      lassen. Und sollte dir der Vorschlag nicht gefallen, kannst du dir direkt
      eine andere Folge aus der selben Reihe vorschlagen lassen. Wenn dir etwas
      Passendes vorgeschlagen wurde, klicke auf das Episodencover und du wirst
      direkt zum jeweiligen Album auf Spotify weitergeleitet.
    </p>
    <p>Viel Spaß mit random episode!</p>
  </div>
)
