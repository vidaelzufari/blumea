import { MagneticButton } from '@/components/motion/MagneticButton';
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 / A DIFFERENT DIRECTION</span>
      <h1>
        Nothing here.
        <br />
        <em>Plenty ahead.</em>
      </h1>
      <p>This page may have moved, or the address may be incomplete.</p>
      <MagneticButton href="/">BACK TO BLUMEA</MagneticButton>
    </main>
  );
}
