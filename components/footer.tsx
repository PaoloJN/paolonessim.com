interface FooterProps {
  className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={className} {...props}>
      <div className="flex w-full items-center justify-between border-t-[0.5px] border-solid border-black border-opacity-15 pt-[15px] text-[11.5px] leading-3 text-black">
        <span className="opacity-30">© 2024 FF Widgets</span>
        <span className="opacity-30">Created by Paolo Nessim</span>
      </div>
    </footer>
  );
}
