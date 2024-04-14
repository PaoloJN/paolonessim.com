export function SiteHeader() {
  return (
    <div className="flex gap-5 justify-between items-start pb-5 w-full text-xs leading-3 text-black border-b border-solid border-black border-opacity-20 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4 justify-center">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 w-10 aspect-square"
        />
        <div className="flex flex-col my-auto">
          <div>Isabella Clarke</div>
          <div className="mt-1">Founder Arktis</div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-3.5 py-2 mt-1.5 bg-neutral-100 rounded-[30px]">
        <div className="flex flex-col justify-center px-3.5 py-2 border border-solid border-black border-opacity-20 rounded-[30px]">
          <div className="flex gap-5 justify-between">
            <div>Buy Template</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b266d5461bcd5dc75a00e483a0ac83593a2b8dad9c052eea4a6d0110c40f51?"
              className="shrink-0 my-auto aspect-square w-[7px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
