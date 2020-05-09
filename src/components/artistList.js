import React from 'react'

export class ArtistList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '8%' }}>
        Bisher hinzugefügt:
        <div>
          {this.props.artists.map(artist => {
            const { node } = artist
            return (
              <div key={node.id}>
                <img
                  src={node.image.url}
                  height={node.image.height/2}
                  width={node.image.height/2}
                  alt={node.name}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
