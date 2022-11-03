
export default function Footer(){
    const currentYear = new Date()
    return <>
        <footer>
          <a
              href="mailto:coffe67.na@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
          >
              @coffe67Chicho | {currentYear.getFullYear()}
          </a>
      </footer>
    </>
}