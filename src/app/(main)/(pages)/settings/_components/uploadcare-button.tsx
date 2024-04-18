'use client'

import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload?: any
}

LR.registerBlocks(LR)

function UploadCareButton({}: Props) {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await HiOutlineUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }

    ctxProviderRef.current?.addEventListener(
      'file-upload-success',
      handleUpload
    )
  })

  return <div>UploadCareButton</div>
}

export default UploadCareButton
