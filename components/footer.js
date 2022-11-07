
export default function Footer(){
    const currentYear = new Date()
    return <>
        <footer className="bg-black text-center">
          <a
              href="mailto:coffe67.na@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
          >
              Narciso Avalos | {currentYear.getFullYear()}
          </a>
      </footer>
    </>
}