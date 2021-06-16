export default function PictureProject({ src, num, href, alt }) {
  return (
    <a
      target="_blanc"
      style={{ "--i": num }}
      href={href}
      className="picture-project"
    >
      <img src={src} alt={alt} />
    </a>
  );
}
