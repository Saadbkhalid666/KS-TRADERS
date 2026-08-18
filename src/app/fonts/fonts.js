import localFont from "next/font/local"
import { Inter, Sansation } from "next/font/google"

export const melfira = localFont({
    src:"./melfira.ttf"
  })

export const inter = Inter({
  weight:"300",
  display:"auto"
})

export const sansation = Sansation({
  weight:"300"
})