import { useRouter } from 'next/router'
import { NextResponse } from 'next/server'
import path from 'path'

const Redirect: React.FunctionComponent<{ target: string }> = ({
  target = 'index',
}) => {
  const { pathname } = useRouter()

  NextResponse.redirect(path.join('/website', pathname, target))
  return <>redirecting...</>
}

export default Redirect
