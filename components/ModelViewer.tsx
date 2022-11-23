import { FC } from 'react'
import { StlViewer } from 'react-stl-viewer'

type Props = {
  url: string
}

export const ModelViewer: FC<Props> = ({ url }) => (
  <StlViewer
    style={{
      width: '100%',
      height: '400px',
      top: 0,
      left: 0,
    }}
    floorProps={{
      gridLength: 300,
      gridWidth: 300,
    }}
    modelProps={{
      color: 'teal',
      positionX: 150,
      positionY: 150,
    }}
    orbitControls
    shadows
    url={url}
  />
)
