import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
	<h1>Now this page is mine. I can do everything in this page.</h1>
	<h2>
	  <Link href="/">Back to home</Link>
	</h2>
   </>
  );
}