import { Link } from "react-router-dom";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/shareIcon";
import { Button } from "./ButtonUi";

interface Props {
  title: string;
  link: string;
  tag?: string[];
  type: "yt" | "x" | "git";
  onClick?: () => void;
}

export const Card = ({ title, link, tag = [], type, onClick }: Props) => {
  // Convert normal YouTube links to embeddable ones
  const getYouTubeEmbed = (url: string) =>
    url.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/");

  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-xl bg-white text-black shadow-md overflow-hidden transition-all">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="font-semibold text-sm md:text-base lg:text-lg truncate">{title}</h2>
        <div className="flex gap-2">
          <ShareIcon size="md" />
          <div onClick={onClick}>
            <DeleteIcon />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {type === "yt" && (
          <iframe
            className="w-full rounded-lg aspect-video"
            src={getYouTubeEmbed(link)}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {type === "x" && (
          <>
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </>
        )}

        {type === "git" && (
          <iframe
            src={link}
            className="w-full h-64 rounded-md border"
            title="Embedded content"
          ></iframe>
        )}
       <Link to={link} target="_blank" rel="noopener noreferrer" ><Button size="sm" variant="primary" text="Link" className="mt-2"></Button></Link>
      </div>

      {/* Tags */}
      {tag.length > 0 && (
        <div className="px-3 pb-3 flex flex-wrap gap-2">
          {tag.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-full"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
