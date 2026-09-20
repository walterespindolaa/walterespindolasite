export function Footer() {
  return (
    <footer className="bg-ink text-paper px-5 md:px-10 pt-16 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <ul className="space-y-1 text-lg">
          <li><a className="link" href="mailto:walterjoose@gmail.com">walterjoose@gmail.com</a></li>
          <li><a className="link" href="https://www.instagram.com/walterespindola_" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a className="link" href="https://www.linkedin.com/in/walter-espindola-885490121/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
        <span className="text-sm text-paper/50">© {new Date().getFullYear()} Walter Espindola · Santa Catarina</span>
      </div>
    </footer>
  );
}
