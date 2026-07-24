import { PROFILE } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p>Senior Mobile App Developer · {PROFILE.experience} Years</p>
      </div>
    </footer>
  );
}
