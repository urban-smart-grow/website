import { DiscordButton } from './DiscordButton'

export const aerotower_model = '1108338231600238705'
export const aerotower_comments = '1108118045223813232'
export const aerotower_electronics = '1108338337086980127'
export const solar_module = '1110634927315238946'

const discord_server_id = '1107347850809053184'

interface Props {
  server?: string | number
  channel?: string | number
}

export const AeroTowerDiscordWidget = ({
  server = discord_server_id,
  channel = aerotower_comments,
}: Props) => {
  return (
    <>
      <iframe
        src={`https://e.widgetbot.io/channels/${server}/${channel}`}
        className='w-full h-[66vh]'
      />
      <DiscordButton />
    </>
  )
}
