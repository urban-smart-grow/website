import Link from 'next/link'
import { FC } from 'react'
import { StlViewer, StlViewerProps } from 'react-stl-viewer'
import { RecordTable } from './RecordTable'

type Props = {
  url: string
  showDownloadLink?: boolean
  printInstructions?: Record<string, string>
} & Partial<StlViewerProps>

export const defaultPrintInstructions = {
  'Nozzle Size': '0.4mm',
  'Layer Height': '0.25mm',
  'Perimeters': 2,
  'Infill': '20%',
  'Material': 'PETG',
  'Machine': 'Prusa Mini +',
}

export const ModelViewer: FC<Props> = ({
  url,
  showDownloadLink,
  printInstructions,
  ...props
}) => (
  <>
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
      {...props}
    />
    <div className='flex justify-evenly'>
      {printInstructions && (
        <div>
          <h3 className='text-2xl my-2'>Print Instructions</h3>
          <RecordTable data={printInstructions} />
        </div>
      )}
      {showDownloadLink && (
        <Link
          download
          href={url}
          className='my-2 text-2xl underline text-blue-600 block'>
          Download
        </Link>
      )}
    </div>
  </>
)
