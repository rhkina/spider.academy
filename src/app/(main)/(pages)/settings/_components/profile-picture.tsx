import React from 'react'

type Props = {}

const ProfilePicture = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg text-foreground">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center"></div>
    </div>
  )
}

export default ProfilePicture
