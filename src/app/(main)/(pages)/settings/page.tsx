import ProfileForm from '@/components/forms/profile-form'
import PageNavbar from '@/components/global/page-navbar'
import React from 'react'
import ProfilePicture from './_components/profile-picture'

type Props = {}

const SettingsPage = (props: Props) => {
  // WIP: Wire up Profile Picture
  const user = {
    name: 'Rubens Kina',
    email: 'rhkina@gmail.com',
  }

  function onUpdate() {
    return
  }

  return (
    <>
      <PageNavbar title="Settings" className="sticky top-0 z-[10]" />

      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-foreground/70">
            Add or update your information
          </p>
        </div>
        <ProfilePicture></ProfilePicture>
        <ProfileForm user={user} onUpdate={onUpdate()} />
      </div>
    </>
  )
}

export default SettingsPage
