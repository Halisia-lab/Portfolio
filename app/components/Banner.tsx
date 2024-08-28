type ProjectProps = {
  logoPath: string;
  title: string;
}

export const Banner = ({ logoPath, title }: ProjectProps) => {
  return (
    <div className="flex row p-12 items-center space-x-6">
      <img src={logoPath} className="w-14 md:w-28" />
      <div className="text-white font-bold uppercase text-md md:text-2xl">
        {title}
      </div>
    </div>
  )
}