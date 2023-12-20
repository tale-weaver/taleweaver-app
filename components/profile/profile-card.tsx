import Image from "next/image";
import { Badge } from "../ui/badge";

function formatDateTime(dateTimeStr: string) {
  const date = new Date(dateTimeStr.replace(" ", "T"));
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

const ProfileCard = ({
  title = "",
  description = "",
  image = "",
  time = "",
  metric = 0,
  postfix = "",
}) => {
  const formattedTime = formatDateTime(time);
  return (
    <div className="w-full">
      <div className="py-4">
        <p className="text-sm text-gray-500">{formattedTime}</p>
        <div className="flex flex-row justify-between items-start mt-2 h-[208px] border-b-[1px]">
          <div className="w-7/12 flex flex-col justify-between mr-4 h-full">
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-800 pb-2">
                {title}
              </p>
              <p className="text-gray-700 text-base font-serif h-[48px] w-full overflow-hidden text-ellipsis">
                {description}
              </p>
            </div>
            <Badge
              variant="secondary"
              className="block text-xs w-[110px] text-center px-3 font-light text-gray-600 mb-16 h-6"
            >
              Got {metric} {postfix}
            </Badge>
          </div>
          <div className="flex flex-col justify-center items-end">
            <Image
              src={image}
              alt="image"
              width={112}
              height={112}
              className="h-[112px] w-[112px] object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
