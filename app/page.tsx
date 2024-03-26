export default function Home() {
  return (
    <main className="relative mt-10">
      {/* <section className="relative  border-[#EBEBEB] border-[0.5px] box-border flex flex-row items-center p-20">
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="flex flex-col space-y-2">
            <h1>
              Hey there, I’m Paolo ☻, a Product Designer + Software Engineer. I
              design and build digital products that are simple, intuitive, and
              delightful to use.
            </h1>
            <p>
              I’m currently working at <a href="#">Lattice</a> as a Product
              Designer and Engineer. I’m also a part-time student at{" "}
              <a href="#">Harvard University</a>, where I’m pursuing a degree in
              Computer Science.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="relative py-24 md:py-[136px] border-[#EBEBEB] border-[0.5px] box-border">
        <div className="border-gray-1000 bg-muted-foreground h-[5px] w-[5px] absolute z-10 left-[-3px] top-[-3px]"></div>
        <div className="border-gray-1000 bg-muted-foreground h-[5px] w-[5px] absolute z-10 right-[-3px] top-[-3px]"></div>
        <div className="border-gray-1000 bg-muted-foreground h-[5px] w-[5px] absolute z-10 bottom-[-3px] left-[-3px]"></div>
        <div className="border-gray-1000 bg-muted-foreground h-[5px] w-[5px] absolute z-10 bottom-[-3px] right-[-3px]"></div>
      </section> */}
    </main>
  )
}

// import React from "react"

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  )
}

// <div>
//         <img
//           src="https://github-readme-stats.vercel.app/api/pin/?username=PaoloJN&repo=paolonessim.com"
//           alt="Readme Card"
//         />
//       </div>

//       <img
//         src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=donut-vertical"
//         alt="Top Langs"
//         width={100}
//         height={100}
//       />

//       <img
//         src="https://github-readme-streak-stats.herokuapp.com/?user=PaoloJN"
//         alt="PaoloJN's Streak"
//       />
