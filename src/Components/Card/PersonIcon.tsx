type PersonIcon = {
  className: string;
  src:string;
};
const PersonIcon = (props: PersonIcon) => {
  return <img src={props.src} className={props.className} />;
};

export default PersonIcon;