import * as React from "react"
import Image from "next/image"
import checkMarkIcon from "@/public/card/check-mark.png"

import { Button } from "@/registry/UNSW/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export function EnquirySubmittedCard() {
  return (
    <Card className="mx-auto flex max-w-md flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 text-center shadow-sm">
      <div className="flex w-full items-center justify-center">
        {/* Replace 'img' with 'Image' if using Next.js */}
        <Image src={checkMarkIcon} alt="Checkmark" width={50} height={50} />
      </div>
      <CardTitle className="my-2 mt-4 text-lg font-semibold">
        Enquiry Submitted
      </CardTitle>
      <CardContent className="mb-4 mt-4">
        <p className="text-sm">
          Thank you for your enquiry. We will get back to
          <br /> you as soon as we can.
        </p>
      </CardContent>
      <Button className="mt-2 px-4 py-2">Return to Page</Button>
    </Card>
  )
}

export default EnquirySubmittedCard
