import Image from 'next/image'
import Date from '../components/date'

export default function AvatarWithDate({ name, picture, date }: any) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={picture ? picture : "/vercel.svg"}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="wrapper">
        <div className="text-xl font-bold">{name}</div>
        <Date dateString={date} />
      </div>
    </div>
  )
}