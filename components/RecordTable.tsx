import React from 'react'

type Props = {
  data: Record<string, any>
}

export const RecordTable = ({ data }: Props) => {
  return (
    <table>
      {Object.keys(data).map((key) => (
        <tr key={key}>
          <th className='text-right pr-2'>{key}:</th>
          <td className='text-left'>{data[key]}</td>
        </tr>
      ))}
    </table>
  )
}
