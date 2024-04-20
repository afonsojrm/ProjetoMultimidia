import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { VideoProvider } from '@/context/VideoContext'
import { ListVideos } from '@/components/ListVideos'
import { Crown } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'REIdismam',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-300 text-slate-600 font-extrabold`}>
        <VideoProvider>
          <main className="flex flex-col">
            <header className="flex items-center p-5 h-16 w-full border-b bg-slate-600 border-slate-600 text-white">
              <h1 className='text-yellow-300'> REI </h1> 
              <h1> dismam </h1>
               <h1 className='text-yellow-300'><Crown/></h1>
            </header>
            <div className="grid grid-cols-[1fr_300px] p-5 gap-5">
              {children}
              <aside>
                <ListVideos/>
              </aside>
            </div>
          </main>
        </VideoProvider>
      </body>
    </html>
  )
}
