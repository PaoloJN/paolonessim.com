interface FooterProps {
  className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className={className} {...props}>
      <div className="flex w-full items-center justify-between border-t-[0.5px] border-solid border-black border-opacity-15 pt-[15px] text-[11.5px] leading-3 text-black dark:border-white dark:border-opacity-10 dark:text-white">
        <span className="opacity-30">© Copyright {year}</span>
        <span className="opacity-30">Created by Paolo Nessim</span>
      </div>
    </footer>
  );
}
