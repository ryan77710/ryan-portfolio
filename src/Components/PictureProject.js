export default function PictureProject({ src, href, alt }) {
  return (
    <a target="_blanc" href={href} className="picture-project">
      <img src={src} alt={alt} />
    </a>
  );
}
