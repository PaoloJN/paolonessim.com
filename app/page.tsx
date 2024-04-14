export default function Home() {
  return (
    <main className="relative mt-10">
      <AboutCard />
    </main>
  )
}

function AboutCard() {
  return (
    <div className="flex flex-col justify-center text-xs text-black rounded-xl max-w-[352px]">
      <div className="flex flex-col justify-center w-full bg-white rounded-xl">
        <div className="flex flex-col p-2.5 w-full rounded-xl border-[0.5px] border-solid border-black border-opacity-20">
          <div className="flex gap-5 justify-between leading-[100%]">
            <span>About</span>
            <span className="text-black/40">Paolo Nessim</span>
          </div>
          <div className="shrink-0 mt-2.5 border-b border-solid border-black border-opacity-20" />
          <div className="mt-5 leading-4 text-balance">
            Hello. I’m Isabella Clarke, a visionary Brand Founder hailing from
            the dynamic city of London. With a deep understanding of the power
            of branding, I am dedicated to creating compelling brand experiences
            that resonate with audiences and drive meaningful connections. Let’s
            embark on a transformative journey together.
          </div>
        </div>
      </div>
    </div>
  )
}
