import ProfileForm from '@/components/forms/profile-form'
import PageNavbar from '@/components/global/page-navbar'
import React from 'react'

type Props = {}

const SettingsPage = (props: Props) => {
  // WIP: Wire up Profile Picture
  return (
    <>
      <PageNavbar title="Settings" />

      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-foreground/70">
            Add or update your information
          </p>
        </div>
        <ProfileForm />
      </div>
    </>
  )
}

export default SettingsPage
