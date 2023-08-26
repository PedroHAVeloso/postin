type ProfilePictureComponentProps = {
  href?: string,
  size: number,
  pictureUrl: string,
  className?: string,
  children?: React.ReactNode,
}

export default function ProfilePictureComponent(props: ProfilePictureComponentProps) {
  const alt = "Profile";

  let style;

  props.className == null ? style = { width: props.size, height: props.size } : null;


  if (props.href != null) {
    return <a href={props.href} className="flex gap-[6px] items-center justify-between">
      <img className={"rounded-full " + props.className} style={style}
        src={props.pictureUrl}
        alt={alt} />
      {props.children}
    </a>
  }

  return <img className={"rounded-full " + props.className} style={style}
    src={props.pictureUrl}
    alt={alt} />
}