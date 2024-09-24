type ProjectProps = {
  logoPath: string;
  title: string;
}

export const Banner = ({ logoPath, title }: ProjectProps) => {
  return (
    <div className="flex row px-12 pt-12 items-center space-x-6">
      <img src={logoPath} className="w-14 md:w-28" />
      <div className=" font-serif uppercase text-lg md:text-[40px]">
        {title}
      </div>
    </div>
  )
}