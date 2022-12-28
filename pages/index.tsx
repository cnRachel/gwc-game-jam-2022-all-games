import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import Masonry from 'react-masonry-css';
import classNames from 'classnames'

import game1 from '../public/game1.png'
import game2 from '../public/game2.png'
import game3 from '../public/game3.png'
import game4 from '../public/game4.png'
import game5 from '../public/game5.png'
import game6 from '../public/game6.png'
import game7 from '../public/game7.png'
import game8 from '../public/game8.png'
import game9 from '../public/game9.png'
import game10 from '../public/game10.png'


const inter = Inter({ subsets: ['latin'] })

const tabs = [
  {
    key: 'all',
    display: 'All Games'
  },
  {
    key: 'code.org',
    display: 'Code.org'
  },
  {
    key: 'scratch',
    display: 'Scratch'
  }
]

const images = [

]

export default function Home() {
  return (
    <div className = "h-full bg-black overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className ="fixed bg-stone-900 top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className = "uppercase text-lg font-medium">Girls Who Code Game Jam</span>
        <Link href="#" className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90">Get in Touch</Link>
        
      </header>

      <main className = "pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">

              {tabs.map(tab => (
                <Tab key={tab.key} className="p-2">
                  {({selected}) => (<span className={classNames ("uppercase text-lg", selected ? 'text-white' : 'text-stone-600')}>{tab.display}</span>)}
                </Tab>
              ))}

            </Tab.List>
            <Tab.Panels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry breakpointCols={2} className='flex gap-2' columnClassName=''>

                  <Image src={game1} alt="placeholder" className="my-4"/>
                  <Image src={game2} alt="placeholder" className="my-4"/>
                  <Image src={game3} alt="placeholder" className="my-4"/>
                  <Image src={game4} alt="placeholder" className="my-4"/>
                  <Image src={game5} alt="placeholder" className="my-4"/>
                  <Image src={game6} alt="placeholder" className="my-4"/>
                  <Image src={game7} alt="placeholder" className="my-4"/>
                  <Image src={game8} alt="placeholder" className="my-4"/>
                  <Image src={game9} alt="placeholder" className="my-4"/>
                  <Image src={game10} alt="placeholder" className="my-4"/>



                  {/* <img src="/game-andrea.png" alt="andrea's game" className="my-2"/>
                  <img src="/game-avneet.png" alt="avneet's game" className="my-2"/>
                  <img src="/game-victoria.png" alt="victoria's game" className="my-2"/>
                  <img src="/game-yen.png" alt="yen's game" className="my-2"/> */}

                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Code.org</Tab.Panel>
              <Tab.Panel>Scratch</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        
      </main>

      <footer className="h-[90px] flex justify-center items-center text-lg font-medium">
        <p>phhsgirlswhocode@gmail.com</p>
      </footer>
    </div>
  );
}
