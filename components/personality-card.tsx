import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// inspired by https://dariuslukasukas.vercel.app/ love the design remember to credit him

interface PersonalityProps {
  className?: string;
}

export default function Personality({ className, ...props }: PersonalityProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Personality</CardTitle>
        <CardDescription>Paolo Nessim</CardDescription>
      </CardHeader>
      {/* <CardContent className="p-0 flex flex-col justify-end h-[100%]">
        <div className="group/card h-[20rem] overflow-hidden rounded-2xl border p-0.5 text-card-foreground shadow relative order-5 dark:bg-neutral-950/60 md:col-span-2 lg:order-4">
          <div className="absolute mt-[10rem] flex h-full w-full scale-75 items-center justify-center md:scale-90">
            <div className="absolute z-10 h-[52rem] w-[52rem] rounded-full border-2 border-dashed border-neutral-400/10 dark:border-neutral-800/10 dark:bg-neutral-900/10" />
            <div className="absolute z-10 h-[45rem] w-[45rem] rounded-full border-2 border-dashed border-neutral-400/20 bg-neutral-200/5 dark:border-neutral-800/20 dark:bg-neutral-900/5" />
            <div className="absolute z-10 h-[38rem] w-[38rem] rounded-full border-2 border-dashed border-neutral-400/40 bg-neutral-200/10 dark:border-neutral-800/40 dark:bg-neutral-900/20" />
            <div className="absolute z-10 h-[31rem] w-[31rem] rounded-full border-2 border-dashed border-neutral-400/60 bg-neutral-200/20 dark:border-neutral-800/60 dark:bg-neutral-900/25" />
            <div className="absolute z-10 h-[24rem] w-[24rem] rounded-full border-2 border-dashed border-neutral-400/70 bg-neutral-200/40 dark:border-neutral-800/80 dark:bg-neutral-900/40" />
            <div className="absolute z-10 h-[17rem] w-[17rem] rounded-full border-2 border-dashed border-neutral-400/80 bg-neutral-200/50 dark:border-neutral-800/80 dark:bg-neutral-900/50" />
            <div className="absolute z-10 h-[10rem] w-[10rem] rounded-full border-2 border-dashed border-neutral-400 bg-neutral-300/50 dark:border-neutral-800 dark:bg-neutral-900" />
            <div className="absolute bottom-0 z-30 h-[11rem] w-full scale-150 bg-white blur-2xl dark:bg-neutral-950/95" />
            <div className="group/cloud absolute z-30 mb-[11.5rem] mr-[5rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
              <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
                <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                  Creative
                </div>
              </div>
              <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/70 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400" />
              <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white" />
            </div>
            <div className="group/cloud z-30 mb-[14rem] ml-[12.6rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
              <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
                <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                  Engineer
                </div>
              </div>
              <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/70 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400" />
              <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white" />
            </div>
            <div className="group/cloud absolute z-30 mb-[22.7rem] mr-[23.7rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
              <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
                <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                  Strategic
                </div>
              </div>
              <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400" />
              <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white" />
            </div>
            <div className="group/cloud absolute z-30 mb-[28rem] ml-[18rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
              <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
                <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                  Resilient
                </div>
              </div>
              <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400" />
              <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white" />
            </div>
            <div className="group/cloud absolute z-30 mb-[22.9rem] flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
              <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
                <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                  Visionary
                </div>
              </div>
              <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400" />
              <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white" />
            </div>
          </div>
        </div>
      </CardContent> */}
      <CardContent className="relative mt-auto h-[10rem] overflow-hidden md:col-span-2 lg:order-4">
        <div className="absolute mt-[7.7rem] flex h-full w-full scale-[0.7] items-center justify-center">
          {/* <div className="absolute z-10 h-[52rem] w-[52rem] rounded-full border-2 border-dashed border-neutral-400/10 dark:border-neutral-800/10 dark:bg-neutral-900/10"></div> */}
          {/* <div className="absolute z-10 h-[45rem] w-[45rem] rounded-full border-2 border-dashed border-neutral-400/20 bg-neutral-200/5 dark:border-neutral-800/20 dark:bg-neutral-900/5"></div> */}
          <div className="absolute z-10 h-[38rem] w-[38rem] rounded-full border-2 border-dashed border-neutral-400/40 bg-neutral-200/10 dark:border-neutral-800/40 dark:bg-neutral-900/20"></div>
          <div className="absolute z-10 h-[31rem] w-[31rem] rounded-full border-2 border-dashed border-neutral-400/60 bg-neutral-200/20 dark:border-neutral-800/60 dark:bg-neutral-900/25"></div>
          <div className="absolute z-10 h-[24rem] w-[24rem] rounded-full border-2 border-dashed border-neutral-400/70 bg-neutral-200/40 dark:border-neutral-800/80 dark:bg-neutral-900/40"></div>
          <div className="absolute z-10 h-[17rem] w-[17rem] rounded-full border-2 border-dashed border-neutral-400/80 bg-neutral-200/50 dark:border-neutral-800/80 dark:bg-neutral-900/50"></div>
          <div className="absolute z-10 h-[10rem] w-[10rem] rounded-full border-2 border-dashed border-neutral-400 bg-neutral-300/50 dark:border-neutral-800 dark:bg-neutral-900"></div>
          <div className="absolute bottom-0 z-30 h-[11rem] w-full scale-150 bg-white blur-2xl dark:bg-neutral-950/95"></div>
          <div className="group/cloud absolute z-30 mb-[16rem] mr-[10.5rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
            <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
              <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                Creative
              </div>
            </div>
            <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/70 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400"></div>
            <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white"></div>
          </div>
          <div className="group/cloud z-30 mb-[16rem] ml-[10.6rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
            <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
              <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                Engineer
              </div>
            </div>
            <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/70 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400"></div>
            <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white"></div>
          </div>
          <div className="group/cloud absolute z-30 mb-[22.7rem] mr-[23.7rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
            <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
              <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                Strategic
              </div>
            </div>
            <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400"></div>
            <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white"></div>
          </div>
          <div className="group/cloud absolute z-30 mb-[28rem] ml-[18rem] flex select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
            <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
              <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                Resilient
              </div>
            </div>
            <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400"></div>
            <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white"></div>
          </div>
          <div className="group/cloud absolute z-30 mb-[22.9rem] flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out">
            <div className="rounded-xl border border-neutral-400 bg-neutral-100 p-2 text-sm group-hover/cloud:border-neutral-700 group-hover/cloud:border-b-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/cloud:border-b-neutral-600">
              <div className="cursor-default font-medium text-neutral-600 transition-colors duration-500 ease-in-out group-hover/cloud:text-neutral-600 dark:text-neutral-400 dark:group-hover/cloud:text-neutral-100">
                Visionary
              </div>
            </div>
            <div className="border-1 h-2 w-2 rounded-full border-neutral-100 bg-neutral-400 ring-offset-2 transition-all duration-200 ease-in-out group-hover/cloud:bg-black group-hover/cloud:ring-1 group-hover/cloud:ring-neutral-600 dark:bg-neutral-800/60 dark:ring-neutral-600 dark:ring-offset-neutral-800 dark:group-hover/cloud:bg-neutral-100 dark:group-hover/cloud:ring-1 dark:group-hover/cloud:ring-neutral-400"></div>
            <div className="absolute mt-11 h-7 w-7 scale-125 rounded-full blur-md transition will-change-transform dark:group-hover/cloud:bg-white"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
