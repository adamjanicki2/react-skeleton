import Link from "src/components/Link";

export default function Footer() {
  return (
    <footer className="pv5 ph2 flex bt b--moon-gray bw1 items-center justify-center w-100">
      <p className="fw5 f5 tc">
        Est. 2023 Built from scratch by{" "}
        <Link external to="https://adamjanicki.xyz">
          Adam
        </Link>
      </p>
    </footer>
  );
}
