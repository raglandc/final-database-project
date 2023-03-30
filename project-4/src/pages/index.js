import Layout from '@/components/Layout'
import SideBar from '@/components/SideBar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className='grid grid-cols-12 gap-4'>
          <aside className='col-span-3 bg-teal-700 h-screen'>
            <SideBar/>
          </aside>
          <section className='col-start-4 col-end-13'>
            main
          </section>
        </main>
      </Layout>
    </>
  )
}
