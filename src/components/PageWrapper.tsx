import { useDocumentTitle } from "src/hooks";
import type { Children } from "src/types";

type Props = {
  children: Children;
  title: string;
  documentTitle?: string;
  titleClass?: string;
};

export default function PageWrapper({
  children,
  title,
  documentTitle,
  titleClass = "",
}: Props) {
  useDocumentTitle(`${documentTitle ?? title}`);

  return (
    <div
      className="flex flex-column items-center w-100 pb3"
      style={{ minHeight: "70vh" }}
    >
      <h1 className={`page-title-text tc ${titleClass}`}>{title}</h1>
      {children}
    </div>
  );
}
