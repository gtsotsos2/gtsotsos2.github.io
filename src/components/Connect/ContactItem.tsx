interface ContactProps {
  icon: string;
  link: string;
  url: string;
  type: string;
}

export const ContactItem = ({ icon, link, url, type }: ContactProps) => {
  return (
    <div className="mb-5">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="w-6 h-6 mr-6 inline-block" src={icon} alt={type} />
        <span className="align-middle inline-block">{link}</span>
      </a>
    </div>
  );
};
