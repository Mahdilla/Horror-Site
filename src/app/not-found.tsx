import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-wrap page-heading">
      <span className="eyebrow">404 / OUTSIDE THE ARCHIVE</span>
      <h1>
        Nothing here.
        <br />
        <em>Or so it seems.</em>
      </h1>
      <p>This page isn’t in the collection.</p>
      <Link className="button button-light" href="/">
        Return to the archive →
      </Link>
    </div>
  );
}
